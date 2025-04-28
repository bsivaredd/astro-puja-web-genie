
interface ContentItem {
  id: string;
  type: 'text' | 'image';
  location: string;
  content: string;
  description: string;
}

// Get website content from localStorage
export const getWebsiteContent = (): ContentItem[] => {
  const storedContent = localStorage.getItem('websiteContent');
  return storedContent ? JSON.parse(storedContent) : [];
};

// Get a specific content item by location ID
export const getContentByLocation = (location: string): ContentItem | undefined => {
  const allContent = getWebsiteContent();
  return allContent.find(item => item.location === location);
};

// Get content value by location (convenience method for components)
export const getContentValue = (location: string, defaultValue: string = ''): string => {
  const contentItem = getContentByLocation(location);
  return contentItem ? contentItem.content : defaultValue;
};

// Save content items back to localStorage
export const saveWebsiteContent = (content: ContentItem[]): void => {
  localStorage.setItem('websiteContent', JSON.stringify(content));
};

// Update a specific content item
export const updateContent = (location: string, newContent: string): void => {
  const allContent = getWebsiteContent();
  const updatedContent = allContent.map(item => 
    item.location === location ? { ...item, content: newContent } : item
  );
  saveWebsiteContent(updatedContent);
};
