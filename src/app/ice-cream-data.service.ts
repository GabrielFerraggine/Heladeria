import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IceCream } from './ice-cream-list/IceCream';

const ENDPOINTURL = 'https://687bd254b4bc7cfbda87606f.mockapi.io/stock'
@Injectable({
  providedIn: 'root'
})
export class IceCreamDataService {

  constructor(private http: HttpClient) { }

  public get(): Observable<IceCream[]> {
    return this.http.get<IceCream[]>(ENDPOINTURL)
           .pipe(
              tap((ice_cream: IceCream[]) => ice_cream.forEach(ice_cream =>ice_cream.weightQuantity = 0))
            );
  }
  getById(id: number): Observable<IceCream> {
    return this.http.get<IceCream>(`${ENDPOINTURL}/${id}`);
  }
  public delete(id: number): Observable<void> {
      return this.http.delete<void>(`${ENDPOINTURL}/${id}`);
  }

  public pathStock(id: number, newStock: number): Observable<IceCream> {
    return this.http.put<IceCream>(`${ENDPOINTURL}/${id}`, {
      weightStock: newStock
    }); 
  }


}
  