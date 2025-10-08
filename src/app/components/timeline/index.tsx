// app/components/timeline/index.tsx
"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Milestone = {
  year: string;
  title: string;
  text: string;
  img: string; // caminho dentro de /public
};

const milestones: Milestone[] = [
  {
    year: "2012/2013",
    title: "Primeiros passos",
    text:
      "Primeiro contato com programação e lógica; Técnico em Informática pelo IF Sul de Minas e trabalho de conclusão de curso com sistema completo em Delphi para biblioteca.",
    img: "/assets/timeline/1.jpg",
  },
  {
    year: "2023",
    title: "Desenvolvimento web",
    text:
      "Retomando no caminho da programação, aprofundo meus conhecimentos em HTML, CSS e JavaScript pela FAETEC.",
    img: "/assets/timeline/2.jpg",
  },
  {
    year: "2024",
    title: "Sistema Desktop",
    text:
      "Voltei a me aprofundar na criação de aplicações desktop e como fruto aconteceu a construção de sistema de gerenciamento de hotéis e sistema de dizimistas para paróquias com Delphi 12, MySQL e FireDAC.",
    img: "/assets/timeline/3.jpg",
  },
  {
    year: "2025",
    title: "Back-end",
    text:
      "PHP, Laravel e APIs REST passam a ser parte fundamental dos meus projetos após o curso Back-end feito no Senai. Projetos de Biblioteca, agendamento e TodoList com integração ao Whatsapp e de Gerenciamento de placar de arenas criados.",
    img: "/assets/timeline/4.jpg",
  },
  {
    year: "2025",
    title: "Engenharia de Software",
    text:
      "Iniciei minha graduação em Engenharia de Software pela Anhanguera, dando mais um passo importante na minha formação acadêmica e fortalecendo a base teórica para atuar com ainda mais segurança e qualidade na área de tecnologia.",
    img: "/assets/timeline/5.jpg",
  },
  {
    year: "2025",
    title: "Front-end e Full Stack",
    text:
      "React e Next.js entram no meu repertório com o curso Front-end do Senai, permitindo a criação de interfaces modernas e responsivas. Atualmente, atuo como desenvolvedor Full Stack, integrando front-end e back-end para soluções completas.",
    img: "/assets/timeline/6.jpg",
  },
];

/* Aceita qualquer ref com .current (serve para RefObject e MutableRefObject) */
type AnyRef<T> = { current: T | null };

/* ===== Barra de progresso (simples) à esquerda ===== */
function ScrollProgress({ target }: { target: AnyRef<HTMLElement> }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = target.current;
      const bar = barRef.current;
      if (!el || !bar) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // progresso da seção dentro da viewport
      const start = Math.min(vh, Math.max(0, vh - rect.top));
      const total = rect.height + vh;
      const progress = Math.max(0, Math.min(1, start / total));

      bar.style.height = `${progress * 100}%`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [target]);

  return (
    <div className="pointer-events-none fixed left-0 top-1/2 hidden h-48 w-[3px] -translate-y-1/2 rounded-full bg-gray-200 md:block">
      <div
        ref={barRef}
        className="w-full rounded-full bg-gradient-to-b from-violet-500 via-blue-500 to-cyan-500 transition-[height] duration-200"
        style={{ height: 0 }}
      />
    </div>
  );
}

/* ===== Item ===== */
function TimelineItem({
  data,
  index,
  setActiveId,
}: {
  data: Milestone;
  index: number;
  setActiveId: (i: number) => void;
}) {
  const left = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-30% 0px -30% 0px", once: false });

  useEffect(() => {
    if (inView) setActiveId(index);
  }, [inView, index, setActiveId]);

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2"
      aria-current={inView ? "step" : undefined}
    >
      {/* Imagem */}
      <motion.div
        className={`${left ? "md:order-1" : "md:order-2"} order-1`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="overflow-hidden rounded-xl shadow-md"
        >
          <Image
            src={data.img}
            alt={`${data.title} (${data.year})`}
            width={640}
            height={420}
            priority={index === 0}
            className="h-64 w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
        </motion.div>
      </motion.div>

      {/* Texto */}
      <motion.div
        className={`${left ? "md:order-2 md:pl-10" : "md:order-1 md:pr-10"} order-2`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
      >
        <div className="rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">
          <p className="text-sm font-medium text-sky-600">{data.year}</p>
          <h3 className="mt-1 text-xl font-semibold text-slate-900">
            {data.title}
          </h3>
          <p className="mt-2 text-slate-600">{data.text}</p>
        </div>
      </motion.div>

      {/* Dot */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="grid h-8 w-8 place-items-center rounded-full bg-white ring-4 ring-slate-200">
          <motion.div
            className="h-3 w-3 rounded-full bg-sky-500"
            animate={inView ? { scale: [1, 1.25, 1] } : { scale: 1 }}
            transition={{ duration: 1.1, repeat: inView ? Infinity : 0 }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const sectionRef = useRef<HTMLElement | null>(null); // <- ref compatível
  const [activeId, setActiveId] = useState<number | null>(null);
  const items = useMemo(() => milestones, []);

  return (
    <section
      id="quem-sou"
      ref={sectionRef}
      className="relative bg-white py-16 scroll-mt-24"
    >
      {/* Barra de progresso fixa à esquerda (desktop) */}
      <ScrollProgress target={sectionRef} />

      <div className="relative mx-auto max-w-5xl px-4">
        {/* Linha central ATRÁS (z-0) */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] rounded-full bg-gradient-to-b from-violet-500 via-blue-500 to-cyan-500 opacity-40 z-0"
        />

        {/* Título ACIMA da linha (z-10) */}
        <div className="relative z-10 text-center">
          <h2 className="mb-10 inline-block rounded-lg bg-gray-200 px-6 py-3 text-3xl font-bold text-black">
            Quem sou
          </h2>
        </div>

        {/* Lista */}
        <div className="space-y-14">
          {items.map((m, i) => (
            <TimelineItem
              key={`${m.year}-${m.title}`}
              data={m}
              index={i}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
