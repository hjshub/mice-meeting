const gb={wW:window.innerWidth,wH:window.innerHeight,html:$("html"),body:$("body"),layout:$("#layout"),main:$("main"),header:$("#gnb"),btnActiveModal:$(".button-active-modal"),isMob:window.innerWidth<=821,isFocus:!1};function setCookie(e,t,o){const n=new Date;let i;n.setDate(n.getDate()+o),i=e+"="+escape(t)+"; path=/ ",void 0!==o&&(i+=";expires="+n.toGMTString()+";"),document.cookie=i}function getCookie(t){t+="=";const o=document.cookie;var n=o.indexOf(t);let i="";if(-1!=n){n+=t.length;let e=o.indexOf(";",n);-1==e&&(e=o.length),i=o.substring(n,e)}return unescape(i)}window.addEventListener("load",()=>{gb.CommonFunction.init()}),gb.CommonFunction=function(){const s=()=>{gb.btnActiveModal.removeClass("selected"),$(".list-item").removeClass("on"),$(".modal").removeClass("zoomIn"),$(".dimmed").remove(),gb.body.css({height:"auto","overflow-y":"visible"})};const l=()=>{const e=document.querySelectorAll(".chart");e.forEach(function(t){var o,e=t.children[0],n=(t.children[1].innerText/t.children[2].innerText*100).toFixed();gsap.fromTo(e,{width:0},{width:n+"%",delay:.3,duration:.4});for(let e=0;e<=n;e++)o=e,setTimeout(function(){t.lastElementChild.innerHTML=e+"%"},20*o)})};return{init:()=>{{gsap.to(gb.header,{y:0,opacity:1,duration:.4,delay:.4}),40<=document.documentElement.scrollTop?gb.html.addClass("fixed"):gb.html.removeClass("fixed"),$(".btn-mob-menuOpen").on("click",function(){gb.html.hasClass("m-menu")?e():(gb.html.addClass("m-menu"),gb.body.append('<div class="dimmed btn-mob-menuClose"></div>'),gb.body.css({height:"100vh","overflow-y":"hidden"}),gb.main.length||gb.html.removeClass("active"))}),$(document).on("click",".btn-mob-menuClose",function(){e()});const e=()=>{gb.html.removeClass("m-menu"),$(".dimmed").remove(),gb.body.css({height:"auto","overflow-y":"visible"}),gb.main.length||gb.html.addClass("active")};$(".depth1").find("> li > a").on("click",function(e){const t=$(this);t.next(".depth2").length&&(e.preventDefault(),e.stopPropagation(),t.closest("li").hasClass("on")?(t.closest("li").removeClass("on"),t.next(".depth2").stop().slideUp(300)):(t.closest("li").addClass("on"),t.next(".depth2").stop().slideDown(300)))})}gb.btnActiveModal.on("click",function(e){e.preventDefault(),e.stopPropagation();const t=$(this);e=t.data("modal-name");$(".modal").removeClass("zoomIn"),$(".dimmed").remove(),t.addClass("selected"),t.closest(".list-item").addClass("on"),$(".modal#modal-"+e).addClass("zoomIn"),gb.body.append('<div class="dimmed fixed btn-close-modal"></div>'),gb.body.css({height:"100vh","overflow-y":"hidden"}),"voteResult"===e&&l()}),$(document).on("click",".btn-close-modal",()=>{s()});{const t=document.getElementsByClassName("btn-openSideCts"),o=document.getElementsByClassName("btn-offSideCts"),n=document.getElementById("dragArea"),i=document.getElementById("ctsSide");i&&(t[0].addEventListener("click",function(){gsap.to(i,{y:0,duration:.3}),gb.body.css("touch-action","none"),gb.body.css("overflow-y","hidden")}),o[0].addEventListener("click",function(){gsap.to(i,{y:"100%",duration:.3}),gb.body.css("touch-action","pan-y"),gb.body.css("overflow-y","auto")}),n.addEventListener("touchstart",function(e){gb.touchPoint=0}),n.addEventListener("touchmove",function(e){gb.touchPoint=e.touches[0].clientY,gb.touchPoint>i.offsetTop&&gsap.to(i,{y:gb.touchPoint-i.offsetTop,duration:0,delay:0})}),n.addEventListener("touchend",function(e){gb.touchPoint>=i.offsetTop+i.scrollHeight/3?(gsap.to(i,{y:"100%",duration:.3}),gb.body.css("touch-action","pan-y"),gb.body.css("overflow-y","auto")):(gsap.to(i,{y:"0",duration:.3}),gb.body.css("touch-action","none"),gb.body.css("overflow-y","hidden"))}))}{const d=document.querySelectorAll(".chkList input[type=checkbox][name^=allChk]"),c=document.querySelectorAll(".chkList input[type=checkbox]:not([name^=allChk])");return d.forEach(function(o){o.addEventListener("change",function(){var e=o.getAttribute("name").split("_")[1];const t=document.querySelectorAll(`input[type=checkbox][name^=${e}]`);o.checked&&t.forEach(function(e){e.checked=!1})})}),void c.forEach(function(o){o.addEventListener("change",function(){var e=o.getAttribute("name").split("_")[0];const t=document.querySelectorAll(`input[type=checkbox][name^=allChk_${e}]`);o.checked&&t.forEach(function(e){e.checked=!1})})})}},modalOff:s,goScrollTop:()=>{gb.html.stop().animate({scrollTop:0},300)},fileUpload:(e,t)=>{var o=e.value.lastIndexOf(".");const n=e.value.substring(o+1,e.length);o=n.toLowerCase();const i=new FileReader;var d=$(e)[0].files[0].name;$(e)[0].files[0].size;if(i.readAsDataURL($(e)[0].files[0]),"image"==t&&"jpg"!=o&&"gif"!=o&&"png"!=o&&"jpeg"!=o&&"bmp"!=o)return alert("이미지 파일만 선택 할 수 있습니다."),parentObj=e.parentNode,node=parentObj.replaceChild(e.cloneNode(!0),e),!1;$(e).closest(".file-attach").find(".text-wrap input[type=text]").val(d)},copyUrl:()=>{{var e=location.href;const t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)}alert("링크가 복사되었습니다.\n "+location.href)}}}(),window.addEventListener("scroll",()=>{40<=document.documentElement.scrollTop?gb.html.addClass("fixed"):gb.html.removeClass("fixed")});