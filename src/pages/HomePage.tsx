import { recipes } from '@/MockData/recipe';
import { RecipeCard } from '@/components/recipe/RecipeCard';

export function HomePage() {
    return (
        <div className="grid grid-cols-auto-fit p-8 gap-8">
            {recipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
        </div>
    );
}
