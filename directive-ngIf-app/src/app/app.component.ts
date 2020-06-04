import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-attribute-app';

  boolval: boolean = false;
  caption: string = 'Show Text';

  public changeData(): void {
    this.boolval = !this.boolval;
    if (this.boolval) {
      this.caption = 'Hide Text';
    } else {
      this.caption = 'Show Text';
    }
  }

}
