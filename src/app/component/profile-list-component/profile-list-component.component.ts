import { Component, EventEmitter, OnInit, Output } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile-list-component',
  templateUrl: './profile-list-component.component.html',
  styleUrls: ['./profile-list-component.component.scss']
})
export class ProfileListComponentComponent implements OnInit {
  selectedValue!: string;
  selectedCar!: string;
  visible: boolean = true;
  @Output() open = new EventEmitter();
  @Output() close = new EventEmitter();

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];

  toggle(){
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
