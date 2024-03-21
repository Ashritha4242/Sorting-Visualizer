// import {sleep} from "./helpers/util.js";
import {SortingAlgorithms} from "./helpers/sortingAlgorithms.js";

import {sleep} from "./helpers/util.js"


let nBars=10
let numberBars=document.getElementById('numbersBars')

const stage=document.getElementById('stage')
stage.style.width=`${nBars * 30}px`

const selectalgorithm=document.getElementById('selectalgorithm')

const generateBtn=document.getElementById('generateBtn')

const solveBtn=document.getElementById('solveBtn')

let bars=[]
let barsDiv=[]

const sortingAlgorithms=new SortingAlgorithms({})
const start=()=>{
    stage.innerHTML=''
    bars=Array(nBars).fill(0).map(_=>{
        return {
            // The width of each bar is set to 20 pixels, and the height is set to a random value between 1 and 200 pixels.
            width:20,
            height:Math.floor(Math.random() * 200)+1
        }
    })
    barsDiv=[]
    for (let i = 0; i < bars.length; i++) {
       const bar=document.createElement('div')
    //    This sets the width of the current bar to the width specified in the bars array.
       bar.style.width=`${bars[i].width}px`

       bar.style.height=`${bars[i].height}px`
    //    This sets the horizontal position of the current bar. It seems to be arranging the bars with a 
    // fixed margin of 5 pixels and increasing the position by 30 pixels for each bar.
        bar.style.left=`${5+i*30}px`
        bars[i]={...bars[i],position:i}
        // class might be used to apply styling to the bars via CSS.
        bar.classList.add('bar')
        barsDiv.push(bar)
        stage.appendChild(bar)
    }
}
start()

async function swapBars(barsDiv,i,j){
    barsDiv[i].style.left=`${5+j*30}px`
    barsDiv[i].classList.add('activate')
    barsDiv[j].style.left=`${5+i*30}px`
    barsDiv[j].classList.add('activate')
    await sleep(300)
    barsDiv[i].classList.remove('activate')
    barsDiv[j].classList.remove('activate')
    let temp=barsDiv[i]
    barsDiv[i]=barsDiv[j]
    barsDiv[j]=temp

}

const algorithms=[
    sortingAlgorithms.bubbleSort,
    sortingAlgorithms.selectionSort,
    sortingAlgorithms.quickSort
]

const solve=async()=>{
    const array=structuredClone(bars.map(el=>el.height))

    const swaps=algorithms[selectalgorithm.selectedIndex](array)

    for (let i = 0; i < swaps.length; i++) {
       if(swaps[i].firstPosition!=swaps[i].lastPosition){
        await swapBars(barsDiv,swaps[i].firstPosition,swaps[i].lastPosition)
       }
    }
}

generateBtn.addEventListener('click',()=>{
    nBars=parseInt(numberBars.value,10)
    stage.style.width=`${nBars * 30}px`
    start()
})

solveBtn.addEventListener('click',()=>{
    solve()
})



