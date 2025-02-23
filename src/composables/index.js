import axios from "axios";
import { ref,onMounted,provide, computed, inject} from "vue";

export default function init(){
    const CDN=inject('CDN_URL')
    const cursor=ref(null)
    let mouseX = 0,mouseY = 0;
    const contents=ref({})
    const currentTab=ref('home')
    const skills=ref([])
    const experience=ref([])
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
    async function getDbData(){
        try {
           const res= await axios.get('/contents')
           const {data}=res.data
           contents.value=data.contents
           experience.value=data.experience
           skills.value=data.skills
           initScript()
           updateMeta()
        } catch (error) {
           console.error(error);   
        }
    }
    async function updateMeta(){
        const content=contents.value.objective.value
        const metas=[
            {name:"description",content},
            {name:"og:description",content},
            {name:"twitter:description",content}
        ]
        metas.forEach(val=>{
            appendMeata(val)
        })
    }
    async function appendMeata({name,content}){
        const metaDescription = document.createElement('meta');
         metaDescription.name = name;
         metaDescription.content = content;
         document.head.appendChild(metaDescription);
    }
    const sideBarJson=[
        {
            image:CDN+'/images/home_icon.svg',
            heading:"Home",
            name:"home",
        },
        {
            image:CDN+'/images/about_icon.svg',
            heading:"About Me",
            name:'about',
        },
        {
            image:CDN+'/images/resume_icon.svg',
            heading:"Resume",
            name:'resume',
        },
        // {
        //     image:CDN+'/images/skills_icon.svg',
        //     heading:"Skills",
        //     name:'skills'
        // },
        {
            image:CDN+'/images/contact_icon.svg',
            heading:"Contact",
            name:'contact'
        },
    ]
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    })
    const initScript=()=>{
        const script = document.createElement('script');
        script.src = CDN+'/javascript/script.js'; 
        script.type = 'text/javascript';
        script.onload = () => {
          console.log('Script loaded successfully');
          document.dispatchEvent( new Event('DOMContentLoaded'))
        };
        document.body.appendChild(script);
    }
    onMounted(()=>{
        initCursor()
        initCursorScale()
        getDbData()
    })
    provide('indexStore',{contents,isActive,updateCurrentTab,sideBarJson,skills,experience})
    return {cursor}
}