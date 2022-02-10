import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class PixaService {
   apiHost = environment.api_host;
   apiKey = environment.api_key;
  constructor(private http:HttpClient) { }

getData(data:any,size:any,currentPage:any){
 return this.http.get(this.apiHost+ this.apiKey +"&q=" + data + "&per_page="+size+"&page="+currentPage);
}
}
