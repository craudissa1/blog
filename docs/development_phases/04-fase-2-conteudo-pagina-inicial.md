# Fase 2: Conteúdo do Blog e Página Inicial

Nesta fase, o foco é popular o blog com conteúdo inicial e construir a página inicial, que servirá como vitrine para os artigos.

## 1. Preparação do Conteúdo Markdown

*   **Localização:** Mover os arquivos de rascunho de posts existentes (ex: `stayfocus-main-blog-post.md`, `stayfocus-core-features-post.md`, `stayfocus-concursos-post.md`, etc.) para a pasta `posts/` na raiz do projeto.
*   **Nomenclatura:** Renomear os arquivos Markdown para usar `kebab-case` (ex: `apresentando-stayfocus.md`, `funcionalidades-centrais.md`). Estes nomes serão usados para gerar os slugs das URLs.
*   **Frontmatter:** Adicionar metadados YAML (frontmatter) no topo de cada arquivo `.md`. Campos essenciais:
    *   `title`: Título do post (string).
    *   `date`: Data de publicação (string, formato "YYYY-MM-DD").
    *   `author`: Nome do autor (string).
    *   `excerpt`: Um breve resumo do post (string, usado em listagens e metatags).
    *   `image`: Caminho para a imagem de destaque do post (string, ex: `/images/blog/nome-da-imagem.jpg`).
    *   `category`: Categoria principal do post (string).
    *   `tags`: Lista de tags relevantes (array de strings, ex: `["produtividade", "nextjs"]`).
    *   `featured`: Booleano, `true` se o post deve ser destacado na página inicial, `false` caso contrário.
    *   `readingTime`: Tempo de leitura estimado (string, ex: "8 min de leitura").

    **Exemplo de Frontmatter:**
    ```yaml
    ---
    title: "Como o StayFocus Revoluciona sua Preparação para Concursos"
    date: "2025-05-08"
    author: "Laura Silva"
    excerpt: "Descubra como o módulo de concursos do StayFocus pode transformar sua experiência de preparação..."
    image: "/images/blog/preparacao-concursos.jpg"
    category: "Concursos"
    tags: ["concursos", "estudos", "stayfocus"]
    featured: true
    readingTime: "8 min de leitura"
    ---
    O conteúdo do post em Markdown começa aqui...
    ```

## 2. Lógica de Leitura de Posts (`lib/posts.ts`)

*   **Instalação:** Adicionar a biblioteca `gray-matter` ao projeto (`npm install gray-matter` ou `yarn add gray-matter`).
*   **Implementação das Funções:**
    *   `getSortedPostsData()`:
        *   Lê todos os nomes de arquivo da pasta `posts/`.
        *   Para cada arquivo:
            *   Lê o conteúdo do arquivo.
            *   Usa `matter()` do `gray-matter` para parsear o frontmatter e o conteúdo.
            *   Retorna um objeto com o `slug` (nome do arquivo sem `.md`) e os dados do frontmatter.
        *   Ordena os posts pela `date` (mais recentes primeiro).
    *   `getAllPostSlugs()` (usado por `generateStaticParams`):
        *   Lê todos os nomes de arquivo da pasta `posts/`.
        *   Retorna um array de objetos, cada um contendo `{ params: { slug: 'nome-do-slug' } }`.
    *   `getPostData(slug)`:
        *   Constrói o caminho completo para o arquivo Markdown com base no `slug`.
        *   Lê o conteúdo do arquivo.
        *   Usa `matter()` para parsear o frontmatter.
        *   Converte o conteúdo Markdown para HTML (usando `remark` e `remark-html`, a ser detalhado na Fase 3) ou prepara para MDX.
        *   Retorna um objeto com o `slug`, dados do frontmatter e o conteúdo HTML/processado (`contentHtml`).

## 3. Componentes da Página Inicial

Criar os seguintes componentes em `components/` baseados no `blog-prototype.html`:

*   **`Hero.tsx`:**
    *   Replica a seção "Hero Section".
    *   Contém o título principal, parágrafo descritivo e os dois botões ("Experimente Grátis", "Saiba Mais").
    *   Imagem de placeholder (ou real, se disponível).
*   **`FeaturedPostCard.tsx`:**
    *   Recebe os dados de um post (do frontmatter) como props.
    *   Renderiza o layout da seção "Featured Post" do protótipo.
    *   Exibe tags de categoria, título, excerto, informações do autor (imagem, nome, data, tempo de leitura) e o link "Ler artigo completo →".
    *   Imagem de destaque do post.
*   **`PostCard.tsx`:**
    *   Recebe os dados de um post como props.
    *   Renderiza o layout dos cards da seção "Recent Posts Grid".
    *   Exibe a imagem do post, tag de categoria, título, excerto, informações do autor (imagem, nome) e tempo de leitura.
    *   Replica o efeito de hover (`.card:hover`) definido no protótipo.
*   **`NewsletterSignUp.tsx`:**
    *   Replica a seção "Newsletter".
    *   Inclui o título, parágrafo, campo de input para email e botão "Assinar".
    *   A funcionalidade de submissão do formulário pode ser implementada posteriormente ou integrada com um serviço de email marketing.
*   **`FeatureHighlights.tsx`:**
    *   Replica a seção "Destaques de Funcionalidades".
    *   Inclui o título, parágrafo e a grade com três cards de funcionalidades (Dashboard Inteligente, Módulo de Concursos, Hiperfocos), cada um com ícone, título, descrição e link "Saiba mais →".

## 4. Página Inicial (`app/page.tsx`)

*   **Busca de Dados:**
    *   No componente da página (Server Component por padrão no App Router), importar e usar a função `getSortedPostsData()` de `lib/posts.ts` para buscar os dados de todos os posts.
*   **Renderização dos Componentes:**
    *   Renderizar o componente `Hero`.
    *   Filtrar os posts para encontrar aquele com `featured: true` e passá-lo para o componente `FeaturedPostCard`.
    *   Pegar uma fatia dos posts restantes (ex: os 3 mais recentes não destacados) e mapeá-los para renderizar componentes `PostCard` em uma grade.
    *   Adicionar o botão "Ver Todos os Artigos", que deve ser um link (`<Link href="/blog">`) para a página de listagem de todos os artigos.
    *   Renderizar os componentes `FeatureHighlights` e `NewsletterSignUp`.

## Entregáveis da Fase 2:

*   Arquivos Markdown dos posts iniciais movidos para `posts/` e formatados com frontmatter.
*   Funções em `lib/posts.ts` implementadas para ler e processar os dados dos posts.
*   Componentes `Hero.tsx`, `FeaturedPostCard.tsx`, `PostCard.tsx`, `NewsletterSignUp.tsx`, e `FeatureHighlights.tsx` criados e estilizados.
*   Página inicial (`app/page.tsx`) montada, exibindo a seção hero, post em destaque, posts recentes, destaques de funcionalidades e formulário de newsletter.
*   Imagens de placeholder (ou reais) adicionadas a `public/images/blog/` e referenciadas no frontmatter dos posts.
