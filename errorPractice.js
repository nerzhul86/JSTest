
try{

    const leaderBoard = await fetchLeaderBoard();

    console.log(leaderBoard);
}
catch(error)
{
    console.log("Our Servers are down but we'll be up and running soon.");
}



async function fetchLeaderBoard()
{
    const response = await fetch('https://fantasyquest.servers');
    return response.json();
}



/*
try{

    printStats(11);
    printStats('a');
}
catch(error)
{
    console.log(error);
}


function printStats(level)
{
    if(isNaN(level))
    {
        throw new Error ('Level is not a valid number');
    }

    console.log(`Your character is at level ${level}.`);

}
*/