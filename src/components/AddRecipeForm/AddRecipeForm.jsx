import React from 'react';
// import { useFormik } from 'formik';
import { RecipeDescrFields } from './RecipeDescrFields/RecipeDescrFields';
import { RecipeIngredients } from './RecipeIngredients/RecipeIngredients';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';
// import { Box } from 'Box';
import {
  AddRecipeSection,
  Form,
  Title,
  AddButton,
} from './AddRecipeForm.styled';

export const AddRecipeForm = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     photo: '',
  //     title: '',
  //     about: '',
  //     category: '',
  //     time: '',
  //     ingredients: [],
  //     recipe: [],
  //   },

  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  return (
    <AddRecipeSection>
      <Title>Add recipe</Title>
      <Form>
        <RecipeDescrFields />
        <RecipeIngredients />
        <RecipePreparation />
        <AddButton type="submit">Add</AddButton>
      </Form>
    </AddRecipeSection>
  );
};
