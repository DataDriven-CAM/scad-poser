class Tabs{
    constructor(theTab, commonClass){
        this.theTab = theTab;
        this.commonClass = commonClass;
        this.empty = true;
        this.font = new pmc.Font();
        //this.tabs=[];
    }
    
    append(name, actionId){
       var button = document.createElement("div");
       button.setAttribute("class", "tablinks");
       button.setAttribute("position", "relative");
       if(this.empty){
            button.setAttribute("id", "defaultOpen"+actionId);
           this.empty = false;
       }
       button.addEventListener("click",this.openOutput);
       button.actionId = actionId;
       button.commonClass = this.commonClass;
       var tabText = document.createElement("div");
       tabText.setAttribute("class", "tabtext");
       tabText.setAttribute("position", "absolute");
       var content = document.createTextNode(name);
       tabText.appendChild(content);
       button.appendChild(tabText);
       var tabTab = document.createElement("div");
       tabTab.setAttribute("class", "tabtab");
       tabTab.setAttribute("position", "absolute");
       button.appendChild(tabTab);
       var c = document.createElement("canvas");
      //c.addEventListener("mousemove", action, false);
      var ctx = c.getContext("2d");
       c.setAttribute("class", "tabcanvas");
      var metrics = ctx.measureText(name);
      var width = 6*metrics.width/2;
      var height = 2*this.font.extractFontSize(ctx.font);
      button.setAttribute("style", "width:"+(width+10)+"px;height:"+(height)+"px");
      tabText.setAttribute("style", "width:"+(width+10)+"px;height:"+(height)+"px");
      tabTab.setAttribute("style", "width:"+(width+10)+"px;height:"+(height)+"px");
      ctx.canvas.width  =  width+20;
      ctx.canvas.height = height;
      ctx.canvas.style.width  =  (width+20)+"px";
      ctx.canvas.style.height = (height)+"px";
      var h = height-1;
      ctx.moveTo(0, h);
      ctx.bezierCurveTo(5, h, 0, 0, 10, 0);
      ctx.lineTo(width, 0);
      ctx.bezierCurveTo(width+10, 0, width+5, h, width+10, h);
      ctx.stroke();
      tabTab.appendChild(c);
      this.theTab.appendChild(button);
      this.theTab.setAttribute("style", "height:"+(height)+"px");
    }
    
  openOutput(evt) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName(evt.currentTarget.commonClass);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(evt.currentTarget.actionId).style.display = "block";
    evt.currentTarget.className += " active";
  }

}