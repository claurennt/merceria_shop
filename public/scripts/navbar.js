document.querySelector(".navbar-toggler").addEventListener("click", () => {
  let menu = document.querySelector("#navbarCollapse")
  menu.classList.toggle("show")
  menu.classList.toggle("collapse")
})



// show dropdown list on hover
const dropToggle = document.querySelector(".dropdown-toggle")
dropToggle.addEventListener("mouseover", function() {
  document.querySelector("#dropList").classList.add("show")
})
// remove dropdown list on mouseleave
const dropList = document.querySelector("#dropList")
dropList.addEventListener("mouseleave", function(event){
      event.target.classList.remove("show")
})
