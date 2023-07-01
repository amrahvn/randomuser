

let btn=document.querySelector('.btn')
let btn2=document.querySelector('.btn2')


function autoplay(){

    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(data=>{

        let x=''

        for(let user of data.results){
            x+=`
            <div class="card">
               <img src=${user.picture.medium} alt="">
           </div>
            `
        }

        document.querySelector('.img').innerHTML=x
    })


    .catch(err=>console.log(err))
}

btn.onclick=function(){
 
    autoplay();
}
btn2.onclick=function(){
    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(data=>{

        let x=''

        for(let user of data.results){
            x+=`
            <div class="card">
               <img src=${user.picture.medium} alt="">
           </div>
            `
        }

        document.querySelector('.img').innerHTML=x
    })

    .catch(err=>console.log(err))
}

setInterval(() => {
    autoplay();
}, 3000);
