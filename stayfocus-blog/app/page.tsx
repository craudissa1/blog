import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import Hero from '@/components/Hero';
import FeaturedPostCard from '@/components/FeaturedPostCard';
import PostCard from '@/components/PostCard';
import NewsletterSignUp from '@/components/NewsletterSignUp';
import FeatureHighlights from '@/components/FeatureHighlights';

export default function HomePage() {
  const allPosts = getSortedPostsData();
  const featuredPost = allPosts.find(post => post.featured);
  // Pega os 3 posts mais recentes que não são o post em destaque
  const recentPosts = allPosts
    .filter(post => !(post.featured))
    .slice(0, 3);

  return (
    <main className="flex flex-col">
      <Hero />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Blog StayFocus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Artigos, dicas e recursos para maximizar sua produtividade, melhorar seus estudos e alcançar seus objetivos.
            </p>
          </div>

          {featuredPost && (
            <FeaturedPostCard post={featuredPost} />
          )}

          {recentPosts.length > 0 && (
            <>
              <h3 className="text-2xl font-bold mb-6 md:mb-8 text-gray-900">Posts Recentes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
              <div className="text-center mt-10 md:mt-12">
                <Link href="/blog" legacyBehavior>
                  <a className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 font-medium">
                    Ver Todos os Artigos
                  </a>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <FeatureHighlights />
      <NewsletterSignUp />
    </main>
  );
}
