import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  transactoinData;

  constructor() {
    

  }

  ngOnInit(): void {
  }
  
  getRecord(e){
    this.transactoinData = e;
  }


}
