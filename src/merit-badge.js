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
    title: {type: String},
    skills: {type: Array },
    verifyLink: {type: String},
    activeNode: {type: Object},
    activeNodeTwo: {type: Object},
    skillsOpened: {type: Boolean},
    details: {type: Array},
    detailsOpened: {type: Boolean},
   
  }

  static styles = css`
     :host{
      display: inline-block;
      text-align: center;
      position: relative;
     }

    .badge{
      z-index: 5;
      position: absolute; 
      width: 400px;
      height: 400px;
      border: 2px; 
      background-color: var(--simple-colors-default-theme-purple-2);
      border-radius: 50%;
      text-align : center;
      outline: 4px dashed var(--simple-colors-default-theme-purple-2);
      box-shadow: 0 0 0 5px var(--simple-colors-default-theme-accent-1), 1px 0px 5px 0px ;  

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


    }

    .date{
      align-content: center;
      color: black ; 
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

  .iconsDivs {
    margin: 1px;
    display: inline-block;
    vertical-align: middle;
  }
  .iconDiv {
    display: inline-block;
    padding: 1rem 0.5rem;
    vertical-align: middle;
  }

  .buttonPanel{
    margin: 20px;
  }

  .skills {
    background-color: grey;
    padding: 20px;
    padding-top: 2px;
    margin: 3px;
    width: 100%;
    min-width: 100px;
    background-color: pink;
    border: 2px dashed black; 
  }
  .detailsTwo{
    background-color: pink;
    padding: 20px;
    padding-top: 2px;
    margin: 3px;
    border: 2px dashed black;
    width: 100%;
    min-width: 100px;
    
  }
  `;

  constructor() {
    super();
    this.date = this.getDate(); 
    this.icon = "https://static.thenounproject.com/png/1564259-200.png";
    this.title = "Tech Genius"; 
    this.verifyLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    // recheck please 
    this.skills = ['Computers', 'Business','Biology'];
    this.details = ['JavaScript', 'Management', "Science"];
    this.activeNode = null;
    this.activeNodeTwo = null;
    this.skillsOpened = false;
    this.detailsOpened = false;
    
  
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



  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNode = this.shadowRoot.querySelector("#skillList");
    this.activeNodeTwo = this.shadowRoot.querySelector("#detailList");
  }

  skillClick(e) {
    this.skillsOpened = !this.skillsOpened;
    this.detailsOpened = false; 
  }

  detailsClick(e) {
    this.detailsOpened = !this.detailsOpened;
    this.skillsOpened = false; 
  }

  verify() {
    window.open(this.verifyLink, "_blank");
  }


  render() {
    return html`
    <div id=buttonpanel>
    <button @click="${this.buttonUnlock}"> Unlock Badge </button>
    </div>

    <div class="lockBadge">
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

      
    <div class="iconsDivs">

      <div class="iconDiv" id="skillList">
      <simple-icon-button icon="assignment" @click="${this.skillClick}"></simple-icon-button>
      </div>
      
      <div class="iconDiv" id="detailsList">
      <simple-icon-button icon="work" @click="${this.detailsClick}"></simple-icon-button>
      </div>

      <div class="iconDiv">
      <simple-icon-button icon="launch" @click="${this.verify}"></simple-icon-button>
      </div>

    </div>
    </div>

  <absolute-position-behavior
    justify
    position="bottom"
    allow-overlap
    sticky
    auto
    .target="${this.activeNode}"
    ?hidden="${!this.skillsOpened}">
      <ul class="skills"><h3>Skills</h3>
      ${this.skills.map(item => html`<li>${item}</li>`)}</ul>
  </absolute-position-behavior>


  <absolute-position-behavior
    justify
    position="bottom"
    allow-overlap
    sticky
    auto
    .target="${this.activeNode}"
    ?hidden="${!this.detailsOpened}">
      <ul class="detailsTwo"><h3>Details</h3>
      ${this.details.map(item => html`<li>${item}</li>`)}</ul>
  </absolute-position-behavior>
        
    `;
  }
}

customElements.define('merit-badge', MeritBadge);