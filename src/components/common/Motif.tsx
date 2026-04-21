type MotifVariant = 'orbit' | 'weave' | 'crest' | 'pulse';

interface MotifProps {
  variant?: MotifVariant;
  className?: string;
}

export default function Motif({ variant = 'orbit', className = '' }: MotifProps) {
  if (variant === 'weave') {
    return (
      <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 110C44 34 156 34 190 110" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.86" />
        <path d="M10 90C44 166 156 166 190 90" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.56" />
        <circle cx="100" cy="100" r="16" fill="currentColor" opacity="0.2" />
      </svg>
    );
  }

  if (variant === 'crest') {
    return (
      <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 145L100 30L180 145" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" opacity="0.8" />
        <path d="M60 145L100 88L140 145" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" opacity="0.45" />
        <circle cx="100" cy="30" r="10" fill="currentColor" opacity="0.22" />
      </svg>
    );
  }

  if (variant === 'pulse') {
    return (
      <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="6" opacity="0.2" />
        <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="6" opacity="0.4" />
        <circle cx="100" cy="100" r="24" stroke="currentColor" strokeWidth="6" opacity="0.75" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="100" cy="100" r="74" stroke="currentColor" strokeWidth="6" opacity="0.28" />
      <circle cx="100" cy="100" r="44" stroke="currentColor" strokeWidth="6" opacity="0.58" />
      <path d="M100 28V62" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M100 138V172" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
      <path d="M28 100H62" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
      <path d="M138 100H172" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}
