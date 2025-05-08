import starFilledIcon from '/icons/star_filled.svg';
import starHalfIcon from '/icons/star_half.svg';
import starHollowIcon from '/icons/star_hollow.svg';

interface RecipeRatingProps {
    rating: number;
}

export function RecipeRating({ rating }: RecipeRatingProps) {
    let ratingIterator = rating;

    return (
        <div className="flex justify-center items-center">
            {Array(5)
                .fill(0)
                .map((_, i) => {
                    let icon = starHollowIcon;
                    if (ratingIterator >= 1) {
                        icon = starFilledIcon;
                    } else if (ratingIterator > 0) {
                        icon = starHalfIcon;
                    }
                    ratingIterator--;

                    return (
                        <img
                            src={icon}
                            key={`Star Rating ${i}`}
                            alt={`Star Rating ${i}`}
                            className="h-5"
                        />
                    );
                })}

            <p className="text-primary font-semibold ml-2">{rating}</p>
        </div>
    );
}
