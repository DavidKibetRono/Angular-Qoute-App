import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
@Output() allComplete=new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  deleteQuote(complete:boolean){
    
this.allComplete.emit(complete)
  }

}
