const gb={wW:window.innerWidth,wH:window.innerHeight,html:$("html"),body:$("body"),layout:$("#layout"),main:$("main"),header:$("#gnb"),btnActiveModal:$(".button-active-modal"),isMob:window.innerWidth<=821,isFocus:!1};function setCookie(e,t,o){const n=new Date;let a;n.setDate(n.getDate()+o),a=e+"="+escape(t)+"; path=/ ",void 0!==o&&(a+=";expires="+n.toGMTString()+";"),document.cookie=a}function getCookie(e){e+="=";const t=document.cookie,o=t.indexOf(e),n="";if(-1!=o){o+=e.length;const a=t.indexOf(";",o);-1==a&&(a=t.length),n=t.substring(o,a)}return unescape(n)}window.addEventListener("load",()=>{gb.CommonFunction.init()}),gb.CommonFunction=function(){const c=()=>{gb.btnActiveModal.removeClass("selected"),$(".list-item").removeClass("on"),$(".modal").removeClass("zoomIn"),$(".dimmed").remove(),gb.body.css({height:"auto","overflow-y":"visible"})};return{init:()=>{{gsap.to(gb.header,{y:0,opacity:1,duration:.4,delay:.4}),40<=document.documentElement.scrollTop?gb.html.addClass("fixed"):gb.html.removeClass("fixed"),$(".btn-mob-menuOpen").on("click",function(){gb.html.hasClass("m-menu")?e():(gb.html.addClass("m-menu"),gb.body.append('<div class="dimmed btn-mob-menuClose"></div>'),gb.body.css({height:"100vh","overflow-y":"hidden"}),gb.main.length||gb.html.removeClass("active"))}),$(document).on("click",".btn-mob-menuClose",function(){e()});const e=()=>{gb.html.removeClass("m-menu"),$(".dimmed").remove(),gb.body.css({height:"auto","overflow-y":"visible"}),gb.main.length||gb.html.addClass("active")};$(".depth1").find("> li > a").on("click",function(e){const t=$(this);t.next(".depth2").length&&(e.preventDefault(),e.stopPropagation(),t.closest("li").hasClass("on")?(t.closest("li").removeClass("on"),t.next(".depth2").stop().slideUp(300)):(t.closest("li").addClass("on"),t.next(".depth2").stop().slideDown(300)))})}gb.btnActiveModal.on("click",function(e){e.preventDefault(),e.stopPropagation();const t=$(this);e=t.data("modal-name");$(".modal").removeClass("zoomIn"),$(".dimmed").remove(),t.addClass("selected"),t.closest(".list-item").addClass("on"),$(".modal#modal-"+e).addClass("zoomIn"),gb.body.append('<div class="dimmed fixed btn-close-modal"></div>'),gb.body.css({height:"100vh","overflow-y":"hidden"})}),$(document).on("click",".btn-close-modal",()=>{c()}),$.datepicker.setDefaults({closeText:"닫기",currentText:"오늘",prevText:"이전 달",nextText:"다음 달",monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayNames:["일","월","화","수","목","금","토"],dayNamesShort:["일","월","화","수","목","금","토"],dayNamesMin:["일","월","화","수","목","금","토"],weekHeader:"주",yearSuffix:"년"}),$(".calendar > input[type=text]").datepicker({showOn:"both",dateFormat:"yy-mm-dd",minDate:"d"});{const t=document.getElementsByClassName("btn-openSideCts"),o=document.getElementsByClassName("btn-offSideCts"),n=document.getElementById("dragArea"),a=document.getElementById("ctsSide");a&&(t[0].addEventListener("click",function(){gsap.to(a,{y:0,duration:.3}),gb.body.css("touch-action","none"),gb.body.css("overflow-y","hidden")}),o[0].addEventListener("click",function(){gsap.to(a,{y:"100%",duration:.3}),gb.body.css("touch-action","pan-y"),gb.body.css("overflow-y","auto")}),n.addEventListener("touchstart",function(e){gb.touchPoint=0}),n.addEventListener("touchmove",function(e){gb.touchPoint=e.touches[0].clientY,gb.touchPoint>a.offsetTop&&gsap.to(a,{y:gb.touchPoint-a.offsetTop,duration:0,delay:0})}),n.addEventListener("touchend",function(e){gb.touchPoint>=a.offsetTop+a.scrollHeight/3?(gsap.to(a,{y:"100%",duration:.3}),gb.body.css("touch-action","pan-y"),gb.body.css("overflow-y","auto")):(gsap.to(a,{y:"0",duration:.3}),gb.body.css("touch-action","none"),gb.body.css("overflow-y","hidden"))}))}{const d=document.querySelectorAll(".chkList input[type=checkbox][name^=allChk]"),s=document.querySelectorAll(".chkList input[type=checkbox]:not([name^=allChk])");return d.forEach(function(o){o.addEventListener("change",function(){var e=o.getAttribute("name").split("_")[1];const t=document.querySelectorAll(`input[type=checkbox][name^=${e}]`);o.checked&&t.forEach(function(e){e.checked=!1})})}),void s.forEach(function(o){o.addEventListener("change",function(){var e=o.getAttribute("name").split("_")[0];const t=document.querySelectorAll(`input[type=checkbox][name^=allChk_${e}]`);o.checked&&t.forEach(function(e){e.checked=!1})})})}},modalOff:c,goScrollTop:()=>{gb.html.stop().animate({scrollTop:0},300)},fileUpload:(e,t)=>{var o=e.value.lastIndexOf(".");const n=e.value.substring(o+1,e.length);o=n.toLowerCase();const a=new FileReader;var d=$(e)[0].files[0].name;$(e)[0].files[0].size;if(a.readAsDataURL($(e)[0].files[0]),"image"==t&&"jpg"!=o&&"gif"!=o&&"png"!=o&&"jpeg"!=o&&"bmp"!=o)return alert("이미지 파일만 선택 할 수 있습니다."),parentObj=e.parentNode,node=parentObj.replaceChild(e.cloneNode(!0),e),!1;$(e).closest(".file-attach").find(".text-wrap input[type=text]").val(d)},copyUrl:()=>{{var e=location.href;const t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)}alert("링크가 복사되었습니다.\n "+location.href)}}}(),window.addEventListener("scroll",()=>{40<=document.documentElement.scrollTop?gb.html.addClass("fixed"):gb.html.removeClass("fixed")});