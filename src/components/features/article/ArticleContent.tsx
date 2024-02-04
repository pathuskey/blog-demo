import { CtfRichText } from '@src/components/features/contentful';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';

interface ArticleContentProps {
  article: PageBlogPostFieldsFragment;
}
export const ArticleContent = ({ article }: ArticleContentProps) => {
  const { content } = article;

  return (
    <div>
      <CtfRichText json={content?.json} links={content?.links} />
    </div>
  );
};
