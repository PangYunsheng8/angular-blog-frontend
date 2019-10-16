import { Component, OnInit, Input } from '@angular/core';
import { DateTimePipe } from '../../pipes/date-time.pipe'
import { ComputeTagsPipe } from '../../pipes/compute-tags.pipe';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() article;
  @Input() showDetail;

  constructor(
  ) { }

  ngOnInit() {
  }

}
