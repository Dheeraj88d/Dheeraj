import React from 'react';

const Intro: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        padding: '0 120px',
        backgroundColor: '#222222',
        color: '#ffffff',
        minHeight: '100vh',
      }}
    >
      {/* Left Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          ABOUT US
        </h1>
        <p
          style={{
            fontSize: '16px',
            lineHeight: '1.8',
          }}
        >
          <span style={{ fontWeight: 'bold', color: '#FFD700' }}>The Space Gallery Studio</span> is
          where creativity and innovation come together to craft transformative spaces that inspire
          and uplift. Specializing in both architecture and interior design, we seamlessly integrate
          functionality with aesthetic appeal, ensuring each project embodies our dedication to
          quality, sustainability, and enduring design. By focusing on tailored, thoughtful
          environments, we collaborate closely with clients to realize their vision—whether for
          residential retreats or commercial environments. At{' '}
          <span style={{ fontWeight: 'bold', color: '#FFD700' }}>The Space Gallery Studio</span>, we
          believe that exceptional design not only enhances how we live and work but also enriches
          the way we experience the world around us.
        </p>
      </div>

      {/* Right Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/src/assets/images/designers.png" // Update to the correct path
          alt="Designers"
          style={{
            width: '100%',
            objectFit: 'cover',
            borderRadius: '0', // Set radius to 0
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '10px',
            fontSize: '14px',
            color: '#ffffff',
          }}
        >
          {/* { 
            <span>Ar. Sujith</span>
           <span>Ar. Bharath Reddy</span>
          } */}
        </div>
      </div>
      

      {/* Responsive Styling for Mobile */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: 1fr;
              padding: 20px;
            }
            div[style*="justify-content: space-between"] img {
              margin-bottom: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Intro;
