'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  EyeOff,
  GitCompareArrows,
  Headphones,
  KeyRound,
  Lock,
  MessageSquare,
  MousePointer2,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  Ticket,
  TrendingUp,
  UserRound,
  WandSparkles,
} from 'lucide-react';

const highlights = [
  {
    title: 'Designed for real-world impact',
    description:
      'Powered by advanced language models with strong reasoning abilities, enabling accurate and context-aware resolution of customer queries.',
    visual: 'models',
  },
  {
    title: 'Built for ease of use',
    description:
      'Create, manage, and deploy AI agents effortlessly, with no technical expertise required. Automate support workflows in just a few minutes.',
    visual: 'builder',
  },
  {
    title: 'Security at its core',
    description:
      'Enterprise-grade protection with strong encryption, compliance-first architecture, and reliable safeguards to keep your data secure at all times.',
    visual: 'security',
  },
];

const howItWorksSteps = [
  {
    number: '01.',
    title: 'Build & deploy your agent',
    description:
      'Train your AI agent using your business data, define its capabilities and actions, and launch it for your customers in just a few minutes.',
    icon: Rocket,
  },
  {
    number: '02.',
    title: 'Solve customer problems',
    description:
      'Your agent handles customer queries, retrieves information from connected systems, and takes actions to resolve issues quickly and accurately.',
    icon: MessageSquare,
  },
  {
    number: '03.',
    title: 'Continuously improve',
    description:
      'Falco AI learns from real interactions, helping your agent become smarter and more effective over time through insights and performance analytics.',
    icon: TrendingUp,
  },
  {
    number: '04.',
    title: 'Human escalation when needed',
    description:
      'Complex or sensitive issues are seamlessly routed to human agents via live chat whenever AI cannot fully resolve the request.',
    icon: Headphones,
  },
  {
    number: '05.',
    title: 'Insights & analytics',
    description:
      'Get deep visibility into customer conversations, engagement patterns, and support performance with detailed analytics and reporting.',
    icon: BarChart3,
  },
];

const exploreTabs = [
  {
    id: 'playground',
    label: 'Playground',
    title: 'Build and test your agent in one place',
    description:
      'Create the experience, tune behavior, and preview how the agent responds before you roll it out.',
    image: '/images/playground.png',
  },
  {
    id: 'activity',
    label: 'Activity',
    title: 'See conversations and team activity as they happen',
    description:
      'Keep track of live interactions, agent responses, and operational updates without jumping between tools.',
    image: '/images/activity.png',
  },
  {
    id: 'sources',
    label: 'Sources',
    title: 'Ground responses in the right knowledge',
    description:
      'Review connected sources and keep the agent’s answers tied to trusted information from your systems.',
    image: '/images/source.png',
  },
  {
    id: 'actions',
    label: 'Actions',
    title: 'Trigger useful actions from the conversation',
    description:
      'Let the agent update records, create tasks, and move work forward with safe, guided automations.',
    image: '/images/actions.png',
  },
];

