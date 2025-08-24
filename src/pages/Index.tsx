const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold text-primary mb-4">Scacchiera del Tempo</h1>
      <p className="text-lg text-muted-foreground mb-8">Test page - se vedi questo testo, il sito funziona!</p>
      <div className="bg-card p-6 rounded-lg shadow-card">
        <h2 className="text-2xl font-semibold text-card-foreground mb-4">Test GitHub Pages Deploy</h2>
        <p className="text-card-foreground">
          Questo è un test per verificare che il deploy su GitHub Pages funzioni correttamente.
          Se vedi questo contenuto, significa che la configurazione base è corretta.
        </p>
      </div>
    </div>
  );
};

export default Index;
