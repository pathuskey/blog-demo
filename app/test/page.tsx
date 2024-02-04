import Link from 'next/link';

import { ArticleHero, ArticleTileGrid } from '@src/components/features/article';
import { Container } from '@src/components/shared/container';
import { PageBlogPostOrder } from '@src/lib/__generated/sdk';
import { client } from '@src/lib/client';

export default async function Home() {
  const { page, posts } = await getPostData();

  if (!page?.featuredBlogPost || !posts) return;

  return (
    <>
      <Container>
        <Link href={`/${page.featuredBlogPost.slug}`}>
          <ArticleHero article={page.featuredBlogPost} />
        </Link>
      </Container>

      {/* Tutorial: contentful-and-the-starter-template.md */}
      {/* Uncomment the line below to make the Greeting field available to render */}
      {/*<Container>*/}
      {/*  <div className="my-5 bg-colorTextLightest p-5 text-colorBlueLightest">{page.greeting}</div>*/}
      {/*</Container>*/}

      <Container className="my-8  md:mb-10 lg:mb-16">
        <h2 className="mb-4 md:mb-6">Latest articles</h2>
        <ArticleTileGrid className="md:grid-cols-2 lg:grid-cols-3" articles={posts} />
      </Container>
    </>
  );
}

const getPostData = async () => {
  const gqlClient = client;

  const landingPageData = await gqlClient.pageLanding();
  const page = landingPageData.pageLandingCollection?.items[0];

  const blogPostsData = await gqlClient.pageBlogPostCollection({
    limit: 6,
    order: PageBlogPostOrder.PublishedDateDesc,
    where: {
      slug_not: page?.featuredBlogPost?.slug,
    },
  });
  const posts = blogPostsData.pageBlogPostCollection?.items;

  return {
    page,
    posts,
  };
};
