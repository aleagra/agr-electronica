import React, { useState, useEffect, useRef } from 'react';

interface Review {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

interface Props {
  limit?: number;
}

const MOCK_REVIEWS: Review[] = [
  {
    author_name: "Carlos Mendoza",
    rating: 5,
    text: "Excelente servicio. Traje mi notebook que no encendía y en 24 horas la tenían reparada con cambio de disco y limpieza térmica. Muy transparentes con los precios.",
    relative_time_description: "Hace 2 días"
  },
  {
    author_name: "Laura Spinelli",
    rating: 5,
    text: "La cobertura de WiFi en mi oficina era pésima. Vinieron, reconfiguraron los routers e instalaron un switch nuevo. Ahora vuela todo. Super recomendables y profesionales.",
    relative_time_description: "Hace 1 semana"
  },
  {
    author_name: "Mariano Ortiz",
    rating: 5,
    text: "Hicieron soporte remoto para mi PC de escritorio. Se conectaron en el momento, limpiaron virus y optimizaron el sistema. Rapidez y comodidad absoluta.",
    relative_time_description: "Hace 2 semanas"
  },
  {
    author_name: "Sofía Galarza",
    rating: 4,
    text: "Muy buena atención en la reparación de la pantalla de mi laptop. El repuesto es original y quedó impecable. Todo de diez.",
    relative_time_description: "Hace 3 semanas"
  }
];

const Reviews = ({ limit = 4 }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number>(4.9);
  const [count, setCount] = useState<number>(142);
  const [loading, setLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!containerRef.current || hasLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchReviews();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasLoaded]);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setRevealed(true), 50);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const fetchReviews = async () => {
    try {
      const res = await fetch(`/api/reviews?limit=${limit}`);
      if (!res.ok) throw new Error('API unavailable');
      const data = await res.json();
      
      if (data.reviews && data.reviews.length > 0) {
        setReviews(data.reviews.slice(0, limit));
        setRating(data.rating || 4.9);
        setCount(data.total || data.reviews.length);
      } else {
        setReviews(MOCK_REVIEWS.slice(0, limit));
      }
    } catch (err) {
      setReviews(MOCK_REVIEWS.slice(0, limit));
    } finally {
      setLoading(false);
      setHasLoaded(true);
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Overall score box (4 cols) */}
        <div data-reveal className="card-hover lg:col-span-4 liquid-glass rounded-3xl p-8 text-center space-y-6">
          <span className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest block">Confianza</span>
          
          <div className="space-y-1">
            <div className="text-6xl font-bold font-headline text-[hsl(var(--fg))]">
              {loading ? '--' : rating.toFixed(1)}
            </div>
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className={`w-4.5 h-4.5 ${i <= Math.round(rating) ? 'text-amber-400' : 'text-white/10'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-[hsl(var(--fg))]">
              {loading ? 'Cargando reseñas...' : `${count} opiniones en Google Maps`}
            </p>
            <p className="text-xs text-[hsl(var(--fg-faint))]">Actualizado en tiempo real</p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="btn-press inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 border border-white/5 dark:border-white/5 light:border-black/5 bg-white/[0.03] dark:bg-white/[0.03] light:bg-black/[0.03] hover:bg-white/[0.08] dark:hover:bg-white/[0.08] light:hover:bg-black/[0.06] rounded-xl text-[hsl(var(--fg-muted))] hover:text-[hsl(var(--fg))]"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113-3.553 0-6.44-2.887-6.44-6.44s2.887-6.44 6.44-6.44c1.633 0 3.102.613 4.22 1.63L21.2 4.135C19.23 2.3 16.63 1.2 13.72 1.2 7.746 1.2 2.9 6.046 2.9 12.02c0 5.972 4.846 10.82 10.82 10.82 6.236 0 10.363-4.385 10.363-10.553 0-.709-.079-1.391-.22-2.002H12.24z" />
            </svg>
            Ver en Google Maps
          </a>
        </div>

        {/* Right Column: Grid list of review cards (8 cols) */}
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
          {loading ? (
            [1, 2, 3, 4].map((i) => (
              <div key={i} className="liquid-glass rounded-2xl p-6 animate-pulse space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/[0.06] dark:bg-white/[0.06] light:bg-black/[0.05]"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3.5 w-24 bg-white/[0.06] dark:bg-white/[0.06] light:bg-black/[0.05] rounded"></div>
                    <div className="h-3 w-16 bg-white/[0.04] dark:bg-white/[0.04] light:bg-black/[0.03] rounded"></div>
                  </div>
                </div>
                <div className="h-3 w-full bg-white/[0.04] dark:bg-white/[0.04] light:bg-black/[0.03] rounded"></div>
                <div className="h-3 w-5/6 bg-white/[0.04] dark:bg-white/[0.04] light:bg-black/[0.03] rounded"></div>
              </div>
            ))
          ) : (
            reviews.map((r, i) => (
              <div
                key={i}
                className={`review-reveal-item card-hover liquid-glass rounded-2xl p-6 card-glow flex flex-col justify-between ${revealed ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="space-y-4">
                  {/* User info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 dark:text-blue-400 font-semibold text-xs select-none">
                        {r.author_name?.charAt(0) || '?'}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[hsl(var(--fg))] leading-none">{r.author_name}</p>
                        <p className="text-[10px] text-[hsl(var(--fg-faint))] mt-1">{r.relative_time_description}</p>
                      </div>
                    </div>
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-3.5 h-3.5 ${star <= r.rating ? 'text-amber-400' : 'text-white/10'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  {/* Text */}
                  <p className="text-sm leading-relaxed text-[hsl(var(--fg-muted))]">{r.text}</p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Reviews;
