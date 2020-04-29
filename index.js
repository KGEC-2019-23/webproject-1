
window.onload=function load(){
    document.getElementById("navMenu").style.right="-230px";
    if(performance.navigation.type == 2){
        document.getElementById("navMenu").style.height="0";
        window.location.reload(false);
     }
}
function showNav(){
        if(document.getElementById("menu-btn").checked==true){
            document.getElementById("navMenu").style.height="100%";    
        document.getElementById("header").style.backgroundColor="rgb(17, 134, 230)";
        document.getElementById("header").style.transitionProperty="background-color, height";
        document.getElementById("header").style.transitionDuration="0.2s, 0.5s";
        document.getElementById("header").style.transionTimingFunction="ease-out";
        document.getElementById("header").style.height="100%";
        document.getElementsByClassName("logo")[0].style.color="#fff";
    }
    else if(document.getElementById("menu-btn").checked==false){
        document.getElementById("navMenu").style.height="0";    
        document.getElementById("header").style.backgroundColor="#fff";    
        document.getElementById("header").style.transitionProperty="background-color, height";
        document.getElementById("header").style.transitionDuration="0.8s, 0.5s";
        document.getElementById("header").style.transionTimingFunction="ease-out";
        document.getElementById("header").style.height="3.5em";
        document.getElementsByClassName("logo")[0].style.color="black";
        
    }

}

function showPan(){
    if(document.getElementById("navMenu").style.right=="-230px"){
        document.getElementById("navMenu").style.right="0";
    }
    else{
        document.getElementById("navMenu").style.right="-230px"
    }
}
