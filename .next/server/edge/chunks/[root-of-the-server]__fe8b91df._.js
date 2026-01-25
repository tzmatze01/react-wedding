(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__fe8b91df._.js",
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
"[project]/src/app/lib/encrypt-edge.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/encrypt-edge.ts (or src/app/api/login/encrypt-edge.ts)
__turbopack_context__.s([
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt
]);
const secret_iv = process.env.SECRET_IV ?? "";
const secret_key = process.env.SECRET_KEY ?? "";
// Convert hex string to ArrayBuffer
function hexToArrayBuffer(hex) {
    const bytes = new Uint8Array(hex.length / 2);
    for(let i = 0; i < hex.length; i += 2){
        bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
    }
    return bytes.buffer; // Return the underlying ArrayBuffer
}
async function encrypt(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const keyBuffer = hexToArrayBuffer(secret_key);
    const ivBuffer = hexToArrayBuffer(secret_iv);
    const cryptoKey = await crypto.subtle.importKey("raw", keyBuffer, {
        name: "AES-CBC"
    }, false, [
        "encrypt"
    ]);
    const encrypted = await crypto.subtle.encrypt({
        name: "AES-CBC",
        iv: ivBuffer
    }, cryptoKey, data);
    // Convert to base64
    const bytes = new Uint8Array(encrypted);
    const binary = String.fromCharCode(...bytes);
    return btoa(binary);
}
async function decrypt(encryptedBase64) {
    // Convert from base64
    const binary = atob(encryptedBase64);
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++){
        bytes[i] = binary.charCodeAt(i);
    }
    const keyBuffer = hexToArrayBuffer(secret_key);
    const ivBuffer = hexToArrayBuffer(secret_iv);
    const cryptoKey = await crypto.subtle.importKey("raw", keyBuffer, {
        name: "AES-CBC"
    }, false, [
        "decrypt"
    ]);
    const decrypted = await crypto.subtle.decrypt({
        name: "AES-CBC",
        iv: ivBuffer
    }, cryptoKey, bytes.buffer);
    const decoder = new TextDecoder();
    return decoder.decode(decrypted);
}
}),
"[project]/src/app/api/login/auth.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSessionCookie",
    ()=>createSessionCookie,
    "getSessionData",
    ()=>getSessionData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$encrypt$2d$edge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/encrypt-edge.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cookie/dist/index.js [middleware-edge] (ecmascript)");
;
;
async function createSessionCookie(userData) {
    const sessionData = JSON.stringify(userData);
    const encryptedSessionData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$encrypt$2d$edge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["encrypt"])(sessionData); // Now async
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["serialize"])("session", encryptedSessionData, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        maxAge: 60 * 60 * 24 * 7 * 8,
        path: "/",
        sameSite: "lax"
    });
}
async function getSessionData(encryptedSession) {
    try {
        const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$encrypt$2d$edge$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["decrypt"])(encryptedSession);
        return JSON.parse(decrypted);
    } catch (error) {
        console.error("Session decrypt error:", error);
        return null;
    }
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$login$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/login/auth.ts [middleware-edge] (ecmascript)");
;
;
;
;
const intlMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locales"],
    defaultLocale: "en"
});
function redirect(request, path) {
    const redirectRequest = request.nextUrl.clone();
    redirectRequest.pathname = `/en/${path}`;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectRequest);
}
async function middleware(request) {
    const intlResponse = intlMiddleware(request);
    const { pathname } = request.nextUrl;
    if (intlResponse && intlResponse.headers.get("location")) {
        console.log("return intl reponse");
        return intlResponse;
    }
    const pathnameWithoutLocale = pathname.replace(/^\/(en|de|es)/, "");
    const publicRoutes = [
        "/login",
        "/unauthorized",
        "/register"
    ]; // add any other public routes
    if (publicRoutes.some((route)=>pathnameWithoutLocale.startsWith(route))) {
        console.log("public route, skipping auth check");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const sessionCookie = request.cookies.get("session");
    if (!sessionCookie) {
        console.log("no session cookie");
        return redirect(request, "login");
    }
    const sessionData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$login$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSessionData"])(sessionCookie.value);
    if (!sessionData) {
        // Invalid session
        console.log("invalid session");
        return redirect(request, "login");
    }
    if (pathnameWithoutLocale.startsWith("overview")) {
        if (!sessionData.roles.includes("admin")) {
            return redirect(request, "unauthorized");
        }
    } else if (pathnameWithoutLocale.startsWith("home")) {
        if (!sessionData.roles.includes("user")) {
            return redirect(request, "unauthorized");
        }
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

//# sourceMappingURL=%5Broot-of-the-server%5D__fe8b91df._.js.map