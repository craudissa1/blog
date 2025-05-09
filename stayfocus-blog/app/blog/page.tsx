import PostCard from '@/components/PostCard';
import { getSortedPostsData, PostData } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Todos os Artigos - StayFocus Blog',
  description: 'Explore todos os artigos publicados no StayFocus Blog.',
};

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Todos os Artigos
      </h1>
      {allPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post: PostData) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">
          Nenhum artigo encontrado.
        </p>
      )}
      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
          &larr; Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}