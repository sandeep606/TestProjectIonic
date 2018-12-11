import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MathProvider } from "../../providers/math/math";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public math: MathProvider) {}

  testAdd() {
    this.math
      .coolMethod("10")
      .then(result => {
        alert("View added " + result);
      })
      .catch(error => {
        alert("View added " + error);
      });
  }
}
