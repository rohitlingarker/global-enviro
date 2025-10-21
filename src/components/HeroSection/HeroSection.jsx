'use client'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function HeroSection({
  imageSrc,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  align = 'left',
  overlay = 'bg-black/50',
  height = 'h-[600px]',
  className,
}) {
  const alignments = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }

  return (
    <section
      className={cn('relative w-full overflow-hidden', height, className)}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className={cn('absolute inset-0', overlay)} />

      {/* Content */}
      <div
        className={cn(
          'absolute inset-0 flex flex-col justify-center gap-6 px-6 md:px-16 z-10 text-white',
          alignments[align]
        )}
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-3 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-200 mb-6">{subtitle}</p>
          )}
          <div
            className={cn(
              'flex flex-wrap gap-4',
              align === 'center' && 'justify-center',
              align === 'right' && 'justify-end'
            )}
          >
            {primaryAction && (
              <a
                href={primaryAction.href}
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                {primaryAction.label}
              </a>
            )}
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="border border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-lg transition"
              >
                {secondaryAction.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
