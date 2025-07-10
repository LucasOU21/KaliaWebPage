import React from 'react';
import { Link } from 'react-router-dom';

const TendenciasSuelosLaminados = () => {
  return (
    <>
      <style jsx>{`
        /* Import Google fonts */
        @import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        /* Quick fix for navbar overlapping blog content */
        .blog-section {
          padding-top: 9rem !important;
        }
        
        @media (max-width: 768px) {
          .blog-section {
            padding-top: 12rem !important;
          }
        }
        
        /* Custom styles for Kalia branding */
        :root {
          --kalia-primary: #daa520;
          --kalia-secondary: #333333;
          --kalia-accent: #f5f5f5;
        }
        
        h2, h3, h4 {
          font-family: 'Georgia', serif !important;
        }
        
        p, span, a, li {
          font-family: 'Poppins', sans-serif !important;
        }
        
        a:hover {
          color: var(--kalia-primary) !important;
        }

        /* Page styling */
        .page-container {
          min-height: 100vh;
          background-color: #F8F1E7;
        }

        .dark .page-container {
          background-color: #374151;
        }

        .blog-content {
          max-width: 48rem;
          margin: 0 auto;
          padding: 0 1rem 3rem 1rem;
        }

        @media (min-width: 640px) {
          .blog-content {
            padding: 0 1.5rem 3rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .blog-content {
            padding: 0 2rem 3.5rem 2rem;
          }
        }

        .article-container {
          max-width: 42rem;
        }

        .author-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .author-info {
          display: flex;
          width: 100%;
          gap: 1.25rem;
          align-items: center;
        }

        @media (min-width: 640px) {
          .author-info {
            gap: 0.75rem;
          }
        }

        .author-avatar {
          display: inline-block;
          height: 3rem;
          width: 3rem;
          overflow: hidden;
          border-radius: 50%;
        }

        .author-avatar img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-details {
          flex-grow: 1;
        }

        .author-name {
          font-weight: 700;
          color: #404040;
        }

        .dark .author-name {
          color: #d4d4d8;
        }

        .post-meta {
          font-size: 0.75rem;
          color: #71717a;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .post-meta li {
          position: relative;
          display: inline-block;
          padding-right: 1.5rem;
        }

        .post-meta li::before {
          content: '';
          position: absolute;
          right: 0.5rem;
          top: 50%;
          width: 0.25rem;
          height: 0.25rem;
          transform: translateY(-50%);
          border-radius: 50%;
          background-color: #d4d4d8;
        }

        .post-meta li:last-child {
          padding-right: 0;
        }

        .post-meta li:last-child::before {
          display: none;
        }

        .dark .post-meta {
          color: #a3a3a3;
        }

        .dark .post-meta li::before {
          background-color: #525252;
        }

        .post-title {
          margin-bottom: 0.75rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #262626;
        }

        .dark .post-title {
          color: #e5e5e5;
        }

        @media (min-width: 768px) {
          .post-title {
            font-size: 1.875rem;
          }
        }

        .featured-image {
          margin-bottom: 2rem;
        }

        .featured-image img {
          width: 100%;
          border-radius: 0.75rem;
          object-fit: cover;
        }

        .post-content {
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        @media (min-width: 768px) {
          .post-content {
            margin-bottom: 2rem;
            gap: 2rem;
          }
        }

        .content-paragraph {
          font-size: 1.125rem;
          color: #404040;
          line-height: 1.6;
        }

        .content-paragraph.bold {
          font-weight: 700;
        }

        .dark .content-paragraph {
          color: #d4d4d8;
        }

        .tags-section {
          margin: 0 auto;
          display: grid;
          max-width: 64rem;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .tags-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0;
          }
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 0.5rem;
        }

        @media (min-width: 640px) {
          .tags-container {
            flex-wrap: nowrap;
            align-items: center;
            gap: 0;
          }
        }

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          border-radius: 0.5rem;
          background-color: rgba(163, 163, 163, 0.3);
          padding: 0.375rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: #404040;
          outline: none;
        }

        .dark .tag {
          background-color: rgba(64, 64, 64, 0.6);
          color: #d4d4d8;
        }

        /* Related Articles Section */
        .related-section {
          max-width: 48rem;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }

        @media (min-width: 640px) {
          .related-section {
            padding: 2.5rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .related-section {
            padding: 3.5rem 2rem;
          }
        }

        .related-header {
          margin-bottom: 2.5rem;
          max-width: 42rem;
        }

        .related-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #262626;
          line-height: 1.2;
        }

        .dark .related-title {
          color: #e5e5e5;
        }

        @media (min-width: 768px) {
          .related-title {
            font-size: 2.25rem;
            line-height: 1.25;
          }
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .related-card {
          display: flex;
          height: 100%;
          flex-direction: column;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          background-color: white;
          padding: 1rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .related-card:hover {
          border-color: #d4d4d8;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .dark .related-card {
          border-color: #404040;
          background-color: #262626;
        }

        .dark .related-card:hover {
          border-color: #525252;
        }

        .related-image {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 0.75rem;
        }

        .related-image img {
          height: 100%;
          width: 100%;
          border-radius: 0.75rem;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .related-card:hover .related-image img {
          transform: scale(1.05);
        }

        .related-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .related-card-title {
          margin-top: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          color: #262626;
          word-break: break-words;
          hyphens: auto;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        @media (min-width: 640px) {
          .related-card-title {
            font-size: 1.125rem;
          }
        }

        .dark .related-card-title {
          color: #e5e5e5;
        }

        .related-date {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: #525252;
        }

        .dark .related-date {
          color: #a3a3a3;
        }
      `}</style>

      <div className="page-container">
        <section className="blog-content blog-section">
          <div className="article-container">
            <div className="author-section">
              <div className="author-info">
                {/* Avatar with Klinger image */}
                <div className="author-avatar">
                  <img src="/src/assets/images/blog/Klinger.jpg" alt="Klinger Mallqui" />
                </div>
                <div className="author-details">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <div>
                      {/* Post metadata and author info */}
                      <span className="author-name">Klinger Mallqui</span>
                      <ul className="post-meta">
                        <li>Feb 11, 2025</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog post title */}
            <h2 className="post-title">
              Tendencias en Suelos Laminados y Tarimas Flotantes: Elegancia y Funcionalidad para Tu Hogar
            </h2>

            {/* Featured image */}
            <div className="featured-image">
              <img 
                src="/src/assets/images/blog/post-3.jpg" 
                alt="Tendencias en Suelos Laminados y Tarimas Flotantes"
                draggable="false"
              />
            </div>

            {/* Blog post contents */}
            <div className="post-content">
              <p className="content-paragraph">Los suelos laminados y las tarimas flotantes se han convertido en una de las opciones más populares en los proyectos de reformas y decoración. Su combinación de estilo, durabilidad y facilidad de instalación los hace ideales para transformar cualquier espacio. Si estás considerando renovar el suelo de tu hogar, estas son las tendencias actuales que no puedes pasar por alto.</p>
              
              <p className="content-paragraph bold">1. Colores Naturales y Tonos Neutros</p>
              
              <p className="content-paragraph">La naturaleza sigue siendo una gran fuente de inspiración en el diseño de interiores, y los suelos laminados no son la excepción. Los tonos madera natural, como el roble claro, el nogal y el pino, aportan calidez y una sensación de conexión con el entorno.</p>
              
              <p className="content-paragraph">Tendencia destacada: Suelos con acabados mate que resalta la textura y los detalles de la madera, manteniendo un aspecto natural.</p>
              
              <p className="content-paragraph">Ideal para: Crear ambientes luminosos y acogedores en cualquier estancia.</p>
              
              <p className="content-paragraph bold">2. Formatos y Diseños Originales</p>
              
              <p className="content-paragraph">Las nuevas tecnologías han permitido crear suelos laminados con diseños más sofisticados y variados. Entre las opciones más demandadas están:</p>
              
              <p className="content-paragraph">Formato XXL: Lamas más anchas y largas que dan una sensación de amplitud.</p>
              
              <p className="content-paragraph">Patrones geométricos: Diseños como espiga o chevron (puntas de flecha) están ganando popularidad, añadiendo dinamismo y elegancia al espacio.</p>
              
              <p className="content-paragraph">Reproducción realista: Gracias a técnicas avanzadas, los laminados imitan texturas como piedra, mármol o concreto.</p>
              
              <p className="content-paragraph bold">3. Resistentes y Funcionales</p>
              
              <p className="content-paragraph">Los fabricantes de suelos laminados han mejorado la tecnología de resistencia al desgaste, los arañazos y la humedad, haciendo de estos materiales una opción duradera y práctica.</p>
              
              <p className="content-paragraph">Tendencia clave: Laminados resistentes al agua, perfectos para cocinas y baños.</p>
              
              <p className="content-paragraph">Ventaja adicional: Ideales para familias con niños o mascotas, ya que ofrecen una alta resistencia al uso diario.</p>
              
              <p className="content-paragraph bold">4. Efecto Desgastado o Vintage</p>
              
              <p className="content-paragraph">El estilo vintage sigue marcando tendencia, y los suelos con un efecto desgastado o envejecido añaden carácter a los espacios.</p>
              
              <p className="content-paragraph">Características: Tablones con vetas marcadas, nudos visibles y tonos desgastados que simulan el paso del tiempo.</p>
              
              <p className="content-paragraph">Aplicación ideal: Espacios rústicos o de estilo industrial.</p>
              
              <p className="content-paragraph bold">5. Suelos Laminados Sostenibles</p>
              
              <p className="content-paragraph">El enfoque hacia la sostenibilidad ha llevado a una mayor demanda de suelos laminados fabricados con materiales reciclados o certificados.</p>
              
              <p className="content-paragraph">Tendencia verde: Laminados con procesos de fabricación responsables y bajas emisiones.</p>
              
              <p className="content-paragraph">Para consumidores conscientes: Una opción que combina diseño atractivo con compromiso ambiental.</p>
              
              <p className="content-paragraph bold">6. Combinaciones de Colores y Materiales</p>
              
              <p className="content-paragraph">Para los más atrevidos, combinar suelos laminados con otros materiales, como baldosas hidráulicas o vinilos decorativos, crea un contraste visual único. Es una forma de delimitar áreas dentro de un espacio abierto o de añadir un toque personalizado.</p>
              
              <p className="content-paragraph">7. Ventajas de Elegir Suelos Laminados y Tarimas Flotantes</p>
              
              <p className="content-paragraph">Fácil instalación: Gracias al sistema de clic, estos suelos pueden instalarse rápidamente sin necesidad de obras complejas.</p>
              
              <p className="content-paragraph">Económicos: Son una alternativa más accesible que los suelos de madera maciza o piedra natural.</p>
              
              <p className="content-paragraph">Versatilidad: Se adaptan a cualquier estilo de decoración, desde el minimalista hasta el rústico.</p>
              
              <p className="content-paragraph bold">Conclusión</p>
              
              <p className="content-paragraph">Los suelos laminados y las tarimas flotantes son una opción versátil, moderna y práctica que puede transformar el ambiente de tu hogar. Con una amplia variedad de diseños y tendencias actuales, es fácil encontrar el suelo perfecto para cada espacio. En Kalia Reformas y Decoración, te ayudamos a seleccionar e instalar el suelo que mejor se adapte a tu estilo y necesidades, garantizando resultados impecables. ¡Haz que tus suelos hablen por ti!</p>
            </div>

            <div className="tags-section">
              {/* Blog post tags */}
              <div className="tags-container">
                <span className="tag">Laminados</span>
                <span className="tag">Tarimas</span>
                <span className="tag">Decoración</span>
                <span className="tag">Tendencias</span>
                <span className="tag">Madera</span>
                <span className="tag">Diseños</span>
                <span className="tag">Espiga</span>
                <span className="tag">Chevron</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles section */}
        <section className="related-section">
          <div className="related-header">
            <h2 className="related-title">Artículos Relacionados</h2>
          </div>

          <div className="related-grid">
            <Link to="/blog/estilos-cocina-disenos-inspiran" className="related-card">
              <div className="related-image">
                <img 
                  src="/src/assets/images/blog/post-2.jpg" 
                  alt="Principales Estilos de Cocina: Diseños que Inspiran"
                  draggable="false"
                />
              </div>
              <div className="related-content">
                <h3 className="related-card-title">
                  Principales Estilos de Cocina: Diseños que Inspiran
                </h3>
                <p className="related-date">Feb 11, 2025</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default TendenciasSuelosLaminados;