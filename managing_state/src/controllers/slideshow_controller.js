// src/controllers/slideshow_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "slide" ]
  static values = { index: Number }

  
  next() {
    this.indexValue++
    // this.showCurrentSlide()
  }

  previous() {
    this.indexValue--
    // this.showCurrentSlide()
  }

  // no initialize method needed.
  indexValueChanged() {
    this.showCurrentSlide()
  }
  
  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue
    })
  }
}