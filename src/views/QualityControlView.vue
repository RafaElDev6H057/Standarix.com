<script setup>
import {
  ChevronLeft,
  ClipboardCheck,
  Shield,
  FileSearch,
  ScanEye,
  FileBadge,
  ShieldCheck,
} from 'lucide-vue-next'
import CardDriveDocument from '@/components/CardDriveDocument.vue'
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
          class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
        >
          Control de Calidad
        </h1>
        <p class="text-gray-400 mt-3 max-w-3xl">
          Documentación y recursos sobre procesos de gestión de calidad, auditorías y cumplimiento
          de estándares según CMMI Nivel 2.
        </p>
      </div>
    </header>

    <main class="flex-grow px-6 py-8 md:py-12">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Planeación -->
          <CardDriveDocument
            title="Planeación"
            description="Lograr resultados consistentes, eficientes y alineados con las expectativas."
            url="https://drive.google.com/drive/folders/1HMJOOuL7ggLAgnhkJgTJgnNpnEJkClEq"
            :icon="ClipboardCheck"
            accentColor="purple"
          />

          <!-- Plan de Contingencia / Prevención de Fallas -->
          <CardDriveDocument
            title="Plan de Contingencia y Prevención de Fallas"
            description="Estrategias para la prevención y mitigación de fallas en los procesos de desarrollo."
            url="https://drive.google.com/drive/folders/1A_CvlcTY_9AtzFyhx67nywpMiQn2J6ve"
            :icon="Shield"
            accentColor="red"
          />

          <!-- Auditorías -->
          <CardDriveDocument
            title="Auditorías"
            description="Procedimientos y listas de verificación para auditorías internas y externas."
            url="https://drive.google.com/drive/folders/1Zcu01AfyjYLnU6pgQvppRKPbO0eZAmUx"
            :icon="FileSearch"
            accentColor="blue"
          />

          <!-- Pruebas -->
          <CardDriveDocument
            title="Monitoreo"
            description="Evaluación constante de los procesos y resultados."
            url="https://example.com/"
            :icon="ScanEye"
            accentColor="green"
          />

          <!-- Estandarización de Procesos y Normativas -->
          <CardDriveDocument
            title="Estandarización de Procesos"
            description="Normativas, estándares y mejores prácticas para la estandarización de procesos."
            url="https://example.com/"
            :icon="FileBadge"
            accentColor="indigo"
          />

          <!-- Seguridad -->
          <CardDriveDocument
            title="Seguridad"
            description="Protocolos y medidas de seguridad para el desarrollo y mantenimiento de software."
            url="https://example.com/"
            :icon="ShieldCheck"
            accentColor="yellow"
          />
        </div>
      </div>
    </main>

    <footer class="py-6 text-center text-gray-500 text-sm">
      <p>Standarix Documentación CMMI Nivel 2</p>
    </footer>
  </div>
</template>
