import { Ingredient } from '@prisma/client';
import { useEffect, useState } from 'react';
import { Api } from '../services/api-client';
import { useSet } from './useSet';

interface IUseFilterIngredientsProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIds: Set<string>;
  toggle: (id: string) => void;
}

export const useFilterIngredients = (): IUseFilterIngredientsProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);

  return {
    ingredients,
    loading,
    selectedIds,
    toggle,
  };
};
