import { ImageResponse } from "next/og";

export const alt =
  "Devcuts Media — Premium Web Development & Digital Growth Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #c81e1e, #7a0e0e)",
              display: "flex",
            }}
          />
          <div style={{ color: "#ffffff", fontSize: "30px", fontWeight: 700 }}>
            Devcuts Media
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Premium web, mobile &amp; AI development.
          </div>
          <div style={{ color: "#ff7a7a", fontSize: "30px", marginTop: "26px" }}>
            Next.js · ERP/CRM · AI automation · SEO
          </div>
        </div>

        <div style={{ display: "flex", color: "rgba(255,255,255,0.55)", fontSize: "26px" }}>
          www.devcuts.com
        </div>
      </div>
    ),
    { ...size },
  );
}
