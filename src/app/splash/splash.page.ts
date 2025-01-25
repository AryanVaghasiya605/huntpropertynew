import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      console.log('before')
      this.router.navigateByUrl('/splash/tabs/home');      
      console.log('after')
    }, 3000);
  }

}
