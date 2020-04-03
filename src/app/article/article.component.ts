import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ArticleService } from './../article.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;    

    constructor(private articleService: ArticleService) {}
    
    displayedColumns: string[] = ['id', 'title', 'category', 'writer'];
    dataSource = new MatTableDataSource(this.articleService.getAllArticles());
  
    ngOnInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    } 
    
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

}
