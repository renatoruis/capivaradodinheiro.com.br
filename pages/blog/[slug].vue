<template>
  <div v-if="post" class="min-h-screen bg-white">
    <!-- Post Header -->
    <header class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <!-- Breadcrumb -->
          <nav class="mb-6 text-sm">
            <NuxtLink to="/" class="text-gray-500 hover:text-orange-500">
              Início
            </NuxtLink>
            <span class="mx-2">/</span>
            <NuxtLink to="/blog" class="text-gray-500 hover:text-orange-500">
              Blog
            </NuxtLink>
            <span class="mx-2">/</span>
            <span class="text-gray-900">{{ post.title }}</span>
          </nav>

          <!-- Post Title -->
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ post.title }}
          </h1>

          <!-- Post Meta -->
          <p class="text-gray-600">
            {{ new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }) }}
            <span v-if="post.readTime" class="mx-2">•</span>
            <span v-if="post.readTime">{{ post.readTime }} min de leitura</span>
          </p>
        </div>
      </div>
    </header>

    <!-- Featured Image -->
    <div class="py-8 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="rounded-lg overflow-hidden shadow-lg">
            <template v-if="post.image && imageExists('/imagens/' + post.image)">
              <NuxtImg
                :src="'/imagens/' + post.image"
                :alt="post.alt || post.title"
                width="1200"
                height="675"
                class="w-full h-auto"
                loading="eager"
              />
            </template>
            <PlaceholderImage 
              v-else
              :alt="post.alt || post.title"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Post Content -->
    <article class="py-8">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto prose">
          <ContentRenderer :value="post" />
        </div>
      </div>
    </article>

    <!-- Post Footer -->
    <div class="py-8 border-t border-gray-200">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="flex justify-between items-center">
            <NuxtLink to="/blog" class="text-orange-500 hover:text-orange-600">
              ← Voltar para o blog
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 404 Error Page -->
  <div v-else class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center max-w-md mx-auto p-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Post Não Encontrado</h1>
      <p class="text-xl text-gray-600 mb-8">
        O artigo que você está procurando não existe ou foi removido.
      </p>
      <div class="space-y-4">
        <NuxtLink to="/blog" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg inline-block">
          Ver Todos os Posts
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Route params
const route = useRoute()
const slug = route.params.slug

// Função para verificar se a imagem existe
const imageExists = (src) => {
  try {
    return true; // Em desenvolvimento, vamos assumir que existe
  } catch (e) {
    return false;
  }
}

// Fetch post data
const { data: post } = await useAsyncData(`post-${slug}`, () =>
  queryContent('blog', slug).findOne()
)

// SEO
useHead({
  title: post.value?.title ? `${post.value.title} - CapivaraDoDinheiro` : 'Post não encontrado',
  meta: [
    { name: 'description', content: post.value?.description || 'Post não encontrado' }
  ]
})
</script>

<style>
.prose {
  max-width: 65ch;
  color: rgb(55, 65, 81);
}
.prose h1, .prose h2, .prose h3, .prose h4 {
  color: rgb(17, 24, 39);
  font-weight: 700;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
.prose a {
  color: rgb(249, 115, 22);
  text-decoration: none;
}
.prose a:hover {
  text-decoration: underline;
}
</style>