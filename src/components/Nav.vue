<script setup lang="ts">
    import { watch, ref, onMounted, onUnmounted } from "vue";
    import { useRoute } from 'vue-router'

    const logoLarge = new URL("@/assets/LOGO VILUMIN-WHITE.png", import.meta.url).href;
    const logoSmall = new URL("@/assets/logo-vilumin2-1.png", import.meta.url).href;
    const route = useRoute()
    
    const activeIndex = ref<number | null>(0); // Índice del menú seleccionado
    const isScrolled = ref(false);
    const isMobile = ref(false);
    const isOpen = ref(false)
    const activePath = ref(route.path)
    const leftMenu = ref([
        { id:"inicio", label: "Inicio", path: '/' },
        { id:"nosotros", label: "Nosotros", path: '/nosotros' },
        { id:"proyectos", label: "Proyectos", path: '/proyectos' },
    ]);

    const rightMenu = ref([
        { id:"rental", label: "Rental", path: '/rental' },
        { id:"productos", label: "Productos", path: '/productos' },
        { id:"galeria", label: "Galería", path: '/galeria' }
    ]);

    let observer: IntersectionObserver | null = null;

    const updateActiveIndexFromPath = () => {
        const allMenu = [...leftMenu.value, ...rightMenu.value];
        const index = allMenu.findIndex((item) => item.path === route.path);
        if (index !== -1) {
            activeIndex.value = index;
        }
    };

    const handleScroll = () => {
        isScrolled.value = window.scrollY > 30;
    };

    const handleResize = () => {
        isMobile.value = window.innerWidth < 768;
    };

    const handleMenuOpen = () => {
        isOpen.value = !isOpen.value
    };
   
    const emit = defineEmits(["scrollToSection"]);

    const setActive = (index: number, id: string) => {
        console.log(`setActive: Activando índice ${index} para el id ${id}`);
   
        activeIndex.value = index; // Guarda el índice del li seleccionado
        console.log(`Índice activo: ${activeIndex.value}`);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        emit("scrollToSection", id);
    };
    // Detectar la sección activa con IntersectionObserver
    const observeSections = () => {
        console.log('entra al observeSections')
        const allMenu = [...leftMenu.value, ...rightMenu.value];
        const observer = new IntersectionObserver(  
        (entries) => {

            // Filtrar las entradas que están visibles
            const visibleEntries = entries.filter(entry => entry.isIntersecting);

            // Ordenar por cuánto porcentaje está visible cada sección (descendente)
            visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleEntries.length > 0) {
                const mostVisible = visibleEntries[0];
                const id = mostVisible.target.id;
                console.log(`Sección más visible: ${id}`);
                // Buscar índice correspondiente al id
                const index = allMenu.findIndex(item => item.id === id);
                if (index !== -1) {
                    activeIndex.value = index;
                    isScrolled.value = id !== "inicio";
                }
            }
        },
        { threshold: [0.5, 0.75, 1.0] } // Detecta cuando el 30% de la sección está en pantalla
        );

        allMenu.forEach((item) => {
            const section = document.getElementById(item.id);
                if (section){ 
                    observer.observe(section); 
                    console.log(`Observando sección con id: ${item.id}`);
                }
                else 
                    console.warn("No se encontró el elemento con id:", item.id);
        });

        const footer = document.getElementById("footer");
        if (footer) {
            observer.observe(footer);
        }
        return observer;
    };

    onMounted( () => {
        
        console.log('onMounted')
        setTimeout(() => {

            observer = observeSections(); // Se ejecuta después de que el DOM está listo
            window.addEventListener("scroll", handleScroll);
            handleScroll();
            window.addEventListener('resize', handleResize);
            handleResize();
           
        },500);
 
        activePath.value = route.path
        updateActiveIndexFromPath()
    });

    onUnmounted(() => {
        observer?.disconnect();
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener('resize', handleResize);
        console.log('onUnmounted')
    });

    watch(route, (newRoute) => {
    activePath.value = newRoute.path
    updateActiveIndexFromPath()
    })
