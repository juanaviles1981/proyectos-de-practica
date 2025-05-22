import {config} from 'dotenv';
config();
// console.log(process.env.MONGODB_URI);
//console.log(process.env.MONGODB_URI);
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/test'; //Si no hay una variable de entorno, se conecta a la base de datos local

export const PORT = process.env.PORT || 3000; //Si no hay una variable de entorno, se conecta al puerto 3000