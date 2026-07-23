import OptimizedImage from "@/components/ui/OptimizedImage";
import { aboutProfile } from "@/data/aboutData";
import { IMAGE_SIZES } from "@/lib/constants";

export default function ProfileCard() {
  return (
    <div className="relative mx-auto w-full max-w-[260px] pt-[4.5rem] sm:max-w-[280px] sm:pt-16 lg:max-w-[300px]">
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
        <div className="relative h-[130px] w-[130px] overflow-hidden rounded-full border-[4px] border-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:h-[140px] sm:w-[140px] sm:border-[5px] lg:h-[150px] lg:w-[150px]">
          <OptimizedImage
            src={aboutProfile.image}
            alt={aboutProfile.name}
            fill
            sizes={IMAGE_SIZES.profile}
            className="object-cover"
          />
        </div>
      </div>

      <div className="rounded-2xl bg-[#00eeff] px-5 pb-9 pt-[4.75rem] text-center text-white shadow-[0_12px_30px_rgba(0,238,255,0.18)] sm:px-6 sm:pb-10 sm:pt-[5.25rem]">
        <h3 className="text-lg font-bold uppercase tracking-[0.04em] sm:text-xl lg:text-2xl">
          {aboutProfile.name}
        </h3>
        <p className="mt-3 text-sm font-medium leading-6 sm:text-[15px]">
          {aboutProfile.role}
        </p>
        <p className="mt-1 text-sm font-medium leading-6 sm:text-[15px]">
          {aboutProfile.education}
        </p>
        <p className="mt-1 text-sm font-medium leading-6 sm:text-[15px]">
          {aboutProfile.meta}
        </p>
      </div>
    </div>
  );
}
