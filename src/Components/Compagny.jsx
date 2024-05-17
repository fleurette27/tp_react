import * as React from "react";

function Compagny() {
  return (
    <div className="flex justify-center items-center self-stretch px-16 py-12 bg-white max-md:px-5">
      <div className="flex flex-col w-full max-w-[1194px] max-md:max-w-full">
        <div className="text-lg leading-7 text-gray-800 max-md:max-w-full">
          Companies we helped grow
        </div>
        <div className="flex gap-5 justify-between items-start mt-8 max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d876f1c2650da965004646a58bc7798fe1e5dc06b1f87061a4bc18a801bec5?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
            className="shrink-0 self-stretch max-w-full aspect-[3.85] w-[154px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9dda36cf5c20bc105c6ad5aa2c3d5383ede8395c7bb0a69b56337acd45b9f3d?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
            className="shrink-0 aspect-[2.56] w-[82px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/023dad6d6820b400e8a243664c2d01cc57282165c383cc61a21dee343537727e?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
            className="shrink-0 max-w-full aspect-[7.69] w-[183px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc4b685840dc5eff6afbd700be344f3d2fa9c12cd12fca3a2910a93aaca47706?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
            className="shrink-0 max-w-full aspect-[4.17] w-[116px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e59a4b39a8d1a4e97a93c61bf55fa9241bd597f0d7320fadeb64989948241a0?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
            className="shrink-0 max-w-full aspect-[3.33] w-[108px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Compagny;
