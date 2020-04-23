export interface DogResponse {
  message: string;
  status: string;
}

export interface DogObjResponse {
  message: BreedList;
  status: string;
}

export interface BreedList {
  [key: string]: Array<string>;
}

export interface DogArrResponse {
  message: Array<string>;
  status: string;
}
