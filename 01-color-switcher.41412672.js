const e=document.querySelector("body"),t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,a=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.background=t}),1e3)})),n.addEventListener("click",(function(){t.disabled=!1,clearInterval(a)}));let a=null;
//# sourceMappingURL=01-color-switcher.41412672.js.map