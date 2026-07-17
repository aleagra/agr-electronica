import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_FkKwyj-Y.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_7B4f9Kwl.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/","cacheDir":"file:///C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/node_modules/.astro/","outDir":"file:///C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/dist/","srcDir":"file:///C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/","publicDir":"file:///C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/public/","buildClientDir":"file:///C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/dist/client/","buildServerDir":"file:///C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/reviews","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/reviews\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"reviews","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/reviews.ts","pathname":"/api/reviews","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.XxWls-Xh.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/api/reviews@_@ts":"pages/api/reviews.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CqVj9g0y.mjs","C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CCdYIqGm.mjs","C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/ContactForm":"_astro/ContactForm.CdPbaLDi.js","C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Reviews.tsx":"_astro/Reviews.BzZENb13.js","C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/WhatsAppButton.tsx":"_astro/WhatsAppButton.C1OVaYpU.js","@astrojs/react/client.js":"_astro/client.nFz3bvDj.js","C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.BHdopHZ2.js","C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CF5DQJnD.js","C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.B3FKoRI0.js","C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DD3pSZsq.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/components/Header.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"menu-toggle\"),n=document.getElementById(\"mobile-menu\"),d=document.getElementById(\"icon-menu\"),s=document.getElementById(\"icon-close\");t?.addEventListener(\"click\",()=>{const e=n?.classList.contains(\"hidden\");n?.classList.toggle(\"hidden\"),d?.classList.toggle(\"hidden\"),s?.classList.toggle(\"hidden\"),t?.setAttribute(\"aria-expanded\",String(e))});document.querySelectorAll(\".mobile-nav-link\").forEach(e=>{e.addEventListener(\"click\",()=>{n?.classList.add(\"hidden\"),d?.classList.remove(\"hidden\"),s?.classList.add(\"hidden\"),t?.setAttribute(\"aria-expanded\",\"false\")})});"],["C:/Users/aleag/OneDrive/Documentos/GitHub/Agr-electronica/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const l=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&(r.target.classList.add(\"is-visible\"),l.unobserve(r.target))})},{threshold:.12,rootMargin:\"0px 0px -48px 0px\"});document.querySelectorAll(\"[data-reveal]\").forEach(e=>{l.observe(e)});const t=document.querySelector(\"header\");let s=!1;const o=()=>{s||(requestAnimationFrame(()=>{window.scrollY>40?t?.classList.add(\"header-scrolled\"):t?.classList.remove(\"header-scrolled\"),s=!1}),s=!0)};window.addEventListener(\"scroll\",o,{passive:!0});o();"]],"assets":["/_astro/index.XxWls-Xh.css","/favicon.svg","/_astro/businessHours.DqqlYO7q.js","/_astro/client.nFz3bvDj.js","/_astro/Contact.astro_astro_type_script_index_0_lang.BHdopHZ2.js","/_astro/ContactForm.CdPbaLDi.js","/_astro/Hero.astro_astro_type_script_index_0_lang.B3FKoRI0.js","/_astro/index.DBy5LfQW.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/Reviews.BzZENb13.js","/_astro/WhatsAppButton.C1OVaYpU.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"OYBiTgmV+0kakO8z+42/2QuNkVveH9DcbdqoULYwv6Y="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
