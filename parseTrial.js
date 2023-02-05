// JSON.Parse converts a JSON String to a JS Object

try{


let data = `{
    "game":"Hitman 1",
    "year": 2019,
    "Key Misson": "Fashion Show in Paris",
    "Target": "Victor Nabokhov, Dalia Margolis"
  }`;


console.log("Before Parsing");

console.log(typeof data);

let dataObj = JSON.parse(data);

console.log("After Parsing");

console.log(typeof dataObj);

console.log(dataObj);
}
catch(error)
{
    console.log("Error processing String");
    console.log(error);
}