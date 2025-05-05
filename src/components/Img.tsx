import { useState } from 'react';

interface ImgProps {
    src: string;
    className: string;
    classNameContainer: string;
}

function Img({ src, className, classNameContainer }: ImgProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div
            className={`${isLoaded || 'shimmer'} relative ${classNameContainer}`}
        >
            <img
                src={src}
                className={`absolute w-full h-full ${className}`}
                style={{ opacity: isLoaded ? 1 : 0 }}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
            />
        </div>
    );
}

export default Img;