export default function LandingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const activeHowItWorksStep = howItWorksSteps[activeStep];
  const ActiveHowItWorksIcon = activeHowItWorksStep.icon;
  const [activeExploreTab, setActiveExploreTab] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveExploreTab((current) => (current + 1) % exploreTabs.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const activeExplore = exploreTabs[activeExploreTab];

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-white text-gray-900">
        {/* Hero */}
        <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-[1536px] items-center px-6 py-16 sm:px-10 lg:px-20">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[0.92fr_1fr] xl:gap-20">
            <div className="max-w-[620px]">
              <p className="mb-5 text-sm font-extrabold uppercase tracking-wide text-secondary">
                AI-Powered Customer Service
              </p>

              <h1 className="mb-7 max-w-[640px] text-[clamp(3.4rem,7vw,6.25rem)] font-bold leading-[0.97] text-primary">
                AI Agents for Exceptional Customer Experiences
              </h1>

              <p className="mb-10 max-w-[610px] text-[1.35rem] font-medium leading-[1.35] text-gray-700">
                Falco AI is built to enhance customer support by learning from
                real interactions, improving response quality, and helping your
                team resolve issues more efficiently.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-xl bg-secondary px-5 py-3 text-base font-bold text-white transition hover:bg-primary">
                  Get Started for Free
                </button>

                <button className="flex items-center gap-3 rounded-xl border border-secondary bg-white px-5 py-3 text-base font-bold text-secondary transition hover:bg-secondary/5">
                  <Play className="h-4 w-4 fill-secondary text-secondary" />
                  Book a Demo
                </button>
              </div>
            </div>

            <div className="relative mx-auto min-h-[560px] w-full max-w-[620px] lg:min-h-[640px]">
              <div
                aria-label="Customer using AI support on a phone"
                className="absolute right-0 top-0 h-[78%] w-[88%] overflow-hidden rounded-[2rem] bg-secondary/10 bg-cover bg-center shadow-sm"
                role="img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85')",
                }}
              />

              <div className="absolute right-0 top-12 max-w-[285px] rounded-xl bg-white p-5 text-[1.35rem] font-medium leading-snug text-[#242424] shadow-[0_10px_26px_rgba(0,0,0,0.10)]">
                Does my order qualify for international shipping?
              </div>

              <div className="absolute left-0 top-[49%] hidden h-[72px] w-[72px] -translate-y-1/2 items-center justify-center rounded-full border-4 border-secondary/10 bg-white shadow-sm lg:flex">
                <Bot className="h-9 w-9 text-secondary" />
              </div>

              <div className="absolute left-[12%] top-[46%] w-[70%] min-w-[320px] overflow-hidden rounded-xl bg-white shadow-[0_14px_30px_rgba(0,0,0,0.16)]">
                <div className="bg-secondary/10 px-5 py-4 text-[1.18rem] font-medium leading-snug text-primary">
                  Hi, I found your order and it qualifies. Where did you have in
                  mind?
                </div>
                <div className="flex items-center gap-3 bg-primary px-4 py-3 text-[1rem] font-medium text-white">
                  <Sparkles className="h-4 w-4 shrink-0 fill-white text-white" />
                  Countries for International Shipping
                </div>
              </div>

              <div className="absolute bottom-10 left-[12%] w-[70%] min-w-[320px] rounded-xl bg-white p-2 shadow-[0_14px_32px_rgba(0,0,0,0.14)]">
                <div className="rounded-lg border border-gray-100 bg-[#fbfbf7] p-3">
                  {['Tone', 'Product Knowledge', 'Solution'].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between text-[1.2rem] font-medium leading-8 text-[#555]"
                    >
                      <span>{item}</span>
                      <span className="text-lg">😄</span>
                    </div>
                  ))}
                </div>

                <div className="ml-auto mt-2 flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-[1.2rem] font-medium text-white">
                  <span>Pass</span>
                  <span className="h-6 w-px bg-white/40" />
                  <span>96%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-[#fafafa] px-6 py-24 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Highlights
            </div>

            <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <h2 className="max-w-[680px] text-[clamp(2.5rem,4.8vw,4.45rem)] font-bold leading-[0.95] text-primary">
                The all-in-one platform for AI support agents
              </h2>

              <p className="max-w-[640px] text-xl font-medium leading-relaxed text-gray-600 lg:pt-4">
                Build intelligent AI customer support agents that understand
                your users, resolve complex issues, and improve business
                performance over time.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:border-secondary/40 hover:shadow-lg"
                >
                  <div className="relative flex h-[355px] items-center justify-center overflow-hidden border-b border-gray-100 bg-white">
                    {item.visual === 'models' && (
                      <div className="relative flex h-full w-full items-center justify-center">
                        <div className="absolute left-1/2 top-[52px] h-28 border-l border-dashed border-gray-300" />
                        <div className="absolute left-[24%] top-[142px] h-20 w-[52%] rounded-t-[3rem] border-x border-t border-dashed border-gray-300" />

                        <div className="absolute top-12 flex h-[88px] w-[88px] items-center justify-center rounded-2xl bg-primary text-4xl font-black text-white shadow-[0_8px_0_var(--secondary)]">
                          F
                        </div>

                        <div className="absolute left-[-26px] top-[178px] h-[82px] w-[82px] rounded-2xl bg-secondary/10" />
                        <div className="absolute right-[-26px] top-[260px] h-[82px] w-[82px] rounded-2xl bg-secondary/10" />

                        <div className="grid grid-cols-4 gap-5 px-14 pt-24">
                          {[
                            <BrainCircuit key="brain" className="h-10 w-10 text-primary" />,
                            <span key="g" className="text-4xl font-bold text-secondary">G</span>,
                            <Bot key="bot" className="h-10 w-10 text-primary" />,
                            <WandSparkles key="spark" className="h-10 w-10 text-secondary" />,
                            <span key="empty-1" />,
                            <span key="empty-2" />,
                            <div key="dots" className="flex items-center gap-1">
                              <span className="h-5 w-8 rounded-full bg-primary/80" />
                              <span className="h-5 w-5 rounded-full bg-secondary/70" />
                              <span className="h-5 w-5 rounded-full bg-secondary/30" />
                            </div>,
                            <span key="empty-3" />,
                          ].map((node, index) => (
                            <div
                              key={index}
                              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm"
                            >
                              {node}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.visual === 'builder' && (
                      <div className="relative flex h-full w-full items-center justify-center">
                        <div className="absolute h-[250px] w-[250px] rounded-full border-2 border-dotted border-gray-300" />

                        <div className="absolute left-7 top-24 flex items-center gap-5 rounded-xl border border-gray-200 bg-white px-5 py-3 text-base font-bold text-gray-500 shadow-sm">
                          <span>B</span>
                          <span className="italic">I</span>
                          <span className="underline">U</span>
                          <span>S</span>
                        </div>

                        <div className="absolute right-8 top-32 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
                          <span className="h-8 w-8 rounded-full bg-primary/75" />
                          <span className="h-8 w-8 rounded-full bg-secondary/75" />
                          <span className="h-8 w-8 rounded-full bg-secondary/20" />
                        </div>

                        <button className="relative rounded-xl bg-primary px-7 py-4 text-base font-bold text-white shadow-[0_8px_0_var(--secondary)]">
                          Create agent
                        </button>

                        <div className="absolute bottom-16 left-11 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-base font-semibold text-gray-600 shadow-sm">
                          <Sparkles className="h-5 w-5 text-primary" />
                          Reply with AI
                        </div>

                        <div className="absolute bottom-24 right-12 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                          <span className="block h-5 w-10 rounded-full bg-secondary" />
                        </div>
                      </div>
                    )}

                    {item.visual === 'security' && (
                      <div className="relative flex h-full w-full items-center justify-center">
                        <div className="absolute top-0 h-32 w-28 bg-gradient-to-b from-secondary to-primary" />
                        <div className="absolute top-[72px] h-[220px] w-[260px] rounded-t-[7rem] border border-gray-200 bg-white" />
                        <div className="absolute top-[138px] flex h-32 w-32 items-center justify-center rounded-[2rem] bg-primary text-white shadow-[0_8px_0_var(--secondary)] [clip-path:polygon(50%_0%,100%_18%,92%_70%,50%_100%,8%_70%,0_18%)]">
                          <Lock className="h-11 w-11" />
                        </div>

                        <div className="absolute left-12 top-36 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dotted border-gray-300 bg-white">
                          <ShieldCheck className="h-6 w-6 text-primary" />
                        </div>

                        <div className="absolute right-12 top-36 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dotted border-gray-300 bg-white">
                          <CheckCircle2 className="h-6 w-6 text-primary" />
                        </div>

                        <div className="absolute bottom-16 flex w-[70%] items-center justify-between rounded-full border-2 border-dotted border-gray-300 bg-white px-6 py-4">
                          <span className="flex gap-2">
                            {Array.from({ length: 8 }).map((_, index) => (
                              <span
                                key={index}
                                className="h-2 w-2 rounded-full bg-primary"
                              />
                            ))}
                          </span>
                          <KeyRound className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-lg font-medium leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white px-6 py-16 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              How it works
            </div>

            <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <h2 className="max-w-[650px] text-[clamp(2.35rem,4.2vw,4rem)] font-bold leading-[0.98] text-primary">
                Conversational AI for Customer Support
              </h2>

              <p className="max-w-[650px] text-lg font-medium leading-relaxed text-gray-600 lg:pt-3">
                With Falco AI, your customers can effortlessly find answers,
                resolve issues, and complete meaningful actions through smooth,
                natural, AI-powered conversations.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-stretch">
              <div className="space-y-3">
                {howItWorksSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep === index;

                  return (
                    <button
                      key={step.title}
                      className={`flex w-full gap-4 rounded-2xl border p-4 text-left transition ${
                        isActive
                          ? 'border-gray-200 bg-white shadow-sm'
                          : 'border-transparent bg-white text-gray-400 hover:border-gray-100 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveStep(index)}
                      type="button"
                    >
                      <span
                        className={`pt-1 text-lg font-bold ${
                          isActive ? 'text-secondary' : 'text-gray-300'
                        }`}
                      >
                        {step.number}
                      </span>

                      <span className="flex-1">
                        <span className="mb-2 flex items-center gap-3">
                          <span
                            className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                              isActive
                                ? 'bg-secondary/10 text-secondary'
                                : 'bg-gray-100 text-gray-400'
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </span>

                          <span
                            className={`text-lg font-bold ${
                              isActive ? 'text-primary' : 'text-gray-400'
                            }`}
                          >
                            {step.title}
                          </span>
                        </span>

                        {isActive && (
                          <span className="block max-w-[520px] text-base font-medium leading-relaxed text-gray-600">
                            {step.description}
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="relative flex min-h-[520px] items-center justify-center rounded-[2rem] bg-gray-50 p-6">
                <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                  <span className="flex gap-1">
                    <span className="h-3.5 w-1.5 rounded-full bg-white" />
                    <span className="h-3.5 w-1.5 rounded-full bg-white" />
                  </span>
                </div>

                <div className="w-full max-w-[455px] rounded-3xl bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                        <ActiveHowItWorksIcon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-secondary">
                          {activeHowItWorksStep.number}
                        </p>
                        <h3 className="text-xl font-bold text-primary">
                          {activeHowItWorksStep.title}
                        </h3>
                      </div>
                    </div>

                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>

                  {activeStep === 0 && (
                    <div className="space-y-5">
                      <div className="flex gap-3">
                        {[Bot, BrainCircuit, WandSparkles].map((Icon, index) => (
                          <span
                            key={index}
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 text-primary"
                          >
                            <Icon className="h-7 w-7" />
                          </span>
                        ))}
                      </div>
                      <div className="relative h-44 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                        <span className="text-sm font-semibold text-gray-300">
                          {'<instructions>'}
                        </span>
                        <MousePointer2 className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 fill-primary text-primary" />
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-3">
                      <div className="w-4/5 rounded-2xl bg-gray-100 px-4 py-3 text-sm font-medium text-gray-600">
                        Does my plan include priority support?
                      </div>
                      <div className="ml-auto w-4/5 rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-white">
                        Yes. I checked your account and priority support is
                        active.
                      </div>
                      <div className="rounded-2xl border border-gray-200 p-4">
                        <p className="text-sm font-bold text-primary">
                          Action completed
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Customer record updated
                        </p>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div>
                      <div className="mb-5 flex items-end gap-3">
                        {[46, 72, 58, 88, 96].map((height, index) => (
                          <span
                            key={index}
                            className="w-full rounded-t-xl bg-secondary/70"
                            style={{ height }}
                          />
                        ))}
                      </div>
                      <div className="rounded-2xl bg-secondary/10 p-4">
                        <p className="text-sm font-bold text-primary">
                          Improvement trend
                        </p>
                        <p className="mt-1 text-2xl font-bold text-secondary">
                          +28%
                        </p>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-4">
                      <div className="rounded-2xl border border-gray-200 p-4">
                        <p className="text-sm font-bold text-primary">
                          Sensitive request detected
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Routing conversation with full context.
                        </p>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                            <UserRound className="h-5 w-5" />
                          </span>
                          <span>
                            <span className="block font-bold text-primary">
                              Live agent
                            </span>
                            <span className="text-sm text-gray-500">
                              Ready to join
                            </span>
                          </span>
                        </div>
                        <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-bold text-secondary">
                          Ready
                        </span>
                      </div>
                    </div>
                  )}

                  {activeStep === 4 && (
                    <div className="grid gap-4">
                      <div className="grid grid-cols-3 gap-3">
                        {['2.4k', '96%', '1.8m'].map((metric, index) => (
                          <div
                            key={metric}
                            className="rounded-2xl bg-gray-50 p-4 text-center"
                          >
                            <p className="text-xl font-bold text-primary">
                              {metric}
                            </p>
                            <p className="mt-1 text-xs font-semibold text-gray-400">
                              {['Chats', 'Resolved', 'Saved'][index]}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-2xl border border-gray-200 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-sm font-bold text-primary">
                            Support performance
                          </span>
                          <BarChart3 className="h-5 w-5 text-secondary" />
                        </div>
                        <div className="h-2 rounded-full bg-gray-100">
                          <div className="h-2 w-[82%] rounded-full bg-secondary" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#fafafa] px-6 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Features
            </div>

            <div className="mb-14">
              <h2 className="max-w-[980px] text-[clamp(2.5rem,4.8vw,4.4rem)] font-bold leading-[1] text-primary">
                Build the ideal customer-facing AI agent
              </h2>

              <p className="mt-5 max-w-[760px] text-xl font-medium leading-relaxed text-gray-600">
                Falco AI gives your team the tools to train capable support
                agents, connect business systems, and deliver reliable customer
                experiences across every channel.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="relative flex h-[330px] items-center justify-center overflow-hidden border-b border-gray-100 bg-white">
                  <div className="absolute inset-0 bg-[radial-gradient(#d7dbe2_1px,transparent_1px)] [background-size:18px_18px] opacity-60" />

                  <div className="relative h-[260px] w-full max-w-[520px]">
                    <div className="absolute right-4 top-2 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-bold text-primary shadow-sm">
                      What is the status of my order?
                      <span className="h-7 w-7 rounded-full bg-gray-200" />
                    </div>

                    <div className="absolute left-4 top-20 rounded-2xl bg-gray-100 px-5 py-4 text-sm font-bold text-primary shadow-sm">
                      Here is your order status:
                    </div>

                    <div className="absolute left-10 top-[120px] h-20 w-20 rounded-bl-[2rem] border-b border-l border-dashed border-gray-300" />

                    <div className="absolute bottom-8 left-20 w-[270px] rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-bold text-primary">
                          Out for delivery
                        </span>
                        <span className="text-xs font-semibold text-gray-500">
                          Arriving Sunday
                        </span>
                      </div>
                      <div className="h-3 rounded-full bg-gray-100">
                        <div className="h-3 w-[82%] rounded-full bg-secondary" />
                      </div>
                    </div>

                    <div className="absolute bottom-8 right-3 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-secondary text-white shadow-sm">
                      <Sparkles className="h-8 w-8" />
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-primary">
                    Sync with live business data
                  </h3>

                  <p className="mt-3 text-base font-medium leading-relaxed text-gray-600">
                    Connect your agent to order tools, CRMs, help desks, and
                    internal systems so it can pull accurate information such as
                    order updates, account details, and subscription activity.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="relative flex h-[330px] items-center justify-center overflow-hidden border-b border-gray-100 bg-white">
                  <div className="relative h-[260px] w-full max-w-[540px]">
                    <div className="absolute left-4 top-5 w-[225px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                          S
                        </span>
                        <span className="text-sm font-bold text-primary">
                          Update subscription
                        </span>
                      </div>
                      <div className="h-3 rounded-full bg-gray-100">
                        <div className="h-3 w-[68%] rounded-full bg-secondary/30" />
                      </div>
                    </div>

                    <div className="absolute right-4 top-5 w-[225px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                          DB
                        </span>
                        <span className="text-sm font-bold text-primary">
                          Update database
                        </span>
                      </div>
                      <div className="h-3 rounded-full bg-gray-100">
                        <div className="h-3 w-[58%] rounded-full bg-secondary/30" />
                      </div>
                    </div>

                    <div className="absolute left-1/2 top-[96px] h-20 w-[280px] -translate-x-1/2 rounded-b-[3rem] border-x border-b border-dashed border-gray-300" />

                    <div className="absolute left-1/2 top-[105px] -translate-x-1/2 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-white shadow-sm">
                      AI action
                    </div>

                    <div className="absolute bottom-10 left-1/2 w-[300px] -translate-x-1/2 rounded-3xl bg-gray-100 p-5 shadow-sm">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                          <CheckCircle2 className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-bold text-primary">
                          Plan updated
                        </span>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <span className="mr-3 text-sm font-semibold text-gray-400 line-through">
                          $250.00
                        </span>
                        <span className="text-lg font-bold text-primary">
                          $200.00
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          {' '}
                          /m
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-primary">
                    Automate actions across your tools
                  </h3>

                  <p className="mt-3 text-base font-medium leading-relaxed text-gray-600">
                    Configure safe actions your agent can perform in connected
                    systems, from updating plans and customer records to
                    changing addresses or triggering workflow automations.
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="relative flex h-[260px] items-center justify-center overflow-hidden border-b border-gray-100 bg-white">
                  <div className="absolute inset-x-6 top-24 h-[100px] bg-gradient-to-r from-secondary/10 via-secondary/5 to-primary/10 blur-sm" />

                  <div className="relative h-[205px] w-full max-w-[350px]">
                    <div className="absolute left-8 top-0 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-center text-sm font-bold text-primary shadow-sm">
                      I am not sure which plan fits me. Can you help?
                    </div>

                    <div className="absolute left-1/2 top-16 h-20 w-24 -translate-x-1/2 rounded-b-[2.5rem] border-x border-b border-dashed border-gray-300" />

                    <div className="absolute bottom-0 left-0 w-[145px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="mb-4 flex items-center gap-2">
                        <BrainCircuit className="h-5 w-5 text-primary" />
                        <span className="text-sm font-bold text-primary">
                          Model A
                        </span>
                      </div>
                      <div className="space-y-2">
                        <span className="block h-2 rounded-full bg-gray-100" />
                        <span className="block h-2 w-4/5 rounded-full bg-gray-100" />
                        <span className="block h-2 w-3/5 rounded-full bg-gray-100" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-[145px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="mb-4 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-secondary" />
                        <span className="text-sm font-bold text-primary">
                          Model B
                        </span>
                      </div>
                      <div className="space-y-2">
                        <span className="block h-2 rounded-full bg-gray-100" />
                        <span className="block h-2 w-5/6 rounded-full bg-gray-100" />
                        <span className="block h-2 w-2/3 rounded-full bg-gray-100" />
                      </div>
                    </div>

                    <div className="absolute bottom-11 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
                      <GitCompareArrows className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">
                    Test and compare AI models
                  </h3>
                  <p className="mt-3 text-base font-medium leading-relaxed text-gray-600">
                    Try different model setups, prompts, and behaviors so every
                    agent is tuned for the support experience you need.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="relative flex h-[260px] items-center justify-center overflow-hidden border-b border-gray-100 bg-white">
                  <div className="relative h-[205px] w-full max-w-[350px]">
                    <div className="absolute right-3 top-0 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-bold text-primary shadow-sm">
                      I would like a refund
                    </div>

                    <div className="absolute left-3 top-16 rounded-2xl bg-gray-100 px-5 py-4 text-sm font-bold text-primary shadow-sm">
                      Sure, I can create a ticket.
                    </div>

                    <div className="absolute left-12 top-[122px] h-px w-[250px] bg-gray-200" />

                    <div className="absolute left-1/2 top-[111px] flex -translate-x-1/2 items-center gap-2 bg-white px-3 text-xs font-bold text-gray-400">
                      <Ticket className="h-4 w-4" />
                      Ticket submitted
                    </div>

                    <div className="absolute bottom-0 left-3 right-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                            <Ticket className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="font-bold text-primary">
                              Ticket #234
                            </p>
                            <p className="text-sm font-medium text-gray-500">
                              Open
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gray-400">
                          12m ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">
                    Escalate with full context
                  </h3>
                  <p className="mt-3 text-base font-medium leading-relaxed text-gray-600">
                    Set clear rules for when Falco AI should hand off to a live
                    agent, open a helpdesk ticket, or request human review.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="relative flex h-[260px] items-center justify-center overflow-hidden border-b border-gray-100 bg-white">
                  <div className="w-full max-w-[310px] rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="text-lg font-bold text-primary">
                        Topics
                      </h4>
                      <span className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-primary shadow-sm">
                        Account setup 643
                      </span>
                    </div>

                    <div className="relative h-[120px] overflow-hidden rounded-2xl bg-gray-50">
                      <svg
                        className="h-full w-full"
                        fill="none"
                        viewBox="0 0 300 120"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 74C44 16 76 103 118 50C166 -11 197 125 300 45"
                          stroke="#0566FF"
                          strokeWidth="3"
                        />
                        <path
                          d="M0 24C50 6 70 74 112 55C167 30 190 28 300 92"
                          stroke="#D1D5DB"
                          strokeWidth="3"
                        />
                      </svg>
                      <MousePointer2 className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 fill-primary text-primary" />
                    </div>

                    <div className="mt-4 flex justify-between rounded-2xl bg-gray-50 px-4 py-3 text-sm font-bold">
                      <span className="flex items-center gap-2 text-gray-600">
                        <ThumbsUp className="h-4 w-4 text-secondary" />
                        94% Positive
                      </span>
                      <span className="flex items-center gap-2 text-gray-600">
                        <ThumbsDown className="h-4 w-4 text-gray-400" />
                        4% Negative
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">
                    Advanced reporting
                  </h3>
                  <p className="mt-3 text-base font-medium leading-relaxed text-gray-600">
                    Track conversation themes, satisfaction signals, and agent
                    performance so your team can keep improving support.
                  </p>
                </div>
              </article>
            </div>

            <article className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    Works with your tools
                  </h3>
                  <p className="mt-3 max-w-[420px] text-base font-medium leading-relaxed text-gray-600">
                    Connect the apps, data sources, and workflow tools your team
                    already uses to expand what each agent can understand and do.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    'Make',
                    'Zendesk',
                    'Notion',
                    'Slack',
                    'Stripe',
                    'Salesforce',
                    'Cal.com',
                    'Calendly',
                    'WhatsApp',
                    'Zapier',
                    'Messenger',
                  ].map((tool, index) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-2 rounded-full bg-gray-100 py-2 pl-2 pr-4 text-sm font-bold text-primary"
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-black ${
                          index % 3 === 0
                            ? 'text-secondary'
                            : index % 3 === 1
                              ? 'text-primary'
                              : 'text-gray-500'
                        }`}
                      >
                        {tool.slice(0, 1)}
                      </span>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                {
                  icon: Code2,
                  title: 'Developer-friendly API',
                  description:
                    'Use APIs, client libraries, and embeddable components to bring AI support directly into your product.',
                },
                {
                  icon: EyeOff,
                  title: 'Fully brandable',
                  description:
                    'Customize the customer-facing widget so the experience feels native to your brand.',
                },
                {
                  icon: TrendingUp,
                  title: 'Keeps improving',
                  description:
                    'Learns from connected systems and previous conversations to get sharper over time.',
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <Icon className="mt-1 h-6 w-6 shrink-0 text-gray-500" />
                    <div>
                      <h3 className="text-base font-bold text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base font-medium leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Explore */}
        <section className="bg-[#07090d] px-6 py-20 text-white sm:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              Explore
            </div>

            <div className="mb-10 max-w-[920px]">
              <h2 className="max-w-[780px] text-[clamp(2.5rem,4.8vw,4.25rem)] font-bold leading-[0.98] text-white">
                Discover the Falco AI platform
              </h2>
            </div>

            <div className="mb-6 flex flex-wrap gap-3">
              {exploreTabs.map((tab, index) => {
                const isActive = activeExploreTab === index;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveExploreTab(index)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-white text-black shadow-sm'
                        : 'bg-transparent text-white/60 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#f7f7f7]">
                <Image
                  src={activeExplore.image}
                  alt={activeExplore.label}
                  width={1600}
                  height={1100}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Ready to Get Started?
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-base text-gray-600">
              Deploy your first AI agent in minutes. No credit card required.
            </p>

            <div className="mt-8 flex justify-center gap-3">
              <button className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary">
                Get Started Free
              </button>
              <button className="rounded-lg border border-secondary px-6 py-2.5 text-sm font-semibold text-secondary transition hover:bg-secondary/5">
                Book a Demo
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 py-8 text-center text-gray-600">
          © 2026 Falco AI. Build smarter AI agents.
        </footer>
      </main>
    </>
  );
}
