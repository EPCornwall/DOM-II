// element.addEventListener('click', (event) => {//Handle event});
// create 10 [unique event listeners
// * [1 ] `mouseover`
// * [2 ] `keydown`
// * [3 ] `click`
// * [4 ] `mouseout`
// * [5 ] `load`
// * [6 ] `dblclick`
// * [7 ] ``

const funBusClick = document.querySelector('.logo-heading')
funBusClick.addEventListener('click', ()=>{
    funBusClick.style.color = 'pink';
})

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



// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly


// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`



