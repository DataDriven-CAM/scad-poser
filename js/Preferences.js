class Preferences{
    constructor(panel){
       this.panel = panel;
       var newExtension = this.panel.querySelector('ul li input[class="newextension"]');
       newExtension.addEventListener('keyup', (event) => {
           if(event.key === 'Enter'){
               var newItem = document.createElement("li");
               var newExt = document.createElement("span");
               newExt.appendChild(document.createTextNode(event.target.value));
               newItem.appendChild(newExt);
               var lex = document.createElement("span");
               lex.appendChild(document.createTextNode(' lexer:'));
               newItem.appendChild(lex);
               var par = document.createElement("span");
               par.appendChild(document.createTextNode(' parser:'));
               newItem.appendChild(par);
               event.target.parentNode.parentNode.insertBefore(newItem, event.target.parentNode);
               event.target.value="";
               event.preventDefault();
             ;
           }
       });
    }

    show(){
       if(this.panel.style.display === "none"){
         this.panel.style.display = "block";
       }
       else{
         this.panel.style.display = "none";
       }
    }
}

