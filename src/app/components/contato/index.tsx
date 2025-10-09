"use client";

import { useState } from "react";
import Image from "next/image";
import contatoImg from "@/../public/assets/contato/1.jpeg";

export default function Contato() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [msg, setMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: se alguém preencheu, aborta silenciosamente
    if ((data.get("_honey") as string)?.trim()) {
      setStatus("success");
      setMsg("Mensagem enviada.");
      form.reset();
      return;
    }

    // Campos extras do FormSubmit
    data.set("_subject", "Nova mensagem do Portfólio");
    data.set("_template", "table");
    data.set("_captcha", "false");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/wesleyavivabr@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        }
      );

      if (!res.ok) throw new Error("Falha no envio");

      setStatus("success");
      setMsg("Mensagem enviada com sucesso! Em breve entro em contato.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMsg(
        "Não foi possível enviar agora. Tente novamente em instantes ou chame no WhatsApp."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* honeypot anti-spam (fica invisível) */}
      <input type="text" name="_honey" style={{ display: "none" }} readOnly />

      <section id="contato" className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ===== Coluna Esquerda ===== */}
            <div
              className="
                relative lg:mb-0 mb-10 overflow-hidden rounded-2xl lg:rounded-l-2xl
                min-h-[320px] lg:min-h-[520px]
              "
            >
              <Image
                src={contatoImg}
                alt="Contato"
                fill
                priority
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/25 to-transparent" />
              <h1 className="absolute top-9 left-9 text-white text-4xl font-bold drop-shadow">
                Contato
              </h1>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
                  <a href="tel:+5535991947159" className="flex items-center gap-4 mb-5">
                    {/* ícone telefone */}
                    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                      <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-slate-800">(35) 99194-7159</span>
                  </a>

                  <a href="mailto:wesleyavivabr@gmail.com" className="flex items-center gap-4 mb-5">
                    {/* ícone email */}
                    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                      <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="text-slate-800">wesleyavivabr@gmail.com</span>
                  </a>

                  <div className="flex items-center gap-4">
                    {/* ícone mapa */}
                    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                      <path d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z" stroke="#000" strokeWidth="2" />
                      <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="#4F46E5" strokeWidth="2" />
                    </svg>
                    <span className="text-slate-800">
                      Rua Visconde de Pimentel, 28 - Alicácio - Valença/RJ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Coluna Direita — Form ===== */}
            <div className="rounded-2xl bg-white/60 backdrop-blur-xl shadow-2xl p-6 lg:p-11">
              <h2 className="text-black text-3xl font-extrabold leading-10 mb-8">
                Envie-nos uma mensagem
              </h2>

              {/* Banner de status */}
              {status !== "idle" && (
                <div
                  className={`mb-6 rounded-xl p-4 text-sm ${
                    status === "success"
                      ? "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300"
                      : status === "error"
                      ? "bg-rose-100 text-rose-800 ring-1 ring-rose-300"
                      : "bg-slate-100 text-slate-700 ring-1 ring-slate-300"
                  }`}
                  aria-live="polite"
                >
                  {status === "sending" ? "Enviando..." : msg}
                </div>
              )}

              <div className="space-y-6">
                {/* Nome */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder=" "
                    className="peer w-full h-12 rounded-xl border border-slate-200 bg-white/80 px-4 text-slate-800 shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-violet-500/70"
                  />
                  <label
                    htmlFor="name"
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-1 text-slate-500 transition-all
                      peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                      peer-focus:top-0 peer-focus:text-xs peer-focus:text-violet-600
                      peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs"
                  >
                    Nome
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder=" "
                    className="peer w-full h-12 rounded-xl border border-slate-200 bg-white/80 px-4 text-slate-800 shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-violet-500/70"
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-1 text-slate-500 transition-all
                      peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                      peer-focus:top-0 peer-focus:text-xs peer-focus:text-violet-600
                      peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs"
                  >
                    Email
                  </label>
                </div>

                {/* Telefone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder=" "
                    className="peer w-full h-12 rounded-xl border border-slate-200 bg-white/80 px-4 text-slate-800 shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-violet-500/70"
                  />
                  <label
                    htmlFor="phone"
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-1 text-slate-500 transition-all
                      peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                      peer-focus:top-0 peer-focus:text-xs peer-focus:text-violet-600
                      peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs"
                  >
                    Telefone
                  </label>
                </div>

                {/* Método preferido */}
                <fieldset>
                  <legend className="mb-3 text-slate-600">
                    Método de comunicação preferido
                  </legend>
                  <div className="flex items-center gap-6">
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferred"
                        value="email"
                        defaultChecked
                        className="h-4 w-4 accent-violet-600"
                      />
                      <span className="text-slate-700">Email</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferred"
                        value="phone"
                        className="h-4 w-4 accent-violet-600"
                      />
                      <span className="text-slate-700">Telefone</span>
                    </label>
                  </div>
                </fieldset>

                {/* Mensagem */}
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    placeholder=" "
                    className="peer w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-violet-500/70"
                  />
                  <label
                    htmlFor="message"
                    className="pointer-events-none absolute left-4 top-3 bg-white/80 px-1 text-slate-500 transition-all
                      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-violet-600
                      peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs"
                  >
                    Mensagem
                  </label>
                </div>

                {/* Botão */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative w-full h-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-lg transition hover:from-violet-500 hover:to-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-violet-500/30 disabled:opacity-70"
                >
                  <span className="absolute inset-0 -z-10 rounded-full bg-black/10 opacity-0 blur transition-opacity group-hover:opacity-20" />
                  <span className="pointer-events-none absolute inset-y-0 left-[-30%] w-1/3 translate-x-0 skew-x-[-20deg] bg-white/40 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-30" />
                  {status === "sending" ? "Enviando..." : "Enviar"}
                </button>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/5535991947159"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center text-sm text-slate-600 hover:underline"
                >
                  Prefere falar no WhatsApp? Clique aqui.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
