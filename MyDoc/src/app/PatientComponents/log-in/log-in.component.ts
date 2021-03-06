import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPatService } from '../../services/pat-auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router, private authPat: AuthPatService ) {
    
  }

  obj = {
    email: '',
    password: ''
  }


  onSubmit(form: NgForm) {
    this.obj.password = form.value['password'];
    this.obj.email = form.value['email'];
    this.authPat.patSignIn(this.obj).subscribe(doctor=>{
      console.log(doctor, 'in submission')
    })
    this.router.navigate(['profilePat'])


  }

  ngOnInit(): void {
  }

}
