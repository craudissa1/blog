import Image from 'next/image';
import Link from 'next/link';
import { PostData } from '@/lib/posts'; // Supondo que PostData está em lib/posts

interface FeaturedPostCardProps {
  post: PostData;
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({ post }) => {
  if (!post) {
    return null; // Ou algum placeholder se nenhum post em destaque for encontrado
  }

  return (
    <div className="featured-post rounded-xl p-6 mb-12 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 pr-0 md:pr-8">
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Destaque
            </span>
            {post.category && (
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                {post.category}
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            <Link href={`/posts/${post.slug}`} legacyBehavior>
              <a className="hover:underline">{post.title}</a>
            </Link>
          </h3>
          <p className="text-gray-700 mb-4">{post.excerpt}</p>
          <div className="flex items-center mb-4">
            {/* Placeholder para imagem do autor, idealmente viria do frontmatter */}
            <Image
              src={post.authorImage || "https://via.placeholder.com/40x40.png?text=placeholder-avatar.png"} // Adicionar authorImage ao frontmatter ou usar placeholder
              alt={post.author}
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <div>
              <p className="font-medium text-gray-800">{post.author}</p>
              <p className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
                {post.readingTime && ` • ${post.readingTime}`}
              </p>
            </div>
          </div>
          <Link href={`/posts/${post.slug}`} legacyBehavior>
            <a className="text-blue-600 font-medium hover:underline">Ler artigo completo →</a>
          </Link>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <Link href={`/posts/${post.slug}`} legacyBehavior>
            <a>
              <Image
                src={post.image || "https://via.placeholder.com/400x300.png?text=placeholder-featured.jpg"} // Usar imagem do post ou placeholder
                alt={post.title}
                width={400}
                height={300}
                className="rounded-lg w-full h-auto shadow-lg object-cover"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;