import { Link } from 'react-router';

export function Header() {
    return (
        <header className="z-50 w-full max-w-[100rem] m-auto h-16 fixed left-0 right-0 flex glassmorphic">
            <Link
                className="w-fit flex justify-center items-center gap-1 px-2 cursor-pointer"
                to="/"
            >
                <img
                    className="h-11 grayscale-100 contrast-200 saturate-200"
                    src="/logos/recipediary.png"
                    alt="Recipe Diary Logo"
                />
                <p role="heading" className="text-white text-2xl">
                    RecipeDiary
                </p>
            </Link>
        </header>
    );
}
