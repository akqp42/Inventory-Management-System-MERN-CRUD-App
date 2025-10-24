import React from 'react'

export default function About() {
  return (
    <div className='container-fluid p-5'>
      <div className='about-container'>
        <h1>About This Project</h1>
        
        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>
          Inventory Management System (IMS)
        </h3>
        
        <p>
          This is a modern, full-stack Inventory Management System built using the MERN stack 
          (MongoDB, Express, React, Node.js). The application allows users to efficiently manage 
          product inventory with a sleek, user-friendly interface.
        </p>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>
          Key Features
        </h3>
        
        <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <li><strong>Product Management:</strong> Add, update, view, and delete products with ease</li>
          <li><strong>Smart Search:</strong> Search products by name, price, or barcode with AI-generated product images</li>
          <li><strong>Duplicate Prevention:</strong> Automatic validation to prevent duplicate product names</li>
          <li><strong>Modern UI:</strong> Dark mode interface with smooth animations and responsive design</li>
          <li><strong>Real-time Updates:</strong> Instant reflection of all CRUD operations</li>
        </ul>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>
          Technology Stack
        </h3>
        
        <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <li><strong>Frontend:</strong> React.js with React Router for navigation</li>
          <li><strong>Backend:</strong> Node.js with Express.js</li>
          <li><strong>Database:</strong> MongoDB for data storage</li>
          <li><strong>Styling:</strong> Custom CSS with Bootstrap components</li>
          <li><strong>AI Integration:</strong> Pollinations.ai for product image generation</li>
        </ul>

        <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '1rem' }}>
          Purpose
        </h3>
        
        <p>
          This project demonstrates a complete CRUD (Create, Read, Update, Delete) application 
          with modern web development practices, featuring RESTful API design, responsive UI/UX, 
          and integration with AI services for enhanced functionality.
        </p>
      </div>
    </div>
  )
}