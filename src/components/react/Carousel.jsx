import { useEffect, useState, useRef } from 'react';

const ImageCarousel = ({ images, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef();

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, interval);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        startTimer();
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(intervalRef.current);
    }, [images.length]);

    const goToIndex = (index) => {
        setCurrentIndex(index);
        resetTimer();
    };

    return (
        <div className="relative col-span-2 overflow-hidden h-44 rounded-lg bg-light-primary dark:bg-primary md:hover:outline md:hover:outline-4 outline-light-primary-lighter dark:outline-primary-lighter">
            <div
                className="flex duration-700 ease-in-out h-full w-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, idx) => (
                    <img
                        key={idx}
                        src={image.src}
                        alt={image.alt}
                        className="object-cover h-full w-full flex-shrink-0"
                    />
                ))}
            </div>

            <div className="absolute bottom-2 right-2 flex gap-1 rounded-lg p-1 bg-light-primary dark:bg-primary">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToIndex(idx)}
                        className={`h-2 w-2 rounded-full hover:scale-125 ${
                            idx === currentIndex ? 'bg-light-accent dark:bg-accent' : 'bg-light-primary-lighter-hover dark:bg-slate-300/10'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;