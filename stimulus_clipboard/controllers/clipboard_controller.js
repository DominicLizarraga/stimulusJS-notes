import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "source" ]

  copy(event) {
    event.preventDefault()
    navigator.clipboard.writeText(this.sourceTarget.value)
    console.log("holaaa")
  }    
  
  
  connect() {
    // console.log("connected");
  }
}
