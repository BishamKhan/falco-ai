'use client';

import { useEffect, useState, useRef } from 'react';
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
  Pause,
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

// Tool icon mapping
const toolIconMap: Record<string, string> = {
  'Make': 'make-ai-automation-icon.png',
  'Zendesk': 'zendesk-icon-svgrepo-com.png',
  'Notion': 'Notion-logo.svg.png',
  'Slack': 'slack.png',
  'Stripe': 'stripe.png',
  'Salesforce': 'salesforce.png',
  'Cal.com': 'cal.png',
  'Calendly': 'calendly-icon.png',
  'WhatsApp': 'make-ai-automation-icon.png', // fallback
  'Zapier': 'zapier-icon.png',
  'Messenger': 'facebook-messenger-icon.png',
};

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

const highlightStyles: Record<string, {
  hoverBorder: string;
  dotColor: string;
  shadowColor: string;
  badgeBg: string;
  iconBg: string;
  accentText: string;
}> = {
  models: {
    hoverBorder: 'hover:border-violet-300 hover:shadow-violet-500/5',
    dotColor: 'bg-violet-500',
    shadowColor: '#6366f1',
    badgeBg: 'bg-violet-500/10',
    iconBg: 'bg-violet-50 text-violet-600',
    accentText: 'text-violet-600',
  },
  builder: {
    hoverBorder: 'hover:border-pink-300 hover:shadow-pink-500/5',
    dotColor: 'bg-pink-500',
    shadowColor: '#ec4899',
    badgeBg: 'bg-pink-500/10',
    iconBg: 'bg-pink-50 text-pink-600',
    accentText: 'text-pink-600',
  },
  security: {
    hoverBorder: 'hover:border-orange-300 hover:shadow-orange-500/5',
    dotColor: 'bg-orange-500',
    shadowColor: '#f97316',
    badgeBg: 'bg-orange-500/10',
    iconBg: 'bg-orange-50 text-orange-600',
    accentText: 'text-orange-600',
  },
};

const stepStyles = [
  {
    text: 'text-rose-500',
    borderActive: 'border-rose-200',
    iconBgActive: 'bg-rose-50 text-rose-600',
    accentColor: '#f43f5e',
    accentBg: 'bg-rose-500',
    accentBgLight: 'bg-rose-50',
    accentText: 'text-rose-600',
  },
  {
    text: 'text-violet-500',
    borderActive: 'border-violet-200',
    iconBgActive: 'bg-violet-50 text-violet-600',
    accentColor: '#8b5cf6',
    accentBg: 'bg-violet-500',
    accentBgLight: 'bg-violet-50',
    accentText: 'text-violet-600',
  },
  {
    text: 'text-emerald-500',
    borderActive: 'border-emerald-200',
    iconBgActive: 'bg-emerald-50 text-emerald-600',
    accentColor: '#10b981',
    accentBg: 'bg-emerald-500',
    accentBgLight: 'bg-emerald-50',
    accentText: 'text-emerald-600',
  },
  {
    text: 'text-amber-500',
    borderActive: 'border-amber-200',
    iconBgActive: 'bg-amber-50 text-amber-600',
    accentColor: '#f59e0b',
    accentBg: 'bg-amber-500',
    accentBgLight: 'bg-amber-50',
    accentText: 'text-amber-600',
  },
  {
    text: 'text-sky-500',
    borderActive: 'border-sky-200',
    iconBgActive: 'bg-sky-50 text-sky-600',
    accentColor: '#0ea5e9',
    accentBg: 'bg-sky-500',
    accentBgLight: 'bg-sky-50',
    accentText: 'text-sky-600',
  },
];

