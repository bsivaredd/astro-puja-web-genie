
import React, { useState, useEffect } from 'react';
import { Edit, Save } from 'lucide-react';
import { useNotification } from '../../context/NotificationContext';

interface ContentItem {
  id: string;
  type: 'text' | 'image';
  location: string;
  content: string;
  description: string;
}

const ContentEditor: React.FC = () => {
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addNotification } = useNotification();
  
  useEffect(() => {
    // Load content from localStorage or use default content
    const storedContent = localStorage.getItem('websiteContent');
    if (storedContent) {
      setContentItems(JSON.parse(storedContent));
    } else {
      // Default content items for the website
      const defaultContent: ContentItem[] = [
        {
          id: '1',
          type: 'text',
          location: 'home-hero-title',
          content: 'Connect with the Cosmos',
          description: 'Hero section main title'
        },
        {
          id: '2',
          type: 'text',
          location: 'home-hero-subtitle',
          content: 'Ancient Wisdom for Modern Lives',
          description: 'Hero section subtitle'
        },
        {
          id: '3',
          type: 'image',
          location: 'home-hero-image',
          content: 'https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg',
          description: 'Hero section background image'
        },
        {
          id: '4',
          type: 'text',
          location: 'about-heading',
          content: 'About AstroPuja',
          description: 'About section heading'
        },
        {
          id: '5',
          type: 'text',
          location: 'about-content',
          content: 'AstroPuja is your trusted source for authentic astrological insights and traditional pujas. Our expert astrologers and pandits bring centuries of knowledge to address your concerns.',
          description: 'About section content'
        },
        {
          id: '6',
          type: 'image',
          location: 'about-image',
          content: 'https://images.pexels.com/photos/6245607/pexels-photo-6245607.jpeg',
          description: 'About section image'
        },
      ];
      
      setContentItems(defaultContent);
      localStorage.setItem('websiteContent', JSON.stringify(defaultContent));
    }
    setIsLoading(false);
  }, []);

  const handleEditClick = (id: string) => {
    setEditingItemId(id);
  };

  const handleContentChange = (id: string, newContent: string) => {
    const updatedItems = contentItems.map(item => 
      item.id === id ? { ...item, content: newContent } : item
    );
    
    setContentItems(updatedItems);
  };

  const handleSaveClick = (id: string) => {
    // Save to localStorage
    localStorage.setItem('websiteContent', JSON.stringify(contentItems));
    setEditingItemId(null);
    addNotification('success', 'Content updated successfully!');
    
    // In a real application, you would save to a database here
    console.log('Content saved:', contentItems.find(item => item.id === id));
  };

  const handleFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // In a real app, you'd upload this to a server/storage
    // For this demo, we'll use a FileReader to convert to data URL
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedItems = contentItems.map(item => 
        item.id === id ? { ...item, content: reader.result as string } : item
      );
      
      setContentItems(updatedItems);
    };
    reader.readAsDataURL(file);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading content...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Website Content Management</h2>
        <p className="text-gray-600 mt-1">Edit text and images that appear on the website</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contentItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.description}</div>
                  <div className="text-sm text-gray-500">{item.location}</div>
                </td>
                <td className="px-6 py-4">
                  {editingItemId === item.id ? (
                    item.type === 'text' ? (
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={item.content}
                        onChange={(e) => handleContentChange(item.id, e.target.value)}
                        rows={3}
                      />
                    ) : (
                      <div className="flex flex-col items-start space-y-2">
                        <img 
                          src={item.content} 
                          alt={item.description} 
                          className="h-20 w-auto object-cover rounded"
                        />
                        <input
                          type="file"
                          accept="image/*"
                          className="text-sm"
                          onChange={(e) => handleFileChange(item.id, e)}
                        />
                      </div>
                    )
                  ) : (
                    item.type === 'text' ? (
                      <div className="text-sm text-gray-900 max-w-md break-words">
                        {item.content}
                      </div>
                    ) : (
                      <img 
                        src={item.content} 
                        alt={item.description}
                        className="h-16 w-auto object-cover rounded"
                      />
                    )
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.type === 'text' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {editingItemId === item.id ? (
                    <button
                      onClick={() => handleSaveClick(item.id)}
                      className="text-green-600 hover:text-green-900 flex items-center justify-end ml-auto"
                    >
                      <Save className="h-5 w-5 mr-1" />
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditClick(item.id)}
                      className="text-purple-600 hover:text-purple-900 flex items-center justify-end ml-auto"
                    >
                      <Edit className="h-5 w-5 mr-1" />
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentEditor;
