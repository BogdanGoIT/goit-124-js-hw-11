import{a as f,S as p,i}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="28315893-0fd806bb9dd4884845b8c425c",h="https://pixabay.com/api/";function L(o){return console.log(o),f(h,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function b(o){console.log(o);const r=o.map(({webformatURL:a,largeImageURL:e,tags:t,likes:l,views:m,comments:d,downloads:g})=>`<li class="gallery-item">
  
        <a class="gallery-link" href="${e}">
        <img class="gallery-img" src="${a}" alt="${t}"/>
        </a>

       
        <ul class="gallery-socials-list">
            <li class="gallery-social-item"><span>Likes</span> ${l} </li>
            <li class="gallery-social-item"> <span>Views</span> ${m} </li>
            <li class="gallery-social-item"><span>Comments</span> ${d} </li>
            <li class="gallery-social-item"><span>Downloads</span> ${g} </li>
        </ul>

      </li>`).join("");n.innerHTML=r,new p(".gallery a",{captionsData:"alt"}).refresh()}function w(){n.innerHTML=""}function S(){c.classList.add("loader")}function u(){c.classList.remove("loader")}const $=document.querySelector(".form");u();$.addEventListener("submit",O);function O(o){o.preventDefault(),console.log(o.target.elements);const r=o.target.elements["search-text"].value;if(!r.trim()){i.show({message:"Рядок пустий",color:"red",position:"topRight"});return}w(),S(),L(r).then(s=>{s.data.hits.length>0?b(s.data.hits):i.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"})}).catch(s=>{console.log(s),i.show({message:s.message,color:"red",position:"topRight"})}).finally(()=>{u(),o.target.reset()})}
//# sourceMappingURL=index.js.map
