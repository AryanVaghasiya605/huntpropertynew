import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.page.html',
  styleUrls: ['./send-message.page.scss'],
})
export class SendMessagePage implements OnInit {
  sendMessage:FormGroup;
  token:string;
  userName:string;
  chatBoxList:any;
  chatId:any = {
    user_id : ''
  };
  constructor(
    private _fb:FormBuilder,
    private _mainSVC:MainService,
    private _nativeStorage:NativeStorage,
    private _activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.sendMessage = this._fb.group({
      message:['']
    })
    this._nativeStorage.getItem('token').then((token)=>{
     // console.log(token)
    })
  }
  ionViewWillEnter(){
    this._activatedRoute.params.subscribe((param)=>{
    //  console.log(param)
      this.userName = param.name;
      this.chatId = {
        user_id : param.id
      }
      this._mainSVC.getChatBoxList(this.chatId).then((data)=>{        
        let parseData = JSON.parse(data.data);
        this.chatBoxList = parseData.data;
        this.chatBoxList.sort((a,b) => 0 - (a > b ? -1 : 1));
      //  console.log(this.chatBoxList);
      })
    })
  }
onSubmit(){
 // console.log(this.chatId)
  let formdata = {    
      "to_user_id":this.chatId.user_id,
      "msg":this.sendMessage.value.message
  
  }
 // console.log(formdata)
  this._mainSVC.sendMessage(formdata).then(
    (data)=>{
    //  console.log('data', data);
      this.ionViewWillEnter();
      this.sendMessage.reset();
    }
  )
}


}
