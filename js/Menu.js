class Menu{
    constructor(theNav){
        this.theNav = theNav;
        
    }
    
    append(name, subname){
      var children = this.theNav.getElementsByTagName('ul');
      var theUl = (children.length>0) ? children[0] : document.createElement("ul");
      if(subname===undefined){
        var il = document.createElement("li");
        var menuitem = document.createElement("input");
        menuitem.setAttribute("type", "submit");
        menuitem.setAttribute("value", name);
        il.appendChild(menuitem);
        theUl.appendChild(il);
      }
      else{
          var menus=theUl.querySelector("li input[value="+name+"]");
          if(menus!=undefined){
            var subchildren=menus.parentElement.getElementsByTagName('ul');
            var ul = (subchildren.length>0) ? subchildren[0] : document.createElement("ul");
            var il = document.createElement("li");
            var menuitem = document.createElement("input");
            menuitem.setAttribute("type", "submit");
            menuitem.setAttribute("value", subname);
            il.appendChild(menuitem);
            ul.appendChild(il);
            if(subchildren.length===0){
              ul.setAttribute("id", "submenu");
              menus.parentElement.appendChild(ul);
            }
          }
      }
      if(children.length===0)this.theNav.appendChild(theUl);
    }
}