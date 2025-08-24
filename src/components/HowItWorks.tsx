import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};

export const HowItWorks = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-glow rounded-full opacity-15 animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Point 03 - Habit Tracker */}
        <Card className="bg-gradient-card border-border shadow-card p-8 md:p-12 hover-lift scroll-reveal mb-16">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Badge className="bg-primary text-primary-foreground px-4 py-2 font-bold">POINT 03</Badge>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Oltre 15 Habit Tracker + Grafici<br />
              <span className="text-primary">10 Template Interni per Costruire il Tuo</span>
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Il Calendario e Habit Tracker hanno oltre 15 tracker automatici per la tua crescita oraria e controllo degli obiettivi. È stato creato per essere semplice da usare.
            </p>

            <div className="bg-card-accent border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Tracking Settimanale dei Tuoi Obiettivi</h4>
              
              <div className="grid grid-cols-7 gap-2 text-center mb-4">
                <div className="font-semibold text-primary">SUN</div>
                <div className="font-semibold text-primary">MON</div>
                <div className="font-semibold text-primary">TUE</div>
                <div className="font-semibold text-primary">WED</div>
                <div className="font-semibold text-primary">THU</div>
                <div className="font-semibold text-primary">FRI</div>
                <div className="font-semibold text-primary">SAT</div>
              </div>
              
              <div className="grid grid-cols-7 gap-2 text-center">
                {[1, 2, 3, 4, 5, 6, 7].map((day, index) => (
                  <div key={index} className="bg-gradient-card border-border rounded p-2 animate-count-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-foreground font-semibold">{day}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div className="text-success font-bold text-xl">82%</div>
                <div className="text-muted-foreground">WEEK GOAL</div>
                <div className="text-success font-bold text-xl">85%</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">📋</span>
                  <h5 className="font-semibold text-destructive">Prima</h5>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Lista confusa e senza priorità</li>
                  <li>Non sai mai se stai progredendo</li>
                </ul>
              </div>
              
              <div className="bg-success/10 border border-success/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">📊</span>
                  <h5 className="font-semibold text-success">Adesso</h5>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Sistema strategico con metriche chiare</li>
                  <li>Vedi i progressi in tempo reale</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Motivational Section */}
        <div className="text-center space-y-8 scroll-reveal mb-16">
          <div className="text-5xl animate-float">👤</div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            "Ora che ho la gestione delle liste, come faccio...<br />
            <span className="text-primary">Ma le liste sono solo all'inizio!"</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Per raggiungere i tuoi obiettivi a lungo termine hai bisogno di un sistema di gestione completo.
          </p>
          
          <div className="bg-gradient-accent p-8 rounded-lg max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-accent-foreground mb-4">
              Il Habit Tracker è pronto in un attimo!<br />
              <span className="text-accent-foreground/80">È tutto preparato per te!</span>
            </h4>
          </div>
        </div>

        {/* HOW Section */}
        <div ref={sectionRef} className="scroll-reveal text-center mb-16">
          <div className="text-6xl mb-6 animate-float">👤</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">HOW?</h2>
          <h3 className="text-2xl md:text-3xl text-primary font-semibold mb-8">
            Oggi la gestione delle priorità è diventata complicata 👀<br />
            Come faccio a non perdere il focus e continuare senza fermarmi?
          </h3>
        </div>

        <Card className="bg-gradient-card border-border shadow-card p-8 md:p-12 hover-lift scroll-reveal mb-16">
          <div className="text-center space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Come faccio a gestire tutto questo?</h3>
            
            <div className="space-y-6">
              <p className="text-xl text-primary font-semibold">Con l'Habit Tracker</p>
              <p className="text-xl text-primary font-semibold">integrato con la Scacchiera del Tempo</p>
              <p className="text-2xl text-primary font-bold animate-pulse-glow">Puoi iniziare subito!</p>
            </div>

            <div className="bg-card-accent border-border rounded-lg p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                La Scacchiera del Tempo rende semplice ciò che prima era complesso.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Non è solo un'analisi motivazionale del momento.
              </p>
              <p className="text-lg text-foreground font-semibold">
                Ti permette di vedere ogni settimana, mese, giornata in cui puoi verificare i tuoi progressi step by step.
              </p>
            </div>
          </div>
        </Card>

        {/* Point 04 */}
        <Card className="bg-gradient-card border-border shadow-card p-8 md:p-12 hover-lift scroll-reveal mb-16">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Badge className="bg-primary text-primary-foreground px-4 py-2 font-bold">POINT 04</Badge>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Un Solo Obiettivo alla Volta! 😊<br />
              <span className="text-primary">I 12 Mesi di Obiettivi e Pianificazione Hanno Senso Solo se Li Fai Uno alla Volta Sistematicamente!</span>
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Il Calendario e l'Habit Tracker lavorano insieme per aiutarti a vedere i progressi reali per tutto l'anno.
            </p>

            <div className="bg-card-accent border-border rounded-lg p-6">
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { quarter: 'Q1', objective: 'Salute' },
                  { quarter: 'Q2', objective: 'Carriera' },
                  { quarter: 'Q3', objective: 'Relazioni' },
                  { quarter: 'Q4', objective: 'Crescita' }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-card border-border rounded p-4 text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="font-bold text-primary text-xl">{item.quarter}</div>
                    <div className="text-sm text-muted-foreground">Obiettivo: {item.objective}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">📋</span>
                  <h5 className="font-semibold text-destructive">Prima</h5>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Piani vaghi, senza tracking</li>
                  <li>Non sai se stai davvero migliorando</li>
                </ul>
              </div>
              
              <div className="bg-success/10 border border-success/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">📊</span>
                  <h5 className="font-semibold text-success">Con la Scacchiera</h5>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Sistema integrato e automatico</li>
                  <li>Vedi ogni progresso, ogni giorno</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Final Point 01 */}
        <Card className="bg-gradient-card border-border shadow-card p-8 md:p-12 hover-lift scroll-reveal">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Badge className="bg-primary text-primary-foreground px-4 py-2 font-bold">POINT 01</Badge>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Definisci Obiettivi e Categorie, poi<br />
              <span className="text-primary">Inizia la Gestione delle Priorità Questo Mese! ✅</span>
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Il Calendario funziona insieme ai tuoi obiettivi mensili e annuali. Quando definisci le categorie che ti interessano, l'Habit Tracker di 12 mesi è pronto!
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6">Vuoi Definire le Categorie dei Tuoi Obiettivi</h4>
                <div className="space-y-4">
                  {[
                    { icon: '🏋️', text: 'Obiettivi Fisici' },
                    { icon: '💼', text: 'Crescita Professionale' },
                    { icon: '❤️', text: 'Relazioni' },
                    { icon: '🧠', text: 'Apprendimento' },
                    { icon: '💰', text: 'Finanze' },
                    { icon: '🎨', text: 'Creatività' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-card-accent border-border rounded-lg animate-fade-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6">Seleziona le Tue Priorità e Crea Habit Tracker!</h4>
                <div className="bg-card-accent border-border rounded-lg p-6">
                  <div className="text-center mb-4">
                    <div className="text-lg font-semibold text-primary">2025년 1월</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 bg-gradient-card border-border rounded">
                      <span className="text-xl">🏃‍♂️</span>
                      <span className="text-foreground">Corri 3 volte a settimana</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gradient-card border-border rounded">
                      <span className="text-xl">📚</span>
                      <span className="text-foreground">Leggi 30 minuti al giorno</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};