/**
 * Utilidad para interactuar con la Google Places API (Place Details)
 *
 * IMPORTANTE: Esta función se ejecuta SOLO en el servidor (API route de Astro).
 * La API key NUNCA se expone al cliente.
 *
 * Configuración necesaria en .env:
 *   GOOGLE_MAPS_API_KEY=tu_api_key_aqui
 *   PUBLIC_GOOGLE_PLACE_ID=tu_place_id_aqui
 *
 * Obtener tu Place ID: https://developers.google.com/maps/documentation/places/web-service/place-id
 * Habilitar en Google Cloud Console: APIs > Places API > Place Details
 */

export interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number; // Unix timestamp en segundos
  language: string;
  relative_time_description: string;
}

export interface PlaceDetails {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
  url: string; // URL del perfil en Google Maps
}

/**
 * Obtiene los detalles y reseñas de un lugar de Google Maps
 * @param placeId - El Place ID del negocio
 * @param apiKey - La API Key de Google Maps
 * @returns PlaceDetails con la información del lugar y sus reseñas
 */
export async function getPlaceDetails(
  placeId: string,
  apiKey: string
): Promise<PlaceDetails> {
  const fields = 'name,rating,user_ratings_total,reviews,url';
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}&language=es`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error fetching place details: ${response.status}`);
  }

  const data = await response.json();

  if (data.status !== 'OK') {
    throw new Error(`Google Places API error: ${data.status} - ${data.error_message || 'Unknown error'}`);
  }

  const result = data.result;

  // Google devuelve un máximo de 5 reseñas, ordenadas por relevancia
  // Ordenamos por fecha (más recientes primero)
  const reviews: GoogleReview[] = (result.reviews || [])
    .sort((a: GoogleReview, b: GoogleReview) => b.time - a.time)
    .slice(0, 10); // Tomamos las 10 más recientes

  return {
    name: result.name,
    rating: result.rating,
    user_ratings_total: result.user_ratings_total,
    reviews,
    url: result.url,
  };
}
