import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  public errFlag;
  constructor(private httpService: HttpService, private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({

      uName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]


    });


  }
  get f() { return this.loginForm.controls; }

  public onSubmit(loginForm): void { }


}
