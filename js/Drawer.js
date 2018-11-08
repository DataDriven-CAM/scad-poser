
class Drawer{
    constructor(){
        
    }
    
    slideOut(){
      var e = $('#drawer');
      
      if ( e.hasClass("off" )) {
        e.addClass("on").removeClass("off");
      
      } else {
        e.addClass("on");
      }
        
    }

    slideBack(){
      var e = $('#drawer');
      
      if ( e.hasClass("on") ) {
        e.addClass("off").removeClass("on");
      } else {
        e.addClass("off");
      }
        
    }
}