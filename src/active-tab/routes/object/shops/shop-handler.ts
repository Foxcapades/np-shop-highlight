"use strict";

import { getConfig } from "../../../../config/Configuration";
import { findAll } from "../../../../lib/dom/query";
import * as IM from "../../../lib/item-match/handler";
import * as MS from "../../../lib/mini-stock/handler";
import { ObjectDetails } from "../types";
import { debugIn, debugOutVoid } from "../../../../lib/logging";

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// Constants
//
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

/**
 * Shop item link document query.
 *
 * Used to locate links that may be relevant as shop items.
 */
const ANCHOR_QUERY = "a[onclick]";

const tag = (n: string) => __filename + ":" + n;

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//
// Functions
//
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

export function shopHandler(params: ObjectDetails): void {
  debugIn(tag("shopHandler"), { params });

  const config = getConfig();
  const nodes = findAll<HTMLAnchorElement>(ANCHOR_QUERY);

  if (config.itemMatch.enabled)
    IM.handler(nodes)
      .catch(console.log);

  if (config.miniStock.enabled)
    MS.handler(nodes, params.id)
      .catch(console.log);

  debugOutVoid(tag("shopHandler"));
}
