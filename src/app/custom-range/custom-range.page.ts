import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faIndianRupeeSign, faPercent } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-custom-range',
  templateUrl: './custom-range.page.html',
  styleUrls: ['./custom-range.page.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomRangePage,
      multi: true,
    },
  ],
})
export class CustomRangePage implements ControlValueAccessor, OnInit {
  @Input() min: number = 0;
  @Input() max: number;
  @Input() step: number;
  value: number;
  onChange: any = () => { };
  onTouch: any = () => { };
  @Output() sliderVal = new EventEmitter<number>()
  slider: any
  faIndianRupeeSign = faIndianRupeeSign
  constructor() { }

  ngOnInit() { }
  ionViewWillEnter() { }
  writeValue(value: number): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  updateValue(event: Event) {
    const newValue = Number((event.target as HTMLInputElement).value);
    this.value = newValue;
    this.onChange(newValue);
    this.onTouch();
   // console.log(this.value);
  }
  updateSliderValue(event: Event) {
    const newValue = Number((event.target as HTMLInputElement).value);
    this.value = newValue;
    this.onChange(newValue);
    this.onTouch();
    this.sliderVal.emit(this.value);
    //   this.slider = document.getElementById('rango');
    //   this.slider.oninput = function() {
    //     var output = document.getElementById('valor');      
    //     output.innerHTML = this.value + "cr";
    //     var sliderWidth = this.getBoundingClientRect().width;
    //     var outputWidth = output.getBoundingClientRect().width;
    //     var offset = this.value / (this.max - this.min) * sliderWidth - outputWidth / 2;
    //     output.setAttribute('style', 'left: ' + offset + 'px');
    // }
    // this.slider.oninput();
  }
}
