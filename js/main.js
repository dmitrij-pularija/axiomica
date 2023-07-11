import { mouse_follower } from '../3d/mouse-follower.min.js';
document.addEventListener("DOMContentLoaded", function () {
    //mobile resize for 100vh
    if (window.innerWidth < 993) {
        const documentHeight = () => {
            const doc = document.documentElement;
            doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
        };
        window.addEventListener("resize", documentHeight);
        documentHeight();
    }


    //mouse animate
    if(window.innerWidth > 1200) {
        let handleCursor = true;
        let cursorType = true;

        $(document).mousemove(function(e) {
            $('.cursor-item, .cursor-blur').css({
                left: e.pageX,
                top: e.pageY
            });
            if(handleCursor) {
                handleCursor = false;
                
                const item = document.createElement('div');
                item.classList.add('rhombus-item');
                item.style.left = e.pageX + "px";
                item.style.top = e.pageY + "px";
                item.style.display = "none";
                $(item).appendTo('.rhombus');
                $(item).fadeIn(500);

                if(cursorType) {
                    cursorType = false;
                    $(item).addClass('reverse');
                } else {
                    cursorType = true;
                }

                setTimeout(() => {
                    handleCursor = true;
                }, 200);

                setTimeout(() => {
                    $(item).fadeOut(500);
                    setTimeout(() => {
                        $(item).remove();
                    }, 500);
                }, 500);
            }
        });
        $('.white-section').hover(function () {
            $('.cursor-item').addClass('white-cursor');
        }, function () {
            $('.cursor-item').removeClass('white-cursor');
        });
    }

    //sliders
    if($('.team-slider').length) {
        const teamSwiper = new Swiper(".team-slider", {
            slidesPerView: 4,
            spaceBetween: 8,
            loop: true,
            autoplay: {
                delay: 9999999999999,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                993: {
                    spaceBetween: 24,
                    loop: true,
                    autoplay: {
                        delay: 1500,
                        disableOnInteraction: false,
                    },
                },
            },
        });
    }
    if($('.blog-slider').length) {
        const teamSwiper = new Swiper(".blog-slider", {
            slidesPerView: 4,
            spaceBetween: 8,
            loop: true,
            autoplay: {
                delay: 9999999999999,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                993: {
                    spaceBetween: 24,
                    loop: true,
                    autoplay: {
                        delay: 1500,
                        disableOnInteraction: false,
                    },
                },
            },
        });
    }
    if($('.reviews-video__slider').length) {
        const swiper = new Swiper(".reviews-video__slider", {
            slidesPerView: 4,
            spaceBetween: 32,
            loop: true,
            breakpoints: {
                993: {
                    spaceBetween: 80,
                },
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
    if($('.reviews-slider').length) {
        const swiper = new Swiper(".reviews-slider", {
            slidesPerView: 4,
            spaceBetween: 32,
            loop: true,
            breakpoints: {
                993: {
                    spaceBetween: 80,
                },
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }


    //tabs
    const tabButtons = document.querySelectorAll('[data-tabs-wrapper]');

    tabButtons.forEach((parent) => {
        const tabContents = parent.querySelectorAll('[data-tabs-content]');
        const tabWrapperButtons = parent.querySelectorAll('[data-tabs-btn]');

        tabWrapperButtons[0].classList.add('active');

        tabWrapperButtons.forEach((el, index) => {
            el.addEventListener('click', () => {
                for (let i = 0; i < tabWrapperButtons.length; i++) {
                    tabWrapperButtons[i].classList.remove('active');
                    $(tabContents[i]).hide();
                }
                el.classList.add('active');
                $(tabContents[index]).fadeIn();
            });
        });
    });
    

    //video reviews
    $('.progress-bar').each(function() {
        const video = this.querySelector('video')
        let player = false;
        const el = this;

        $(this).click(function() {
            progressLoop(this, video);
            if(player) {
                $(this).removeClass('active');
                video.pause();
                player = false;
            } else {
                $(this).addClass('active');
                video.play();
                player = true;
            }
        });

        video.onended = function() {
            $(el).removeClass('active');
            video.pause();
            player = false;
        }


    });

    function progressLoop(el, video) {

        setInterval(function () {
            const progressValue = Math.round((video.currentTime / video.duration) * 100);
            $(el).css('background', `radial-gradient(closest-side, white 90%, transparent 80% 100%), conic-gradient(#0072F8 ${progressValue}%, rgba(82, 87, 102, 0.1) 0)`)
            //timer.innerHTML = Math.round(video.currentTime) + " seconds";
        });
    }

        
    function onTrackedVideoFrame(currentTime, duration, time){
        $(time).text(currentTime);
    }



    
    //const progress = document.getElementById("progress");
    //const timer = document.getElementById( "timer" );
    //const video = document.querySelector('video');
    
    //function progressLoop() {
    //    setInterval(function () {
    //        progress.value = Math.round((video.currentTime / video.duration) * 100);
    //        timer.innerHTML = Math.round(video.currentTime) + " seconds";
    //    });
    //}
    
    //progressLoop();

    //button = document.querySelector('video');
 
    //function playPause() {
    //    if ( video.paused ) {
    //        video.play();
    //        button.innerHTML = "Pause";
    //    }
    //    else  {
    //        video.pause();
    //        button.innerHTML = "Play";
    //    }
    //}
    
    //button.addEventListener( "click", playPause );
    //video.addEventListener("play", progressLoop);

});

const canvas_size = [500, 500];
const camera = new THREE.PerspectiveCamera(45, canvas_size[0] / canvas_size[1], 1, 10000);
const lights = [new THREE.AmbientLight(0xffffff, 3.8)];
const gltf_glb_path = new URL('../3d/tibetan-sand-fox.glb', import.meta.url);

window.addEventListener('DOMContentLoaded', mouse_follower(canvas_size, camera, lights, gltf_glb_path+"/"));
