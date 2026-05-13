'use client'
import { useState } from 'react'

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I am Clearyaan AI. How can I help you today?'
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages })
      })

      const data = await res.json()
      const aiMessage = {
        role: 'assistant',
        content: data.choices[0].message.content
      }
      setMessages([...updatedMessages, aiMessage])
    } catch {
      setMessages([...updatedMessages, {
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again.'
      }])
    }

    setLoading(false)
  }

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-white">

      {/* Top Bar */}
      <div className="h-12 border-b border-[#222222] flex items-center px-6 justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="text-[#888888] text-sm hover:text-white">← Back</a>
          <span className="text-[#444444]">|</span>
          <h2 className="text-sm font-medium">Clearyaan AI</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs text-[#888888]">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'assistant' && (
              <div className="w-7 h-7 rounded-full bg-[#222222] flex items-center justify-center text-xs mr-2 mt-1 shrink-0">
                C
              </div>
            )}
            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-[#222222] text-white rounded-tr-sm'
                  : 'bg-[#111111] border border-[#222222] text-white rounded-tl-sm'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="w-7 h-7 rounded-full bg-[#222222] flex items-center justify-center text-xs mr-2 mt-1">
              C
            </div>
            <div className="bg-[#111111] border border-[#222222] px-4 py-3 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#888888] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#888888] rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-[#888888] rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div className="border-t border-[#222222] p-4">
        <div className="flex items-center gap-3 bg-[#111111] border border-[#222222] rounded-2xl px-4 py-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask Clearyaan anything..."
            className="flex-1 bg-transparent text-sm outline-none placeholder-[#555555]"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>

    </div>
  )
            }
