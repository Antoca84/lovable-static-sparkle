import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

const useScrollReveal = (options: ScrollRevealOptions = {}) => {
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
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
};

export const ScacchieraHero = () => {
  const heroRef = useScrollReveal();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-glow rounded-full opacity-15 animate-float delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div ref={heroRef} className="scroll-reveal space-y-8">
          {/* Brand & Badge */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-primary text-4xl animate-float">👑</div>
              <h1 className="text-2xl font-bold text-foreground tracking-wider">SCACCHI MENTALI</h1>
              <Badge className="ml-4 bg-gradient-accent text-accent-foreground hover:bg-gradient-accent px-4 py-2 text-sm font-semibold animate-pulse-glow">
                Offerta Limitata
              </Badge>
            </div>

            <Badge className="bg-gradient-accent text-accent-foreground px-6 py-2 text-sm font-semibold mb-6 animate-scale-in delay-200">
              🔥 Prodotto Digitale Esclusivo
            </Badge>
          </div>

          {/* Main Title */}
          <div className="space-y-6 animate-fade-in-up delay-300">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Scacchiera del Tempo
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              La Tua Strategia per una <span className="text-primary animate-pulse-glow">Vita da Dio</span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Trasforma ogni giornata in una mossa vincente. Il sistema di gestione del tempo che combina la strategia degli scacchi con la crescita personale.
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-6 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2">
              <div className="flex text-primary text-xl">⭐⭐⭐⭐⭐</div>
              <span className="text-foreground font-semibold">4.9/5</span>
              <span className="text-muted-foreground">(2.021 utenti)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-primary text-xl">👥</span>
              <span>Oltre 2.000 persone hanno già iniziato</span>
            </div>
          </div>

          {/* Pricing Card */}
          <Card className="bg-gradient-card border-border shadow-card max-w-md mx-auto p-8 animate-scale-in delay-500 hover-lift">
            <div className="text-center space-y-4">
              <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold animate-pulse-glow">
                ⏰ Offerta Early Adopters
              </Badge>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-2xl text-muted-foreground line-through">19,99€</span>
                  <span className="text-4xl font-bold text-primary">9,99€</span>
                </div>
                <p className="text-destructive font-semibold animate-pulse">Scade tra pochi giorni!</p>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-gradient-accent text-accent-foreground hover:bg-gradient-accent hover:shadow-glow font-bold py-4 text-lg animate-pulse-glow"
                onClick={() => window.open('https://buy.stripe.com/28EeVc4cubz14KodFC1ZS00', '_blank')}
              >
                🏆 Ottieni la Tua Scacchiera del Tempo →
              </Button>
            </div>
          </Card>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in-up delay-600">
            <Card className="bg-gradient-card border-border shadow-soft p-6 hover-lift animate-fade-in-left delay-700">
              <div className="text-center space-y-3">
                <div className="text-4xl animate-float">📱</div>
                <h3 className="text-lg font-semibold text-foreground">Anteprima Mobile - Usa ovunque</h3>
              </div>
            </Card>
            <Card className="bg-gradient-card border-border shadow-soft p-6 hover-lift animate-fade-in-up delay-800">
              <div className="text-center space-y-3">
                <div className="text-4xl animate-float delay-200">💻</div>
                <h3 className="text-lg font-semibold text-foreground">Interfaccia Desktop - Completa</h3>
              </div>
            </Card>
            <Card className="bg-gradient-card border-border shadow-soft p-6 hover-lift animate-fade-in-right delay-900">
              <div className="text-center space-y-3">
                <div className="text-4xl animate-float delay-400">📊</div>
                <h3 className="text-lg font-semibold text-foreground">Tracking Obiettivi - Automatico</h3>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};