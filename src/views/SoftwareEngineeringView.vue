<script setup>
import { ChevronLeft, ClipboardList, Search, Layers, Code, Server, Gavel } from 'lucide-vue-next'
import CardDriveDocument from '../components/CardDriveDocument.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col">
    <header class="py-8 px-6 md:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center mb-6">
          <RouterLink
            to="/"
            class="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft class="w-5 h-5 mr-1" />
            <span>Volver al inicio</span>
          </RouterLink>
        </div>

        <h1
          class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Ingeniería de Software
        </h1>
        <p class="text-gray-400 mt-3 max-w-3xl">
          Documentación y recursos sobre las diferentes etapas del ciclo de vida del desarrollo de
          software según los estándares CMMI Nivel 2.
        </p>
      </div>
    </header>

    <main class="flex-grow px-6 py-8 md:py-12">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Requerimientos -->
          <CardDriveDocument
            title="Requerimientos"
            description="Documentación sobre captura, análisis y gestión de requerimientos de software."
            url="https://drive.google.com/drive/folders/1V3vhS7b1Y8_2HvLs3BHBTOJuFiFV3szt"
            :icon="ClipboardList"
            accentColor="blue"
          />

          <!-- Análisis -->
          <CardDriveDocument
            title="Análisis"
            description="Métodos y herramientas para el análisis de sistemas y modelado de procesos."
            url="https://drive.google.com/drive/folders/1ugh9dRN1_F6-wjp3lrJSDNBEe3q8GSHm"
            :icon="Search"
            accentColor="indigo"
          />

          <!-- Diseño -->
          <CardDriveDocument
            title="Diseño"
            description="Patrones de diseño, arquitectura de software y modelado UML."
            url="https://drive.google.com/drive/folders/13Nfy7Uau75OD6EvAiKzrc5xLnEImBVNr"
            :icon="Layers"
            accentColor="purple"
          />

          <!-- Desarrollo -->
          <CardDriveDocument
            title="Desarrollo"
            description="Buenas prácticas de codificación, estándares y guías de implementación."
            url="https://drive.google.com/drive/folders/19fGbxDH7Q6fpns_CJIxpXLzmPYvpKN85"
            :icon="Code"
            accentColor="teal"
          />

          <!-- Pruebas e Implementación -->
          <CardDriveDocument
            title="Pruebas e Implementación"
            description="Procesos de despliegue, integración continua y entrega de software."
            url="https://drive.google.com/drive/folders/1WV7Z1fuUIWPAXHhzVJfAhYNJ0UVtC7Wv"
            :icon="Server"
            accentColor="green"
          />

          <!-- Mantenimiento -->
          <CardDriveDocument
            title="Mantenimiento"
            description="Gestión de cambios, refactorización y evolución del software."
            url="https://drive.google.com/drive/folders/12RTAej75JfRrho6rUXpdbJ9N9yj74X-8"
            :icon="Gavel"
            accentColor="orange"
          />
        </div>
      </div>
    </main>

    <footer class="py-6 text-center text-gray-500 text-sm">
      <p>Standarix Documentación CMMI Nivel 2</p>
    </footer>
  </div>
</template>
