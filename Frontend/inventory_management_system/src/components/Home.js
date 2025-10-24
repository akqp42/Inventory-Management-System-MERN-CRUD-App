import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home-hero' style={{
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
    }}>
      <div className='text-center' style={{ padding: '2rem' }}>
        <div className='mb-5'>
          <img 
            src="/logo.png" 
            alt="IMS Logo" 
            style={{
              maxWidth: '400px',
              width: '100%',
              height: 'auto',
              marginBottom: '2rem',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
            }}
          />
        </div>
        
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1.5rem'
        }}>
          Inventory Management System
        </h1>
        
        <p style={{
          fontSize: '1.5rem',
          color: '#cbd5e1',
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          Manage your products efficiently with our modern inventory system
        </p>
        
        <NavLink 
          to="/products" 
          className='btn btn-primary'
          style={{
            fontSize: '1.5rem',
            padding: '1rem 3rem',
            borderRadius: '12px'
          }}
        >
          View Products →
        </NavLink>
      </div>
    </div>
  )
}