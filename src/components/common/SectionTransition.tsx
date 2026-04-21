import Motif from '@/components/common/Motif';

interface SectionTransitionProps {
  tone?: 'brass-jade' | 'ember-brass' | 'jade-ember';
}

const toneMap = {
  'brass-jade': 'from-brass/18 via-paper/0 to-jade/18',
  'ember-brass': 'from-ember/18 via-paper/0 to-brass/20',
  'jade-ember': 'from-jade/16 via-paper/0 to-ember/18',
};

export default function SectionTransition({ tone = 'brass-jade' }: SectionTransitionProps) {
  return (
    <div className="pointer-events-none relative h-24 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${toneMap[tone]} blur-2xl`} />
      <div className="absolute inset-x-0 top-1/2 mx-auto h-px w-[84%] -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(243,234,223,0.32),transparent)]" />
      <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-paper/45">
        <Motif variant="pulse" className="h-full w-full" />
      </div>
    </div>
  );
}
