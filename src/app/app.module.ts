import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatDialogModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './pages/article/article.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { LatestArticleComponent } from './components/latest-article/latest-article.component';
import { TagComponent } from './components/tag/tag.component';
import { AboutComponent } from './pages/about/about.component';
import { DateTimePipe } from './pipes/date-time.pipe';
import { ClipPipe } from './pipes/clip.pipe';
import { SigninDialogDialog } from './components/nav/nav.component';
import { SignupDialogDialog } from './components/nav/nav.component';
import { SignoutComponent } from './pages/signout/signout.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ArticleManagementComponent } from './components/article-management/article-management.component';
import { EditDialogDialog } from './components/article-management/article-management.component';
import { RemoveDialogDialog } from './components/article-management/article-management.component';
import { AddDialogDialog } from './components/article-management/article-management.component';
import { ComputeTagsPipe } from './pipes/compute-tags.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavComponent,
    HomeComponent,
    ArticleItemComponent,
    ArchiveComponent,
    LatestArticleComponent,
    TagComponent,
    AboutComponent,
    DateTimePipe,
    ClipPipe,
    SigninDialogDialog,
    SignupDialogDialog,
    SignoutComponent,
    AdminComponent,
    ArticleManagementComponent,
    EditDialogDialog,
    RemoveDialogDialog,
    AddDialogDialog,
    ComputeTagsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatPaginatorModule,
  ],
  entryComponents: [
    SigninDialogDialog,
    SignupDialogDialog,
    EditDialogDialog,
    RemoveDialogDialog,
    AddDialogDialog
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
