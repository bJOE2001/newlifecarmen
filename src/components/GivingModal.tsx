'use client'

import { useState } from 'react'
import { X, Copy, Check, Smartphone, Landmark, QrCode } from 'lucide-react'

interface GivingModalProps {
  isOpen: boolean
  onClose: () => void
}

const tabs = [
  { id: 'gcash', label: 'GCash', icon: Smartphone },
  { id: 'maya', label: 'Maya', icon: QrCode },
  { id: 'bank', label: 'Bank Transfer', icon: Landmark },
] as const

type TabId = typeof tabs[number]['id']

export default function GivingModal({ isOpen, onClose }: GivingModalProps) {
  const [activeTab, setActiveTab] = useState<TabId>('gcash')
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Digital giving options">
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-scale-in overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy to-navy-light px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-heading font-bold text-white">Give Online</h2>
              <p className="text-sm text-white/60 mt-0.5">Your generosity makes a difference</p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              aria-label="Close giving modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-emerald border-b-2 border-emerald bg-emerald-50'
                    : 'text-text-muted hover:text-navy hover:bg-gray-50'
                }`}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                <Icon size={16} aria-hidden="true" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'gcash' && (
            <div className="space-y-5 animate-fade-in">
              {/* QR Placeholder */}
              <div className="bg-bg rounded-xl p-6 flex flex-col items-center">
                <div className="w-48 h-48 bg-white rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                  <div className="text-center">
                    <QrCode size={40} className="text-text-muted mx-auto mb-2" aria-hidden="true" />
                    <p className="text-xs text-text-muted">GCash QR Code</p>
                    <p className="text-[10px] text-text-muted mt-1">Upload via Sanity CMS</p>
                  </div>
                </div>
              </div>
              <CopyableField
                label="GCash Number"
                value="0917-XXX-XXXX"
                copied={copied}
                onCopy={copyToClipboard}
              />
              <CopyableField
                label="Account Name"
                value="NLIGW Carmen"
                copied={copied}
                onCopy={copyToClipboard}
              />
            </div>
          )}

          {activeTab === 'maya' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-bg rounded-xl p-6 flex flex-col items-center">
                <div className="w-48 h-48 bg-white rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                  <div className="text-center">
                    <QrCode size={40} className="text-text-muted mx-auto mb-2" aria-hidden="true" />
                    <p className="text-xs text-text-muted">Maya QR Code</p>
                    <p className="text-[10px] text-text-muted mt-1">Upload via Sanity CMS</p>
                  </div>
                </div>
              </div>
              <CopyableField
                label="Maya Number"
                value="0917-XXX-XXXX"
                copied={copied}
                onCopy={copyToClipboard}
              />
              <CopyableField
                label="Account Name"
                value="NLIGW Carmen"
                copied={copied}
                onCopy={copyToClipboard}
              />
            </div>
          )}

          {activeTab === 'bank' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-bg rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                    <Landmark size={20} className="text-navy" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">Bank Transfer</p>
                    <p className="text-xs text-text-muted">Direct bank deposit</p>
                  </div>
                </div>
              </div>
              <CopyableField
                label="Bank Name"
                value="BDO"
                copied={copied}
                onCopy={copyToClipboard}
              />
              <CopyableField
                label="Account Name"
                value="New Life In God's Word Carmen"
                copied={copied}
                onCopy={copyToClipboard}
              />
              <CopyableField
                label="Account Number"
                value="XXXX-XXXX-XXXX"
                copied={copied}
                onCopy={copyToClipboard}
              />
            </div>
          )}
        </div>

        {/* Scripture */}
        <div className="px-6 pb-6">
          <p className="text-xs text-center text-text-muted italic">
            &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo; — 2 Corinthians 9:7
          </p>
        </div>
      </div>
    </div>
  )
}

function CopyableField({
  label,
  value,
  copied,
  onCopy,
}: {
  label: string
  value: string
  copied: string | null
  onCopy: (text: string, label: string) => void
}) {
  const isCopied = copied === label
  return (
    <div>
      <p className="text-xs font-medium text-text-muted mb-1.5">{label}</p>
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-bg rounded-lg px-4 py-2.5 border border-border">
          <span className="text-sm font-medium text-navy">{value}</span>
        </div>
        <button
          onClick={() => onCopy(value, label)}
          className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
            isCopied
              ? 'bg-green-100 text-green-700'
              : 'bg-navy/5 text-navy hover:bg-navy/10'
          }`}
          aria-label={`Copy ${label}`}
        >
          {isCopied ? (
            <span className="flex items-center gap-1">
              <Check size={14} aria-hidden="true" />
              Copied!
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Copy size={14} aria-hidden="true" />
              Copy
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
