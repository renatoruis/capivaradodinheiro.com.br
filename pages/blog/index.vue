<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <section class="py-16 bg-white border-b border-gray-100">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Blog CapivaraDoDinheiro
          </h1>
          <p class="text-xl text-gray-600">
            Artigos sobre educação financeira, investimentos e planejamento.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div v-if="pending" class="text-center py-10">
          <p class="text-lg text-gray-600">Carregando posts...</p>
        </div>

        <div v-else-if="error" class="text-center py-10">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Erro ao Carregar Posts</h2>
          <p class="text-lg text-gray-600 mb-6">Não foi possível carregar os artigos. Verifique sua conexão e tente novamente.</p>
          <button @click="refresh()" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
            Tentar Novamente
          </button>
        </div>

        <div v-else-if="posts && posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink 
            v-for="post in posts" 
            :key="post._path" 
            :to="post._path" 
            class="block bg-white rounded-lg shadow overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:border-primary-200 border border-transparent"
          >
            <!-- Imagem do Post -->
            <div class="aspect-video">
              <template v-if="post.image && imageExists('/imagens/' + post.image)">
                <NuxtImg
                  :src="'/imagens/' + post.image"
                  :alt="post.alt || post.title"
                  width="800"
                  height="450"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </template>
              <PlaceholderImage 
                v-else
                :alt="post.alt || post.title"
              />
            </div>
            <div class="p-5">
              <h2 class="text-xl font-bold mb-2 text-dark-900">{{ post.title }}</h2>
              <p class="text-gray-600 mb-4">{{ post.description }}</p>
              <span class="inline-flex items-center text-primary-500 font-medium">
                Ler mais
                <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </NuxtLink>
        </div>

        <div v-else class="text-center py-10">
          <p class="text-lg text-gray-600">Nenhum post encontrado.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Dados para o SEO
useSeoMeta({
  title: 'Blog - CapivaraDoDinheiro',
  description: 'Artigos práticos sobre educação financeira, investimentos e planejamento financeiro.'
})

// Função para verificar se a imagem existe
const imageExists = (src) => {
  try {
    return true; // Em desenvolvimento, vamos assumir que existe
  } catch (e) {
    return false;
  }
}

// Buscar posts do blog (limitando aos 9 mais recentes)
const { data: posts, pending, error, refresh } = await useAsyncData('blog-list', () => 
  queryContent('blog')
    .sort({ date: -1 })
    .limit(9)
    .find()
)
</script>