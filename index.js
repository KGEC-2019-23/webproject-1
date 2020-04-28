window.onload=function load(){
    if(performance.navigation.type == 2){
        document.getElementsByClassName("navMenu")[0].style.height="0";
        window.location.reload(false);
     }
}
function showNav(){
        if(document.getElementById("menu-btn").checked==true){
            document.getElementsByClassName("navMenu")[0].style.height="100%";    
        document.getElementsByClassName("header")[0].style.backgroundColor="rgb(17, 134, 230)";
        document.getElementsByClassName("header")[0].style.transitionProperty="background-color, height";
        document.getElementsByClassName("header")[0].style.transitionDuration="0.2s, 0.5s";
        document.getElementsByClassName("header")[0].style.transionTimingFunction="ease-out";
        document.getElementsByClassName("header")[0].style.height="100%";
        document.getElementsByClassName("logo")[0].style.color="#fff";
    }
    else if(document.getElementById("menu-btn").checked==false){
        document.getElementsByClassName("navMenu")[0].style.height="0";    
        document.getElementsByClassName("header")[0].style.backgroundColor="#fff";    
        document.getElementsByClassName("header")[0].style.transitionProperty="background-color, height";
        document.getElementsByClassName("header")[0].style.transitionDuration="0.8s, 0.5s";
        document.getElementsByClassName("header")[0].style.transionTimingFunction="ease-out";
        document.getElementsByClassName("header")[0].style.height="3.5em";
        document.getElementsByClassName("logo")[0].style.color="black";
        
    }

}
