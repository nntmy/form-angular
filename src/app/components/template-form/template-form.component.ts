import { Component, OnInit } from "@angular/core";
import { User } from "./../../models/user";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-form",
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.css"]
})
export class TemplateFormComponent implements OnInit {
  public user: User = new User();
  constructor() {}

  ngOnInit() {}

  onSubmitForm(frmUser: NgForm) {
    //console.log(frmUser.value);
    if (frmUser.valid) {
      //neu hop le
      console.log(this.user);
    }
  }

  onReset(frmUser: NgForm) {
    frmUser.reset();
  }
}
