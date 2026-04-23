import Image from "next/image";

export function WolfLogo({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Reto Beveiliging"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
