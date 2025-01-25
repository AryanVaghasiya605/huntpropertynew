import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  selectedTab;
  public showhomeBtn:boolean = false;
  public showProfile:boolean = false;
  public showNotification:boolean = false;
  public showMore:boolean = false;
  public splashScreen:boolean = false;
  constructor() {}
  setCurrentTab(event) {
    setTimeout(() => {
      this.splashScreen = true;
    }, 3000);
    console.log('event', event);
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab === this.selectedTab)
    if(this.selectedTab == 'home'){
      this.showhomeBtn = true;
      this.showProfile = false;
      this.showNotification = false;
      this.showMore = false;
    } else if(this.selectedTab == 'Profile'){
      this.showProfile = true;
      this.showMore = false;
      this.showNotification = false;
      this.showhomeBtn = false;
    }
    else if(this.selectedTab == 'Notifications'){
      this.showNotification = true;
      this.showhomeBtn = false;
      this.showProfile = false;
      this.showMore = false;
    }
    else if(this.selectedTab == 'more'){
      this.showMore = true;
      this.showNotification = false;
      this.showhomeBtn = false;
      this.showProfile = false;
    }
  }

}
