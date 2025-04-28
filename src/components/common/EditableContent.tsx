
import React from 'react';
import { getContentValue } from '../../utils/contentService';

interface EditableTextProps {
  location: string;
  defaultValue: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export const EditableText: React.FC<EditableTextProps> = ({ 
  location, 
  defaultValue,
  as: Component = 'div',
  className = ''
}) => {
  const content = getContentValue(location, defaultValue);
  
  return <Component className={className}>{content}</Component>;
};

interface EditableImageProps {
  location: string;
  defaultSrc: string;
  alt: string;
  className?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  location,
  defaultSrc,
  alt,
  className = ''
}) => {
  const src = getContentValue(location, defaultSrc);
  
  return <img src={src} alt={alt} className={className} />;
};
