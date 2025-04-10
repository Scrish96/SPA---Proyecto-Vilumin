<template>
  <!-- Sección de Inicio con Slider -->
  <section id="inicio" class="relative w-full h-screen">
    <swiper 
      :modules="[Autoplay, Navigation]" 
      :autoplay="{ delay: 5000 }" 
      loop 
      class="w-full h-full z-0"
    >
      <swiper-slide v-for="(img, index) in sliderImages" :key="index">
        <img :src="img" class="w-full h-full object-cover blur-[1.5px]" />
      </swiper-slide>
    </swiper>
    <p class="absolute inset-0 mx-auto w-[80%] h-min z-10 top-[16%] md:top-[46%]  md:text-2xl text-xl sm:text-2xl text-center font-[Posterama]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum quis odit consequatur quos officiis, assumenda distinctio nisi est? In voluptatum similique totam labore sunt error, tempora fugiat necessitatibus deserunt?
      Facere neque.
    </p>
    <div id = "partners" class="absolute w-full h-auto py-12 bottom-[0%] z-20" >
      <h2 class="text-center text-2xl md:text-3xl text-[#e45833] mt-6 mb-6 font-[Posterama] underline">
        NUESTROS PARTNERS
      </h2>
      <div class="relative max-w-6xl mx-auto">
        <swiper
          :modules="[Autoplay, Navigation]"
          :slidesPerView="1"
          :space-between="20"
          :navigation="true"
          :autoplay="{ delay: 2500 }"
          class="w-full"
          :breakpoints="{
            '320': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }"
        >
          <swiper-slide v-for="(partner,index) in partners" :key="index">
            <div class="flex justify-center items-center p-4">
              <img :src=partner.logo :alt=partner.nombre class="w-[200px] h-[100px] object-contain" style="filter: drop-shadow(1px 1px 6px rgba(255,255,255,0.5));">
            </div>                                              
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section> 
  
  <!-- Sección Nosotros -->
  <section id="nosotros" class="relative w-full h-screen flex flex-col bg-[#242424] z-10">
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
      <mask
        id="mask0_19_421"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1920"
        height="1080"
      >
        <rect
          width="1920"
          height="1080"
          transform="matrix(1 0 0 -1 0 1080)"
          fill="#D9D9D9"
          fill-opacity="0.5"
        ></rect>
      </mask>
      <g mask="url(#mask0_19_421)">
        <path
          d="M784.521 622.324C437.708 627.198 267.668 938.139 226 1093H2305.58C2317.41 829.482 2291.78 258.476 2094.57 82.5944C1848.06 -137.258 1601.55 145.554 1479.55 302.446C1357.54 459.339 1218.04 616.231 784.521 622.324Z"
          fill="#D9D9D9"
          fill-opacity="0.1"
          stroke="#5B5B5B"
          stroke-opacity="0.9"
          stroke-width="3"
        ></path>
        <circle cx="916" cy="345" r="129" fill="#FE873D" fill-opacity="0.12"></circle>
        <circle
          cx="916"
          cy="345"
          r="127.5"
          stroke="#E45833"
          stroke-opacity="0.65"
          stroke-width="3"
        ></circle>
        <circle cx="166" cy="814" r="129" fill="#FE873D" fill-opacity="0.12"></circle>
        <circle
          cx="166"
          cy="814"
          r="127.5"
          stroke="#E45833"
          stroke-opacity="0.65"
          stroke-width="3"
        ></circle>
        <circle cx="328" cy="293" r="129" fill="#FE873D" fill-opacity="0.12"></circle>
        <circle
          cx="328"
          cy="293"
          r="127.5"
          stroke="#E45833"
          stroke-opacity="0.65"
          stroke-width="3"
        ></circle>
        <circle cx="1397" cy="144" r="81" fill="#FE873D" fill-opacity="0.12"></circle>
        <circle
          cx="1397"
          cy="144"
          r="79.5"
          stroke="#E45833"
          stroke-opacity="0.65"
          stroke-width="3"
        ></circle>
        <circle cx="613" cy="500" r="81" fill="#FE873D" fill-opacity="0.12"></circle>
        <circle
          cx="613"
          cy="500"
          r="79.5"
          stroke="#E45833"
          stroke-opacity="0.65"
          stroke-width="3"
        ></circle>
        <circle cx="118" cy="127" r="81" fill="#FE873D" fill-opacity="0.12"></circle>
        <circle
          cx="118"
          cy="127"
          r="79.5"
          stroke="#E45833"
          stroke-opacity="0.65"
          stroke-width="3"
        ></circle>
        <circle cx="532" cy="161" r="34" fill="#FE873D" fill-opacity="0.12"></circle>
        <circle
          cx="532"
          cy="161"
          r="32.5"
          stroke="#E45833"
          stroke-opacity="0.65"
          stroke-width="3"
        ></circle>
        <circle cx="1249" cy="327" r="34" fill="#FE873D" fill-opacity="0.12"></circle>
        <circle
          cx="1249"
          cy="327"
          r="32.5"
          stroke="#E45833"
          stroke-opacity="0.65"
          stroke-width="3"
        ></circle>
        <circle cx="192" cy="539" r="34" fill="#FE873D" fill-opacity="0.12"></circle>
        <circle
          cx="192"
          cy="539"
          r="32.5"
          stroke="#E45833"
          stroke-opacity="0.65"
          stroke-width="3"
        ></circle>
      </g>
    </svg>
    <h2 class="mt-10 underline relative z-10 text-center text-2xl md:text-3xl text-[#e45833] pt-6 pb-6 font-[Posterama]">
        EQUIPO VILUMIN
    </h2>
    <div 
      class="z-10 mx-auto max-w-80 overflow-hidden rounded-xl bg-[#d6710d]/[0.32] md:max-w-200 lg:max-w-220 xl:max-w-320 2xl:max-w-400"
      style="box-shadow: 6px 6px 22px -3px rgba(255,106,60,0.35), inset 0px 0px 15px -2px #b36e27;">
      <div class="md:flex">
        <div class="md:shrink-0 ">
          <img 
            src="../assets/equipo-1-2.jpeg"
            class="h-48 opacity-82 w-full object-cover md:h-full md:w-65 lg:w-120 2xl:w-200"
            alt="equipo"
          />
        </div>
        <div class="md:px-18 px-8 xl:pb-8 md:py-8 xl:pt-15 xl:flex xl:flex-col xl:gap-50">
          <p class="mt-6 text-xl md:text-2xl xl:text-4xl">
            Lorem ipsum dolor sit amet consectetur. Purus ultricies eleifend tortor aenean donec amet
            magna. In mus accumsan ut nibh massa condimentum eget ipsum cras. Enim molestie
            pellentesque sed tempus magna id ut pretium duis.
          </p>
          <a @click="irANosotros" class="text-2xl lg:text-3xl text-center md:text-left md:text-right text-[#e45833] hover:underline! cursor-pointer my-5 lg:my-0 block">Ver MÁS →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección Proyectos -->
  <section id="proyectos" class="relative w-full h-screen flex flex-col bg-[#242424] z-10">
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
      <mask
          id="mask0_19_443"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1920"
          height="1080"
        >
          <rect
            width="1920"
            height="1080"
            transform="matrix(1 0 0 -1 0 1080)"
            fill="#2D2D2D"
            fill-opacity="0.5"
          ></rect>
        </mask>
        <g mask="url(#mask0_19_443)">
          <circle cx="180" cy="711" r="34" fill="#FE873D" fill-opacity="0.12"></circle>
          <circle
            cx="180"
            cy="711"
            r="32.5"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle cx="743" cy="944" r="129" fill="#FE873D" fill-opacity="0.12"></circle>
          <circle
            cx="743"
            cy="944"
            r="127.5"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle cx="194" cy="955" r="81" fill="#FE873D" fill-opacity="0.12"></circle>
          <circle
            cx="194"
            cy="955"
            r="79.5"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle cx="141" cy="441" r="81" fill="#FE873D" fill-opacity="0.12"></circle>
          <circle
            cx="141"
            cy="441"
            r="79.5"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle cx="113" cy="44" r="34" fill="#FE873D" fill-opacity="0.12"></circle>
          <circle
            cx="113"
            cy="44"
            r="32.5"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <path
            d="M490.399 589.614C156.003 490.207 177.736 153.119 230.402 -3H2038.38C2071.72 75.6462 2088.98 309.405 1891.38 615.27C1644.39 997.601 1117.39 906.043 988.394 831.086C859.395 756.129 908.395 713.871 490.399 589.614Z"
            fill="#D9D9D9"
            fill-opacity="0.1"
            stroke="#5B5B5B"
            stroke-opacity="0.9"
            stroke-width="3"
          ></path>
        </g>
    </svg>
    <h2 class="mt-10 underline relative z-10 text-center text-2xl md:text-3xl text-[#e45833] pt-6 pb-6 font-[Posterama]">
      PROYECTOS
    </h2>
    <div class="relative mx-auto w-full h-149 md:h-[70%] md:px-5 ">
      <swiper
        :modules="[Autoplay, Navigation]"
        :autoplay="{ delay: 4000 }"
        :loop="true"
        :navigation="true"
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          '320': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '640': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }"
        class=" w-full h-[98%] md:h-full"
      >
        <swiper-slide v-for="(proyecto, index) in proyectos" :key="index" :class="'flex! h-143! md:h-full! items-center justify-center '">
          <div 
            class="absolute md:relative flex justify-center items-center w-76 h-135 md:h-152 md:w-86 overflow-hidden rounded-3xl bg-[#515151]/75"
            style="box-shadow: 6px 6px 22px -3px rgba(255,106,60,0.7), inset 0px 0px 15px 1px #767676;;"
          >
            <video 
              :src=proyecto.video 
              :title=proyecto.nombre 
              autoplay 
              muted
              playsinline 
              controls
              class="top-0 absolute w-full sm:h-auto object-contain">
            </video>
            <div
              class="flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 w-full h-full relative gap-4 px-5 bg-transparent">
              <p
                class="text-white text-lg sm:text-2xl text-left">
                Lorem ipsum dolor sit amet consectetur. Purus ultricies eleifend tortor aenean donec
                amet magna.
              </p>
              <a class="text-[#e45833] text-2xl lg:text-3xl text-left hover:underline my-5 lg:my-0 block">Ver MÁS →</a>
            </div>
          </div>                                              
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <!-- Sección Rental -->
  <section id="rental" class="relative w-full h-screen flex flex-col bg-[#242424] z-10">
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
        <mask
          id="mask0_16_350"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1920"
          height="1080"
        >
          <path d="M1920 1080H0V0H1920V1080Z" fill="#D9D9D9" fill-opacity="0.5"></path>
        </mask>
        <g mask="url(#mask0_16_350)">
          <path
            d="M1135.48 622.324C1482.29 627.198 1652.33 938.139 1694 1093H-385.579C-397.413 829.482 -371.778 258.476 -174.571 82.5944C71.9385 -137.258 318.448 145.554 440.453 302.446C562.457 459.339 701.962 616.231 1135.48 622.324Z"
            fill="#D9D9D9"
            fill-opacity="0.1"
            stroke="#5B5B5B"
            stroke-opacity="0.9"
            stroke-width="3"
          ></path>
          <circle
            cx="129"
            cy="129"
            r="129"
            transform="matrix(-1 0 0 1 1133 216)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="129"
            cy="129"
            r="127.5"
            transform="matrix(-1 0 0 1 1133 216)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle
            cx="129"
            cy="129"
            r="129"
            transform="matrix(-1 0 0 1 1883 685)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="129"
            cy="129"
            r="127.5"
            transform="matrix(-1 0 0 1 1883 685)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle
            cx="129"
            cy="129"
            r="129"
            transform="matrix(-1 0 0 1 1721 164)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="129"
            cy="129"
            r="127.5"
            transform="matrix(-1 0 0 1 1721 164)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle
            cx="81"
            cy="81"
            r="81"
            transform="matrix(-1 0 0 1 604 63)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="81"
            cy="81"
            r="79.5"
            transform="matrix(-1 0 0 1 604 63)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle
            cx="81"
            cy="81"
            r="81"
            transform="matrix(-1 0 0 1 1388 419)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="81"
            cy="81"
            r="79.5"
            transform="matrix(-1 0 0 1 1388 419)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle
            cx="81"
            cy="81"
            r="81"
            transform="matrix(-1 0 0 1 1883 46)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="81"
            cy="81"
            r="79.5"
            transform="matrix(-1 0 0 1 1883 46)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle
            cx="34"
            cy="34"
            r="34"
            transform="matrix(-1 0 0 1 1422 127)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="34"
            cy="34"
            r="32.5"
            transform="matrix(-1 0 0 1 1422 127)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle
            cx="34"
            cy="34"
            r="34"
            transform="matrix(-1 0 0 1 705 293)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="34"
            cy="34"
            r="32.5"
            transform="matrix(-1 0 0 1 705 293)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle
            cx="34"
            cy="34"
            r="34"
            transform="matrix(-1 0 0 1 1762 505)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="34"
            cy="34"
            r="32.5"
            transform="matrix(-1 0 0 1 1762 505)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
        </g>
      </svg>
    <h2 class="mt-10 underline relative z-10 text-center text-3xl text-[#e45833] pt-6 pb-6 font-[Posterama]">
        RENTAL
    </h2>
    <div class="z-10 mx-auto max-w-80 overflow-hidden rounded-xl md:max-w-200 lg:max-w-220 xl:max-w-320 2xl:max-w-380 bg-[#515151]/75"
      style="box-shadow: 6px 6px 22px -3px rgba(255,106,60,0.35), inset 0px 0px 15px 1px #767676;">
      <div class="md:flex">
        <div class="md:px-18 px-8 xl:pb-8 md:py-8 xl:pt-15 xl:flex xl:flex-col xl:gap-50">
          <p class="pt-7 text-xl md:text-2xl xl:text-4xl">
            Lorem ipsum dolor sit amet consectetur. Purus ultricies eleifend tortor aenean donec amet
            magna. In mus accumsan ut nibh massa condimentum eget ipsum cras. Enim molestie
            pellentesque sed tempus magna id ut pretium duis.
          </p>
          <a class="text-2xl lg:text-3xl text-center md:text-left md:text-left text-[#e45833] hover:underline! cursor-pointer my-5 lg:my-0 block">Ver MÁS →</a>
        </div>
        <div class="md:shrink-0">
          <img
            src="@/assets/equipo-1.jpeg"
            class="h-60 opacity-82 w-full object-cover md:h-full md:w-65 lg:w-120 2xl:w-155"
            alt="rental"
          />
        </div>
      </div>
      
    </div>
  </section>
  
  <!-- Sección Productos -->
  <section id="productos" class="relative w-full h-screen flex flex-col bg-[#242424] z-10">
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
        <mask
          id="mask0_19_401"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="-1"
          y="0"
          width="1921"
          height="1080"
        >
          <rect
            x="1920"
            y="1080"
            width="1920"
            height="1080"
            transform="rotate(180 1920 1080)"
            fill="#2D2D2D"
            fill-opacity="0.5"
          ></rect>
        </mask>
        <g mask="url(#mask0_19_401)">
          <circle
            cx="34"
            cy="34"
            r="34"
            transform="matrix(-1 0 0 1 1774 677)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="34"
            cy="34"
            r="32.5"
            transform="matrix(-1 0 0 1 1774 677)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle
            cx="129"
            cy="129"
            r="129"
            transform="matrix(-1 0 0 1 1306 815)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="129"
            cy="129"
            r="127.5"
            transform="matrix(-1 0 0 1 1306 815)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle
            cx="81"
            cy="81"
            r="81"
            transform="matrix(-1 0 0 1 1807 874)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="81"
            cy="81"
            r="79.5"
            transform="matrix(-1 0 0 1 1807 874)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle
            cx="81"
            cy="81"
            r="81"
            transform="matrix(-1 0 0 1 1860 360)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="81"
            cy="81"
            r="79.5"
            transform="matrix(-1 0 0 1 1860 360)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <circle
            cx="34"
            cy="34"
            r="34"
            transform="matrix(-1 0 0 1 1841 10)"
            fill="#FE873D"
            fill-opacity="0.12"
          ></circle>
          <circle
            cx="34"
            cy="34"
            r="32.5"
            transform="matrix(-1 0 0 1 1841 10)"
            stroke="#E45833"
            stroke-opacity="0.65"
            stroke-width="3"
          ></circle>
          <path
            d="M1429.6 589.614C1764 490.207 1742.26 153.119 1689.6 -3H-118.383C-151.716 75.6462 -168.982 309.405 28.6155 615.27C275.613 997.601 802.607 906.043 931.606 831.086C1060.6 756.129 1011.61 713.871 1429.6 589.614Z"
            fill="#D9D9D9"
            fill-opacity="0.1"
            stroke="#5B5B5B"
            stroke-opacity="0.9"
            stroke-width="3"
          ></path>
        </g>
      </svg>
    <h2 class="mt-10 underline relative z-10 text-center text-2xl md:text-3xl text-[#e45833] pt-6 pb-6 font-[Posterama]">
      PRODUCTOS
    </h2>
    <div class="relative mx-auto w-full h-160 md:h-[68%] md:px-5 ">
      <swiper
        :modules="[Autoplay, Pagination, Navigation]"
        :autoplay="{ delay: 4000 }"
        :loop="true"
        :navigation="true"
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          '320': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '640': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }"
        class="w-full h-full"
      >
        <swiper-slide v-for="(producto, index) in productos" :key="index" :class="'flex! h-155! h-160! items-center justify-center '">
          <div 
            class="relative flex p-8 flex-col justify-end items-center w-76 h-135 md:h-140 md:w-80 overflow-hidden rounded-[30px] bg-[#515151]/75"
            style="box-shadow: 6px 6px 22px -3px rgba(255,106,60,0.7), inset 0px 0px 15px 1px #767676;;"
          >
            <h3 :class="'font-[Posterama]'">{{producto.nombre}}</h3>
            <img 
              :src=producto.img
              :alt=producto.text 
              class="w-full h-[280px] object-contain">
            </img>
            <div
              class="flex flex-col justify-end items-end w-full relative gap-[15px] py-2 bg-transparent">
              <p
                class="w-full h-auto text-xl text-left text-white">
                Lorem ipsum dolor sit amet consectetur. Purus ultricies eleifend tortor aenean donec.
              </p>
              <p class="text-2xl lg:text-3xl text-left text-[#e45833] hover:underline my-2 lg:my-0 block">Ver MÁS →</p>
            </div>
          </div>                                              
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <!-- Sección Galería de Fotos -->
  <section id="galeria" class="relative w-full h-screen flex flex-col bg-[#242424] z-10">
    <h2 class="mt-10 underline z-10 text-center text-2xl md:text-3xl text-[#e45833] pt-6 pb-6 font-[Posterama]">
      GALERÍA DE FOTOS
    </h2>
    <div class="grid-container">
      <img v-for="(foto, index) in fotos" :key="index" :src="foto.img" :class="foto.class" />
    </div>
    <p
      class="text-2xl lg:text-3xl hover:underline text-left text-[#e45833]"
    >
      Ver MÁS →
    </p>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  import { useRouter } from 'vue-router'
  import '../../node_modules/swiper/swiper.css';
  import '../../node_modules/swiper/modules/navigation.css';
  import '../../node_modules/swiper/modules/navigation.css';

