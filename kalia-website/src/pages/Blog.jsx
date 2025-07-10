// src/pages/Blog.jsx - Complete blog page matching the Astro design
import React, { useEffect } from 'react';

const Blog = () => {
  // Blog posts data matching the HTML
  const blogPosts = [
    {
      id: "estilos-cocina-disenos-inspiran",
      title: "Principales Estilos de Cocina: Diseños que Inspiran",
      description: "El diseño de las cocinas ha evolucionado a lo largo de los años para adaptarse a los gustos y necesidades de cada persona.",
      author: "Klinger Mallqui",
      pubDate: "Feb 11, 2025",
      cardImage: "/src/assets/images/blog/post-2.jpg",
      cardImageAlt: "Estilos de cocina: diseños que inspiran",
      authorImage: "/src/assets/images/blog/Klinger.jpg"
    },
    {
      id: "tendencia-suelos-laminados-tarimas-flotantes",
      title: "Tendencias en Suelos Laminados y Tarimas Flotantes: Elegancia y Funcionalidad para Tu Hogar",
      description: "Los suelos laminados y las tarimas flotantes se han convertido en una de las opciones más populares en los proyectos de reformas y decoración.",
      author: "Klinger Mallqui",
      pubDate: "Feb 11, 2025",
      cardImage: "/src/assets/images/blog/post-3.jpg",
      cardImageAlt: "Tendencias en Suelos Laminados y Tarimas Flotantes: Elegancia y Funcionalidad para Tu Hogar",
      authorImage: "/src/assets/images/blog/Klinger.jpg"
    }
  ];

  // Set page title on mount
  useEffect(() => {
    document.title = "Blog | Kalia Reformas y Decoración";
  }, []);

  return (
    <>
      <style jsx>{`
        /* Import Google fonts */
        @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        /* Custom styles for Kalia branding */
        :root {
          --kalia-primary: #daa520; /* Gold color for Kalia */
          --kalia-secondary: #333333;
          --kalia-accent: #f5f5f5;
        }
        
        h1, h2, h3, h4 {
          font-family: 'Georgia', serif !important;
        }
        
        p, span, a, li {
          font-family: 'Poppins', sans-serif !important;
        }
        
        a:hover {
          color: var(--kalia-primary) !important;
        }
        
        /* Adjusted spacing for title section */
        .title-section {
          padding-top: 8rem !important; /* Increased padding to lower the title */
          margin-bottom: 2rem;
        }
        
        /* Extra padding for mobile */
        @media (max-width: 768px) {
          .title-section {
            padding-top: 10rem !important;
          }
        }

        .blog-page {
          min-height: 100vh;
          background-color: #F8F1E7;
          font-family: 'Poppins', sans-serif;
        }

        .dark .blog-page {
          background-color: #374151;
        }

        .page-container {
          max-width: 85rem;
          margin: 0 auto;
          padding: 0 1rem;
        }

        @media (min-width: 640px) {
          .page-container {
            padding: 0 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .page-container {
            padding: 0 2rem;
          }
        }

        @media (min-width: 1536px) {
          .page-container {
            max-width: 100%;
          }
        }

        .title-section {
          max-width: 85rem;
          margin: 0 auto;
          padding: 8rem 1rem 2rem 1rem;
        }

        @media (min-width: 640px) {
          .title-section {
            padding: 8rem 1.5rem 2rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .title-section {
            padding: 8rem 2rem 2rem 2rem;
          }
        }

        @media (max-width: 768px) {
          .title-section {
            padding-top: 10rem !important;
          }
        }

        .header-container {
          max-width: 48rem;
          margin: 0 auto;
          text-align: left;
        }

        @media (min-width: 640px) {
          .header-container {
            text-align: center;
          }
        }

        .page-title {
          display: block;
          text-align: center;
          font-size: 2.25rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #171717;
          font-family: 'Georgia', serif;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .dark .page-title {
          color: #e5e5e5;
        }

        @media (min-width: 768px) {
          .page-title {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 1024px) {
          .page-title {
            font-size: 3rem;
          }
        }

        .page-subtitle {
          margin-top: 1rem;
          font-size: 1.125rem;
          color: #525252;
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
        }

        .dark .page-subtitle {
          color: #a3a3a3;
        }

        .blog-section {
          max-width: 85rem;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }

        @media (min-width: 640px) {
          .blog-section {
            padding: 2.5rem 1.5rem 3.5rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .blog-section {
            padding: 2.5rem 2rem 3.5rem 2rem;
          }
        }

        @media (min-width: 1536px) {
          .blog-section {
            max-width: 100%;
          }
        }

        .blog-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }

        @media (min-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .blog-card {
          position: relative;
          display: block;
          border-radius: 0.75rem;
          outline: none;
          transition: all 0.5s ease;
          text-decoration: none;
          cursor: pointer;
        }

        .blog-card:focus-visible {
          ring: 2px solid #6b7280;
        }

        .dark .blog-card:focus-visible {
          ring: 2px solid #e5e7eb;
        }

        .blog-image-container {
          position: relative;
          height: 350px;
          width: 100%;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 0.75rem;
        }

        .blog-image-container::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 10;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(38, 38, 38, 0.7) 0%, transparent 100%);
        }

        .blog-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-image {
          transform: scale(1.1);
        }

        .blog-author-section {
          position: absolute;
          inset: 0;
          top: 0;
          z-index: 10;
        }

        .blog-author-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 1rem;
        }

        @media (min-width: 640px) {
          .blog-author-container {
            padding: 1.5rem;
          }
        }

        .blog-author-info {
          display: flex;
          align-items: center;
        }

        .author-avatar {
          flex-shrink: 0;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 2px solid #fafafa;
        }

        .author-details {
          margin-left: 0.625rem;
        }

        @media (min-width: 640px) {
          .author-details {
            margin-left: 1rem;
          }
        }

        .author-name {
          font-weight: 700;
          color: #fafafa;
          font-family: 'Poppins', sans-serif;
        }

        .author-date {
          font-size: 0.75rem;
          color: rgba(250, 250, 250, 0.8);
          font-family: 'Poppins', sans-serif;
        }

        .blog-content-section {
          position: absolute;
          inset: 0;
          bottom: 0;
          z-index: 10;
        }

        .blog-content-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 1rem;
        }

        @media (min-width: 640px) {
          .blog-content-container {
            padding: 1.5rem;
          }
        }

        .blog-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #fafafa;
          font-family: 'Georgia', serif;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        @media (min-width: 640px) {
          .blog-title {
            font-size: 1.875rem;
          }
        }

        .blog-card:hover .blog-title {
          color: rgba(250, 250, 250, 0.8);
        }

        .blog-description {
          margin-top: 0.5rem;
          color: rgba(250, 250, 250, 0.8);
          font-family: 'Poppins', sans-serif;
          line-height: 1.5;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .blog-grid {
            gap: 1rem;
          }
          
          .blog-image-container {
            height: 300px;
          }
          
          .blog-title {
            font-size: 1rem;
          }
          
          .blog-description {
            font-size: 0.875rem;
          }
        }
      `}</style>

      <div className="blog-page">
        {/* Title section with increased top padding */}
        <section className="title-section">
          <div className="header-container">
            <h1 className="page-title">
              Kalia Transforma: Inspiración, Consejos y Proyectos para tu Hogar
            </h1>

            <p className="page-subtitle">
              Descubre ideas, tendencias y soluciones prácticas para reformar y construir espacios que cuenten tu historia.
            </p>
          </div>
        </section>

        <section className="blog-section">
          {/* Blog posts grid */}
          <div className="blog-grid">
            {blogPosts.map((blogEntry, index) => (
              <a
                key={blogEntry.id}
                className="blog-card"
                href={`/blog/${blogEntry.id}/`}
              >
                {/* The container for the blog post's cover image */}
                <div className="blog-image-container">
                  <img
                    className="blog-image"
                    src={blogEntry.cardImage}
                    alt={blogEntry.cardImageAlt}
                    draggable="false"
                    loading="eager"
                  />
                </div>

                {/* The container for the blog author's avatar and metadata */}
                <div className="blog-author-section">
                  <div className="blog-author-container">
                    <div className="blog-author-info">
                      <div className="author-avatar-container">
                        <img
                          src={blogEntry.authorImage}
                          alt={blogEntry.author}
                          className="author-avatar"
                          draggable="false"
                          loading="lazy"
                        />
                      </div>

                      <div className="author-details">
                        <h4 className="author-name">
                          {blogEntry.author}
                        </h4>
                        <p className="author-date">
                          {blogEntry.pubDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* The container for the blog post's title and description */}
                <div className="blog-content-section">
                  <div className="blog-content-container" style={{ justifyContent: 'flex-end' }}>
                    <h3 className="blog-title">
                      {blogEntry.title}
                    </h3>
                    <p className="blog-description">
                      {blogEntry.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;