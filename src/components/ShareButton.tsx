"use client";

import { useState } from "react";

type ShareButtonProps = {
  title: string;
  text?: string;
};

export default function ShareButton({ title, text }: ShareButtonProps) {
  const [copiado, setCopiado] = useState(false);

  async function compartilhar() {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url,
        });

        return;
      }

      await navigator.clipboard.writeText(url);
      setCopiado(true);

      window.setTimeout(() => {
        setCopiado(false);
      }, 2500);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      try {
        await navigator.clipboard.writeText(url);
        setCopiado(true);

        window.setTimeout(() => {
          setCopiado(false);
        }, 2500);
      } catch {
        setCopiado(false);
      }
    }
  }

  return (
    <section className="border-t border-yellow-500/20 pt-10">
      <div className="rounded-xl border border-white/10 bg-[#161616] p-6 sm:p-7">
        <p className="text-xs font-bold tracking-[0.18em] text-[#d4af37] uppercase">
          Compartilhe
        </p>

        <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
          Este conteúdo falou com você?
        </h2>

        <p className="mt-3 leading-7 text-zinc-300">
          Compartilhe com alguém que também possa ser edificado por esta
          mensagem.
        </p>

        <button
          type="button"
          onClick={compartilhar}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-yellow-500/40 px-5 py-3 text-sm font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
        >
          <span aria-hidden="true">↗</span>
          {copiado ? "Link copiado!" : "Compartilhar"}
        </button>
      </div>
    </section>
  );
}