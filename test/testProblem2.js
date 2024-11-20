import fs from 'fs';

import { getData, converttoUpperCase, converttoLowerCase, toSort, deleteFiles } from "../problem2.js";


let hii = "This is my first lipsum file";

fs.writeFile('lipsum.txt', hii, (err) => {
    if (err) {
        console.log(err);
    }
});


getData()
    .then((response) => {
        console.log(response);
    return converttoUpperCase(response)})
    .then((response) => {
        console.log(response);
    return converttoLowerCase(response)})
    .then((response) => toSort(response))
    .then((response) => {
        console.log(response);
        deleteFiles(response)});
