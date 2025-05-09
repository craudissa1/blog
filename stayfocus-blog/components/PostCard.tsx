import Image from 'next/image';
import Link from 'next/link';
import { PostData } from '@/lib/posts';

interface PostCardProps {
  post: PostData;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`} legacyBehavior>
      <a className="card bg-white rounded-xl overflow-hidden shadow-md block hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="relative w-full h-48">
          <Image
            src={post.image || "https://via.placeholder.com/600x400.png?text=placeholder-post.jpg"} // Usar imagem do post ou placeholder
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="mb-3">
            {post.category && (
              <Link href={`/category/${post.category.toLowerCase()}`} legacyBehavior>
                <a className={`text-xs font-medium px-2.5 py-0.5 rounded hover:opacity-80 transition-opacity ${
                  post.category === 'Produtividade' ? 'bg-green-100 text-green-800' :
                  post.category === 'Funcionalidades' ? 'bg-blue-100 text-blue-800' :
                  post.category === 'Estudos' ? 'bg-purple-100 text-purple-800' :
                  post.category === 'Concursos' ? 'bg-yellow-100 text-yellow-800' : // Exemplo para Concursos
                  'bg-gray-100 text-gray-800' // Default
                }`}
                >
                  {post.category}
                </a>
              </Link>
            )}
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Image
                src={post.authorImage || "https://via.placeholder.com/32x32.png?text=placeholder-avatar.png"} // Adicionar authorImage ao frontmatter ou usar placeholder
                alt={post.author}
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
              <span>{post.author}</span>
            </div>
            {post.readingTime && <span>{post.readingTime}</span>}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;