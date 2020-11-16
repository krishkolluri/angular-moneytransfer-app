import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../services/app-service.service'

@Component({
  selector: 'app-component-transactions',
  templateUrl: './component-transactions.component.html',
  styleUrls: ['./component-transactions.component.scss'],
})
export class ComponentTransactionsComponent implements OnInit {

  @Input() recordItem: any;
  public beneAscending: boolean = false;
  public amtAscending: boolean = false;
  public dateAscending: boolean = true;
  public searchText: "";
  public data;

  constructor(private service: AppService,public translate: TranslateService) {

     translate.addLangs(['en', 'fr']);
       translate.setDefaultLang('en');
  }
  
  switchLang(lang: string) {
  this.translate.use(lang);
}

  ngOnInit(): void {
    this.service.getData()
      .subscribe(response => {
        this.data = response.data;
      });

  }


  //Sorting functionality for grid basaed on the selection
  public sortTableWith(type: string): void {
    switch (type) {
      case "date": {
        const _self = this;
        this.data.sort(function (a, b) {
          const date1 = new Date(a.date) as any;
          const date2 = new Date(b.date) as any;
          if (_self.dateAscending) {
            return date1 - date2;
          } else {
            return date2 - date1;
          }
        });
        this.data.sort(function (a, b) {
          const date3 = new Date(a.date).getMonth();
          const date4 = new Date(b.date).getMonth();
          if (_self.dateAscending) {
            return date3 - date4;
          } else {
            return date4 - date3;
          }
        });
        this.dateAscending = !this.dateAscending;
        break;
      }
      case "amount": {
        if (this.amtAscending) {
          this.data.sort((a, b) => a.amount - b.amount);
        } else {
          this.data.sort((a, b) => b.amount - a.amount);
        }
        this.amtAscending = !this.amtAscending;
        break;
      }
      case "beneficiary": {
        const _self = this;
        this.data.sort(function (a, b) {
          let bene1 = a.merchant.toUpperCase();
          let bene2 = b.merchant.toUpperCase();
          if (bene1 < bene2) {
            if (_self.beneAscending) {
              return -1;
            } else {
              return 1;
            }
          } else if (bene1 > bene2) {
            if (_self.beneAscending) {
              return 1;
            } else {
              return -1;
            }
          }
          return 0;
        });
        this.beneAscending = !this.beneAscending;
        break;
      }
    }
  }


  //Updates the transactoin list with the latest data 
  ngOnChanges() {
    console.log(this.recordItem)
    // this.filterData = Object.assign({},harFile.responseFileData);
    this.recordItem &&
      this.data.unshift({
        categoryCode: this.recordItem.categoryCode,
        date: this.recordItem.date,
        amount: this.recordItem?.amount,
        merchant: this.recordItem?.merchant,
        currencyCode: "USD",
        transactionType: this.recordItem.transactionType,
        logo: this.recordItem.logo,
        formattedDate: ""
      });
  }


  //Clear input search results
  clearSearch(){
    this.searchText = '';
  }


}
