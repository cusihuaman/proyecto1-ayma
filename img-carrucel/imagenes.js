const imgs=document.getElementById('imgs')
const leftBtn=document.querySelectorAll('left')
const rightBtn=document.querySelectorAll('right')

const img=document.querySelectorAll('#imgs img')
let idx=0
console.log(img)

let interval=setInterval(run,2000)

function run(){
    idx++
    changeImage()
}

function changeImage(){
    if(idx>img.length-1){
        idx=0
    }
    else if(idx<0){
        idx=img.length-1
    }
    imgs.style.transform=`translateX(${-idx * 500}px)`
}