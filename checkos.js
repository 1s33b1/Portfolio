document.addEventListener("DOMContentLoaded",()=>{
    const ua = navigator.userAgent.toLowerCase();
    let osClass = "";

    if(ua.indexOf("win") !== -1){
        osClass = "os-windows";
    }
    else if(ua.indexOf("mac") !== -1 && !navigator.maxTouchPoints){
        osClass ="os-mac";
    }
    else if(ua.indexOf("android") !== -1){
        osClass ="os-android";
    }
    else if(ua.indexOf(iphone) !== -1 || ua.indexOf("ipad") !== -1 || (ua.indexOf("mac") !== -1 && navigator.maxTouchPoints > 1)){
        osClass ="os-ios";
    }

    if(osClass){
        document.documentElement.classList.add(osClass);
    }
})