import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Article } from '../class/article';
import { Archive } from '../class/archive';
import { Tag } from '../class/tag';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tags: Array<Tag> = new Array();
  archives: Array<Archive> = new Array();
  latestArticles: Array<Article> = new Array();

  constructor(
    private http: HttpClient
  ) { }

  getTags() {
    return this.http.get(`http://localhost:3000/api/tag`);
  }

  getArchives() {
    return this.http.get(`http://localhost:3000/api/archive`);
  }

  getLatestArticles() {
    return this.http.get(`http://localhost:3000/api/lastest-article`);
  }

  getArticles(resource='article', pageSize=10, offset=0, filter={}) {
    let url = `http://localhost:3000/api/${resource}?pageSize=${pageSize}&offset=${offset}&filter=${filter}`
    console.log(url)
    return this.http.get(url);
  }

  getOneArticle(aid) {
    return this.http.get(`http://localhost:3000/api/article/${aid}`)
  }

  postArticles(currentArticle){
    return this.http.post('http://localhost:3000/api/article', currentArticle, {withCredentials: true});
  }

  putArticles(aid, currentArticle) {
    return this.http.put(`http://localhost:3000/api/article/${aid}`, currentArticle);
  }

  deleteArticles(aid) {
    return this.http.delete(`http://localhost:3000/api/article/${aid}`);
  }
  
}
