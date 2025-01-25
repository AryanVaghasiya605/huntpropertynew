import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { MainService } from '../services/main.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-post-project',
  templateUrl: './post-project.page.html',
  styleUrls: ['./post-project.page.scss'],
  
})
export class PostProjectPage implements OnInit {
projectlist:any;
  constructor(
    private _router:Router,
    private _nativeStorage: NativeStorage,
    private _mainSvc:MainService,
    private loadingCtrl:LoadingController
  ) { }

  ngOnInit() {
  }
  
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: '',
      duration: 1000,
    });

    loading.present();
  }
  ionViewWillEnter(){
    this._nativeStorage.getItem('userId').then((data)=>{       
      this._mainSvc.projectListing(47).then((data)=>{
        console.log('dsadsa',data);
        this.showLoading();
        if(data.status == 200){
          let parseData = JSON.parse(data.data);
          this.projectlist = parseData.data;
          console.log(parseData.data);
        }
       
      })
    })
  }
  addProject(){    
    this._router.navigateByUrl('/post-project/add-project');
  }
  projectDetails(id:any){
console.log(id)
this._router.navigate(['/post-project/project-details', {project_id: id}]);
  }

}
