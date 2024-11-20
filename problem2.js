import fs from 'fs/promises';

// 1. Read the given file lipsum.txt

export function getData() {

    return fs
        .readFile('lipsum.txt', 'utf8')
        .then((data) => {
            return (data);
        })
        .catch((err) => {
            console.log(err);
        })
}

export function converttoUpperCase(data) {


    let modifiedData = data.toUpperCase();

    return fs
        .writeFile('uppercase.txt', modifiedData)
        .then(() => {
            console.log(" uppercase.txt file created");
            return fs.appendFile('filenames.txt', 'uppercase.txt ')
        }).then(() => {
            console.log(" uppercase.txt file appended");
            return  fs.readFile("uppercase.txt", 'utf8')
        }).then((data)=> {
                console.log(data);
               return data;
            }).catch((err)=>{
                console.log(err);
            })
}


export function converttoLowerCase(data) {


    let lowercaseData = data.toLowerCase().split(' ');
    let newString = lowercaseData.join("\n");

    return fs
    .writeFile('lowercase.txt', newString)
    .then(() => {
        console.log(" lowercase.txt file created");
        return fs.appendFile('filenames.txt', 'lowercase.txt ')
    }).then(() => {
        console.log(" lowercase.txt file appended");
        return  fs.readFile("lowercase.txt", 'utf8')
    }).then((data)=> {
            console.log(data);
           return data;
        }).catch((err)=>{
            console.log(err);
        })
}


export function toSort(data) {

    let sortedData = data.split('\n').sort().join('\n');

    return fs
    .writeFile('sorteddata.txt', sortedData)
        .then(() => {
            console.log(" sorteddata.txt file created");
            return fs.appendFile('filenames.txt', 'sorteddata.txt');
        }).then(() => {
            console.log(" sorteddata.txt file appended");
            return  fs.readFile("filenames.txt", 'utf8')
        }).then((data)=> {
                //console.log(data);
               return data;
            }).catch((err)=>{
                console.log(err);
            })
}

export function deleteFiles(data) {

    const array = data.split(' '); 
    const filesDeletedPromises = []; 
  
    for (let filePath of array) {
      const deletePromise = fs.unlink(filePath)
        .then(() => {
          console.log(`File deleted: ${filePath}`);
        })
        .catch((err) => {
          console.error(`Error deleting file: ${filePath}`, err);
        });
  
      filesDeletedPromises.push(deletePromise); 
    }
  
    return Promise.all(filesDeletedPromises)
      .then(() => {
        console.log("All files deleted successfully.");
      })
      .catch((err) => {
        console.error("Error deleting files:", err);
      });
  }













