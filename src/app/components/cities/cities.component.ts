import { Component, OnInit } from '@angular/core';
import { PixaService } from 'src/app/services/pixa.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  dataApi: any;
  dataSearch: any;
  size = 12;
  currentPage = 1;
  pages!: Array<string>;
  motCle: String = "";
  totalPage!: number;
  resulat!: number;

  defaultLocation = "cities";
 
  constructor(private pixaService: PixaService) {}

  ngOnInit() {
    this.displayData();
  }
  displayData(){

    this.pixaService
      .getData(this.defaultLocation, this.size, this.currentPage)
      .subscribe(
        (data) => {
          
            this.dataApi = data;
            this.dataSearch = this.dataApi.hits;
   
            this.totalPage = this.dataApi.totalHits / this.size;
            if (this.dataApi.totalHits % this.size != 0) ++this.totalPage;
  
             console.log(Math.floor(this.totalPage));
         //   console.log(this.totalPage);
           // this.pages = new Array(this.totalPage);
            
            this.resulat = Math.floor(this.totalPage);
          //  console.log(this.pages.length);
           
        },
        (err) => {
          console.log(err);
        }
      );
  }
  onSerach(city: any) {
    
    this.pixaService
      .getData(city.motCle, this.size, this.currentPage)
      .subscribe(
        (data) => {
          
            this.dataApi = data;
            this.dataSearch = this.dataApi.hits;
   
            this.totalPage = this.dataApi.totalHits / this.size;
            if (this.dataApi.totalHits % this.size != 0) this.totalPage++;
  
            // console.log(this.totalPage);
           // console.log(this.totalPage);
            this.pages = new Array(Math.floor(this.totalPage));
          
          
       
        },
        (err) => {
          console.log(err);
        }
      );
  
}

  goToPage(i: any) {
    this.currentPage = i + 1;
    this.onSerach({ motCle: this.motCle });
  }
 
  onChangePage(page:Array<any>){
  this.pages = page;
  }

  pageChanged(event:any):void{
    this.currentPage = event;
    window.scrollTo(0, 0);
    this.displayData();
    
  }

}
