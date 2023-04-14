import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  imgSrcArr = ["https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80","https://images.unsplash.com/photo-1681488157013-e365a05d9d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  ,"https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80","https://plus.unsplash.com/premium_photo-1671269704807-5479855d03fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"]
  imgSrc =this.imgSrcArr[0];
   i:number = 0;
     interval:any;
  next(){
   if(this.i<this.imgSrcArr.length-1){
    this.i++;
     this.imgSrc = this.imgSrcArr[this.i];

   }

  }


  prev(){
    if(this.i>0){
      this.i--;
      this.imgSrc = this.imgSrcArr[this.i];

    }

  }
  slide(){
   this.interval= setInterval(() => {
    this.next()
    if(this.i==this.imgSrcArr.length-1){
      this.i=-1;
    }
  }, 1000);

  }
  stop(){
    clearInterval(this.interval);

  }
}
