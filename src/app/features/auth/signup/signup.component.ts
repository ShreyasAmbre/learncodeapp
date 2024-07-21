import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '@core/custom-validators/passwordMatch-validator'
  

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.less'
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup; 

  constructor(private fb: FormBuilder){}


  ngOnInit(): void {
    this.signUpFormBuilder()
  }


  signUpFormBuilder(){
    this.signUpForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirm_password: ['', [Validators.required, Validators.minLength(5)]]
    }, {validator: passwordMatchValidator})
  }


  onSignUp(){
    console.log("DATA =>", this.signUpForm)
  }

}
