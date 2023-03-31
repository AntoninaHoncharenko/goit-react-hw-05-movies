// import { Box } from 'Box';
import {
  PopularSection,
  Title,
  PopularList,
  PopularItem,
  PopularImage,
  PopularSubtitle,
  PopularText,
} from './PopularPreview.styled';

export const Popular = () => {
  return (
    <PopularSection>
      <Title>Popular recipe</Title>
      <PopularList>
        <PopularItem>
          <PopularImage src="" alt="dish" />
          <div>
            <PopularSubtitle>Banana Pancakes</PopularSubtitle>
            <PopularText>
              In a bowl, mash the banana with a fork until it resembles a thick
              purée...
            </PopularText>
          </div>
        </PopularItem>
        <PopularItem>
          <PopularImage src="" alt="dish" />
          <div>
            <PopularSubtitle>Banana Pancakes</PopularSubtitle>
            <PopularText>
              In a bowl, mash the banana with a fork until it resembles a thick
              purée...
            </PopularText>
          </div>
        </PopularItem>
      </PopularList>
    </PopularSection>
  );
};
