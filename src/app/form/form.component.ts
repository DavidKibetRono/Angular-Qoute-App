import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 

@Output() frmData:any=new EventEmitter()

  constructor() { }
quotes=new Quote("","","",new Date())
  ngOnInit(): void {

  }


  formDetails(data:any){
    let dataFromForm=new Quote(data.value.name,data.value.mainQuote,data.value.author,data.value.datePosted)
    this.frmData.emit(dataFromForm)
    data.reset()
  }


}
