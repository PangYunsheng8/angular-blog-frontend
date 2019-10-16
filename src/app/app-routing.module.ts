import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { SignoutComponent } from './pages/signout/signout.component';
import { AdminComponent } from './pages/admin/admin.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'archive/:year/:month', component: HomeComponent},
  {path: 'article/tag/:id', component: HomeComponent},
  {path: 'signout', component: SignoutComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
