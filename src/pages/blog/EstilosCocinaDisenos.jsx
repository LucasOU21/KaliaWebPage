// src/pages/blog/EstilosCocinaDisenos.jsx - Complete second blog post
import React from 'react';
import { Link } from 'react-router-dom';

const EstilosCocinaDisenos = () => {
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
                  <img src="/images/blog/Klinger.jpg" alt="Klinger Mallqui" />
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
              Principales Estilos de Cocina: Diseños que Inspiran
            </h2>

            {/* Featured image */}
            <div className="featured-image">
              <img 
                src="/images/blog/post-2.jpg" 
                alt="Principales Estilos de Cocina: Diseños que Inspiran"
                draggable="false"
              />
            </div>

            {/* Blog post contents */}
            <div className="post-content">
              <p className="content-paragraph">El diseño de las cocinas ha evolucionado a lo largo de los años para adaptarse a los gustos y necesidades de cada persona. Desde estilos modernos y minimalistas hasta rústicos y acogedores, las cocinas reflejan la personalidad y estilo de vida de quienes las habitan. A continuación, exploramos los principales estilos de cocina que destacan por su funcionalidad y estética.</p>
              
              <p className="content-paragraph bold">1. Estilo Moderno</p>
              
              <p className="content-paragraph">El estilo moderno se caracteriza por su enfoque minimalista, líneas limpias y diseños funcionales. Este estilo utiliza materiales como el acero inoxidable, el vidrio y superficies lisas.</p>
              
              <p className="content-paragraph">Colores predominantes: Blanco, negro, gris y tonos neutros.</p>
              
              <p className="content-paragraph">Elementos clave: Encimeras de cuarzo, electrodomésticos integrados, y armarios sin tiradores.</p>
              
              <p className="content-paragraph">Ideal para: Espacios pequeños o quienes buscan una cocina con un diseño sofisticado y actual.</p>
              
              <p className="content-paragraph bold">2. Estilo Rústico</p>
              
              <p className="content-paragraph">El estilo rústico evoca calidez y tradición, inspirándose en las cocinas campestres. Es perfecto para quienes buscan un ambiente acogedor y natural.</p>
              
              <p className="content-paragraph">Materiales destacados: Madera maciza, piedra natural y cerámica artesanal.</p>
              
              <p className="content-paragraph">Colores predominantes: Tonos tierra, beige, crema y verde olivo.</p>
              
              <p className="content-paragraph">Elementos clave: Viguetas vistas, fregaderos de porcelana y detalles decorativos hechos a mano.</p>
              
              <p className="content-paragraph">Ideal para: Espacios amplios y amantes de la decoración tradicional.</p>
              
              <p className="content-paragraph bold">3. Estilo Industrial</p>
              
              <p className="content-paragraph">Inspirado en los almacenes y fábricas, el estilo industrial combina materiales expuestos y un aire urbano. Es una opción audaz y con mucho carácter.</p>
              
              <p className="content-paragraph">Materiales destacados: Acero inoxidable, ladrillo visto y madera recuperada.</p>
              
              <p className="content-paragraph">Colores predominantes: Grises, negros y marrones.</p>
              
              <p className="content-paragraph">Elementos clave: Lámparas colgantes metálicas, estanterías abiertas y detalles vintage.</p>
              
              <p className="content-paragraph">Ideal para: Cocinas abiertas y espacios tipo loft.</p>
              
              <p className="content-paragraph bold">4. Estilo Clásico</p>
              
              <p className="content-paragraph">El estilo clásico nunca pasa de moda y se distingue por su elegancia y atemporalidad. Este diseño equilibra detalles ornamentales con funcionalidad.</p>
              
              <p className="content-paragraph">Materiales destacados: Madera lacada, granito y azulejos decorativos.</p>
              
              <p className="content-paragraph">Colores predominantes: Blanco, crema y tonos pastel.</p>
              
              <p className="content-paragraph">Elementos clave: Molduras en los armarios, tiradores de bronce o porcelana y una iluminación cálida.</p>
              
              <p className="content-paragraph">Ideal para: Quienes buscan un espacio refinado y acogedor.</p>
              
              <p className="content-paragraph bold">5. Estilo Minimalista</p>
              
              <p className="content-paragraph">"Menos es más" es la filosofía del estilo minimalista. Este diseño apuesta por la simplicidad y la funcionalidad sin sacrificar la estética.</p>
              
              <p className="content-paragraph">Colores predominantes: Blanco, gris y tonos monocromáticos.</p>
              
              <p className="content-paragraph">Elementos clave: Encimeras despejadas, armarios ocultos y electrodomésticos integrados.</p>
              
              <p className="content-paragraph">Ideal para: Espacios modernos y personas que prefieren un diseño limpio y ordenado.</p>
              
              <p className="content-paragraph bold">6. Estilo Mediterráneo</p>
              
              <p className="content-paragraph">Inspirado en las cocinas de la región mediterránea, este estilo combina colores vibrantes y materiales naturales, creando un ambiente fresco y relajado.</p>
              
              <p className="content-paragraph">Materiales destacados: Azulejos pintados a mano, madera clara y terracota.</p>
              
              <p className="content-paragraph">Colores predominantes: Blanco, azul, amarillo y verde.</p>
              
              <p className="content-paragraph">Elementos clave: Detalles de hierro forjado, plantas aromáticas y ventanas amplias.</p>
              
              <p className="content-paragraph">Ideal para: Cocinas luminosas y quienes buscan un estilo alegre y vibrante.</p>
              
              <p className="content-paragraph bold">7. Estilo Escandinavo</p>
              
              <p className="content-paragraph">El estilo escandinavo es conocido por su enfoque funcional, diseños simples y el uso de luz natural para crear un espacio cálido y acogedor.</p>
              
              <p className="content-paragraph">Materiales destacados: Madera clara, superficies blancas y textiles naturales.</p>
              
              <p className="content-paragraph">Colores predominantes: Blanco, gris claro y tonos pastel.</p>
              
              <p className="content-paragraph">Elementos clave: Estanterías abiertas, lámparas colgantes y decoración minimalista.</p>
              
              <p className="content-paragraph">Ideal para: Cocinas pequeñas y espacios que buscan maximizar la luz.</p>
              
              <p className="content-paragraph bold">8. Estilo Ecléctico</p>
              
              <p className="content-paragraph">Este estilo permite mezclar diferentes diseños y materiales, creando un espacio único que refleja la personalidad de los propietarios.</p>
              
              <p className="content-paragraph">Materiales destacados: Combinaciones de madera, metal y vidrio.</p>
              
              <p className="content-paragraph">Colores predominantes: Una paleta variada y combinaciones inesperadas.</p>
              
              <p className="content-paragraph">Elementos clave: Decoración personalizada, muebles vintage y acentos llamativos.</p>
              
              <p className="content-paragraph">Ideal para: Quienes quieren una cocina única y fuera de lo convencional.</p>
              
              <p className="content-paragraph bold">Conclusión</p>
              
              <p className="content-paragraph">Cada estilo de cocina tiene su propia esencia y ofrece diferentes ventajas según las necesidades y preferencias de cada persona. En Kalia Reformas y Decoración, te ayudamos a encontrar el estilo perfecto para tu cocina, asegurándote de que combine funcionalidad, belleza y tu toque personal. ¡Convierte tu cocina en un espacio que inspire cada día!</p>
            </div>

            <div className="tags-section">
              {/* Blog post tags */}
              <div className="tags-container">
                <span className="tag">Moderno</span>
                <span className="tag">Rústico</span>
                <span className="tag">Industrial</span>
                <span className="tag">Acero</span>
                <span className="tag">Madera</span>
                <span className="tag">Cuarzo</span>
                <span className="tag">Minimalista</span>
                <span className="tag">Sofisticado</span>
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
            <Link to="/blog/tendencias-suelos-laminados-tarimas-flotantes" className="related-card">
              <div className="related-image">
                <img 
                  src="/images/blog/post-3.jpg" 
                  alt="Tendencias en Suelos Laminados y Tarimas Flotantes: Elegancia y Funcionalidad para Tu Hogar"
                  draggable="false"
                />
              </div>
              <div className="related-content">
                <h3 className="related-card-title">
                  Tendencias en Suelos Laminados y Tarimas Flotantes: Elegancia y Funcionalidad para Tu Hogar
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

export default EstilosCocinaDisenos;