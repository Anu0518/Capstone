import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { RouterService } from 'src/app/services/router.service';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  user: User = new User();
  isError: boolean = false;
  errMessage: string = '';

  constructor(private  routerService: RouterService, private router: Router,private formBuilder:FormBuilder ,private http:HttpClient) {}
    result : boolean =false;
    loginForm = new FormGroup(
      {
        email: new FormControl('',[Validators.required,Validators.email]),
         password: new FormControl('',[Validators.required,Validators.minLength(6)])
      }
   )
   id=new FormControl('',[Validators.required]);
   registerForm = new FormGroup(
    {
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      email:new FormControl('', [Validators.required, Validators.email]),
      firstName:new FormControl(),
      lastName:new FormControl(),
       id:new FormControl('',[Validators.required]),
      address:new FormControl(),
      telephone:new FormControl()
      
    }
  )

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email : new FormControl('',[Validators.required,Validators.email]),
        password :new FormControl('',[Validators.required,Validators.minLength(8)])
      }
    );
    this. registerForm=this.formBuilder.group(
      {
      
        id:[],
        userName:[''],
        email:[''],
        password:[''],
        firstName:[''],
        lastName:[''],
        address:[''],
      telephone:['']

  
      }
    )
   }
   onLogin(){
  
    console.log("Form Login");
      this.user.email = this.loginForm.value.email;
      this.user.password = this.loginForm.value.password;
      this.routerService.Userlogin(this.user).subscribe(data =>{
       
        this.result=data
      
      if(data){
        localStorage.setItem('UserName',this.loginForm.value.username);
      alert("Login SuccessFully!!");
       this.loginForm.reset();
       
            this.router.navigate(['usermenu'])
         }
        else{
          console.log(data);
          alert("User Not Found!!")
        }
      });


  }
  Login() {
    // let cuser = this.user;
    // let that = this;
    // this.routerService.checkLogin(this.user)
    //   .subscribe({
    //     next(data: Message) {
    //       console.log('next call');
    //       console.log(data.message);
    //       localStorage.setItem('email', cuser.email);
    //       that.router.navigate(['room']);
    //     },
    //     error(data) {
    //       console.log('error call');
    //       console.log(data.error);
    //       that.isError = true;
    //       that.errMessage = data.error.description;
    //       console.log(that.errMessage);
    //     }
    //   });

  }
  Register(){

  }

}



