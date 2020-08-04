// Your code goes here
// element.addEventListener('click', (event) => {//Handle event});
// create 10 [unique event listeners
// * [1 ] `mouseover`
// * [2 ] `keydown`
// * [3 ] `click`
// * [4 ] `mouseout`
// * [5 ] `load`
// * [6 ] `dblclick`
// * [7 ] `auxclick`
// * [8 ] `scroll`
// * [9 ] `keyup`
// * [10] `mouseup`

const funBusClick = document.querySelector('.logo-heading')
funBusClick.addEventListener('click', ()=>{
    funBusClick.style.color = 'pink';
})


// const navHover = document.querySelector('.nav')
// navHover.addEventListener('mouseover', (event)=>{
//     navHover.style.backgroundColor = 'green';
//     event.stopImmediatePropagation();
// })

const bannerHover = document.querySelector('.nav a')
bannerHover.addEventListener('mouseover', ()=>{
    bannerHover.style.color = 'pink';
})


document.addEventListener('keydown', function (event){
    if (event.key === 'Escape'){
        document.body.style.backgroundColor = 'blue';
    }
} )

const bannerMouseout = document.querySelector('.nav a')
bannerMouseout.addEventListener('mouseout', ()=>{
    bannerMouseout.style.color = 'red';
})

window.addEventListener('load', () => {
    console.log('It lives')
  })

funBusClick.addEventListener('dblclick', ()=>{
    funBusClick.style.color = 'black';
})

const button = document.querySelector('.btn')
button.addEventListener('auxclick', ()=>{
    button.style.backgroundColor = 'pink';
})

window.addEventListener('scroll', ()=> {
    document.body.style.backgroundColor = 'pink'
})

document.addEventListener('keyup', function (event){
    if (event.key === 's'){
        document.body.style.backgroundColor = 'green';
    }
} )

//doubeclick footer color 1
const foot = document.querySelector('.footer p')
foot.addEventListener('dblclick', (event)=>{
    foot.style.backgroundColor = 'red';   
    event.stopPropagation();
})


//doubleclick text color 2

const foots = document.querySelector('.footer')
foots.addEventListener('dblclick', ()=>{
    foots.style.backgroundColor = 'green';
    foot.style.backgroundColor = 'transparent';
})

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly


// * [x ] Stop the navigation items from refreshing the page by using `preventDefault()`

document.querySelectorAll('.nav a').forEach(item =>{
    item.addEventListener('click', function (evt){
      evt.preventDefault()
  })
})

