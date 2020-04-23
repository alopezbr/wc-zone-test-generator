import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DogArrResponse, DogObjResponse, DogResponse} from './dog-cart.component.models';

@Injectable({
  providedIn: 'root'
})
export class DogCartService {

  breed: string;
  urls = {
    random: 'https://dog.ceo/api/breeds/image/random',
    allBreeds: 'https://dog.ceo/api/breeds/list/all'
  };

  errorImage = '../assets/images/error.jpg';

  constructor(private http: HttpClient) { }

  getDog(): Promise<string> {
    return this.http.get(this.urls.random).toPromise()
      .then(
        (response: DogResponse) => {
          return  response.message;
        }).catch(error => {
          console.error('ERROR! ' + error);
          return this.errorImage;
        }
      );
  }

  getDogBreeds(): Promise<Array<string>> {
    return this.http.get(this.urls.allBreeds).toPromise()
      .then(
        (response: DogObjResponse) => {
          return Object.keys(response.message);
        });
  }

  getImagesByBreed(): Promise<Array<string>> {
    const url = `https://dog.ceo/api/breed/${this.breed}/images`;
    return this.http.get(url).toPromise()
      .then(
        (response: DogArrResponse) => {
          return response.message;
        });
  }

  setBreed(value: string) {
    this.breed = value;
  }
}
