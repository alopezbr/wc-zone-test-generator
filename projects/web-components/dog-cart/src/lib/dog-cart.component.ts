import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DogCartService} from './dog-cart.service';

@Component({
  selector: 'dog-cart',
  templateUrl: './dog-cart.component.html',
  styleUrls: [
    './dog-cart.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DogCartComponent implements OnInit {

  dogBreed: string;
  dogImg: string;
  errorImage = '../assets/images/error.jpg';
  breedList: any = [];
  imageList: any = [];

  constructor(private dogSrv: DogCartService) { }

  ngOnInit() {
    this.getDogBreeds();
  }

  getDogBreeds() {
    this.breedList.length = 0;

    this.dogSrv.getDogBreeds().then(list => {
      list.forEach(value => {
        this.breedList.push({label: value, value});
      });
    });
  }

  getBreedImages(breed) {
    this.dogImg = undefined;
    this.imageList.length = 0;
    this.dogBreed = breed;
    this.dogSrv.setBreed(breed);
    this.dogSrv.getImagesByBreed()
      .then(list => {
        list.forEach(value => {
          this.imageList.push({label: value, value});
        });
      })
      .catch(error => {
        this.dogImg = this.errorImage;
        console.error('Error en la llamda a API Dog: ' + JSON.stringify(error));
      });
  }

  setImg(img: string) {
    this.dogImg = img;
  }

}
