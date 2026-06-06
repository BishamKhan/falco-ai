'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

/* ─────────────────────────────────────────
   Dropdown data (same links, new design)
───────────────────────────────────────── */

const platformItems = {
  left: {
    heading: 'CORE FEATURES',
    items: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M9 9l6 6M15 9l-6 6" strokeLinecap="round" />
          </svg>
        ),
        title: 'AI Resolution Platform',
        description: 'Deliver faster, smarter customer interactions.',
        href: '#',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 3" strokeLinecap="round" />
          </svg>
        ),
        title: 'AI Agent Engine',
        description: 'Train custom AI agents on your business knowledge.',
        href: '#',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M3 12h4l3 8 4-16 3 8h4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: 'Analytics & Insights',
        description: 'Track conversations and optimize performance.',
        href: '#',
      },
    ],
  },
  right: {
    heading: 'TOOLS',
    items: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: 'Integrations',
        description: 'Connect your existing tools and workflows.',
        href: '#',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M12 20h9M12 4h9M4 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: 'AI Actions',
        description: 'Automate tasks through APIs and custom actions.',
        href: '#',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: 'Security & Privacy',
        description: 'Enterprise-grade security and data protection.',
        href: '#',
      },
    ],
  },
};

const solutionsItems = {
  left: {
    heading: 'BY USE-CASE',
    items: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M18 8h1a4 4 0 010 8h-1" strokeLinecap="round" />
            <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" strokeLinecap="round" />
            <path d="M6 1v3M10 1v3M14 1v3" strokeLinecap="round" />
          </svg>
        ),
        title: 'Customer Support Agent',
        description: 'Instant answers, lower volume, fewer escalations',
        href: '#',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" strokeLinecap="round" />
          </svg>
        ),
        title: 'Sales Agent',
        description: 'Qualify leads, answer questions, and book meetings',
        href: '#',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: 'Knowledge Assistant',
        description: 'Surface accurate answers from your internal docs',
        href: '#',
      },
    ],
  },
  right: {
    heading: 'BY INDUSTRY',
    items: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 22V12h6v10" strokeLinecap="round" />
          </svg>
        ),
        title: 'Ecommerce & Retail',
        description: 'Product questions, shipping, and returns',
        href: '#',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M22 10v6M2 10l10-5 10 5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" strokeLinecap="round" />
          </svg>
        ),
        title: 'Education & Training',
        description: 'Admissions, enrolment, and student questions',
        href: '#',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M18 8h1a4 4 0 010 8h-1" strokeLinecap="round" />
            <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
            <path d="M6 1v3M10 1v3M14 1v3" strokeLinecap="round" />
          </svg>
        ),
        title: 'Fitness & Wellness',
        description: 'Bookings, cancellations, and member support',
        href: '#',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
          </svg>
        ),
        title: 'Travel & Hospitality',
        description: 'Bookings, disruptions, and refunds',
        href: '#',
      },
    ],
  },
};

const resourcesItems = {
  left: {
    heading: 'LEARN',
    items: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M12 20h9M12 4H3m9 0h9M3 4l4 8-4 8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: 'Guides',
        description: 'Tutorials and best practices',
        href: '#',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" />
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" />
          </svg>
        ),
        title: 'Documentation',
        description: 'API references and developer guides',
        href: '#',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: 'Blog',
        description: 'AI trends and product updates',
        href: '#',
      },
    ],
  },
  right: {
    heading: 'UPDATES',
    items: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeLinecap="round" />
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" />
          </svg>
        ),
        title: 'Changelog',
        description: 'See what\'s new in every release',
        href: '#',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-500" stroke="currentColor" strokeWidth={1.5}>
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
          </svg>
        ),
        title: 'Community',
        description: 'Tips, discussions, and peer support',
        href: '#',
      },
    ],
  },
};

/* ─────────────────────────────────────────
   Reusable mega-menu column
───────────────────────────────────────── */
function MenuColumn({
  heading,
  items,
}: {
  heading: string;
  items: { icon: React.ReactNode; title: string; description: string; href: string }[];
}) {
  return (
    <div className="min-w-0">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
        {heading}
      </p>
      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm group-hover/item:border-gray-300 transition-colors">
              {item.icon}
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800 group-hover/item:text-gray-900">
                {item.title}
              </span>
              <span className="mt-0.5 text-xs text-gray-500 leading-snug">
                {item.description}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Navbar
───────────────────────────────────────── */
export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white ">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              Falco AI
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Platform */}
            <div className="group relative">
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                Platform
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {/* Dropdown panel */}
              <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="w-[600px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                  <div className="grid grid-cols-2 divide-x divide-gray-100 p-6 gap-6">
                    <MenuColumn heading={platformItems.left.heading} items={platformItems.left.items} />
                    <div className="pl-6">
                      <MenuColumn heading={platformItems.right.heading} items={platformItems.right.items} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="group relative">
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                Solutions
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {/* Dropdown panel */}
              <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="w-[640px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                  <div className="grid grid-cols-2 divide-x divide-gray-100 p-6 gap-6">
                    <MenuColumn heading={solutionsItems.left.heading} items={solutionsItems.left.items} />
                    <div className="pl-6">
                      <MenuColumn heading={solutionsItems.right.heading} items={solutionsItems.right.items} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="group relative">
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                Resources
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {/* Dropdown panel */}
              <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="w-[560px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                  <div className="grid grid-cols-2 divide-x divide-gray-100 p-6 gap-6">
                    <MenuColumn heading={resourcesItems.left.heading} items={resourcesItems.left.items} />
                    <div className="pl-6">
                      <MenuColumn heading={resourcesItems.right.heading} items={resourcesItems.right.items} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customers */}
            <Link
              href="#"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              Customers
            </Link>

            {/* Enterprise */}
            <Link
              href="#"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              Enterprise
            </Link>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              Pricing
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <button className="hidden md:inline-block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                  Sign In
                </button>
                <button className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
                  Get Started
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                >
                  Dashboard
                </Link>
                <div className="group relative">
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary text-sm font-bold text-white shadow-sm transition hover:shadow-md">
                    A
                  </button>
                  {/* Avatar dropdown */}
                  <div className="pointer-events-none absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="p-2">
                      {[
                        { label: 'Dashboard', href: '/dashboard' },
                        { label: 'My Agents', href: '/agents' },
                        { label: 'Knowledge Base', href: '/knowledge-base' },
                        { label: 'Analytics', href: '/analytics' },
                        { label: 'Settings', href: '/settings' },
                      ].map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block rounded-lg px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                        >
                          {item.label}
                        </Link>
                      ))}
                      <div className="my-1.5 border-t border-gray-100" />
                      <button
                        onClick={() => setIsLoggedIn(false)}
                        className="block w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
