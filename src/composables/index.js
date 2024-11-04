import axios from "axios";
import { ref,onMounted,provide, computed} from "vue";

export default function init(){
    const cursor=ref(null)
    let mouseX = 0,mouseY = 0;
    const contents=ref({})
    const currentTab=ref('home')
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
    async function updateCurrentTab(name){
        currentTab.value=name
    }
    const isActive=computed(()=>(name)=>name==currentTab.value)
    function getDbData(){
         axios.get('/contents')
         .then(res=>{
            const {data}=res.data
            contents.value=data
         })
    }
    const sideBarJson=[
        {
            image:'/assets/images/home_icon.svg',
            heading:"Home",
            name:"home",
        },
        {
            image:'/assets/images/about_icon.svg',
            heading:"About Me",
            name:'about',
        },
        {
            image:'/assets/images/resume_icon.svg',
            heading:"Resume",
            name:'resume',
        },
        {
            image:'/assets/images/skills_icon.svg',
            heading:"Skills",
            name:'skills'
        },
        {
            image:'/assets/images/contact_icon.svg',
            heading:"Contact",
            name:'contact'
        },
    ]
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    })
    onMounted(()=>{
        initCursor()
        initCursorScale()
        getDbData()
        const script = document.createElement('script');
        script.src = '/assets/javascript/script.js'; 
        script.type = 'text/javascript';
        script.onload = () => {
          console.log('Script loaded successfully');
          document.dispatchEvent( new Event('DOMContentLoaded'))
        };
        document.body.appendChild(script);
     })
    provide('indexStore',{contents,isActive,updateCurrentTab,sideBarJson})
    return {cursor}
}