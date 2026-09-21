import { ImageResponse } from "next/og";

export const alt = "Caio Silveira — Desenvolvedor Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0D100F",
          color: "#F0E9DC",
          padding: "72px 84px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 46, fontWeight: 700, letterSpacing: -4 }}>
            <span style={{ color: "#D08A5B" }}>C</span>
            <span style={{ color: "rgba(208,138,91,.42)" }}>S</span>
          </div>
          <div style={{ fontSize: 24, color: "#8E8980" }}>São Paulo · Brasil</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, lineHeight: .94, fontWeight: 700, letterSpacing: -4 }}>
            Caio Silveira
          </div>
          <div style={{ marginTop: 22, fontSize: 34, color: "#D08A5B" }}>
            Desenvolvedor Full Stack
          </div>
          <div style={{ marginTop: 20, maxWidth: 780, fontSize: 24, lineHeight: 1.45, color: "#A7A198" }}>
            Aplicações web, software e soluções digitais construídas do problema à entrega.
          </div>
        </div>
        <div style={{ width: "100%", height: 1, background: "rgba(240,233,220,.15)" }} />
      </div>
    ),
    size
  );
}
