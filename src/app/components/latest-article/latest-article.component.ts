import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.css']
})
export class LatestArticleComponent implements OnInit {
  @Input() latestArticles;
  constructor(
  ) { }

  ngOnInit() {
  }

}
