import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
public inboxList:any;
  constructor(
    private _nativeStorage:NativeStorage,
    private _mainSvc:MainService,
    private _router:Router,
    private _ngZone:NgZone
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this._nativeStorage.getItem('userId').then((data)=>{ 
    let userData = {
      userid:data
    }     
     this._mainSvc.getMessageInbox(userData).then((data)=>{
      let parseData = JSON.parse(data.data);
      this.inboxList = parseData.data;
     // console.log(this.inboxList);
     })
    })
  }
  showChat(id:number, name:string){
   // console.log(id)
    this._ngZone.run(()=>{
      this._router.navigate(['/messages/send-message', {id:id, name:name}]);
    })
   
  }
}