const router = useRouter()

const irANosotros = () => {
  console.log("Redirigiendo a la vista Nosotros...");
  router.push('/nosotros')
}

  // Importar imágenes correctamente en Vue + Vite
  const sliderImages = ref([
    new URL('@/assets/slide1.png', import.meta.url).href,
    new URL('@/assets/slide2-1.png', import.meta.url).href,
    new URL('@/assets/slide1-1.jpeg', import.meta.url).href,
    new URL('@/assets/slide5.jpeg', import.meta.url).href
  ]);

  const partners = ref([
    {logo:new URL('../assets/partner4-1.png', import.meta.url).href, nombre:"partner1"},
    {logo:new URL('../assets/partner3-1.png', import.meta.url).href, nombre:"partner2"},
    {logo:new URL('../assets/partner2-1.png', import.meta.url).href, nombre:"partner3"},
    {logo:new URL('../assets/partner1-1.png', import.meta.url).href, nombre:"partner4"}
  ]);

  const proyectos = ref([
    { nombre:"video1", video: new URL('../assets/assets/proyecto1.mp4', import.meta.url).href, text: 'Proyecto 1 - Lorem ipsum dolor sit amet...' },
    { nombre:"video2", video: new URL('../assets/assets/proyecto2.mp4', import.meta.url).href, text: 'Proyecto 2 - Lorem ipsum dolor sit amet...' },
    { nombre:"video3", video: new URL('../assets/assets/proyecto1.mp4', import.meta.url).href, text: 'Proyecto 1 - Lorem ipsum dolor sit amet...' },
    { nombre:"video4", video: new URL('../assets/assets/proyecto2.mp4', import.meta.url).href, text: 'Proyecto 2 - Lorem ipsum dolor sit amet...' }
  ]);

  const productos = ref([
    { nombre:"Pantallas", img: new URL('../assets/equipo-1-5.png', import.meta.url).href, text: 'Producto 1' },
    { nombre:"Luces", img: new URL('../assets/equipo-1-6.png', import.meta.url).href, text: 'Producto 2' },
    { nombre:"Stream", img: new URL('../assets/slide5.jpeg', import.meta.url).href, text: 'Producto 3' },
    { nombre:"Pantallas", img: new URL('../assets/equipo-1-5.png', import.meta.url).href, text: 'Producto 1' },
    { nombre:"Luces", img: new URL('../assets/equipo-1-6.png', import.meta.url).href, text: 'Producto 2' },
    { nombre:"Stream", img: new URL('../assets/slide5.jpeg', import.meta.url).href, text: 'Producto 3' }
  ]);
  const fotos = [
    { nombre:"galeria-2", img:new URL('../assets/equipo-1-3.jpeg', import.meta.url).href, class: 'img-size item-1' },
    { nombre:"galeria-3", img:new URL('../assets/galeria3-1.jpeg', import.meta.url).href, class: 'img-size item-2' },
    { nombre:"galeria-4", img:new URL('../assets/slide1-1.jpeg', import.meta.url).href, class: 'img-size item-3' },
    { nombre:"galeria-1", img:new URL('../assets/galeria4-1.jpeg', import.meta.url).href, class: 'img-size item-4' },
    { nombre:"galeria-5", img:new URL('../assets/slide2-1.png', import.meta.url).href, class: 'img-size item-5' },
    { nombre:"galeria-6", img:new URL('../assets/galeria5-1.png', import.meta.url).href, class: 'img-size item-6' },
    { nombre:"galeria-8", img:new URL('../assets/galeria7-1.png', import.meta.url).href, class: 'img-size item-7' },
    { nombre:"galeria-7", img:new URL('../assets/galeria6-1.jpeg', import.meta.url).href, class: 'img-size item-8' }
  ];
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.foto {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px; /* Opcional para bordes redondeados */
}
  /* Contenedor Grid */
