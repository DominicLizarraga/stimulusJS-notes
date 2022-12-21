import { Controller }  from 'stimulus';

export default class extends Controller {
    static targets = ["name"];

    initialize() {
        const name = document.querySelector(".card-title").getAttribute("data-name");

        if(this.titleName === null) {
            this.readName(name);
        } else {
            this.readName(this.titleName);
        }
    }
  
    get titleName() {
      return this.data.get("name")
    }
  
    set(value) {
      this.data.set("name", value)
    }
  
  

    greet(e) {
        e.preventDefault();
        const name = this.nameTarget.value;
        this.titleName = name
        this.readName(this.readName)
    }

    readName(name) {
        const cardName = document.querySelector(".card-title");
        cardName.textContent = name;
    }
}