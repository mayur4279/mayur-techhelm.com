import React from 'react';
import '../css/Blog.css';

const RecentBlog = () => {
  const blogs = [
    {
      title: 'The Importance of Transparency in VAPT Services',
      description:
        'The integrity of your company’s cybersecurity efforts in the modern digital era depends on openness and trust, particularly regarding Vulnerability.',
      image: 'https://via.placeholder.com/150',
      buttonText: 'READ MORE',
    },
    {
      title: 'Boost Your Security Strategy with VAPT',
      description:
        'The security of the data and systems within your organization is critical in today’s digital environment. It is now imperative to integrate strong cybersecurity.',
      image: 'https://via.placeholder.com/150',
      buttonText: 'READ MORE',
    },
    {
      title: 'Unlock The Importance of Continuous VAPT Testing and Monitoring',
      description:
        'Sustaining a strong defence in the quickly changing field of cybersecurity calls for more than just routine evaluations. It is essential to conduct ongoing monitoring.',
      image: 'https://via.placeholder.com/150',
      buttonText: 'READ MORE',
    },
  ];

  return (
    <div className="recent-blog">
      <div className="blog-title">Recent Blog</div>
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="blog-image-wrapper">
              <div
                className="blog-image"
                style={{ backgroundImage: `url(${blog.image})` }}
              ></div>
            </div>
            <div className="blog-content">
              <div className="blog-heading">{blog.title}</div>
              <div className="blog-description">{blog.description}</div>
              <div className="blog-button-wrapper">
                <div className="blog-button">{blog.buttonText}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
