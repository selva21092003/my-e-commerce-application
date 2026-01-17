import { useNavigate } from "react-router";
import type { BannerCardProps } from "./banner-card.types";

const BannerCard = (banner: BannerCardProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        onClick={() => navigate("/products")}
        className="transition cursor-pointer hover:scale-105 ease-in-out duration-300 bg-transparent rounded"
        src={banner.imgSrc}
        alt={banner.altText}
        height={banner.height}
        width={banner.width}
      />
    </div>
  );
};

export default BannerCard;
