console.log("person1:show ticket");
console.log("person2:show ticket");
const preMovie =async() =>{
    const promiseWifebringTicket =new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });
    
    const getpopcorn=promiseWifebringTicket.then((t)=>{
        return new Promise((resolve,reject)=> resolve(`${t}popcorn`));
    });
    const addbutter=new Promise((resolve,reject)=>resolve(`butter`));
    let ticket=await promiseWifebringTicket;
    console.log('wife i have the ticket');
    console.log('we should go in ');
    console.log('wife no i am hungry');

    let popcorn=await getpopcorn;
    console.log('wife i got some popcorn');
    console.log('we should go in ');
    console.log('wife  i need butterpopcorn');


    let butter=await addbutter;
    console.log('husband i got some butter on popcorn');
    console.log('we should go in ');
    console.log('wife  lets go we are getting late');


    return ticket;
    return ticket;
}
preMovie().then((m)=>console.log(`person3 show ${m}`));
console.log("person4:show ticket");
console.log("person5:show ticket");