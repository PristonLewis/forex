import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-transhistory',
  templateUrl: './transhistory.component.html',
  styleUrls: ['./transhistory.component.sass']
})
export class TranshistoryComponent implements OnInit {

  public myHistory;

  constructor(private httpService: HttpService) {

  }


  ngOnInit() {

    this.httpService.getRequest('transaction/viewTransactions/' + localStorage.getItem('userid')).subscribe((data) => {
      console.log('data', data);
      this.myHistory = data.transactions;
    });

  }






}
