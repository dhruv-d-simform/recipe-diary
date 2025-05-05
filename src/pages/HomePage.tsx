import { recipes } from '@/dummyData';
import RecipeCard from '@/components/RecipeCard';

function HomePage() {
    return (
        <div className="grid grid-cols-auto-fit p-8 gap-8">
            {recipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
        </div>
    );
}

export default HomePage;
