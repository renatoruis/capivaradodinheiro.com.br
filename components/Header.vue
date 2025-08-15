<template>
  <header class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 h-24">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-24">
        <!-- Espaçador esquerdo para centralização no desktop / Menu mobile -->
        <div class="flex w-48 justify-start">
          <!-- Menu mobile button -->
          <div class="md:hidden">
            <button 
              @click="toggleMobileMenu" 
              class="text-dark-600 hover:text-dark-900 focus:outline-none focus:text-dark-900 p-2"
              :aria-expanded="isMobileMenuOpen"
              aria-label="Abrir menu de navegação"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  v-if="!isMobileMenuOpen"
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
                <path 
                  v-else
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Logo -->
        <div class="flex items-center justify-center flex-grow">
          <NuxtLink to="/" class="flex items-center">
            <img 
              src="/assets/logo-bg-white.png" 
              alt="CapivaraDoDinheiro Logo"
              class="h-16 sm:h-20 w-auto object-contain object-center"
              onerror="this.onerror=null; this.src=null; this.parentNode.innerHTML = '<div class=\'w-10 h-10 bg-gradient-orange rounded-lg flex items-center justify-center\'><span class=\'text-white font-bold text-lg\'>C$</span></div>';"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-10 w-48">
          <NuxtLink 
            to="/" 
            class="text-dark-600 hover:text-primary-500 font-medium transition-colors duration-200"
            :class="{ 'text-primary-500': $route.path === '/' }"
          >
            Início
          </NuxtLink>
          <NuxtLink 
            to="/blog" 
            class="text-dark-600 hover:text-primary-500 font-medium transition-colors duration-200"
            :class="{ 'text-primary-500': $route.path.startsWith('/blog') }"
          >
            Blog
          </NuxtLink>
        </div>

        <!-- Mobile menu button (duplicado na versão original) -->
        <div class="md:hidden invisible">
          <!-- Botão invisível para manter a estrutura do layout -->
        </div>
      </div>

        <!-- Mobile Navigation -->
      <div 
        v-show="isMobileMenuOpen" 
        class="md:hidden border-t border-gray-100"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink 
            to="/" 
            class="block px-3 py-2 text-base font-medium text-dark-600 hover:text-primary-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
            :class="{ 'text-primary-500 bg-primary-50': $route.path === '/' }"
            @click="closeMobileMenu"
          >
            Início
          </NuxtLink>
          <NuxtLink 
            to="/blog" 
            class="block px-3 py-2 text-base font-medium text-dark-600 hover:text-primary-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
            :class="{ 'text-primary-500 bg-primary-50': $route.path.startsWith('/blog') }"
            @click="closeMobileMenu"
          >
            Blog
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Fechar menu mobile quando a rota mudar
watch(() => useRoute().path, () => {
  closeMobileMenu()
})

// Fechar menu mobile ao clicar fora
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const nav = document.querySelector('nav')
    if (nav && !nav.contains(event.target as Node)) {
      closeMobileMenu()
    }
  }

  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>
