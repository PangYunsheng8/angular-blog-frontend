import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { DateTimePipe } from '../../pipes/date-time.pipe'

import { Article } from '../../class/article'

import { ArticleService } from '../../service/article.service'

@Component({
  selector: 'app-article-management',
  templateUrl: './article-management.component.html',
  styleUrls: ['./article-management.component.css']
})
export class ArticleManagementComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author', 'createdAt', 'updatedAt', 'operate'];
  articles: Array<Article> = new Array();
  dataSource;
  currId;
  currentArticle: Article;
  pagination: {
    pageSize: number,
    total: number,
    offset: number,
    nextOffset: number
  };

  constructor(
    public dialog: MatDialog,
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pagination = {
      pageSize: 10,
      total: 10,
      offset: 0,
      nextOffset: 0
    };
    this.getArticles()
  }

  //GET articles
  getArticles() {
    this.articleService.getArticles('article', this.pagination.pageSize, this.pagination.offset, '{}').subscribe(res=>{
      this.articles = res["data"]
      this.pagination = res["pagination"]
      this.dataSource = new MatTableDataSource(this.articles);
    },function(err){
      console.log(err)
    })
  }

  //POST articles
  postArticles (){
    this.articleService.postArticles(this.currentArticle).subscribe(res => {
      if (res["err"]) {
        alert('提交失败')
      } else {
        alert('提交成功')
      }
    },function(err){
      console.log(err)
    })
  }

  //PUT articles
  putArticles() {
    this.articleService.putArticles(this.currId, this.currentArticle).subscribe(res => {
      if (res["err"]) {
        alert('修改失败')
      } else {
        alert('修改成功')
        Object.assign(this.articles.filter(i => i.id === this.currId)[0], this.currentArticle)
      }
    },function(err){
      console.log(err)
    })
  }

  //DELETE articles
  deleteArticles() {
    this.articleService.deleteArticles(this.currId).subscribe(res => {
      if (res["err"]) {
        alert('删除失败')
      } else {
        alert('删除成功')
        this.articles = this.articles.filter(i => i.id !== this.currId)
        this.dataSource = new MatTableDataSource(this.articles);
      }
    },function(err){
      console.log(err)
    })
  }

  editClick(aid) {
    this.currId = aid
    this.currentArticle = this.articles.filter(i => i.id == this.currId)[0]
    const editDialogRef = this.dialog.open(EditDialogDialog, {
      width: '500px',
      height: '280px',
      data: {article: this.currentArticle}
    });

    editDialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.currentArticle = result.article
        this.putArticles()
      }
    })
  }

  removeClick(aid) {
    this.currId = aid
    const editDialogRef = this.dialog.open(RemoveDialogDialog, {
      width: '300px',
      height: '180px',
    });

    editDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteArticles()
      }
    })
  }

  addClick() {
    this.currId = null
    this.currentArticle = {
      id: null,
      title: "",
      tags: "",
      createdAt: null,
      clickTimes: null,
      content: "",
    }
    const addDialogRef = this.dialog.open(AddDialogDialog, {
      width: '500px',
      height: '280px',
      data: {article: this.currentArticle}
    });

    addDialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.currentArticle = result.article
        this.postArticles()
      }
    })
  }

  onPagination(pageSize, pageIndex) {
    this.pagination.pageSize = pageSize
    this.pagination.offset = pageIndex * pageSize
    this.getArticles()
  }

}


@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit.html',
})
export class EditDialogDialog{
  constructor(
    public dialogRef: MatDialogRef<EditDialogDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  onClick(flag) {
    if (flag) {
      this.dialogRef.close(this.data)
    } else {
      this.dialogRef.close()
    }
  }
}

@Component({
  selector: 'remove-dialog',
  templateUrl: 'remove.html',
})
export class RemoveDialogDialog{}

@Component({
  selector: 'add-dialog',
  templateUrl: 'add.html',
})
export class AddDialogDialog{
  constructor(
    public dialogRef: MatDialogRef<AddDialogDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  onClick(flag) {
    if (flag) {
      this.dialogRef.close(this.data)
    } else {
      this.dialogRef.close()
    }
  }
}
