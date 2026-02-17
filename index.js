import{a as c,i as u}from"./assets/vendor-Df2bBtQw.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m=document.querySelector(".gallery");function f(r){console.log(r);const s=r.map(({webformatURL:a,largeImageURL:l,tags:e,likes:t,views:o,comments:i,downloads:n})=>`<li class="gallery-item">
        <a class="gallery-link" href="${l}">
        <img src="${a}" alt="${e} class="gallery-img"/>
        </a>
       
        <ul class="gallery-socials-list">
            <li class="gallery-social-item"><span>Likes</span> ${t} </li>
            <li class="gallery-social-item"> <span>Views</span> ${o} </li>
            <li class="gallery-social-item"><span>Comments</span> ${i} </li>
            <li class="gallery-social-item"><span>Downloads</span> ${n} </li>
        </ul>

      </li>`).join("");m.innerHTML=s}const g="28315893-0fd806bb9dd4884845b8c425c",p="https://pixabay.com/api/";function d(r){if(!r.trim()){alert("Пустий рядок");return}console.log(r),c(p,{params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>{s.data.hits.length>0?f(s.data.hits):u.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"})}).catch(s=>console.log(s))}const y=document.querySelector(".form");y.addEventListener("submit",h);function h(r){r.preventDefault(),console.log(r.target.elements);const s=r.target.elements["search-text"].value;d(s),r.target.reset()}
//# sourceMappingURL=index.js.map
