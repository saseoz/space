import { useState } from 'react';

export default function useContent(content) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentContent = content[currentIndex];

    const handleContentClick = (index) => {
        setCurrentIndex(index);
    };

    return { currentContent, currentIndex, handleContentClick };
}
