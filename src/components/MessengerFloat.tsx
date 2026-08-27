'use client'

import { MessageCircle } from 'lucide-react'

export default function MessengerFloat() {
  return (
    <a
      href="https://m.me/NLIGW.OFFICIALS"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat with us on Facebook Messenger"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-emerald/30 animate-ping opacity-75" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-forest hover:bg-forest-dark shadow-lg shadow-forest/30 flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer">
          <MessageCircle size={24} className="text-white" aria-hidden="true" />
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-navy text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg">
        Chat with us!
        <div className="absolute top-full right-5 w-2 h-2 bg-navy transform rotate-45 -mt-1" />
      </div>
    </a>
  )
}
