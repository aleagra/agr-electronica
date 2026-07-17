/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, k as renderScript, l as renderHead, n as renderComponent, o as renderSlot, h as createAstro } from '../chunks/astro/server_FkKwyj-Y.mjs';
import 'piccolore';
import 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Rese\xF1as", href: "#resenas" },
    { label: "Contacto", href: "#contacto" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="fixed top-0 left-0 right-0 z-[9999] h-16 w-full bg-white/80 dark:bg-[#020816]/80 border-b border-black/5 dark:border-white/5 backdrop-blur-md transition-all duration-300 shadow-sm flex items-center"> <nav class="max-w-[90rem] mx-auto w-full px-8 sm:px-12 lg:px-20 flex items-center justify-between h-full">  <div class="flex items-center gap-4"> <a href="/" class="flex items-center gap-2.5 group"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-8 h-8 select-none transition-transform duration-300 group-hover:scale-105"> <defs> <radialGradient id="bg-grad" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#051433"></stop> <stop offset="100%" stop-color="#020816"></stop> </radialGradient> <linearGradient id="silver-border" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#ffffff"></stop> <stop offset="30%" stop-color="#94a3b8"></stop> <stop offset="70%" stop-color="#475569"></stop> <stop offset="100%" stop-color="#0f172a"></stop> </linearGradient> <linearGradient id="blue-glow" x1="0%" y1="100%" x2="0%" y2="0%"> <stop offset="0%" stop-color="#00f5ff"></stop> <stop offset="100%" stop-color="#0052ff" stop-opacity="0.2"></stop> </linearGradient> </defs> <style>
            .lightning {
              stroke-dasharray: 100;
              stroke-dashoffset: 0;
              transition: stroke-dashoffset 0.8s ease-in-out, filter 0.3s ease;
            }
            .group:hover .lightning {
              filter: drop-shadow(0 0 6px #00f5ff);
            }
            .group:hover .lightning-1 {
              animation: energy-pulse 1.5s infinite alternate;
            }
            .group:hover .lightning-2 {
              animation: energy-pulse 1.2s infinite alternate 0.2s;
            }
            .group:hover .lightning-3 {
              animation: energy-pulse 1.8s infinite alternate 0.4s;
            }
            .chip-glow {
              transition: opacity 0.3s ease;
            }
            .group:hover .chip-glow {
              opacity: 0.85;
            }
            @keyframes energy-pulse {
              0% {
                opacity: 0.7;
                stroke-width: 1.5;
              }
              100% {
                opacity: 1;
                stroke-width: 2.5;
              }
            }
          </style> <!-- Outer Silver/Chrome Circle --> <circle cx="50" cy="50" r="45" fill="url(#bg-grad)" stroke="url(#silver-border)" stroke-width="4"></circle> <!-- Inner Glow Ring --> <circle cx="50" cy="50" r="41" fill="none" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.25" class="transition-opacity duration-300 group-hover:stroke-opacity-60"></circle> <!-- CPU/Microchip Base (Isometric projection) --> <g transform="translate(50, 64)"> <!-- Behind-chip Glow --> <ellipse cx="0" cy="0" rx="22" ry="11" fill="#0052ff" filter="blur(6px)" opacity="0.4" class="chip-glow"></ellipse> <!-- PCB Board --> <polygon points="-22,0 0,-11 22,0 0,11" fill="#09142b" stroke="#00a2ff" stroke-width="1.5"></polygon> <!-- Chip substrate (raised) --> <polygon points="-14,-4 0,-11 14,-4 0,3" fill="#1e3a8a" stroke="#00f5ff" stroke-width="1"></polygon> <!-- Silicon Die (core center) --> <polygon points="-7,-5 0,-8.5 7,-5 0,-1.5" fill="#00f5ff" stroke="#ffffff" stroke-width="0.7"></polygon> <!-- Pins Left --> <path d="M-18,-2 L-23,-4.5" stroke="#94a3b8" stroke-width="1"></path> <path d="M-13,0.5 L-18,-2" stroke="#94a3b8" stroke-width="1"></path> <path d="M-8,3 L-13,0.5" stroke="#94a3b8" stroke-width="1"></path> <!-- Pins Right --> <path d="M18,-2 L23,-4.5" stroke="#94a3b8" stroke-width="1"></path> <path d="M13,0.5 L18,-2" stroke="#94a3b8" stroke-width="1"></path> <path d="M8,3 L13,0.5" stroke="#94a3b8" stroke-width="1"></path> </g> <!-- Glowing Lightning / Energy traces rising up from the chip --> <!-- Left Bolt --> <path class="lightning lightning-1" d="M42,60 L32,46 L35,40 L24,28 L27,18" fill="none" stroke="#00a2ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"></path> <path d="M42,60 L32,46 L35,40 L24,28 L27,18" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"></path> <!-- Center Main Bolt --> <path class="lightning lightning-2" d="M50,56 L50,42 L46,34 L54,24 L49,16 L52,8" fill="none" stroke="#00f5ff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"></path> <path d="M50,56 L50,42 L46,34 L54,24 L49,16 L52,8" fill="none" stroke="#ffffff" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path> <!-- Right Bolt --> <path class="lightning lightning-3" d="M58,60 L68,46 L65,40 L76,28 L73,18" fill="none" stroke="#00a2ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"></path> <path d="M58,60 L68,46 L65,40 L76,28 L73,18" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <div class="flex flex-col"> <span class="font-headline font-extrabold text-sm leading-none tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-white dark:to-blue-200">
AGR
</span> <span class="font-headline font-bold text-[8px] uppercase tracking-widest text-[hsl(var(--fg-muted))] mt-0.5">
Electrónica
</span> </div> </a> </div>  <div class="hidden md:flex items-center gap-7"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--fg))]/50 hover:text-[hsl(var(--fg))] transition-colors duration-200"> ${link.label} </a>`)} </div>  <div class="flex items-center gap-3">  <a href="#contacto" class="btn-press hidden md:inline-flex items-center justify-center text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full"${addAttribute(`background: hsl(var(--fg)); color: hsl(var(--bg));`, "style")}>
Contactar
</a>  <button id="menu-toggle" type="button" class="btn-press md:hidden w-7 h-7 rounded-full flex items-center justify-center"${addAttribute(`border: 1px solid var(--card-border); background: var(--card-bg); color: hsl(var(--fg-muted));`, "style")} aria-label="Menú" aria-expanded="false"> <svg id="icon-menu" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path> </svg> <svg id="icon-close" class="w-4 h-4 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div>  <div id="mobile-menu" class="md:hidden hidden absolute top-full left-0 right-0 w-full z-[9999] pointer-events-auto"> <div class="liquid-glass rounded-3xl p-4 shadow-xl border border-white/10 dark:border-white/5 light:border-black/5 space-y-1 mx-4 bg-white/90 dark:bg-[#020816]/95 backdrop-blur-md"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="block px-4 py-3 text-xs font-bold uppercase tracking-wider text-[hsl(var(--fg-muted))] hover:text-[hsl(var(--fg))] hover:bg-white/5 rounded-xl transition-colors mobile-nav-link"> ${link.label} </a>`)} <a href="#contacto" class="mt-2 block px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl text-center transition-opacity hover:opacity-90 mobile-nav-link"${addAttribute(`background: hsl(var(--fg)); color: hsl(var(--bg));`, "style")}>
Contactame
</a> </div> </div> </nav> </header> ${renderScript($$result, "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = [
    {
      title: "Servicios",
      links: [
        { label: "Smart TV y LED", href: "#servicios" },
        { label: "Reparaci\xF3n de PC", href: "#servicios" },
        { label: "Notebooks & Laptops", href: "#servicios" },
        { label: "Limpieza & Temperatura", href: "#servicios" },
        { label: "Todas las Marcas", href: "#servicios" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { label: "Experiencia", href: "#experiencia" },
        { label: "Rese\xF1as de Clientes", href: "#resenas" },
        { label: "Contacto Directo", href: "#contacto" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "T\xE9rminos y condiciones", href: "#" },
        { label: "Pol\xEDtica de privacidad", href: "#" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-[var(--section-divider)] bg-black/25 relative overflow-hidden transition-colors duration-300">  <div class="absolute inset-0 z-0 pointer-events-none select-none dark:block hidden" style="background-image: linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px); background-size: 50px 50px;"></div>  <div class="absolute top-0 left-0 right-0 h-16 pointer-events-none z-0" style="background: linear-gradient(to bottom, rgba(3,7,18,0.6), transparent);"></div>  <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/[0.01] rounded-full blur-[100px] pointer-events-none"></div> <div class="mx-auto max-w-[90rem] px-8 sm:px-12 lg:px-20 py-20 relative z-10">  <div class="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 items-start mb-20">  <div class="col-span-2 md:col-span-4 space-y-6"> <a href="/" class="flex items-center gap-2.5 group"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-9 h-9 select-none transition-transform duration-300 group-hover:scale-105"> <defs> <radialGradient id="bg-grad-footer" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#051433"></stop> <stop offset="100%" stop-color="#020816"></stop> </radialGradient> <linearGradient id="silver-border-footer" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#ffffff"></stop> <stop offset="30%" stop-color="#94a3b8"></stop> <stop offset="70%" stop-color="#475569"></stop> <stop offset="100%" stop-color="#0f172a"></stop> </linearGradient> </defs> <style>
              .lightning-f {
                stroke-dasharray: 100;
                stroke-dashoffset: 0;
                transition: stroke-dashoffset 0.8s ease-in-out, filter 0.3s ease;
              }
              .group:hover .lightning-f {
                filter: drop-shadow(0 0 6px #00f5ff);
              }
              .group:hover .lightning-f-1 {
                animation: energy-pulse-f 1.5s infinite alternate;
              }
              .group:hover .lightning-f-2 {
                animation: energy-pulse-f 1.2s infinite alternate 0.2s;
              }
              .group:hover .lightning-f-3 {
                animation: energy-pulse-f 1.8s infinite alternate 0.4s;
              }
              .chip-glow-f {
                transition: opacity 0.3s ease;
              }
              .group:hover .chip-glow-f {
                opacity: 0.85;
              }
              @keyframes energy-pulse-f {
                0% {
                  opacity: 0.7;
                  stroke-width: 1.5;
                }
                100% {
                  opacity: 1;
                  stroke-width: 2.5;
                }
              }
            </style> <!-- Outer Silver/Chrome Circle --> <circle cx="50" cy="50" r="45" fill="url(#bg-grad-footer)" stroke="url(#silver-border-footer)" stroke-width="4"></circle> <!-- Inner Glow Ring --> <circle cx="50" cy="50" r="41" fill="none" stroke="#00f5ff" stroke-width="1.5" stroke-opacity="0.25" class="transition-opacity duration-300 group-hover:stroke-opacity-60"></circle> <!-- CPU/Microchip Base (Isometric projection) --> <g transform="translate(50, 64)"> <!-- Behind-chip Glow --> <ellipse cx="0" cy="0" rx="22" ry="11" fill="#0052ff" filter="blur(6px)" opacity="0.4" class="chip-glow-f"></ellipse> <!-- PCB Board --> <polygon points="-22,0 0,-11 22,0 0,11" fill="#09142b" stroke="#00a2ff" stroke-width="1.5"></polygon> <!-- Chip substrate (raised) --> <polygon points="-14,-4 0,-11 14,-4 0,3" fill="#1e3a8a" stroke="#00f5ff" stroke-width="1"></polygon> <!-- Silicon Die (core center) --> <polygon points="-7,-5 0,-8.5 7,-5 0,-1.5" fill="#00f5ff" stroke="#ffffff" stroke-width="0.7"></polygon> <!-- Pins Left --> <path d="M-18,-2 L-23,-4.5" stroke="#94a3b8" stroke-width="1"></path> <path d="M-13,0.5 L-18,-2" stroke="#94a3b8" stroke-width="1"></path> <path d="M-8,3 L-13,0.5" stroke="#94a3b8" stroke-width="1"></path> <!-- Pins Right --> <path d="M18,-2 L23,-4.5" stroke="#94a3b8" stroke-width="1"></path> <path d="M13,0.5 L18,-2" stroke="#94a3b8" stroke-width="1"></path> <path d="M8,3 L13,0.5" stroke="#94a3b8" stroke-width="1"></path> </g> <!-- Glowing Lightning / Energy traces rising up from the chip --> <!-- Left Bolt --> <path class="lightning-f lightning-f-1" d="M42,60 L32,46 L35,40 L24,28 L27,18" fill="none" stroke="#00a2ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"></path> <path d="M42,60 L32,46 L35,40 L24,28 L27,18" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"></path> <!-- Center Main Bolt --> <path class="lightning-f lightning-f-2" d="M50,56 L50,42 L46,34 L54,24 L49,16 L52,8" fill="none" stroke="#00f5ff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"></path> <path d="M50,56 L50,42 L46,34 L54,24 L49,16 L52,8" fill="none" stroke="#ffffff" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path> <!-- Right Bolt --> <path class="lightning-f lightning-f-3" d="M58,60 L68,46 L65,40 L76,28 L73,18" fill="none" stroke="#00a2ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"></path> <path d="M58,60 L68,46 L65,40 L76,28 L73,18" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <div class="flex flex-col"> <span class="font-headline font-extrabold text-base leading-none tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-white dark:to-blue-200">
AGR
</span> <span class="font-headline font-bold text-[9px] uppercase tracking-widest text-[hsl(var(--fg-muted))] mt-0.5">
Electrónica
</span> </div> </a> <p class="text-sm leading-relaxed text-[hsl(var(--fg-muted))] max-w-xs">
Reparación y mantenimiento de tus equipos, con diagnósticos claros y
          sin vueltas.
</p>  <div class="flex items-center gap-3 pt-2"> <a href="https://www.instagram.com/agr_electronica" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl flex items-center justify-center text-[hsl(var(--fg-muted))] hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300 active:scale-[0.95]"${addAttribute(`background: var(--card-bg); border: 1px solid var(--card-border);`, "style")} aria-label="Instagram"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path> </svg> </a> <a href="https://wa.me/5492236229328" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl flex items-center justify-center text-[hsl(var(--fg-muted))] hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300 active:scale-[0.95]"${addAttribute(`background: var(--card-bg); border: 1px solid var(--card-border);`, "style")} aria-label="WhatsApp"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg> </a> </div> </div>  <div class="hidden md:block md:col-span-2"></div>  ${footerLinks.map((group) => renderTemplate`<div class="col-span-1 md:col-span-2 space-y-5"> <h4 class="text-[10px] font-bold text-[hsl(var(--fg-faint))] uppercase tracking-widest"> ${group.title} </h4> <ul class="space-y-3.5"> ${group.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm font-medium text-[hsl(var(--fg-muted))] hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 relative group/link"> ${link.label} <span class="absolute left-0 bottom-0 w-0 h-px bg-blue-500 group-hover/link:w-full transition-all duration-300"></span> </a> </li>`)} </ul> </div>`)} </div>  <div class="pt-8 border-t border-[var(--section-divider)] flex flex-col sm:flex-row items-center justify-between gap-4"> <p class="text-xs text-[hsl(var(--fg-faint))] font-medium">
&copy; ${currentYear} AGR Electrónica. Todos los derechos reservados.
</p> <div class="flex items-center gap-1.5"> <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> <p class="text-xs text-[hsl(var(--fg-faint))] font-medium tracking-wide">
Hecho por Alejandro Agra.
</p> </div> </div> </div> </footer>`;
}, "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Soporte t\xE9cnico profesional para PC, notebooks, redes y m\xE1s. T\xE9cnicos certificados con garant\xEDa.",
    ogImage = "/og-image.png"
  } = Astro2.props;
  const siteUrl = "https://tudominio.com";
  return renderTemplate`<html lang="es" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(siteUrl + Astro2.url.pathname, "href")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(siteUrl + Astro2.url.pathname, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(siteUrl + ogImage, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(siteUrl + ogImage, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body>  <svg class="absolute w-0 h-0" aria-hidden="true"> <filter id="c3-noise"> <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"></feTurbulence> <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"></feColorMatrix> <feComposite in2="SourceGraphic" operator="in" result="noise"></feComposite> <feBlend in="SourceGraphic" in2="noise" mode="multiply"></feBlend> </filter> </svg>  <div class="hidden lg:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+45rem)] w-px z-[6]"${addAttribute(`background: var(--guide-line)`, "style")}></div> <div class="hidden lg:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+45rem)] w-px z-[6]"${addAttribute(`background: var(--guide-line)`, "style")}></div> <div class="relative z-10 min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="pt-16"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${renderScript($$result, "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/layouts/Layout.astro", void 0);

function getBusinessStatus() {
  const now = /* @__PURE__ */ new Date();
  const argOffset = -3 * 60;
  const utc = now.getTime() + now.getTimezoneOffset() * 6e4;
  const argTime = new Date(utc + argOffset * 6e4);
  const day = argTime.getDay();
  const hours = argTime.getHours();
  const minutes = argTime.getMinutes();
  const totalMinutes = hours * 60 + minutes;
  const openMin = 9 * 60 + 30;
  const closeMin = 16 * 60;
  const isOpen = day >= 1 && day <= 5 && totalMinutes >= openMin && totalMinutes < closeMin;
  let badgeText = "";
  if (isOpen) {
    badgeText = "ABIERTO — Lunes a Viernes de 9:30 a 16:00 hs";
  } else {
    if (day >= 1 && day <= 5 && totalMinutes < openMin) {
      badgeText = "CERRADO — Abre hoy 9:30 hs";
    } else if (day >= 1 && day <= 4 && totalMinutes >= closeMin) {
      badgeText = "CERRADO — Abre mañana 9:30 hs";
    } else {
      badgeText = "CERRADO — Abre Lunes 9:30 hs";
    }
  }
  return {
    isOpen,
    label: isOpen ? "Abierto" : "Cerrado",
    badgeText
  };
}

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const { isOpen, badgeText } = getBusinessStatus();
  return renderTemplate`<!-- 
  =========================================
  HERO CONTAINER 
  - Ajuste del Degradado de Fondo: Modificá los colores de Tailwind en la directiva "from-...", "via-..." y "to-..." de abajo.
  - Ajuste de Imagen/Ilustración: Podés añadir un tag <img> absoluto o una regla de CSS "background-image" dentro del div de abajo.
  =========================================
-->${maybeRenderHead()}<section class="relative min-h-[95dvh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#020816] via-[#071638] to-[#050b14]" data-astro-cid-bbe6dxrz>  <div class="absolute inset-0 z-0 pointer-events-none select-none" style="background-image: linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-bbe6dxrz></div>  <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050B14] to-transparent pointer-events-none z-10" data-astro-cid-bbe6dxrz></div>  <div class="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00a2ff]/15 rounded-full blur-[140px] pointer-events-none z-0" data-astro-cid-bbe6dxrz></div> <div class="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-[#00f5ff]/8 rounded-full blur-[100px] pointer-events-none z-0" data-astro-cid-bbe6dxrz></div> <div class="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#0055ff]/8 rounded-full blur-[120px] pointer-events-none z-0" data-astro-cid-bbe6dxrz></div>  <div class="relative z-10 flex-1 flex items-center max-w-[90rem] mx-auto w-full px-8 sm:px-12 lg:px-20 pt-24 pb-12 sm:pt-32 sm:pb-16" data-astro-cid-bbe6dxrz> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full" data-astro-cid-bbe6dxrz>  <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1" data-astro-cid-bbe6dxrz>  <div id="hero-status-badge"${addAttribute(`hero-animate hero-animate-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm mb-6 sm:mb-8 select-none transition-colors duration-300 ${isOpen ? "bg-blue-500/10" : "bg-slate-500/5"}`, "class")} data-astro-cid-bbe6dxrz> <span class="relative flex h-2 w-2" data-astro-cid-bbe6dxrz> <span id="hero-status-ping"${addAttribute(`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? "bg-emerald-400" : "bg-rose-400"}`, "class")} data-astro-cid-bbe6dxrz></span> <span id="hero-status-dot"${addAttribute(`relative inline-flex rounded-full h-2 w-2 ${isOpen ? "bg-emerald-500" : "bg-rose-500"}`, "class")} data-astro-cid-bbe6dxrz></span> </span> <span id="hero-status-text"${addAttribute(`text-xs font-mono font-semibold tracking-wide ${isOpen ? "text-blue-200" : "text-slate-400"}`, "class")} data-astro-cid-bbe6dxrz> <span${addAttribute(isOpen ? "text-emerald-400" : "text-rose-400", "class")} data-astro-cid-bbe6dxrz>${badgeText.split(" \u2014 ")[0]}</span> — <span${addAttribute(isOpen ? "text-white" : "text-slate-300", "class")} data-astro-cid-bbe6dxrz>${badgeText.split(" \u2014 ")[1]}</span> </span> </div>  <h1 class="hero-animate hero-animate-2 font-headline text-[clamp(2.2rem,6vw,4.2rem)] font-bold leading-[1.1] tracking-tight text-white" data-astro-cid-bbe6dxrz>
AGR ELECTRONICA <br data-astro-cid-bbe6dxrz> <span class="gradient-shiny animate-shiny text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-extrabold" data-astro-cid-bbe6dxrz>SERVICIO TÉCNICO</span> </h1>  <p class="hero-animate hero-animate-3 mt-6 text-base sm:text-lg leading-relaxed text-blue-200/70 max-w-[50ch]" data-astro-cid-bbe6dxrz>
¿Tu televisor no prende o tu computadora anda lenta? Dejá tus equipos
          en manos capacitadas.
</p>  <div class="hero-animate hero-animate-4 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto" data-astro-cid-bbe6dxrz>  <a href="#contacto" class="btn-press group/btn relative w-full sm:w-auto inline-flex h-12 items-center justify-between rounded-full bg-white text-blue-950 text-xs font-bold uppercase tracking-wider pl-8 pr-2 py-2 gap-4 hover:bg-blue-50/95" data-astro-cid-bbe6dxrz> <span data-astro-cid-bbe6dxrz>Contacto</span> <div class="w-8 h-8 rounded-full bg-blue-950/5 flex items-center justify-center transform group-hover/btn:translate-x-0.5 transition-transform duration-200" data-astro-cid-bbe6dxrz> <svg class="w-3.5 h-3.5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" data-astro-cid-bbe6dxrz></path> </svg> </div> </a>  <a href="#servicios" class="btn-press w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.02] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5" data-astro-cid-bbe6dxrz>
Ver servicios
</a> </div>  <div class="hero-animate hero-animate-5 mt-10 sm:mt-12 select-none w-full flex flex-col items-center lg:items-start" data-astro-cid-bbe6dxrz> <p class="text-sm font-semibold text-blue-100 font-headline tracking-wide animate-pulse" data-astro-cid-bbe6dxrz>
10+ años de trayectoria <span class="mx-3 text-blue-500/40" data-astro-cid-bbe6dxrz>•</span> +5000
            equipos reparados en Mar del Plata
</p> <p class="mt-2.5 text-[11px] text-blue-200/30 font-sans leading-relaxed max-w-[50ch]" data-astro-cid-bbe6dxrz>
También gestiono siniestros con Allianz, Sancor, La Segunda, San
            Cristóbal, Rivadavia y Federación Patronal.
</p> </div> </div>  <div class="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2 py-6 lg:py-0" data-astro-cid-bbe6dxrz> <div class="relative w-full max-w-[280px] sm:max-w-[360px] aspect-square flex items-center justify-center animate-float" data-astro-cid-bbe6dxrz>  <div class="absolute inset-0 bg-blue-500/10 rounded-full blur-[60px] animate-pulse" data-astro-cid-bbe6dxrz></div> <div class="absolute w-[80%] h-[80%] bg-cyan-400/5 rounded-full blur-[40px] animate-pulse [animation-delay:1s]" data-astro-cid-bbe6dxrz></div>  <svg class="absolute w-[130%] h-[130%] pointer-events-none opacity-30 dark:opacity-45" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-bbe6dxrz> <path d="M20,100 L60,100 L80,120 L120,120 L140,100 L180,100" stroke="#00f5ff" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.3" data-astro-cid-bbe6dxrz></path> <path d="M50,40 L80,70 L120,70 L140,50" stroke="#0052ff" stroke-width="1.5" opacity="0.4" data-astro-cid-bbe6dxrz></path> <circle cx="80" cy="70" r="3" fill="#00f5ff" data-astro-cid-bbe6dxrz></circle> <circle cx="120" cy="70" r="3" fill="#0052ff" data-astro-cid-bbe6dxrz></circle> <path d="M40,160 L70,130 L130,130 L160,160" stroke="#00a2ff" stroke-width="1.2" opacity="0.3" data-astro-cid-bbe6dxrz></path> </svg>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="w-full h-full select-none drop-shadow-[0_0_30px_rgba(0,162,255,0.25)]" data-astro-cid-bbe6dxrz> <defs data-astro-cid-bbe6dxrz> <radialGradient id="hero-badge-bg" cx="50%" cy="50%" r="50%" data-astro-cid-bbe6dxrz> <stop offset="0%" stop-color="#091c42" data-astro-cid-bbe6dxrz></stop> <stop offset="60%" stop-color="#030c24" data-astro-cid-bbe6dxrz></stop> <stop offset="100%" stop-color="#010512" data-astro-cid-bbe6dxrz></stop> </radialGradient> <linearGradient id="hero-badge-border" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-bbe6dxrz> <stop offset="0%" stop-color="#ffffff" data-astro-cid-bbe6dxrz></stop> <stop offset="25%" stop-color="#cbd5e1" data-astro-cid-bbe6dxrz></stop> <stop offset="50%" stop-color="#64748b" data-astro-cid-bbe6dxrz></stop> <stop offset="75%" stop-color="#334155" data-astro-cid-bbe6dxrz></stop> <stop offset="100%" stop-color="#0f172a" data-astro-cid-bbe6dxrz></stop> </linearGradient> <linearGradient id="hero-chrome-text" x1="0%" y1="0%" x2="0%" y2="100%" data-astro-cid-bbe6dxrz> <stop offset="0%" stop-color="#ffffff" data-astro-cid-bbe6dxrz></stop> <stop offset="40%" stop-color="#e0f2fe" data-astro-cid-bbe6dxrz></stop> <stop offset="50%" stop-color="#38bdf8" data-astro-cid-bbe6dxrz></stop> <stop offset="75%" stop-color="#0284c7" data-astro-cid-bbe6dxrz></stop> <stop offset="100%" stop-color="#0369a1" data-astro-cid-bbe6dxrz></stop> </linearGradient> <radialGradient id="core-glow" cx="50%" cy="50%" r="40%" data-astro-cid-bbe6dxrz> <stop offset="0%" stop-color="#00f5ff" stop-opacity="0.8" data-astro-cid-bbe6dxrz></stop> <stop offset="50%" stop-color="#0052ff" stop-opacity="0.4" data-astro-cid-bbe6dxrz></stop> <stop offset="100%" stop-color="#000000" stop-opacity="0" data-astro-cid-bbe6dxrz></stop> </radialGradient> </defs> <!-- Outer Chrome Ring --> <circle cx="100" cy="100" r="90" fill="url(#hero-badge-bg)" stroke="url(#hero-badge-border)" stroke-width="6.5" data-astro-cid-bbe6dxrz></circle> <circle cx="100" cy="100" r="84" fill="none" stroke="#00f5ff" stroke-width="1.8" stroke-opacity="0.4" data-astro-cid-bbe6dxrz></circle> <!-- Ambient Glow behind CPU --> <circle cx="100" cy="128" r="42" fill="url(#core-glow)" data-astro-cid-bbe6dxrz></circle> <!-- CPU Microchip (Detailed Isometric) --> <g transform="translate(100, 136)" data-astro-cid-bbe6dxrz> <!-- PCB base plate --> <polygon points="-42,0 0,-20 42,0 0,20" fill="#040e24" stroke="#00a2ff" stroke-width="2.2" data-astro-cid-bbe6dxrz></polygon> <!-- Copper corner traces --> <polygon points="-35,0 0,-17 35,0 0,17" fill="none" stroke="#0052ff" stroke-width="1" opacity="0.6" data-astro-cid-bbe6dxrz></polygon> <!-- Substrate --> <polygon points="-28,-7 0,-20 28,-7 0,5" fill="#1e3a8a" stroke="#00f5ff" stroke-width="1.2" data-astro-cid-bbe6dxrz></polygon> <!-- Silicon Core (Glow) --> <polygon points="-15,-9 0,-17 15,-9 0,-1.5" fill="#e0f2fe" stroke="#00f5ff" stroke-width="0.8" data-astro-cid-bbe6dxrz></polygon> <polygon points="-9,-8 0,-13 9,-8 0,-3" fill="#ffffff" data-astro-cid-bbe6dxrz></polygon> <!-- Pins Left --> <path d="M-35,-3.5 L-44,-8" stroke="#94a3b8" stroke-width="1.2" data-astro-cid-bbe6dxrz></path> <path d="M-28,0 L-37,-4.5" stroke="#94a3b8" stroke-width="1.2" data-astro-cid-bbe6dxrz></path> <path d="M-21,3.5 L-30,-1" stroke="#94a3b8" stroke-width="1.2" data-astro-cid-bbe6dxrz></path> <path d="M-14,7 L-23,2.5" stroke="#94a3b8" stroke-width="1.2" data-astro-cid-bbe6dxrz></path> <!-- Pins Right --> <path d="M35,-3.5 L44,-8" stroke="#94a3b8" stroke-width="1.2" data-astro-cid-bbe6dxrz></path> <path d="M28,0 L37,-4.5" stroke="#94a3b8" stroke-width="1.2" data-astro-cid-bbe6dxrz></path> <path d="M21,3.5 L30,-1" stroke="#94a3b8" stroke-width="1.2" data-astro-cid-bbe6dxrz></path> <path d="M14,7 L23,2.5" stroke="#94a3b8" stroke-width="1.2" data-astro-cid-bbe6dxrz></path> </g> <!-- Lightning Bolts (Vibrant energy) --> <!-- Bolt 1 (Left) --> <path d="M85,125 L65,95 L72,85 L50,60 L58,40" fill="none" stroke="#00a2ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.8" data-astro-cid-bbe6dxrz> <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" data-astro-cid-bbe6dxrz></animate> </path> <path d="M85,125 L65,95 L72,85 L50,60 L58,40" fill="none" stroke="#ffffff" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz></path> <!-- Bolt 2 (Center) --> <path d="M100,120 L100,90 L92,75 L108,55 L98,35 L104,18" fill="none" stroke="#00f5ff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz> <animate attributeName="opacity" values="0.7;1;0.7" dur="1.4s" repeatCount="indefinite" data-astro-cid-bbe6dxrz></animate> </path> <path d="M100,120 L100,90 L92,75 L108,55 L98,35 L104,18" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz></path> <!-- Bolt 3 (Right) --> <path d="M115,125 L135,95 L128,85 L150,60 L142,40" fill="none" stroke="#00a2ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.8" data-astro-cid-bbe6dxrz> <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" data-astro-cid-bbe6dxrz></animate> </path> <path d="M115,125 L135,95 L128,85 L150,60 L142,40" fill="none" stroke="#ffffff" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz></path> <!-- Central Text: "AGR" and "ELECTRÓNICA" --> <!-- AGR --> <text x="100" y="80" font-family="'Space Grotesk', system-ui, sans-serif" font-weight="900" font-size="32" fill="url(#hero-chrome-text)" text-anchor="middle" letter-spacing="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" data-astro-cid-bbe6dxrz>AGR</text> <!-- ELECTRÓNICA --> <rect x="38" y="89" width="124" height="14" fill="#000000" rx="2.5" opacity="0.8" stroke="#00f5ff" stroke-width="0.8" data-astro-cid-bbe6dxrz></rect> <text x="100" y="99" font-family="'Space Grotesk', system-ui, sans-serif" font-weight="800" font-size="8.5" fill="#00f5ff" text-anchor="middle" letter-spacing="2.2" data-astro-cid-bbe6dxrz>ELECTRÓNICA</text> </svg> </div> </div> </div> </div> </section>  ${renderScript($$result, "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      index: "01",
      title: "Arreglo de Smart TV y LED",
      description: "\xBFNo prende, se escucha pero no se ve, o tiene l\xEDneas en la pantalla? Cambio las tiras de LED y reparo la imagen de televisores de cualquier marca.",
      icon: "M6 20.25h12m-7.5-3v3m3-3v3m-11.25-3h16.5V5.25H3.75v11.25zm0 0h16.5"
    },
    {
      index: "02",
      title: "Reparaci\xF3n de Computadoras (PC)",
      description: "Dejo tu computadora de escritorio como nueva. Resuelvo problemas de encendido, fallas de componentes, virus y lentitud para que te ande r\xE1pida otra vez.",
      icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25"
    },
    {
      index: "03",
      title: "Notebooks y Laptops",
      description: "Arreglo cualquier modelo de port\xE1til. Cambio pantallas rotas, teclados que no andan, bater\xEDas gastadas y fallas en la placa madre.",
      icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25M3.75 16.5h16.5M21.75 19.5H2.25"
    },
    {
      index: "04",
      title: "Limpieza interna y Temperatura",
      description: "Si tu computadora o notebook junta mucha tierra, levanta temperatura o hace ruido el ventilador, le hago una limpieza profunda y le cambio la pasta t\xE9rmica para que no se queme.",
      icon: "M13.5 16.875h3.375m-1.688-10.13l-2.25 2.25m3.938-2.25l-2.25 2.25M6.75 6.75h.008v.008H6.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 3v18M3 12h18"
    },
    {
      index: "05",
      title: "Trabajo con Todas las Marcas",
      description: "No importa qu\xE9 marca sea tu equipo, traelo igual. Hago un diagn\xF3stico honesto y uso repuestos buenos para que te dure.",
      icon: "M9 12.75L11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="servicios" class="relative pt-12 pb-24 sm:pt-16 sm:pb-24 overflow-hidden dark:bg-[#050B14] bg-white transition-colors duration-300 scroll-mt-24">  <div class="absolute inset-0 z-0 pointer-events-none select-none dark:block hidden" style="background-image: linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px); background-size: 50px 50px;"></div>  <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.01] rounded-full blur-[130px] pointer-events-none"></div> <div class="mx-auto max-w-[90rem] px-8 sm:px-12 lg:px-20 relative z-10">  <div data-reveal class="border-b border-[var(--section-divider)] pb-10 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"> <div class="max-w-xl"> <span class="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-[0.2em] mb-2 block">Especialidades</span> <h2 class="text-3xl md:text-4xl font-normal tracking-tight text-[hsl(var(--fg))] font-headline leading-tight">
En qué te puedo ayudar
</h2> </div> <p class="text-sm text-[hsl(var(--fg-muted))] max-w-[40ch] leading-relaxed">
Mantenimiento, diagnóstico y reparación de tus equipos para que vuelvan a funcionar como el primer día.
</p> </div>  <div data-stagger class="grid grid-cols-12 gap-5"> ${services.map((service, i) => {
    const isWide = i < 2;
    const gridSpan = isWide ? "col-span-12 lg:col-span-6" : "col-span-12 md:col-span-6 lg:col-span-4";
    return renderTemplate`<a href="#contacto" data-reveal${addAttribute([
      "card-hover liquid-glass rounded-2xl p-6 card-glow flex flex-col justify-between group min-h-[190px] no-underline transition-all duration-350 hover:border-blue-500/40 dark:hover:border-blue-400/40",
      gridSpan
    ], "class:list")}>  <div class="flex items-start justify-between w-full mb-6"> <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105"${addAttribute(`background: var(--card-bg); border: 1px solid var(--card-border);`, "style")}> <svg class="w-4.5 h-4.5"${addAttribute(`color: var(--accent);`, "style")} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(service.icon, "d")}></path> </svg> </div> <span class="font-mono text-[10px] font-bold text-[hsl(var(--fg))]/20 group-hover:text-blue-500/40 transition-colors duration-300"> ${service.index} </span> </div>  <div class="space-y-2"> <h3 class="text-lg font-medium tracking-tight text-[hsl(var(--fg))] group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200"> ${service.title} </h3> <p class="text-xs leading-relaxed text-[hsl(var(--fg-muted))]"> ${service.description} </p> </div>  <div class="mt-4 pt-3 border-t border-[var(--section-divider)] flex items-center justify-between text-blue-500 dark:text-blue-400 transition-colors duration-300"> <span class="text-[9px] uppercase font-bold tracking-wider">
Solicitar servicio
</span> <svg class="w-3 h-3 text-blue-500 dark:text-blue-400 transform translate-x-[-3px] group-hover:translate-x-0 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path> </svg> </div> </a>`;
  })} </div> </div> </section>`;
}, "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Services.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    { value: "10+", label: "A\xF1os de experiencia" },
    { value: "5000+", label: "Equipos reparados" }
  ];
  const features = [
    {
      index: "01",
      title: "Trato directo",
      description: "Habl\xE1s siempre conmigo, de principio a fin. Sin cadenas de mails ni intermediarios: yo diagnostico, yo reparo, yo te explico qu\xE9 pas\xF3."
    },
    {
      index: "02",
      title: "Presupuesto antes de reparar",
      description: "No hago nada sin que sepas el costo primero. Te aviso el diagn\xF3stico y el precio antes de tocar el equipo, para que decidas con tranquilidad."
    },
    {
      index: "03",
      title: "Reparaciones al d\xEDa",
      description: "Trabajo con dedicaci\xF3n exclusiva a cada equipo, as\xED que los tiempos de espera son cortos comparados con un service con muchos clientes en cola."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experiencia" class="relative pt-24 pb-12 sm:pt-24 sm:pb-16 overflow-hidden dark:bg-[#0A1122] bg-[#f4f6f9]/50 transition-colors duration-300 scroll-mt-24">  <div class="absolute -bottom-20 right-0 w-[600px] h-[600px] bg-blue-600/[0.01] rounded-full blur-[150px] pointer-events-none"></div> <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/[0.03] rounded-full blur-[120px] pointer-events-none z-0"></div> <div class="mx-auto max-w-[90rem] px-8 sm:px-12 lg:px-20 relative z-10"> <div class="grid lg:grid-cols-12 gap-16 items-stretch">  <div data-reveal class="lg:col-span-5 flex flex-col justify-between lg:h-full space-y-8 lg:space-y-0"> <div> <span class="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-[0.2em] mb-4 block">Experiencia</span> <h2 class="text-4xl md:text-5xl font-normal tracking-tight text-[hsl(var(--fg))] font-headline leading-[1.1]">
Un servicio técnico de confianza en tu zona
</h2> <p class="mt-6 text-base text-[hsl(var(--fg-muted))] leading-relaxed">
Soy técnico y trabajo de forma independiente en el mantenimiento y reparación
            de dispositivos. Aprendí el oficio reparando equipo por equipo, y hoy sigo
            eligiendo hacerlo así: con tiempo real para diagnosticar bien antes de dar
            un presupuesto.
</p> </div>  <div data-stagger class="grid grid-cols-2 gap-6 w-full pt-4 lg:pt-0"> ${stats.map((stat) => renderTemplate`<div data-reveal class="card-hover liquid-glass rounded-2xl p-6 w-full text-center sm:text-left"> <div class="text-3xl font-bold tracking-tight text-[hsl(var(--fg))] font-headline"> ${stat.value} </div> <div class="mt-1 text-xs text-[hsl(var(--fg-muted))] font-medium tracking-wide"> ${stat.label} </div> </div>`)} </div> </div>  <div data-stagger class="lg:col-span-7 space-y-6 lg:pl-8"> ${features.map((feature, idx) => {
    const hoverClass = idx === 0 ? "lg:hover:-rotate-1" : idx === 1 ? "lg:translate-x-4 lg:hover:rotate-1" : "lg:-translate-x-2 lg:hover:-rotate-1";
    return renderTemplate`<div data-reveal${addAttribute(`card-hover liquid-glass rounded-3xl p-8 card-glow min-h-[150px] sm:min-h-[130px] flex items-center ${hoverClass}`, "class")}> <div class="flex items-start gap-6">  <div class="flex w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 items-center justify-center text-blue-500 dark:text-blue-400 font-mono text-xs font-bold shrink-0"> ${feature.index} </div> <div> <h3 class="text-lg font-semibold text-[hsl(var(--fg))] mb-2 flex items-center gap-3"> ${feature.title} </h3> <p class="text-sm leading-relaxed text-[hsl(var(--fg-muted))]"> ${feature.description} </p> </div> </div> </div>`;
  })} </div> </div> </div> </section>`;
}, "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/About.astro", void 0);

const MOCK_REVIEWS = [
  {
    author_name: "Carlos Mendoza",
    rating: 5,
    text: "Excelente servicio. Traje mi notebook que no encendía y en 24 horas la tenían reparada con cambio de disco y limpieza térmica. Muy transparentes con los precios.",
    relative_time_description: "Hace 2 días"
  },
  {
    author_name: "Laura Spinelli",
    rating: 5,
    text: "La cobertura de WiFi en mi oficina era pésima. Vinieron, reconfiguraron los routers e instalaron un switch nuevo. Ahora vuela todo. Super recomendables y profesionales.",
    relative_time_description: "Hace 1 semana"
  },
  {
    author_name: "Mariano Ortiz",
    rating: 5,
    text: "Hicieron soporte remoto para mi PC de escritorio. Se conectaron en el momento, limpiaron virus y optimizaron el sistema. Rapidez y comodidad absoluta.",
    relative_time_description: "Hace 2 semanas"
  },
  {
    author_name: "Sofía Galarza",
    rating: 4,
    text: "Muy buena atención en la reparación de la pantalla de mi laptop. El repuesto es original y quedó impecable. Todo de diez.",
    relative_time_description: "Hace 3 semanas"
  }
];
const Reviews = ({ limit = 4 }) => {
  const containerRef = useRef(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(4.9);
  const [count, setCount] = useState(142);
  const [loading, setLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    if (!containerRef.current || hasLoaded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchReviews();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasLoaded]);
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setRevealed(true), 50);
      return () => clearTimeout(timer);
    }
  }, [loading]);
  const fetchReviews = async () => {
    try {
      const res = await fetch(`/api/reviews?limit=${limit}`);
      if (!res.ok) throw new Error("API unavailable");
      const data = await res.json();
      if (data.reviews && data.reviews.length > 0) {
        setReviews(data.reviews.slice(0, limit));
        setRating(data.rating || 4.9);
        setCount(data.total || data.reviews.length);
      } else {
        setReviews(MOCK_REVIEWS.slice(0, limit));
      }
    } catch (err) {
      setReviews(MOCK_REVIEWS.slice(0, limit));
    } finally {
      setLoading(false);
      setHasLoaded(true);
    }
  };
  return /* @__PURE__ */ jsx("div", { ref: containerRef, className: "w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8 items-start", children: [
    /* @__PURE__ */ jsxs("div", { "data-reveal": true, className: "card-hover lg:col-span-4 liquid-glass rounded-3xl p-8 text-center space-y-6", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest block", children: "Confianza" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("div", { className: "text-6xl font-bold font-headline text-[hsl(var(--fg))]", children: loading ? "--" : rating.toFixed(1) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-1", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(
          "svg",
          {
            className: `w-4.5 h-4.5 ${i <= Math.round(rating) ? "text-amber-400" : "text-white/10"}`,
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[hsl(var(--fg))]", children: loading ? "Cargando reseñas..." : `${count} opiniones en Google Maps` }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-[hsl(var(--fg-faint))]", children: "Actualizado en tiempo real" })
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://maps.google.com",
          target: "_blank",
          rel: "noreferrer",
          className: "btn-press inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 border border-white/5 dark:border-white/5 light:border-black/5 bg-white/[0.03] dark:bg-white/[0.03] light:bg-black/[0.03] hover:bg-white/[0.08] dark:hover:bg-white/[0.08] light:hover:bg-black/[0.06] rounded-xl text-[hsl(var(--fg-muted))] hover:text-[hsl(var(--fg))]",
          children: [
            /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113-3.553 0-6.44-2.887-6.44-6.44s2.887-6.44 6.44-6.44c1.633 0 3.102.613 4.22 1.63L21.2 4.135C19.23 2.3 16.63 1.2 13.72 1.2 7.746 1.2 2.9 6.046 2.9 12.02c0 5.972 4.846 10.82 10.82 10.82 6.236 0 10.363-4.385 10.363-10.553 0-.709-.079-1.391-.22-2.002H12.24z" }) }),
            "Ver en Google Maps"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-8 grid sm:grid-cols-2 gap-4", children: loading ? [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxs("div", { className: "liquid-glass rounded-2xl p-6 animate-pulse space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-white/[0.06] dark:bg-white/[0.06] light:bg-black/[0.05]" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "h-3.5 w-24 bg-white/[0.06] dark:bg-white/[0.06] light:bg-black/[0.05] rounded" }),
          /* @__PURE__ */ jsx("div", { className: "h-3 w-16 bg-white/[0.04] dark:bg-white/[0.04] light:bg-black/[0.03] rounded" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-3 w-full bg-white/[0.04] dark:bg-white/[0.04] light:bg-black/[0.03] rounded" }),
      /* @__PURE__ */ jsx("div", { className: "h-3 w-5/6 bg-white/[0.04] dark:bg-white/[0.04] light:bg-black/[0.03] rounded" })
    ] }, i)) : reviews.map((r, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `review-reveal-item card-hover liquid-glass rounded-2xl p-6 card-glow flex flex-col justify-between ${revealed ? "is-visible" : ""}`,
        style: { transitionDelay: `${i * 60}ms` },
        children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 dark:text-blue-400 font-semibold text-xs select-none", children: r.author_name?.charAt(0) || "?" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-[hsl(var(--fg))] leading-none", children: r.author_name }),
                /* @__PURE__ */ jsx("p", { className: "text-[10px] text-[hsl(var(--fg-faint))] mt-1", children: r.relative_time_description })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx(
              "svg",
              {
                className: `w-3.5 h-3.5 ${star <= r.rating ? "text-amber-400" : "text-white/10"}`,
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
              },
              star
            )) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-[hsl(var(--fg-muted))]", children: r.text })
        ] })
      },
      i
    )) })
  ] }) });
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.message.trim()) newErrors.message = true;
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const targetPhone = "5492236229328";
    const textMessage = `*CONSULTA DESDE LA WEB*

Nombre: ${formData.name.trim()}

Consulta:
${formData.message.trim()}`;
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setFormData({ name: "", message: "" });
    setTimeout(() => setSubmitted(false), 9e3);
  };
  const errorClass = "text-[10px] text-red-400 mt-1 font-sans flex items-center gap-1";
  return /* @__PURE__ */ jsx("div", { className: "liquid-glass rounded-3xl p-6 sm:p-8 h-full min-h-[400px] flex flex-col justify-between card-glow relative", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5 flex-1 flex flex-col justify-between", noValidate: true, children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-[11px] font-semibold text-[hsl(var(--fg-muted))] mb-1.5 uppercase tracking-wider", children: "Nombre *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "name",
            name: "name",
            value: formData.name,
            onChange: handleChange,
            className: "input-field",
            style: errors.name ? { borderColor: "rgba(239, 68, 68, 0.4)", boxShadow: "0 0 8px rgba(239,68,68,0.1)" } : void 0,
            placeholder: "Tu nombre"
          }
        ),
        errors.name && /* @__PURE__ */ jsxs("p", { className: errorClass, children: [
          /* @__PURE__ */ jsx("span", { children: "⚠" }),
          " Ingresá tu nombre"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-[11px] font-semibold text-[hsl(var(--fg-muted))] mb-1.5 uppercase tracking-wider", children: "Mensaje *" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "message",
            name: "message",
            rows: 5,
            maxLength: 500,
            value: formData.message,
            onChange: handleChange,
            className: "input-field resize-none min-h-[160px]",
            style: errors.message ? { borderColor: "rgba(239, 68, 68, 0.4)", boxShadow: "0 0 8px rgba(239,68,68,0.1)" } : void 0,
            placeholder: "Describí tu problema o consulta técnica (máx. 500 caracteres)..."
          }
        ),
        errors.message && /* @__PURE__ */ jsxs("p", { className: errorClass, children: [
          /* @__PURE__ */ jsx("span", { children: "⚠" }),
          " Ingresá tu mensaje"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: submitted,
          className: "btn-press w-full rounded-xl text-xs font-bold uppercase tracking-wider py-3.5 flex items-center justify-center gap-2 select-none disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none",
          style: { background: "hsl(var(--fg))", color: "hsl(var(--bg))" },
          children: submitted ? /* @__PURE__ */ jsx("span", { children: "Enviado ✓" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
            /* @__PURE__ */ jsx("span", { children: "Iniciar chat por WhatsApp" })
          ] })
        }
      ),
      submitted && /* @__PURE__ */ jsxs("div", { className: "text-xs text-emerald-400 text-center font-sans mt-2.5 flex items-center justify-center gap-1.5 animate-pulse", children: [
        /* @__PURE__ */ jsx("span", { children: "✓" }),
        " Abriendo WhatsApp... ¡Gracias por tu consulta!"
      ] })
    ] })
  ] }) });
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const contactCards = [
    {
      title: "WhatsApp",
      value: "+54 9 223 622-9328",
      href: "https://wa.me/5492236229328",
      icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
    },
    {
      title: "Horario",
      value: "Lunes a Viernes de 9 a 18 hs",
      href: "",
      icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="relative py-24 overflow-hidden dark:bg-[#0A1122] bg-[#f4f6f9]/50 transition-colors duration-300">  <div class="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-blue-600/[0.01] rounded-full blur-[150px] pointer-events-none"></div> <div class="mx-auto max-w-[90rem] px-8 sm:px-12 lg:px-20 relative z-10">  <div data-reveal class="border-b border-[var(--section-divider)] pb-10 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"> <div class="max-w-2xl"> <div class="flex items-center gap-3 mb-2"> <span class="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-[0.2em] block">Soporte Técnico</span>  <div id="help-desk-status" class="group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 dark:bg-black/20 dark:border-white/5 shadow-sm text-[10px] font-mono text-[hsl(var(--fg))] select-none"> <span class="relative flex h-1.5 w-1.5"> <span id="help-desk-ping" class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"></span> <span id="help-desk-dot" class="relative inline-flex rounded-full h-1.5 w-1.5"></span> </span> <span id="help-desk-label" class="text-[9px] font-mono font-medium text-blue-400 uppercase tracking-widest">
...</span>  <div class="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2.5 py-1.5 bg-[#071638]/95 dark:bg-[#0b172f]/95 border border-blue-500/20 text-white rounded-lg text-[10px] font-medium tracking-wide shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top z-50 flex flex-col items-center gap-0.5"> <span class="text-blue-400 font-bold uppercase tracking-wider text-[8px]">Horario de Atención</span> <span>Lun a Vie: 9:30 a 16:00 hs</span> </div> </div> </div> <h2 class="text-3xl md:text-4xl font-normal tracking-tight text-[hsl(var(--fg))] font-headline leading-tight">
¿Tenés alguna consulta o necesitás un presupuesto?
</h2> </div> <p class="text-sm text-[hsl(var(--fg-muted))] max-w-[40ch] leading-relaxed">
Atención directa y personalizada: te respondo yo mismo, sin
        intermediarios ni esperas largas.
</p> </div>  <div data-stagger class="grid lg:grid-cols-2 gap-8 items-stretch">  <div class="flex flex-col gap-4 h-full"> <div data-reveal> ${renderComponent($$result, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/ContactForm", "client:component-export": "default" })} </div>  <div data-stagger class="grid grid-cols-1 sm:grid-cols-2 gap-4"> ${contactCards.map((card) => renderTemplate`<div data-reveal class="card-hover liquid-glass rounded-2xl p-4 card-glow flex flex-col justify-between min-h-[95px]"> <div> <div class="flex items-center gap-3.5 mb-2.5"> <div class="w-8 h-8 rounded-xl flex items-center justify-center"${addAttribute(`background: var(--card-bg); border: 1px solid var(--card-border);`, "style")}> <svg class="w-4.5 h-4.5"${addAttribute(`color: var(--accent);`, "style")} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(card.icon, "d")}></path> </svg> </div> <span class="text-[10px] font-bold text-[hsl(var(--fg-faint))] uppercase tracking-widest"> ${card.title} </span> </div> ${card.href ? renderTemplate`<a${addAttribute(card.href, "href")} class="text-xs font-semibold text-[hsl(var(--fg-muted))] hover:text-blue-500 dark:hover:text-blue-400 transition-colors"> ${card.value} </a>` : renderTemplate`<span class="text-xs font-semibold text-[hsl(var(--fg-muted))]"> ${card.value} </span>`} </div> </div>`)} </div> </div>  <div data-reveal class="h-[500px] lg:h-auto rounded-[2rem] p-px relative overflow-hidden" style="background: linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.08) 50%, rgba(14,165,233,0.2) 100%);"> <div class="h-full rounded-[calc(2rem-1px)] overflow-hidden relative bg-[#050d1f] min-h-[500px] lg:min-h-0">  <span class="absolute top-3 left-3 text-[9px] font-mono text-blue-400/50 select-none z-10 leading-none">[ + ]</span> <span class="absolute top-3 right-3 text-[9px] font-mono text-blue-400/50 select-none z-10 leading-none">[ + ]</span> <span class="absolute bottom-3 left-3 text-[9px] font-mono text-blue-400/50 select-none z-10 leading-none">[ + ]</span> <span class="absolute bottom-3 right-3 text-[9px] font-mono text-blue-400/50 select-none z-10 leading-none">[ + ]</span>  <div class="absolute top-0 left-0 w-24 h-24 bg-blue-600/10 blur-2xl rounded-full pointer-events-none z-0"></div> <div class="absolute bottom-0 right-0 w-24 h-24 bg-cyan-500/8 blur-2xl rounded-full pointer-events-none z-0"></div> <iframe src="https://maps.google.com/maps?q=12+de+Octubre+6476,+Mar+del+Plata,+Argentina&z=15&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="absolute inset-0 w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-300"></iframe> </div> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Contact.astro", void 0);

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const interacted = useRef(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!interacted.current) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3e3);
      }
    }, 3e3);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed bottom-6 right-6 z-50",
      onMouseEnter: () => {
        interacted.current = true;
        setShowTooltip(true);
      },
      onMouseLeave: () => setShowTooltip(false),
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `absolute bottom-full right-0 mb-3 px-4 py-2.5 backdrop-blur-xl rounded-xl text-sm whitespace-nowrap transition-all duration-200 ${showTooltip ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-2"}`,
            style: { background: "var(--liquid-bg)", border: "1px solid var(--liquid-border)", color: "hsl(var(--fg))" },
            children: [
              "Escribinos, te ayudamos!",
              /* @__PURE__ */ jsx("div", { className: "absolute top-full right-6 w-2 h-2 rotate-45 -translate-y-1", style: { background: "var(--liquid-bg)", borderRight: "1px solid var(--liquid-border)", borderBottom: "1px solid var(--liquid-border)" } })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://wa.me/5492236229328",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 transition-all hover:scale-110 hover:shadow-[#25D366]/30 active:scale-95",
            "aria-label": "Chatea por WhatsApp",
            children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) })
          }
        )
      ]
    }
  );
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Soporte T\xE9cnico Profesional | PC, Notebooks, Redes" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "About", $$About, {})} ${maybeRenderHead()}<section id="resenas" class="relative pt-12 pb-24 sm:pt-16 sm:pb-24 dark:bg-[#050B14] bg-white transition-colors duration-300 overflow-hidden scroll-mt-24">  <div class="absolute inset-0 z-0 pointer-events-none select-none dark:block hidden" style="background-image: linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px); background-size: 50px 50px;"></div>  <div class="absolute top-1/2 left-10 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/[0.02] rounded-full blur-[130px] pointer-events-none z-0"></div> <div class="mx-auto max-w-[90rem] px-8 sm:px-12 lg:px-20 relative z-10">  <div data-reveal class="border-b border-[var(--section-divider)] pb-10 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"> <div class="max-w-xl"> <span class="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-[0.2em] mb-2 block">Opiniones</span> <h2 class="text-3xl md:text-4xl font-normal tracking-tight text-[hsl(var(--fg))] font-headline leading-tight">
Lo que dicen mis clientes
</h2> </div> <p class="text-sm text-[hsl(var(--fg-muted))] max-w-[40ch] leading-relaxed">
Reseñas reales y opiniones verificadas de usuarios en Google Maps.
</p> </div> ${renderComponent($$result2, "Reviews", Reviews, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Reviews.tsx", "client:component-export": "default" })} </div> </section> ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "WhatsAppButton", WhatsAppButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/WhatsAppButton.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/pages/index.astro", void 0);

const $$file = "C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
