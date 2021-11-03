import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_ROUTES } from '@data/constants/routes';
import { IProduct } from '@data/interfaces/api/iproduct.metadats';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  /**
   * 
   * @returns 
   */
  getProducts(): Observable<{
    error: boolean,
    msg: string,
    data: IProduct[],
  }> {
    const response = { error: true, msg: '', data: null };
    return this.httpClient.get<IProduct[]>(`${API_ROUTES.ECOMMERCE.PRODUCTS}?limit=8`)
      .pipe(
        map(r => {
          response.msg = 'Get products';
          response.error = false;
          response.data = r;
          return response;
        }),
        catchError(this.error)
      );
  }

  /**
   * 
   * @returns 
   */
  getProductById(id: number): Observable<{
    error: boolean,
    msg: string,
    data: IProduct,
  }> {
    const response = { error: true, msg: '', data: null };
    return this.httpClient.get<IProduct>(`${API_ROUTES.ECOMMERCE.PRODUCTS}/${id}`)
      .pipe(
        map(r => {
          response.msg = 'Get product by id';
          response.error = false;
          response.data = r;
          return response;
        }),
        catchError(this.error)
      );
  }

  /**
   * 
   * @returns 
   */
  getCategories(): Observable<{
    error: boolean,
    msg: string,
    data: string[],
  }> {
    const response = { error: true, msg: '', data: null };
    return this.httpClient.get<string[]>(API_ROUTES.ECOMMERCE.CATEGORIES)
      .pipe(
        map(r => {
          response.msg = 'Get categories';
          response.error = false;
          response.data = r;
          return response;
        }),
        catchError(this.error)
      );
  }

  /**
   * 
   * @returns 
   */
  getProductsByCategory(category: string): Observable<{
    error: boolean,
    msg: string,
    data: IProduct[],
  }> {
    const response = { error: true, msg: '', data: null };
    return this.httpClient.get<IProduct[]>(`${API_ROUTES.ECOMMERCE.CATEGORY}/${category}`)
      .pipe(
        map(r => {
          response.msg = 'Get products by category';
          response.error = false;
          response.data = r;
          return response;
        }),
        catchError(this.error)
      );
  }


  /**
   * Handle error
   * @param error 
   * @returns error
   */

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return of({ error: true, msg: errorMessage, data: null });
  }
}
