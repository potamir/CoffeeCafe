"use client";

import { useState } from "react";
import Image from "next/image";
import menuData, { MenuCategory, MenuItem } from "@/data/menu";

function formatPrice(price: number | string, unit?: string): string {
  if (typeof price === "string") return `Rp ${price}`;
  const formatted = price.toLocaleString("id-ID");
  return unit ? `Rp ${formatted} ${unit}` : `Rp ${formatted}`;
}

function MenuCard({
  item,
  isOpen,
  onToggle,
}: {
  item: MenuItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-amber-100 last:border-0">
      {/* Row — clickable */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-3 text-left group"
      >
        <div className="flex flex-col">
          <span className="text-gray-800 font-medium text-sm sm:text-base group-hover:text-amber-700 transition-colors">
            {item.name}
          </span>
          {item.note && (
            <span className="text-xs text-gray-400 italic">{item.note}</span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-amber-700 font-semibold text-sm sm:text-base">
            {formatPrice(item.price, item.unit)}
          </span>
          <svg
            className={`w-4 h-4 text-amber-400 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expandable image grid */}
      {isOpen && item.images && (
        <div className="pb-4">
          {/*
            Layout:
            [ img-0 (tall) ] [ img-1 (short) ]
                             [ img-2 (short) ]
          */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-52 sm:h-64">
            {/* Left: spans 2 rows */}
            <div className="row-span-2 relative rounded-xl overflow-hidden bg-amber-100">
              <Image
                src={item.images[0].src}
                alt={item.images[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 280px"
              />
            </div>
            {/* Top-right */}
            <div className="relative rounded-xl overflow-hidden bg-amber-100">
              <Image
                src={item.images[1].src}
                alt={item.images[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 280px"
              />
            </div>
            {/* Bottom-right */}
            <div className="relative rounded-xl overflow-hidden bg-amber-100">
              <Image
                src={item.images[2].src}
                alt={item.images[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 280px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CategorySection({
  category,
  openKey,
  onToggle,
}: {
  category: MenuCategory;
  openKey: string | null;
  onToggle: (key: string) => void;
}) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-amber-800 uppercase tracking-widest">
          {category.category}
        </h2>
        <div className="flex-1 h-px bg-amber-200" />
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-amber-50 px-4 sm:px-6 py-2">
        {category.items.map((item) => {
          const key = `${category.category}__${item.name}`;
          return (
            <MenuCard
              key={key}
              item={item}
              isOpen={openKey === key}
              onToggle={() => onToggle(key)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  function handleToggle(key: string) {
    setOpenKey((prev) => (prev === key ? null : key));
  }

  return (
    <main
      className="min-h-screen bg-[#F5E6D6] bg-contain bg-bottom bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      {/* Contact bar */}
      <a
        href="https://wa.me/6282386866757"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition-colors text-white text-xs sm:text-sm py-2 px-4"
      >
        <svg
          className="w-4 h-4 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.492a.5.5 0 0 0 .614.614l5.647-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.003-1.373l-.359-.214-3.712.97.991-3.624-.234-.373A9.818 9.818 0 1 1 12 21.818z" />
        </svg>
        Chat us on WhatsApp · +62 823-8686-6757
      </a>

      {/* Hero / Header */}
      <header
        className="relative bg-[#FFE9C8] text-white py-12 px-4 text-center shadow-md bg-contain bg-bottom bg-repeat-x"
        style={{ backgroundImage: "url('/images/header.jpg')" }}
      >
        {/* dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/50" />
        {/* content above overlay */}
        <div className="relative z-10">
          <p className="text-amber-300 text-xs tracking-[0.3em] uppercase mb-2">
            Homemade with love
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Coffee&apos;s Cafe
          </h1>
          <p className="mt-3 text-amber-200 text-sm sm:text-base max-w-xs mx-auto">
            Fresh baked snacks &amp; pastries — made fresh daily
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <span className="inline-block bg-amber-700 rounded-full px-5 py-1.5 text-xs text-amber-100 tracking-wide">
              All prices in IDR (Rp)
            </span>
            <span className="inline-block bg-white/20 rounded-full px-5 py-1.5 text-xs text-white/90 tracking-wide italic">
              * Gambar hanya ilustrasi, bukan jaminan porsi atau tampilan sebenarnya *
            </span>
          </div>
        </div>
      </header>

      {/* Menu */}
      <div className="max-w-xl mx-auto px-4 py-10 pb-40">
        {menuData.map((category) => (
          <CategorySection
            key={category.category}
            category={category}
            openKey={openKey}
            onToggle={handleToggle}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-amber-400">
        © {new Date().getFullYear()} Coffee&apos;s Cafe · All rights reserved
      </footer>
    </main>
  );
}
