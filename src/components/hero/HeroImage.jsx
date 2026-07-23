import OptimizedImage from "@/components/ui/OptimizedImage";
import { heroData } from "@/data/heroData";
import { IMAGE_SIZES } from "@/lib/constants";

const HEX_CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

export default function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-full sm:max-w-[360px] lg:max-w-[400px]">
      <div
        aria-hidden="true"
        className="absolute inset-[-10%] rounded-[42%] bg-[#00eeff]/20 blur-3xl"
      />

      <div className="relative aspect-[5/6] w-full drop-shadow-[0_0_36px_rgba(0,238,255,0.55)]">
        <div
          className="absolute inset-0 bg-[#00eeff]"
          style={{ clipPath: HEX_CLIP }}
        />
        <div
          className="absolute inset-[5px] overflow-hidden sm:inset-[6px]"
          style={{ clipPath: HEX_CLIP }}
        >
          <OptimizedImage
            src={heroData.image}
            alt={heroData.name}
            fill
            priority
            sizes={IMAGE_SIZES.heroPortrait}
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
