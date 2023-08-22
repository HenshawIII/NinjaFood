let block = document.querySelector("#bloc")
document.querySelector("#cli").addEventListener("click",(e)=>{
    e.preventDefault()
    if(block.classList.contains("hidden")){
        console.log("yes")
        block.classList.remove("hidden")
    }else{
        block.classList.add("hidden")
    }
     
    
})