import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime: string;
  [key: string]: unknown; // Para permitir outras propriedades do frontmatter
}

export interface PostContent extends PostData {
  contentHtml: string;
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      ...(matterResult.data as {
        title: string;
        date: string;
        author: string;
        excerpt: string;
        image: string;
        category: string;
        tags: string[];
        featured: boolean;
        readingTime: string;
      }),
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(slug: string): Promise<PostContent> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    ...(matterResult.data as {
      title: string;
      date: string;
      author: string;
      excerpt: string;
      image: string;
      category: string;
      tags: string[];
      featured: boolean;
      readingTime: string;
    }),
  };
}

export function getAllCategories() {
  const allPosts = getSortedPostsData();
  const categories = new Set<string>();
  allPosts.forEach(post => {
    if (post.category) {
      categories.add(post.category.toLowerCase());
    }
  });
  return Array.from(categories).map(category => ({
    params: {
      categoryName: category,
    },
  }));
}

export function getPostsByCategory(categoryName: string): PostData[] {
  const allPosts = getSortedPostsData();
  const normalizedCategoryName = categoryName.toLowerCase();
  return allPosts.filter(post =>
    post.category && post.category.toLowerCase() === normalizedCategoryName
  );
}