import { Injectable } from '@angular/core';
import { Producto } from '../data-models/producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) { }

  public getProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>('https://localhost:44365/productos/getproductos');
  }

  public getByFiltros(data: string): Observable<any> {
    return this.httpClient.get('https://localhost:44365/productos/getbyfiltros'+ data);
  }

  public create(data: string): Observable<any> {
    return this.httpClient.post('https://localhost:44365/productos/create' + data, null);
  }

  public edit(data: string): Observable<any> {
    return this.httpClient.post('https://localhost:44365/productos/edit'+ data, null);
  }

  public delete(data: string): Observable<any> {
    return this.httpClient.post('https://localhost:44365/productos/delete'+ data, null);
  }

}
