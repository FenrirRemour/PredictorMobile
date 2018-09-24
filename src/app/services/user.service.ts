import {Injectable} from '@angular/core';
import {HttpUtils} from "../utils/http-utils";
import {CONFIGURATIONS } from "../config/constants.model";

@Injectable()
export class UserService {

  constructor(private httpUtils: HttpUtils) { }

  /**
   * get current user details
   * @returns {any} user details
   */

  getPopularPlaces(lat: string,lng: string,radius: string): any {
    let url = CONFIGURATIONS.popularPlacesRoot.replace('{LAT}', lat);
    url = CONFIGURATIONS.popularPlacesRoot.replace('{LNG}', lng);
    url = CONFIGURATIONS.popularPlacesRoot.replace('{RADIUS}', radius);
    return this.httpUtils.httpGet(url);
  }

 
  getNeuralPredictions(): any {
    let url = CONFIGURATIONS.neuralPredictionRoot;
    return this.httpUtils.httpGet(url);
  }
  

  getWeatherPredictions(lat: string,lng: string,radius: string): any {
    let url = CONFIGURATIONS.weatherPredictionRoot.replace('{LAT}', lat);
    url = CONFIGURATIONS.weatherPredictionRoot.replace('{LNG}', lng);
    url = CONFIGURATIONS.weatherPredictionRoot.replace('{RADIUS}', radius);
    return this.httpUtils.httpGet(url);
  }
}
