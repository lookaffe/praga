// Icone a tratto (viewBox 24x24), colore = currentColor.
const P = {
  beer:  '<path d="M5 9h10v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M15 11h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2"/><path d="M5 9c-1-2 .5-4 2.5-3.5C8.5 4 11 4 12 5.5c2-.8 3.5.8 3 3.5"/><path d="M8.5 12v5M11.5 12v5"/>',
  food:  '<path d="M6 3v6a2 2 0 0 0 4 0V3"/><path d="M8 3v18"/><path d="M17 21V3c-2.5 1.5-3.5 4.5-3.5 8H17"/>',
  axe:   '<path d="M6 21 14 9"/><path d="M10 7c2-3 6-4 10-3-1 4-1 8-5 10l-2-2"/>',
  culture: '<path d="M3 9l9-5 9 5z"/><path d="M6 11v7M10 11v7M14 11v7M18 11v7"/><path d="M3 20h18"/>',
  pin:   '<path d="M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10z"/><circle cx="12" cy="11" r="2"/>',
  bed:   '<path d="M3 19V6"/><path d="M3 15h18v4"/><path d="M21 15v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11.5" r="1.6"/>',
  castle:'<path d="M4 20V8h3v3h3V8h4v3h3V8h3v12z"/><path d="M10 20v-4a2 2 0 0 1 4 0v4"/>',
  bridge:'<path d="M2 9h20"/><path d="M3 20c2-7 7-7 9 0 2-7 7-7 9 0"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  tower: '<path d="M12 2v4"/><path d="M10 6h4l1 6-1 9h-4l-1-9z"/><path d="M8 21h8"/>',
  question: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7"/><path d="M12 17.5h.01"/>',
  check: '<path d="M5 12l5 5L20 7"/>',
  trophy:'<path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/>',
  book:  '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/>',
};
export function icon(name, size = 18) {
  const g = P[name] || P.pin;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${g}</svg>`;
}