.grid-container {
    display: grid;
    grid-template-columns: 1.1fr 1.13fr 1.78fr;
    grid-template-rows: 215px 0px 0px 0px 132px 0px 46px 0px 185px;
    gap: 10px 20px;
    width: 85vw;
    max-width: 1100px;
    max-height: 690px;
    height: auto;
}

/* Para tablets y pantallas medianas */
@media (max-width: 1280px) {
  .grid-container {
    grid-template-columns: 1.1fr 1.13fr 1.78fr;
    grid-template-rows: 190px 3px 0px 0px 117px 0px 41px 0px 183px;
    gap: 9px 18px;
  }
}

@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: 1.1fr 1.13fr 1.78fr;
    grid-template-rows: 170px 2px 0px 0px 108px 0px 40px 0px 155px;
    gap: 7px 16.5px;
  }
}

/* Para móviles */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1.1fr 1.13fr 1.78fr;
    grid-template-rows: 132px 0px 0px 0px 81px 0px 31px 0px 185px;
    gap: 5px 10px;
  }
}

@media (min-width:280px) and (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1.1fr 1.13fr 1.78fr;
    grid-template-rows: 71px 0px 0px 3px 41.5px 0px 20px 0px 155px;
    gap: 1.8px 7px;
  }
}
.item-1{
  grid-column: 1; /* Ocupará 1 columna */
  grid-row: 1;
}
.item-2{
  grid-column: 2; /* Ocupará 1 columna */
  grid-row: 1/2;
}
.item-3{
  grid-column:3; /* Ocupará 1 columna */
  grid-row: 1/3;
}
.item-4{
  grid-column: 1; /* Ocupará 1 columna */
  grid-row: 3/5;
}
.item-5{
  grid-column: 2; /* Ocupará 1 columna */
  grid-row: 4;
}
.item-6{
  grid-column: 3; /* Ocupará 1 columna */
  grid-row: 5;
}
.item-7{
  grid-column:1; /* Ocupará 1 columna */
  grid-row: 9;
}
.item-8{
  grid-column: 2; /* Ocupará 1 columna */
  grid-row: 7;
}
/* Imágenes Responsivas */
.img-size {
  width: 100%; /* Que cada imagen ocupe su celda en la grilla */
  height: auto;
  object-fit: cover; /* Para que no se distorsionen */
}
</style>