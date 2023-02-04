// Use an API and check the headers and use GET
// Check Network tab
// Check JSON stringify and parse methods


let postURL = 'https://jsonplaceholder.typicode.com/posts';

// for POST, we need body and settings

let postObj = {
    title: 'foo',
    body: 'bar',
    userId: 1
}

let settings = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(postObj)
}

fetch(postURL,settings)
.then((result)=>{

    return result.json();

})
.then((data)=>{
    console.log(data);
})
.catch(error => {
    console.log(error);
})

/*

//GET operation

let url = "https://pokeapi.co/api/v2/pokemon/clefairy";


fetch(url)
.then((response)=>{

    console.log("Response headers:");
    console.log(response.headers.get('Content-Type'));
    console.log(response.headers.get('Accept'));
    console.log(response.headers.get('X-HTTP-Method-Override'));
    console.log(response.headers.get('X-HTTP-Status-Code-Override'));

    
    return response.json();
})
.then((data)=>{

    console.log(data);

    //return JSON.stringify(data);
})
/*
.then((stringD)=>{
    console.log(typeof(stringD));
    console.log(stringD);
})

.catch(error => {
    console.log(error);
})

*/