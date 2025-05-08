# Fase 3: Página de Artigo Individual e Roteamento

Esta fase foca na criação das páginas individuais para cada post do blog e na configuração do roteamento dinâmico no Next.js.

## 1. Página de Artigo (`app/blog/[slug]/page.tsx`)

*   **Roteamento Dinâmico:**
    *   Criar a estrutura de pasta `app/blog/[slug]/`.
    *   O arquivo `page.tsx` dentro desta pasta será o template para renderizar cada post individual.
*   **`generateStaticParams`:**
    *   Importar a função `getAllPostSlugs` de `lib/posts.ts`.
    *   Exportar uma função assíncrona `generateStaticParams` que chama `getAllPostSlugs` para informar ao Next.js todos os slugs de posts existentes no momento do build. Isso permite que o Next.js pré-renderize todas as páginas de posts como HTML estático (SSG).
    ```typescript
    // app/blog/[slug]/page.tsx (exemplo parcial)
    import { getAllPostSlugs, getPostData } from '@/lib/posts'; // Ajuste o caminho conforme sua estrutura

    export async function generateStaticParams() {
      const paths = getAllPostSlugs();
      return paths.map(path => ({ slug: path.params.slug }));
    }
    ```
*   **`generateMetadata`:**
    *   Exportar uma função assíncrona `generateMetadata({ params })` para gerar metadados dinâmicos para cada página de post.
    *   Dentro desta função, usar `getPostData(params.slug)` para buscar os dados do post (especialmente `title` e `excerpt`).
    *   Retornar um objeto com `title` e `description` para otimização de SEO.
    ```typescript
    // app/blog/[slug]/page.tsx (exemplo parcial)
    export async function generateMetadata({ params }: { params: { slug: string } }) {
      const postData = await getPostData(params.slug);
      return {
        title: postData.title,
        description: postData.excerpt,
      };
    }
    ```
*   **Componente da Página do Post:**
    *   Definir um componente React (Server Component por padrão) que recebe `{ params }` como props.
    *   Dentro do componente, chamar `await getPostData(params.slug)` para buscar todos os dados do post, incluindo o `contentHtml` (conteúdo do post convertido para HTML).
    *   Renderizar os elementos do post:
        *   Título (`postData.title`).
        *   Imagem de destaque (`postData.image`) usando `<Image />` do `next/image`.
        *   Metadados do post: autor (`postData.author`), data (`postData.date`), categoria (`postData.category`), tempo de leitura (`postData.readingTime`).
        *   Conteúdo do post: Usar `dangerouslySetInnerHTML={{ __html: postData.contentHtml }}` para renderizar o HTML do conteúdo do Markdown. Aplicar a classe `prose` (do plugin `@tailwindcss/typography`) ao contêiner do conteúdo para estilização automática.
            ```html
            <article className="prose lg:prose-xl max-w-none">
              <h1 className="text-3xl font-bold md:text-4xl mb-4">{postData.title}</h1>
              <div className="mb-4 text-gray-600">
                <span>Por {postData.author}</span> | <span>{postData.date}</span> | <span>{postData.readingTime}</span>
              </div>
              {postData.image && (
                <Image src={postData.image} alt={postData.title} width={800} height={400} className="rounded-lg mb-8" />
              )}
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
            ```

## 2. Conversão de Markdown para HTML

*   **Instalação:**
    *   Instalar as bibliotecas `remark` e `remark-html`: `npm install remark remark-html` ou `yarn add remark remark-html`.
*   **Atualização em `lib/posts.ts` (`getPostData`):**
    *   Modificar a função `getPostData(slug)` para processar o conteúdo Markdown.
    ```typescript
    // lib/posts.ts (exemplo parcial da função getPostData)
    import { remark } from 'remark';
    import html from 'remark-html';

    export async function getPostData(slug: string) {
      const fullPath = path.join(postsDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      return {
        slug,
        contentHtml,
        ...(matterResult.data as { title: string; date: string; /* ...outros campos do frontmatter */ }),
      };
    }
    ```
    *   **Nota:** Se preferir usar MDX (permitindo componentes React dentro do Markdown), a abordagem será diferente, usando `next-mdx-remote` ou a integração nativa do Next.js com MDX.

## 3. Links para Posts

*   Nos componentes `FeaturedPostCard.tsx` e `PostCard.tsx` (criados na Fase 2), garantir que o link para "Ler artigo completo" ou o card em si direcione para a URL correta do post individual, usando o `slug` do post.
    ```typescript
    // Exemplo em PostCard.tsx
    import Link from 'next/link';

    // ... dentro do componente
    <Link href={`/blog/${post.slug}`}>
      {/* Conteúdo do card */}
    </Link>
    ```

## Entregáveis da Fase 3:

*   Páginas individuais de posts (`app/blog/[slug]/page.tsx`) criadas e funcionando.
*   Geração estática de páginas de posts via `generateStaticParams`.
*   Geração dinâmica de metadados (título, descrição) para cada post via `generateMetadata`.
*   Conteúdo Markdown dos posts sendo corretamente convertido para HTML e renderizado na página.
*   Estilização básica do conteúdo do post aplicada usando `@tailwindcss/typography`.
*   Links nas listagens de posts (página inicial) direcionando corretamente para as páginas individuais dos posts.
