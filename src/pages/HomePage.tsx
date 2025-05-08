import { recipes } from '@/MockData/recipe';
import { RecipeCard } from '@/components/recipe/RecipeCard';
import recipeStyles from '@/styles/recipe.module.css';

export function HomePage() {
    return (
        <div className={`${recipeStyles['grid-cols-auto-fit']} grid p-8 gap-8`}>
            {recipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
        </div>
    );
}
