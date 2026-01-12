import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withNextIntl from 'next-intl/plugin';

const nextConfig: NextConfig = {};

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

// const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

export default withNextIntl('./src/i18n.ts');
