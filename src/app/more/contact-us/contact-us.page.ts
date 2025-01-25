import { Component, OnInit } from '@angular/core';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  faPhone = faPhone;
  constructor() { }

  ngOnInit() {
  }

}
