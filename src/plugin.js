/*
 * Copyright (c) 2017, Jon McClure <jmcclure@politico.com>
 *
 * License: MIT
 */

import {MegadraftIcons} from "megadraft";

import Button from "./Button";
import Block from "./Block";
import constants from "./constants";


export default {
  title: constants.PLUGIN_NAME,
  type: constants.PLUGIN_TYPE,
  buttonComponent: Button,
  blockComponent: Block,
  options: {
    defaultDisplay: "html",
    displayOptions: [
      {"key": "html", "icon": ()=>null, "label": "HTML"},
      {"key": "css", "icon": ()=>null, "label": "CSS"},
      {"key": "javascript", "icon": ()=>null, "label": "JS"}
    ]
  }
};
