import { ArrowRight, Bot, Network, ShieldCheck, Workflow, KeyRound, Boxes, Globe2 } from 'lucide-react';

const products = [
  {
    name: 'Autonomous Governance Protocol',
    repo: 'Autonomous-Governance-Protocol',
    icon: ShieldCheck,
    description: 'The control plane for policy-as-code, autonomous approvals, risk scoring, and governance event orchestration.',
  },
  {
    name: 'Agent-Auth',
    repo: 'Agent-Auth',
    icon: KeyRound,
    description: 'Agent-native authentication and authorization with delegated permissions, zero-trust sessions, and AuthZen alignment.',
  },
  {
    name: 'Agentic IGA',
    repo: 'Agentic-IGA',
    icon: Network,
    description: 'Identity governance and administration for autonomous agents: lifecycle, reviews, SoD, certification, and compliance.',
  },
  {
    name: 'Agent Access Protocol',
    repo: 'agent-access-protocol',
    icon: Globe2,
    description: 'An open interoperability layer for authorization requests, trust metadata, delegation, and cross-platform governance.',
  },
  {
    name: 'CAI Agent Runtime',
    repo: 'Cai-Agent',
    icon: Bot,
    description: 'A governance-aware agent runtime for executing tasks with policy hooks, observability, and human escalation paths.',
  },
  {
    name: 'Midpoint',
    repo: 'midpoint',
    icon: Workflow,
    description: 'The workflow and integration middleware that connects agents, policies, enterprise systems, and audit pipelines.',
  },
];

const capabilities = [
  'Agent identity and trust graphs',
  'Policy-as-code governance',
  'Continuous access review',
  'Delegated authorization',
  'Runtime risk scoring',
  'Immutable audit trails',
  'Human-in-the-loop escalation',
  'Open protocol federation',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.28),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,.18),transparent_28%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-24 lg:px-8 lg:py-32">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3 font-semibold tracking-tight">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">AGX</span>
              <span>OpenAGX</span>
            </div>
            <a className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/10" href="https://github.com/openagx">GitHub</a>
          </nav>

          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              Open Autonomous Governance At Scale
            </p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              The governance operating system for autonomous agents.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              OpenAGX combines open protocols, agent authorization, identity governance, runtime controls, and orchestration middleware into one platform for safely operating AI agents at enterprise and internet scale.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-medium text-slate-950 hover:bg-cyan-200" href="#products">
                Explore products <ArrowRight size={18} />
              </a>
              <a className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white hover:bg-white/10" href="https://github.com/openagx/website">
                View source
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Platform</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Autonomous governance, from identity to execution.</h2>
            <p className="mt-6 text-slate-300">
              OpenAGX is built for organizations where AI agents request access, execute workflows, delegate tasks, trigger compliance obligations, and require real-time policy enforcement.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Product suite</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Each repository is a separate product. Together, they form the OpenAGX platform.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <article key={product.name} className="group rounded-3xl border border-white/10 bg-[#080b14] p-6 transition hover:border-cyan-300/40 hover:bg-[#0b1020]">
                  <Icon className="h-8 w-8 text-cyan-300" />
                  <h3 className="mt-6 text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm text-cyan-100/70">{product.repo}</p>
                  <p className="mt-4 leading-7 text-slate-300">{product.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 to-blue-500/10 p-8 lg:p-12">
          <div className="flex max-w-4xl flex-col gap-6">
            <Boxes className="h-10 w-10 text-cyan-300" />
            <h2 className="text-4xl font-semibold tracking-tight">Built for AI-native enterprises, autonomous organizations, and regulated agent ecosystems.</h2>
            <p className="text-lg leading-8 text-slate-300">
              Use OpenAGX to create governed agent identities, evaluate authorization decisions, enforce runtime policy, automate access reviews, coordinate workflows, and produce audit-ready evidence across agentic operations.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              {['Zero trust', 'Compliance automation', 'Governance event bus', 'Open standards', 'Enterprise connectors'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
