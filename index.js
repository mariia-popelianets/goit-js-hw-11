import{a as m,S as d,i}from"./assets/vendor-Cce4fIue.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="56049130-cda03eac6f8abc94af207a1fe",h="https://pixabay.com/api/";function y(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(h,{params:r}).then(s=>s.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:a,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span>${t}</span></p>
          <p class="info-item"><b>Views</b><span>${a}</span></p>
          <p class="info-item"><b>Comments</b><span>${f}</span></p>
          <p class="info-item"><b>Downloads</b><span>${p}</span></p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function q(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(r===""){i.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}S(),q(),y(r).then(s=>{if(s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits)}).catch(s=>{i.error({title:"Error",message:`Something went wrong: ${s.message}`,position:"topRight"})}).finally(()=>{w(),u.reset()})}
//# sourceMappingURL=index.js.map
