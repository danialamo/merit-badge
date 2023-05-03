import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";
import "@lrnwebcomponents/simple-colors/simple-colors.js";



class MeritBadge extends LitElement {
  static properties = {
    date: {type: String},
    icon: { type: String },
    title: {type: String}
   
  }

  static styles = css`
   
    .badge{
      width: 400px;
      height: 400px;
      border: 2px; 
      background-color: var(--simple-colors-default-theme-purple-2);
      border-radius: 50%;
      text-align : center;
      outline: 4px dashed var(--simple-colors-default-theme-purple-2); 

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
  
  `;

  constructor() {
    super();
    this.date = this.getDate(); 
    this.icon = "https://static.thenounproject.com/png/1564259-200.png";
    this.title = "A B C D E F "; 
    
  }

  getDate(){
    var date = new Date();
    var day = date.getDate()
    var month = date.getMonth()+1
    var year = date.getFullYear()
    return " "+ month.toString() + "/" + day.toString() + "/" + year.toString();
  }

  render() {
    return html`
    <div class = "badge">

     <div class="date">
     <svg viewBox="0 0 500 100" class="body">
       <path id="curve" d="M73.2,222.9c4-6.1,65.5-145.2,178.6-143.4c111.3,1.2,170.8,135.5,175.1,145.5"/>
       <text width="100">
         <textPath xlink:href="#curve"startOffset="50%" text-anchor="middle">
           ${this.title}
         </textPath>
      </text>
      </svg> 
     </div> 

     <div class="iconImage">
       <img src="${this.icon}"class="logo">
     </div>

      <div class="title">
       <svg viewBox="0 0 500 100" class="body">
         <path id="curve2" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"/>
          <text width="100">
           <textPath xlink:href="#curve" startOffset="50%" text-anchor="middle">
           ${this.date}
          </textPath>
          </text>
        </svg> 
      </div>

      
      <div class="iconsDiv">
      <simple-icon-button icon="check-circle"></simple-icon-button>
      <simple-icon-button icon="check-circle"></simple-icon-button>
      <simple-icon-button icon="check-circle"></simple-icon-button>
      </div>
      

    </div>
    

     
    `;
  }
}

customElements.define('merit-badge', MeritBadge);