var pmc = pmc || {};
var cnc = cnc || {};
pmc.cnc = cnc || {};


pmc.cnc.Generator = class Generator {
    constructor(tokens, tree) {
        this.tokens = tokens;
        this.tree = tree;
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
    	var runner = new Object();
    	console.log(this.tree);
        for(var guessIndex=0;guessIndex<this.tree.children.length;guessIndex++){
          if(typeof this.tree.children[guessIndex].ruleIndex==='number'){
              switch(this.tree.children[guessIndex].ruleIndex){
                  case this.RULE_equation:
                      runner[this.tree.children[guessIndex].children[0].start.text] = this.tree.children[guessIndex].children[2].start.text;
                      break;
                  case this.RULE_modules:
                      console.log(this.tree.children[guessIndex]);
                      break;
              }
          }
          else if(this.tree.children[guessIndex].children != undefined){
            for(var childIndex=0;childIndex<this.tree.children[guessIndex].children.length;childIndex++){
              if(this.tree.children[guessIndex].children[childIndex].symbol != undefined){
                  opa.value+=""+this.tree.children[guessIndex].children[childIndex].symbol.type+"\n";
                //treeTypes.push(this.tree.children[guessIndex].children[childIndex].symbol.type);
              }
              else if(typeof this.tree.children[guessIndex].children[childIndex].start==='object'){
                  opa.value+=""+this.tree.children[guessIndex].children[childIndex].start.type+"\n";
                //treeTypes.push(this.tree.children[guessIndex].children[childIndex].start.type);
              }
              else{
                  opa.value+=""+this.tree.children[guessIndex].children[childIndex].symbol.type+"\n";
                //treeTypes.push(this.tree.children[guessIndex].children[childIndex].symbol.type);
              }
              //ruleIndex = this.tree.children[guessIndex].ruleIndex;
              //treeRuleTypes.push(ruleIndex);
            }
          }
          else{
              opa.value+=""+this.tree.children[guessIndex].symbol.type+"\n";
              //treeTypes.push(this.tree.children[guessIndex].symbol.type);
              //treeRuleTypes.push(ruleIndex);
          }
        }
    	opa.scrollTop = opa.scrollHeight;
    	event = new Event('change');

    	opa.dispatchEvent(event);
        console.log(runner);
    }
}