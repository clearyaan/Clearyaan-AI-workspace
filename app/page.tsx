'use client'
import { useState } from 'react'

export default function Home() {
  const [activeNav, setActiveNav] = useState('Dashboard')

  const navItems = [
    { icon: '📥', label: 'Inbox' },
    { icon: '🏠', label: 'Dashboard' },
    { icon: '⚡', label: 'Workspace' },
    { icon: '📁', label: 'Projects' },
    { icon: '✅', label: 'Tasks' },
    { icon: '📝', label: 'Notes' },
    { icon: '🧠', label: 'Memory' },
    { icon: '🤖', label: 'Assistant' },
    { icon: '📅', label: 'Calendar' },
  ]

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">

      {/* Sidebar */}
      <div className="w-56 bg-[#111111] border-r border-[#222222] flex flex-col py-4 px-3">
        {/* Logo */}
        <div className="mb-8 px-2">
          <h1 className="text-lg font-semibold tracking-tight">Clearyaan</h1>
          <p className="text-xs text-[#888888]">Intelligent Workspace</p>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveNav(item.label)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                activeNav === item.label
                  ? 'bg-[#222222] text-white'
                  : 'text-[#888888] hover:text-white hover:bg-[#161616]'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="border-t border-[#222222] pt-3 px-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#333333] flex items-center justify-center text-xs">
              C
            </div>
            <div>
              <p className="text-xs font-medium">Clearyaan</p>
              <p className="text-xs text-[#888888]">Pro</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="h-12 border-b border-[#222222] flex items-center px-6 justify-between">
          <h2 className="text-sm font-medium">{activeNav}</h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-[#888888]">AI Active</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6">

          {/* Greeting */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-1">
              Welcome back 👋
            </h2>
            <p className="text-[#888888] text-sm">
              Continue working on your Clearyaan project?
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: 'Active Tasks', value: '12' },
              { label: 'Projects', value: '4' },
              { label: 'Notes', value: '28' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#111111] border border-[#222222] rounded-xl p-4">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-xs text-[#888888] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Active Projects */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-[#888888] mb-3">Active Projects</h3>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Clearyaan Branding', progress: 70, status: 'In Progress' },
                { name: 'Landing Page UI', progress: 45, status: 'In Progress' },
                { name: 'AI Chat System', progress: 30, status: 'Planning' },
              ].map((project) => (
                <div key={project.name} className="bg-[#111111] border border-[#222222] rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium">{project.name}</p>
                    <span className="text-xs text-[#888888] bg-[#222222] px-2 py-0.5 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <div className="w-full bg-[#222222] rounded-full h-1.5">
                    <div
                      className="bg-white h-1.5 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-[#888888] mt-1">{project.progress}% complete</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Tasks */}
          <div>
            <h3 className="text-sm font-medium text-[#888888] mb-3">Today's Tasks</h3>
            <div className="flex flex-col gap-2">
              {[
                'Finalize AI prompt library',
                'Review landing page design',
                'Set up OpenRouter API',
                'Write product description',
              ].map((task) => (
                <div key={task} className="bg-[#111111] border border-[#222222] rounded-xl p-3 flex items-center gap-3">
                  <div className="w-4 h-4 rounded border border-[#444444]"></div>
                  <p className="text-sm">{task}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  )
                  }
