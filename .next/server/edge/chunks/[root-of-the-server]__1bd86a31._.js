(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__1bd86a31._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/config.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "locales",
    ()=>locales
]);
const locales = [
    "en",
    "de",
    "es"
];
}),
"[project]/src/messages/de.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"Login\":{\"hello\":\"Hallo\",\"login\":\"Einloggen\",\"loading\":\"Laden...\"},\"CountDown\":{\"welcome\":\"Willkomment\",\"see_you\":\"Bis in\",\"days\":\"Tagen\"},\"Location\":{\"when\":\"Wann\",\"date\":\"Samstag, 21 November 2026\",\"where\":\"Wo\",\"location\":\"Espacio Campus\",\"city\":\"Buenos Aires, Argentinien\"},\"Registration\":{\"title\":\"Ameldung\",\"description\":\"Wir freuen uns sehr, dass Ihr zu unserer Hochyeit kommt. Falls Ihr eure Infos später nochmal ändern wollt, füllt das Formular nochmals mit der selben Email aus.\"},\"Dialog\":{\"open\":\"Anmelden\",\"title\":\"Ameldung\",\"description\":\"Bla\",\"name\":\"Name\",\"surname\":\"Nachname\",\"email\":\"Email\",\"comment\":\"Hast du Fragen, Allergien oder sonstige Anmerkungen?\",\"cancel\":\"Abbrechen\"},\"components\":{\"localeSwitcher\":{\"english\":\"Englisch\",\"german\":\"Deutsch\",\"spanish\":\"Spanisch\"}}}"));}),
"[project]/src/messages/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"Login\":{\"hello\":\"Hallo\",\"login\":\"Login\",\"loading\":\"Loading...\"},\"CountDown\":{\"welcome\":\"Welcome\",\"see_you\":\"See you in\",\"days\":\"days\"},\"Location\":{\"when\":\"When\",\"date\":\"Saturday, 21 November 2026\",\"where\":\"Where\",\"location\":\"Espacio Campus\",\"city\":\"Buenos Aires, Argentinia\"},\"Registration\":{\"title\":\"Registration\",\"description\":\"We are very happy to welcome you at our Wedding. If you want to change your details later on, you can fill out the form again with the same email.\"},\"Dialog\":{\"open\":\"Register\",\"title\":\"Registration\",\"description\":\"Bla\",\"name\":\"Name\",\"surname\":\"Surname\",\"email\":\"Email\",\"comment\":\"Do you have questions, allergies or other notes?\",\"cancel\":\"Cancel\"},\"components\":{\"localeSwitcher\":{\"english\":\"English\",\"german\":\"German\",\"spanish\":\"Spanish\"}}}"));}),
"[project]/src/messages/es.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"Login\":{\"hello\":\"Hallo\",\"login\":\"Entrar\",\"loading\":\"Algon con mas tiempo...\"},\"CountDown\":{\"welcome\":\"Bienvenidx\",\"see_you\":\"Hasta en\",\"days\":\"dias\"},\"Location\":{\"when\":\"Cuando\",\"date\":\"Sabado, 21 Noviembre 2026\",\"where\":\"Donde\",\"location\":\"Espacio Campus\",\"city\":\"Buenos Aires, Argentina\"},\"Registration\":{\"title\":\"Registracion\",\"description\":\"Espanol este -> Estamos muzy felices a ,, nuestro boda. If you want to change your details later on, you can fill out the form again with the same email.\"},\"Dialog\":{\"open\":\"Registrar\",\"title\":\"Registracion\",\"description\":\"Bla\",\"name\":\"Nombre\",\"surname\":\"Apedillo\",\"email\":\"Email\",\"comment\":\"Tienes prgeuntas. allergias or otras notas?\",\"cancel\":\"Cancelar\"},\"components\":{\"localeSwitcher\":{\"english\":\"Ingles\",\"german\":\"Aleman\",\"spanish\":\"Espanol\"}}}"));}),
"[project]/src/i18n.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [middleware-edge] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/core.js [middleware-edge] (ecmascript) <locals>");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ({ requestLocale })=>{
    const requested = await requestLocale;
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasLocale"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locales"], requested) ? requested : "en";
    return {
        locale,
        messages: (await __turbopack_context__.f({
            "./messages/de.json": {
                id: ()=>"[project]/src/messages/de.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/src/messages/de.json (json)"))
            },
            "./messages/en.json": {
                id: ()=>"[project]/src/messages/en.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/src/messages/en.json (json)"))
            },
            "./messages/es.json": {
                id: ()=>"[project]/src/messages/es.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/src/messages/es.json (json)"))
            }
        }).import(`./messages/${locale}.json`)).default
    };
});
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/middleware/middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/navigation.react-server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/navigation.react-server.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useLocale$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-server/useLocale.js [middleware-edge] (ecmascript) <export default as useLocale>");
;
;
;
;
;
const intlMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locales"],
    defaultLocale: "en"
});
function middleware(request) {
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useLocale$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])();
    const intlResponse = intlMiddleware(request);
    const { pathname } = request.nextUrl;
    if (intlResponse && intlResponse.headers.get("location")) {
        return intlResponse;
    }
    const protectedRoutes = [
        "/home",
        "/overview"
    ];
    // Remove locale prefix (e.g. /en/home → /home)
    const pathnameWithoutLocale = pathname.replace(/^\/(en|de|es)/, "");
    if (protectedRoutes.some((route)=>pathnameWithoutLocale.startsWith(route))) {
        const token = request.cookies.get("session")?.value;
        if (!token) {
            const locale = request.nextUrl.locale;
            // const url = new URL(`/${locale}/login`);
            // console.log("redirecting to: " + url);
            // return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["redirect"])(`/${locale}/login`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["RedirectType"].replace);
        }
    // TODO: Optionally, verify token validity and user permissions
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        "/",
        "/(en|de|es)/login",
        "/(en|de|es)/home/:path*",
        "/(en|de|es)/overview/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__1bd86a31._.js.map