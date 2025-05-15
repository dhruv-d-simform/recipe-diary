interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ children, className, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-1 font-semibold bg-primary text-white rounded-xl cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
}
