import * as S from "./styles";
import { ArticleProps } from "./props";

export const Article = ({ title, description, img, className }: ArticleProps) => {
  return (
    <S.Article className={className}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      {img && <S.Quality {...img} />}
    </S.Article>
  );
};
