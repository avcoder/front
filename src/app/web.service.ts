import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  BASE_URL: string = 'http://localhost:3000';
  games: Array<object>;

  constructor(private httpClient: HttpClient) {}

  getGames() {
    return this.httpClient.get(`${this.BASE_URL}/games`).toPromise();
  }
}
