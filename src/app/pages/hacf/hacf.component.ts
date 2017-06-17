import { Component, OnInit } from '@angular/core';
declare var $:any; // to make jquery work

@Component({
  selector: 'app-hacf',
  templateUrl: './hacf.component.html',
  styleUrls: ['./hacf.component.css']
})
export class HacfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // jquery here
     $(".button-collapse").sideNav();
  }
}
