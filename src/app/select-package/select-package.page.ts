import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-select-package',
  templateUrl: './select-package.page.html',
  styleUrls: ['./select-package.page.scss'],
})
export class SelectPackagePage implements OnInit {
  faArrowLeft = faArrowLeft;
  customAlertOptions = {
    header: 'Select a Package',    
    translucent: true,
  };
  constructor() { }

  ngOnInit() {
  }

}
