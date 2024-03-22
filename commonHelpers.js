import{a as p,S as f,i as u}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const w="42482643-27153583581e8cdd5359a7a52";p.defaults.baseURL="https://pixabay.com/api/";class S{constructor(){this.searchQuery="",this.page=1}async fetchImg(){const s=new URLSearchParams({key:w,image_type:"photo",orientation:"horizontal",safesearch:!0,page:this.page,per_page:15});try{const r=await(await p.get(`?q=${this.searchQuery}&${s}`)).data;return this.page+=1,r}catch(a){throw new Error(a)}}}const b=document.querySelector(".gallery");function m(n){const s=n.map(({webformatURL:r,largeImageURL:e,tags:t,likes:o,views:d,comments:g,downloads:h})=>`
        <li class="gallery-item">
          <a class="img-link" href="${e}">
            <img src="${r}" alt="${t}" class="img"/>
          </a>  
          <ul class="stat">
            <li class="stat-item">
                <span class="stat-title">Likes</span>
              <span class="stat-number">${o}</span>
            </li>
            <li class="stat-item">
                <span class="stat-title">Views</span>
              <span class="stat-number">${d}</span>
            </li>
            <li class="stat-item">
                <span class="stat-title">Comments</span>
              <span class="stat-number">${g}</span>
            </li>
            <li class="stat-item">
                <span class="stat-title">Downloads</span>
              <span class="stat-number">${h}</span>
            </li>
          </ul>
        </li>`).join("");b.insertAdjacentHTML("beforeend",s);const a=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionType:"alt"});a.on("show.simplelightbox"),a.refresh()}const y=document.querySelector(".form"),L=document.querySelector(".input"),i=document.querySelector(".loader-container"),P=document.querySelector(".gallery"),c=document.querySelector(".load-btn"),l=new S;c.style.display="none";y.addEventListener("submit",q);c.addEventListener("click",v);async function q(n){n.preventDefault(),l.searchQuery=L.value,l.page=1;try{const s=await l.fetchImg();i.style.display="flex",y.reset(),P.innerHTML="";const{totalHits:a,hits:r}=s;if(a===0)return i.style.display="none",c.style.display="none",u.warning({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"});setTimeout(()=>{i.style.display="none",m(r),c.style.display="flex"},2e3)}catch{return u.error({title:"",message:"Something went wrong. Please try again!",position:"topCenter"})}}async function v(){try{i.style.display="flex";const n=await l.fetchImg(),{totalHits:s,hits:a}=n;setTimeout(()=>{i.style.display="none",m(a)},2e3);const r=s/15;if(l.page>=r)return c.style.display="none",u.warning({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"});const t=document.querySelector(".gallery-item").getBoundingClientRect().height;setTimeout(()=>{window.scrollBy({top:t,behavior:"smooth"})},200)}catch{return u.error({title:"",message:"Something went wrong. Please try again!",position:"topCenter"})}}
//# sourceMappingURL=commonHelpers.js.map
