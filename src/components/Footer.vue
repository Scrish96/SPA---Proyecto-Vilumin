<template>
  <footer id="footer" class="w-full md:h-full lg:min-h-[35vh] min-h-[67vh] relative z-10 md:flex flex-col">
    <div class="bg-[#c84d2d] h-full w-full flex flex-col lg:flex-row md:flex-col justify-evenly items-center px-10 py-6">
      <div class="flex flex-1 flex-col justify-around h-full">
        <img
          src="@/assets/logo-vilumin2-1.png"
          class="lg:w-[70%] md:w-[30%] w-3xs pb-6 object-cover"
          style="filter:drop-shadow(2px 4px 12px rgba(0,0,0,0.51));"
        />
        <div class="w-full flex justify-center md:justify-start p-2">
          <svg
            width="50"
            height="37"
            viewBox="0 0 50 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[27px] h-[25px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <g clip-path="url(#clip0_21_524)">
              <path
                d="M3.398 0.511097H3.898V0.5H46.5999C48.2294 0.5 49.4999 1.7308 49.4999 3.14222L49.4999 26.6007L49.5 26.6072V26.6164H49.4999V26.6229V36.0781C49.4994 36.1491 49.4774 36.2217 49.432 36.2879C49.386 36.3549 49.3167 36.4137 49.2281 36.4527C49.1393 36.4917 49.038 36.5076 48.9369 36.4966C48.8361 36.4856 48.7444 36.4488 48.6715 36.3946C48.6713 36.3945 48.6712 36.3943 48.671 36.3942L40.5742 30.3123L40.4408 30.212H40.2739H3.4C1.77258 30.212 0.5 28.9812 0.5 27.568V3.15517C0.5 1.74153 1.77097 0.511097 3.398 0.511097ZM46.6231 2.29286L48.2276 1.36055H46.3719H3.76473H3.63H3.62799V1.86055V1.86399L3.37877 2.29285L24.7487 14.7119L25 14.8579L25.2512 14.712L46.6231 2.29286ZM2.26319 2.67476L1.512 2.23829V3.045C1.50556 3.07535 1.5 3.11404 1.5 3.15887V27.5666C1.49549 27.8085 1.54349 28.0479 1.64004 28.2701C1.73733 28.494 1.88131 28.6946 2.06113 28.8611C2.24086 29.0276 2.45291 29.1568 2.68361 29.2428C2.91279 29.3283 3.157 29.3701 3.40213 29.3663H40.6298C40.6299 29.3663 40.6299 29.3663 40.6299 29.3663C40.7538 29.3663 40.8695 29.4058 40.9581 29.4717C40.9584 29.4719 40.9586 29.472 40.9588 29.4722L47.6995 34.5388L48.4999 35.1404V34.1391L48.5 25.8572L48.4999 25.8518V25.8441H48.4999V25.8387V3.15332C48.4999 3.11624 48.4962 3.08429 48.4919 3.05936V2.23836L47.7408 2.67474L25.2808 15.7226L25.2808 15.7227C25.1994 15.77 25.1019 15.7967 25 15.7967C24.898 15.7967 24.8006 15.77 24.7192 15.7227C24.7192 15.7227 24.7192 15.7227 24.7191 15.7227L2.26319 2.67476ZM48.4783 2.99867C48.4784 2.99889 48.4788 3.00064 48.4794 3.0027L48.4786 2.99972L48.4783 2.99867Z"
                fill="white"
                stroke="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_21_524">
                <rect width="50" height="37" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <p class="text-xl md:text-2xl lg:pl-[5%] text-center md:text-left text-white">xxxxx@gmail.com</p>
        </div>
        <div class="w-full flex justify-center md:justify-start p-2">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[27px] h-[27px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M32.4589 31.6036L32.7488 31.8934L33.0899 31.666L37.4622 28.7511L47.8333 37.6406L43.4837 47.7897C35.8346 44.6358 26.7252 38.5181 19.1036 30.8964C11.489 23.2819 5.37561 14.1824 2.21918 6.53774L13.8787 2.16542L21.2675 12.5098L18.334 16.9101L18.1066 17.2512L18.3964 17.5411L32.4589 31.6036ZM19.5011 30.4989L19.5012 30.4989C26.4677 37.4646 35.0361 43.491 42.7238 46.8549L43.1853 47.0569L43.3838 46.5938L47.0088 38.136L47.1535 37.7984L46.8746 37.5594L37.7074 29.7024L37.4198 29.4559L37.1047 29.666L33.4024 32.1339L33.4024 32.134L32.6778 32.6168L32.0621 32.0011L17.9996 17.9386L17.9995 17.9385L17.3834 17.323L17.8667 16.5986L17.8668 16.5984L20.3934 12.8078L20.5848 12.5206L20.3842 12.2398L13.8951 3.15623L13.6721 2.84396L13.3127 2.97871L3.45647 6.6748L2.96171 6.86034L3.17427 7.3441C6.54439 15.0141 12.555 23.5527 19.5011 30.4989Z"
              fill="white"
              stroke="white"
            ></path>
          </svg>
          <p class="text-xl md:text-2xl lg:pl-[5%] text-center md:text-left text-white">999-999-999</p>
        </div>
        
      </div>
      <div class="flex flex-2 flex-col md:flex-row md:gap-15 w-full titulo-servicios">
        <div v-for = "(seccion,i) in textosFooter" :key="i" class="flex flex-1 gap-4 md:gap-0 flex-col justify-evenly h-full text-left text-white!">
          <h3 :class=seccion.cabecera.clase>{{seccion.cabecera.titulo}}</h3>
          <ul v-for=" (items,j) in seccion.items.titulos" :key="j" :class="seccion.items.clase">
            <li class="inline hover:underline cursor-pointer">{{items}}</li>
          </ul>
        </div>
      </div>
      <div class="lg:relative md:right-20 lg:right-0 md:top-20 lg:top-0 md:absolute md:h-auto flex flex-1 flex-col justify-center items-center h-full">
        <button class="flex justify-center items-center w-65 h-13 overflow-hidden p-[4%]! rounded-[10px]"
          style="background: linear-gradient(to bottom, #ff6a3c 0%, #fe873d 48%, #e45833 100%); box-shadow: 0px 0px 11.199999809265137px 5px rgba(95,95,95,0.42);"
          >
            <p class="text-[18px] text-center text-white break-words whitespace-normal leading-tight text-wrap font-[Posterama]">registrate / cotiza</p>
      </button>
      </div>
    </div>
    <div class="w-full bg-[#d9d9d9]">
      <p class="text-lg md:text-2xl text-black text-center">
        © {{ currentYear }} Todos los Derechos Reservados - Vilumin
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const textosFooter=ref([
  {
    cabecera: {
      titulo:"Nosotros", 
      clase:"w-full! text-[30px] text-left text-white! underline!"
    },
    items: {
      titulos:[
        "Quiénes somos",
        "Misión",
        "Visión"
      ], 
      clase:"servicios w-full! text-xl text-left text-white!"
    }
  },
  {
    cabecera: {
      titulo:"Servicios", 
      clase:"w-full! text-[30px] text-left text-white! underline!"
    },
    items: {
      titulos:[
        "Planes",
        "Soporte",
        "Precios"
      ], 
      clase:"servicios w-full! text-xl text-left text-white!"
    }
  },
  {
    cabecera: {
      titulo:"Legal", 
      clase:"w-full! text-[30px] text-left text-white! underline!"
    },
    items: {
      titulos:[
        "Términos",
        "Privacidad",
        "Cookies"
      ], 
      clase:"servicios w-full! text-xl text-left text-white!"
    }
  }
  ])
  const currentYear = new Date().getFullYear();
</script>

<style scoped>
  @media (max-width: 768px) {
    .servicios {
      display: none;
      text-align: center;
      width:100%;
    }
    h3{
      text-align: center;
    }
    .titulo-servicios{
      gap:5%
    }
}

</style>
