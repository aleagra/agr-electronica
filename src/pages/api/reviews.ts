/**
 * API Route de Astro para obtener reseñas de Google Maps
 *
 * Esta route se ejecuta en el servidor, por lo que la API key
 * nunca se expone al cliente.
 *
 * Endpoint: GET /api/reviews
 *
 * Variables de entorno necesarias (en .env):
 *   GOOGLE_MAPS_API_KEY=tu_api_key_aqui
 *   PUBLIC_GOOGLE_PLACE_ID=tu_place_id_aqui
 */

import type { APIRoute } from 'astro';
import { getPlaceDetails } from '../../lib/googlePlaces';

// Forzar que esta route se ejecute en el servidor (no se pre-renderiza)
export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.GOOGLE_MAPS_API_KEY;
  const placeId = import.meta.env.PUBLIC_GOOGLE_PLACE_ID;

  // Validar que las variables de entorno estén configuradas
  if (!apiKey || apiKey === 'tu_api_key_aqui') {
    return new Response(
      JSON.stringify({
        error: 'Google Maps API key no configurada',
        message: 'Agrega GOOGLE_MAPS_API_KEY en tu archivo .env',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  if (!placeId || placeId === 'tu_place_id_aqui') {
    return new Response(
      JSON.stringify({
        error: 'Google Place ID no configurado',
        message: 'Agrega PUBLIC_GOOGLE_PLACE_ID en tu archivo .env',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const placeDetails = await getPlaceDetails(placeId, apiKey);

    return new Response(JSON.stringify(placeDetails), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Cache por 1 hora para reducir llamadas a la API
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);

    return new Response(
      JSON.stringify({
        error: 'Error al obtener reseñas',
        message: error instanceof Error ? error.message : 'Error desconocido',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
