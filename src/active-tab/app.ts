/**
 * @typedef {function():void} Handler
 *     Handler function
 */

import { objectHandler } from "./routes/object/object-handler";
import Storage from "../lib/store/static-store";
import { APP_CONFIG_KEY } from "../config/Constants";
import { AppConfig, defaultAppConfig } from "../config/types/app-config";
import { setConfig } from "../config/Configuration";
import { Option } from "../lib/option";

export interface RouteMap {
  [route: string]: () => void;
}

/**
 * Active Route Registry
 *
 * @type {{[string]: objectHandler}}
 */
const recognizedPaths: RouteMap = {
  "/objects.phtml": objectHandler,
};

// Load Configuration then start the handler
Storage.loadLocal<AppConfig>(APP_CONFIG_KEY)
  .then(orDefault)
  .then(setConfig)
  .then(callRoute)
  .catch(configErr);

function orDefault(o: Option<AppConfig>) {
  return o.orElseGet(defaultAppConfig);
}

function callRoute(_: any): void {
  Option.objectGet(recognizedPaths, window.location.pathname)
    .orElse(() => {})();
}

function configErr(e: Error): void {
  throw new Error("Failed to load configuration: " + e);
}

