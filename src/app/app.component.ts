import { Component } from '@angular/core';
import { GiphyService } from './giphy.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serachValue ='';
  imageArray :any;
 
  
constructor(private giphyservice:GiphyService){}
  ngOnInit(): void {
    this.giphyservice.getGiphyImages().subscribe((res:any)=>{
      this.imageArray =res;
          })
  }
  search(serachValue:string){
    this.giphyservice.getuserGiphyImages(serachValue).subscribe((res:any)=>{
this.imageArray =res;
    })
  }
}
