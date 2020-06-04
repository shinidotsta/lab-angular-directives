import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-ngSwitch-app';
  studentList: Array<any> = new Array<any>();

  ngOnInit() {
    this.studentList = [
      { SrlNo: 1, Name: 'Charlie', Course: 'Bsc(Hons)', Grade: 'A' },
      { SrlNo: 2, Name: 'Leslie', Course: 'BA', Grade: 'B' },
      { SrlNo: 3, Name: 'John', Course: 'Bcom', Grade: 'C' },
      { SrlNo: 4, Name: 'Jack', Course: 'Bsc-Hons', Grade: 'D' },
      { SrlNo: 5, Name: 'Shawn', Course: 'MBA', Grade: 'A' },
      { SrlNo: 6, Name: 'Shilling', Course: 'Msc', Grade: 'B' },
      { SrlNo: 7, Name: 'Tensing', Course: 'MA', Grade: 'C' },
      { SrlNo: 8, Name: 'Bob', Course: 'MBA', Grade: 'D' },
      { SrlNo: 9, Name: 'Gorge', Course: 'MA', Grade: 'B' },
      { SrlNo: 10, Name: 'weasly', Course: 'B.Tech', Grade: 'A' },

    ];
  }
}
