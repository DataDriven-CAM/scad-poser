/* global ATNState */
ATNGraph = class ATHPGraph{
    
    constructor(){
        
    }
    
    build(rule){
      var canvas = document.getElementById('canvasEditor');
        var atnGraph = document.createElement('div');
        //var atnGraph = document.getElementById('graph');
        atnGraph.id = "atngraph";
        atnGraph.style.width = canvas.parentElement.style.width;
        atnGraph.style.height =  canvas.parentElement.style.height;
        atnGraph.tabIndex = '3';
    //atnGraph.setAttribute("background-color", "rgba(255,255,255,1.0)");
    //atnGraph.setAttribute("background", "rgba(255,255,255,0.0)");
        //atnGraph.style.backgroundColor = '#0FFFF';
        //atnGraph.style.color = '#000';
        atnGraph.position = 'absolute';
        atnGraph.zIndex = '8';
        //atnGraph.style.zIndex = '2';
        //atnGraph.style.animation = 'blinker 1s linear infinite';
        atnGraph.style.left = '10px';
        atnGraph.style.top = '8px';
        //atnGraph.style.marginTop ='200px';
        //atnGraph.style.marginTop = (-(10+velvet.rows*18/2))+'px';
        //atnGraph.style.borderColor = "blue";
        atnGraph.contentEditable;
        //atnGraph.opacity = 0.2;
        var content = document.createTextNode("<YOUR_CONTENT>");
//atnGraph.appendChild(content);
      canvas.parentElement.appendChild(atnGraph);
        
    var cy = cytoscape({
      container: atnGraph // container to render in
      ,
          style: cytoscape.stylesheet()
    .selector('node')
      .css({
          'width' : '10',
          'height' : '10',
          'shape': 'data(faveShape)',
        'content': 'data(name)',
        'line-color': 'data(faveColor)',
        'font-size' : '12'
      })
    .selector('edge')
      .css({
        'content': 'data(name)',
        'width': 2,
        'line-color': '#ddd',
        'font-size' : '24'
      })
    .selector('.highlighted')
      .css({
        'background-color': '#61bffc',
        'line-color': '#61bffc',
        'target-arrow-color': '#61bffc',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.5s'
      }),
          hideLabelsOnViewport: false,
          ready: function(){ console.log('ready') }

    });
              var startState=velvet.parser._interp.atn.ruleToStartState[rule];
              console.log(startState);
              console.log(startState.stateNumber.toString());
                    var shape=  'ellipse';
              cy.add({
                  group: "nodes",
                  data: { id: startState.stateNumber.toString(), name: startState.stateNumber.toString(), faveColor: "blue", faveShape: 'ellipse' }
              });
              var stopState=velvet.parser._interp.atn.ruleToStopState[rule];
              cy.add({
                  group: "nodes",
                  data: { id: stopState.stateNumber.toString(), name: stopState.stateNumber.toString(), faveColor: "blue", faveShape: 'ellipse' }
              });
              this.recurseATN(rule, cy, startState, startState.transitions[0], false);
                cy.resize();

var options ={
  name: 'atn',
// dagre algo options, uses default value on undefined
  nodeSep: undefined, // the separation between adjacent nodes in the same rank
  edgeSep: undefined, // the separation between adjacent edges in the same rank
  rankSep: undefined, // the separation between adjacent nodes in the same rank
  rankDir: 'LR', // 'TB' for top to bottom flow, 'LR' for left to right,
  ranker: undefined, // Type of algorithm to assign a rank to each node in the input graph. Possible values: 'network-simplex', 'tight-tree' or 'longest-path'
  minLen: function( edge ){ return 1; }, // number of ranks to keep between the source and target of the edge
  edgeWeight: function( edge ){ return 1; }, // higher weight edges are generally made shorter and straighter than lower weight edges

  // general layout options
  fit: true, // whether to fit to viewport
  padding: 30, // fit padding
  spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  nodeDimensionsIncludeLabels: false, // whether labels should be included in determining the space used by a node
  animate: false, // whether to transition the node positions
  animateFilter: function( node, i ){ return true; }, // whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  transform: function( node, pos ){ return pos; }, // a function that applies a transform to the final node position
  ready: function(){}, // on layoutready
  stop: function(){} // on layoutstop
  };
var layout = cy.elements().layout( options );
layout.run();
//document.getElementById('canvasEditor').style.display = "none";
//document.getElementById('cursor').style.display = "none";
cy.center();
    
    }
    
  recurseATN(rule, cy, startState, transition, inBlock){
    var edgeId=cy.edges().length+1;
    if(edgeId>=80)return;
    switch(transition.target.stateType){
      case ATNState.RULE_START:
        if(inBlock){
          var id="";
          for(var innerIndex in transition.target.stopState.transitions){
            if(transition.target.stopState.transitions[innerIndex].target.stateType===ATNState.BLOCK_END &&
                    transition.target.stopState.transitions[innerIndex].target.ruleIndex===rule){
              id=transition.target.stopState.transitions[innerIndex].target.stateNumber.toString();
              break;
            }
          }
          if(id.length>0){
            if(cy.getElementById(id).length===0)
            cy.add({
                group: "nodes",
                data: { id: id, name: id, faveColor: "blue", faveShape: 'ellipse' }
            });
             cy.add({
                group: "edges",
                data: { id: "e"+edgeId.toString(), source: startState.stateNumber.toString(), target: id, name: velvet.parser.ruleNames[transition.target.ruleIndex] }
            });
          }
          else{
          console.log(startState.stateNumber+" else"+transition.target.stateNumber);
          console.log("else trstartState");
          console.log(startState);
          if(transition.followState.stateType===ATNState.BASIC &&
                    transition.followState.ruleIndex===rule){
            if(cy.getElementById(transition.followState.stateNumber.toString()).length===0)
            cy.add({
                group: "nodes",
                data: { id: transition.followState.stateNumber.toString(), name: transition.followState.stateNumber.toString(), faveColor: "blue", faveShape: 'ellipse' }
            });
             cy.add({
                group: "edges",
                data: { id: "e"+edgeId.toString(), source: startState.stateNumber.toString(), target: transition.followState.stateNumber.toString(), name: velvet.parser.ruleNames[transition.ruleIndex] }
            });
            this.recurseATN(rule, cy, transition.followState, transition.followState.transitions[0], inBlock);
          }
          else{
            /*if(cy.getElementById(transition.target.stateNumber.toString()).length===0)
            cy.add({
                group: "nodes",
                data: { id: transition.target.stateNumber.toString(), name: transition.target.stateNumber.toString(), faveColor: "blue", faveShape: 'ellipse' }
            });
            cy.add({
                group: "edges",
                data: { id: "e"+edgeId.toString(), source: startState.stateNumber.toString(), target: transition.target.stateNumber.toString(), name: velvet.parser.literalNames[transition.label_] }
            });
            console.log("transition.target");
            //console.log(transition.target);
            recurseATN(rule, cy, transition.target, transition.target.transitions[0], false);
            */
          }
          }
        }
        else{
          if(cy.getElementById(transition.target.stateNumber.toString()).length===0)
          cy.add({
              group: "nodes",
              data: { id: transition.target.stateNumber.toString(), name: transition.target.stateNumber.toString(), faveColor: "blue", faveShape: 'ellipse' }
          });
          cy.add({
              group: "edges",
              data: { id: "e"+edgeId.toString(), source: startState.stateNumber.toString(), target: transition.target.stateNumber.toString(), name: velvet.parser.literalNames[transition.label_] }
          });
          console.log("transition.target");
          console.log(transition.target);
          recurseATN(rule, cy, transition.target, transition.target.transitions[0], false);
          
        }
        break;
        case ATNState.STAR_LOOP_BACK:
        case ATNState.PLUS_LOOP_BACK:
          console.log(startState.stateType+" LOOP_BACK "+transition.target.stateType);
        if(cy.getElementById(transition.target.stateNumber.toString()).length===0)
        cy.add({
            group: "nodes",
            data: { id: transition.target.stateNumber.toString(), name: transition.target.stateNumber.toString(), faveColor: "blue", faveShape: 'ellipse' }
        });
        cy.add({
            group: "edges",
            data: { id: "e"+edgeId.toString(), source: startState.stateNumber.toString(), target: transition.target.stateNumber.toString(), name: (transition.isEpsilon) ? "ε": velvet.parser.literalNames[transition.label_] }
        });
        edgeId++;
        if(cy.getElementById(transition.target.transitions[0].target.stateNumber.toString()).length===0)
        cy.add({
            group: "nodes",
            data: { id: transition.target.transitions[0].target.stateNumber.toString(), name: transition.target.transitions[0].target.stateNumber.toString(), faveColor: "blue", faveShape: 'ellipse' }
        });
        cy.add({
            group: "edges",
            data: { id: "e"+edgeId.toString(), source: transition.target.stateNumber.toString(), target: transition.target.transitions[0].target.stateNumber.toString(), name: (transition.target.transitions[0].isEpsilon) ? "ε": velvet.parser.literalNames[transition.target.transitions[0].label_] }
        });
          break;
        case ATNState.RULE_STOP:
        if(cy.getElementById(transition.target.stateNumber.toString()).length===0)
        cy.add({
            group: "nodes",
            data: { id: transition.target.stateNumber.toString(), name: transition.target.stateNumber.toString(), faveColor: "blue", faveShape: 'ellipse' }
        });
        cy.add({
            group: "edges",
            data: { id: "e"+edgeId.toString(), source: startState.stateNumber.toString(), target: transition.target.stateNumber.toString(), name: (transition.isEpsilon) ? "ε": velvet.parser.literalNames[transition.label_] }
        });
        break;
      case ATNState.PLUS_BLOCK_START:
      case ATNState.STAR_BLOCK_START:
        if(cy.getElementById(transition.target.stateNumber.toString()).length===0)
        cy.add({
            group: "nodes",
            data: { id: transition.target.stateNumber.toString(), name: transition.target.stateNumber.toString(), faveColor: "blue", faveShape: 'rectangle' }
        });
        cy.add({
            group: "edges",
            data: { id: "e"+edgeId.toString(), source: startState.stateNumber.toString(), target: transition.target.stateNumber.toString(), name: velvet.parser.literalNames[transition.label_] }
        });
        console.log(transition.target.stateType+" BLOCK_START "+transition.target.transitions.length);
       for(var outterIndex in transition.target.transitions){
          this.recurseATN(rule, cy, transition.target, transition.target.transitions[outterIndex], true);
       }
        break;
      case ATNState.STAR_LOOP_ENTRY:
        if(cy.getElementById(transition.target.stateNumber.toString()).length===0)
        cy.add({
            group: "nodes",
            data: { id: transition.target.stateNumber.toString(), name: transition.target.stateNumber.toString(), faveColor: "blue", faveShape: 'rectangle' }
        });
        cy.add({
            group: "edges",
            data: { id: "e"+edgeId.toString(), source: startState.stateNumber.toString(), target: transition.target.stateNumber.toString(), name: velvet.parser.literalNames[transition.label_] }
        });
        console.log("STAR_LOOP_ENTRY "+transition.target.transitions.length);
       for(var outterIndex in transition.target.transitions){
          this.recurseATN(rule, cy, transition.target, transition.target.transitions[outterIndex], false);
       }
        break;
      default:
        if(cy.getElementById(transition.target.stateNumber.toString()).length===0)
        cy.add({
            group: "nodes",
            data: { id: transition.target.stateNumber.toString(), name: transition.target.stateNumber.toString(), faveColor: "blue", faveShape: 'ellipse' }
        });
        cy.add({
            group: "edges",
            data: { id: "e"+edgeId.toString(), source: startState.stateNumber.toString(), target: transition.target.stateNumber.toString(), name: (transition.isEpsilon) ? "ε": velvet.parser.literalNames[transition.label_] }
        });
        this.recurseATN(rule, cy, transition.target, transition.target.transitions[0], inBlock);
      break;
    }
  }
  
    
}