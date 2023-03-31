import { Container } from './AddRecipePage.styled';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { Popular } from 'components/PopularPreview/PopularPreview';

const AddRecipePage = () => {
  return (
    <Container>
      <AddRecipeForm />
      <Popular />
    </Container>
  );
};

export default AddRecipePage;
