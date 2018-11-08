var antlr4 = require('antlr4/index');
var scad = require('scad/index');

  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      const date = new Date(f.lastModified);
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModified ? date.toLocaleDateString() : 'n/a',
                  '</li>');
           //Initialize the FileReader object to read the scad file
            var fileReader = new FileReader();
        let promise = new Promise((resolve, reject)=>{
            fileReader.onload = function (e) {
                var worker = new Worker("AntlrWorker.js");
                
            var stream = antlr4.CharStreams.fromString(fileReader.result);
            var lexer = new scad.SCADLexer.SCADLexer(stream);
            var tokens = new antlr4.CommonTokenStream(lexer);
            var parser = new scad.SCADParser.SCADParser(tokens);
            parser.buildParseTrees = true;
            var listener=new pmc.AntlrParserListener(parser);
            parser.addParseListener(listener);
            var tree = parser.scad();
                viewStylish(evt, tokens, lexer, parser, tree);
                resolve("completed.");
            }
            fileReader.readAsText(f);
        }).then((result)=>{
          console.log(result);}, (err)=>{console.log('err: '+err);
        });
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
