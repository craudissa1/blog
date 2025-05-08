# Tecnologias Utilizadas

Este documento detalha as principais tecnologias escolhidas para o desenvolvimento do blog StayFocus.

1.  **Next.js (com App Router):**
    *   **Descrição:** Framework React para produção, com foco em renderização híbrida (Server-Side Rendering - SSR e Static Site Generation - SSG), roteamento otimizado e excelente experiência de desenvolvimento.
    *   **Justificativa:** Ideal para blogs devido à sua performance, capacidade de SEO, e facilidade em lidar com conteúdo estático (posts em Markdown) e dinâmico. O App Router é a mais recente e recomendada forma de estruturar aplicações Next.js.

2.  **Tailwind CSS:**
    *   **Descrição:** Framework CSS utility-first para criar designs customizados rapidamente.
    *   **Justificativa:** O `blog-prototype.html` já utiliza classes do Tailwind, tornando a transição natural. Permite construir interfaces complexas com alta manutenibilidade e sem a necessidade de escrever CSS customizado extensivamente. O plugin `@tailwindcss/typography` será usado para estilizar o conteúdo dos posts gerado a partir do Markdown.

3.  **TypeScript:**
    *   **Descrição:** Superset do JavaScript que adiciona tipagem estática opcional.
    *   **Justificativa:** Melhora a robustez do código, facilita a refatoração e a detecção de erros em tempo de desenvolvimento. Altamente recomendado para projetos Next.js.

4.  **Markdown (com Frontmatter):**
    *   **Descrição:** Linguagem de marcação leve para criação de conteúdo formatado.
    *   **Justificativa:** Facilita a escrita e gerenciamento dos posts do blog. O frontmatter (YAML no topo do arquivo Markdown) permitirá adicionar metadados estruturados aos posts (título, data, autor, categoria, etc.).

5.  **React:**
    *   **Descrição:** Biblioteca JavaScript para construir interfaces de usuário.
    *   **Justificativa:** É a base do Next.js. Sua arquitetura baseada em componentes é ideal para construir uma UI modular e reutilizável.

6.  **Bibliotecas Auxiliares:**
    *   **`gray-matter`:** Para parsear o frontmatter dos arquivos Markdown.
    *   **`remark` e `remark-html` (ou `markdown-to-jsx`/`next-mdx-remote`):** Para converter o conteúdo Markdown dos posts em HTML seguro ou componentes React.
    *   **`next/font`:** Para otimização de fontes locais ou do Google Fonts (ex: fonte 'Inter').
    *   **`next/image`:** Para otimização automática de imagens.
    *   **`react-icons`:** Para uma vasta biblioteca de ícones SVG, integrando-se bem com o React e evitando a dependência de CDNs de fontes de ícones.

7.  **ESLint e Prettier (Recomendado):**
    *   **Descrição:** Ferramentas para linting de código e formatação automática.
    *   **Justificativa:** Mantêm a qualidade e a consistência do código em todo o projeto.

8.  **Vercel (para Deploy):**
    *   **Descrição:** Plataforma de deploy otimizada para aplicações Next.js.
    *   **Justificativa:** Oferece deploy contínuo, previews de deploy, e integra-se perfeitamente com Next.js, simplificando o processo de publicação e hospedagem do blog.
