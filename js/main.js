//PROMISE :THEN CATCH
// function sayHi() {
//     alert('Привет');
//   }
  
//   setTimeout(sayHi, 1000);

//иммитация запроса
// console.log('request data...')
// setTimeout(()=>{
//     console.log('preparing data')

//     const backendData={
//         server:'AAA',
//         port:2000,
//         status:'working',
//     }
//     setTimeout(()=>{
//         backendData.modified=true
//         console.log('data recieved',backendData)
//     },2000)
// },2000)

// const p=new Promise((resolve,reject)=>{ //resolve=then;reject=catch
//     setTimeout(()=>{
//         console.log('preparing data...')
//         const backendData={
//          server:'AAA',
//          port:2000,
//          status:'500-server not working',
//     }
//     // resolve(backendData)
//     reject(backendData)
// },2000)
// })
// // p.then((data)=>{
// //     console.log('promise resolved',data)
// // })

// p
// .then((data)=>console.log('ok',data))
// .catch((err)=>{
//     console.error('ERROR: ',err)
// }).finally((data)=>console.log('Final'))


//////FETCH ====ASYNC====AWAIT====

// const search=async()=>{                 //async всегда вместе с await
// let url='http://www.samurai.com/users'
// let response=await fetch(url)
// let request=await response.json()
// console.log(request)
// }
////////////API
// const KEY='9UVFWc8feZDlStr8ypDzUHTSVXQAG1ko'
const API='https://api.giphy.com/v1/gifs/search?api_key='
const KEY='9UVFWc8feZDlStr8ypDzUHTSVXQAG1ko'  //=&limit=25&offset=0&rating=g&lang=en
const secondStr='&limit=25&q='//0&rating=g&lang=en

const input=document.getElementById('searchGiphy')
const btn=document.getElementById('btn')
const output=document.getElementById('output')

const search=async()=>{
    let text=input.value
    let url=API+KEY+secondStr+text
    let response=await fetch(url)
    let request=await response.json()
console.log(request)

    output.innerHTML=''
    input.value=''
    renderGiphy(request.data)
    
  
    // text=''
    // console.log(request)

}
const renderGiphy=(data)=>{
// let data=request.data
data.forEach(element=>{
    let ifrm=document.createElement('iframe')
    ifrm.src=element.embed_url
    let h3=document.createElement('h3')
    h3.innerHTML=element.title
    let dif=document.createElement('div')
    dif.classList.add('allgif')
    output.append(dif)
    dif.append(ifrm,h3)
})
}
btn.addEventListener('click',search)

