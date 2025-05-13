import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState('deployment');

  // Shared style objects
  const buttonBase = {
    padding: '0.75rem 1.5rem',
    margin: '0 0.5rem',
    border: 'none',
    background: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'all 0.3s ease'
  };

  const cardStyle = {
    background: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f5f7fa',
      color: '#333',
      margin: 0
    }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Cloud Deployment Dashboard</h1>
        <p style={{ margin: '0.5rem 0 0', opacity: 0.9, fontSize: '1.1rem' }}>
          React App deployed with Jenkins & Minikube
        </p>
      </header>

      {/* Tabs */}
      <nav style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
        <button 
          style={{
            ...buttonBase,
            backgroundColor: activeTab === 'deployment' ? '#6c63ff' : 'transparent',
            color: activeTab === 'deployment' ? 'white' : 'inherit'
          }}
          onClick={() => setActiveTab('deployment')}
        >
          Deployment Info
        </button>
        <button 
          style={{
            ...buttonBase,
            backgroundColor: activeTab === 'counter' ? '#6c63ff' : 'transparent',
            color: activeTab === 'counter' ? 'white' : 'inherit'
          }}
          onClick={() => setActiveTab('counter')}
        >
          Interactive Demo
        </button>
      </nav>

      {/* Main Content */}
      <main style={{
        flex: 1,
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        {activeTab === 'deployment' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Info Card */}
            <div style={cardStyle}>
              <h2 style={{ marginTop: 0, color: '#6c63ff' }}>CI/CD Pipeline</h2>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ listStyleType: '"✅"', paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>React Application</li>
                <li style={{ listStyleType: '"✅"', paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Automated Testing</li>
                <li style={{ listStyleType: '"✅"', paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Jenkins Pipeline</li>
                <li style={{ listStyleType: '"✅"', paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Docker Containerization</li>
                <li style={{ listStyleType: '"✅"', paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Kubernetes Deployment (Minikube)</li>
              </ul>
            </div>

            {/* Architecture */}
            <div>
              <h2 style={{ color: '#6c63ff' }}>System Architecture</h2>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '1rem',
                ...cardStyle
              }}>
                <div style={{
                  background: '#6c63ff',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}>Git Repository</div>
                <div style={{ color: '#6c63ff', fontSize: '1.5rem' }}>→</div>
                <div style={{
                  background: '#6c63ff',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}>Jenkins</div>
                <div style={{ color: '#6c63ff', fontSize: '1.5rem' }}>→</div>
                <div style={{
                  background: '#6c63ff',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}>Docker</div>
                <div style={{ color: '#6c63ff', fontSize: '1.5rem' }}>→</div>
                <div style={{
                  background: '#6c63ff',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}>Minikube</div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            maxWidth: '500px',
            margin: '0 auto',
            ...cardStyle
          }}>
            <h2 style={{ color: '#6c63ff', marginTop: 0 }}>Interactive Counter</h2>
            <p>This demonstrates state management in React</p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '2rem 0'
            }}>
              <button 
                style={{
                  background: '#6c63ff',
                  color: 'white',
                  border: 'none',
                  width: '50px',
                  height: '50px',
                  fontSize: '1.5rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <span style={{ fontSize: '2rem', margin: '0 1.5rem', minWidth: '60px', textAlign: 'center' }}>
                {count}
              </span>
              <button 
                style={{
                  background: '#6c63ff',
                  color: 'white',
                  border: 'none',
                  width: '50px',
                  height: '50px',
                  fontSize: '1.5rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <button 
              style={{
                background: '#f5f7fa',
                color: '#6c63ff',
                border: '1px solid #6c63ff',
                padding: '0.5rem 1.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '1.5rem',
        background: '#2d3748',
        color: 'white'
      }}>
        <p>Deployed with ❤️ using modern DevOps practices</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>
          React | Jenkins | Docker | Kubernetes (Minikube)
        </p>
      </footer>
    </div>
  );
}

export default App;