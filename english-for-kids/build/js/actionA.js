!function(t){function e(e){for(var r,o,s=e[0],c=e[1],i=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(d&&d(e);f.length;)f.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(l.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={1:0},l=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var d=c;l.push([16,0]),n()}({16:function(t,e,n){"use strict";n.r(e);n(8);var r=n(4),a=n(2),l=n(5),o=n(6),s=n(7);Object(r.a)(),Object(a.b)(),Object(l.a)("Action (set A)"),Object(r.c)(),Object(o.a)("Action (set A)"),Object(s.a)("Action (set A)")},5:function(t,e,n){"use strict";var r=n(3),a=n(2);e.a=t=>{let e=!0,n=!0;const l=document.getElementById("container"),o=document.getElementById("myonoffswitch");l.innerHTML="";const s=r.a.flat().filter(e=>e.category===t);function c(t){const e=function(t){const e=[];return function n(){const r=Math.floor(Math.random()*Math.floor(t));if(!(e.length>=t))return e.includes(r)?n():(e.push(r),r)}}(s.length);for(let n=0;n<t;n+=1){const t=e();i.push(t)}return i}s.forEach(t=>{Object(a.a)(t.image,t.word,!0)});let i=[];o.addEventListener("change",()=>{const t=document.getElementsByClassName("card");if(o.checked){n=!0;for(let e=0;e<t.length;e+=1)t[e].setAttribute("style","order: "+[e])}else{i=[],c(s.length);for(let e=0;e<t.length;e+=1)t[e].setAttribute("style","order: "+i[i.length-1]),i.pop();n=!1}}),l.addEventListener("click",t=>{s.forEach(e=>{if(t.target.alt===e.word&&n){new Audio(e.audioSrc).play()}})});const d=document.getElementsByClassName("flipButton");for(let t=0;t<d.length;t+=1)d[t].addEventListener("click",n=>{s.forEach(r=>{if(n.target.value===r.word){const n=d[t].parentNode.firstChild,a=d[t].parentNode.lastChild;e?(e=!1,n.classList.remove("flipStart"),n.classList.add("flip"),d[t].parentNode.setAttribute("id","flip"),a.classList.add("translateText"),a.firstChild.textContent=r.translation,a.firstChild.classList.add("translateWord")):(e=!0,n.classList.remove("flip"),n.classList.add("flipStart"),a.classList.remove("translateText"),a.firstChild.textContent=r.word,a.firstChild.classList.remove("translateWord"),d[t].parentNode.removeAttribute("id","flip")),document.getElementById("flip").addEventListener("mouseout",l=>{"flip"===l.relatedTarget.id&&(d[t].parentNode.removeAttribute("id","flip"),e=!0,n.classList.remove("flip"),n.classList.add("flipStart"),a.classList.remove("translateText"),a.firstChild.textContent=r.word,a.firstChild.classList.remove("translateWord"))})}})})}},6:function(t,e,n){"use strict";e.a=t=>{const e=document.getElementsByClassName("textLinkMenu");for(let n=0;n<e.length;n+=1)e[n].textContent===t&&(e[n].style.color="#ffffff")}},7:function(t,e,n){"use strict";var r=n(3),a=n(1),l=n(0),o=()=>{window.location.href="./home.html"};e.a=t=>{let e=r.a.flat();null===localStorage.getItem("arrayAllCards")?e.forEach(t=>{t.countClickTrain=0,t.countClickCorrectPlay=0,t.countErrorsPlay=0,t.countPercentErrors=0}):null!==localStorage.getItem("arrayAllCards")&&(e=JSON.parse(localStorage.getItem("arrayAllCards")));const n=e.filter(e=>e.category===t),s=document.getElementById("header"),c=document.getElementById("myonoffswitch"),i=document.getElementsByClassName("card"),d=document.getElementById("container"),u=document.getElementsByTagName("body"),f=document.createElement("div"),m=document.getElementsByClassName("textLinkMenu");f.className="startGame",f.setAttribute("id","startGame");const p=document.createElement("button");p.className="buttonStartGame",p.setAttribute("id","buttonStartGame"),p.textContent="start game";const g=document.createElement("div");g.className="score",g.setAttribute("id","score");const h=document.createElement("p");h.className="textScore",h.setAttribute("id","textScore");const y=document.createElement("div");y.className="starArea",y.setAttribute("id","starArea"),g.append(h),s.after(f),f.append(p),f.append(g),f.append(y),c.addEventListener("change",()=>{if(c.checked){f.style.display="none",u[0].style.boxShadow="0 0 4em 4em  rgb(242, 250, 242) inset";for(let t=0;t<i.length;t+=1)i[t].classList.remove("activeCard"),i[t].lastChild.style.display="block",i[t].firstChild.nextSibling.style.display="block"}else{f.style.display="flex",u[0].style.boxShadow="0 0 4em 4em  rgb(252, 248, 215) inset";for(let t=0;t<i.length;t+=1)i[t].classList.add("activeCard"),i[t].lastChild.style.display="none",i[t].firstChild.nextSibling.style.display="none"}});const b=[];!function(t){const e=function(t){const e=[];return function n(){const r=Math.floor(Math.random()*Math.floor(t));if(!(e.length>=t))return e.includes(r)?n():(e.push(r),r)}}(n.length);for(let n=0;n<t;n+=1){const t=e();b.push(t)}}(n.length),p.addEventListener("click",()=>{p.textContent="Repeat",p.style.background="linear-gradient(rgb(240, 225, 96), rgb(243, 223, 48)) rgb(245, 221, 4)";let r=new Audio(n[b[b.length-1]].audioSrc);r.play();const s=new Audio(a.v);let i;d.addEventListener("click",u=>{if(u.target.alt===n[b[b.length-1]].word){b.pop(),new Audio(a.l).play(),u.target.classList.add("correct"),c.addEventListener("change",()=>{if(c.checked)for(let e=0;e<m.length;e+=1)m[e].textContent===t&&(window.location.href=m[e].href)}),u.target.parentNode.style.cursor="none",u.target.parentNode.value="win",u.target.value="win";const s=document.createElement("img");if(s.className="symbolStarArea",s.setAttribute("alt","star"),e.forEach(t=>{t.word===u.target.alt&&(t.countClickCorrectPlay+=1)}),s.src=l.qb,y.prepend(s),i=document.getElementsByClassName("symbolStarArea"),0===b.length&&8===i.length){new Audio(a.hb).play(),d.innerHTML="";const t=document.createElement("img");t.className="gameOver",t.src=l.rb,d.append(t),h.textContent="0 ошибок",setTimeout(o,6e3)}else if(0===b.length&&i.length>8){const t=i.length-8;h.textContent="ошибки: "+t,new Audio(a.w).play(),d.innerHTML="";const e=document.createElement("img");e.className="gameOver",e.src=l.C,d.append(e),setTimeout(o,6e3)}else r=new Audio(n[b[b.length-1]].audioSrc),setTimeout(r.play(),4e3)}else if("win"===u.target.value)s.pause();else if("img_card"===u.target.classList.value){const t=document.createElement("img");t.className="symbolStarArea",t.setAttribute("alt","fail"),t.src=l.B,y.prepend(t),s.play(),e.forEach(t=>{t.word===u.target.alt&&(t.countErrorsPlay+=1)})}localStorage.setItem("arrayAllCards",JSON.stringify(e))})}),d.addEventListener("click",t=>{c.checked&&(e.forEach(e=>{e.word===t.target.alt&&(e.countClickTrain+=1)}),localStorage.setItem("arrayAllCards",JSON.stringify(e)))})}}});