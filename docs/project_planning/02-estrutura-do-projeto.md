# Estrutura do Projeto

A seguir, a estrutura de pastas e arquivos planejada para o projeto do blog StayFocus em Next.js:

```
stayfocus-blog/
├── app/                       # Diretório principal do App Router
│   ├── blog/
│   │   ├── [slug]/            # Rota dinâmica para posts individuais
│   │   │   └── page.tsx
│   │   └── page.tsx           # Página de listagem de todos os posts (/blog)
│   ├── category/
│   │   ├── [categoryName]/    # Rota dinâmica para posts por categoria (Opcional)
│   │   │   └── page.tsx
│   ├── layout.tsx             # Layout raiz da aplicação
│   └── page.tsx               # Página inicial do blog (/)
│
├── components/                # Componentes React reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── FeaturedPostCard.tsx
│   ├── PostCard.tsx
│   ├── NewsletterSignUp.tsx
│   ├── FeatureHighlights.tsx
│   └── ui/                    # Componentes de UI menores (Button, Card, etc. - Opcional)
│
├── lib/                       # Funções auxiliares e lógica de dados
│   └── posts.ts               # Funções para ler e processar arquivos Markdown
│
├── posts/                     # Arquivos Markdown dos posts do blog
│   ├── apresentando-stayfocus.md
│   ├── funcionalidades-centrais.md
│   └── ...                    # Outros posts
│
├── public/                    # Assets estáticos
│   ├── images/
│   │   └── blog/              # Imagens específicas dos posts
│   │       └── nome-da-imagem.jpg
│   ├── fonts/                 # (Se houver fontes locais)
│   └── favicon.ico
│
├── styles/                    # (Pode não ser necessário com Tailwind, mas `globals.css` estará aqui)
│   └── globals.css            # Estilos globais e importações do Tailwind
│
├── .eslintrc.json             # Configuração do ESLint
├── .gitignore
├── next.config.js             # Configuração do Next.js
├── package.json
├── postcss.config.js          # Configuração do PostCSS (para Tailwind)
├── tailwind.config.js         # Configuração do Tailwind CSS
├── tsconfig.json              # Configuração do TypeScript
└── README.md                  # Documentação principal do projeto

```

## Detalhamento das Pastas Principais:

*   **`app/`**: Contém todas as rotas, layouts e UI da aplicação, utilizando o sistema de arquivos do App Router do Next.js.
    *   **`app/layout.tsx`**: Define o HTML base, incluindo `<head>` e `<body>`, e envolve todas as páginas.
    *   **`app/page.tsx`**: A página inicial do blog.
    *   **`app/blog/[slug]/page.tsx`**: Template para as páginas individuais de cada post do blog. O `[slug]` é o identificador único do post (geralmente derivado do nome do arquivo Markdown).
    *   **`app/blog/page.tsx`**: Página que lista todos os artigos do blog.
*   **`components/`**: Armazena todos os componentes React reutilizáveis (cabeçalho, rodapé, cards de post, etc.) para manter o código organizado e modular.
*   **`lib/`**: Contém lógica que não é de UI, como funções para buscar e processar os dados dos posts a partir dos arquivos Markdown.
*   **`posts/`**: Onde residem os arquivos `.md` que constituem o conteúdo dos posts do blog. Cada arquivo terá metadados (frontmatter) e o conteúdo principal do artigo.
*   **`public/`**: Para todos os assets estáticos que são servidos diretamente, como imagens, fontes (se não usar `next/font` com Google Fonts) e o `favicon.ico`.
*   **`styles/`**: O arquivo `globals.css` é usado para estilos globais e para importar as diretivas do Tailwind CSS.

## Configuração do Tailwind CSS:

O arquivo `tailwind.config.js` será configurado para incluir:
*   As cores personalizadas (`primary`, `secondary`, `accent`, etc.) definidas no `blog-prototype.html`.
*   A fonte `Inter` como padrão.
*   O plugin `@tailwindcss/typography` para estilização do conteúdo HTML gerado a partir do Markdown.
