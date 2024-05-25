import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';

@NgModule({
  declarations: [NgModule,ArticleItemComponent, ArticleListComponent,ArticleNewReactiveComponent,ArticleNewTemplateComponent],
  imports: [CommonModule],
  exports: [ArticleItemComponent, ArticleListComponent,ArticleNewReactiveComponent,ArticleNewTemplateComponent]
})
export class ArticleModule { }