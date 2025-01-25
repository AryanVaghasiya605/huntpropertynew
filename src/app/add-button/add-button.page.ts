/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.page.html',
  styleUrls: ['./add-button.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddButtonPage implements OnInit {
  @Output() handleMinusEv = new EventEmitter<string>();
  @Output() handlePlusEv = new EventEmitter<{ AttributeName: string, AttributeId: string, Value:string}>();
  @Output() addProductEv = new EventEmitter<string>();
  @Input() public form: FormGroup;
  public value : any = 0;
  public attrId : string;
  public attrname : string;
  plusMinus = false;
  showAddBtn = true;
  @Input() AttributeName: string;
  @Input() AttributeId: string;
  @Input() Value: string;
  @Input() control: AbstractControl = new FormControl();
  constructor(
    private _fb:FormBuilder
  ) { }

  ngOnInit() {
    // this.form = this._fb.group({
    //   Bedrooms:[],
    //   Balconies:[]
    // })
  }
  addProduct(){
    this.plusMinus = true;
    this.showAddBtn = false;
  }
  handleMinus(){
    this.value--;
    this.handleMinusEv.emit(this.value);
    if(this.value < 1){
      this.plusMinus = false;
    this.showAddBtn = true;
    this.value = 1;
    }
   // console.log(this.value);
  }
  handlePlus(){
    // console.log('before', this.value);
    this.value++;
   // console.log('iddd', this.AttributeName, this.AttributeId)
    this.handlePlusEv.emit({AttributeName: this.AttributeName, AttributeId: this.AttributeId, Value:this.value});
   // console.log('iddd');
//console.log('after', this.value);

  }
}
