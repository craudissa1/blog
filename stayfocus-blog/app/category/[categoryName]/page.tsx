import PostCard from '@/components/PostCard';
import { getAllCategories, getPostsByCategory, PostData } from '@/lib/posts';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: { categoryName: string };
};

export async function generateStaticParams() {
  return getAllCategories();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.categoryName);
  const capitalizedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const description = `Explore todos os artigos sobre ${capitalizedCategoryName} no StayFocus Blog. Encontre dicas, tutoriais e novidades relacionadas a ${capitalizedCategoryName}.`;

  // Tenta encontrar uma imagem do primeiro post da categoria para usar como og:image
  const postsInCategory = getPostsByCategory(categoryName);
  const ogImage = postsInCategory.length > 0 && postsInCategory[0].image
                  ? `${siteUrl}${postsInCategory[0].image.startsWith('/') ? '' : '/'}${postsInCategory[0].image}`
                  : `${siteUrl}/default-og-image.png`; // Adicione uma imagem padrão em public/

  return {
    title: `Artigos sobre ${capitalizedCategoryName} - StayFocus Blog`,
    description: description,
    openGraph: {
      title: `Artigos sobre ${capitalizedCategoryName} - StayFocus Blog`,
      description: description,
      url: `${siteUrl}/category/${categoryName}`,
      images: [{ url: ogImage }],
      type: 'website', // Ou 'object', dependendo de como você vê uma página de categoria
    },
    twitter: {
      card: 'summary_large_image',
      title: `Artigos sobre ${capitalizedCategoryName} - StayFocus Blog`,
      description: description,
      images: [ogImage],
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const categoryName = decodeURIComponent(params.categoryName);
  const posts = getPostsByCategory(categoryName);
  const capitalizedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Artigos sobre: {capitalizedCategoryName}
      </h1>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: PostData) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">
          Nenhum artigo encontrado para esta categoria.
        </p>
      )}
      <div className="mt-12 text-center">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors mr-4">
          &larr; Ver Todos os Artigos
        </Link>
        <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
          &larr; Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}