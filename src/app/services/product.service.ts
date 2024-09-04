import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private readonly _httpClient=inject(HttpClient) ;

  private apiUrl = 'https://fakestoreapi.com/products';

  


  constructor() { }

  Products(product: any): Observable<any> {
    return this._httpClient.get(this.apiUrl, product);
  }



  
}
