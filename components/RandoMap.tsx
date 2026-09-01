/**
 * components/RandoMap.tsx
 *
 * Carte Leaflet interactive : affiche les tracés GPX des sentiers
 * et met en avant le gîte (marqueur dédié + recentrage).
 * Chargé uniquement côté client (Leaflet a besoin de `window`).
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import type * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

export interface TrailConfig {
  id: number;
  nom: string;
  gpxUrl: string;
  color: string;
}

interface RandoMapProps {
  trails: TrailConfig[];
  gite: { lat: number; lng: number; label: string };
}

export default function RandoMap({ trails, gite }: RandoMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Leaflet.Map | null>(null);
  const layersRef = useRef<Record<number, Leaflet.Layer>>({});
  const [visible, setVisible] = useState<Record<number, boolean>>(
    () => Object.fromEntries(trails.map((t) => [t.id, true]))
  );
  const [loadingIds, setLoadingIds] = useState<Set<number>>(
    () => new Set(trails.map((t) => t.id))
  );

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet-gpx');

      if (cancelled || !mapContainerRef.current || mapRef.current) return;

      const map = L.map(mapContainerRef.current).setView([gite.lat, gite.lng], 10);
      mapRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 17,
      }).addTo(map);

      // Marqueur du gîte — mis en avant (icône dédiée + tooltip permanent)
      const giteIcon = L.divIcon({
        className: '',
        html: `
          <div style="
            display:flex; align-items:center; justify-content:center;
            width:38px; height:38px; border-radius:9999px 9999px 9999px 0;
            background:#126700; border:3px solid white;
            box-shadow:0 4px 10px rgba(0,0,0,0.35);
            transform: rotate(45deg);
          ">
            <span style="transform: rotate(-45deg); font-size:18px;">🏡</span>
          </div>
        `,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
      });

      L.marker([gite.lat, gite.lng], { icon: giteIcon, zIndexOffset: 1000 })
        .addTo(map)
        .bindPopup(`<strong>${gite.label}</strong><br/>Bidous, 09140 Ustou`)
        .bindTooltip(gite.label, {
          permanent: true,
          direction: 'top',
          offset: [0, -34],
          className: 'rando-map-gite-label',
        });

      trails.forEach((trail) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const gpxLayer = new (L as any).GPX(trail.gpxUrl, {
          async: true,
          markers: { startIcon: null, endIcon: null },
          gpx_options: { parseElements: ['track', 'route'] },
          polyline_options: { color: trail.color, weight: 4, opacity: 0.8 },
        });

        gpxLayer.on('loaded', () => {
          if (cancelled) return;
          setLoadingIds((prev) => {
            const next = new Set(prev);
            next.delete(trail.id);
            return next;
          });
        });

        gpxLayer.addTo(map);
        layersRef.current[trail.id] = gpxLayer;
      });
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTrail = (id: number) => {
    const map = mapRef.current;
    const layer = layersRef.current[id];
    if (!map || !layer) return;

    setVisible((prev) => {
      const isVisible = !prev[id];
      if (isVisible) {
        layer.addTo(map);
      } else {
        map.removeLayer(layer);
      }
      return { ...prev, [id]: isVisible };
    });
  };

  const recenterOnGite = () => {
    mapRef.current?.setView([gite.lat, gite.lng], 10);
  };

  return (
    <div>
      <div
        ref={mapContainerRef}
        className="w-full h-96 sm:h-[500px] rounded-2xl z-10"
      />

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          onClick={recenterOnGite}
          className="btn-secondary py-2 px-4 text-xs"
        >
          🏡 Recentrer sur le gîte
        </button>

        {trails.map((trail) => (
          <label
            key={trail.id}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm cursor-pointer select-none"
          >
            <input
              type="checkbox"
              checked={visible[trail.id]}
              onChange={() => toggleTrail(trail.id)}
              className="accent-primary"
            />
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: trail.color }}
            />
            <span className="text-gray-700 dark:text-gray-300">{trail.nom}</span>
            {loadingIds.has(trail.id) && (
              <span className="text-gray-400 dark:text-gray-500 text-xs">(chargement…)</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
