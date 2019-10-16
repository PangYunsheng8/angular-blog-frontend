import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../../class/article';
import { Archive } from '../../class/archive';
import { Tag } from '../../class/tag';

import { ArticleService } from '../../service/article.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  article: Article;
  tags: Array<Tag> = new Array();
  archives: Array<Archive> = new Array();
  latestArticles: Array<Article> = new Array();
  showDetail = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleService.getTags().subscribe(res=>{
      this.tags = res["data"]
    })
    this.articleService.getArchives().subscribe(res=>{
      this.archives = res["data"]
    })
    this.articleService.getLatestArticles().subscribe(res=>{
      this.latestArticles = res["data"]
    })
    this.activatedRoute.paramMap.subscribe(params=>{
      let aid = +params.get('id')
      this.articleService.getOneArticle(aid).subscribe(res=>{
        this.article = res["data"]
      })
    });
  }

}
