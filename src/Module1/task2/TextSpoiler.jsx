import React, { useState } from 'react';

function TextSpoiler({ text }) {
    const [isFullTextVisible, setIsFullTextVisible] = useState(false);

    const sentences = text.split('.').map(sentence => sentence.trim()).filter(Boolean);
    
    const firstSentence = sentences[0] ? `${sentences[0]}.` : '';

    const toggleTextVisibility = () => {
        setIsFullTextVisible(prev => !prev);
    };

    return (
        <div>
            <p>
                {isFullTextVisible ? text : firstSentence}
            </p>
            <button onClick={toggleTextVisibility}>
                {isFullTextVisible ? 'Скрыть' : 'Показать подробнее'}
            </button>
        </div>
    );
}

export default TextSpoiler;
