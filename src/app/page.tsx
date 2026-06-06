import Image from "next/image";

export default function Home() {
  return (
 <main className="min-h-screen bg-[#030712] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold">
            Agent<span className="text-violet-400">Flow</span>
          </div>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Docs</a>
            <a href="#">About</a>
          </div>

          <div className="flex gap-3">
            <button className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">
              Login
            </button>

            <button className="rounded-xl bg-violet-600 px-5 py-2 hover:bg-violet-500">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}

      <section className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

        <div className="grid w-full gap-20 lg:grid-cols-2">

          <div className="flex flex-col justify-center">

            <span className="mb-5 w-fit rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              ✨ AI Agents for Everyone
            </span>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Build Your Own
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                AI Chat Agent
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-gray-400">
              Upload PDFs, train custom AI agents, embed them into
              websites, and answer customer questions instantly.
            </p>

            <div className="mt-10 flex gap-4">

              <button className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold hover:bg-violet-500">
                Start Building
              </button>

              <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
                Live Demo
              </button>

            </div>

            <div className="mt-12 flex gap-10">

              <div>
                <h2 className="text-4xl font-bold">10K+</h2>
                <p className="text-gray-400">AI Conversations</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">100+</h2>
                <p className="text-gray-400">Custom Agents</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">24/7</h2>
                <p className="text-gray-400">Support</p>
              </div>

            </div>

          </div>

          {/* Dashboard Preview */}

          <div className="flex items-center justify-center">

            <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <div className="mb-5 flex gap-2">

                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

              </div>

              <div className="grid grid-cols-3 gap-4">

                <div className="rounded-2xl bg-[#0F172A] p-4">

                  <div className="mb-4 h-10 w-10 rounded-xl bg-violet-500" />

                  <h3 className="font-semibold">Knowledge Base</h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Upload PDFs and websites.
                  </p>

                </div>

                <div className="rounded-2xl bg-[#0F172A] p-4">

                  <div className="mb-4 h-10 w-10 rounded-xl bg-cyan-500" />

                  <h3 className="font-semibold">
                    AI Chat
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Powered by RAG.
                  </p>

                </div>

                <div className="rounded-2xl bg-[#0F172A] p-4">

                  <div className="mb-4 h-10 w-10 rounded-xl bg-green-500" />

                  <h3 className="font-semibold">
                    Widget
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Embed anywhere.
                  </p>

                </div>

              </div>

              <div className="mt-6 rounded-2xl bg-[#020617] p-5">

                <div className="mb-4 text-sm text-gray-400">
                  AI Assistant
                </div>

                <div className="space-y-3">

                  <div className="w-fit rounded-2xl bg-violet-600 px-4 py-3">
                    👋 Hi! How can I help?
                  </div>

                  <div className="ml-auto w-fit rounded-2xl bg-white/10 px-4 py-3">
                    What is your refund policy?
                  </div>

                  <div className="w-fit rounded-2xl bg-violet-600 px-4 py-3">
                    Refunds are available within 30 days.
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-5 text-gray-400">
            Build, train and deploy AI agents.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            "PDF Training",
            "Website Crawling",
            "RAG Search",
            "Website Widget",
            "Analytics",
            "Multi Agents",
            "Conversation History",
            "Source Citation",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-violet-500"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500" />

              <h3 className="text-xl font-semibold">
                {item}
              </h3>

              <p className="mt-3 text-gray-400">
                Powerful AI functionality built for modern businesses.
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="px-6 pb-24">

        <div className="mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 p-16 text-center backdrop-blur-xl">

          <h2 className="text-5xl font-bold">
            Ready to Build Your AI Agent?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-300">
            Create AI agents trained on your own data and deploy
            them to your website in minutes.
          </p>

          <button className="mt-10 rounded-2xl bg-violet-600 px-10 py-4 text-lg font-semibold hover:bg-violet-500">
            Get Started Free
          </button>

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 AgentFlow. Built with Next.js & AI.
      </footer>
    </main>
  );
}
