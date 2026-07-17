export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  {
    return new Response(
      JSON.stringify({
        error: "Google Maps API key no configurada",
        message: "Agrega GOOGLE_MAPS_API_KEY en tu archivo .env"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
