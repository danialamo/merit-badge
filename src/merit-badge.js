import { LitElement, html, css } from 'lit';


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
      background-color: #000080; 
      border-radius: 50%;
      text-align : center;
      outline: 4px dashed #000080; 

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

  `;

  constructor() {
    super();
    this.date = this.getDate(); 
    this.icon = "https://static.thenounproject.com/png/65999-200.png";
    this.title = "Tester Title hehe haha hoho lol"; 
    
  }

  getDate(){
    var date = new Date();
    var day = date.getDate()
    var month = date.getMonth()+1
    var year = date.getFullYear()
    return " "+ day.toString() + "/" + month.toString() + "/" + year.toString();
  }

  render() {
    return html`
    <div class = "badge">

     <div class="date">
     <svg viewBox="0 0 500 100" class="body">
       <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"/>
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
       <svg viewBox="0 0 500 100" class="body">
         <path id="curve2" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"/>
          <text width="100">
           <textPath xlink:href="#curve" startOffset="50%" text-anchor="middle">
           ${this.title}
          </textPath>
          </text>
        </svg> 
      </div>
    </div>
    

     
    `;
  }
}

customElements.define('merit-badge', MeritBadge);