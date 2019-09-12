import { Component, OnInit } from '@angular/core';
import { Data } from 'src/data.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data$:Data[];
  constructor(private dataService: DataService){}

  ngOnInit(){
    return this.dataService.getData()
    .subscribe(data => this.data$=data);
  }
}
