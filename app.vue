<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  script: [
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-61BT9HZHZL');
      `,
      type: 'text/javascript'
    }
  ]
})

// Track page changes
onMounted(() => {
  if (process.client) {
    const router = useRouter()
    router.afterEach((to) => {
      if (window.gtag) {
        window.gtag('config', 'G-61BT9HZHZL', {
          page_path: to.fullPath
        })
      }
    })
  }
})
</script>

<style>
/* Estilos globais */
</style>