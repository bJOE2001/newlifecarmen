'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Copy,
  Check,
  Smartphone,
  Landmark,
  QrCode,
  ShieldCheck,
} from 'lucide-react'

type TabId = 'gcash' | 'maya' | 'bank'

const tabs: { id: TabId; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { id: 'gcash', label: 'GCash', icon: Smartphone },
  { id: 'maya', label: 'Maya', icon: QrCode },
  { id: 'bank', label: 'Bank Transfer', icon: Landmark },
]

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
        <div className="flex-1 bg-bg rounded-lg px-4 py-3 border border-border">
          <span className="text-base font-medium text-navy font-mono">{value}</span>
        </div>
        <button
          onClick={() => onCopy(value, label)}
          className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
            isCopied
              ? 'bg-green-100 text-green-700'
              : 'bg-navy/5 text-navy hover:bg-navy/10'
          }`}
          aria-label={`Copy ${label}`}
        >
          {isCopied ? (
            <span className="flex items-center gap-1.5">
              <Check size={16} aria-hidden="true" />
              Copied!
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <Copy size={16} aria-hidden="true" />
              Copy
            </span>
          )}
        </button>
      </div>
    </div>
  )
}

interface GiveTabsProps {
  gcashNumber?: string
  gcashQrUrl?: string | null
  mayaNumber?: string
  mayaQrUrl?: string | null
  bankName?: string
  bankAccountName?: string
  bankAccountNumber?: string
  churchName?: string
}

export default function GiveTabs({
  gcashNumber = '0917-XXX-XXXX',
  gcashQrUrl,
  mayaNumber = '0917-XXX-XXXX',
  mayaQrUrl,
  bankName = 'BDO',
  bankAccountName = "New Life In God's Word Carmen",
  bankAccountNumber = 'XXXX-XXXX-XXXX',
  churchName = "NLIGW Carmen",
}: GiveTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('gcash')
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-emerald border-b-2 border-emerald bg-emerald-50'
                    : 'text-text-muted hover:text-navy hover:bg-gray-50'
                }`}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                <Icon size={18} aria-hidden="true" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'gcash' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-bg rounded-xl p-6 flex flex-col items-center">
                {gcashQrUrl ? (
                  <div className="relative w-56 h-56 rounded-xl overflow-hidden shadow-md border-2 border-border bg-white">
                    <Image
                      src={gcashQrUrl}
                      alt="GCash QR Code"
                      fill
                      sizes="224px"
                      className="object-contain p-2"
                    />
                  </div>
                ) : (
                  <div className="w-52 h-52 bg-white rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                    <div className="text-center">
                      <QrCode size={48} className="text-text-muted mx-auto mb-2" aria-hidden="true" />
                      <p className="text-sm text-text-muted font-medium">GCash QR Code</p>
                      <p className="text-xs text-text-muted mt-1">Upload via Sanity CMS</p>
                    </div>
                  </div>
                )}
              </div>
              <CopyableField label="GCash Mobile Number" value={gcashNumber} copied={copied} onCopy={copyToClipboard} />
              <CopyableField label="Account Name" value={churchName} copied={copied} onCopy={copyToClipboard} />
            </div>
          )}

          {activeTab === 'maya' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-bg rounded-xl p-6 flex flex-col items-center">
                {mayaQrUrl ? (
                  <div className="relative w-56 h-56 rounded-xl overflow-hidden shadow-md border-2 border-border bg-white">
                    <Image
                      src={mayaQrUrl}
                      alt="Maya QR Code"
                      fill
                      sizes="224px"
                      className="object-contain p-2"
                    />
                  </div>
                ) : (
                  <div className="w-52 h-52 bg-white rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                    <div className="text-center">
                      <QrCode size={48} className="text-text-muted mx-auto mb-2" aria-hidden="true" />
                      <p className="text-sm text-text-muted font-medium">Maya QR Code</p>
                      <p className="text-xs text-text-muted mt-1">Upload via Sanity CMS</p>
                    </div>
                  </div>
                )}
              </div>
              <CopyableField label="Maya Mobile Number" value={mayaNumber} copied={copied} onCopy={copyToClipboard} />
              <CopyableField label="Account Name" value={churchName} copied={copied} onCopy={copyToClipboard} />
            </div>
          )}

          {activeTab === 'bank' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-bg rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                    <Landmark size={24} className="text-navy" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy text-lg">{bankName}</p>
                    <p className="text-sm text-text-muted">Direct bank deposit / online transfer</p>
                  </div>
                </div>
              </div>
              <CopyableField label="Bank Name" value={bankName} copied={copied} onCopy={copyToClipboard} />
              <CopyableField label="Account Name" value={bankAccountName} copied={copied} onCopy={copyToClipboard} />
              <CopyableField label="Account Number" value={bankAccountNumber} copied={copied} onCopy={copyToClipboard} />
            </div>
          )}
        </div>
      </div>

      {/* Security Note */}
      <div className="mt-6 flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
        <ShieldCheck size={20} className="text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="text-sm font-medium text-emerald-900">Your giving is safe and confidential</p>
          <p className="text-xs text-emerald-700 mt-0.5">All giving details are managed securely. Keep your transaction receipt for your records.</p>
        </div>
      </div>
    </div>
  )
}
