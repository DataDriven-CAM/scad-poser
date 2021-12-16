lexer grammar MKLexer;

Include : 'include';
BNT : BSlash Newline Tab;

//MultilineComment : ('/*' ~('*')*'*/')-> channel(HIDDEN);
Comment : ('#' ~('\n')* Newline)-> channel(HIDDEN);

TargetName	   :   	(NameStartChar) (NameChar)+;
fragment
NameStartChar	   :   	'A'..'Z' | '_' | 'a'..'z' | '.' | '-' | '/' | '*' | '$';// | '\u00C0'..'\u00D6' | '\u00D8'..'\u00F6' | '\u00F8'..'\u02FF' | '\u0370'..'\u037D' | '\u037F'..'\u1FFF' | '\u200C'..'\u200D' | '\u2070'..'\u218F' | '\u2C00'..'\u2FEF' | '\u3001'..'\uD7FF' | '\uF900'..'\uFDCF' | '\uFDF0'..'\uFFFD';// | '\u10000'..'\uEFFFF';
fragment
NameChar	   :   	NameStartChar | '-' | '+'| '0'..'9' | '{' | '}' | '/' | ',' | '(' | ')' | '\'' | '"' | '^' | '`' | '@' | '%' | ';' | '[' | ']' ;// | '\u00B7' | '\u0300'..'\u036F' | '\u203F'..'\u2040';

ColonColonEq : '::=';
ColonEq : ':=';
Eq : '=';
BSlash : '\\';
Pipe : '|';
Colon : ':';
Tab : '\t';
Newline : '\n';

WHITESPACE  :   ( ' '
        | '\r'
         ) -> channel(HIDDEN)
    ;
