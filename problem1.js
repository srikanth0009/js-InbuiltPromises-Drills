import fs from 'fs/promises';
import path from 'path';


//Create a directory of random JSON files

export function createDirectory(){

    const dirPath = path.join(process.cwd(),'jsonFiles');

    return fs
    .mkdir(dirPath, { recursive: true })
    .then(() => {
      console.log("Directory created successfully.");
    })
    .catch((err) => {
      console.error("Error creating directory:", err);
    });
}


export function createFiles(){

    let path = '';

    const filesCreated = [];

     for(let i=1;i<=3;i++){

        path = `jsonFiles/file${i}.json`;

        const promise =  fs

        .writeFile(path,'This is a json file')
        .then(() => {
            console.log("file created successfully.");
          })
          .catch((err) => {
            console.error("Error creating file:", err);
          });

        filesCreated.push(promise);
    }

    return Promise.all(filesCreated).then(()=> {
        //console.log(filesCreated);
        console.log("Files are created");
    })
}


export function deleteFiles(){

    let path = '';
    const filesDeleted = [];

    for(let i=1;i<=3;i++){
        
        path = `jsonFiles/file${i}.json`;

        const promise = fs.unlink(path)
        .then(() => {
            console.log("Directory created successfully.");
          })
          .catch((err) => {
            console.error("Error creating directory:", err);
          });
          
        filesDeleted.push(promise);
    }

    return Promise.all(filesDeleted).then(()=>{
        console.log("Files deleted successfully");
    })
}
