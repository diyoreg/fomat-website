type ImagePlaceholderProps = {
  className?: string;
  color?: "dark" | "brown" | "cream" | "light";
  label?: string;
  aspectRatio?: string;
};

const colors = {
  dark: "bg-[#22333b]",
  brown: "bg-[#8c6d51]",
  cream: "bg-[#e6e4d8]",
  light: "bg-[#d4d2c6]",
};

export default function ImagePlaceholder({
  className = "",
  color = "cream",
  label,
  aspectRatio,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${colors[color]} flex items-center justify-center overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {label && (
        <span className="text-xs font-medium tracking-widest uppercase text-[#22333b]/30 select-none">
          {label}
        </span>
      )}
    </div>
  );
}
