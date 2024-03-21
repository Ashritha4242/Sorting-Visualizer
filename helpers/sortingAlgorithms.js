class SortingAlgorithms{
    constructor({swapBars}){
        this.swapBars=swapBars;
    }
    bubbleSort(array){
        const swaps=[]
        for (let i = 0; i < array.length; i++) {

            // last element gets sorted after traversing
           for (let j = 0; j < array.length-i-1; j++) {
            if(array[j]>array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                swaps.push({firstPosition:j,lastPosition:j+1})
            }
            
           }
            
        }
    return swaps;
    }
}
export{
    SortingAlgorithms
}