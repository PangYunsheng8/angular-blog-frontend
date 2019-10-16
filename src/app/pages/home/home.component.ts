import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../../class/article';
import { Archive } from '../../class/archive';
import { Tag } from '../../class/tag';

import { ArticleService } from '../../service/article.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Array<Article> = new Array();
  tags: Array<Tag> = new Array();
  archives: Array<Archive> = new Array();
  latestArticles: Array<Article> = new Array();

  showDetail = false;
  filter = {};
  resource = 'article';
  pagination: {
    pageSize: 10,
    total: 10,
    offset: 0,
    nextOffset: 0
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.initByRoute()
    this.articleService.getTags().subscribe(res=>{
      this.tags = res["data"]
    })
    this.articleService.getArchives().subscribe(res=>{
      this.archives = res["data"]
    })
    this.articleService.getLatestArticles().subscribe(res=>{
      this.latestArticles = res["data"]
    })
  }

  loadArticles() {
    if (this.pagination.nextOffset != null) {
      this.articleService.getArticles(this.resource, 
        this.pagination.pageSize, 
        this.articles.length, 
        JSON.stringify(this.filter)).subscribe(res=>{
          this.articles = [...this.articles, ...res["data"]]
          this.pagination = res["pagination"]
      })
    }
  }

  initByRoute(){
    this.activatedRoute.url.subscribe(params=>{  
      if (params.length == 0){   // home
        this.filter = {}
        this.resource = 'article'
      } else if (params[0].path == 'archive') {  // archive
        const year = params[1].path
        const month = params[2].path
        this.filter = {
          createdAt: {
            '$lt': `${year}-${+month + 1}-1`,
            '$gte': `${year}-${month}-1`
          }
        }
        this.resource = 'article'
      } else if (params[0].path == 'article') {
        let queryId = params[2].path
        this.resource = 'article/tag/' + queryId
        this.filter = {}
      }
      this.pagination = {
        pageSize: 10,
        total: 10,
        offset: 0,
        nextOffset: 0
      };
      this.articles = []
      this.loadArticles();
    })
  }

}
