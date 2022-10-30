let menus = document.getElementById("menu");
let menu_icon= document.getElementById("menu-icon");
let go_to_top = document.querySelector(".go-top");


function toggle_menu() {
  menus.classList.toggle("active");
  if(menus.classList.contains('active')){
    menu_icon.classList.add('active')
    menu_icon.classList.remove('fa-bars');
    menu_icon.classList.add('fa-close')
  }
  else {
    menu_icon.classList.remove('fa-close');
    menu_icon.classList.remove('active');
    menu_icon.classList.add('fa-bars')
  }
}
// functions occure win scrolliong 
window.onscroll= function(){
    if (scrollY >= 662) {
        menus.classList.remove("active");
        menu_icon.classList.remove('fa-close');
        menu_icon.classList.remove('active');
        menu_icon.classList.add('fa-bars')
      }
      if(scrollY<=520){
        go_to_top.style.display="none";
      }
      else {
        go_to_top.style.display="flex";
      }


}
//go to top 
function go_top(){
  window.scrollTo(0,0);
}