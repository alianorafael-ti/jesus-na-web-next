"use client";

import { useEffect, useState } from "react";

type AreaIntroModalProps = {
  titulo: string;
  destaque: string;
  introducao: string;
};

export default function AreaIntroModal({
  titulo,
  destaque,
  introducao,
}: AreaIntroModalProps) {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    if (!aberto) return;

    const fecharComEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setAberto(false);
      }
    };

    document.addEventListener("keydown", fecharComEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", fecharComEsc);
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <>
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="mb-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#d4af37] transition hover:text-yellow-300"
      >
        Conhecer esta seção
        <span aria-hidden="true">→</span>
      </button>

      {aberto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-6"
          onClick={() => setAberto(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="area-modal-title"
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-yellow-500/30 bg-[#161616] shadow-2xl"
          >
            {/* Cabeçalho */}
            <div className="flex shrink-0 items-start justify-between gap-6 border-b border-white/10 px-7 py-6 sm:px-9">
              <div>
                <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                  {destaque}
                </p>

                <h2
                  id="area-modal-title"
                  className="text-2xl font-bold leading-tight text-white sm:text-3xl"
                >
                  {titulo}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setAberto(false)}
                aria-label="Fechar"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-400 transition hover:border-yellow-500/40 hover:text-white"
              >
                ×
              </button>
            </div>

            {/* Conteúdo rolável */}
            <div className="overflow-y-auto px-7 py-7 sm:px-9 sm:py-8">
              <div className="mb-7 h-px w-20 bg-[#d4af37]" />

              <p className="whitespace-pre-line text-base leading-8 text-zinc-300 sm:text-lg">
                {introducao}
              </p>
            </div>

            {/* Rodapé */}
            <div className="shrink-0 border-t border-white/10 px-7 py-5 sm:px-9">
              <button
                type="button"
                onClick={() => setAberto(false)}
                className="rounded-lg border border-yellow-500/40 px-5 py-3 text-sm font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
              >
                Voltar aos conteúdos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}