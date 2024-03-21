// sleep function that uses promises to pause execution for a specified amount of time. 
const sleep=async(ms)=>{
    return new Promise(resolve=>setTimeout(resolve,ms))
}
// setTimeout() sets a timer that executes some code once the timer expires.
export{
    sleep
}