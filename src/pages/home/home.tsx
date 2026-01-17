import BannerCard from "../../components/banner-card/banner-card";
import type { BannerCardProps } from "../../components/banner-card/banner-card.types";
import Footer from "../../components/footer/footer";
import { useProduct } from "../../context/product-context/product-context";

export const Home = () => {
  const bannerElements: BannerCardProps[] = [
    {
      imgSrc:
        "https://i.imgur.com/QkIa5tT.jpeg",
      altText: "men-image",
      height: 250,
      width: 250,
    },
    {
      imgSrc:
        "	https://i.imgur.com/cHddUCu.jpeg",
      altText: "women-image",
      height: 250,
      width: 250,
    },
    {
      imgSrc:
        "https://i.imgur.com/ZKGofuB.jpeg",
      altText: "boys-image",
      height: 250,
      width: 250,
    },
    {
      imgSrc:
        "https://i.imgur.com/wXuQ7bm.jpeg",
      altText: "girls-image",
      height: 250,
      width: 250,
    },
  ];
  const brands: BannerCardProps[] = [
    {
      imgSrc:
        "https://therightfitstore.netlify.app/static/media/n.b98d5ced.jpg",
      altText: "nike-image",
      width: 200,
      height: 200,
    },
    {
      imgSrc:
        "https://therightfitstore.netlify.app/static/media/adidas.4cfac562.png",
      altText: "adidas-image",
      width: 200,
      height: 200,
    },
    {
      imgSrc:
        "https://therightfitstore.netlify.app/static/media/puma.0e6b7c93.jpg",
      altText: "puma-image",
      width: 200,
      height: 200,
    },
    {
      imgSrc:
        "https://therightfitstore.netlify.app/static/media/bata.0c3f3f14.jpg",
      altText: "bata-image",
      width: 200,
      height: 200,
    },
  ];
  const { productState } = useProduct();
  return (
    <div className={`md:px-20 ${productState.isMenuOpen ? "mt-38" : "mt-20"}`}>
      <div className="mt-5 flex flex-col md:flex-row gap-5 items-center justify-between w-full">
        {bannerElements.map((banner, index) => (
          <BannerCard key={index} {...banner} />
        ))}
      </div>
      <div className="mt-7 flex md:flex-row flex-col p-3 gap-3 justify-between items-center bg-gray-50 rounded-xl">
        <div>
          <h2 className="text-3xl text-pink-600 font-bold">
            GREATE SALES GOING ON
          </h2>
          <br />
          <h2 className="text-3xl text-pink-600 font-bold">15% OFF ON ALL </h2>
          <h2 className="text-3xl text-pink-600 font-bold">
            REGULAR PRICED CHILDREN'S SHOES
          </h2>
          <p></p>
        </div>
        <img
          className="rounded-xl"
          src="https://images.pexels.com/photos/5872183/pexels-photo-5872183.jpeg"
          alt="main-banner"
          width={700}
          height={700}
        />
      </div>
      <div className="flex md:flex-row flex-col gap-5 items-center justify-between mt-5 mb-5">
        {brands.map((brand, index) => (
          <BannerCard key={index} {...brand} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
