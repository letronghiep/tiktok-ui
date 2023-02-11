import { forwardRef, useState } from 'react';

import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleImage = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleImage}
        />
    );
});

export default Image;
