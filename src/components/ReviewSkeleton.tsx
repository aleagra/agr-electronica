import React from 'react';

// ReviewSkeleton - Theme-aware loading placeholder
const ReviewSkeleton = () => {
  return (
    <div className="rounded-xl p-4" style={{ border: '1px solid var(--card-border)', background: 'var(--card-bg)' }}>
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full animate-skeleton"></div>
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 w-24 rounded animate-skeleton"></div>
            <div className="h-3 w-16 rounded animate-skeleton"></div>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-3 h-3 rounded animate-skeleton"></div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full rounded animate-skeleton"></div>
            <div className="h-3 w-3/4 rounded animate-skeleton"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;
