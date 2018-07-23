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
            fileReader.onload = function (e) {
                
                //document.getElementById('exampleEditor').innerText =fileReader.result;
                localStorage.setItem( 'memoriesdata',  fileReader.result );
                //console.log(localStorage.getItem('memoriesdata'));
                var stream = antlr4.CharStreams.fromString(localStorage.getItem('memoriesdata'));
                var lexer = new scad.SCADLexer.SCADLexer(stream);
                var tokens = new antlr4.CommonTokenStream(lexer);
            var parser = new scad.SCADParser.SCADParser(tokens);
            parser.buildParseTrees = true;
            
            var tree = parser.scad();
                viewStylish(evt, tokens, lexer, parser, tree);
            }
            fileReader.readAsText(f);
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
