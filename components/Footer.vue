<template>
  <footer class="bg-dark-900 text-white">
      <div class="border-t border-dark-700 mt-2 mb-8 mx-16 pt-8">
        <div class="flex justify-center items-center">
          <p class="text-dark-400 text-sm">
            © {{ currentYear }} CapivaraDoDinheiro. Todos os direitos reservados.
          </p>
        </div>
      </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
