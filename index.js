import{a as u,i as m}from"./assets/vendor-COXuPeDw.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const f="28315893-0fd806bb9dd4884845b8c425c",g="https://pixabay.com/api/";function p(r){return console.log(r),u(g,{params:{key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const i=document.querySelector(".gallery");function d(r){console.log(r);const s=r.map(({webformatURL:l,largeImageURL:a,tags:e,likes:t,views:o,comments:n,downloads:c})=>`<li class="gallery-item">
        <a class="gallery-link" href="${a}">
        <img src="${l}" alt="${e} class="gallery-img"/>
        </a>
       
        <ul class="gallery-socials-list">
            <li class="gallery-social-item"><span>Likes</span> ${t} </li>
            <li class="gallery-social-item"> <span>Views</span> ${o} </li>
            <li class="gallery-social-item"><span>Comments</span> ${n} </li>
            <li class="gallery-social-item"><span>Downloads</span> ${c} </li>
        </ul>

      </li>`).join("");i.innerHTML=s}function y(){i.innerHTML=""}const h=document.querySelector(".form");h.addEventListener("submit",b);function b(r){r.preventDefault(),console.log(r.target.elements);const s=r.target.elements["search-text"].value;if(!s.trim()){alert("Пустий рядок");return}y(),p(s).then(l=>{l.data.hits.length>0?d(l.data.hits):m.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"})}).catch(l=>console.log(l)),r.target.reset()}
//# sourceMappingURL=index.js.map
