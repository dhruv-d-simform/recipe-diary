import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router';
import { App } from '@/App.tsx';
import { HomePage } from '@/pages/HomePage.tsx';
import { NotFound } from '@/pages/NotFound';
import { RecipeDetails } from '@/pages/RecipeDetails';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);
