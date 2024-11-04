import { ref,onMounted } from "vue";

export default function init(){
    const cursor=ref(null)
    let mouseX = 0,mouseY = 0;
    async function initCursor(){
        gsap.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                gsap.set(cursor.value, {
                    css: {
                        left: mouseX,
                        top: mouseY,
                    }
                })
            }
        });   
    }
    async function initCursorScale(){
        let cursorScale = document.querySelectorAll('a,button,.pop-up,.trigger,.share,#close,.toggle,#vimeo,#youtube,.link,.gallery');
        cursorScale.forEach(link => {
            link.addEventListener('mousemove', () => {
                cursor.value.classList.add('grow');
                if (link.classList.contains('small')) {
                    cursor.value.classList.remove('grow');
                    cursor.value.classList.add('grow-small');
                }
            });
        
            link.addEventListener('mouseleave', () => {
                cursor.value.classList.remove('grow');
                cursor.value.classList.remove('grow-small');
            });
        });
        
    }
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    })
    
    onMounted(()=>{
        initCursor()
        initCursorScale()
     })
    return {cursor}
}