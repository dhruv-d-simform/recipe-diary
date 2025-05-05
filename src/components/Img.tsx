import { useState } from 'react';

interface ImgProps {
    src: string;
    alt: string;
    className: string;
    classNameContainer: string;
}

function Img({ src, alt, className, classNameContainer }: ImgProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div
            className={`${isLoaded || 'shimmer'} relative ${classNameContainer}`}
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

export { Img };
