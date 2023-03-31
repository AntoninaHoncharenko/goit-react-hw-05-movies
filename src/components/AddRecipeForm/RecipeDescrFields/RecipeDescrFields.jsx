import cookingTime from '../../AddRecipeForm/cookingTime.json';
// import { Box } from 'Box';
import image from 'images/image.png';
import {
  DescrWrap,
  FileInputWrap,
  FileInput,
  Image,
  InputWrap,
  DescrInput,
  SelectWrap,
  DescrLabel,
  DescrSelect,
  DescrOption,
} from './RecipeDescrFields.styled';

export const RecipeDescrFields = () => {
  return (
    <DescrWrap>
      <FileInputWrap>
        <label htmlFor="photo">
          <Image src={image} alt="addphoto" />
        </label>
        <FileInput type="file" accept=".jpg, .jpeg, .png" id="photo" />
      </FileInputWrap>
      <InputWrap>
        <DescrInput
          type="text"
          id="title"
          name="title"
          placeholder="Enter item title"
        />
        <DescrInput
          type="text"
          id="about"
          name="about"
          placeholder="Enter about recipe"
        />
        <SelectWrap>
          <DescrLabel htmlFor="category">Category</DescrLabel>
          <DescrSelect name="category" id="category">
            <DescrOption value="breakfast">breakfast</DescrOption>
            <DescrOption value="lunch">lunch</DescrOption>
            <DescrOption value="dinner">dinner</DescrOption>
          </DescrSelect>
        </SelectWrap>
        <SelectWrap>
          <DescrLabel htmlFor="time">Cooking time</DescrLabel>
          <DescrSelect name="time" id="time">
            {cookingTime.map(time => {
              return (
                <DescrOption value={time} key={time}>
                  {time}
                </DescrOption>
              );
            })}
          </DescrSelect>
        </SelectWrap>
      </InputWrap>
    </DescrWrap>
  );
};
