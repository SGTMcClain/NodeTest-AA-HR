var fs = require('fs');
const dataStore = require('./data-store');


const writeJSON = (path, jsonfile) => {
    const json = JSON.stringify(jsonfile)
    console.log(json)
    return path
};


const createDirectoryIfNotExists = (path) => {

    if(!fs.existsSync(path)){
        fs.mkdirSync(path)
        console.log('created folder')
    }
    console.log('failed to create folder')
    return path
}



module.exports = {
    
    // Do not modify the names of the exports
    writeJSON: writeJSON,
    createDirectoryIfNotExists: createDirectoryIfNotExists
};
