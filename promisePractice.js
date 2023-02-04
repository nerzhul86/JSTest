
const applyDamage = (damage, hp)=>{

    return new Promise((resolve, reject)=>{

        if(damage>10)
        {
            let message = `Player destroyed with ${damage} damage dealt! HP is ${hp-damage}`;
            resolve(message);
        }
        else
        {
            reject(`PATHETIC! Player barely bruised by damage ${damage}`);
        }
    });
}


let damage = 5;
let hp = 10;

applyDamage(damage, hp)
.then((message)=>{
    console.log(message);
})
.catch((msg)=>{
    console.log(msg);
})