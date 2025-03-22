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

// Start setting-box 
let settingBox = document.querySelector(".settings-box");
let iconBox=document.querySelector(".settings-box .icon") ;
 iconBox.addEventListener("click",()=>{
  settingBox.classList.toggle("open")
 })
console.log( iconBox)
// End setting-box

// Start section color
let listColor=document.querySelectorAll(".settings-box ul li")
let acitvClass=document.querySelectorAll(".active")
// console.log(acitvClass)

if (window.localStorage.getItem("color")){
  // console.log("yes" ,window.localStorage.getItem("color"))
  // acitvClass.style.color=window.localStorage.getItem("color")
  document.documentElement.style.setProperty("--main-color",window.localStorage.getItem("color"))
}

listColor.forEach ((el) => {
  el.addEventListener("click",(e)=>{
    console.log(e.currentTarget.dataset.color)
    window.localStorage.setItem("color",e.currentTarget.dataset.color)
    document.documentElement.style.setProperty('--main-color',e.currentTarget.dataset.color)

  })
})
// End section color