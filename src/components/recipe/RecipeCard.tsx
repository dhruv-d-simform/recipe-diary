import { Recipe } from '@/types/recipe.types';
import { RecipeImage } from './RecipeImage';
import { Button } from '@/components/Button';
import { RecipeRating } from './RecipeRating';
import recipeStyles from '@/styles/recipe.module.css';
import { useNavigate } from 'react-router';

interface RecipeCardProp {
    recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProp) {
    const navigate = useNavigate();

    return (
        <div className="p-8">
            <div
                className={`relative bg-white text-black border-2 border-primary rounded-3xl ${recipeStyles['flip-container']}`}
            >
                <RecipeImage
                    src={recipe.image}
                    alt={recipe.name}
                    containerClassName={`${recipeStyles['flip-target']} w-full aspect-square scale-110 rounded-2xl`}
                    className="rounded-3xl shadow-[#00000050] shadow-lg"
                />

                <ul className="overflow-y-auto absolute top-0 w-full aspect-square rounded-2xl -z-10 p-4 pl-8 list-disc marker:text-primary flex flex-col justify-center">
                    <li>
                        <span className="font-bold">Meal Type : </span>
                        {recipe.mealType.join(', ')}
                    </li>
                    <li>
                        <span className="font-bold">Difficulty : </span>
                        {recipe.difficulty}
                    </li>
                    <li>
                        <span className="font-bold">Servings : </span>
                        {recipe.servings}
                    </li>
                    <li>
                        <span className="font-bold">Cuisine : </span>
                        {recipe.cuisine === 'Pakistani'
                            ? 'Indian'
                            : recipe.cuisine}
                    </li>
                    <li>
                        <span className="font-bold">
                            Calories per serving :{' '}
                        </span>
                        {recipe.caloriesPerServing}
                    </li>
                    <li>
                        <span className="font-bold">Preparation Time : </span>
                        {recipe.prepTimeMinutes} minutes
                    </li>
                    <li>
                        <span className="font-bold">Cooking Time : </span>
                        {recipe.cookTimeMinutes} minutes
                    </li>
                </ul>

                <div className="p-4 flex flex-col items-start gap-2">
                    <p
                        className="font-bold text-lg line-clamp-1"
                        role="heading"
                        aria-label={recipe.name}
                    >
                        {recipe.name}
                    </p>
                    <p className="text-sm flex flex-wrap gap-2">
                        {recipe.tags.slice(0, 3).map((tag) => {
                            tag = tag === 'Pakistani' ? 'Indian' : tag;
                            return (
                                <span key={tag} className="text-primary">
                                    #{tag}
                                </span>
                            );
                        })}
                    </p>

                    <div className="w-full flex justify-between items-center">
                        <RecipeRating rating={recipe.rating} />
                        <Button
                            onClick={() => navigate(`/recipe/${recipe.id}`)}
                        >
                            Recipe
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
