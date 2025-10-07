'use client';

type Logo = { alt: string; srcs: string[] };

const logos: Logo[] = [
  { alt: 'Laravel',    srcs: ['https://cdn.simpleicons.org/laravel/000'] },
  { alt: 'HTML5',      srcs: ['https://cdn.simpleicons.org/html5/000'] },
  // CSS3: jsDelivr primeiro + fallbacks
  {
    alt: 'CSS3',
    srcs: [
      'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg',
      'https://cdn.simpleicons.org/css3/000',
      'https://cdn.simpleicons.org/css3',
      'https://unpkg.com/simple-icons@latest/icons/css3.svg',
      'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
    ],
  },
  { alt: 'JavaScript', srcs: ['https://cdn.simpleicons.org/javascript/000'] },
  { alt: 'React',      srcs: ['https://cdn.simpleicons.org/react/000'] },
  { alt: 'Next.js',    srcs: ['https://cdn.simpleicons.org/nextdotjs/000'] },
  { alt: 'Delphi',     srcs: ['https://cdn.simpleicons.org/radstudio/000'] },
  { alt: 'MySQL',      srcs: ['https://cdn.simpleicons.org/mysql/000'] },
  { alt: 'Docker',     srcs: ['https://cdn.simpleicons.org/docker/000'] },
  { alt: 'Git',        srcs: ['https://cdn.simpleicons.org/git/000'] },
];

export default function Stacks() {
  const onError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const img = e.currentTarget;
    const list = (img.dataset.srcs || '').split('|').filter(Boolean);
    let idx = Number(img.dataset.idx || '0') + 1;
    if (idx < list.length) {
      img.dataset.idx = String(idx);
      img.src = list[idx];
    } else {
      img.style.display = 'none';
    }
  };

  const renderImg = (l: Logo, key: string) => (
    <img
      key={key}
      src={l.srcs[0]}
      data-srcs={l.srcs.join('|')}
      data-idx="0"
      alt={l.alt}
      loading="lazy"
      onError={onError}
      className="h-9 sm:h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-transform duration-300 hover:scale-105"
    />
  );

  return (
    <section className="bg-black py-8">
      <div className="mx-auto max-w-screen-xl">
        <div className="relative overflow-hidden rounded-2xl bg-gray-100">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-100 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-100 to-transparent" />
          <div className="group py-6">
            <div className="animate-marquee group-hover:[animation-play-state:paused]">
              <div className="marquee-track">{logos.map((l) => renderImg(l, `a-${l.alt}`))}</div>
              <div className="marquee-track" aria-hidden="true">{logos.map((l) => renderImg(l, `b-${l.alt}`))}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
