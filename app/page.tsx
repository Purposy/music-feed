export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-6 py-12">
        <header className="mb-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Music Feed</h1>

          <button className="rounded-full border border-white/20 px-4 py-2 text-sm">
            Log in
          </button>
        </header>

        <section className="flex flex-1 flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
            Your music. Your mood.
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            See what everyone is listening to.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            Connect with friends through the songs playing in their lives.
          </p>

          <button className="mt-10 rounded-full bg-green-500 px-6 py-4 font-semibold text-black">
            Continue with Spotify
          </button>
        </section>

        <footer className="mt-16 text-center text-sm text-white/30">
          Music Feed — In development
        </footer>
      </div>
    </main>
  );
}