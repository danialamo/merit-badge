import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";
import "@lrnwebcomponents/simple-colors/simple-colors.js";



class MeritBadge extends LitElement {
  static properties = {
    ...super.properties,
    date: {type: String},
    icon: { type: String },
    title: {type: String}
   
  }

  static styles = css`
    .badge{
      z-index: 5;
      top: 10px;
      left:10px; 
      position: absolute; 
      width: 400px;
      height: 400px;
      border: 2px; 
      background-color: var(--simple-colors-default-theme-purple-2);
      border-radius: 50%;
      text-align : center;
      outline: 4px dashed var(--simple-colors-default-theme-purple-2);
      box-shadow: 0 0 0 5px var(--simple-colors-default-theme-accent-1), 1px 0px 5px 0px ;  
      padding: 20px; 
      margin: 20px;

    }

    .lockBadge{
      z-index: 6;
      opacity: 95%;
      position: absolute; 
      width: 400px;
      height: 400px;
      border: 2px; 
      background-color: grey;
      border-radius: 50%;
      text-align : center;
      outline: 4px dashed grey;
      box-shadow: 0 0 0 5px var(--simple-colors-default-theme-accent-1), 1px 0px 5px 0px ;  
      padding: 20px; 
      margin: 20px;

    }

    .date{
      align-content: center;
      color: white; 
      font-size : 30px;
    }
    path {
      fill: transparent;
      align: center;
   }

   text {
    fill: white;
    align: right; 
  }       

  .iconsDiv {
    margin: 1px;
    display: inline-block;
    vertical-align: middle;
  }

  .buttonPanel{
    margin: 20px;ss
  }
  
  `;

  constructor() {
    super();
    this.date = this.getDate(); 
    this.icon = "https://static.thenounproject.com/png/1564259-200.png";
    this.title = "ABCDEFGHIJKLMNOP"; 
    
  }

  getDate(){
    var date = new Date();
    var day = date.getDate()
    var month = date.getMonth()+1
    var year = date.getFullYear()
    return " "+ month.toString() + "/" + day.toString() + "/" + year.toString();
  }

  buttonUnlock(){
    this.locked = !this.locked;
    if(this.locked){
      this.shadowRoot.querySelector(".lockBadge").style.visibility='visible';
      this.shadowRoot.querySelector(".badge").style.visibility='visible';
    }else{
      this.shadowRoot.querySelector(".lockBadge").style.visibility='hidden';
      this.shadowRoot.querySelector(".badge").style.visibility='visible';
    }
  }

  render() {
    return html`

    <div class="lockBadge">
     <img src="https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png">
    </div>

    <div class = "badge">
     <div class="date">
     <svg viewBox="0 0 500 100" class="body">
       <path id="curve" d="M73.2,222.9c4-6.1,65.5-145.2,178.6-143.4c111.3,1.2,170.8,135.5,175.1,145.5"/>
       <text width="100">
         <textPath xlink:href="#curve"startOffset="50%" text-anchor="middle">
           ${this.date}
         </textPath>
      </text>
      </svg> 
     </div> 

     <div class="iconImage">
       <img src="${this.icon}"class="logo">
     </div>

      <div class="title">
        <h3>${this.title}<h3>  
      </div>

      
      <div class="iconsDiv">
      <simple-icon-button icon="check-circle"></simple-icon-button>
      <simple-icon-button icon="check-circle"></simple-icon-button>
      <simple-icon-button icon="check-circle"></simple-icon-button>
      </div>

    </div>

    <div class=buttonpanel>
      <button @click="${this.buttonUnlock}"> Unlock Badge </button>
    </div>
    

     
    `;
  }
}

customElements.define('merit-badge', MeritBadge);