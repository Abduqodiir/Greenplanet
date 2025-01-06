import Image from "next/image";
import CustomButton from "./CustomButton";

const Slide1 = () => {
  return (
    <div className="bg-[#F5F5F580] w-[1200px] h-[450px] p-3 border flex flex-row pl-10 mx-auto my-3 justify-between">
      <div>
        <p className="uppercase">welcome to greenshop</p>
        <div className="w-[530px] h-[140px] mt-[7px]">
          <h2 className="font-black text-[70px] text-[#3D3D3D] leading-[70px]">
            Let’s Make a Better <span className="text-[#46A358]">Planet</span>
          </h2>
        </div>
        <p className="w-[557px] h-[45px] font-normal text-[14px] leading-6 text-[#727272] mt-[5px] p-3">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <CustomButton
          type="button"
          title="SHOP NOW"
          extraClass="!bg-[#46A358] !w-[140px] !h-[40px] !mt-[44px]"
        />
      </div>
      <div className="relative">
        <Image
          priority
          src={"/Slide1Image.png"}
          alt="gul rasmi"
          width={135}
          height={135}
          className="absolute bottom-0 translate-x-16 translate-y-1"
        />
        <Image
          priority
          src={"/Slide1Image.png"}
          alt="gul rasmi"
          width={518}
          height={518}
          className="-translate-y-12 overflow-scroll"
        />
      </div>
    </div>
  );
};

export default Slide1;
