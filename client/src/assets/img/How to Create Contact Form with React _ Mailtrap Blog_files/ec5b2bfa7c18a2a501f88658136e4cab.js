/**handles:lovecraft-navigation**/
!function(){function e(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}function a(e){var a,t=e.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window&&window.innerWidth>1e3){a=function(e){var a=this.parentNode;if(a.classList.contains("focus"))a.classList.remove("focus");else{e.preventDefault();for(var t=0;t<a.parentNode.children.length;++t)a!==a.parentNode.children[t]&&a.parentNode.children[t].classList.remove("focus");a.classList.add("focus")}};for(var n=0;n<t.length;++n)t[n].addEventListener("touchstart",a,!1)}}var t,n,s,i,r;if(t=document.getElementById("site-navigation"),t&&(n=document.getElementsByClassName("menu-toggle")[0],"undefined"!=typeof n)){if(s=t.getElementsByTagName("ul")[0],"undefined"==typeof s)return void(n.style.display="none");s.setAttribute("aria-expanded","false"),-1===s.className.indexOf("nav-menu")&&(s.className+=" nav-menu"),n.onclick=function(){-1!==t.className.indexOf("toggled")?(t.className=t.className.replace(" toggled",""),n.setAttribute("aria-expanded","false"),s.setAttribute("aria-expanded","false")):(t.className+=" toggled",n.setAttribute("aria-expanded","true"),s.setAttribute("aria-expanded","true"))},i=s.getElementsByTagName("a"),r=s.getElementsByTagName("ul");for(var l=0,d=r.length;l<d;l++)r[l].parentNode.setAttribute("aria-haspopup","true");for(l=0,d=i.length;l<d;l++)i[l].addEventListener("focus",e,!0),i[l].addEventListener("blur",e,!0);a(t)}}();