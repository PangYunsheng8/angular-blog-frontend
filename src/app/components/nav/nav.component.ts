import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../class/user';

import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  isSignin = false;
  user: User;

  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getSession()
  }

  clickSignin() {
    this.user = {
      id: "",
      username: "",
      password: "",
      passwordRepeat: "",
      email: ""
    };
    const signinDialogRef = this.dialog.open(SigninDialogDialog, {
      width: '220px',
      data: {user: this.user}
    });

    signinDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user = result.user
        this.signIn()
      }
    });
  }

  clickSignup() {
    const signupDialogRef = this.dialog.open(SignupDialogDialog);

    signupDialogRef.afterClosed().subscribe(result => {
    });
  }

  getSession() {
    this.userService.getSession().subscribe(data => {
      if (!data["data"]) {
        this.isSignin = false
      } else {
        this.isSignin = true
        this.user = data["data"]
        window.localStorage.setItem('userId', this.user.id)
      }
    },function(err){
      console.log(err)
    })
  }

  signIn() {
    this.userService.postSignIn(this.user).subscribe(data => {
      if (data["err"]) {
        alert('登录失败: ' + data["err"])
      } else {
        alert('登录成功')
        this.isSignin = true
        window.localStorage.setItem('userId', data["data"].id)
      }
    },function(err){
      console.log(err)
    })
  }

  signOut() {
    this.user = {
      id: "",
      username: "",
      password: "",
      passwordRepeat: "",
      email: ""
    };
    this.isSignin = false
    window.localStorage.clear()
  }

}

@Component({
  selector: 'signin-dialog',
  templateUrl: 'signin.html',
})
export class SigninDialogDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SigninDialogDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.dialogRef.close(this.data)
  }
}

@Component({
  selector: 'signup-dialog',
  templateUrl: 'signup.html',
})
export class SignupDialogDialog {}