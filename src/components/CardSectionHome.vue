<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  to: {
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
      ['blue', 'purple', 'green', 'red', 'yellow', 'indigo', 'pink'].includes(value),
  },
  buttonText: {
    type: String,
    default: 'Explorar recursos',
  },
})
</script>

<template>
  <RouterLink
    :to="to"
    class="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px] border border-gray-700"
    :class="[`hover:border-${accentColor}-500`]"
  >
    <div class="p-8 flex flex-col h-full">
      <div
        class="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 transition-colors duration-300"
        :class="[`group-hover:bg-${accentColor}-600`]"
      >
        <component :is="icon" class="w-8 h-8" />
      </div>
      <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
      <p class="text-gray-400 mb-6 flex-grow">
        {{ description }}
      </p>
      <div
        class="flex items-center transition-colors"
        :class="[`text-${accentColor}-400 group-hover:text-${accentColor}-300`]"
      >
        <span>{{ buttonText }}</span>
        <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </RouterLink>
</template>
