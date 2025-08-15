// scripts/getAllPosts.js
const fs = require('fs');
const path = require('path');

/**
 * Obtém todos os posts do blog para pré-renderização
 * @returns {string[]} Array de rotas para os posts
 */
function getAllBlogPosts() {
  const contentDir = path.join(process.cwd(), 'content/blog');
  
  try {
    // Ler todos os arquivos da pasta blog
    const files = fs.readdirSync(contentDir);
    
    // Filtrar apenas os arquivos markdown
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    // Converter para rotas
    const routes = mdFiles.map(file => {
      // Remove a extensão .md do arquivo
      const slug = file.replace(/\.md$/, '');
      return `/blog/${slug}`;
    });
    
    console.log(`Encontrados ${routes.length} posts para pré-renderização`);
    return routes;
  } catch (error) {
    console.error('Erro ao ler posts do blog:', error);
    return [];
  }
}

module.exports = { getAllBlogPosts };
