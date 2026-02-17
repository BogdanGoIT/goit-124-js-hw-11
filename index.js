import{a as f,S as g,i as p}from"./assets/vendor-B5nsgUv9.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="28315893-0fd806bb9dd4884845b8c425c",h="https://pixabay.com/api/";function L(r){return console.log(r),f(h,{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const i=document.querySelector(".gallery"),n=document.querySelector(".loader");function b(r){console.log(r);const l=r.map(({webformatURL:a,largeImageURL:e,tags:t,likes:s,views:u,comments:d,downloads:m})=>`<li class="gallery-item">
  
        <a class="gallery-link" href="${e}">
        <img class="gallery-img" src="${a}" alt="${t}"/>
        </a>

       
        <ul class="gallery-socials-list">
            <li class="gallery-social-item"><span>Likes</span> ${s} </li>
            <li class="gallery-social-item"> <span>Views</span> ${u} </li>
            <li class="gallery-social-item"><span>Comments</span> ${d} </li>
            <li class="gallery-social-item"><span>Downloads</span> ${m} </li>
        </ul>

      </li>`).join("");i.innerHTML=l,new g(".gallery a",{captionsData:"alt"}).refresh()}function S(){i.innerHTML=""}function $(){n.classList.add("loader")}function c(){n.classList.remove("loader")}const w=document.querySelector(".form");c();w.addEventListener("submit",O);function O(r){r.preventDefault(),console.log(r.target.elements);const l=r.target.elements["search-text"].value;if(!l.trim()){alert("Пустий рядок");return}S(),$(),L(l).then(o=>{o.data.hits.length>0?b(o.data.hits):p.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"})}).catch(o=>console.log(o)).finally(()=>{c(),r.target.reset()})}
//# sourceMappingURL=index.js.map
