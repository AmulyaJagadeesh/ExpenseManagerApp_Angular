import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../service/type.service';
import { MatTableDataSource, MatTableModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CdkTableModule} from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})

@NgModule({
  imports: [
    MatTableDataSource,
    MatTableModule
  ]
})

export class TypeComponent implements OnInit {

  public types;
  displayedColumns = ['idtype', 'name', 'description'];
  dataSource;

  constructor( private typeService : TypeService ) { }

  ngOnInit() {
    this.typeService.getTypes()
    .subscribe(data => this.types = data );
    this.dataSource = new MatTableDataSource(this.types);
  }

}
