import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Understanding the Impact of Planetary Transits on Your Life',
    excerpt: 'Learn how the movement of planets affects different aspects of your life and how to prepare for upcoming transits.',
    image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Dr. Ravi Shankar',
    date: 'April 15, 2025',
    readTime: '8 min read',
    category: 'Astrology'
  },
  {
    id: 2,
    title: 'The Science Behind Gemstones and Their Healing Properties',
    excerpt: 'Discover how gemstones interact with your energy field and why specific stones are recommended based on your birth chart.',
    image: 'https://images.pexels.com/photos/965981/pexels-photo-965981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Maya Desai',
    date: 'March 28, 2025',
    readTime: '6 min read',
    category: 'Gemstones'
  },
  {
    id: 3,
    title: 'Sacred Rituals: How Pujas Transform Your Spiritual Energy',
    excerpt: 'Explore the ancient rituals of pujas and how they can be used to invoke positive energies and spiritual transformation.',
    image: 'https://images.pexels.com/photos/2901134/pexels-photo-2901134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Pandit Suresh Joshi',
    date: 'April 2, 2025',
    readTime: '10 min read',
    category: 'Pujas'
  }
];

const BlogPosts: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Latest from Our Blog
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, wisdom, and guidance from our experts to help you on your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link to={`/blog/${post.id}`}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-700 font-medium flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </p>
                      <p className="text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors inline-flex items-center font-medium"
          >
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;