import{a as m,S as f,i as g}from"./assets/vendor-B5nsgUv9.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="28315893-0fd806bb9dd4884845b8c425c",y="https://pixabay.com/api/";function d(r){return console.log(r),m(y,{params:{key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const i=document.querySelector(".gallery");function h(r){console.log(r);const l=r.map(({webformatURL:o,largeImageURL:e,tags:t,likes:a,views:n,comments:c,downloads:u})=>`<li class="gallery-item">
  
        <a class="gallery-link" href="${e}">
        <img class="gallery-img" src="${o}" alt="${t}"/>
        </a>

       
        <ul class="gallery-socials-list">
            <li class="gallery-social-item"><span>Likes</span> ${a} </li>
            <li class="gallery-social-item"> <span>Views</span> ${n} </li>
            <li class="gallery-social-item"><span>Comments</span> ${c} </li>
            <li class="gallery-social-item"><span>Downloads</span> ${u} </li>
        </ul>

      </li>`).join("");i.innerHTML=l,new f(".gallery a",{captionsData:"alt"}).refresh()}function b(){i.innerHTML=""}const L=document.querySelector(".form");L.addEventListener("submit",S);function S(r){r.preventDefault(),console.log(r.target.elements);const l=r.target.elements["search-text"].value;if(!l.trim()){alert("Пустий рядок");return}b(),d(l).then(s=>{s.data.hits.length>0?h(s.data.hits):g.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"})}).catch(s=>console.log(s)).finally(()=>{r.target.reset()})}
//# sourceMappingURL=index.js.map
