import { appConfig } from "../../environments/environment";
import { concat } from "rxjs/observable/concat";

/**
 * Application configurations
 *
 * @type {{popularPlacesRoot: string;neuralPredictionRoot: string;weatherPredictionRoot: string}}
 */
export const CONFIGURATIONS = {
  popularPlacesRoot: appConfig.popularPlacesRoot,
  neuralPredictionRoot: appConfig.neuralPredictionRoot,
  weatherPredictionRoot: appConfig.weatherPredictionRoot
};



