export class Quote {
    showAllQuotes: boolean;
    public likevotes: number;
      static mainQuote: any;
    constructor( public name:string,public mainQuote:string,public author:string,public datePosted:Date){
    this.showAllQuotes=false
    this.likevotes=0
    }
    
    }
    
    