# Flow Podcast Clone

Clone de estudo do frontend do site do [Flow Podcast](https://flowpodcast.com.br/), feito em 2021 com Vue 2 enquanto eu cursava Sistemas para Internet.

> Projeto pessoal e educacional, sem nenhuma afiliação com o Flow Podcast. Marcas e imagens pertencem aos seus respectivos donos. Não há backend: episódios, concursos e produtos da loja são dados estáticos.

**Site no ar:** https://jordan-cod.github.io/flow-podcast-frontend-vue/

![Página inicial do clone](docs/preview.jpg)

## Páginas

- Home
- Loja
- Episódios
- Concursos
- Membros
- Flowcoins

## Stack

- Vue 2.7
- Vue Router 3 (modo hash)
- Vue CLI 5 (webpack 5)
- ESLint (standard)
- GitHub Pages via GitHub Actions

## Como rodar

Requer Node 18 ou superior (a versão usada no deploy está em `.nvmrc`).

```bash
npm ci
npm run serve
```

Build de produção, gerado em `dist/` e servido em `/flow-podcast-frontend-vue/`:

```bash
npm run build
```

Para conferir o build localmente no mesmo subcaminho do GitHub Pages:

```bash
mkdir -p /tmp/pages && cp -R dist /tmp/pages/flow-podcast-frontend-vue
npx serve /tmp/pages
```

E abrir http://localhost:3000/flow-podcast-frontend-vue/.

## Deploy

Todo push na `main` dispara o workflow `.github/workflows/pages.yml`, que faz lint, build e publica o `dist/` no GitHub Pages.
