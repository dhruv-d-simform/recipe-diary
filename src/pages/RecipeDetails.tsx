import { useParams } from 'react-router';
import { recipes } from '@/MockData/recipesMockData';
import { NotFound } from './NotFound';

export function RecipeDetails() {
    const { id } = useParams();

    const idNum = Number(id);

    if (!isFinite(idNum)) {
        return <NotFound />;
    }

    const recipe = recipes.find((item) => item.id === idNum);

    if (!recipe) {
        return <NotFound />;
    }

    return (
        <div className="p-4">
            <div className="md:max-h-[calc(100vh-12rem)] flex flex-col md:flex-row mx-auto md:mt-4 p-6 rounded-lg shadow-2xl glassmorphic-white">
                <div className="md:w-1/2 w-full aspect-w-1 aspect-h-1">
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="object-cover rounded-lg h-full w-full"
                    />
                </div>
                <div
                    className="md:w-1/2 w-full overflow-y-auto max-h-[calc(100vh-6rem)] md:max-h-full md:ml-4 p-4"
                    style={{ scrollbarWidth: 'none' }}
                >
                    <h1 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white">
                        {recipe.name}
                    </h1>
                    <div className="flex justify-between mt-2">
                        <span className="text-white font-bold border border-primary px-4 py-1 rounded-full">
                            {recipe.cuisine === 'Pakistani'
                                ? 'Indian'
                                : recipe.cuisine}
                        </span>
                        <span className="text-white font-bold border border-primary px-4 py-1 rounded-full">
                            {recipe.difficulty}
                        </span>
                        <span className="text-white font-bold border border-primary px-4 py-1 rounded-full">
                            {recipe.servings} servings
                        </span>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Ingredients
                        </h2>
                        <ul className="list-disc ml-8 mt-2 marker:text-primary">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li
                                    key={index}
                                    className="text-gray-700 dark:text-gray-300"
                                >
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Instructions
                        </h2>
                        <ol className="list-decimal ml-8 mt-2 marker:text-primary">
                            {recipe.instructions.map((instruction, index) => (
                                <li
                                    key={index}
                                    className="text-gray-700 dark:text-gray-300"
                                >
                                    {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="mt-4">
                        <span className="text-gray-600 dark:text-gray-400">
                            Prep Time: {recipe.prepTimeMinutes} minutes
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 ml-4">
                            Cook Time: {recipe.cookTimeMinutes} minutes
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 ml-4">
                            Calories: {recipe.caloriesPerServing} kcal
                        </span>
                    </div>
                    <div className="mt-4">
                        <span className="text-gray-600 dark:text-gray-400">
                            Rating: {recipe.rating} ({recipe.reviewCount}{' '}
                            reviews)
                        </span>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Tags
                        </h2>
                        <div className="flex flex-wrap mt-2">
                            {recipe.tags.map((tag) => {
                                tag = tag === 'Pakistani' ? 'Indian' : tag;
                                return (
                                    <span
                                        key={tag}
                                        className="bg-primary text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
                                    >
                                        {tag}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails;
