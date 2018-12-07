//var require = Tarp.require;
//var antlr4 = require({main: 'antlr4/index'});

  function handleFileSelect(f) {
      const date = new Date(f.lastModified);
      /*output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModified ? date.toLocaleDateString() : 'n/a',
                  '</li>');*/
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
                viewStylish(tokens, lexer, parser, tree);
                resolve("completed.");
            }
            fileReader.readAsText(f);
        }).then((result)=>{
          console.log(result);}, (err)=>{console.log('err: '+err);
        });
  }
