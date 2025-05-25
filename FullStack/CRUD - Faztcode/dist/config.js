"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGODB_URI = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
// console.log(process.env.MONGODB_URI);
//console.log(process.env.MONGODB_URI);
var MONGODB_URI = exports.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/test'; //Si no hay una variable de entorno, se conecta a la base de datos local

var PORT = exports.PORT = process.env.PORT || 3000; //Si no hay una variable de entorno, se conecta al puerto 3000