import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators , FormArray, FormControl} from "@angular/forms";
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
  public checks: Array<any> = [
    {description: 'descr1', value: 'value1'},
    {description: "descr2", value: 'value2'},
    {description: "descr3", value: 'value3'}
  ];
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
        [Validators.required]
      ],
      fullName: [
        '',
        [Validators.required ]
      ],
      email: [
        '',
        [Validators.required]
      ],
      phone: [
        '',
        [Validators.required]
      ],
      // aliases: this._formBuilder.array([
      //   this._formBuilder.control('')
      // ])
      myChoices: new FormArray([]),
    });
  }
  onCheckChange(event) {
    const formArray: FormArray = this.frmUser.get('myChoices') as FormArray;

    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }
  // get aliases() {
  //   return this.frmUser.get('aliases') as FormArray;
  // }
  // addAlias() {
  //   this.aliases.push(this._formBuilder.control(''));
  // }
  onSubmit(){
    console.log(this.frmUser);
  }

  onReset(){
    this.frmUser.reset();
  }
}
