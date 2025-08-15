# Como usar anúncios nos posts markdown

Para inserir anúncios no meio do conteúdo de um post, adicione o marcador:

```
<!-- AD -->
```

Exemplos de uso:

1. Entre parágrafos:
   ```markdown
   Parágrafo anterior.
   
   <!-- AD -->
   
   Próximo parágrafo.
   ```

2. Entre seções:
   ```markdown
   ## Seção anterior
   
   Conteúdo...
   
   <!-- AD -->
   
   ## Próxima seção
   ```

Os anúncios são inseridos automaticamente onde o marcador `<!-- AD -->` for encontrado no conteúdo markdown. O sistema seleciona aleatoriamente um slot de anúncio a cada exibição.

## Slots de Anúncios Configurados

Os slots de anúncios disponíveis estão definidos no componente `ContentRenderer.vue` e atualmente são:

```javascript
const adSlots = [
  '1234567890',
  '2345678901',
  '3456789012',
  '4567890123',
  '5678901234'
]
```

Para alterar ou adicionar novos slots de anúncios, edite este array no componente.

## Configuração

A funcionalidade de anúncios em meio ao conteúdo é implementada pelo componente `ContentRenderer.vue` personalizado, que substitui o componente padrão do @nuxt/content.

Este componente processa o conteúdo markdown, divide-o nos marcadores de anúncio e insere os componentes `AdComponent` onde os marcadores são encontrados.

## Dicas

- Evite colocar anúncios muito próximos uns dos outros
- Posicione anúncios em pontos lógicos do conteúdo (entre seções, após conclusões de tópicos)
- Um post de tamanho médio (5-10 minutos de leitura) normalmente comporta 2-3 anúncios bem distribuídos
