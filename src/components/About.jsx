// pages/about.js
'use client';
import Image from 'next/image';

export default function About() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      height: '100vh',
      margin: 0,
      background: '#fff'
    }}>
      <div style={{
        flex: 2,
        padding: '60px 40px 40px 60px',
        background: '#fff',
        zIndex: 2,
        boxSizing: 'border-box'
      }}>
        <h1 style={{
          color: '#2477c9',
          fontSize: '2.1rem',
          margin: '0 0 0.5em 0',
          letterSpacing: '2px'
        }}>ABOUT</h1>
        <h2 style={{
          color: '#2477c9',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          margin: '0 0 1em 0',
          letterSpacing: '1px'
        }}>GLOBAL ENVIRO GROUP</h2>
        <p style={{
          color: '#444',
          fontSize: '1rem',
          lineHeight: 1.6,
          margin: 0
        }}>
          With over two and a half decade of phenomenal presence in the Indian air pollution control sector and having serviced hundreds of mega corporates, industries and MNCs, Global Enviro Air Systems is presently diversified into four distinct divisions, each working as an independent unit with parallel infrastructure and the requisite technical setup. The success we witness today has been based on our relentless dedication and the unrivalled excellence that we have demonstrated through our professionalism.
        </p>
      </div>
      <div style={{
        width: 0,
        height: 0,
        borderTop: '100vh solid #e6ecf3',
        borderRight: '80px solid transparent',
        position: 'relative',
        left: '-40px',
        zIndex: 1
      }} />
      <div style={{
        flex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f9fafc'
      }}>
        <div style={{width: '100%', height: '100%'}}>
          <Image
            src="/image.jpg"
            alt="Global Enviro Group Plant"
            layout="fill"
            objectFit="cover"
            style={{borderLeft: '4px solid #dee2e6'}}
            priority
          />
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 900px) {
          div[style*="display: flex"][style*="flex-direction: row"] {
            flex-direction: column !important;
            height: auto !important;
          }
          div[style*="border-top: 100vh solid"] {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
