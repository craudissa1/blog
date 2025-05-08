# Fase 1: Fundação do Projeto e Layout Principal

Esta fase concentra-se em configurar o ambiente de desenvolvimento Next.js e criar os componentes de layout globais que serão utilizados em todas as páginas do blog.

## 1. Configuração do Projeto Next.js

*   **Inicialização:**
    *   Utilizar o comando `npx create-next-app@latest stayfocus-blog --typescript --tailwind --eslint` para criar um novo projeto Next.js já configurado com TypeScript, Tailwind CSS e ESLint.
*   **Estrutura de Pastas Inicial:**
    *   Verificar e ajustar a estrutura de pastas conforme definido em `02-estrutura-do-projeto.md`.
    *   Criar as pastas `components/`, `lib/`, `posts/`, e `public/images/blog/` inicialmente.
*   **Configuração do Tailwind CSS (`tailwind.config.js`):**
    *   Adicionar as cores personalizadas (primary, primary-dark, secondary, accent, dark, light, gray) da seção `:root` do `blog-prototype.html` dentro de `theme.extend.colors`.
        ```javascript
        // Exemplo parcial em tailwind.config.js
        module.exports = {
          theme: {
            extend: {
              colors: {
                primary: '#3b82f6',
                'primary-dark': '#2563eb',
                secondary: '#10b981',
                accent: '#8b5cf6',
                dark: '#1f2937',
                light: '#f9fafb',
                gray: {
                  DEFAULT: '#6b7280',
                  // Adicionar outras tonalidades se necessário, ex: 100, 200, ... 900
                }
              },
              fontFamily: {
                sans: ['Inter', 'sans-serif'],
              },
            },
          },
          plugins: [
            require('@tailwindcss/typography'), // Adicionar plugin de tipografia
          ],
        }
        ```
    *   Adicionar a fonte `Inter` à configuração `theme.extend.fontFamily`.
    *   Instalar e configurar o plugin `@tailwindcss/typography` para estilizar o conteúdo Markdown.

## 2. Layout Global e Componentes Principais

*   **Fonte `Inter`:**
    *   Utilizar `next/font/google` para carregar a fonte 'Inter' de forma otimizada. No `app/layout.tsx`:
        ```typescript
        // app/layout.tsx (exemplo parcial)
        import { Inter } from 'next/font/google';
        const inter = Inter({ subsets: ['latin'] });

        export default function RootLayout({ children }: { children: React.ReactNode }) {
          return (
            <html lang="pt-BR" className={inter.className}>
              {/* ... */}
            </html>
          );
        }
        ```
*   **`app/layout.tsx`:**
    *   Definir a estrutura HTML base (`<html>`, `<head>`, `<body>`).
    *   Importar e aplicar a classe da fonte `Inter` ao `<html>` ou `<body>`.
    *   Incluir metatags globais essenciais (charset, viewport, title padrão, description padrão).
    *   Renderizar os componentes `Header` (no topo) e `Footer` (na base), envolvendo o `{children}`.
    *   Importar `globals.css`.
*   **Componente `Header` (`components/Header.tsx`):**
    *   Estrutura HTML baseada na tag `<header>` do `blog-prototype.html`.
    *   **Logo:** "StayFocus" com as cores específicas (`text-blue-600` e `text-purple-600`).
    *   **Navegação Desktop:**
        *   Links: "Início", "Funcionalidades", "Concursos", "Produtividade", "Sobre".
        *   Utilizar o componente `<Link>` do Next.js para navegação.
        *   Estilizar os links replicando a classe `.nav-link` e o efeito de sublinhado no hover (`::after` pseudo-elemento) usando utilitários do Tailwind (pode exigir um pouco de CSS customizado ou abordagens criativas com Tailwind para o pseudo-elemento, ou um span aninhado).
    *   **Botão "Começar Agora":** Estilizado conforme a classe `.btn-primary`.
    *   **Menu Mobile:**
        *   Ícone de hambúrguer (usar `react-icons/fa` para `FaBars`).
        *   Controlar a visibilidade do menu de navegação mobile usando `useState`.
        *   O menu mobile deve exibir os mesmos links da navegação desktop, estilizados para visualização em coluna.
        *   Aplicar classes para posicionamento absoluto e estilização conforme o protótipo.
    *   Utilizar classes do Tailwind para layout flex, espaçamento, sombras, e responsividade (`md:flex`, `hidden`, etc.) conforme o protótipo.
*   **Componente `Footer` (`components/Footer.tsx`):**
    *   Estrutura HTML baseada na tag `<footer>` do `blog-prototype.html`.
    *   **Logo e Info:** Logo "StayFocus" e texto descritivo.
    *   **Links Sociais:** Ícones para Twitter, Facebook, Instagram, LinkedIn (usar `react-icons`).
    *   **Links Rápidos:** Lista de links (Início, Funcionalidades, Preços, Blog, Contato).
    *   **Categorias do Blog:** Lista de links de categorias.
    *   **Contato:** Informações de email e telefone com ícones.
    *   **Seção de Direitos Autorais:** Texto de direitos autorais e links para "Termos de Uso" e "Política de Privacidade".
    *   Utilizar classes do Tailwind para grid layout, espaçamentos e cores conforme o protótipo.
*   **Ícones:**
    *   Instalar `react-icons` (`npm install react-icons` ou `yarn add react-icons`).
    *   Substituir os ícones do Font Awesome CDN (`<i class="fas ...">`) por componentes React (ex: `<FaBars />`, `<FaEnvelope />`).

## Entregáveis da Fase 1:

*   Projeto Next.js inicializado e configurado.
*   Tailwind CSS configurado com as cores e fontes do projeto.
*   Layout global (`app/layout.tsx`) implementado.
*   Componentes `Header` e `Footer` criados e estilizados conforme o `blog-prototype.html`, incluindo responsividade básica para o header.
*   Fonte `Inter` e `react-icons` integrados.
