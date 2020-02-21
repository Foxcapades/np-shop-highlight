import { shopHandler } from "./shops/shop-handler";
import { ObjectDetails, ObjectHandler, ObjectHandlerMap } from "./types";
import { debug } from "../../../lib/logging";

const OBJECT_TYPE_KEY = "type";
const OBJECT_ID_KEY = "obj_type";

const tag = (n: string) => __filename + ":" + n;
const tagIn = (n: string) => tag(n) + ".start";
const tagOut = (n: string) => tag(n) + ".stop";

/**
 * Object type routes
 */
const objectHandlers: ObjectHandlerMap = {
  "shop": shopHandler,
};

const defaultHandler: ObjectHandler = (_) => {
};

function parseObjectUrl(): ObjectDetails {
  debug(tagIn("parseObjectUrl"), null);

  const url = new URLSearchParams(window.location.search);

  return debug(tagOut("parseObjectUrl"), {
    type: url.get(OBJECT_TYPE_KEY) || "",
    id: parseInt(url.get(OBJECT_ID_KEY) || "0"),
  });
}

export function objectHandler() {
  const params = parseObjectUrl();

  (objectHandlers[params.type] || defaultHandler)(params);
}
