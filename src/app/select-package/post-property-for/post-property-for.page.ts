import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-post-property-for',
  templateUrl: './post-property-for.page.html',
  styleUrls: ['./post-property-for.page.scss'],
})
export class PostPropertyForPage implements OnInit {
  faArrowLeft = faArrowLeft;
  constructor(
    private _router:Router
  ) { }

  ngOnInit() {
  }
  sellProperty(data: string) {
    console.log(data)
    this._router.navigate(['/select-package/property-type-list', { id: data }]);
  }
  rentProperty(data: string) {
    console.log(data)
    this._router.navigate(['/select-package/property-type-list', { id: data }]);
  }

}
