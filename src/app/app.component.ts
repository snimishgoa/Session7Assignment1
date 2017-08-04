import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  firstName: string;
  lastName: string;
  titleFlag: boolean;

  constructor(){
    this.titleFlag = false;
  }

  showTitle(): void{
    this.title = `${this.firstName } ${this.lastName}`;
    this.titleFlag = true;
    console.log(`${this.title} ${this.titleFlag} `)
  }

  hideTitle(): void{
    this.title = `${this.firstName } ${this.lastName}`;
    this.titleFlag = false;
    console.log(`${this.title} ${this.titleFlag} `)
  }
}
