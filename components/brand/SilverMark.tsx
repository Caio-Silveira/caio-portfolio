export default function SilverMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 92 40"
      className={`block h-auto shrink-0 ${className}`}
      role="img"
      aria-label="Caio Silveira"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="1"
        y="29"
        fontSize="30"
        fontWeight="600"
        letterSpacing="-2.8"
        fontFamily="Inter, system-ui, sans-serif"
      >
        <tspan fill="currentColor">C</tspan>
        <tspan fill="currentColor" opacity="0.42">S</tspan>
      </text>
    </svg>
  );
}