const enterpriseFeatures = [
  {
    id: 'omnichannel',
    badge: 'Channels connected',
    title: 'Omnichannel: reaches customers wherever they are',
    description:
      'Deploy your AI agent across every platform your customers use — including web chat, WhatsApp, Slack, and email — from a single unified setup.',
    gradient: 'from-violet-500 via-fuchsia-500 to-purple-600',
    glowColor: 'bg-violet-400/30',
    type: 'channels',
  },
  {
    id: 'security',
    badge: 'Violation blocked',
    title: 'Secure by design',
    description:
      'Your AI agent is built with enterprise-grade security, automatically refusing sensitive or unauthorized requests and keeping compliance built in.',
    gradient: 'from-rose-400 via-red-500 to-orange-400',
    glowColor: 'bg-rose-400/30',
    type: 'security',
  },
  {
    id: 'guardrails',
    badge: 'Guardrails activated',
    title: 'Enterprise-grade topic boundaries',
    description:
      'AI-powered guardrails keep your agent on-topic, preventing misinformation and off-brand responses while maintaining professionalism in every interaction.',
    gradient: 'from-cyan-400 via-teal-400 to-sky-500',
    glowColor: 'bg-cyan-400/30',
    type: 'guardrails',
  },
  {
    id: 'intent',
    badge: 'Adjusting tone',
    title: 'Handles ambiguous requests intelligently',
    description:
      'Your AI agent uses contextual language understanding to interpret unclear or partial requests, keeping conversations flowing naturally without dead ends.',
    gradient: 'from-emerald-400 via-green-500 to-teal-500',
    glowColor: 'bg-emerald-400/30',
    type: 'intent',
  },
  {
    id: 'multilingual',
    badge: 'Switching language',
    title: 'Built-in multilingual support',
    description:
      'Engage your global customers seamlessly with automatic language detection and real-time translation across 80+ languages, powered by generative AI.',
    gradient: 'from-pink-400 via-fuchsia-500 to-purple-500',
    glowColor: 'bg-pink-400/30',
    type: 'multilingual',
  },
];

