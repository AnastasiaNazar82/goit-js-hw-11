import{S as f,i as d}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function y(o){const s="https://pixabay.com/api/",r=new URLSearchParams({key:"43044638-81b288208bd41d7f3c4a2027f",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${s}?${r}`;return L(),fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function g(o){if(!o.length)iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="";else{const r=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:m,comments:p,downloads:u})=>`<li class="gallery-item">
    <a class="gallery-link" href="${e}">
    <img class="gallery-image" src="${n}" alt="${t}" />
    </a>
    <div class="content-image">
    <p class="content-item">Likes<span class="info-item">${i}</span></p>
    <p class="content-item">Views<span class="info-item">${m}</span></p>
    <p class="content-item">Comments<span class="info-item">${p}</span></p>
    <p class="content-item">Downloads<span class="info-item">${u}</span></p>
    </div
    </li>`).join("");a.innerHTML=r}new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const a=document.querySelector(".gallery"),c=document.querySelector(".form"),l=document.querySelector(".conteiner-loader"),h=document.querySelector("input");l.style.display="none";const L=()=>{l.style.display="flex"},b=()=>{l.style.display="none"};c.addEventListener("submit",o=>{o.preventDefault();const s=h.value.trim();s!==""?(y(s).then(r=>{g(r.hits),b()}),c.reset()):(a.innerHTML="",d.info({message:"Please complete the field!",position:"topRight"}))});
//# sourceMappingURL=commonHelpers.js.map
