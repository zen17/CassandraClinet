import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  private url: string = 'http://localhost:3001/';

  constructor(private httpClient: HttpClient) {
  }

  public getMainAds(): Observable<any> {
    return this.httpClient.get(this.url + 'sve');
  }

  public getMyAds(param): Observable<any> {
    return this.httpClient.post(this.url + 'moji', param);
  }

  public getLikedAds(param): Observable<any> {
    return this.httpClient.post(this.url + 'lajkovani', param);
  }

  public postAd(param): Observable<any> {
    return this.httpClient.post(this.url + 'insert', param);
  }

  public likeAd(param): Observable<any> {
    return this.httpClient.post(this.url + 'lajkuj', param);
  }

  public serachCategory(param): Observable<any> {
    return this.httpClient.post(this.url + 'kategorija', param);
  }

  public login(param): Observable<any> {
    return this.httpClient.post(this.url + 'login', param);
  }

  public deleteAd(param): Observable<any> {
    return this.httpClient.post(this.url + 'delete', param);
  }
  public signIn(param): Observable<any> {
    return this.httpClient.post(this.url + 'insert_user', param);
  }
}
