var pmc = pmc || {};
var cnc = cnc || {};
pmc.cnc = cnc || {};


pmc.cnc.Generator = class Generator {
    constructor(tokens, tree) {
        this.tokens = tokens;
        this.tree = tree;

        this.Children = 1;
        this.Sphere = 2;
        this.Cube = 3;
        this.Cylinder = 4;
        this.Circle = 5;
        this.Square = 6;
        this.Polygon = 7;
        this.Translate = 8;
        this.Rotate = 9;
        this.Scale = 10;
        this.Resize = 11;
        this.Mirror = 12;
        this.Offset = 13;
        this.Hull = 14;
        this.Minkowski = 15;
        this.Union = 16;
        this.Difference = 17;
        this.Intersection = 18;
        this.Color = 19;
        this.Module = 20;
        this.Function = 21;
        this.Linear_extrude = 22;
        this.Rotate_extrude = 23;
        this.Surface = 24;
        this.Render = 25;
        this.Projection = 26;
        this.IntersectionFor = 27;
        this.For = 28;
        this.Import = 29;
        this.Use = 30;
        this.Polyhedron = 31;
        this.Text = 32;
        this.Echo = 33;
        this.Version = 34;
        this.If = 35;
        this.Else = 36;
        this.Variable = 37;
        this.Eq = 38;
        this.Underscore = 39;
        this.FSlash = 40;
        this.LParenthese = 41;
        this.RParenthese = 42;
        this.LBrace = 43;
        this.RBrace = 44;
        this.LBracket = 45;
        this.RBracket = 46;
        this.LAngleBracket = 47;
        this.RAngleBracket = 48;
        this.Period = 49;
        this.Comma = 50;
        this.Semicolon = 51;
        this.Dollar = 52;
        this.Pound = 53;
        this.Percent = 54;
        this.At = 55;
        this.MultilineComment = 56;
        this.Comment = 57;
        this.Whitespace = 58;
        this.Abs = 59;
        this.Sign = 60;
        this.Sin = 61;
        this.Cos = 62;
        this.Tan = 63;
        this.Asin = 64;
        this.Acos = 65;
        this.Atan2 = 66;
        this.Atan = 67;
        this.Floor = 68;
        this.Round = 69;
        this.Ceil = 70;
        this.Ln = 71;
        this.Len = 72;
        this.Let = 73;
        this.Log = 74;
        this.Pow = 75;
        this.Sqrt = 76;
        this.Exp = 77;
        this.Rands = 78;
        this.Min = 79;
        this.Max = 80;
        this.Cross = 81;
        this.True = 82;
        this.False = 83;
        this.Convexity = 84;
        this.Center = 85;
        this.Twist = 86;
        this.Cut = 87;
        this.Slices = 88;
        this.Faces = 89;
        this.Paths = 90;
        this.Layer = 91;
        this.Origin = 92;
        this.Triangles = 93;
        this.Size = 94;
        this.Height = 95;
        this.Angle = 96;
        this.Points = 97;
        this.Halign = 98;
        this.Valign = 99;
        this.Font = 100;
        this.R = 101;
        this.D = 102;
        this.H = 103;
        this.Float = 104;
        this.Number = 105;
        this.Minus = 106;
        this.Plus = 107;
        this.Multiply = 108;
        this.LessThan = 109;
        this.GreaterThan = 110;
        this.Not = 111;
        this.Ampersand = 112;
        this.Pipe = 113;
        this.Question = 114;
        this.Colon = 115;
        this.String = 116;
        this.NameStartChar = 117;
        this.NameChar = 118;
        this.Fa = 119;
        this.Fs = 120;
        this.Fn = 121;
        this.Vpr = 122;
        this.Vpt = 123;
        this.Vpd = 124;
        this.T = 125;
        
        this.RULE_scad = 0;
        this.RULE_use_line = 1;
        this.RULE_import_line = 2;
        this.RULE_file_path = 3;
        this.RULE_import_file = 4;
        this.RULE_file = 5;
        this.RULE_modules = 6;
        this.RULE_module_name = 7;
        this.RULE_function_line = 8;
        this.RULE_function_name = 9;
        this.RULE_args = 10;
        this.RULE_call = 11;
        this.RULE_annotation_line = 12;
        this.RULE_annotation_name = 13;
        this.RULE_annotation = 14;
        this.RULE_equation = 15;
        this.RULE_equation = 15;
        this.RULE_intersection_for = 16;
        this.RULE_for_loop = 17;
        this.RULE_if_then_else = 18;
        this.RULE_else_ = 19;
        this.RULE_expression = 20;
        this.RULE_add = 21;
        this.RULE_subtract = 22;
        this.RULE_multiply = 23;
        this.RULE_divide = 24;
        this.RULE_mod = 25;
        this.RULE_if_ = 26;
        this.RULE_abs = 27;
        this.RULE_sign = 28;
        this.RULE_sin = 29;
        this.RULE_cos = 30;
        this.RULE_tan = 31;
        this.RULE_acos = 32;
        this.RULE_asin = 33;
        this.RULE_atan = 34;
        this.RULE_atan2 = 35;
        this.RULE_floor = 36;
        this.RULE_round = 37;
        this.RULE_ceil = 38;
        this.RULE_ln = 39;
        this.RULE_len = 40;
        this.RULE_let_ = 41;
        this.RULE_log = 42;
        this.RULE_pow = 43;
        this.RULE_sqrt = 44;
        this.RULE_exp = 45;
        this.RULE_rands = 46;
        this.RULE_min = 47;
        this.RULE_max = 48;
        this.RULE_precedence = 49;
        this.RULE_bracket = 50;
        this.RULE_cross = 51;
        this.RULE_logical = 52;
        this.RULE_is_equal = 53;
        this.RULE_and_ = 54;
        this.RULE_or_ = 55;
        this.RULE_less_than_equal = 56;
        this.RULE_greater_than_equal = 57;
        this.RULE_less_than = 58;
        this.RULE_greater_than = 59;
        this.RULE_component = 60;
        this.RULE_booleans = 61;
        this.RULE_modifier = 62;
        this.RULE_scope = 63;
        this.RULE_implicit_scope = 64;
        this.RULE_transforms = 65;
        this.RULE_color = 66;
        this.RULE_red = 67;
        this.RULE_green = 68;
        this.RULE_blue = 69;
        this.RULE_rotate = 70;
        this.RULE_translate = 71;
        this.RULE_scale = 72;
        this.RULE_resize = 73;
        this.RULE_mirror = 74;
        this.RULE_offset = 75;
        this.RULE_hull = 76;
        this.RULE_minkowski = 77;
        this.RULE_linear_extrude = 78;
        this.RULE_rotate_extrude = 79;
        this.RULE_surface = 80;
        this.RULE_render = 81;
        this.RULE_projection = 82;
        this.RULE_matrix = 83;
        this.RULE_point = 84;
        this.RULE_vector = 85;
        this.RULE_x = 86;
        this.RULE_y = 87;
        this.RULE_z = 88;
        this.RULE_union_of = 89;
        this.RULE_difference = 90;
        this.RULE_intersection = 91;
        this.RULE_sphere = 92;
        this.RULE_cube = 93;
        this.RULE_cylinder = 94;
        this.RULE_polyhedron = 95;
        this.RULE_children = 96;
        this.RULE_circle = 97;
        this.RULE_square = 98;
        this.RULE_polygon = 99;
        this.RULE_text = 100;
        this.RULE_textual = 101;
        this.RULE_font = 102;
        this.RULE_halign = 103;
        this.RULE_valign = 104;
        this.RULE_r = 105;
        this.RULE_d = 106;
        this.RULE_h = 107;
        this.RULE_r1 = 108;
        this.RULE_r2 = 109;
        this.RULE_points = 110;
        this.RULE_triangles = 111;
        this.RULE_faces = 112;
        this.RULE_paths = 113;
        this.RULE_angle = 114;
        this.RULE_convexity = 115;
        this.RULE_layer = 116;
        this.RULE_origin = 117;
        this.RULE_cut = 118;
        this.RULE_height = 119;
        this.RULE_scale_arg = 120;
        this.RULE_size = 121;
        this.RULE_center = 122;
        this.RULE_twist = 123;
        this.RULE_slices = 124;
        this.RULE_special = 125;
        this.RULE_fa = 126;
        this.RULE_fs = 127;
        this.RULE_fn = 128;
        this.RULE_vpr = 129;
        this.RULE_vpt = 130;
        this.RULE_vpd = 131;
        this.RULE_t = 132;
        this.RULE_special_children = 133;
        this.RULE_method = 134;
        this.RULE_array = 135;
        this.RULE_variable = 136;
        this.RULE_string = 137;
        this.RULE_number = 138;
        this.RULE_echo = 139;
        this.RULE_version = 140;
    }
    
    publish(filePath){
        //let writeStream = fs.createWriteStream(filePath);
        var opa=document.getElementById("outputarea");
    	opa.value="Generating...   " +"\n";
    	opa.scrollTop = opa.scrollHeight;
    	var event = new Event('change');

    	opa.dispatchEvent(event);
    	var body = this.codeUpScope(this.tree);
    	opa.value+=body +"\n";
    	var runner = new Function ('parent', body);
    	runner(this);
    	opa.scrollTop = opa.scrollHeight;
    	event = new Event('change');

    	opa.dispatchEvent(event);
        console.log(runner);
    }
    
    codeUpScope(branch){
      var code = "";
        for(var guessIndex=0;guessIndex<branch.children.length;guessIndex++){
          if(typeof branch.children[guessIndex].ruleIndex==='number'){
              switch(branch.children[guessIndex].ruleIndex){
                case this.RULE_equation:
                    code += "this."+branch.children[guessIndex].children[0].start.text+" = "
                    code += this.codeUp(branch.children[guessIndex].children[2])+";\n";
                    break;
                case this.RULE_modules:
                    code += "this."+branch.children[guessIndex].children[1].start.text+" = function(parent";
                    //body += this.codeUp(branch.children[guessIndex].children[branch.children[guessIndex].children.length-2]);
                    var codeIndex=2;
                    if(typeof branch.children[guessIndex].children[2].symbol==='object' && branch.children[guessIndex].children[2].symbol.type===this.LParenthese){
                      codeIndex++;
                      while(codeIndex<branch.children[guessIndex].children.length && (typeof branch.children[guessIndex].children[codeIndex].symbol!=='object' || branch.children[guessIndex].children[codeIndex].symbol.type!==this.RParenthese)){
                        if(typeof branch.children[guessIndex].children[codeIndex].symbol!=='object' || branch.children[guessIndex].children[codeIndex].symbol.type!==this.Comma){
                        code += ", "+this.codeUp(branch.children[guessIndex].children[codeIndex]);
                        }
                        codeIndex++;
                      }
                      codeIndex++;
                    }
                    code+="){\n";
                      while(codeIndex<branch.children[guessIndex].children.length && (typeof branch.children[guessIndex].children[codeIndex].symbol!=='object' || branch.children[guessIndex].children[codeIndex].symbol.type!==this.Semicolon)){
                        for(var lineIndex=0;lineIndex<branch.children[guessIndex].children[codeIndex].children.length;lineIndex++){
                          ///console.log(scopeIndex+" scope "+( branch.children[guessIndex].children[codeIndex].children[lineIndex]));
                          if(typeof branch.children[guessIndex].children[codeIndex].children[lineIndex].ruleIndex==='number')
                          switch(branch.children[guessIndex].children[codeIndex].children[lineIndex].ruleIndex){
                            case this.RULE_scope:
                              var scope = branch.children[guessIndex].children[codeIndex].children[lineIndex];
                              code += this.codeUpScope(scope);
                            break;
                            case this.RULE_implicit_scope:
                              var scope = branch.children[guessIndex].children[codeIndex].children[lineIndex];
                              code += this.codeUpScope(scope);
                            break;
                          }
                        }
                        codeIndex++;
                      }
                    code += "}\n\n";
                    break;
                  case this.RULE_scope:
                    console.log("mod RULE_scope");
                    code += "{\n"+this.codeUpScope(branch.children[guessIndex])+"\n}\n";
                    break;
                  case this.RULE_implicit_scope:
                    code += this.codeUpScope(branch.children[guessIndex]);
                    break;
                  case this.RULE_booleans:
                  case this.RULE_component:
                    //console.log(branch.children[guessIndex]);
                    var component = new Array();
                    this.scanAhead(branch.children[guessIndex].children[0], component);
                    var compCode = "";
                    var booleansDepth = 0;
                    var argDepth = new Array();
                    argDepth.push(0);
                    for(var reverseIndex=0;reverseIndex<component.length;reverseIndex++){
                        if(typeof component[reverseIndex] === 'string' && component[reverseIndex].startsWith("new pmc.booleans.") ){
                          if(booleansDepth>0){
                            compCode += ", ";
                          }
                          compCode += component[reverseIndex];
                          booleansDepth++;
                          argDepth.push(0);
                        }
                        else if(typeof component[reverseIndex] === 'string' && component[reverseIndex].startsWith("new pmc.component.") ){
                          if(argDepth[booleansDepth]>0)compCode += ", ";
                          compCode += component[reverseIndex];
                          argDepth[booleansDepth]++;
                        }
                        else if(typeof component[reverseIndex] === 'string' && component[reverseIndex].startsWith("{") ){
                          compCode += "(";
                        }
                        else if(typeof component[reverseIndex] === 'string' && component[reverseIndex].startsWith("}") ){
                          compCode += ")";
                        }
                        else console.log(reverseIndex+" comp "+component[reverseIndex]);
                    }
                    code += compCode;
                    break;
                  case this.RULE_for_loop:
                      console.log("for_loop "+branch.children[guessIndex].children.length);
                      var codeIndex=0;
                        if(typeof branch.children[guessIndex].children[codeIndex].ruleIndex==='number' && branch.children[guessIndex].ruleIndex===this.RULE_modifier){
                          codeIndex++;
                        }
                        codeIndex+=2;
                        code +="for(";
                        var v="";
                        var expressionCount=0;
                      while(codeIndex<branch.children[guessIndex].children.length && (typeof branch.children[guessIndex].children[codeIndex].symbol!=='object' || branch.children[guessIndex].children[codeIndex].symbol.type!==this.RParenthese)){
                        if(typeof branch.children[guessIndex].children[codeIndex].ruleIndex==='number'){
                          if(branch.children[guessIndex].children[codeIndex].ruleIndex===this.RULE_variable){
                            v = this.codeUp(branch.children[guessIndex].children[codeIndex]);
                          }
                          else if(branch.children[guessIndex].children[codeIndex].ruleIndex===this.RULE_expression){
                            if(expressionCount===0)
                              code += "var "+v+" = "+this.codeUp(branch.children[guessIndex].children[codeIndex])+";";
                            else if(expressionCount===1)
                              code += v+" <= "+this.codeUp(branch.children[guessIndex].children[codeIndex])+";"+v+"++";
                            expressionCount++;
                          }
                        }
                        codeIndex++;
                      }
                      code+="){\n";
                      codeIndex++;
                      while(codeIndex<branch.children[guessIndex].children.length){
                        if(typeof branch.children[guessIndex].children[codeIndex].ruleIndex==='number')
                        code+=this.codeUpScope(branch.children[guessIndex].children[codeIndex]);
                        codeIndex++;
                      }
                      code += "}\n";
                      break;
                  default:
                      console.log("Unsupported "+branch.children[guessIndex].ruleIndex);
//                      console.log(branch);
                      break;
              }
          }
          else if(branch.children[guessIndex].children != undefined){
            for(var childIndex=0;childIndex<branch.children[guessIndex].children.length;childIndex++){
              if(branch.children[guessIndex].children[childIndex].symbol != undefined){
                  //opa.value+=""+branch.children[guessIndex].children[childIndex].symbol.type+"\n";
                //treeTypes.push(branch.children[guessIndex].children[childIndex].symbol.type);
              }
              else if(typeof branch.children[guessIndex].children[childIndex].start==='object'){
                  //opa.value+=""+branch.children[guessIndex].children[childIndex].start.type+"\n";
                //treeTypes.push(branch.children[guessIndex].children[childIndex].start.type);
              }
              else{
                  //opa.value+=""+branch.children[guessIndex].children[childIndex].symbol.type+"\n";
                //treeTypes.push(branch.children[guessIndex].children[childIndex].symbol.type);
              }
              //ruleIndex = branch.children[guessIndex].ruleIndex;
              //treeRuleTypes.push(ruleIndex);
            }
          }
          else{
              //opa.value+=""+branch.children[guessIndex].symbol.type+"\n";
              //treeTypes.push(branch.children[guessIndex].symbol.type);
              //treeRuleTypes.push(ruleIndex);
          }
        }
        return code;
    }
    
    codeUp(branch){
        var code="";
          if(typeof branch.ruleIndex==='number'){
              switch(branch.ruleIndex){
                  case this.RULE_expression:
                    //console.log("expression");
                    //console.log(branch);
                  case this.RULE_args:
                  case this.RULE_scope:
                  case this.RULE_implicit_scope:
                      for(var guessIndex=0;guessIndex<branch.children.length;guessIndex++){
                        if(typeof branch.children[guessIndex].ruleIndex==='number')
                          code += this.codeUp(branch.children[guessIndex]);
                      }
                      break;
                  case this.RULE_transforms:
                      console.log("transforms");
                      switch(branch.children[0].ruleIndex){
                        case this.RULE_translate:
                          code += "this.translate=";
                      for(var guessIndex=0;guessIndex<branch.children.length;guessIndex++){
                        //if(typeof branch.children[guessIndex].ruleIndex==='number')
                          code += this.codeUp(branch.children[guessIndex]);
                      }
                        break;
                      }
                      break;
                  case this.RULE_component:
                      code+=this.codeUpComponent(branch.children[0]);
                      break;
                  case this.RULE_booleans:
                      console.log("bool");
                      switch(branch.children[0].ruleIndex){
                        case this.RULE_difference:
                          code += "new pmc.component.Difference(";
                          code += this.codeUp(branch.children[0].children[0]);
                          code+=", ";
                          code += this.codeUp(branch.children[0].children[1]);
                          code+=")";
                        break;
                      }
                      break;
                  case this.RULE_logical:
                      code += this.codeUp(branch.children[0]);
                      break;
                  case this.RULE_add:
                      code+=" + "+this.codeUp(branch.children[1]);
                      break;
                  case this.RULE_subtract:
                      code+=" - "+this.codeUp(branch.children[1]);
                      break;
                  case this.RULE_multiply:
                      code+=" * "+this.codeUp(branch.children[1]);
                      break;
                  case this.RULE_divide:
                      code+="/("+this.codeUp(branch.children[1])+")";
                      break;
                  case this.RULE_sin:
                      code+="Math.sin("+this.codeUp(branch.children[1])+")";
                      break;
                  case this.RULE_cos:
                      code+="Math.cos("+this.codeUp(branch.children[1])+")";
                      break;
                  case this.RULE_equation:
                      code+=branch.children[0].start.text +"=";
                      for(var eqIndex=2;eqIndex<branch.children.length;eqIndex++){
                      code+=this.codeUp(branch.children[eqIndex]);
                      }
                      break;
                  case this.RULE_variable:
                  case this.RULE_number:
                      code+=branch.start.text;
                      break;
                    case this.RULE_logical:
                        code += this.codeUp(branch.children[0]);
                        break;
                  case this.RULE_point:
                      for(var guessIndex=1;guessIndex<branch.children.length-1;guessIndex++){
                        if(typeof branch.children[guessIndex].ruleIndex==='number')
                        switch(guessIndex){
                          case 1:
                          code += "["+this.codeUp(branch.children[guessIndex].children[0]);
                          break;
                          case 3:
                          code += ", "+this.codeUp(branch.children[guessIndex].children[0]);
                          break;
                          case 5:
                          code += ", "+this.codeUp(branch.children[guessIndex].children[0])+"]";
                          break;
                        }
                      }
                      break;
                  default:
                      console.log("codeUp Unsupported "+branch.ruleIndex);
                      //console.log(branch);
                      break;
              }
          }
          else if(typeof branch.symbol==='object'){
            //console.log("symbol");
            //console.log(branch.symbol);
            code += branch.symbol.text;
          }
        return code;
    }
    
    scanAhead(branch, component){
          if(typeof branch.ruleIndex==='number'){
              switch(branch.ruleIndex){
                case this.RULE_scope:
                  component.push("{");
                  console.log("scanAhead RULE_scope" );
                  for(var guessIndex=1;guessIndex<branch.children.length-1;guessIndex++){
                    if(typeof branch.children[guessIndex].ruleIndex==='number')
                    switch(branch.children[guessIndex].ruleIndex){
                      case this.RULE_implicit_scope:
                      this.scanAhead(branch.children[guessIndex], component);
                      break;
                    }
                  }
                  component.push("}");
                  break;
                case this.RULE_implicit_scope:
                  for(var guessIndex=0;guessIndex<branch.children.length;guessIndex++){
                    if(typeof branch.children[guessIndex].ruleIndex==='number')
                    switch(branch.children[guessIndex].ruleIndex){
                      case this.RULE_implicit_scope:
                      this.scanAhead(branch.children[guessIndex], component);
                      break;
                      default:
                      this.scanAhead(branch.children[guessIndex], component);
                      break;
                    }
                    else this.scanAhead(branch.children[guessIndex], component);
                  }
                    break;
                case this.RULE_booleans:
                    this.scanAhead(branch.children[0], component);
                break;
                  case this.RULE_union_of:
                    component.push("new pmc.booleans.Union");
                   break;
                  case this.RULE_intersection:
                    component.push("new pmc.booleans.Intersection");
                   break;
                  case this.RULE_difference:
                    component.push("new pmc.booleans.Difference");
                   break;
                case this.RULE_color:
                    var code = "this.style = \"color: ";
                      for(var guessIndex=0;guessIndex<branch.children.length;guessIndex++){
                        if(typeof branch.children[guessIndex].ruleIndex==='number')
                        switch(branch.children[guessIndex].ruleIndex){
                          case this.RULE_red:
                          code += "rgb(255*"+this.codeUp(branch.children[guessIndex].children[0]);
                          break;
                          case this.RULE_green:
                          code += ", 255*"+this.codeUp(branch.children[guessIndex].children[0]);
                          break;
                          case this.RULE_blue:
                          code += ", 255*"+this.codeUp(branch.children[guessIndex].children[0])+")";
                          break;
                        }
                      }
                      code += "\";\n";
                      component.push(code);
                    break;
                case this.RULE_cylinder:
                  var code = "new pmc.component.Cylinder(";
                  var firstArg=true;
                  for(var argIndex=0;argIndex<branch.children.length;argIndex++){
                    switch(branch.children[argIndex].ruleIndex){
                      case this.RULE_h:
                        if(!firstArg)code += ", ";
                        else firstArg=false;
                        code += "h = "+this.codeUp(branch.children[argIndex].children[2]);
                        break;
                      case this.RULE_r1:
                        if(!firstArg)code += ", ";
                        else firstArg=false;
                        code += "r1 = "+this.codeUp(branch.children[argIndex].children[2]);
                        break;
                      case this.RULE_r2:
                        if(!firstArg)code += ", ";
                        else firstArg=false;
                        code += "r2 = "+this.codeUp(branch.children[argIndex].children[2]);
                        break;
                      case this.RULE_center:
                        if(!firstArg)code += ", ";
                        else firstArg=false;
                        code += "center = "+this.codeUp(branch.children[argIndex].children[2]);
                        break;
                      case this.RULE_fa:
                        if(!firstArg)code += ", ";
                        else firstArg=false;
                        code += "fa = "+this.codeUp(branch.children[argIndex].children[3]);
                        break;
                      default:
                        //console.log("arg ");
                        //console.log(branch.children[argIndex]);
                        break;
                    }
                  }
                  code += ")";
                  component.push(code);
                  break;
                case this.RULE_transforms:
                    //console.log("transforms "+branch.children[0].children.length);
                    switch(branch.children[0].ruleIndex){
                      case this.RULE_translate:
                        var code = "";
                        switch(branch.children[0].children[2].ruleIndex){
                          case this.RULE_equation:
                            code += this.codeUp(branch.children[0].children[2]);
                            break;
                          case this.RULE_expression:
                            code += "t="+this.codeUp(branch.children[0].children[2]);
                            break;
                        }
                        component.push(code);
                      break;
                      default:
                      console.log("unsupported");
                      console.log(branch.children[0]);
                      break;
                    }
                  break;
                case this.RULE_call:
                  console.log("call "+branch.children.length);
                  var firstArg = true;
                  var code = this.codeUp(branch.children[0].children[0])+"(";
                    for(var guessIndex=1;guessIndex<branch.children.length;guessIndex++){
                      if(typeof branch.children[guessIndex].ruleIndex==='number')
                      if(!firstArg){code += ", ";firstArg = false;}
                        code += this.codeUp(branch.children[guessIndex]);
                    }
                  code +=")";
                  component.push(code);
                  break;
                case this.RULE_children:
                  component.push('children');
                    break;
                default:
                    console.log("comp Unsupported component "+branch.ruleIndex);
                    //console.log(branch);
                    break;
              }
          }
          else if(typeof branch.symbol==='object'){
            console.log("ahead symbol "+(typeof branch.symbol));
            if(branch.symbol.type===this.LBrace){
               component.push("{");
            }
            if(branch.symbol.type===this.RBrace){
               component.push("}");
            }
          }
            
      return component;
    }
    
    codeUpComponent(branch){
        var code="";
          if(typeof branch.ruleIndex==='number'){
              switch(branch.ruleIndex){
                case this.RULE_color:
                    code+= "this.style = \"color: ";
                      for(var guessIndex=0;guessIndex<branch.children.length;guessIndex++){
                        if(typeof branch.children[guessIndex].ruleIndex==='number')
                        switch(branch.children[guessIndex].ruleIndex){
                          case this.RULE_red:
                          code += "rgb(255*"+this.codeUp(branch.children[guessIndex].children[0]);
                          break;
                          case this.RULE_green:
                          code += ", 255*"+this.codeUp(branch.children[guessIndex].children[0]);
                          break;
                          case this.RULE_blue:
                          code += ", 255*"+this.codeUp(branch.children[guessIndex].children[0])+")";
                          break;
                        }
                      }
                      code += "\";\n";
                    break;
                case this.RULE_cylinder:
                  code +="new pmc.component.Cylinder(";
                  var firstArg=true;
                  for(var argIndex=0;argIndex<branch.children.length;argIndex++){
                    switch(branch.children[argIndex].ruleIndex){
                      case this.RULE_h:
                        if(!firstArg)code += ", ";
                        else firstArg=false;
                        code += "h = "+this.codeUp(branch.children[argIndex].children[2]);
                        break;
                      case this.RULE_r1:
                        if(!firstArg)code += ", ";
                        else firstArg=false;
                        code += "r1 = "+this.codeUp(branch.children[argIndex].children[2]);
                        break;
                      case this.RULE_r2:
                        if(!firstArg)code += ", ";
                        else firstArg=false;
                        code += "r2 = "+this.codeUp(branch.children[argIndex].children[2]);
                        break;
                      case this.RULE_center:
                        if(!firstArg)code += ", ";
                        else firstArg=false;
                        code += "center = "+this.codeUp(branch.children[argIndex].children[2]);
                        break;
                      case this.RULE_fa:
                        if(!firstArg)code += ", ";
                        else firstArg=false;
                        code += "fa = "+this.codeUp(branch.children[argIndex].children[3]);
                        break;
                      default:
                        //console.log("arg ");
                        //console.log(branch.children[argIndex]);
                        break;
                    }
                  }
                  code += ")";
                  break;
                case this.RULE_transforms:
                    console.log("transforms "+branch.children[0].children.length);
                    switch(branch.children[0].ruleIndex){
                      case this.RULE_translate:
                        code += "this.translate=";
                        switch(branch.children[0].children[2].ruleIndex){
                          case this.RULE_equation:
                            code += "this."+this.codeUp(branch.children[0].children[2]);
                            break;
                          case this.RULE_expression:
                            code += "this.t="+this.codeUp(branch.children[0].children[2]);
                            break;
                        }
                      break;
                      default:
                      console.log("unsupported");
                      console.log(branch.children[0]);
                      break;
                    }
                  break;
                case this.RULE_call:
                  console.log("call "+branch.children.length);
                  var firstArg = true;
                  code += this.codeUp(branch.children[0].children[0])+"(";
                    for(var guessIndex=1;guessIndex<branch.children.length;guessIndex++){
                      if(typeof branch.children[guessIndex].ruleIndex==='number')
                      if(!firstArg){code += ", ";firstArg = false;}
                        code += this.codeUp(branch.children[guessIndex]);
                    }
                  code +=")";
                    break;
                default:
                    console.log("comp Unsupported component "+branch.ruleIndex);
                    //console.log(branch);
                    break;
              }
          }
        return code;
    }
}