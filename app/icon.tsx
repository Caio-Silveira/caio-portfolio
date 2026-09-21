import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D100F",
          fontFamily: "Arial, sans-serif",
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: -3,
        }}
      >
        <span style={{ color: "#D08A5B" }}>C</span>
        <span style={{ color: "#8D5F43" }}>S</span>
      </div>
    ),
    size
  );
}
