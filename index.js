import{a as d,S as p,i}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="28315893-0fd806bb9dd4884845b8c425c",h="https://pixabay.com/api/";function L(s){return console.log("searchValue: ",s),d(h,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function b(s){const r=s.map(({webformatURL:l,largeImageURL:e,tags:t,likes:o,views:m,comments:f,downloads:g})=>`<li class="gallery-item">
  
        <a class="gallery-link" href="${e}">
        <img class="gallery-img" src="${l}" alt="${t}"/>
        </a>

       
        <ul class="gallery-socials-list">
            <li class="gallery-social-item"><span>Likes</span> ${o} </li>
            <li class="gallery-social-item"> <span>Views</span> ${m} </li>
            <li class="gallery-social-item"><span>Comments</span> ${f} </li>
            <li class="gallery-social-item"><span>Downloads</span> ${g} </li>
        </ul>

      </li>`).join("");n.innerHTML=r,new p(".gallery a",{captionsData:"alt"}).refresh()}function S(){n.innerHTML=""}function w(){c.classList.add("loader")}function u(){c.classList.remove("loader")}const $=document.querySelector(".form");u();$.addEventListener("submit",O);function O(s){s.preventDefault();const r=s.target.elements["search-text"].value;if(!r.trim()){i.warning({message:"Пустий рядок",position:"topRight"});return}S(),w(),L(r).then(a=>{a.length>0?(console.log("hits",a),b(a)):i.show({message:"Sorry, there are no images matching <br> your search query. Please try again!",color:"#ef4040",position:"topRight",messageColor:"#fafafb"})}).catch(a=>{i.error({message:a.message,position:"topRight"})}).finally(()=>{u(),s.target.reset()})}
//# sourceMappingURL=index.js.map
