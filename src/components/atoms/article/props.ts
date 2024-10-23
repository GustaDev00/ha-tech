export interface ArticleProps {
  title: React.ReactNode;
  description: React.ReactNode;
  img?: {
    src: string;
    alt: string;
  };
  className?: string;
}
