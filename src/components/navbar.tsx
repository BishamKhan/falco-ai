'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              Falco <span className="text-secondary">AI</span>
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Platform Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('platform')}
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Platform
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Platform Dropdown Content */}
              <div className="absolute top-full left-0 mt-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 pt-2">
                <div className="p-4">
                  <div className="mb-4">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Core Features
                    </h3>
                    <div className="space-y-3">
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-secondary/10 transition"
                      >
                        <div className="font-semibold text-gray-900">
                          AI Resolution Platform
                        </div>
                        <div className="text-sm text-gray-600">
                          Deliver faster, smarter customer interactions.
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-secondary/10 transition"
                      >
                        <div className="font-semibold text-gray-900">
                          AI Agent Engine
                        </div>
                        <div className="text-sm text-gray-600">
                          Train custom AI agents on your business knowledge.
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-secondary/10 transition"
                      >
                        <div className="font-semibold text-gray-900">
                          Analytics & Insights
                        </div>
                        <div className="text-sm text-gray-600">
                          Track conversations and optimize performance.
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-secondary/10 transition"
                      >
                        <div className="font-semibold text-gray-900">
                          Integrations
                        </div>
                        <div className="text-sm text-gray-600">
                          Connect your existing tools and workflows.
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-secondary/10 transition"
                      >
                        <div className="font-semibold text-gray-900">
                          AI Actions
                        </div>
                        <div className="text-sm text-gray-600">
                          Automate tasks through APIs and custom actions.
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-secondary/10 transition"
                      >
                        <div className="font-semibold text-gray-900">
                          Security & Privacy
                        </div>
                        <div className="text-sm text-gray-600">
                          Enterprise-grade security and data protection.
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Card */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Build Smarter AI Agents
                      </h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Upload your data. Train your AI. Deploy anywhere.
                      </p>
                      <Link
                        href="#"
                        className="inline-block text-sm font-semibold text-secondary hover:text-primary"
                      >
                        Explore Platform →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Solutions Dropdown Content */}
              <div className="absolute top-full left-0 mt-0 w-96 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 pt-2">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-6">
                    {/* By Use Case */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        By Use Case
                      </h3>
                      <div className="space-y-2">
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition text-gray-900 text-sm font-medium hover:text-secondary"
                        >
                          Support Agent
                        </Link>
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition text-gray-900 text-sm font-medium hover:text-secondary"
                        >
                          Sales Agent
                        </Link>
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition text-gray-900 text-sm font-medium hover:text-secondary"
                        >
                          Knowledge Assistant
                        </Link>
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition text-gray-900 text-sm font-medium hover:text-secondary"
                        >
                          E-commerce Assistant
                        </Link>
                      </div>
                    </div>

                    {/* By Industry */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        By Industry
                      </h3>
                      <div className="space-y-2">
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition text-gray-900 text-sm font-medium hover:text-secondary"
                        >
                          Retail & E-commerce
                        </Link>
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition text-gray-900 text-sm font-medium hover:text-secondary"
                        >
                          Education
                        </Link>
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition text-gray-900 text-sm font-medium hover:text-secondary"
                        >
                          Healthcare
                        </Link>
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition text-gray-900 text-sm font-medium hover:text-secondary"
                        >
                          Travel & Hospitality
                        </Link>
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition text-gray-900 text-sm font-medium hover:text-secondary"
                        >
                          SaaS & Technology
                        </Link>
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition text-gray-900 text-sm font-medium hover:text-secondary"
                        >
                          Agencies
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-gray-900 font-medium transition"
            >
              Pricing
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Resources Dropdown Content */}
              <div className="absolute top-full left-0 mt-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 pt-2">
                <div className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Learn
                      </h3>
                      <div className="space-y-2">
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition"
                        >
                          <div className="font-semibold text-gray-900 text-sm">
                            Guides
                          </div>
                          <div className="text-xs text-gray-600">
                            Tutorials and best practices.
                          </div>
                        </Link>
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition"
                        >
                          <div className="font-semibold text-gray-900 text-sm">
                            Documentation
                          </div>
                          <div className="text-xs text-gray-600">
                            API references and developer guides.
                          </div>
                        </Link>
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition"
                        >
                          <div className="font-semibold text-gray-900 text-sm">
                            Blog
                          </div>
                          <div className="text-xs text-gray-600">
                            AI trends and product updates.
                          </div>
                        </Link>
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition"
                        >
                          <div className="font-semibold text-gray-900 text-sm">
                            Changelog
                          </div>
                          <div className="text-xs text-gray-600">
                            Latest releases.
                          </div>
                        </Link>
                        <Link
                          href="#"
                          className="block p-2 rounded-lg hover:bg-secondary/10 transition"
                        >
                          <div className="font-semibold text-gray-900 text-sm">
                            Community
                          </div>
                          <div className="text-xs text-gray-600">
                            Tips and discussions.
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Latest Update */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-lg p-3">
                        <div className="flex items-start gap-2 mb-2">
                          <span className="text-lg">🚀</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">
                              Falco AI v1.0
                            </h4>
                            <p className="text-xs text-gray-700 mt-1">
                              Website widgets, improved RAG, new analytics, and
                              faster responses.
                            </p>
                            <Link
                              href="#"
                              className="text-xs font-semibold text-secondary hover:text-blue-700 mt-2 inline-block"
                            >
                              Read More →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <button className="hidden md:inline-block px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition">
                  Sign In
                </button>
                <button className="px-6 py-2 bg-secondary text-white rounded-lg font-medium hover:bg-primary transition">
                  Get Started
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition"
                >
                  Dashboard
                </Link>
                <div className="relative group">
                  <button className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center font-bold hover:shadow-lg transition">
                    A
                  </button>

                  {/* Avatar Dropdown */}
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                    <div className="p-2">
                      <Link
                        href="/dashboard"
                        className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition text-sm"
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/agents"
                        className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition text-sm"
                      >
                        My Agents
                      </Link>
                      <Link
                        href="/knowledge-base"
                        className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition text-sm"
                      >
                        Knowledge Base
                      </Link>
                      <Link
                        href="/analytics"
                        className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition text-sm"
                      >
                        Analytics
                      </Link>
                      <Link
                        href="/settings"
                        className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition text-sm"
                      >
                        Settings
                      </Link>
                      <div className="border-t border-gray-200 my-2"></div>
                      <button
                        onClick={() => setIsLoggedIn(false)}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition text-sm font-medium"
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
