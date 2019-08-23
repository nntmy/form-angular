import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
FormBuilder;
FormGroup;
Validators;

import { from } from "rxjs";

@Component({
  selector: "app-data-form",
  templateUrl: "./data-form.component.html",
  styleUrls: ["./data-form.component.css"]
})
export class DataFormComponent implements OnInit {
  //formUser la mot formGroup
  public frmUser: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
    ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.frmUser = this._formBuilder.group({
      //key value : ['gia tri mac dinh ',[validator]]
      userName: [
        '',
        Validators.required
      ],
      passWord: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(10)]
      ],
      fullName: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(10)]
      ],
      email: [
        '',
        [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(10)]
      ]
    });
  }

  onSubmit(){
    console.log(this.frmUser);
  }

  onReset(){
    this.frmUser.reset();
  }
}
