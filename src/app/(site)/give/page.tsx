'use client'

import { useState } from 'react'
import {
  Heart,
  Copy,
  Check,
  Smartphone,
  Landmark,
  QrCode,
  ShieldCheck,
  BookOpen,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

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

export default function GivePage() {
  const [activeTab, setActiveTab] = useState<TabId>('gcash')
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-deep" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <div className="relative container-church py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-full mb-6 animate-fade-in">
            <ShieldCheck size={14} className="text-white/80" aria-hidden="true" />
            <span className="text-sm text-white/90">Safe & Secure Giving</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 drop-shadow-xl animate-slide-up">
            Tithes & Offerings
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Your generosity fuels our mission to share God&apos;s love and transform lives in Carmen and beyond.
          </p>
        </div>
      </section>

      {/* Giving Steps */}
      <section className="section-padding bg-white">
        <div className="container-church">
          <SectionHeading
            title="How to Give"
            subtitle="Simple, secure, and convenient ways to support the ministry"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {[
              { step: '1', title: 'Choose Method', desc: 'Select GCash, Maya, or Bank Transfer below' },
              { step: '2', title: 'Send Your Gift', desc: 'Scan the QR code or copy the account number' },
              { step: '3', title: 'Confirm', desc: 'Keep your receipt for your records' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald to-emerald-light text-white font-heading font-bold text-lg flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald/20">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-navy text-base mb-1">{item.title}</h3>
                <p className="text-sm text-text-body">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Giving Tabs Card */}
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
                    <div className="bg-bg rounded-xl p-8 flex flex-col items-center">
                      <div className="w-52 h-52 bg-white rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                        <div className="text-center">
                          <QrCode size={48} className="text-text-muted mx-auto mb-2" aria-hidden="true" />
                          <p className="text-sm text-text-muted font-medium">GCash QR Code</p>
                          <p className="text-xs text-text-muted mt-1">Upload via Sanity CMS</p>
                        </div>
                      </div>
                    </div>
                    <CopyableField label="GCash Number" value="0917-XXX-XXXX" copied={copied} onCopy={copyToClipboard} />
                    <CopyableField label="Account Name" value="NLIGW Carmen" copied={copied} onCopy={copyToClipboard} />
                  </div>
                )}

                {activeTab === 'maya' && (
                  <div className="space-y-5 animate-fade-in">
                    <div className="bg-bg rounded-xl p-8 flex flex-col items-center">
                      <div className="w-52 h-52 bg-white rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                        <div className="text-center">
                          <QrCode size={48} className="text-text-muted mx-auto mb-2" aria-hidden="true" />
                          <p className="text-sm text-text-muted font-medium">Maya QR Code</p>
                          <p className="text-xs text-text-muted mt-1">Upload via Sanity CMS</p>
                        </div>
                      </div>
                    </div>
                    <CopyableField label="Maya Number" value="0917-XXX-XXXX" copied={copied} onCopy={copyToClipboard} />
                    <CopyableField label="Account Name" value="NLIGW Carmen" copied={copied} onCopy={copyToClipboard} />
                  </div>
                )}

                {activeTab === 'bank' && (
                  <div className="space-y-5 animate-fade-in">
                    <div className="bg-bg rounded-xl p-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center">
                          <Landmark size={24} className="text-navy" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-heading font-bold text-navy">Bank Transfer</p>
                          <p className="text-sm text-text-muted">Direct bank deposit</p>
                        </div>
                      </div>
                    </div>
                    <CopyableField label="Bank Name" value="BDO" copied={copied} onCopy={copyToClipboard} />
                    <CopyableField label="Account Name" value="New Life In God's Word Carmen" copied={copied} onCopy={copyToClipboard} />
                    <CopyableField label="Account Number" value="XXXX-XXXX-XXXX" copied={copied} onCopy={copyToClipboard} />
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
        </div>
      </section>

      {/* Scripture */}
      <section className="bg-bg">
        <div className="container-church py-16 text-center max-w-2xl">
          <BookOpen size={28} className="text-emerald mx-auto mb-4" aria-hidden="true" />
          <blockquote className="text-lg md:text-xl font-heading font-medium text-navy italic leading-relaxed">
            &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-sm text-text-muted font-medium not-italic">— 2 Corinthians 9:7 (NIV)</cite>
        </div>
      </section>

      {/* Thank You CTA */}
      <section className="bg-forest">
        <div className="container-church py-16 text-center">
          <Heart size={32} className="text-white mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-3xl font-heading font-bold text-white mb-3">Thank You for Your Generosity</h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Every gift, no matter the size, makes a real difference in our community and beyond.
          </p>
        </div>
      </section>
    </>
  )
}
