import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
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

export const FinalCTA = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-glow rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-glow rounded-full opacity-15 animate-float delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Why Choose Section */}
        <div ref={sectionRef} className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Perché Scegliere la Scacchiera del Tempo
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Strategia Comprovata',
                description: 'Basata sui principi strategici degli scacchi applicati alla vita reale.',
                icon: '🎯'
              },
              {
                title: 'Facile da Usare',
                description: 'Interfaccia intuitiva che puoi personalizzare secondo le tue esigenze.',
                icon: '⚡'
              },
              {
                title: 'Risultati Immediati',
                description: 'Inizia a vedere miglioramenti nella tua produttività dal primo giorno.',
                icon: '🚀'
              },
              {
                title: 'Supporto Completo',
                description: 'Guida passo-passo e community di supporto per il tuo successo.',
                icon: '🤝'
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-soft p-8 hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-center space-y-4">
                  <div className="text-5xl animate-float" style={{ animationDelay: `${index * 0.3}s` }}>{feature.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center space-y-12 scroll-reveal">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground animate-pulse-glow">
              Trasforma la Tua Vita Oggi
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Non aspettare domani per iniziare a vivere strategicamente. La tua <span className="text-primary font-bold">"Vita da Dio"</span> inizia con la prima mossa.
            </p>
          </div>

          {/* Final Pricing Card */}
          <Card className="bg-gradient-card border-border shadow-glow max-w-2xl mx-auto p-8 md:p-12 animate-scale-in hover-lift">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary text-primary-foreground px-6 py-3 text-lg font-bold animate-pulse-glow">
                  🚀 Accesso Immediato
                </Badge>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-6">
                    <span className="text-3xl text-muted-foreground line-through">19,99€</span>
                    <span className="text-6xl font-bold text-primary animate-pulse-glow">9,99€</span>
                  </div>
                  <p className="text-destructive font-bold text-lg animate-pulse">
                    ⏰ Offerta valida per pochi giorni
                  </p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-accent text-accent-foreground hover:bg-gradient-accent hover:shadow-glow font-bold py-6 text-xl animate-pulse-glow"
              >
                🏆 Ottieni la Tua Scacchiera del Tempo →
              </Button>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Accesso immediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Garanzia 30 giorni</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Supporto incluso</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 animate-fade-in-up delay-600">
            <div className="text-center space-y-2">
              <div className="text-3xl animate-float">⭐</div>
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-muted-foreground">Rating medio</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl animate-float delay-200">👥</div>
              <div className="text-2xl font-bold text-primary">2,000+</div>
              <div className="text-muted-foreground">Utenti soddisfatti</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl animate-float delay-400">🔒</div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Pagamento sicuro</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};