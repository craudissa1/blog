# Fase 4: Funcionalidades Adicionais e Refinamentos

Com o núcleo do blog funcional, esta fase adiciona páginas de listagem mais completas, melhora o SEO e refina a experiência do usuário.

## 1. Página de Listagem Completa de Artigos (`app/blog/page.tsx`)

*   **Criação da Página:**
    *   Criar o arquivo `app/blog/page.tsx`.
*   **Busca de Dados:**
    *   Utilizar a função `getSortedPostsData()` de `lib/posts.ts` para buscar todos os posts.
*   **Renderização:**
    *   Exibir um título para a página (ex: "Todos os Artigos" ou "Blog StayFocus").
    *   Mapear sobre os dados dos posts e renderizar um `PostCard` (componente criado na Fase 2) para cada post.
    *   Considerar a implementação de paginação se o número de posts for grande. Inicialmente, uma lista simples pode ser suficiente.
*   **Layout:**
    *   A página deve usar o layout global (`Header` e `Footer`).
    *   Organizar os `PostCard` em uma grade responsiva, similar à da página inicial.

## 2. Páginas de Categoria (Opcional, mas Recomendado)

*   **Estrutura de Rota:**
    *   Criar a estrutura `app/category/[categoryName]/page.tsx`.
*   **Lógica de Dados em `lib/posts.ts`:**
    *   Criar uma nova função `getPostsByCategory(categoryName: string)` que filtra os posts com base no campo `category` do frontmatter.
    *   Criar uma função `getAllCategories()` que lê todos os posts, extrai todas as categorias únicas e retorna uma lista para `generateStaticParams`.
*   **`generateStaticParams` em `app/category/[categoryName]/page.tsx`:**
    *   Usar `getAllCategories()` para pré-renderizar as páginas de cada categoria.
*   **`generateMetadata` em `app/category/[categoryName]/page.tsx`:**
    *   Gerar títulos como "Artigos sobre [Nome da Categoria]".
*   **Componente da Página de Categoria:**
    *   Buscar posts usando `getPostsByCategory(params.categoryName)`.
    *   Exibir um título indicando a categoria.
    *   Listar os `PostCard` dos posts pertencentes àquela categoria.
*   **Links para Categorias:**
    *   Nos `PostCard` e na página de artigo individual, tornar os nomes das categorias clicáveis, levando para `/category/[categoryName]`.

## 3. Otimização para SEO Avançado

*   **`sitemap.xml`:**
    *   Criar uma rota ou script para gerar dinamicamente um arquivo `sitemap.xml`. Pode ser feito no Next.js criando um arquivo `app/sitemap.ts` (ou `app/sitemap.xml/route.ts` no App Router).
    *   O sitemap deve incluir URLs da página inicial, página do blog, todas as páginas de posts individuais e páginas de categoria (se implementadas).
*   **`robots.txt`:**
    *   Criar um arquivo `public/robots.txt` para instruir os crawlers dos mecanismos de busca.
        ```text
        User-agent: *
        Allow: /
        Sitemap: [URL_COMPLETA_DO_SEU_SITE]/sitemap.xml
        ```
*   **Metadados Open Graph:**
    *   Garantir que `app/layout.tsx` e as funções `generateMetadata` em páginas dinâmicas (posts, categorias) incluam metadados Open Graph (og:title, og:description, og:image, og:type, og:url) para melhor compartilhamento em redes sociais.
        ```typescript
        // Exemplo em generateMetadata para um post
        export async function generateMetadata({ params }: { params: { slug: string } }) {
          const postData = await getPostData(params.slug);
          const siteUrl = 'https://www.seusite.com'; // Defina sua URL base
          return {
            title: postData.title,
            description: postData.excerpt,
            openGraph: {
              title: postData.title,
              description: postData.excerpt,
              url: `${siteUrl}/blog/${params.slug}`,
              images: postData.image ? [{ url: `${siteUrl}${postData.image}` }] : [],
              type: 'article',
              publishedTime: postData.date,
              authors: [postData.author],
            },
          };
        }
        ```
*   **Dados Estruturados (JSON-LD):**
    *   Considerar adicionar dados estruturados (Schema.org) para posts de blog (`Article` ou `BlogPosting`) para enriquecer os resultados da pesquisa.

## 4. Assets e Otimização de Imagens

*   **Imagens dos Posts:**
    *   Certificar-se de que todas as imagens referenciadas no frontmatter dos posts (`image:` campo) existam na pasta `public/images/blog/`.
    *   Utilizar o componente `<Image />` do `next/image` em todos os lugares onde as imagens são renderizadas (`FeaturedPostCard.tsx`, `PostCard.tsx`, página de artigo).
    *   Fornecer `width` e `height` apropriados para o componente `Image` para evitar Content Layout Shift (CLS).
*   **Favicon:**
    *   Adicionar um `favicon.ico` e outros ícones de site (apple-touch-icon.png, etc.) na pasta `public/` e referenciá-los no `<head>` do `app/layout.tsx`.

## Entregáveis da Fase 4:

*   Página de listagem completa de artigos (`/blog`) implementada.
*   (Opcional) Páginas de categoria (`/category/[categoryName]`) implementadas.
*   `sitemap.xml` e `robots.txt` configurados.
*   Metadados Open Graph abrangentes implementados.
*   Todas as imagens sendo servidas via `next/image` com otimizações.
*   Favicon e ícones do site adicionados.
