function Header() {
    return (
        <header className="z-50 w-full max-w-[100rem] m-auto h-16 fixed left-0 right-0 flex glassmorphic">
            <div
                className="w-fit flex justify-center items-center px-2 cursor-pointer"
                tabIndex={0}
            >
                <img
                    className="h-12"
                    src="/logos/recipediary_white.png"
                    alt="Recipe Diary Logo"
                />
            </div>
        </header>
    );
}

export { Header };
