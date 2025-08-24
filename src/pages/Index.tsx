const Index = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#2a3f5f', 
      color: '#f3e8b0', 
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        color: '#f3c630', 
        marginBottom: '1rem' 
      }}>
        🏁 SCACCHIERA DEL TEMPO - TEST GITHUB PAGES
      </h1>
      <p style={{ 
        fontSize: '1.25rem', 
        marginBottom: '2rem',
        backgroundColor: '#1a2b3f',
        padding: '1rem',
        borderRadius: '8px'
      }}>
        ✅ SE VEDI QUESTO TESTO, IL SITO FUNZIONA!
      </p>
      <div style={{
        backgroundColor: '#1a2b3f',
        padding: '2rem',
        borderRadius: '12px',
        border: '2px solid #f3c630'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          🚀 Test Deploy Completato
        </h2>
        <p>
          GitHub Pages configurato correttamente per: lovable-static-sparkle
        </p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: '0.8' }}>
          URL: https://antoca84.github.io/lovable-static-sparkle/
        </p>
      </div>
    </div>
  );
};

export default Index;
