<script setup>
import { Code, CheckSquare } from 'lucide-vue-next'
import CardSectionHome from '@/components/CardSectionHome.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col">
    <header class="py-8 px-6 md:px-12">
      <h1
        class="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Documentación de Gestión de Proyectos
      </h1>
      <p class="text-gray-400 text-center mt-3 max-w-2xl mx-auto">
        Recursos y documentación sobre CMMI, ingeniería de software y control de calidad para
        profesionales
      </p>
    </header>

    <main class="flex-grow flex items-center justify-center px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        <!-- Cards de cada apartado -->
        <CardSectionHome
          title="Ingeniería de Software"
          description="Documentación, metodologías y mejores prácticas para el desarrollo de software bajo estándares CMMI."
          to="/ingenieria-software"
          :icon="Code"
          accentColor="blue"
        />

        <CardSectionHome
          title="Control de Calidad"
          description="Procesos, auditorías y herramientas para asegurar la calidad en proyectos según los niveles de madurez CMMI."
          to="/gestion-calidad"
          :icon="CheckSquare"
          accentColor="purple"
        />
      </div>
    </main>

    <footer class="py-6 text-center text-gray-500 text-sm">
      <p>Standarix Documentación CMMI Nivel 2</p>
    </footer>
  </div>
</template>
