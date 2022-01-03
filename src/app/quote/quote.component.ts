import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public count = 0;

  @Input() theQuotes!: Quote

  constructor() { }

  ngOnInit(): void {
  }


  quotes: Quote[] = [
    new Quote("Kibet", "Don't confuse patience and wasting time please", "Mark Kurt", new Date(2021, 12, 17)),
    new Quote("Mercy", "Better late than never", "Antonio Rudiger", new Date(2020, 12, 17))
  ]

  myFormData(data: any) {
    data.datePosted = new Date(data.datePosted)
    this.quotes.push(data)
    // data.reset()
  }




}
