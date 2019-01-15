import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ad} from '../models/models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CassandraService {

  constructor(public httpClient: HttpClient) {
  }

  public getMainAds(): Observable<Ad[]> {
    return this.httpClient.get<Ad[]>('http://localhost:3001/datumSve');
  }

  public getCategory(param): Observable<any> {
    return this.httpClient.post('http://localhost:3001/kategorija', param);
  }

  public register(param): Observable<any> {
    return this.httpClient.post('http://localhost:3001/insert_user', param);
  }

  public login(param): Observable<any> {
    return this.httpClient.post('http://localhost:3001/user', param);
  }

  public getUserAds(url, param): Observable<any> {
    return this.httpClient.post(url, param);
  }

  public postAds(url, param): Observable<any> {
    return this.httpClient.post(url, param);
  }

  public deleteAd(url, param): Observable<any> {
    return this.httpClient.post(url, param);
  }

  public lajkuj(url, param) {
    return this.httpClient.post(url, param);
  }

}
