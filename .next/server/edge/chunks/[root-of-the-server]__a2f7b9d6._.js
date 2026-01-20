(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__a2f7b9d6._.js",
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
"[project]/ [middleware-edge] (unsupported edge import 'crypto', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`crypto`));
}),
"[project]/src/app/api/login/encrypt.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$__$5b$middleware$2d$edge$5d$__$28$unsupported__edge__import__$27$crypto$272c$__ecmascript$29$__ = __turbopack_context__.i("[project]/ [middleware-edge] (unsupported edge import 'crypto', ecmascript)");
;
const secret_iv = process.env.SECRET_IV;
const secret_key = process.env.SECRET_KEY;
// Replace with your own key and iv
// You can generate them with crypto.randomBytes(32) and crypto.randomBytes(16)
const key = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(secret_key, "hex");
const iv = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(secret_iv, "hex");
const algorithm = "aes-256-cbc";
const encrypt = (text)=>{
    const cipher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$__$5b$middleware$2d$edge$5d$__$28$unsupported__edge__import__$27$crypto$272c$__ecmascript$29$__["createCipheriv"])(algorithm, key, iv);
    const encrypted = cipher.update(text, "utf8", "base64");
    return `${encrypted}${cipher.final("base64")}`;
};
const decrypt = (encrypted)=>{
    const decipher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$__$5b$middleware$2d$edge$5d$__$28$unsupported__edge__import__$27$crypto$272c$__ecmascript$29$__["createDecipheriv"])(algorithm, key, iv);
    const decrypted = decipher.update(encrypted, "base64", "utf8");
    return `${decrypted}${decipher.final("utf8")}`;
};
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$login$2f$encrypt$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/login/encrypt.ts [middleware-edge] (ecmascript)");
;
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
        console.log("token decrypt" + JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$login$2f$encrypt$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["decrypt"])(token), null, 2));
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

//# sourceMappingURL=%5Broot-of-the-server%5D__a2f7b9d6._.js.map