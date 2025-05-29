// src/pages/Calculadora.jsx
import React, { useState, useEffect } from 'react';

// SecualOptions component - embedded
const SecualOptions = ({ options }) => {
  return (
    <>
      {options && options.map((option, index) => (
        <option 
          key={index}
          value={option.precio} 
          data-nombre={option.id} 
          data-unidad={option.tipoUnidad}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{option.nombre}
        </option>
      ))}
    </>
  );
};

const Calculadora = () => {
  // State management
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    codigopostal: '',
    email: ''
  });

  // Data structure - exact copy from Astro
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
            { id:"mueblesaltos", nombre: "Muebles Altos", precio: 90, tipoUnidad: "metro lineal" },
            { id:"mueblesbajo", nombre: "Muebles Bajos", precio: 90, tipoUnidad: "metro lineal" },
            { id:"torresdebaldas", nombre: "Torres de baldas", precio: 120, tipoUnidad: "metro lineal" },
            { id:"rodapie", nombre: "Rodapiés", precio: 5, tipoUnidad: "metro lineal" },
            { id:"encimerademadera", nombre: "Encimera de madera", precio: 45, tipoUnidad: "metro lineal" },
            { id:"copete", nombre: "Copete", precio: 3, tipoUnidad: "metro lineal" },
            { id:"panelesembellecedores", nombre: "Paneles Embellecedores", precio: 20, tipoUnidad: "unidad" },
          ],
        },
        {
          nombre: "Electrodomésticos Encastrables",
          subtipos: [
            { id:"vitroceramica",nombre: "Vitrocerámica", precio: 15, tipoUnidad: "unidad" },
            { id:"horno",nombre: "Horno", precio: 15, tipoUnidad: "unidad" },
            { id:"microondas",nombre: "Microondas", precio: 15, tipoUnidad: "unidad" },
            { id:"lavadora",nombre: "Lavadora", precio: 15, tipoUnidad: "unidad" },
            { id:"calientaplatos",nombre: "Calientaplatos", precio: 15, tipoUnidad: "unidad" },
            { id:"vinoteca",nombre: "Vinoteca", precio: 15, tipoUnidad: "unidad" },
            { id:"nevera",nombre: "Nevera", precio: 20, tipoUnidad: "unidad" },
            { id:"lavavajillas",nombre: "Lavavajillas", precio: 15, tipoUnidad: "unidad" },
            { id:"campanadecorativa",nombre: "Campana Decorativa", precio: 40, tipoUnidad: "unidad" },
          ],
        },
        {
          nombre: "Electrodomésticos Integrados",
          subtipos: [
            { id:"lavavajillasPanelado", nombre: "Lavavajillas Panelado", precio: 40, tipoUnidad: "unidad" },
            { id:"lavadoraPanelado", nombre: "Lavadora Panelado", precio: 40, tipoUnidad: "unidad" },
            { id:"frigorificoPanelado", nombre: "Frigorifico Panelado", precio: 80, tipoUnidad: "unidad" },
            { id:"campanaextractoraIntegrada", nombre: "Campana Extractora Integrada", precio: 30, tipoUnidad: "unidad" },
          ],
        },
        { id:"fregadero", nombre: "Fregadero", precio: 50, tipoUnidad: "unidad" },
      ],
    },
  ];

  // Product state management
  const [productQuantities, setProductQuantities] = useState({});

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentStep(2);
  };

  // Handle product selection
  const handleProductSelect = (event) => {
    const valorSeleccionado = event.target.value;
    const textoSeleccionado = event.target.options[event.target.selectedIndex].text.trim();
    const nombre = event.target.options[event.target.selectedIndex].dataset.nombre;
    const unidad = event.target.options[event.target.selectedIndex].dataset.unidad;

    if (productList.find(p => p.id === nombre)) return;

    const newProduct = {
      id: nombre,
      nombre: textoSeleccionado,
      precio: parseFloat(valorSeleccionado),
      tipoUnidad: unidad,
      cantidad: 0
    };

    setProductList(prev => [...prev, newProduct]);
    setProductQuantities(prev => ({ ...prev, [nombre]: 0 }));
  };

  // Handle quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = Math.max(0, parseFloat(newQuantity) || 0);
    setProductQuantities(prev => ({ ...prev, [productId]: quantity }));
  };

  // Calculate total
  const updateTotal = () => {
    const total = productList.reduce((sum, product) => {
      const quantity = productQuantities[product.id] || 0;
      return sum + (product.precio * quantity);
    }, 0);
    setTotalPrice(total);
  };

  // Remove product
  const removeProduct = (productId) => {
    setProductList(prev => prev.filter(p => p.id !== productId));
    setProductQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[productId];
      return newQuantities;
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
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

    // Simulate email sending
    console.log('Sending email with data:', {
      cliente: formData.nombre,
      telefono: formData.telefono,
      productos: productList,
      total: totalPrice,
      instalacion: selectedCategory === 'premium' ? 'Premium' : 'Estándar'
    });

    setShowForm(false);
    setShowFinalMessage(true);
    setCurrentStep(3);
  };

  // Reset calculator
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

  // Update total when quantities change
  useEffect(() => {
    updateTotal();
  }, [productQuantities, productList]);

  return (
    <div className="bg-neutral-200 dark:bg-neutral-800">
      <style jsx>{`
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;    
        }

        /* Match the exact Astro styling */
        .progress-active {
          background-color: #daa520 !important;
        }

        .progress-inactive {
          background-color: rgb(156, 163, 175) !important;
        }

        .text-kalia-gold {
          color: #daa520 !important;
        }

        .bg-kalia-gold {
          background-color: #daa520 !important;
        }

        .border-kalia-gold {
          border-color: #daa520 !important;
        }

        .hover\\:bg-kalia-gold-dark:hover {
          background-color: #c09018 !important;
        }

        .focus\\:border-kalia-gold:focus {
          border-color: #daa520 !important;
        }

        .focus\\:ring-kalia-gold:focus {
          --tw-ring-color: #daa520 !important;
        }

        /* Category button hover effects */
        .category-button:hover {
          transform: scale(1.05);
          border-color: #daa520;
        }

        .dark .category-button:hover {
          border-color: #daa520;
        }
      `}</style>

      {/* Container matching Astro layout exactly */}
      <section 
        id="calculator" 
        className="mx-auto flex max-w-4xl min-h-[calc(100vh-250px)] flex-col justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
      >
        <h2 className="text-center text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-2xl md:leading-tight">
          Calculadora para tus Presupuestos
        </h2>
        
        {/* Progress Bar - Exact match to Astro */}
        <div className="mx-auto my-8 flex min-w-[100%] max-w-screen-md items-start justify-center md:min-w-[50%]">
          <div className="w-full">
            <div className="flex w-full items-center">
              <div
                className={`mx-[-1px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                  currentStep >= 1 ? 'progress-active' : 'progress-inactive'
                }`}
              >
                <span className="text-sm font-bold text-white dark:text-black">1</span>
              </div>
              <div
                className={`mx-4 h-[3px] w-full rounded-lg ${
                  currentStep >= 2 ? 'progress-active' : 'progress-inactive'
                }`}
              />
            </div>
            <div className="mr-4 mt-2">
              <h6 className="text-sm font-bold text-kalia-gold">
                Paquete
              </h6>
              {currentStep > 1 && (
                <p className="text-xs text-gray-500 dark:text-white">
                  Seleccionada
                </p>
              )}
            </div>
          </div>
          
          <div className="w-full">
            <div className="flex w-full items-center">
              <div
                className={`mx-[-1px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                  currentStep >= 2 ? 'progress-active' : 'progress-inactive'
                }`}
              >
                <span className="text-sm font-bold text-white dark:text-black">2</span>
              </div>
              <div
                className={`mx-4 h-[3px] w-full rounded-lg ${
                  currentStep >= 3 ? 'progress-active' : 'progress-inactive'
                }`}
              />
            </div>
            <div className="mr-4 mt-2">
              <h6
                className={`text-sm font-bold ${
                  currentStep >= 2 ? 'text-kalia-gold' : 'text-gray-800 dark:text-gray-400'
                }`}
              >
                Servicios
              </h6>
              {currentStep > 2 && (
                <p className="text-xs text-gray-500 dark:text-white">
                  Agregados
                </p>
              )}
            </div>
          </div>
          
          <div>
            <div className="flex items-center">
              <div
                className={`mx-[-1px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                  currentStep >= 3 ? 'progress-active' : 'progress-inactive'
                }`}
              >
                <span className="text-sm font-bold text-white dark:text-black">3</span>
              </div>
            </div>
            <div className="mt-2">
              <h6 className={`text-sm font-bold ${
                currentStep >= 3 ? 'text-kalia-gold' : 'text-gray-800 dark:text-gray-400'
              }`}>
                Presupuesto
              </h6>
              {showFinalMessage && (
                <p className="text-xs text-gray-500 dark:text-white">
                  Enviado
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Step 1: Category Selection */}
        {currentStep === 1 && (
          <div className="mx-auto mb-8 flex flex-1 min-h-[224px] min-w-[100%] max-w-screen-lg items-center justify-center transition duration-300">
            <div className="mx-auto flex min-w-[100%] max-w-screen-md items-center justify-center">
              <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8">
                {tipoInstalacion.map((categoria) => (
                  <button
                    key={categoria.id}
                    onClick={() => handleCategorySelect(categoria.id)}
                    className="category-button p-5 min-w-[305px] flex cursor-pointer flex-col items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div>
                      {categoria.svg === "estandar" && (
                        <svg
                          className="mx-auto text-kalia-gold"
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
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
                          className="mx-auto text-kalia-gold"
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
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
                      <h5 className="mt-1 text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {categoria.nombre}
                      </h5>
                    </div>

                    <ul className="flex flex-col justify-start gap-y-1 mt-1">
                      {categoria.beneficios.map((beneficio, index) => (
                        <li key={index} className="flex items-center text-xs text-neutral-600 dark:text-neutral-200 text-left">
                          <span className="text-kalia-gold mr-1">✓</span> {beneficio}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Product Selection */}
        {currentStep === 2 && selectedCategory && (
          <>
            <div className="mx-auto mb-8 min-w-[100%] max-w-screen-md items-start transition duration-300 md:min-w-[50%] flex justify-center">
              <form className="mx-auto flex max-w-sm flex-col items-center w-full">
                <label
                  htmlFor={`subtipos${selectedCategory === 'premium' ? 'Premium' : 'Estandar'}`}
                  className="mb-2 block w-[80%] text-sm font-medium text-gray-900 dark:text-white text-center"
                >
                  Añade tus {selectedCategory === 'premium' ? 'servicios' : 'productos'}
                </label>
                <select
                  id={`subtipos${selectedCategory === 'premium' ? 'Premium' : 'Estandar'}`}
                  onChange={handleProductSelect}
                  className="block w-[80%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-kalia-gold focus:ring-kalia-gold dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-kalia-gold dark:focus:ring-kalia-gold"
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
              </form>
            </div>

            {/* Product List */}
            <div className="mx-auto w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8">
              <div className="mb-4 flex items-center justify-center">
                <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
                  Lista de Servicios -
                </h5>
                <span className="text-lg font-bold leading-none text-kalia-gold">
                  &nbsp;{selectedCategory === 'premium' ? 'Premium' : 'Estándar'}
                </span>
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  {productList.map((product) => (
                    <li key={product.id} className="py-2 sm:py-4">
                      <div className="flex items-center">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {product.nombre}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            precio: <span>{product.tipoUnidad === "metro lineal" ? product.precio.toFixed(2) : product.precio}</span> € / <span>{product.tipoUnidad === "unidad" ? "und." : "ml"}</span>
                          </p>
                        </div>
                        
                        {product.tipoUnidad === "unidad" ? (
                          <form className="mx-auto max-w-xs">
                            <div className="relative flex max-w-[10rem] items-center">
                              <button
                                type="button"
                                onClick={() => handleQuantityChange(product.id, (productQuantities[product.id] || 0) - 1)}
                                className="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              >
                                <svg
                                  className="h-3 w-3 text-gray-900 dark:text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 2"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h16"
                                  />
                                </svg>
                              </button>
                              <input
                                type="number"
                                value={productQuantities[product.id] || 0}
                                min="0"
                                readOnly
                                className="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                              />
                              <button
                                type="button"
                                onClick={() => handleQuantityChange(product.id, (productQuantities[product.id] || 0) + 1)}
                                className="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              >
                                <svg
                                  className="h-3 w-3 text-gray-900 dark:text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 1v16M1 9h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </form>
                        ) : (
                          <form className="mx-auto max-w-xs">
                            <div className="relative flex max-w-[10rem] items-center">
                              <input
                                type="number"
                                value={productQuantities[product.id] || 0}
                                min="0"
                                step="any"
                                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                className="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                              />
                            </div>
                          </form>
                        )}
                        
                        <button 
                          type="button" 
                          onClick={() => removeProduct(product.id)}
                          className="delete-product ml-2 rounded-lg text-red-500 hover:bg-red-100 p-1 transition-colors duration-200 dark:hover:bg-red-900/30"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <ul role="list" className="divide-gray-200 dark:divide-gray-700">
                  <hr className="bg-gray-800" />
                  <li className="pt-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="ms-4 min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          Total
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <input 
                          className="border-none max-w-[250px] text-right focus:outline-none focus:ring-0 focus:border-transparent dark:bg-gray-800" 
                          type="number" 
                          value={totalPrice.toFixed(2)} 
                          readOnly
                        /> €
                      </div>
                    </div>
                  </li>
                  <li className="text-xs text-gray-500 dark:text-gray-400 border-t-0 text-right">
                    <strong className="text-gray-900 dark:text-white">und:</strong> unidad / <strong className="text-gray-900 dark:text-white">ml:</strong> metro lineal
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Step 3: Form */}
        {showForm && (
          <div className="flex justify-center">
            <form 
              onSubmit={handleFormSubmit}
              className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <label className="text-lg font-bold leading-none text-gray-900 dark:text-white">Te atenderemos</label>
              <div className="mb-6 mt-4">
                <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre*</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  value={formData.nombre}
                  onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Tu nombre" 
                  required 
                />
              </div>
              
              <div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
                <div>
                  <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono*</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono" 
                    value={formData.telefono}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').substring(0, 9);
                      setFormData(prev => ({ ...prev, telefono: value }));
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Ej: 612345678" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="codigopostal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Código Postal*</label>
                  <input 
                    type="text" 
                    id="codigopostal" 
                    name="codigopostal" 
                    value={formData.codigopostal}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').substring(0, 5);
                      setFormData(prev => ({ ...prev, codigopostal: value }));
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Ej: 28001" 
                    required
                  />
                </div>  
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="tu@email.com"
                />
              </div>

              <div className="flex items-center justify-between mt-6">
                <button 
                  type="button" 
                  onClick={() => {
                    setShowForm(false);
                    setCurrentStep(2);
                  }}
                  className="w-full min-w-[100px] flex items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-yellow-500 p-3 text-sm font-bold text-white outline-none ring-yellow-500 transition duration-300 hover:bg-yellow-600 focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:focus:outline-none dark:focus:ring-1 sm:w-auto mr-2"
                >
                  Atrás
                </button>
                <button 
                  type="submit"
                  className="w-full min-w-[100px] flex items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-yellow-500 p-3 text-sm font-bold text-white outline-none ring-yellow-500 transition duration-300 hover:bg-yellow-600 focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:focus:outline-none dark:focus:ring-1 sm:w-auto mr-2"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Final Message */}
        {showFinalMessage && (
          <div className="flex justify-center">
            <div className="w-full max-w-md min-h-[20rem] rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8 flex flex-col items-center justify-center">
              <svg className="w-20 h-20 mx-auto mb-4 text-kalia-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h5 className="text-lg font-bold text-center text-gray-900 dark:text-white">¡Gracias! Nos pondremos en contacto</h5>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mx-auto my-8 flex max-w-screen-md items-start">
          <div className="w-full">
            <div className="flex w-full items-center justify-between gap-4">
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
                  className="w-full min-w-[100px] flex items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-kalia-gold p-3 text-sm font-bold text-white outline-none ring-zinc-500 transition duration-300 hover:bg-kalia-gold-dark focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:bg-kalia-gold dark:text-black dark:ring-zinc-200 dark:hover:bg-kalia-gold-dark dark:focus:outline-none dark:focus:ring-1 sm:w-auto"
                >
                  Atrás
                </button>
              )}

              {/* Reset Button */}
              {showFinalMessage && (
                <button
                  onClick={resetCalculator}
                  className="w-full min-w-[100px] flex items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-kalia-gold p-3 text-sm font-bold text-white outline-none ring-zinc-500 transition duration-300 hover:bg-kalia-gold-dark focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:bg-kalia-gold dark:text-black dark:ring-zinc-200 dark:hover:bg-kalia-gold-dark dark:focus:outline-none dark:focus:ring-1 sm:w-auto"
                >
                  Reiniciar
                </button>
              )}

              {/* Spacer when no left button */}
              {(currentStep === 1 || showForm) && !showFinalMessage && <button></button>}

              {/* Next Button - Step 2 to Form */}
              {currentStep === 2 && !showForm && productList.length > 0 && totalPrice > 0 && (
                <button
                  onClick={() => {
                    setShowForm(true);
                    setCurrentStep(3);
                  }}
                  className="w-full min-w-[100px] flex items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-kalia-gold p-3 text-sm font-bold text-white outline-none ring-zinc-500 transition duration-300 hover:bg-kalia-gold-dark focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:bg-kalia-gold dark:text-black dark:ring-zinc-200 dark:hover:bg-kalia-gold-dark dark:focus:outline-none dark:focus:ring-1 sm:w-auto"
                >
                  Siguiente
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculadora;
               