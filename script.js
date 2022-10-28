//https://api.apify.com/v2/datasets/Aho45bCRjOsOugEs4/items?clean=true&format=json phone&tablet
//https://api.apify.com/v2/datasets/GzfQmyagzEy8sAec5/items?clean=true&format=json black friday
//https://api.apify.com/v2/datasets/IZ4ttpbhx2MIxYezr/items?clean=true&format=json best price
//https://api.apify.com/v2/datasets/arKAIVoCnCZ2niplY/items?clean=true&format=json free delivery
//https://api.apify.com/v2/datasets/X8IbJ2jxjW2jPICqU/items?clean=true&format=json traditional wear
//https://api.apify.com/v2/datasets/sXHUdmKCJLHEdWuM9/items?clean=true&format=json half price
//https://api.apify.com/v2/datasets/NgopfmIaOx8MGzcy2/items?clean=true&format=json fashion


const itemsArr = ['Supermarket', 'Health & Beauty', 'Home & Office', 'Phones & Tablets', 'Computing', 'Electronics', 'Fashion', 'Baby Products', 'Gaming', 'Sporting Goods', 'AutoMobile', 'Other categories']

const items = document.querySelector('.items')

itemsArr.forEach((item) => {
    const p = document.createElement('p')
    p.innerHTML = item
    items.appendChild(p)
})

// setInterval(()=>console.log('bitch every 2 secs'))

// carousel

const imgs = [
    "./images/slider_1.jpeg",
    "./images/slider_2.jpeg",
    "./images/slider_3.jpeg",
    "./images/slider_4.png",
    "./images/slider_5.gif",
    "./images/slider_6.png",
    "./images/slider_7.jpeg",
]

const carousel = document.querySelector('.carousel')
// const circles = document.querySelector('.circles')
const img = document.createElement('img')
// img.src=imgs[0]

let counter = 0;

const circles = Array.from(document.querySelectorAll('.circle'))
console.log(circles)
// circles[0].setAttribute('style', 'background:#f68b1e;')



// imgs.forEach((img)=>{
//     const div =document.createElement('div')
//     div.setAttribute('style', 'height:10px; width:10px; border-radius:100%; background:#ddd; margin: 0 .4rem')
//     circles.appendChild(div)
// })

// circles.forEach((circle) => {
//     circles.indexOf(circle)=== counter ? circle.setAttribute('style', 'background: #f68b1e;') : circle.setAttribute('style', 'background: #f68b1e;')
// })

carousel.appendChild(img),
    setInterval(() => {
        if (counter < imgs.length) {
            img.src = imgs[counter]
            circles.forEach((circle) => {
                circle.setAttribute('style', `background: ${counter === circles.indexOf(circle) ? '#f68b1e' : '#ddd'}`)
            })
            counter++
        } else {
            counter = 0
        }

    }, 1000)

