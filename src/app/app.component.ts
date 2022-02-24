import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('menu') menu: any
  
  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    this.menu.nativeElement.classList.toggle('menu-open')
  }

}
