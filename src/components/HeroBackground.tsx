import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Photo background */}
      <Image
        src="/assets/hero-background.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      {/* 30% dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
