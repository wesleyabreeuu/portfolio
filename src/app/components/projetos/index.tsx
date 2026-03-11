"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ExternalLink, Github, ChevronDown } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* ===== IMPORTS ESTATICOS (lendo de /public) =====
   Garanta que os arquivos existem com exatamente estes nomes:
   public/assets/projetos/agenda-pro.jpeg
   public/assets/projetos/hotel-manager.jpeg
   public/assets/projetos/placar-arena.jpeg
   public/assets/projetos/biblioteca-pro.jpeg
*/
import imgAgendaPro from "@/../public/assets/projetos/agenda-pro.jpeg";
import imgHotelManager from "@/../public/assets/projetos/hotel-manager.jpeg";
import imgPlacarArena from "@/../public/assets/projetos/placar-arena.jpeg";
import imgBibliotecaPro from "@/../public/assets/projetos/biblioteca-pro.jpeg";
import imgSaoJose from "@/../public/assets/projetos/sitesaojose.jpeg";
import imgRafael from "@/../public/assets/projetos/siterafael.jpeg";
import imgjfInstalacoes from "@/../public/assets/projetos/sistemajf.jpeg";


export type ProjetoItem = {
  id: string;
  titulo: string;
  subtitulo?: string;
  imagem: StaticImageData;
  descricao: string;
  techs?: string[];
  siteUrl?: string;
  repoUrl?: string;
};

const demoProjetos: ProjetoItem[] = [
  {
    id: "agenda-pro",
    titulo: "AgendaPro",
    subtitulo: "Sistema de agendamentos com WhatsApp",
    imagem: imgAgendaPro,
    descricao:
      "SaaS multiusuario para agendamentos e lembretes automaticos via WhatsApp, com relatorios, permissoes e painel em tempo real. Alem de controle de agenda em TodoList.",
    techs: ["Laravel", "MySQL", "AdminLTE", "WPPConnect", "Git", "Docker"],
    // siteUrl: "#",
    repoUrl: "https://github.com/wesleyabreeuu/agendaPro",
  },
  {
    id: "hotel-manager",
    titulo: "Hotel Manager",
    subtitulo:
      "Sistema desktop em Delphi para gestao de suites, quartos, reservas e controle financeiro",
    imagem: imgHotelManager,
    descricao:
      "Controle de entrada/saida, frigobar, financeiro e relatorios com impressao termica e integracoes.",
    techs: ["Delphi 12", "FireDAC", "MariaDB"],
    // siteUrl: "#",
    repoUrl: "https://github.com/wesleyabreeuu/sistema-motel",
  },
  {
    id: "placar-arena",
    titulo: "Placar Arena",
    subtitulo: "Sistema de placar esportivo em tempo real",
    imagem: imgPlacarArena,
    descricao:
      "Sistema web para controle de partidas, sets e pontuacao ao vivo, com tela publica e painel administrativo.",
    techs: ["Laravel", "Live updates", "MySQL", "AdminLTE", "Git", "Docker"],
    // siteUrl: "#",
    repoUrl: "https://github.com/wesleyabreeuu/placar-arena",
  },
  {
    id: "biblioteca-pro",
    titulo: "BibliotecaPro",
    subtitulo: "Sistema de gestao para bibliotecas",
    imagem: imgBibliotecaPro,
    descricao:
      "Sistema web para controle de acervo, emprestimos, reservas, multas e relatorios.",
    techs: ["Laravel", "MySQL", "AdminLTE", "Git", "Docker"],
    // siteUrl: "#",
    repoUrl: "https://github.com/wesleyabreeuu/biblioteca",
  },
  {
    id: "contabilidade-sao-jose",
    titulo: "Site Contabilidade Sao Jose",
    subtitulo: "Site institucional para escritorio de contabilidade",
    imagem: imgSaoJose,
    descricao:
      "Projeto institucional focado na apresentacao dos servicos contabeis, fortalecimento da presenca digital e geracao de novos contatos.",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    siteUrl: "https://saojosecont.com.br/",
  },
  {
    id: "rafael-dias-acessoria-contabil",
    titulo: "Site Rafael Dias Acessoria Contabil",
    subtitulo: "Site institucional para assessoria contabil",
    imagem: imgRafael,
    descricao:
      "Landing page profissional desenvolvida para destacar servicos, facilitar o contato com clientes e transmitir credibilidade ao escritorio.",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    siteUrl: "https://rafaeldiascontador.com/",
  },
  {
    id: "jf-instalacoes",
    titulo: "Sistema JF Instalacoes",
    subtitulo: "Sistema para gestao operacional e administrativa",
    imagem: imgjfInstalacoes,
    descricao:
      "Sistema voltado ao controle de processos internos, organizacao de servicos, acompanhamento de demandas e apoio a rotina administrativa da empresa.",
    techs: ["Laravel", "MySQL", "AdminLTE", "Git"],
  },
];

