
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type GaleriaRelatorioProps = {
  mes: string;
  fotos: string[];
};

export default function GaleriaRelatorio({
  mes,
  fotos,
}: GaleriaRelatorioProps) {
  const [aberta, setAberta] = useState(false);
  const [indice, setIndice] = useState(0);

  const anterior = () => {
    setIndice((atual) => (atual - 1 + fotos.length) % fotos.length);
  };

  const proxima = () => {
    setIndice((atual) => (atual + 1) % fotos.length);
  };

  useEffect(() => {
    if (!aberta) return;

    const tecla = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAberta(false);
      if (event.key === "ArrowRight") {
        setIndice((i) => (i + 1) % fotos.length);
      }
      if (event.key === "ArrowLeft") {
        setIndice((i) => (i - 1 + fotos.length) % fotos.length);
      }
    };

    document.addEventListener("keydown", tecla);
    return () => document.removeEventListener("keydown", tecla);
  }, [aberta, fotos.length]);

  useEffect(() => {
    if (!aberta) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowAnterior;
    };
  }, [aberta]);

  if (fotos.length === 0) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIndice(0);
          setAberta(true);
        }}
        className="inline-flex items-center justify-center rounded-lg border-2 border-[#071426] px-6 py-3 font-bold text-[#071426] transition hover:bg-[#071426] hover:text-white"
      >
        📷 Ver fotografias ({fotos.length})
      </button>

      {aberta && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Fotografias de ${mes}`}
          className="fixed inset-0 z-50 flex flex-col bg-[#071426]/95 p-4 text-white"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-bold">{mes}</h2>
              <p className="text-sm text-slate-300">
                Fotografia {indice + 1} de {fotos.length}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setAberta(false)}
              aria-label="Fechar galeria"
              className="rounded-lg border border-white/30 px-4 py-2 hover:bg-white/10"
            >
              ✕ Fechar
            </button>
          </div>

          <div className="relative mt-5 min-h-0 flex-1">
            <Image
              key={fotos[indice]}
              src={fotos[indice]}
              alt={`Registro ${indice + 1} da missão em ${mes}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="mt-5 flex items-center justify-center gap-5 pb-3">
            <button
              type="button"
              onClick={anterior}
              aria-label="Fotografia anterior"
              className="rounded-lg bg-white/10 px-5 py-3 font-bold hover:bg-white/20"
            >
              ← Anterior
            </button>

            <span className="text-sm">
              {indice + 1} / {fotos.length}
            </span>

            <button
              type="button"
              onClick={proxima}
              aria-label="Próxima fotografia"
              className="rounded-lg bg-[#d4af37] px-5 py-3 font-bold text-[#071426] hover:bg-[#e8c65b]"
            >
              Próxima →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
