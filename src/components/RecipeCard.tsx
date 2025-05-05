import { Recipe } from '@/interfaces';
import Img from './Img';

interface RecipeCardProps {
    recipe: Recipe;
}

function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <div className="p-8">
            <div className="relative bg-white text-black border-2 border-primary rounded-2xl flip-container">
                <Img
                    src={recipe.image}
                    alt={recipe.name}
                    classNameContainer="flip-target w-full aspect-square scale-110 rounded-2xl"
                    className="rounded-2xl"
                />

                <ul className="absolute top-0 w-full aspect-square rounded-2xl -z-10 p-4 list-disc list-inside marker:text-primary flex flex-col justify-center">
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
                        {recipe.cuisine}
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

                <div className="p-4 pt-8 flex flex-col items-start gap-2">
                    <p
                        className="font-bold text-lg line-clamp-1"
                        role="heading"
                    >
                        {recipe.name}
                    </p>
                    <p className="text-sm flex flex-wrap gap-2">
                        {recipe.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-primary">
                                #{tag}
                            </span>
                        ))}
                    </p>

                    <button className="px-4 py-1 font-semibold bg-primary text-white rounded-xl cursor-pointer">
                        Recipe
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
