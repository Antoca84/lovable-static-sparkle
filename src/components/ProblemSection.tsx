import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

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

export const ProblemSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-16 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-glow rounded-full opacity-10 animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={sectionRef} className="scroll-reveal text-center mb-16">
          <div className="text-6xl mb-6 animate-float">🤔</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">WHY?</h2>
          <h3 className="text-2xl md:text-3xl text-primary font-semibold mb-4">
            To-Do List & Routine Tracker Perché Ti Servono?
          </h3>
        </div>

        {/* Problem Points */}
        <div className="space-y-16">
          {/* Point 01 */}
          <Card className="bg-gradient-card border-border shadow-card p-8 md:p-12 hover-lift scroll-reveal">
            <div className="text-left space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold">POINT 01</div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Bassa Produttività e Gestione delle Priorità
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Hai provato molti metodi ma ti senti ancora sopraffatto? Senza un sistema chiaro, le tue energie si disperdono e finisci per procrastinare sui compiti più importanti. È ora di cambiare approccio.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-destructive mb-4">
                    Esempio: Sistema di Priorità Confuse che Usiamo Normalmente
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">•</span>
                      <span>Email urgenti (ma non importanti)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">•</span>
                      <span>Meeting spontanei</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">•</span>
                      <span>Notifiche social</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">•</span>
                      <span>Compiti dell'ultimo minuto</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="text-xl font-semibold text-destructive mb-4">Risultato:</div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">→</span>
                      <span>Stress continuo</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">→</span>
                      <span>Obiettivi rimandati</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">→</span>
                      <span>Sensazione di fallimento</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">→</span>
                      <span>Giorni che si ripetono</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-accent p-6 rounded-lg mt-8">
                <p className="text-accent-foreground font-semibold text-lg text-center">
                  Ma con il sistema giusto, puoi trasformare questa confusione in una strategia vincente.
                </p>
              </div>
            </div>
          </Card>

          {/* Point 02 */}
          <Card className="bg-gradient-card border-border shadow-card p-8 md:p-12 hover-lift scroll-reveal">
            <div className="text-left space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold">POINT 02</div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Obiettivi Vaghi & Tracking Inefficace
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sapere cosa vuoi fare è solo metà del lavoro. Il vero successo arriva quando misuri i progressi e adatti la strategia. Senza un sistema di tracking, anche gli obiettivi migliori rimangono solo buone intenzioni.
              </p>
            </div>
          </Card>
        </div>

        {/* Introspective Questions */}
        <div className="mt-20 text-center scroll-reveal">
          <div className="text-5xl mb-8 animate-float">👤</div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Studenti, Lavoratori, Imprenditori<br />
            <span className="text-primary">#Gestire le Liste</span><br />
            È Davvero Così Semplice?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {[
              '"Oggi sono stato davvero produttivo?"',
              '"Perché ho fatto tutto quello che non era importante?"',
              '"La settimana scorsa... cosa ho fatto di concreto?"',
              '"Gestire tutto è davvero così difficile."'
            ].map((question, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-soft p-6 hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>💭</span>
                  <p className="text-foreground font-medium">{question}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 space-y-6">
            <div className="text-4xl animate-float">👥</div>
            <p className="text-xl text-muted-foreground">Ti suona familiare questa gestione del tempo?</p>
            
            <div className="mt-8 space-y-4">
              <div className="text-4xl animate-pulse-glow">💡</div>
              <p className="text-2xl text-primary font-bold">È il momento di provare</p>
              <h3 className="text-4xl font-bold text-foreground animate-pulse-glow">La Scacchiera del Tempo!</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};