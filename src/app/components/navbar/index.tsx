'use client';

import { useEffect, useState } from 'react';

const SECTIONS = ['home', 'quem-sou', 'projetos', 'depoimentos', 'contato'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('home');

  // troca cor de fundo ao rolar
  useEffect(() => {
    const onScroll = () =>
      setScrolled((window.scrollY || document.documentElement.scrollTop) > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // scrollspy: detecta seção visível e destaca link
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.getAttribute('id');
            if (id) setActive(id);
          }
        });
      },
      { rootMargin: '-55% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  const linkCls = (id: string) =>
    `hover:opacity-80 transition ${active === id ? 'text-violet-500' : ''}`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${scrolled ? 'bg-black text-white shadow-md' : 'bg-white text-black'}
      `}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">PORTFÓLIO</a>
        <ul className="hidden lg:flex space-x-8 font-medium">
          <li><a href="#home"        className={linkCls('home')}>Home</a></li>
          <li><a href="#quem-sou"    className={linkCls('quem-sou')}>Quem Sou</a></li>
          <li><a href="#projetos"    className={linkCls('projetos')}>Projetos</a></li>
          <li><a href="#depoimentos" className={linkCls('depoimentos')}>Depoimentos</a></li>
          <li><a href="#contato"     className={linkCls('contato')}>Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}
