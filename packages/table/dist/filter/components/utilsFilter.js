"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reorderValues = exports.operations = exports.FILTER_SCHEMA_KEY = void 0;
const FILTER_SCHEMA_KEY = "schema";
exports.FILTER_SCHEMA_KEY = FILTER_SCHEMA_KEY;
const baseTranslation = "preperation.filter.operations.";

const operations = t => ({
  commonOperations: [{
    key: "equals",
    name: t(`${baseTranslation}equals`),
    type: "common",
    valSize: 1
  }, {
    key: "notEquals",
    name: t(`${baseTranslation}notEquals`),
    type: "common",
    valSize: 1
  }, {
    key: "isNull",
    name: t(`${baseTranslation}isNull`),
    type: "common"
  }, {
    key: "isNotNull",
    name: t(`${baseTranslation}isNotNull`),
    type: "common"
  }, {
    key: "isEmpty",
    name: t(`${baseTranslation}isEmpty`),
    type: "common"
  }, {
    key: "isNotEmpty",
    name: t(`${baseTranslation}isNotEmpty`),
    type: "common"
  }, {
    key: "contains",
    name: t(`${baseTranslation}contains`),
    type: "common",
    valSize: 1
  }, {
    key: "notContaines",
    name: t(`${baseTranslation}notContaines`),
    type: "common",
    valSize: 1
  }],
  stringOptions: [{
    key: "regex",
    name: t(`${baseTranslation}regex`),
    type: "string",
    valSize: 1
  }, {
    key: "startWith",
    name: t(`${baseTranslation}startWith`),
    type: "string",
    valSize: 1
  }, {
    key: "endWith",
    name: t(`${baseTranslation}endWith`),
    type: "string",
    valSize: 1
  }],
  numericOptions: [{
    key: "between",
    name: t(`${baseTranslation}between`),
    type: "number",
    valSize: 2
  }],
  dateOptions: [{
    key: "dateFrom",
    name: t(`${baseTranslation}dateFrom`),
    type: "date",
    valSize: 1
  }, {
    key: "dateTo",
    name: t(`${baseTranslation}dateTo`),
    type: "date",
    valSize: 1
  }, {
    key: "between",
    name: t(`${baseTranslation}between`),
    type: "date",
    valSize: 2
  }],
  mapOptions: [{
    key: "surrounded",
    name: t(`${baseTranslation}surrounded`),
    type: "geographic",
    valSize: 1
  }]
});

exports.operations = operations;

const reorderValues = (type, op) => {
  return !op.valSize ? [] : [...new Array(op.valSize).fill(type === "date" ? new Date().toISOString() : type === "number" ? 0 : type === "geographic" ? undefined : "")];
};

exports.reorderValues = reorderValues;
//# sourceMappingURL=utilsFilter.js.map