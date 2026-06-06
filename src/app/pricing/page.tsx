'use client';

import React, { useState } from 'react';
import { Check, Info, Star } from 'lucide-react';

const plans = [
  {
    id: 'free',
    name: 'Free',
    icon: '⭐',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for exploring Falco AI.',
    cta: 'Get started',
    ctaStyle: 'border',
    featured: false,
    everything: null,
    features: [
      'Limited access to AI models',
      '50 message credits / month',
      '1 team member',
      '400 KB per AI agent',
      'AI agents deleted after 14 days of inactivity',
    ],
  },
  {
    id: 'hobby',
    name: 'Hobby',
    icon: '🌟',
    monthlyPrice: 40,
    yearlyPrice: 32,
    description: 'For individuals getting started with AI support.',
    cta: 'Subscribe',
    ctaStyle: 'border',
    featured: false,
    everything: 'Free',
    features: [
      'Access to advanced AI models',
      '500 message credits / month',
      '5 enabled AI Actions per agent',
      '10 MB per AI agent',
      '2 team members',
      'Basic integrations',
      'Basic analytics',
      'File attachments',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    icon: '🚀',
    monthlyPrice: 150,
    yearlyPrice: 120,
    description: 'For growing teams that need more power.',
    cta: 'Subscribe',
    ctaStyle: 'primary',
    featured: true,
    everything: 'Hobby',
    features: [
      '4,000 message credits / month',
      'All AI models including GPT-4o',
      '8 enabled AI Actions per agent',
      '20 MB per AI agent',
      '3 team members',
      'Advanced integrations',
      'Full analytics & reporting',
      'Priority support',
      'Remove Falco AI branding',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: '💎',
    monthlyPrice: 500,
    yearlyPrice: 400,
    description: 'For high-volume businesses that need enterprise features.',
    cta: 'Subscribe',
    ctaStyle: 'border',
    featured: false,
    everything: 'Standard',
    features: [
      '10,000 message credits / month',
      'All AI models + early access to new',
      '12 enabled AI Actions per agent',
      '40 MB per AI agent',
      '5 team members',
      'Custom integrations via API',
      'Advanced security & HIPAA',
      'Dedicated account manager',
      'SLA support',
    ],
  },
];

const comparisonSections = [
  {
    title: 'Configuration',
    rows: [
      {
        feature: 'Agents',
        tooltip: 'The number of active AI agents you can configure.',
        free: '1',
        hobby: '1',
        standard: '1',
        pro: '1',
      },
      {
        feature: 'AI Actions per agent',
        tooltip: 'The number of custom API integration actions each agent can execute.',
        free: '0',
        hobby: '5',
        standard: '8',
        pro: '12',
      },
      {
        feature: 'Training content size',
        tooltip: 'The maximum total training text content size allowed per agent.',
        free: '400 KB',
        hobby: '10 MB',
        standard: '20 MB',
        pro: '40 MB',
      },
      {
        feature: 'Workspace seats',
        tooltip: 'The number of team member seats included in this plan.',
        free: '1 member',
        hobby: '2 members',
        standard: '3 members',
        pro: '5 members',
      },
      {
        feature: 'Personalization',
        tooltip: 'Allows uploading custom avatars, changing chatbot colors, and styling.',
        free: false,
        hobby: false,
        standard: true,
        pro: true,
      },
      {
        feature: 'Attachments',
        tooltip: 'Permits end-users to upload file attachments during chat sessions.',
        free: false,
        hobby: true,
        standard: true,
        pro: true,
      },
      {
        feature: 'Outbound campaigns',
        tooltip: 'Send outbound messages to users via email or SMS.',
        free: false,
        hobby: false,
        standard: true,
        pro: true,
      },
    ],
  },
  {
    title: 'Voice',
    rows: [
      {
        feature: 'Voice',
        tooltip: 'Voice interaction capabilities (voice-to-text / text-to-speech).',
        free: false,
        hobby: false,
        standard: true,
        pro: true,
      },
      {
        feature: 'Telephony',
        tooltip: 'Integration with direct phone numbers (SIP / Twilio / custom voice line).',
        free: false,
        hobby: false,
        standard: true,
        pro: true,
      },
      {
        feature: 'Concurrent Calls',
        tooltip: 'The maximum number of simultaneous phone calls your agents can handle.',
        free: '—',
        hobby: '—',
        standard: '10',
        pro: '20',
      },
    ],
  },
];

const faqs = [
  {
    question: 'How do message credits work?',
    answer:
      'Each request to the AI model costs a certain number of message credits depending on the model you choose. If AI Actions are enabled, the agent may make multiple requests per conversation turn — each counts as a separate credit.',
  },
  {
    question: 'When are my message credits renewed?',
    answer:
      'Credits renew at the start of every calendar month, regardless of when you subscribed. For example, if you subscribe on March 15th, your credits will renew on April 1st.',
  },
  {
    question: 'How does auto-recharge work?',
    answer:
      'When your credits fall below the threshold you set, we automatically top up your account with non-expiring credits so your service is never interrupted.',
  },
  {
    question: 'What is the difference between subscription and auto-recharge credits?',
    answer:
      'Subscription credits renew monthly and unused credits do not carry over. Auto-recharge credits are added on demand, never expire, and are always available in your account.',
  },
  {
    question: 'How many users can interact with my AI agent?',
    answer:
      'If your agent is private, only your team can access it. If made public, anyone with the link can interact with it — there is no cap on end-user conversations.',
  },
  {
    question: 'How much knowledge data can I give one agent?',
    answer:
      'Free: 400 KB | Hobby: 10 MB | Standard: 20 MB | Pro: 40 MB. This refers to the extracted text content, not the raw file sizes.',
  },
];

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'VP of Customer Support, ShopVibe',
    initials: 'SJ',
    gradient: 'from-fuchsia-500 to-pink-600',
    stars: 5,
    quote: 'Falco AI has cut our customer response times by 85%. It resolves about 70% of common queries instantly without any human intervention. The ROI was visible in the first week.',
  },
  {
    name: 'Marcus Chen',
    role: 'Founder & CTO, SaaSify',
    initials: 'MC',
    gradient: 'from-blue-500 to-indigo-600',
    stars: 5,
    quote: 'The AI Actions are a game-changer. Our agent doesn\'t just answer questions; it pulls live order statuses and updates subscriptions in our database. It feels like magic.',
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Operations, NexaTravel',
    initials: 'ER',
    gradient: 'from-emerald-400 to-teal-600',
    stars: 5,
    quote: 'We set up our AI agent in less than an hour by pointing it to our online documentation. It handled 3,000+ support calls last month with a 94% satisfaction score.',
  },
  {
    name: 'David Vance',
    role: 'Marketing Director, GrowthFlow',
    initials: 'DV',
    gradient: 'from-amber-400 to-orange-500',
    stars: 5,
    quote: 'We use the lead qualification agent on our homepage. It engages visitors, answers product questions, and schedules sales demo calls directly into our calendar. Absolutely fantastic.',
  },
  {
    name: 'Aisha Rahman',
    role: 'Product Manager, EduLearn',
    initials: 'AR',
    gradient: 'from-purple-500 to-violet-700',
    stars: 5,
    quote: 'The knowledge assistant has saved our internal support team hours of digging through old docs. It is super fast and extremely accurate. Highly recommend it.',
  },
  {
    name: 'Liam Peterson',
    role: 'Founder, FitZone',
    initials: 'LP',
    gradient: 'from-rose-500 to-red-600',
    stars: 5,
    quote: 'Our members love the instant support. They can change class bookings, check club hours, and resolve billing issues in seconds. It has completely automated our front desk.',
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-28 text-center">
        {/* Subtle vertical lines decoration */}
        <div className="pointer-events-none absolute inset-0 flex justify-center gap-16 opacity-40" aria-hidden>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
            </div>
          ))}
        </div>

        <h1 className="relative mx-auto max-w-3xl text-balance text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-gray-900">
          Predictable pricing,<br />scalable plans
        </h1>
        <p className="relative mt-4 text-lg text-gray-500">Designed for every stage of your journey.</p>

        {/* Toggle */}
        <div className="relative mt-8 flex flex-col items-center gap-3">
          <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`rounded-lg px-6 py-2 text-sm font-medium transition-all duration-200 ${
                !isYearly ? 'bg-gray-900 text-white shadow' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`rounded-lg px-6 py-2 text-sm font-medium transition-all duration-200 ${
                isYearly ? 'bg-gray-900 text-white shadow' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Yearly
            </button>
          </div>
          <p className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 text-white text-xs">✓</span>
            20% off yearly plans
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-4 lg:gap-0 lg:rounded-3xl lg:border lg:border-gray-200 lg:bg-white lg:shadow-sm">
          {plans.map((plan, i) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isFirst = i === 0;
            const isLast = i === plans.length - 1;

            return (
              <div key={plan.id} className="relative flex flex-col">
                {/* Popular badge */}
                {plan.featured && (
                  <div className="absolute -top-7 left-0 right-0 flex justify-center lg:justify-start lg:left-6 lg:right-auto">
                    <span className="rounded-t-xl bg-primary px-4 py-1.5 text-xs font-bold text-white">
                      Popular
                    </span>
                  </div>
                )}

                <div
                  className={`flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:rounded-none lg:border-0 lg:border-r lg:border-r-gray-100 lg:shadow-none ${
                    isFirst ? 'lg:rounded-l-3xl' : ''
                  } ${isLast ? 'lg:rounded-r-3xl lg:border-r-0' : ''} ${
                    plan.featured ? 'lg:mt-[-28px] lg:rounded-t-3xl lg:pt-12' : ''
                  }`}
                >
                  {/* Plan name */}
                  <div className="mb-6">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-lg">{plan.icon}</span>
                      <span className="text-lg font-semibold text-gray-900">{plan.name}</span>
                    </div>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        ${price}
                      </span>
                      <span className="mb-1 text-sm text-gray-400">/ mo</span>
                    </div>
                    {isYearly && plan.yearlyPrice > 0 && (
                      <p className="mt-1 text-xs text-gray-400">
                        ${plan.yearlyPrice * 12} billed annually
                      </p>
                    )}
                    {plan.yearlyPrice === 0 && (
                      <p className="mt-1 text-xs text-transparent select-none">—</p>
                    )}
                  </div>

                  {/* CTA button */}
                  <div className="relative mb-6">
                    {plan.featured && (
                      <div className="absolute -bottom-1.5 left-0 right-0 h-3 rounded-b-lg bg-gradient-to-r from-orange-400 via-pink-400 to-fuchsia-500 opacity-80" />
                    )}
                    <button
                      className={`relative h-11 w-full rounded-xl text-sm font-semibold transition-all duration-200 ${
                        plan.featured
                          ? 'bg-primary text-white hover:opacity-90 shadow-md'
                          : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>

                  <div className="mb-4 border-t border-gray-100" />

                  {/* Features */}
                  <ul className="flex flex-col gap-3">
                    {plan.everything && (
                      <li className="text-sm font-medium text-gray-700">
                        Everything in {plan.everything} +
                      </li>
                    )}
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gray-700" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:gap-0">
          <div>
            <p className="font-semibold text-gray-900">Need a custom plan?</p>
            <p className="mt-1 text-sm text-gray-500">
              Talk to us about enterprise pricing, custom credits, and dedicated infrastructure.
            </p>
          </div>
          <button className="shrink-0 rounded-xl border border-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
            Contact sales →
          </button>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">Compare all our plans</h2>
        <div className="overflow-x-auto overflow-y-visible rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-sm border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-200">
                {/* Left header cell with Monthly/Yearly toggle */}
                <th className="sticky top-[73px] left-0 z-30 bg-white p-6 text-left border-b border-gray-200 min-w-[240px] shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Select Billing</span>
                    <div className="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1 shadow-inner w-fit">
                      <button
                        onClick={() => setIsYearly(false)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                          !isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setIsYearly(true)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                          isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        Yearly
                      </button>
                    </div>
                  </div>
                </th>

                {/* Plan Header columns */}
                {plans.map((p) => {
                  const price = isYearly ? p.yearlyPrice : p.monthlyPrice;
                  return (
                    <th key={p.id} className="sticky top-[73px] z-20 p-6 bg-white border-b border-gray-200 min-w-[140px] text-left">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-base font-bold text-gray-900">{p.name}</span>
                            {p.featured && (
                              <span className="rounded bg-black px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-3xl font-extrabold text-gray-950">${price}</span>
                            <span className="text-xs text-gray-400 font-medium">/mo</span>
                            {isYearly && price > 0 && (
                              <span className="ml-1.5 rounded-full bg-red-50 px-1.5 py-0.5 text-[10px] font-bold text-red-600 whitespace-nowrap">
                                20% off
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-gray-400 font-normal mt-1 block h-4">
                            {price === 0 ? 'per month' : isYearly ? 'per month, billed annually' : 'per month'}
                          </span>
                        </div>
                        <button
                          className={`mt-4 w-full py-2 px-4 rounded-xl text-xs font-semibold transition-all duration-150 ${
                            p.featured
                              ? 'bg-black text-white hover:bg-gray-800 shadow-sm'
                              : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                          }`}
                        >
                          {p.cta}
                        </button>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-150">
              {comparisonSections.map((section) => (
                <React.Fragment key={section.title}>
                  {/* Section Separator */}
                  <tr>
                    <td colSpan={5} className="px-6 pt-8 pb-3 text-sm font-bold text-gray-900 bg-gray-50/40 border-b border-gray-200 uppercase tracking-wider">
                      {section.title}
                    </td>
                  </tr>

                  {/* Section Rows */}
                  {section.rows.map((row) => (
                    <tr key={row.feature} className="hover:bg-gray-50/50 transition-colors">
                      {/* Feature Label with tooltip icon */}
                      <td className="sticky left-0 bg-white z-10 px-6 py-4 border-r border-gray-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.02)] min-w-[240px]">
                        <div className="flex items-center gap-1.5 group relative cursor-help w-fit">
                          <span className="font-medium text-sm text-gray-700">{row.feature}</span>
                          {row.tooltip && (
                            <div className="relative">
                              <Info className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                              {/* Tooltip box */}
                              <div className="pointer-events-none absolute left-0 bottom-full mb-2 w-60 rounded-lg bg-gray-900 p-2.5 text-xs font-normal text-white shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-50">
                                {row.tooltip}
                                {/* Tooltip arrow */}
                                <div className="absolute top-full left-4 -mt-1 h-2 w-2 rotate-45 bg-gray-900" />
                              </div>
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Plan Values */}
                      {['free', 'hobby', 'standard', 'pro'].map((planId) => {
                        const val = row[planId as keyof typeof row];
                        return (
                          <td key={planId} className="px-6 py-4 text-left text-sm text-gray-600">
                            {typeof val === 'boolean' ? (
                              val ? (
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-white shadow-sm">
                                  <Check className="h-3 w-3" strokeWidth={3} />
                                </span>
                              ) : (
                                <span className="text-gray-300 font-light">—</span>
                              )
                            ) : (
                              <span className="font-medium text-gray-800">{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-gray-150 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white hover:bg-gray-50/30 transition-colors">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition"
              >
                <span className="font-semibold text-gray-800 text-base">{faq.question}</span>
                <span
                  className={`ml-4 text-gray-400 text-xl font-light transition-transform duration-200 select-none ${
                    openFaq === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-sm leading-relaxed text-gray-500 transition-all duration-350">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by customer support teams worldwide
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            See how Falco AI helps businesses automate support, generate leads, and delight customers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* User details */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-white font-bold text-sm shadow-sm`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
