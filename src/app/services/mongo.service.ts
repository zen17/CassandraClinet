import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  private url: string = 'http://localhost:3001/';

  constructor(public httpClient: HttpClient) {
  }

  public getMainAds(): Observable<any> {
    return this.httpClient.post<any>(this.url + 'sve',{});
  }

  public getMyAds(param): Observable<any> {
    return this.httpClient.post<any>(this.url + 'moji', param);
  }

  public getLikedAds(param): Observable<any> {
    return this.httpClient.post<any>(this.url + 'lajkovani', param);
  }

  public postAd(param): Observable<any> {
    return this.httpClient.post<any>(this.url + 'insert', param);
  }

  public likeAd(param): Observable<any> {
    return this.httpClient.post<any>(this.url + 'lajkuj', param);
  }

  public searachCategory(param): Observable<any> {
    return this.httpClient.post<any>(this.url + 'kategorija', param);
  }

  public login(param): Observable<any> {
    return this.httpClient.post<any>(this.url + 'login', param);
  }

  public deleteAd(param): Observable<any> {
    return this.httpClient.post<any>(this.url + 'delete', param);
  }

  public signIn(param): Observable<any> {
    return this.httpClient.post<any>(this.url + 'insert_user', param);
  }

  public commentAd(param): Observable<any> {
    return this.httpClient.post<any>(this.url + 'komentarisi', param);
  }

  public getComments(param): Observable<any> {
    return this.httpClient.post<any>(this.url + 'vrati_komentar', param);
  }

  public getAd(param): Observable<any> {
    return this.httpClient.post<any>(this.url + 'oglas', param);
  }
}
