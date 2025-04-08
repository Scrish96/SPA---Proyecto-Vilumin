<template>
    <section id="nosotros" class="relative w-full h-full! flex flex-col z-20">
        <!-- Banner -->
        <div class="relative w-full h-64 bg-cover bg-center" style="background-image: url('path-to-image.jpg');">
            <div class="absolute inset-0 bg-black opacity-50"></div> <!-- Filtro oscuro -->
            <div class="absolute inset-x-0 bottom-0 p-4 text-white">
                <h2 class="text-4xl font-semibold">Vilumin > Nosotros</h2>
            </div>
        </div>
        <!-- Timeline -->
        <section class="py-16 bg-gray-100">
            <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-10">Nuestra Historia</h2>
            
            <!-- Timeline -->
            <div class="relative">
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
                
                    <div v-for="(event, index) in timeline" :key="index" class="relative mb-12">
                        <div :class="index % 2 === 0 ? 'left-0' : 'right-0'">
                            <div class="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full text-white">
                                <span>{{ event.year }}</span>
                            </div>
                            <div class="ml-4 text-lg">
                                <p class="font-semibold">{{ event.title }}</p>
                                <p>{{ event.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-6 text-center">
                <h2 class="text-3xl font-bold mb-12">Misión, Visión y Valores</h2>
                <!-- Misión y Visión -->
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Misión -->
                    <div class="bg-white p-8 rounded-lg shadow-lg">
                        <h3 class="text-2xl font-semibold text-indigo-600 mb-4">Nuestra Misión</h3>
                        <p class="text-lg">Nuestra misión es ofrecer soluciones tecnológicas innovadoras que mejoren la calidad de vida de nuestros clientes.</p>
                    </div>
                    
                    <!-- Visión -->
                    <div class="bg-white p-8 rounded-lg shadow-lg">
                        <h3 class="text-2xl font-semibold text-indigo-600 mb-4">Nuestra Visión</h3>
                        <p class="text-lg">Nuestra visión es ser la empresa líder en innovación tecnológica, conocida por nuestra capacidad para resolver los desafíos más complejos de nuestros clientes.</p>
                    </div>
                </div>
                <!-- Valores -->
                <div class="mt-12">
                    <h3 class="text-2xl font-semibold text-indigo-600 mb-4">Nuestros Valores</h3>
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <h4 class="text-xl font-semibold text-indigo-600 mb-4">Innovación</h4>
                            <p class="text-lg">Buscamos constantemente nuevas ideas y enfoques para mejorar nuestros servicios y productos.</p>
                        </div>
                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <h4 class="text-xl font-semibold text-indigo-600 mb-4">Compromiso</h4>
                            <p class="text-lg">Estamos comprometidos con nuestros clientes, ofreciendo soluciones que superen sus expectativas.</p>
                        </div>
                        <div class="bg-white p-8 rounded-lg shadow-lg">
                            <h4 class="text-xl font-semibold text-indigo-600 mb-4">Responsabilidad</h4>
                            <p class="text-lg">Actuamos con responsabilidad social y ambiental en todas nuestras operaciones.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section> 
</template>

<script setup lang="ts">
    const timeline = [
        { year: 2010, title: 'Fundación de Vilumin', description: 'Vilumin comenzó como una pequeña empresa enfocada en ofrecer soluciones tecnológicas innovadoras.' },
        { year: 2015, title: 'Expansión internacional', description: 'Nuestra empresa comenzó a ofrecer sus servicios en nuevos mercados internacionales.' },
        { year: 2020, title: 'Innovación en nuevos productos', description: 'Lanzamos un nuevo servicio que revolucionó la industria.' },
    ];
</script>
