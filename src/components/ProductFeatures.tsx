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

export const ProductFeatures = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-glow rounded-full opacity-10 animate-float delay-300"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={sectionRef} className="scroll-reveal text-center mb-16">
          <div className="text-6xl mb-6 animate-float">👤</div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">WHAT?</h2>
          <h3 className="text-2xl md:text-3xl text-primary font-semibold mb-4">
            La Scacchiera del Tempo
          </h3>
          <p className="text-xl text-muted-foreground">Cos'è Esattamente? 👀</p>
        </div>

        {/* Feature Points */}
        <div className="space-y-16">
          {/* Point 01 - Google Spreadsheet */}
          <Card className="bg-gradient-card border-border shadow-card p-8 md:p-12 hover-lift scroll-reveal">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Badge className="bg-primary text-primary-foreground px-4 py-2 font-bold">POINT 01</Badge>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Google Spreadsheet Gratuito<br />
                <span className="text-primary">Pronto, Dove, Quando Vuoi! 📱</span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Non servono app costose o abbonamenti mensili. Il nostro sistema funziona su Google Spreadsheet: accessibile ovunque, sempre sincronizzato. Basta avere Google e sei pronto!
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="bg-card-accent border-border p-6 text-center hover-scale">
                  <div className="space-y-4">
                    <div className="text-4xl animate-float">💻</div>
                    <h4 className="font-semibold text-foreground">PC/DESKTOP</h4>
                    <p className="text-sm text-muted-foreground">Interfaccia Desktop Completa</p>
                  </div>
                </Card>
                
                <Card className="bg-card-accent border-border p-6 text-center hover-scale">
                  <div className="space-y-4">
                    <div className="text-4xl animate-float delay-200">📱</div>
                    <h4 className="font-semibold text-foreground">MOBILE, TABLET</h4>
                    <p className="text-sm text-muted-foreground">IPAD ANCHE!</p>
                    <div className="flex justify-center gap-2 mt-2">
                      <span className="text-2xl">📲</span>
                      <span className="text-sm text-muted-foreground">Tablet</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-card-accent border-border p-6 text-center hover-scale">
                  <div className="space-y-4">
                    <div className="text-4xl animate-float delay-400">📊</div>
                    <h4 className="font-semibold text-foreground">GOOGLE SPREADSHEET</h4>
                    <p className="text-sm text-muted-foreground">Per Modificare, Stampare, Salvare</p>
                  </div>
                </Card>
              </div>
            </div>
          </Card>

          {/* Point 02 - Calendar System */}
          <Card className="bg-gradient-card border-border shadow-card p-8 md:p-12 hover-lift scroll-reveal">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Badge className="bg-primary text-primary-foreground px-4 py-2 font-bold">POINT 02</Badge>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Vuoi Impostare Tempo e Obiettivi per<br />
                <span className="text-primary">12 Mesi? Il Calendario Habit Tracker è Automatico! 💡</span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                La Scacchiera gestisce automaticamente i tuoi obiettivi mensili. Imposta le tue priorità e gli obiettivi desiderati, e il calendario di 12 mesi si aggiorna da solo. Vuoi che tutto questo sia integrato per te!
              </p>

              <div className="bg-card-accent border-border rounded-lg p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">Il Tuo Tempo e Obiettivi Impostati</h4>
                <p className="text-muted-foreground mb-6">
                  Scegli liberamente i tuoi obiettivi dalla settimana/mese preferiti e usa il calendario di 12 mesi per creare il miglior habit tracker!
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    { month: 'Jan', goal: '85%' },
                    { month: 'Feb', goal: '86%' },
                    { month: 'Mar', goal: '87%' },
                    { month: 'Apr', goal: '88%' },
                    { month: 'May', goal: '89%' },
                    { month: 'Jun', goal: '90%' },
                    { month: 'Jul', goal: '91%' },
                    { month: 'Aug', goal: '92%' },
                    { month: 'Sep', goal: '93%' },
                    { month: 'Oct', goal: '94%' },
                    { month: 'Nov', goal: '95%' },
                    { month: 'Dec', goal: '96%' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-card border-border rounded p-3 text-center animate-count-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="font-semibold text-foreground">{item.month}</div>
                      <div className="text-sm text-primary font-bold">Goal: {item.goal}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Sistema "Vita da Dio" */}
          <div className="scroll-reveal text-center space-y-12">
            <div className="text-5xl animate-float">📝</div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              La Gestione delle Priorità, la Mossa Perfetta<br />
              <span className="text-primary">È Quella Giusta per Te</span>
            </h3>
            <p className="text-xl text-muted-foreground">
              Ma come si distingue dal sistema tradizionale?<br />
              Scopri i risultati concreti e i moduli avanzati.
            </p>
            
            <div className="bg-gradient-accent p-8 rounded-lg">
              <h4 className="text-2xl font-bold text-accent-foreground mb-4">Sistema "Vita da Dio"</h4>
              <p className="text-accent-foreground">Pianifica i tuoi obiettivi più importanti con la strategia del Re.</p>
            </div>

            {/* Demo Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                  {[
                    { icon: '🎯', title: 'Sistema Vita da Dio', desc: 'Demo: Sistema Vita da Dio' },
                    { icon: '📅', title: 'Calendario 12 Mesi', desc: 'Demo: Calendario 2025' },
                    { icon: '✅', title: 'Lista Strategica', desc: 'Demo: Liste Strategiche' },
                    { icon: '♔', title: 'Sezioni C1-C12', desc: 'Demo: 12 Sezioni Focus' },
                    { icon: '⚡', title: 'Moduli H1-H12', desc: 'Demo: Moduli Avanzati' },
                    { icon: '📥', title: 'File Excel Pronto', desc: 'Demo: Download Immediato' }
                  ].map((item, index) => (
                <Card key={index} className="bg-gradient-card border-border shadow-soft p-6 hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-center space-y-4">
                    <div className="text-4xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>{item.icon}</div>
                    <h5 className="font-semibold text-foreground">{item.title}</h5>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};