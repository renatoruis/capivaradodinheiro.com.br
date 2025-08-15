// scripts/generateRoutes.ts
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function generateRoutes() {
  // Rotas base
  const baseRoutes = ['/', '/blog'];
  
  try {
    // Ler os arquivos do diretório de conteúdo
    const contentDir = join(process.cwd(), 'content/blog');
    const files = await readdir(contentDir);
    
    // Filtrar apenas arquivos markdown
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    // Criar rotas para cada arquivo
    const blogRoutes = mdFiles.map(file => {
      // Remove a extensão .md do arquivo
      const slug = file.replace(/\.md$/, '');
      return `/blog/${slug}`;
    });
    
    console.log(`Encontrados ${blogRoutes.length} posts para gerar`);
    
    // Combinar todas as rotas
    return [...baseRoutes, ...blogRoutes];
  } catch (error) {
    console.error('Erro ao gerar rotas:', error);
    // Em caso de erro, retornar pelo menos as rotas base
    return baseRoutes;
  }
}
