import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // title = 'Mr Robot';
    //title = 'Mr Robot';
 @Input() title:string;
 @Input() note:string;
 @Input() imgLoc:string;
  constructor() { }

  ngOnInit() {
  }

}
