// Start header  
let menu=document.querySelector(".header .container nav .menu  .i1")
let links=document.querySelector(".header .container nav .links")
let croos=document.querySelector(".header .container nav .menu .i2")
// console.log(menu)
menu.addEventListener("click",function(e){
  menu.style.cssText="display:none;"
  croos.style.cssText="display:block;"
  
  links.style.cssText="display:block;"
  let li =document.querySelectorAll(".header .container nav .links li")
  li.forEach( (el)=>{
    el.addEventListener("click",function(){
      links.style.cssText="display:none;"
       menu.style.cssText="display:block;"
       croos.style.cssText="display:none;"

      
    })
  })
})
croos.addEventListener("click",(e)=>{
  menu.style.cssText="display:block;"
  croos.style.cssText="display:none;"
  links.style.cssText="display:none;"
})

// End header