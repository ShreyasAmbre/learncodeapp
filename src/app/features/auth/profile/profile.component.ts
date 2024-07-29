import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFieldsJson } from '@core/models/profile-form-fields';
import { MainService } from '@core/services/main.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent implements OnInit{

  fieldsCollections: FormFieldsJson[] = []
  profileDynamicForm: FormGroup = new FormGroup({})

  constructor(private service: MainService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.getDynamicProfileFields()
    
  }

  getDynamicProfileFields(){
    this.service.getProfileFormFields().subscribe(res => {
      console.log(res)
      this.fieldsCollections = res.data
      this.setDynamicForm(res.data)
    })
  }


  setDynamicForm(controls: FormFieldsJson[]){
    controls.forEach(element => {
      let validatorCollection = []
      if(element.validators?.required){
        validatorCollection.push(Validators.required)
      }
      this.profileDynamicForm.addControl(element.name, this.fb.control(element.value, validatorCollection))
    });
  }



  saveProfile(){
    console.log("Form Values =>", this.profileDynamicForm.value)
  }


}
