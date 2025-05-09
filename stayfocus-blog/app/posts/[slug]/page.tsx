import { getAllPostSlugs, getPostData } from '@/lib/posts';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  // A função getAllPostSlugs já retorna o formato { params: { slug: '...' } }
  // Se ela retornar apenas os slugs, o map seria necessário:
  // return paths.map(slug => ({ slug }));
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = await getPostData(params.slug);
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // Defina sua URL base

  return {
    title: postData.title,
    description: postData.excerpt,
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      url: `${siteUrl}/posts/${params.slug}`,
      images: postData.image ? [{ url: `${siteUrl}${postData.image.startsWith('/') ? '' : '/'}${postData.image}` }] : [],
      type: 'article',
      publishedTime: postData.date, // Assegure que 'date' está no formato ISO 8601
      authors: postData.author ? [postData.author] : [],
      tags: postData.tags,
      section: postData.category, // 'section' é um bom lugar para a categoria
    },
    twitter: { // Adicionar metadados para Twitter Cards
      card: 'summary_large_image',
      title: postData.title,
      description: postData.excerpt,
      images: postData.image ? [`${siteUrl}${postData.image.startsWith('/') ? '' : '/'}${postData.image}`] : [],
      creator: typeof postData.authorTwitterHandle === 'string' ? postData.authorTwitterHandle : '@StayFocusApp', // Adicionar authorTwitterHandle ao frontmatter ou usar um padrão
    },
  };
}

export default async function PostPage({ params }: Props) {
  const postData = await getPostData(params.slug);

  return (
    <article className="prose lg:prose-xl max-w-none mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold md:text-4xl mb-4 text-center">{postData.title}</h1>
      <div className="mb-6 text-center text-gray-600 dark:text-gray-400">
        <span>Por {postData.author}</span> | <span>{new Date(postData.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
        {postData.category && (
          <span>
            {' | Categoria: '}
            <Link href={`/category/${postData.category.toLowerCase()}`} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              {postData.category}
            </Link>
          </span>
        )}
        {postData.readingTime && <span> | {postData.readingTime}</span>}
      </div>
      {postData.image && (
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image 
            src={postData.image} 
            alt={postData.title} 
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
      <div 
        className="prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />
    </article>
  );
}