</script>
<template>
    <nav
        :class="isMobile
                ? 'z-50 bg-black fixed flex flex-col-reverse w-full px-5 ' 
                : (isScrolled
                    ? 'bg-[rgba(0,0,0,0.7)] py-2 shadow-2xl shadow-[rgba(0,0,0,1)] h-[95px] z-50 fixed w-full '
                    : 'w-full h-[36%] flex py-3.5 top-0 z-50 fixed transition-all duration-500')"
    >
        <span @click="handleMenuOpen()" class="absolute md:hidden right-6 top-3 cursor-pointer text-4xl">
            <i :class="isOpen?'bi bi-x':'bi bi-filter-left'"></i>
        </span>
        <ul 
            class="md:gap-2 lg:gap-4 transition-all duration-500 "
            :class="[isMobile
                        ? 'absolute pb-10 w-[95.5%] top-17.5 bg-black px-10 duration-700 ease-in '
                        : (isScrolled 
                            ? 'w-full top-2 flex relative justify-center flex-row justify-center md:top-[80px] 2xl:top-[25px] left-0!' 
                            : 'w-full top-[133px] absolute flex justify-center items-center bg-transparent left-0!'),
                    isOpen?'left-0':'left-[-100%]']"
            >
            <!-- Menú de izquierda -->
            <li 
            v-for="(item,index) in leftMenu" 
            :key="'left-' + index" 
            @click="setActive(index, item.id)"
            :class="[   isMobile
                            ? 'my-6'
                            : ( 
                                isScrolled
                                    ? 'md:w-[110px] xl:w-[150px] h-11 border-white/[0.00]'
                                    : 'xl:w-[14%] md:h-13 xl:h-16 border-white/[0.85]'),
                        'cursor-pointer transition-all duration-300',
                        activeIndex  === index 
                            ? 'flex justify-center items-center relative overflow-hidden p-[5px] rounded-xl bg-white/[0.63]'
                            : 'flex justify-center items-center relative overflow-hidden p-[5px] rounded-xl bg-[#ffffff99]/10 border ']"
                    >
            <a href="javascript:void(0);" :class = "isMobile?'text-xl hover:text-orange-500':(isScrolled?'md:text-md xl:text-xl':'md:text-md lg:text-xl xl:text-2xl 2xl:text-3xl')" class="flex-grow-0 flex-shrink-0 w-[200px] text-center text-[#e45833] font-[Posterama]">
                {{item.label}}
            </a>
            </li>
            <li v-if="!isScrolled && !isMobile" class="flex justify-center items-center flex-grow-0 flex-shrink-0 md:w-[190px] xl:w-[330px] h-16 gap-2.5 px-[49px] py-3 bg-transparent"></li>
            <!-- Menú de derecha -->
            <li 
            v-for="(item,index) in rightMenu" 
            :key="'right-' + index" 
            @click="setActive(index + leftMenu.length, item.id)"
            :class="[   isMobile
                            ? 'my-6'
                            : ( 
                                isScrolled
                                    ? 'md:w-[110px] xl:w-[150px] h-11 border-white/[0.00]'
                                    : 'xl:w-[14%] md:h-13 xl:h-16 border-white/[0.85]'),
                                'cursor-pointer transition-all duration-300',
                                activeIndex  === (index + leftMenu.length)
                                    ? 'flex justify-center items-center relative overflow-hidden  p-[5px] rounded-xl bg-white/[0.63]'
                                    : 'flex justify-center items-center relative overflow-hidden  p-[5px] rounded-xl bg-[#ffffff99]/10 border']"
            >
            <a href="javascript:void(0);" :class = "isMobile?'text-xl hover:text-orange-500':(isScrolled?'md:text-md xl:text-xl':'md:text-md lg:text-xl xl:text-2xl 2xl:text-3xl')" class="flex-grow-0 flex-shrink-0 w-[200px] text-center text-[#e45833] font-[Posterama]">
                {{item.label}}
            </a>
            </li>
            <button 
                class=" transition-all duration-500 overflow-hidden rounded-[10px] text-center "
                :class="isMobile
                            ? 'relative block h-11 w-full'
                            : (isScrolled 
                                ? 'w-[240px] h-11 md:top-[-65px] 2xl:top-[0px] flex justify-center items-center absolute right-[30px] ' 
                                : 'w-[218px] h-16 top-[-100px] flex justify-center items-center absolute right-[30px] ')"
                style="background: linear-gradient(to bottom, #ff6a3c 0%, #fe873d 48%, #e45833 100%); box-shadow: 0px 0px 10.199999809265137px 7px rgba(255,255,255,0.25);"
            >
                <p :class="isMobile?'text-xl':(isScrolled?'w-[240px] text-[18px]':'w-[218px] text-[26px]')" class=" text-center text-white break-words whitespace-normal leading-tight text-wrap font-[Posterama]">
                Registrate / Cotiza
                </p>
            </button>
        </ul>
        <div :class=" isMobile ? 'h-[70px]' : 'h-auto'">
            <img 
            :src="isMobile ? logoSmall : (isScrolled ? logoSmall : logoLarge)"  
            alt="Ejemplo" 
            style="filter: drop-shadow(0px 0px 12px rgba(228,88,51,1));"
            class="transition-all duration-500"
            :class="isMobile
                    ? 'w-[130px] relative block left-4 top-2 z-50'
                    : (isScrolled
                        ? 'w-[180px] h-auto absolute left-4 top-2' 
                        : 'md:w-[180px] xl:w-[290px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2')"/>
        </div>
        
        
    </nav>
</template>