function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">

      <h1 className="font-logo text-6xl md:text-8xl tracking-widest uppercase mb-4">
        Tom Macedo
      </h1>

      <p className="font-support text-lg md:text-xl text-zinc-400 max-w-md text-center mb-8">
        Creative Technologist. Especialista em infraestrutura e interfaces imersivas.
      </p>

      <div className="font-data text-sm bg-zinc-900/50 border-zinc-800 p-4 rounded-md">
        <span className="text-green-500">status:</span>
        <span className="text-zinc-300">ready_to_build</span><br />
        <span className="text-green-500">location:</span>
        <span className="text-zinc-300">sao_paulo_br</span>
      </div>
    </main>
  )
}

export default App