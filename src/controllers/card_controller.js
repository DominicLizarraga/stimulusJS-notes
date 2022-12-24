import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "output"]

  initialize() {
    const name = document.querySelector(".card-title").getAttribute("data-name");
    const name2 = document.querySelector(".card-title").textContent
    if (name2 === "") {
      this.readName(name)
    } else {
      this.readName(this.titleName)
      }
  }

  get titleName() {
    return this.data.get('input');
  }

  
  set titleName(value) {
    this.data.set('input', value)
  }



  greet(e) {
    e.preventDefault();
    const name = this.inputTarget.value;
    this.titleName = name;
    this.readName(this.titleName);
    // console.log(`${this.inputTarget.value}`)
  }
  
  readName(name) {
    const cardName = document.querySelector(".card-title");
    cardName.textContent = name;
  }
  
  
}
