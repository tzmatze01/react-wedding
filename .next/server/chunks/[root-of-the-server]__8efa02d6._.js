module.exports = [
"[project]/.next-internal/server/app/api/login/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/lib/encrypt-edge.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/app/api/login/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSessionCookie",
    ()=>createSessionCookie,
    "getSessionData",
    ()=>getSessionData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$encrypt$2d$edge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/encrypt-edge.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cookie/dist/index.js [app-route] (ecmascript)");
;
;
async function createSessionCookie(userData) {
    const sessionData = JSON.stringify(userData);
    const encryptedSessionData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$encrypt$2d$edge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encrypt"])(sessionData); // Now async
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serialize"])("session", encryptedSessionData, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        maxAge: 60 * 60 * 24 * 7 * 8,
        path: "/",
        sameSite: "lax"
    });
}
async function getSessionData(encryptedSession) {
    try {
        const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$encrypt$2d$edge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decrypt"])(encryptedSession);
        return JSON.parse(decrypted);
    } catch (error) {
        console.error("Session decrypt error:", error);
        return null;
    }
}
}),
"[project]/src/app/api/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$login$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/login/auth.ts [app-route] (ecmascript)");
;
async function POST(request) {
    const password = process.env.INVITE_PASSWORD;
    const admin_password = process.env.ADMIN_PASSWORD;
    const body = await request.json();
    if (password === body["password"] || admin_password === body["password"]) {
        const cookie = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$login$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSessionCookie"])({
            roles: admin_password === body["password"] ? [
                "admin",
                "user"
            ] : [
                "user"
            ]
        });
        return new Response("Log in", {
            status: 200,
            headers: {
                "Set-Cookie": cookie
            }
        });
    }
    return new Response("Wrong Password.", {
        status: 401
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8efa02d6._.js.map