(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__826ae774._.js",
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
;
;
;
const intlMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locales"],
    defaultLocale: "en"
});
function middleware(request) {
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
        console.log("token " + JSON.stringify(token, null, 2));
        console.log("token decrypt" + JSON.stringify(decrypt(token), null, 2));
        if (!token) {
            const redirectRequest = request.nextUrl.clone();
            redirectRequest.pathname = "/en/login";
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectRequest);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__826ae774._.js.map