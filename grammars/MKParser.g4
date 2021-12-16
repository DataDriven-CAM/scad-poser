parser grammar MKParser;

options { tokenVocab=MKLexer; }

makefile : (include_line | define_variable | define_rule | comment|Newline)+ EOF;

include_line : Include  file_path ;
file_path : ~(Newline)*;

define_rule : target Colon ((prerequisites Newline commands*) | variable_assignment);

target : TargetName;

prerequisites : normal_prerequisite+ (Pipe ordered_prerequisite+)?;
normal_prerequisite : TargetName;
ordered_prerequisite : TargetName;

commands : (Tab command Newline);
command : ((~(BNT|Newline)+ BNT)* ~(Newline)+);

define_variable : variable Eq expression Newline;
variable : TargetName;

expression : ((~(BNT|Newline)+ BNT)* ~(Newline)+);

variable_assignment : variable Eq ~(Newline)*;

comment : Comment;
