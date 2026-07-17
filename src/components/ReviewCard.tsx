import React from 'react';

interface Props {
  author: string;
  rating: number;
  text: string;
  time: string;
  profilePhoto?: string;
}

const ReviewCard = ({ author, rating, text, time, profilePhoto }: Props) => {
  return (
    <div className="liquid-glass rounded-xl p-4 card-glow">
      <div className="flex items-start gap-3">
        {profilePhoto ? (
          <img src={profilePhoto} alt={author} className="w-9 h-9 rounded-full object-cover" />
        ) : (
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <span className="text-sm font-medium" style={{ color: 'hsl(var(--fg-muted))' }}>{author.charAt(0)}</span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium truncate" style={{ color: 'hsl(var(--fg))' }}>{author}</span>
            <span className="text-xs whitespace-nowrap ml-2" style={{ color: 'hsl(var(--fg-faint))' }}>{time}</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className="w-3 h-3"
                style={{ color: i <= rating ? '#eab308' : 'hsl(var(--border))' }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="mt-2 text-sm leading-6" style={{ color: 'hsl(var(--fg-muted))' }}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
