function Header() {
    return (
        <header className="w-full max-w-[100rem] m-auto h-16 fixed left-0 right-0 flex glassmorphic border-b border-slate-900">
            <div className="w-fit flex justify-center items-center px-2 cursor-pointer">
                <img className="h-12" src="/logos/recipediary_white.png" />
            </div>
        </header>
    );
}

export default Header;
