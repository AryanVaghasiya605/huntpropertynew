import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.page.html',
  styleUrls: ['./floor-plan.page.scss'],
})
export class FloorPlanPage implements OnInit {
  orderForm: FormGroup;
  items: FormArray;
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.orderForm = new FormGroup({
      items: new FormArray([])
    });
  }
  
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }
  get itemsArrayControl(){
    return this.items = this.orderForm.get('items') as FormArray;
  }
  addItem(): void {    
    this.items.push(this.createItem());
  }
}