function SanduicheItem({
  ativo,
  onClick,
  titulo,
  subtitulo,
}: {
  ativo: boolean;
  onClick: () => void;
  titulo: string;
  subtitulo?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-expanded={ativo}
      className={`group relative w-full rounded-2xl border border-white bg-black px-4 py-3 text-left shadow-sm text-white transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white ${
        ativo ? "ring-2 ring-white" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-white">
          <Menu className="h-5 w-5" aria-hidden />
        </div>
        <div className="flex-1">
          <p className="font-semibold leading-tight text-white">{titulo}</p>
          {subtitulo ? (
            <p className="text-sm leading-snug text-gray-300">{subtitulo}</p>
          ) : null}
        </div>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${ativo ? "rotate-180" : ""}`}
        />
      </div>
    </button>
  );
}

function ProjetoDetalhe({ item }: { item: ProjetoItem }) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2 }}
      className="mt-3"
      role="region"
      aria-label={`Detalhes do projeto ${item.titulo}`}
    >
      <Card className="overflow-hidden border border-white bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-56 md:h-full">
            <Image
              src={item.imagem}
              alt={`Imagem do projeto ${item.titulo}`}
              fill
              className="object-cover"
              priority={false}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <CardContent className="p-6">
            <CardHeader className="mb-3 p-0">
              <CardTitle className="text-xl text-white">{item.titulo}</CardTitle>
              {item.subtitulo ? (
                <CardDescription className="text-gray-300">
                  {item.subtitulo}
                </CardDescription>
              ) : null}
            </CardHeader>

            <p className="leading-relaxed text-white">{item.descricao}</p>

            {item.techs && item.techs.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.techs.map((t) => (
                  <Badge
                    key={t}
                    className="rounded-full bg-white font-medium text-black"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-3">
              {item.siteUrl && (
                <Button asChild className="bg-violet-600 text-white hover:bg-violet-700">
                  <Link href={item.siteUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visitar site
                  </Link>
                </Button>
              )}

              {item.repoUrl && (
                <Button
                  variant="outline"
                  asChild
                  className="border-white bg-white text-black hover:bg-gray-200"
                >
                  <Link href={item.repoUrl} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Repositorio
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Projetos({
  itens = demoProjetos,
  titulo = "Projetos",
  descricao = "Alguns dos trabalhos que ja desenvolvi.",
}: {
  itens?: ProjetoItem[];
  titulo?: string;
  descricao?: string;
}) {
  const [aberto, setAberto] = useState<string | null>(itens[0]?.id ?? null);

  return (
    <section id="projetos" className="w-full bg-black py-12 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="inline-block rounded-lg bg-gray-200 px-6 py-3 transition-colors hover:bg-gray-300">
          <h2 className="text-2xl font-bold text-black">{titulo}</h2>
        </div>
        <p className="mt-4 text-lg text-gray-300">{descricao}</p>
      </div>

      <div className="mx-auto mt-8 max-w-5xl space-y-4 px-4">
        {itens.map((item) => {
          const ativo = aberto === item.id;
          return (
            <div key={item.id}>
              <SanduicheItem
                titulo={item.titulo}
                subtitulo={item.subtitulo}
                ativo={ativo}
                onClick={() => setAberto(ativo ? null : item.id)}
              />
              <AnimatePresence initial={false}>
                {ativo ? <ProjetoDetalhe item={item} /> : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
