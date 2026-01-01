import type { BannerCardProps } from "./banner-card.types";

const BannerCard = (banner: BannerCardProps) => {
  return (
    <div>
      <img
        className="transition hover:scale-105 ease-in-out duration-300 bg-transparent"
        src={banner.imgSrc}
        alt={banner.altText}
        height={banner.height}
        width={banner.width}
      />
    </div>
  );
};

export default BannerCard;
