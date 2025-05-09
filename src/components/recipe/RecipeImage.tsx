import { useState } from 'react';
import recipeStyle from '@/styles/recipe.module.css';

interface RecipeImageProps {
    src: string;
    alt: string;
    className: string;
    containerClassName: string;
}

export function RecipeImage({
    src,
    alt,
    className,
    containerClassName,
}: RecipeImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div
            className={`${isLoaded || recipeStyle['shimmer']} relative ${containerClassName}`}
        >
            <img
                src={src}
                alt={alt}
                className={`absolute w-full h-full ${className}`}
                style={{ opacity: isLoaded ? 1 : 0 }}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
            />
        </div>
    );
}
