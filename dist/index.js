"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Lariba: () => Lariba
});
module.exports = __toCommonJS(index_exports);
var Lariba = class {
  constructor(apiKey, baseUrl = "http://localhost:8000") {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }
  async track(event, properties = {}) {
    const res = await fetch(`${this.baseUrl}/v1/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": this.apiKey
      },
      body: JSON.stringify({
        event,
        properties,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      })
    });
    if (!res.ok) {
      throw new Error(`Lariba API error: ${res.status}`);
    }
    return res.json();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Lariba
});
