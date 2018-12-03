var pmc = pmc || {};
//var ParseTreeListener = require('./tree/Tree').ParseTreeListener;

pmc.AntlrParserListener = class AntlrParserListener{
    
    constructor(parser) {
    	//ParseTreeListener.call(this);
        this.parser = parser;
    }


    enterEveryRule(ctx) {
        var opa=document.getElementById("outputarea");
        opa.rows++;
    	opa.value+="enter   " + this.parser.ruleNames[ctx.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text+"\n";
    	opa.scrollTop = opa.scrollHeight;
    	var event = new Event('change');

    	opa.dispatchEvent(event);
    };

    visitTerminal( node) {
    	//console.log("consume " + node.symbol + " rule " + this.parser.ruleNames[this.parser._ctx.ruleIndex]);
    };

    exitEveryRule(ctx) {
    	//console.log("exit    " + this.parser.ruleNames[ctx.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
    };

}