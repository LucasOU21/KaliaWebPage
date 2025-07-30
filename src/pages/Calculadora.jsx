import React, { useState, useEffect } from 'react';
import '../styles/calculadora.css';
import EmailService from '../services/emailService';

// SecualOptions component (unchanged)
const SecualOptions = ({ options }) => {
  return (
    <>
      {options && options.map((o, index) => (
        <option 
          key={index}
          value={o.precio} 
          data-nombre={o.id} 
          data-unidad={o.tipoUnidad}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{o.nombre}
        </option>
      ))}
    </>
  );
};

const CalculadoraContent = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    codigopostal: '',
    email: ''
  });

  // Check for dark mode (unchanged)
  useEffect(() => {
    const checkDarkMode = () => {
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      
      const hasDarkClass = htmlElement.classList.contains('dark') || 
                          bodyElement.classList.contains('dark') ||
                          document.querySelector('.dark') !== null;
      
      setIsDarkMode(hasDarkClass);
    };

    // Check initially
    checkDarkMode();

    // Create observer to watch for class changes
    const observer = new MutationObserver(checkDarkMode);
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Data structure (unchanged)
  const tipoInstalacion = [
    {
      id: "estandar",
      nombre: "Estándar",
      svg: "estandar",
      beneficios: [
        "Instalación rápida y eficiente",
        "Ajustes esenciales para un buen acabado",
        "Servicio confiable a un precio accesible",
      ],
      instalaciones: [
        {
          nombre: "Muebles",
          subtipos: [
            { id: "mueblesaltos", nombre: "Muebles Altos", precio: 60, tipoUnidad: "metro lineal" },
            { id: "mueblesbajo", nombre: "Muebles Bajos", precio: 60, tipoUnidad: "metro lineal" },
            { id: "muebles columnas", nombre: "Muebles Columnas", precio: 100, tipoUnidad: "metro lineal" },
            { id: "encimerademadera", nombre: "Encimera de madera", precio: 35, tipoUnidad: "metro lineal" },
            { id: "copete", nombre: "Copete", precio: 5, tipoUnidad: "metro lineal" },
            { id: "panelesembellecedores", nombre: "Paneles Embellecedores", precio: 20, tipoUnidad: "unidad" },
            { id: "cajoneras", nombre: "Cajoneras", precio: 90, tipoUnidad: "metro lineal" },
            { id: "zocalo", nombre: "Zócalo", precio: 5, tipoUnidad: "metro lineal" },
          ],
        },
        {
          nombre: "Electrodomésticos Encastrables",
          subtipos: [
            { id: "vitroceramica", nombre: "Vitrocerámica", precio: 15, tipoUnidad: "unidad" },
            { id: "horno", nombre: "Horno", precio: 15, tipoUnidad: "unidad" },
            { id: "microondas", nombre: "Microondas", precio: 15, tipoUnidad: "unidad" },
            { id: "lavadora", nombre: "Lavadora", precio: 15, tipoUnidad: "unidad" },
            { id: "calientaplatos", nombre: "Calientaplatos", precio: 15, tipoUnidad: "unidad" },
            { id: "vinoteca", nombre: "Vinoteca", precio: 15, tipoUnidad: "unidad" },
            { id: "lavavajillas", nombre: "Lavavajillas", precio: 15, tipoUnidad: "unidad" },
            { id: "campanaencastrable", nombre: "Campana Encastrable", precio: 40, tipoUnidad: "unidad" },
            { id: "campanadecorativa", nombre: "Campana Decorativa", precio: 50, tipoUnidad: "unidad" },
          ],
        },
        {
          nombre: "Electrodomésticos Integrados",
          subtipos: [
            { id: "lavavajillasPanelado", nombre: "Lavavajillas Panelada", precio: 40, tipoUnidad: "unidad" },
            { id: "lavadoraPanelado", nombre: "Lavadora Panelada", precio: 40, tipoUnidad: "unidad" },
            { id: "frigorificoPanelado", nombre: "Frigorífico Panelado", precio: 80, tipoUnidad: "unidad" },
            { id: "campanaextractoraIntegrada", nombre: "Campana Extractora Integrada", precio: 70, tipoUnidad: "unidad" },
          ],
        },
        {
          nombre: "Otros",
          subtipos: [
            { id: "fregadero", nombre: "Fregadero, grifo y plomería", precio: 60, tipoUnidad: "unidad" },
          ],
        },
      ],
    },
    {
      id: "premium",
      nombre: "Premium",
      svg: "premium",
      beneficios: [
        "Ajustes finos en cortes y alineaciones",
        "Nivelación exacta para una estética impecable",
        "Cuidado extra en cada unión y terminación",
      ],
      instalaciones: [
        {
          nombre: "Muebles",
          subtipos: [
            { id: "mueblesaltos", nombre: "Muebles Altos", precio: 75, tipoUnidad: "metro lineal" },
            { id: "mueblesbajo", nombre: "Muebles Bajos", precio: 75, tipoUnidad: "metro lineal" },
            { id: "muebles columnas", nombre: "Muebles Columnas", precio: 125, tipoUnidad: "metro lineal" },
            { id: "encimerademadera", nombre: "Encimera de madera", precio: 65, tipoUnidad: "metro lineal" },
            { id: "copete", nombre: "Copete", precio: 8, tipoUnidad: "metro lineal" },
            { id: "panelesembellecedores", nombre: "Paneles Embellecedores", precio: 25, tipoUnidad: "unidad" },
            { id: "cajoneras", nombre: "Cajoneras", precio: 112, tipoUnidad: "metro lineal" },
            { id: "zocalo", nombre: "Zócalo", precio: 13, tipoUnidad: "metro lineal" },
          ],
        },
        {
          nombre: "Electrodomésticos Encastrables",
          subtipos: [
            { id: "vitroceramica", nombre: "Vitrocerámica", precio: 20, tipoUnidad: "unidad" },
            { id: "horno", nombre: "Horno", precio: 20, tipoUnidad: "unidad" },
            { id: "microondas", nombre: "Microondas", precio: 20, tipoUnidad: "unidad" },
            { id: "lavadora", nombre: "Lavadora", precio: 20, tipoUnidad: "unidad" },
            { id: "calientaplatos", nombre: "Calientaplatos", precio: 20, tipoUnidad: "unidad" },
            { id: "vinoteca", nombre: "Vinoteca", precio: 20, tipoUnidad: "unidad" },
            { id: "lavavajillas", nombre: "Lavavajillas", precio: 20, tipoUnidad: "unidad" },
            { id: "campanaencastrable", nombre: "Campana Encastrable", precio: 50, tipoUnidad: "unidad" },
            { id: "campanadecorativa", nombre: "Campana Decorativa", precio: 70, tipoUnidad: "unidad" },
          ],
        },
        {
          nombre: "Electrodomésticos Integrados",
          subtipos: [
            { id: "lavavajillasPanelado", nombre: "Lavavajillas Panelada", precio: 60, tipoUnidad: "unidad" },
            { id: "lavadoraPanelado", nombre: "Lavadora Panelada", precio: 60, tipoUnidad: "unidad" },
            { id: "frigorificoPanelado", nombre: "Frigorífico Panelado", precio: 120, tipoUnidad: "unidad" },
            { id: "campanaextractoraIntegrada", nombre: "Campana Extractora Integrada", precio: 85, tipoUnidad: "unidad" },
          ],
        },
        {
          nombre: "Otros",
          subtipos: [
            { id: "fregadero", nombre: "Fregadero, grifo y plomería", precio: 75, tipoUnidad: "unidad" },
          ],
        },
      ],
    },
  ];

  // Product state management (unchanged)
  const [productQuantities, setProductQuantities] = useState({});

  // Handle category selection (unchanged)
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentStep(2);
  };

  // Handle product selection (unchanged)
  const handleProductSelect = (event) => {
    const valorSeleccionado = event.target.value;
    const textoSeleccionado = event.target.options[event.target.selectedIndex].text.trim();
    const nombre = event.target.options[event.target.selectedIndex].dataset.nombre;
    const unidad = event.target.options[event.target.selectedIndex].dataset.unidad;

    if (!valorSeleccionado || productList.find(p => p.id === nombre)) return;

    const newProduct = {
      id: nombre,
      nombre: textoSeleccionado,
      precio: parseFloat(valorSeleccionado),
      tipoUnidad: unidad,
      cantidad: 0
    };

    setProductList(prev => [...prev, newProduct]);
    setProductQuantities(prev => ({ ...prev, [nombre]: '' }));
  };

  // Handle quantity change (unchanged)
  const handleQuantityChange = (productId, newQuantity) => {
    // Allow empty string so users can clear the input
    if (newQuantity === '') {
      setProductQuantities(prev => ({ ...prev, [productId]: '' }));
      return;
    }
    const quantity = Math.max(0, parseFloat(newQuantity) || 0);
    setProductQuantities(prev => ({ ...prev, [productId]: quantity }));
  };

  // Calculate total (unchanged)
  const updateTotal = () => {
    const total = productList.reduce((sum, product) => {
      // Handle empty string as 0 for calculation
      const quantity = productQuantities[product.id] === '' ? 0 : (productQuantities[product.id] || 0);
      return sum + (product.precio * quantity);
    }, 0);
    setTotalPrice(total);
  };

  // Remove product (unchanged)
  const removeProduct = (productId) => {
    setProductList(prev => prev.filter(p => p.id !== productId));
    setProductQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[productId];
      return newQuantities;
    });
  };

  // UPDATED: Filter products with valid quantities for email
  const getValidProductsForEmail = () => {
    return productList.filter(product => {
      const quantity = productQuantities[product.id];
      return quantity !== undefined && quantity !== '' && parseFloat(quantity) > 0;
    });
  };

  // UPDATED: Calculate total for valid products only
  const getValidTotalForEmail = () => {
    const validProducts = getValidProductsForEmail();
    return validProducts.reduce((sum, product) => {
      const quantity = productQuantities[product.id] || 0;
      return sum + (product.precio * quantity);
    }, 0);
  };

  // UPDATED: Handle form submission with filtering
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = [];
    
    if (!formData.nombre.trim()) {
      errors.push('Por favor, introduce tu nombre');
    }
    
    const phoneDigits = formData.telefono.replace(/\D/g, '');
    if (phoneDigits.length > 0 && phoneDigits.length !== 9) {
      errors.push('Si proporcionas un teléfono, debe tener 9 dígitos');
    }
    
    if (formData.codigopostal.replace(/\D/g, '').length !== 5) {
      errors.push('Por favor, introduce un código postal de 5 dígitos');
    }
    
    if (formData.email.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.push('Por favor, introduce un email válido');
      }
    }
    
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    // Get only products with valid quantities for email
    const validProducts = getValidProductsForEmail();
    const validTotal = getValidTotalForEmail();

    // Create filtered productQuantities for valid products only
    const validProductQuantities = {};
    validProducts.forEach(product => {
      validProductQuantities[product.id] = productQuantities[product.id];
    });

    // Log the data with filtered products
    console.log('Sending email with filtered data:', {
      cliente: formData.nombre,
      telefono: formData.telefono,
      productos: validProducts, // Only products with quantities > 0
      total: validTotal, // Recalculated total for valid products only
      instalacion: selectedCategory === 'premium' ? 'Premium' : 'Estándar'
    });

    // Send email with filtered data
    try {
      const emailService = new EmailService();
      
      await emailService.sendCalculatorEmail(
        formData,
        validProducts, // Only products with valid quantities
        validTotal, // Recalculated total
        selectedCategory === 'premium' ? 'Premium' : 'Estándar',
        validProductQuantities // Only quantities for valid products
      );

      console.log('✅ Email sent successfully with filtered products');
      
      // Send customer confirmation if email provided
      if (formData.email && formData.email.trim()) {
        try {
          await emailService.sendCustomerConfirmation(
            formData,
            validTotal, // Use filtered total
            selectedCategory === 'premium' ? 'Premium' : 'Estándar'
          );
          console.log('✅ Customer confirmation sent');
        } catch (confirmationError) {
          console.warn('⚠️ Customer confirmation failed (non-critical):', confirmationError);
        }
      }

    } catch (error) {
      console.error('❌ Email failed:', error);
      // Don't show error to user, just proceed normally
    }

    // Continue with your existing flow (unchanged)
    setShowForm(false);
    setShowFinalMessage(true);
    setCurrentStep(3);
  };

  // Reset calculator (unchanged)
  const resetCalculator = () => {
    setCurrentStep(1);
    setSelectedCategory('');
    setProductList([]);
    setProductQuantities({});
    setTotalPrice(0);
    setShowForm(false);
    setShowFinalMessage(false);
    setFormData({
      nombre: '',
      telefono: '',
      codigopostal: '',
      email: ''
    });
  };

  // Update total when quantities change (unchanged)
  useEffect(() => {
    updateTotal();
  }, [productQuantities, productList]);

  return (
    <div className={`calc-container ${isDarkMode ? 'dark' : ''}`}>
      <h1 className="calc-title">Calculadora para tus Presupuestos</h1>
      
      {/* Progress Bar - ALL THREE STEPS */}
      <div className="progress-container">
        <div className="progress-line">
          <div 
            className="progress-line-fill" 
            style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
          />
        </div>
        
        <div className="progress-step">
          <div className={`step-circle ${currentStep >= 1 ? 'active' : 'inactive'}`}>
            1
          </div>
          <div className="step-label">Paquete</div>
          {currentStep > 1 && <div className="step-status">Seleccionada</div>}
        </div>
        
        <div className="progress-step">
          <div className={`step-circle ${currentStep >= 2 ? 'active' : 'inactive'}`}>
            2
          </div>
          <div className="step-label">Servicios</div>
          {currentStep > 2 && <div className="step-status">Agregados</div>}
        </div>
        
        <div className="progress-step">
          <div className={`step-circle ${currentStep >= 3 ? 'active' : 'inactive'}`}>
            3
          </div>
          <div className="step-label">Presupuesto</div>
          {showFinalMessage && <div className="step-status">Enviado</div>}
        </div>
      </div>

      {/* Step 1: Category Selection */}
      {currentStep === 1 && (
        <div className="category-container">
          {tipoInstalacion.map((categoria) => (
            <div
              key={categoria.id}
              onClick={() => handleCategorySelect(categoria.id)}
              className="category-card"
            >
              <div className="category-icon">
                {categoria.svg === "estandar" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path
                        strokeLinecap="round"
                        d="M8 13h8c1.71 0 3.15 1.28 3.35 2.98L20 21.5M8 13c-1.71 0-3.15 1.28-3.35 2.98L4 21.5M8 13v5c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-1"
                      />
                      <circle cx="12" cy="6" r="4" />
                    </g>
                  </svg>
                )}
                {categoria.svg === "premium" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z" />
                      <path strokeLinecap="round" d="M12 16v3" opacity="0.5" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"
                      />
                      <path
                        d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"
                        opacity="0.5"
                      />
                      <path d="M11.146 6.023C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" />
                      <path strokeLinecap="round" d="M18 22H6" opacity="0.5" />
                    </g>
                  </svg>
                )}
              </div>
              <h3 className="category-title">{categoria.nombre}</h3>
              <ul className="benefit-list">
                {categoria.beneficios.map((beneficio, index) => (
                  <li key={index} className="benefit-item">
                    <span className="benefit-check">✓</span>
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Step 2: Product Selection */}
      {currentStep === 2 && selectedCategory && (
        <>
          <div className="product-selection">
            <label htmlFor="product-select" className="select-label">
              Añade tus {selectedCategory === 'premium' ? 'servicios' : 'productos'}
            </label>
            <select
              id="product-select"
              onChange={handleProductSelect}
              value=""
              className="product-select"
            >
              <option value="" disabled>Seleccionar</option>
              {tipoInstalacion
                .find(t => t.id === selectedCategory)
                ?.instalaciones.map((instalacion, index) => {
                  if (instalacion.subtipos !== undefined) {
                    return (
                      <React.Fragment key={index}>
                        <option value={instalacion.nombre} disabled>{instalacion.nombre}</option>
                        <SecualOptions options={instalacion.subtipos} />
                      </React.Fragment>
                    );
                  } else {
                    return (
                      <option 
                        key={index}
                        value={instalacion.precio} 
                        data-nombre={instalacion.id} 
                        data-unidad={instalacion.tipoUnidad}
                      >
                        {instalacion.nombre}
                      </option>
                    );
                  }
                })}
            </select>
          </div>

          {/* Product List */}
          {productList.length > 0 && (
            <div className="product-list-container">
              <div className="list-header">
                <h3 className="list-title">
                  Lista de Servicios - <span className="package-type">{selectedCategory === 'premium' ? 'Premium' : 'Estándar'}</span>
                </h3>
              </div>
              
              {productList.map((product) => (
                <div key={product.id} className="product-item">
                  <div className="product-info">
                    <div className="product-name">{product.nombre}</div>
                    <div className="product-price">
                      precio: {product.tipoUnidad === "metro lineal" ? product.precio.toFixed(2) : product.precio} € / {product.tipoUnidad === "unidad" ? "und." : "ml"}
                    </div>
                  </div>
                  
                  <div className="product-controls">
                    <div className="quantity-control">
                      {product.tipoUnidad === "unidad" ? (
                        <>
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(product.id, (productQuantities[product.id] || 0) - 1)}
                            className="quantity-btn"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          </button>
                          <input
                            type="number"
                            value={productQuantities[product.id] || 0}
                            readOnly
                            className="quantity-input"
                          />
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(product.id, (productQuantities[product.id] || 0) + 1)}
                            className="quantity-btn"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          </button>
                        </>
                      ) : (
                        <input
                          type="number"
                          value={productQuantities[product.id] === '' ? '' : (productQuantities[product.id] || '')}
                          min="0"
                          step="any"
                          onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                          className="quantity-input"
                          placeholder="0.0"
                        />
                      )}
                    </div>
                    
                    <button 
                      type="button" 
                      onClick={() => removeProduct(product.id)}
                      className="delete-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}

              <div className="total-section">
                <div className="total-row">
                  <span>Total</span>
                  <span className="total-amount">{totalPrice.toFixed(2)} €</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#7F8C8D', textAlign: 'right', marginTop: '0.5rem' }}>
                  <strong>und:</strong> unidad / <strong>ml:</strong> metro lineal
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Step 3: Form */}
      {showForm && (
        <div className="contact-form">
          <h3 className="form-title">Te atenderemos</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">Nombre *</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={formData.nombre}
                onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                className="form-input"
                placeholder="Tu nombre" 
                required 
              />
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="telefono" className="form-label">Teléfono *</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono" 
                  value={formData.telefono}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').substring(0, 9);
                    setFormData(prev => ({ ...prev, telefono: value }));
                  }}
                  className="form-input"
                  placeholder="612345678" 
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="codigopostal" className="form-label">Código Postal *</label>
                <input 
                  type="text" 
                  id="codigopostal" 
                  name="codigopostal" 
                  value={formData.codigopostal}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').substring(0, 5);
                    setFormData(prev => ({ ...prev, codigopostal: value }));
                  }}
                  className="form-input"
                  placeholder="28001" 
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="form-input"
                placeholder="tu@email.com"
              />
            </div>

            <div className="button-group">
              <button 
                type="button" 
                onClick={() => {
                  setShowForm(false);
                  setCurrentStep(2);
                }}
                className="btn btn-secondary"
              >
                Atrás
              </button>
              <button 
                type="submit"
                className="btn btn-primary"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Final Message */}
      {showFinalMessage && (
        <div className="success-message">
          <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="success-title">¡Gracias! Nos pondremos en contacto</h3>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="button-group">
        {/* Back Button - Step 2 to Step 1 */}
        {currentStep === 2 && !showForm && (
          <button
            onClick={() => {
              setCurrentStep(1);
              setSelectedCategory('');
              setProductList([]);
              setProductQuantities({});
              setTotalPrice(0);
            }}
            className="btn btn-secondary"
          >
            Atrás
          </button>
        )}

        {/* Reset Button */}
        {showFinalMessage && (
          <button
            onClick={resetCalculator}
            className="btn btn-primary"
          >
            Reiniciar
          </button>
        )}

        {/* Next Button - Step 2 to Form (NO VALIDATION - original condition) */}
        {currentStep === 2 && !showForm && productList.length > 0 && totalPrice > 0 && (
          <button
            onClick={() => {
              setShowForm(true);
              setCurrentStep(3);
            }}
            className="btn btn-primary"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default CalculadoraContent;