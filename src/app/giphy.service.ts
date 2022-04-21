import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  constructor(private http: HttpClient) {}
  getGiphyImages() {
    const params = {
      api_key: 'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY',
      limit: 10,
      offset: 0,
      rating: 'G',
      lang: 'en',
    };
    return this.http.get('https://api.giphy.com/v1/gifs/trending', { params });
  }

  getuserGiphyImages(searchTerm: string) {
    const params = {
      api_key: 'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY',
      q: searchTerm,
      limit: 10,
      offset: 0,
      rating: 'G',
      lang: 'en',
    };
    return this.http.get('https://api.giphy.com/v1/gifs/search',{ params });
  }
}
