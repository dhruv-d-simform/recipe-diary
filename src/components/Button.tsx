interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

function Button({ children, className }: ButtonProps) {
    return (
        <button
            className={`px-4 py-1 font-semibold bg-primary text-white rounded-xl cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
