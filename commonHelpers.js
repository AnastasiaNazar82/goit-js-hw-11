import{S as u,i as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function y(){const s="https://pixabay.com/api/",r=new URLSearchParams({key:"43044638-81b288208bd41d7f3c4a2027f",q:lookup,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${s}?${r}`;return h(),fetch(n).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function g(s){if(s.length==0)a.innerHTML="",iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const n=s.map(({webformatURL:o,largeImageURL:e,tags:t,likes:i,views:p,comments:m,downloads:f})=>`<li class="gallery-item">
    <a class="gallery-link" href="${e}">
    <img class="gallery-image" src="${o}" alt="${t}" />
    </a>
    <div class="content-image">
    <p class="content-item">Likes<span class="info-item">${i}</span></p>
    <p class="content-item">Views<span class="info-item">${p}</span></p>
    <p class="content-item">Comments<span class="info-item">${m}</span></p>
    <p class="content-item">Downloads<span class="info-item">${f}</span></p>
    </div
    </li>`).join("");a.insertAdjacentHTML("beforeend",n)}new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const a=document.querySelector(".gallery"),c=document.querySelector(".form"),l=document.querySelector(".loader");l.style.display="none";const h=()=>{l.style.display="flex"},L=()=>{l.style.display="none"};c.addEventListener("submit",s=>{s.preventDefault(),s.target.elements.search.value.trim()!==""?(y().then(n=>{g(n.hits),L()}),c.reset()):(a.innerHTML="",d.show({message:"Please complete the field!",position:"topRight"}))});
//# sourceMappingURL=commonHelpers.js.map
