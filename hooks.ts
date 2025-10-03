import { useContext, useState, useEffect, useRef } from 'react';
import { LanguageContext, LanguageContextType } from './LanguageContext';
import { translations } from './translations';

export const useTranslations = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslations must be used within a LanguageProvider');
    }

    const t = (key: string, options?: { [key: string]: string | number }) => {
        const lang = context.language;
        // Attempt to get the translation from the current language
        let text = key.split('.').reduce((obj: any, k: string) => obj && obj[k], translations[lang]);

        // Fallback to English if the key is not found in the current language
        if (!text) {
            text = key.split('.').reduce((obj: any, k: string) => obj && obj[k], translations['en']);
        }

        // If still not found, return the key itself
        if (!text) {
            return key;
        }
        
        if (options) {
            Object.keys(options).forEach(k => {
                const regex = new RegExp(`{${k}}`, 'g');
                text = text.replace(regex, String(options[k]));
            });
        }

        return text;
    };

    return { ...context, t };
};

export const useAnimatedCounter = (endValue: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const startValue = 0;
    const startTimeRef = useRef<number | null>(null);
    const frameRef = useRef<number | null>(null);

    const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
            startTimeRef.current = timestamp;
        }

        const progress = timestamp - startTimeRef.current;
        const percentage = Math.min(progress / duration, 1);
        
        const currentCount = startValue + (endValue - startValue) * percentage;
        setCount(currentCount);

        if (progress < duration) {
            frameRef.current = requestAnimationFrame(animate);
        }
    };

    useEffect(() => {
        frameRef.current = requestAnimationFrame(animate);
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [endValue, duration]);

    return count;
};