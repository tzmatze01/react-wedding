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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/app/api/login/encrypt.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const secret_iv = process.env.SECRET_IV ?? "";
const secret_key = process.env.SECRET_KEY ?? "";
// Replace with your own key and iv
// You can generate them with crypto.randomBytes(32) and crypto.randomBytes(16)
const key = Buffer.from(secret_key, "hex");
const iv = Buffer.from(secret_iv, "hex");
const algorithm = "aes-256-cbc";
const encrypt = (text)=>{
    const cipher = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createCipheriv"])(algorithm, key, iv);
    const encrypted = cipher.update(text, "utf8", "base64");
    return `${encrypted}${cipher.final("base64")}`;
};
const decrypt = (encrypted)=>{
    const decipher = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createDecipheriv"])(algorithm, key, iv);
    const decrypted = decipher.update(encrypted, "base64", "utf8");
    return `${decrypted}${decipher.final("utf8")}`;
};
}),
"[project]/src/app/api/login/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSession",
    ()=>createSession,
    "getSessionData",
    ()=>getSessionData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$login$2f$encrypt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/login/encrypt.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cookie/dist/index.js [app-route] (ecmascript)");
;
;
const createSession = (userData)=>{
    const sessionData = JSON.stringify(userData);
    const encryptedSessionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$login$2f$encrypt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encrypt"])(sessionData);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serialize"])("session", encryptedSessionData, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        maxAge: 60 * 60 * 24 * 7 * 8,
        path: "/",
        sameSite: "lax"
    });
};
const getSessionData = (encryptedSession)=>{
    try {
        const decrypted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$login$2f$encrypt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decrypt"])(encryptedSession);
        return JSON.parse(decrypted);
    } catch (error) {
        return null;
    }
};
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
        const cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$login$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSession"])({
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

//# sourceMappingURL=%5Broot-of-the-server%5D__8fe686f1._.js.map