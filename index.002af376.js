document.addEventListener("DOMContentLoaded",function(){if(window.innerWidth<993){let e=()=>{let e=document.documentElement;e.style.setProperty("--doc-height",`${window.innerHeight}px`)};window.addEventListener("resize",e),e()}if(window.innerWidth>1200){let e=!0,t=!0;$(document).mousemove(function(n){if($(".cursor-item, .cursor-blur").css({left:n.pageX,top:n.pageY}),e){e=!1;let i=document.createElement("div");i.classList.add("rhombus-item"),i.style.left=n.pageX+"px",i.style.top=n.pageY+"px",i.style.display="none",$(i).appendTo(".rhombus"),$(i).fadeIn(500),t?(t=!1,$(i).addClass("reverse")):t=!0,setTimeout(()=>{e=!0},200),setTimeout(()=>{$(i).fadeOut(500),setTimeout(()=>{$(i).remove()},500)},500)}}),$(".white-section").hover(function(){$(".cursor-item").addClass("white-cursor")},function(){$(".cursor-item").removeClass("white-cursor")})}$(".team-slider").length&&new Swiper(".team-slider",{slidesPerView:4,spaceBetween:8,loop:!0,autoplay:{delay:9999999999999,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{993:{spaceBetween:24,loop:!0,autoplay:{delay:1500,disableOnInteraction:!1}}}}),$(".blog-slider").length&&new Swiper(".blog-slider",{slidesPerView:4,spaceBetween:8,loop:!0,autoplay:{delay:9999999999999,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{993:{spaceBetween:24,loop:!0,autoplay:{delay:1500,disableOnInteraction:!1}}}}),$(".reviews-video__slider").length&&new Swiper(".reviews-video__slider",{slidesPerView:4,spaceBetween:32,loop:!0,breakpoints:{993:{spaceBetween:80}},pagination:{el:".swiper-pagination",clickable:!0}}),$(".reviews-slider").length&&new Swiper(".reviews-slider",{slidesPerView:4,spaceBetween:32,loop:!0,breakpoints:{993:{spaceBetween:80}},pagination:{el:".swiper-pagination",clickable:!0}});let e=document.querySelectorAll("[data-tabs-wrapper]");e.forEach(e=>{let t=e.querySelectorAll("[data-tabs-content]"),n=e.querySelectorAll("[data-tabs-btn]");n[0].classList.add("active"),n.forEach((e,i)=>{e.addEventListener("click",()=>{for(let e=0;e<n.length;e++)n[e].classList.remove("active"),$(t[e]).hide();e.classList.add("active"),$(t[i]).fadeIn()})})}),$(".progress-bar").each(function(){let e=this.querySelector("video"),t=!1,n=this;$(this).click(function(){var n;n=this,setInterval(function(){let t=Math.round(e.currentTime/e.duration*100);$(n).css("background",`radial-gradient(closest-side, white 90%, transparent 80% 100%), conic-gradient(#0072F8 ${t}%, rgba(82, 87, 102, 0.1) 0)`)}),t?($(this).removeClass("active"),e.pause(),t=!1):($(this).addClass("active"),e.play(),t=!0)}),e.onended=function(){$(n).removeClass("active"),e.pause(),t=!1}})});const e=[500,500],t=new THREE.PerspectiveCamera(45,e[0]/e[1],1,1e4),n=[new THREE.AmbientLight(16777215,3.8)];window.addEventListener("DOMContentLoaded",function(e,t,n,i){var a=new THREE.WebGLRenderer({canvas:document.querySelector("#canvas"),alpha:!0,antialias:!0});if(window.innerWidth-45<=e[0])var o=window.innerWidth-45,s=window.innerWidth-45;else var o=e[0],s=e[1];a.setPixelRatio(1),a.setSize(o,s);var r=new THREE.Scene;t.position.set(0,0,500);var d=new THREE.GLTFLoader,l=null;function c(e,t){return Math.floor(e*Math.pow(10,t))/Math.pow(10,t)}function w(){a.render(r,t),requestAnimationFrame(w)}d.load(i,function(t){l=t.scene;var n,i=(new THREE.Box3).setFromObject(l),d=Math.round(i.max.x+-1*i.min.x),p=Math.round(i.max.y+-1*i.min.y),u=Math.round(i.max.z+-1*i.min.z);if(d>=p&&d>=u)var h=c(221/d,4);else if(p>=d&&p>=u)var h=c(221/p,4);else if(u>=d&&u>=p)var h=c(221/u,4);function m(){var e=document.getElementById("canvas").getBoundingClientRect();return[e.left+window.pageXOffset+o/2,e.top+window.pageYOffset+s/2,window.innerWidth,window.innerHeight]}l.scale.set(h,h,h),l.position.set(0,0,0),window.addEventListener("resize",m()),window.addEventListener("resize",function(t){n||clearTimeout(n),n=setTimeout(function(){window.innerWidth-45<=e[0]?(o=window.innerWidth-45,s=window.innerWidth-45):(o=e[0],s=e[1]),a.setPixelRatio(1),a.setSize(o,s),w()},1e3)}),window.addEventListener("mousemove",function(e){var n=m(),i=n[0],a=n[1],o=n[2],s=n[3],d=i-e.pageX,c=a-e.pageY;d>0?o/2<d&&(d=o/2):d<0&&o/2<-1*d&&(d=-(o/2*1)),c>0?s/2<c&&(c=s/2):c<0&&s/2<-1*c&&(c=-(s/2*1)),l.rotation.set(-(20*(Math.PI/100))/(s/2)*c,-(35*(Math.PI/100))/(o/2)*d,0),r.add(t.scene)}),l.rotation.set(0,0,0),r.add(t.scene)}),a.gammaOutput=!0,a.gammaFactor=2.2,n.forEach(function(e){r.add(e)}),a.outputEncoding=THREE.sRGBEncoding,a.toneMapping=THREE.ACESFilmicToneMapping,a.shadowMap.enabled=!0,a.physicallyCorrectLights=!0,w()}(e,t,n,"../3d/tibetan-sand-fox.glb"));
//# sourceMappingURL=index.002af376.js.map
