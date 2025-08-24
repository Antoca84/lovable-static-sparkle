const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold text-primary mb-4">
        🏁 Scacchiera del Tempo - Landing Page
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        ✅ Benvenuti nella tua strategia per una vita da Dio!
      </p>
      <div className="bg-card p-6 rounded-lg shadow-card border border-border">
        <h2 className="text-2xl font-semibold text-card-foreground mb-4">
          🚀 Sistema Funzionante
        </h2>
        <p className="text-card-foreground mb-4">
          Il sito è ora configurato correttamente sia per Lovable che per GitHub Pages.
        </p>
        <div className="text-sm text-muted-foreground">
          <p>GitHub Pages URL: https://antoca84.github.io/lovable-static-sparkle/</p>
          <p>Configurazione: Router dinamico per entrambi gli ambienti</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
