import React, { useState, useEffect } from 'react';
import { getContentValue } from '../../utils/contentService';

interface EditableTextProps {
  location: string;
  defaultValue: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  onClick?: () => void;
}

export const EditableText: React.FC<EditableTextProps> = ({ 
  location, 
  defaultValue,
  as: Component = 'div',
  className = '',
  onClick
}) => {
  const content = getContentValue(location, defaultValue);
  
  return (
    <Component 
      className={`${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      data-editable-location={location}
    >
      {content}
    </Component>
  );
};

interface EditableImageProps {
  location: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  location,
  defaultSrc,
  alt,
  className = '',
  onClick
}) => {
  const src = getContentValue(location, defaultSrc);
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${className} ${onClick ? 'cursor-pointer' : ''}`} 
      onClick={onClick}
      data-editable-location={location}
    />
  );
};

// Context to manage editable content state
interface EditableContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  openEditDialog: (location: string, type: 'text' | 'image') => void;
}

export const EditableContext = React.createContext<EditableContextType>({
  isEditMode: false,
  toggleEditMode: () => {},
  openEditDialog: () => {}
});

export const useEditable = () => React.useContext(EditableContext);

interface EditableProviderProps {
  children: React.ReactNode;
}

export const EditableProvider: React.FC<EditableProviderProps> = ({ children }) => {
  const [isEditMode, setIsEditMode] = React.useState(false);

  const toggleEditMode = () => {
    setIsEditMode(prev => !prev);
  };

  const openEditDialog = (location: string, type: 'text' | 'image') => {
    // This would trigger a modal or dialog to edit the content
    console.log(`Editing ${type} at location: ${location}`);
  };

  return (
    <EditableContext.Provider value={{ isEditMode, toggleEditMode, openEditDialog }}>
      {children}
    </EditableContext.Provider>
  );
};
