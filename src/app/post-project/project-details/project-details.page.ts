import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.page.html',
  styleUrls: ['./project-details.page.scss'],
})
export class ProjectDetailsPage implements OnInit {
projectDetails:any;
  constructor(
    private _router: Router,
    private _activateRoute: ActivatedRoute,
    private _mainSvc: MainService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
this._activateRoute.params.subscribe((params)=>{
 // console.log('params', params.project_id);
  let id = params.project_id;
  id = 4
  this._mainSvc.clientDetails(id).then((data)=>{
  //  console.log(data)
    if(data.status === 200){
      let parseData = JSON.parse(data.data);
  //    console.log(parseData.data);
      this.projectDetails = parseData.data;
    }
  })
})
  }
}
