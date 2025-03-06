<script setup>
import { ExternalLink } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
  accentColor: {
    type: String,
    default: 'blue',
    validator: (value) =>
      ['blue', 'purple', 'green', 'red', 'yellow', 'indigo', 'pink', 'orange', 'teal'].includes(
        value,
      ),
  },
})
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-700 flex flex-col h-full"
    :class="{
      'hover:border-blue-500': accentColor === 'blue',
      'hover:border-purple-500': accentColor === 'purple',
      'hover:border-green-500': accentColor === 'green',
      'hover:border-red-500': accentColor === 'red',
      'hover:border-yellow-500': accentColor === 'yellow',
      'hover:border-indigo-500': accentColor === 'indigo',
      'hover:border-pink-500': accentColor === 'pink',
      'hover:border-orange-500': accentColor === 'orange',
      'hover:border-teal-500': accentColor === 'teal',
    }"
  >
    <div class="p-6 flex flex-col h-full">
      <div
        class="bg-gray-700 rounded-full w-14 h-14 flex items-center justify-center mb-4 transition-colors duration-300"
        :class="{
          'group-hover:bg-blue-600': accentColor === 'blue',
          'group-hover:bg-purple-600': accentColor === 'purple',
          'group-hover:bg-green-600': accentColor === 'green',
          'group-hover:bg-red-600': accentColor === 'red',
          'group-hover:bg-yellow-600': accentColor === 'yellow',
          'group-hover:bg-indigo-600': accentColor === 'indigo',
          'group-hover:bg-pink-600': accentColor === 'pink',
          'group-hover:bg-orange-600': accentColor === 'orange',
          'group-hover:bg-teal-600': accentColor === 'teal',
        }"
      >
        <component :is="icon" class="w-6 h-6" />
      </div>
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
      <p class="text-gray-400 text-sm mb-4 flex-grow">
        {{ description }}
      </p>
      <div
        class="flex items-center text-sm transition-colors"
        :class="{
          'text-blue-400 group-hover:text-blue-300': accentColor === 'blue',
          'text-purple-400 group-hover:text-purple-300': accentColor === 'purple',
          'text-green-400 group-hover:text-green-300': accentColor === 'green',
          'text-red-400 group-hover:text-red-300': accentColor === 'red',
          'text-yellow-400 group-hover:text-yellow-300': accentColor === 'yellow',
          'text-indigo-400 group-hover:text-indigo-300': accentColor === 'indigo',
          'text-pink-400 group-hover:text-pink-300': accentColor === 'pink',
          'text-orange-400 group-hover:text-orange-300': accentColor === 'orange',
          'text-teal-400 group-hover:text-teal-300': accentColor === 'teal',
        }"
      >
        <span>Ver documentos</span>
        <ExternalLink class="ml-2 w-4 h-4" />
      </div>
    </div>
  </a>
</template>