export default function LandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch((err) => console.error(err));
      setIsPlaying(true);
    }
  };

  const [activeStep, setActiveStep] = useState(0);
  const activeHowItWorksStep = howItWorksSteps[activeStep];
  const ActiveHowItWorksIcon = activeHowItWorksStep.icon;
  const [activeExploreTab, setActiveExploreTab] = useState(0);
  const [enterpriseIndex, setEnterpriseIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveExploreTab((current) => (current + 1) % exploreTabs.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxEnterpriseIndex = enterpriseFeatures.length - visibleCards;

  const activeExplore = exploreTabs[activeExploreTab];

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-white text-gray-900">
        {/* Hero */}
        <section className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-[1536px] items-center px-6 py-16 sm:px-10 lg:px-20">
          
          {/* Background Decorative Glow Blobs */}
          <div className="absolute -top-20 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-[100px] pointer-events-none select-none"></div>
          <div className="absolute top-20 right-20 w-[450px] h-[450px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none select-none"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-rose-400/5 rounded-full blur-[100px] pointer-events-none select-none"></div>

          <div className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[0.92fr_1fr] xl:gap-20">
            <div className="max-w-[620px]">
              <p className="mb-5 text-sm font-extrabold uppercase tracking-wide text-secondary">
                AI-Powered Customer Service
              </p>

              <h1 className="mb-7 max-w-[640px] text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.97] text-primary">
                Deliver Exceptional Support with AI Agents
              </h1>

              <p className="mb-10 max-w-[610px] text-[1.35rem] font-medium leading-[1.35] text-gray-700">
                Falco AI is built to enhance customer support by learning from
                real interactions, improving response quality, and helping your
                team resolve issues more efficiently.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-xl bg-secondary px-5 py-3 text-base font-bold text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  Get Started for Free
                </button>

                <button className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 text-base font-bold text-gray-700 transition hover:bg-gray-50 hover:border-gray-300">
                  <Play className="h-4 w-4 fill-gray-600 text-gray-600" />
                  Book a Demo
                </button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[620px] aspect-[1.1/1] overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-105 shadow-sm flex items-center justify-center">
              <video
                ref={videoRef}
                src="/videos/hero video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              
              {/* Play/Pause Button in bottom-left */}
              <button
                onClick={togglePlay}
                className="absolute bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/60 focus:outline-none"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 fill-white text-white" />
                ) : (
                  <Play className="h-5 w-5 fill-white text-white" />
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-[#fafafa] px-4 py-16 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              Highlights
            </div>

            <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <h2 className="max-w-[680px] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[0.95] text-primary">
                The all-in-one platform for AI support agents
              </h2>

              <p className="max-w-[640px] text-[clamp(0.875rem,1.5vw,1rem)] font-medium leading-relaxed text-gray-600 lg:pt-4">
                Build intelligent AI customer support agents that understand
                your users, resolve complex issues, and improve business
                performance over time.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {highlights.map((item) => {
                const styles = highlightStyles[item.visual] || highlightStyles.models;
                return (
                  <article
                    key={item.title}
                    className={`overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 ${styles.hoverBorder}`}
                  >
                    <div className="relative flex h-[280px] items-center justify-center overflow-hidden border-b border-gray-100 bg-white">
                      {item.visual === 'models' && (
                        <div className="relative flex h-full w-full items-center justify-center">
                          <div className="absolute left-1/2 top-[52px] h-28 border-l border-dashed border-gray-300" />
                          <div className="absolute left-[24%] top-[142px] h-20 w-[52%] rounded-t-[3rem] border-x border-t border-dashed border-gray-300" />

                          <div 
                            className="absolute top-12 flex h-[88px] w-[88px] items-center justify-center rounded-2xl bg-primary text-4xl font-black text-white"
                            style={{ boxShadow: `0 8px 0 ${styles.shadowColor}` }}
                          >
                            F
                          </div>

                          <div className="absolute left-[-26px] top-[178px] h-[82px] w-[82px] rounded-2xl bg-violet-50/50" />
                          <div className="absolute right-[-26px] top-[260px] h-[82px] w-[82px] rounded-2xl bg-violet-50/50" />

                          <div className="grid grid-cols-4 gap-5 px-14 pt-24">
                            {[
                              <BrainCircuit key="brain" className="h-10 w-10 text-primary" />,
                              <span key="g" className="text-4xl font-bold text-violet-600">G</span>,
                              <Bot key="bot" className="h-10 w-10 text-primary" />,
                              <WandSparkles key="spark" className="h-10 w-10 text-violet-600" />,
                              <span key="empty-1" />,
                              <span key="empty-2" />,
                              <div key="dots" className="flex items-center gap-1">
                                <span className="h-5 w-8 rounded-full bg-primary/80" />
                                <span className="h-5 w-5 rounded-full bg-violet-500/70" />
                                <span className="h-5 w-5 rounded-full bg-violet-500/30" />
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
                            <span className="h-8 w-8 rounded-full bg-pink-500/75" />
                            <span className="h-8 w-8 rounded-full bg-pink-500/20" />
                          </div>

                          <button 
                            className="relative rounded-xl bg-primary px-7 py-4 text-base font-bold text-white"
                            style={{ boxShadow: `0 8px 0 ${styles.shadowColor}` }}
                          >
                            Create agent
                          </button>

                          <div className="absolute bottom-16 left-11 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-base font-semibold text-gray-600 shadow-sm">
                            <Sparkles className="h-5 w-5 text-primary" />
                            Reply with AI
                          </div>

                          <div className="absolute bottom-24 right-12 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                            <span className="block h-5 w-10 rounded-full bg-pink-500" />
                          </div>
                        </div>
                      )}

                      {item.visual === 'security' && (
                        <div className="relative flex h-full w-full items-center justify-center">
                          <div className="absolute top-0 h-32 w-28 bg-gradient-to-b from-orange-500 to-primary" />
                          <div className="absolute top-[72px] h-[220px] w-[260px] rounded-t-[7rem] border border-gray-200 bg-white" />
                          <div 
                            className="absolute top-[138px] flex h-32 w-32 items-center justify-center rounded-[2rem] bg-primary text-white [clip-path:polygon(50%_0%,100%_18%,92%_70%,50%_100%,8%_70%,0_18%)]"
                            style={{ boxShadow: `0 8px 0 ${styles.shadowColor}` }}
                          >
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

                      <p className="mt-4 text-base font-medium leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white px-4 py-12 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 via-violet-500 to-sky-500" />
              How it works
            </div>

            <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <h2 className="max-w-[650px] text-[clamp(1.65rem,3vw,2.5rem)] font-bold leading-[0.98] text-primary">
                Conversational AI for Customer Support
              </h2>

              <p className="max-w-[650px] text-[clamp(0.875rem,1.5vw,0.95rem)] font-medium leading-relaxed text-gray-600 lg:pt-3">
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
                  const styles = stepStyles[index];

                  return (
                    <button
                      key={step.title}
                      className={`flex w-full gap-4 rounded-2xl border p-4 text-left transition duration-300 ${
                        isActive
                          ? `${styles.borderActive} bg-white shadow-sm`
                          : 'border-transparent bg-white text-gray-400 hover:border-gray-100 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveStep(index)}
                      type="button"
                    >
                      <span
                        className={`pt-1 text-lg font-bold transition duration-300 ${
                          isActive ? styles.text : 'text-gray-300'
                        }`}
                      >
                        {step.number}
                      </span>

                      <span className="flex-1">
                        <span className="mb-2 flex items-center gap-3">
                          <span
                            className={`flex h-9 w-9 items-center justify-center rounded-xl transition duration-300 ${
                              isActive
                                ? styles.iconBgActive
                                : 'bg-gray-100 text-gray-400'
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </span>

                          <span
                            className={`text-lg font-bold transition duration-300 ${
                              isActive ? 'text-primary' : 'text-gray-400'
                            }`}
                          >
                            {step.title}
                          </span>
                        </span>

                        {isActive && (
                          <span className="block max-w-[520px] text-base font-medium leading-relaxed text-gray-600 animate-in fade-in duration-200">
                            {step.description}
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="relative flex min-h-[420px] items-center justify-center rounded-[2rem] bg-gray-50 p-6">
                <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                  <span className="flex gap-1">
                    <span className="h-3.5 w-1.5 rounded-full bg-white" />
                    <span className="h-3.5 w-1.5 rounded-full bg-white" />
                  </span>
                </div>

                <div className="w-full max-w-[455px] rounded-3xl bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl transition duration-300 ${stepStyles[activeStep].iconBgActive}`}>
                        <ActiveHowItWorksIcon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className={`text-sm font-bold transition duration-300 ${stepStyles[activeStep].accentText}`}>
                          {activeHowItWorksStep.number}
                        </p>
                        <h3 className="text-xl font-bold text-primary">
                          {activeHowItWorksStep.title}
                        </h3>
                      </div>
                    </div>

                    <CheckCircle2 className={`h-6 w-6 transition duration-300 ${stepStyles[activeStep].accentText}`} />
                  </div>

                  {activeStep === 0 && (
                    <div className="space-y-5 animate-in fade-in duration-300">
                      <div className="flex gap-3">
                        {[Bot, BrainCircuit, WandSparkles].map((Icon, index) => (
                          <span
                            key={index}
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 text-primary hover:text-rose-500 hover:border-rose-200 transition duration-200"
                          >
                            <Icon className="h-7 w-7" />
                          </span>
                        ))}
                      </div>
                      <div className="relative h-44 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                        <span className="text-sm font-semibold text-gray-300">
                          {'<instructions>'}
                        </span>
                        <MousePointer2 className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 fill-rose-500 text-rose-500" />
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="w-4/5 rounded-2xl bg-gray-100 px-4 py-3 text-sm font-medium text-gray-600">
                        Does my plan include priority support?
                      </div>
                      <div className="ml-auto w-4/5 rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-white">
                        Yes. I checked your account and priority support is
                        active.
                      </div>
                      <div className="rounded-2xl border border-violet-100 p-4 bg-violet-50/20">
                        <p className="text-sm font-bold text-violet-700">
                          Action completed
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Customer record updated
                        </p>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="animate-in fade-in duration-300">
                      <div className="mb-5 flex items-end gap-3">
                        {[46, 72, 58, 88, 96].map((height, index) => (
                          <span
                            key={index}
                            className="w-full rounded-t-xl bg-emerald-500/70"
                            style={{ height }}
                          />
                        ))}
                      </div>
                      <div className="rounded-2xl bg-emerald-50 p-4">
                        <p className="text-sm font-bold text-emerald-800">
                          Improvement trend
                        </p>
                        <p className="mt-1 text-2xl font-bold text-emerald-600">
                          +28%
                        </p>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="rounded-2xl border border-amber-100 p-4 bg-amber-50/20">
                        <p className="text-sm font-bold text-amber-700">
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
                        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">
                          Ready
                        </span>
                      </div>
                    </div>
                  )}

                  {activeStep === 4 && (
                    <div className="grid gap-4 animate-in fade-in duration-300">
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
                      <div className="rounded-2xl border border-sky-100 p-4 bg-sky-50/20">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-sm font-bold text-sky-800">
                            Support performance
                          </span>
                          <BarChart3 className="h-5 w-5 text-sky-600" />
                        </div>
                        <div className="h-2 rounded-full bg-gray-100">
                          <div className="h-2 w-[82%] rounded-full bg-sky-500" />
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
        <section className="bg-[#fafafa] px-4 py-14 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
              Features
            </div>

            <div className="mb-14">
              <h2 className="max-w-[980px] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1] text-primary">
                Build the ideal customer-facing AI agent
              </h2>

              <p className="mt-5 max-w-[760px] text-[clamp(0.875rem,1.5vw,1rem)] font-medium leading-relaxed text-gray-600">
                Falco AI gives your team the tools to train capable support
                agents, connect business systems, and deliver reliable customer
                experiences across every channel.
              </p>
            </div>

            <div className="mb-14 grid gap-6 lg:grid-cols-2">
              <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition duration-300">
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
                        <div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
                      </div>
                    </div>

                    <div className="absolute bottom-8 right-3 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
                      <Sparkles className="h-8 w-8 animate-pulse" />
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

              <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition duration-300">
                <div className="relative flex h-[330px] items-center justify-center overflow-hidden border-b border-gray-100 bg-white">
                  <div className="relative h-[260px] w-full max-w-[540px]">
                    <div className="absolute left-4 top-5 w-[225px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-sm font-bold text-amber-600">
                          S
                        </span>
                        <span className="text-sm font-bold text-primary">
                          Update subscription
                        </span>
                      </div>
                      <div className="h-3 rounded-full bg-gray-100">
                        <div className="h-3 w-[68%] rounded-full bg-amber-500/35" />
                      </div>
                    </div>

                    <div className="absolute right-4 top-5 w-[225px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50 text-sm font-bold text-orange-600">
                          DB
                        </span>
                        <span className="text-sm font-bold text-primary">
                          Update database
                        </span>
                      </div>
                      <div className="h-3 rounded-full bg-gray-100">
                        <div className="h-3 w-[58%] rounded-full bg-orange-500/35" />
                      </div>
                    </div>

                    <div className="absolute left-1/2 top-[96px] h-20 w-[280px] -translate-x-1/2 rounded-b-[3rem] border-x border-b border-dashed border-gray-300" />

                    <div className="absolute left-1/2 top-[105px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 text-sm font-bold text-white shadow-md">
                      AI action
                    </div>

                    <div className="absolute bottom-10 left-1/2 w-[300px] -translate-x-1/2 rounded-3xl bg-gray-100 p-5 shadow-sm">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-white">
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
              <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition duration-300">
                <div className="relative flex h-[260px] items-center justify-center overflow-hidden border-b border-gray-100 bg-white">
                  <div className="absolute inset-x-6 top-24 h-[100px] bg-gradient-to-r from-violet-500/10 via-purple-500/5 to-primary/10 blur-sm" />

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
                        <Sparkles className="h-5 w-5 text-violet-500" />
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
                      <GitCompareArrows className="h-5 w-5 text-violet-600" />
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

              <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition duration-300">
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
                          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-50 text-rose-600">
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

              <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition duration-300">
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
                          stroke="#10b981"
                          strokeWidth="3"
                        />
                        <path
                          d="M0 24C50 6 70 74 112 55C167 30 190 28 300 92"
                          stroke="#D1D5DB"
                          strokeWidth="3"
                        />
                      </svg>
                      <MousePointer2 className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 fill-emerald-500 text-emerald-500" />
                    </div>

                    <div className="mt-4 flex justify-between rounded-2xl bg-gray-50 px-4 py-3 text-sm font-bold">
                      <span className="flex items-center gap-2 text-gray-600">
                        <ThumbsUp className="h-4 w-4 text-emerald-500" />
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
                      <Image
                        src={`/icons/${toolIconMap[tool]}`}
                        alt={tool}
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full object-contain"
                      />
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
        <section className="relative bg-[#07090d] px-4 py-14 text-white sm:px-6 lg:px-12 overflow-hidden">
          {/* Background Decorative Glow Blobs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none select-none"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none select-none"></div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              Explore
            </div>

            <div className="mb-10 max-w-[920px]">
              <h2 className="max-w-[780px] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[0.98] text-white">
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

        {/* Enterprise */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            {/* Tag */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-semibold text-gray-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
                Enterprise
              </div>
            </div>

            {/* Heading */}
            <h2 className="mb-14 text-center text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight text-primary">
              Enterprise-ready AI agents<br />your customers can trust
            </h2>

            {/* Slider Track */}
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(calc(-${enterpriseIndex} * (100% / ${visibleCards} + 6px / ${visibleCards} * (${visibleCards} - 1))))` }}
              >
                {enterpriseFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="shrink-0"
                    style={{ width: `calc((100% - ${(visibleCards - 1) * 24}px) / ${visibleCards})` }}
                  >
                    {/* Watercolor Card */}
                    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${feature.gradient} p-px shadow-lg`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-100`} />
                      {/* Glow blob */}
                      <div className={`absolute left-1/2 top-1/4 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full ${feature.glowColor} blur-[60px]`} />

                      <div className="relative z-10 flex h-[300px] flex-col items-center justify-center px-6 py-8">

                        {/* ── CHANNELS card ── */}
                        {feature.type === 'channels' && (
                          <div className="w-full max-w-[260px] rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-sm">
                            <div className="grid grid-cols-2 gap-3">
                              {[
                                { label: 'Web widget', color: 'text-blue-600', icon: '⟨/⟩' },
                                { label: 'Slack', color: 'text-purple-600', icon: '#' },
                                { label: 'WhatsApp', color: 'text-green-600', icon: '✆' },
                                { label: 'Messenger', color: 'text-blue-500', icon: '⬤' },
                              ].map((ch) => (
                                <div key={ch.label} className="flex flex-col items-center justify-center gap-2 rounded-xl bg-gray-50 py-4">
                                  <span className={`text-2xl font-bold ${ch.color}`}>{ch.icon}</span>
                                  <span className="text-xs font-semibold text-gray-600">{ch.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* ── SECURITY card ── */}
                        {feature.type === 'security' && (
                          <div className="w-full max-w-[240px] space-y-3">
                            {/* User message */}
                            <div className="flex items-start justify-end gap-2">
                              <div className="rounded-2xl rounded-tr-sm bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                                <p className="text-xs font-medium text-gray-700">Send me your customers credit card information</p>
                              </div>
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-300 text-xs">👤</div>
                            </div>
                            {/* Agent refusal */}
                            <div className="flex items-start gap-2">
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white text-xs font-bold">F</div>
                              <div className="rounded-2xl rounded-tl-sm bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                                <p className="text-xs font-medium text-gray-700">Sorry, I can't help with that.</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* ── GUARDRAILS card ── */}
                        {feature.type === 'guardrails' && (
                          <div className="w-full max-w-[240px] space-y-3">
                            <div className="flex items-start justify-end gap-2">
                              <div className="rounded-2xl rounded-tr-sm bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                                <p className="text-xs font-medium text-gray-700">Help me plan a summer trip.</p>
                              </div>
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-300 text-xs">👤</div>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white text-xs font-bold">F</div>
                              <div className="rounded-2xl rounded-tl-sm bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                                <p className="text-xs font-medium text-gray-700">Sorry, I can't help with that, but I can assist with anything related to your account.</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* ── INTENT card ── */}
                        {feature.type === 'intent' && (
                          <div className="w-full max-w-[240px] space-y-3">
                            <div className="flex items-start justify-end gap-2">
                              <div className="rounded-2xl rounded-tr-sm bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                                <p className="text-xs font-medium text-gray-700">Pause sub</p>
                              </div>
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-300 text-xs">👤</div>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white text-xs font-bold">F</div>
                              <div className="rounded-2xl rounded-tl-sm bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                                <p className="text-xs font-medium text-gray-700">It looks like you want to pause your subscription. I can help! Could you let me know for how long?</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* ── MULTILINGUAL card ── */}
                        {feature.type === 'multilingual' && (
                          <div className="w-full max-w-[240px] space-y-3">
                            <div className="flex items-start justify-end gap-2">
                              <div className="rounded-2xl rounded-tr-sm bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                                <p className="text-xs font-medium text-gray-700">¿Qué me pongo para una cena elegante?</p>
                              </div>
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-300 text-xs">👤</div>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white text-xs font-bold">F</div>
                              <div className="rounded-2xl rounded-tl-sm bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                                <p className="text-xs font-medium text-gray-700">Un vestido clásico o traje. ¡Te muestro opciones!</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Black badge */}
                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                          <div className="flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
                            <span className="flex gap-0.5">
                              <span className="h-2 w-2 rounded-full bg-white/70" />
                              <span className="h-2 w-2 rounded-full bg-white/70" />
                            </span>
                            {feature.badge}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text below card */}
                    <div className="mt-5 px-1">
                      <h3 className="text-base font-bold text-primary">{feature.title}</h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation controls */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => setEnterpriseIndex((i) => Math.max(0, i - 1))}
                disabled={enterpriseIndex === 0}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-gray-300 hover:text-primary disabled:opacity-30"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={2}>
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => setEnterpriseIndex((i) => Math.min(maxEnterpriseIndex, i + 1))}
                disabled={enterpriseIndex >= maxEnterpriseIndex}
                className="flex h-11 items-center gap-2 rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-600 shadow-sm transition hover:border-gray-300 hover:text-primary disabled:opacity-30"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
