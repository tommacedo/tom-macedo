function App() {
  return (
    <main className="relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden bg-brand-black px-6">

     {/* Background */}
     <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Imagem com fetchpriority="high" diz pro navegador baixar isso primeiro */}
      <img 
        src="/hero-bg.webp?v=1"
        alt="" 
        className="absolute inset-0 w-full h-full object-cover opacity-30 md:opacity-40"
        fetchPriority="high"
        loading="eager"  
      />

      {/* Fundo escurece perto do texto */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-black/10 via-brand-black/50 to-brand-black" />
     </div>

     <section className="relative z-10 flex flex-col items-center text-center animate-hero">

        {/* Tag de Status */}
        <header className="mb-8">
          <div className="font-data text-[10px] md:text-xs tracking-[0.3em] text-brand-primary border border-brand-primary/20 px-4 py-1.5 rounded-sm bg-brand-primary/5 uppercase transform -skew-x-12">
            Desenvolvedor Front-end
          </div>
        </header>
        
        {/* Nome */}
        <div className="space-y-4">
          <h1 className="font-logo text-6xl sm:text-8xl md:text-[11rem] tracking-tighter leading-[0.8] drop-shadow-[0_0_25px_rgba(255,255,255,0.05)]">
            Tom Macedo
          </h1>
          <h2 className="font-support text-[10px] sm:text-xs md:text-sm tracking-[0.4em] text-zinc-500 uppercase font-light">
            Criando sentido antes da tela
          </h2>
        </div>

        {/* Descrição */}        
        <p className="mt-10 font-support text-base md:text-xl text-zinc-400 max-w-[280px] sm:max-w-md md:max-w-2x1 italic leading-relaxed text-balance">
          Busco a mistura entre a lógica e emoção para criar interfaces que contam sua própria história.
        </p>

        {/* CTA interativo */}
        <footer className="mt-20">
          <button className="font-data text-[10px] md:text-xs uppercase tracking-[0.4em] text-zinc-600 hover:text-brand-primary transition-all duration-700 ease-in-out cursor-pointer group">
            [ <span className="group-hover:mx-2 transition-all">agendar_reunião</span> ]
          </button>
        </footer>

     </section>

     {/* Footer */}
     <div className="absolute bottom-10 left-10 hidden lg:block font-data text-[10px] text-zinc-800 space-y-1">
      <p>LOC: -23.5505, -46.6333</p>
      <p>V_CORE: 8.0.0-VITE</p>
     </div>
      
    </main>
  );
}

export default App