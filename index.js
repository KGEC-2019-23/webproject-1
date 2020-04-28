function showNav(){
        if(document.getElementById("menu-btn").checked==true){
        document.getElementsByClassName("header")[0].style.backgroundColor="rgb(17, 134, 230)";
        document.getElementsByClassName("logo")[0].style.transition="background-color 0.2s ease-out";
        document.getElementsByClassName("logo")[0].style.backgroundColor="rgb(17, 134, 230)";
        document.getElementsByClassName("header")[0].style.transitionProperty="background-color, max-height";
        document.getElementsByClassName("header")[0].style.transitionDuration="0.2s, 0.5s";
        document.getElementsByClassName("header")[0].style.transionTimingFunction="ease-out";
        document.getElementsByClassName("header")[0].style.maxHeight="100%";
        document.getElementsByClassName("logo")[0].style.color="#fff";
    }
    else if(document.getElementById("menu-btn").checked==false){
        document.getElementsByClassName("logo")[0].style.backgroundColor="#fff";
        document.getElementsByClassName("logo")[0].style.transition="background-color 2s ease-out";
        document.getElementsByClassName("header")[0].style.backgroundColor="#fff";    
        document.getElementsByClassName("header")[0].style.transitionProperty="background-color, max-height";
        document.getElementsByClassName("header")[0].style.transitionDuration="2s, 0.5s";
        document.getElementsByClassName("header")[0].style.transionTimingFunction="ease-out";
        document.getElementsByClassName("header")[0].style.maxHeight="9%";
        document.getElementsByClassName("logo")[0].style.color="black";
        
    }

}
