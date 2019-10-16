import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {UserService } from '../../service/user.service';
import { User } from '../../class/user';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {
  remainTime = 5;
  timer = null;
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.deleteSignOut().subscribe(data=>{
      window.localStorage.clear()
      this.timer = setInterval(() => {
        if (this.remainTime > 0) {
          this.remainTime--
        } else {
          clearInterval(this.timer)
          this.router.navigate(['/']);
        }
      }, 1000)
    })
  }

  jumpToIndex () {
    clearInterval(this.timer)
    this.router.navigate(['/']);
  }

}
