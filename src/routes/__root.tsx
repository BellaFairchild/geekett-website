import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Geekett";

function publicShareHost() {
  const raw =
    typeof process !== "undefined"
      ? String(process.env.VITE_PUBLIC_HOSTNAME ?? "")
      : "";
  const host = raw.split(",")[0].trim().split(":")[0].toLowerCase();
  if (!host || !/^[a-z0-9.-]+$/.test(host) || !host.includes(".")) return "";
  if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return "";
  if (
    host === "vercel.app" ||
    host.endsWith(".vercel.app") ||
    host === "vercel.com" ||
    host.endsWith(".vercel.com")
  ) {
    return "";
  }
  return host;
}

export const Route = createRootRoute({
  head: () => {
    const host = publicShareHost();
    const ogImage = host ? `https://${host}/og.jpg` : "/og.jpg";
    const xBanner = host ? `https://${host}/x-banner.jpg` : undefined;
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: APP_NAME },
        {
          name: "description",
          content:
            "Geekett builds mobile-first WordPress sites, AI app packages, and marketing systems. One-woman studio + Builder Bot Bobby.",
        },
        { name: "theme-color", content: "#E91B7A" },
        { property: "og:title", content: APP_NAME },
        {
          property: "og:description",
          content:
            "Geekett builds mobile-first WordPress sites, AI app packages, and marketing systems. One-woman studio + Builder Bot Bobby.",
        },
        { property: "og:image", content: ogImage },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: APP_NAME },
        { name: "twitter:image", content: ogImage },
        ...(xBanner
          ? [{ property: "x:game:image", content: xBanner }]
          : []),
      ],
      links: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "stylesheet", href: appCss },
        { rel: "manifest", href: "/__grok/manifest.webmanifest" },
        { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Sora:wght@600;700;800&display=swap",
        },
      ],
    };
  },
  component: () => (
    <html lang="en-CA" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
