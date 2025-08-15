<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="py-10 lg:py-32 bg-gradient-to-br from-primary-50 to-orange-100">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-900 mb-6 leading-tight">
            Acompanhe seus investimentos em um só lugar.
          </h1>
        </div>
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-2xl md:text-3xl lg:text-4xl text-dark-600 mb-8">
            Grátis, para sempre!
          </p>
        </div>
        <div class="max-w-3xl mx-auto text-center bg-primary-500 rounded-lg p-4 mt-8">
          <a href="https://app.capivaradodinheiro.com.br" class="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
            Comece agora
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Feature 1 -->
          <div class="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center">
              🌎
            </div>
            <h3 class="text-xl font-bold text-dark-900 mb-2">Acompanhe seus investimentos</h3>
            <p class="text-dark-600">Ativos do Brasil e Estados Unidos</p>
          </div>
          
          <!-- Feature 2 -->
          <div class="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center">
              💰
            </div>
            <h3 class="text-xl font-bold text-dark-900 mb-2">Gratuito para sempre</h3>
            <p class="text-dark-600">Não cobramos nada para você usar, sem pegadinhas e letras miúdas</p>
          </div>
          
          <!-- Feature 3 -->
          <div class="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center">
              💡
            </div>
            <h3 class="text-xl font-bold text-dark-900 mb-2">Acompanhe a evolução</h3>
            <p class="text-dark-600">De forma simples e fácil de entender</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        
        <div class="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/assets/screenshot-1.png" 
            alt="Dashboard da CapivaraDoDinheiro" 
            class="w-full h-auto"
            onerror="this.onerror=null; this.src='data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22 fill=%22%23f3f4f6%22%3E%3Crect width=%221200%22 height=%22800%22/%3E%3Ctext x=%22600%22 y=%22400%22 fill=%22%239ca3af%22 font-family=%22system-ui, sans-serif%22 font-size=%2270%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EDashboard Preview%3C/text%3E%3C/svg%3E';"
          />
        </div>
      </div>
    </section>



    <!-- CTA Section -->
    <section class="py-16 bg-gradient-orange text-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-6"></h2>
          <button 
            @click="showDonationModal = true"
            class="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
          >
          ☕ Pague um café para o criador
          </button>
        </div>
      </div>
    </section>
    <!-- Donation Modal -->
    <DonationModal v-model="showDonationModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Estado do modal de doação
const showDonationModal = ref(false)

// SEO básico
useSeoMeta({
  title: 'CapivaraDoDinheiro - Acompanhe seus investimentos',
  description: 'Acompanhe seus investimentos em um só lugar, gratuitamente e de forma simples.'
})
</script>