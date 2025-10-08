"use client";
import Image from "next/image";
import { useMemo } from "react";

/** Rotaciona pequenas frases abaixo do título */
function RoleRotator() {
  const items = useMemo(
    () => ["Desenvolvedor Full-Stack", "Laravel & MySQL", "React/Next.js"],
    []
  );

  return (
    <div className="mt-2 h-8 overflow-hidden text-lg text-white/80 md:text-xl">
      <div className="inline-block [animation:swap_9.6s_steps(3)_infinite]">
        {items.map((t) => (
          <span key={t} className="block leading-8">
            {t}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes swap {
          0%,
          33% {
            transform: translateY(0%);
          }
          34%,
          66% {
            transform: translateY(-100%);
          }
          67%,
          100% {
            transform: translateY(-200%);
          }
        }
      `}</style>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="home" className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* BG vivo sutil: glows radiais + textura + conic girando */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* glows ajustados para não “vazar” */}
        <div className="absolute left-[-6rem] top-[-6rem] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute right-[-8rem] bottom-[-8rem] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />

        <div className="absolute inset-0 opacity-[0.08] [background:conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,.12),transparent_60%)] animate-[spin_30s_linear_infinite]" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 10 10%22><g fill=%22%23fff%22 opacity=%220.25%22><circle cx=%221%22 cy=%221%22 r=%220.12%22/><circle cx=%225%22 cy=%225%22 r=%220.12%22/><circle cx=%229%22 cy=%229%22 r=%220.12%22/></g></svg>')]" />
      </div>

      {/* camada com sua imagem de background (opcional) */}
      <div className="absolute inset-0 -z-10 bg-[url('https://techakim.com/sam/tg/7268/li/imgs/bg-portfolio.jpg')] bg-cover bg-no-repeat opacity-[0.06]" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-28">
        {/* Texto à esquerda */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 ring-1 ring-white/15 backdrop-blur">
            👋 Bem-vindo
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            disponível para novos projetos
          </div>

          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] md:text-6xl">
            Olá, eu sou <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Wesley Abreu
            </span>
            !
          </h1>

          <RoleRotator />

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            Transformo ideias em soluções completas: Laravel no back-end,
            React/Next.js no front-end, HTML/CSS/JS nas interfaces; também atuo
            com Delphi para aplicações desktop, MySQL, integrações REST e Git.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="group relative inline-flex items-center justify-center rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
            >
              <span className="absolute inset-0 -z-10 rounded-xl bg-violet-400 opacity-0 blur-md transition group-hover:opacity-25" />
              Clique para fazer contato
            </a>
            <a
              href="#sobre"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Sobre mim
            </a>
          </div>
        </div>

        {/* Foto à direita com depth */}
        <div className="mx-auto w-[320px] md:w-[380px]">
          <div className="group relative aspect-square">
            {/* anel com brilho girando */}
            <div className="pointer-events-none absolute inset-0 rounded-full p-[6px]">
              <div className="h-full w-full rounded-full bg-[conic-gradient(from_0deg,rgba(255,255,255,0.6),transparent_40%,transparent_60%,rgba(255,255,255,0.6))] animate-[spin_12s_linear_infinite]" />
            </div>

            {/* avatar + glow interno */}
            <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/assets/wesley.jpg"   // arquivo em /public/assets/wesley.jpg
                alt="Foto de Wesley Abreu"
                fill
                priority
                sizes="(min-width:1024px) 380px, 320px"
                className="object-cover object-[48%_32%]"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.25),transparent_40%)]" />
            </div>

            {/* glow externo sutil */}
            <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-2xl transition duration-300 group-hover:blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
