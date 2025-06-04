import { Ingredient } from '@prisma/client';
import { useEffect, useState } from 'react';
import { Api } from '../services/api-client';

interface IUseFilterIngredientsProps {
  ingredients: Ingredient[];
}

export const useFilterIngredients = (): IUseFilterIngredientsProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      }
    }
    fetchIngredients();
  }, []);

  return {
    ingredients,
  };
};
