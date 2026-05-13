'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [activeNav, setActiveNav] = useState('Dashboard')
  const router = useRouter()

  const navItems = [
    { label: 'Inbox' },
    { label: 'Dashboard' },
    { label: 'Workspace' },
    { label: 'Projects' },
    { label: 'Tasks' },
    { label: 'Notes' },
    { label: 'Memory' },
    { label: 'Assistant' },
    { label: 'Calendar' },
  ]

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">

      {/* Sidebar */}
      <div className="w-52 bg-[#0f0f0f] border-r border-[#1f1f1f] flex flex-col py-6 px-4">
        <div className="mb-8">
          <h1 className="text-base font-semibold tracking-tight text-white">Clearyaan</h1>
          <p className="text-xs text-[#555555] mt-0.5">Intelligent Workspace</p>
        </div>

        <nav className="flex flex-col gap-0.5 flex-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setActiveNav(item.label)
                if (item.label === 'Assistant') router.push('/chat')
              }}
              className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all text-left ${
                activeNav === item.label
                  ? 'bg-[#1f1f1f] text-white'
                  : 'text-[#666666] hover:text-white hover:bg-[#161616]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="border-t border-[#1f1f1f] pt-4">
          <div className="flex items-center gap-2 px-1">
            <div className="w-6 h-6 rounded-full bg-[#1f1f1f] flex items-center justify-center text-xs text-white">
              C
            </div>
            <div>
              <p className="text-xs font-medium text-white">Clearyaan</p>
              <p className="text-xs text-[#555555]">Free Plan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="h-11 border-b border-[#1f1f1f] flex items-center px-6 justify-between">
          <h2 className="text-sm font-medium text-white">{activeNav}</h2>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span className="text-xs text-[#555555]">AI Active</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">

          {/* Greeting */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-1">Welcome back</h2>
            <p className="text-sm text-[#555555]">Continue working on your Clearyaan project?</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: 'Active Tasks', value: '12' },
              { label: 'Projects', value: '4' },
              { label: 'Notes', value: '28' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-4">
                <p className="text-xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs text-[#555555] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="mb-6">
            <p className="text-xs text-[#555555] uppercase tracking-widest mb-3">Active Projects</p>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Clearyaan Branding', progress: 70, status: 'In Progress' },
                { name: 'Landing Page UI', progress: 45, status: 'In Progress' },
                { name: 'AI Chat System', progress: 30, status: 'Planning' },
              ].map((project) => (
                <div key={project.name} className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm font-medium text-white">{project.name}</p>
                    <span className="text-xs text-[#555555] bg-[#1a1a1a] px-2 py-0.5 rounded-md">
                      {project.status}
                    </span>
                  </div>
                  <div className="w-full bg-[#1a1a1a] rounded-full h-1">
                    <div
                      className="bg-white h-1 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-[#444444] mt-2">{project.progress}% complete</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks */}
          <div>
            <p className="text-xs text-[#555555] uppercase tracking-widest mb-3">Today</p>
            <div className="flex flex-col gap-1.5">
              {[
                'Finalize AI prompt library',
                'Review landing page design',
                'Set up OpenRouter API',
                'Write product description',
              ].map((task) => (
                <div key={task} className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:bg-[#141414] transition-all">
                  <div className="w-3.5 h-3.5 rounded border border-[#333333] shrink-0"></div>
                  <p className="text-sm text-[#aaaaaa]">{task}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Chat Button */}
          <div className="mt-8">
            <button
              onClick={() => router.push('/chat')}
              className="w-full bg-white text-black text-sm font-medium py-3 rounded-xl hover:bg-[#eeeeee] transition-all"
            >
              Open AI Assistant
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}              ].map((project) => (
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
