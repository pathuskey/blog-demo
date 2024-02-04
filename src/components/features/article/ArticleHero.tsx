import { twMerge } from 'tailwind-merge';

import { ArticleAuthor } from '@src/components/features/article/ArticleAuthor';
import { CtfImage } from '@src/components/features/contentful';
import { FormatDate } from '@src/components/shared/format-date';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';

interface ArticleHeroProps {
  article: PageBlogPostFieldsFragment;
  isReversedLayout?: boolean;
}
export const ArticleHero = ({ article, isReversedLayout = false }: ArticleHeroProps) => {
  const { title, shortDescription, publishedDate } = article;

  return (
    <div
      className={twMerge(
        `flex flex-col overflow-hidden rounded-2xl border border-gray300 shadow-lg`,
        isReversedLayout ? 'lg:flex-row-reverse' : 'lg:flex-row',
      )}
    >
      <div className="flex-1 basis-1/2">
        {article.featuredImage && (
          <CtfImage
            nextImageProps={{ className: 'w-full', priority: true, sizes: undefined }}
            {...article.featuredImage}
          />
        )}
      </div>

      <div className="relative flex flex-1 basis-1/2 flex-col justify-center py-6 px-4 lg:px-16 lg:py-12 xl:px-24">
        <div className="mb-2 flex flex-wrap items-center">
          <ArticleAuthor article={article} />
        </div>
        <h1>{title}</h1>
        {shortDescription && <p className="mt-2">{shortDescription}</p>}
        <div className={twMerge('mt-2 text-xs text-gray600', isReversedLayout ? 'lg:hidden' : '')}>
          <FormatDate date={publishedDate} />
        </div>
      </div>
    </div>
  );
};
