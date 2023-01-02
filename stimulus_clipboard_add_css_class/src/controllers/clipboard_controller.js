import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "source" ]
  static classes = [ "supported" ]

  copy(event) {
    event.preventDefault()
    navigator.clipboard.writeText(this.sourceTarget.value)
    console.log("holaaa")
  }    
  
  
  connect() {
    if ("clipboard" in navigator) {
      this.element.classList.add(this.supportedClass);
    }
  }
}
