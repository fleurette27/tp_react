import * as React from "react";

function FeaturedJobsTitle() {
  return (
    <div className="flex gap-2.5 justify-between w-full font-semibold max-md:flex-wrap max-md:max-w-full">
      <div className="text-5xl text-sky-400 leading-[52.8px] max-md:text-4xl">
        Featured <span className="text-sky-400">jobs</span>
      </div>
      <div className="flex gap-4 self-end mt-7 text-base leading-6 text-center text-indigo-600">
        <div>Show all jobs</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/247d3677732c680ee4f270e0de17e72780a5526fa8c7aeefd90199d2c241fe60?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
          className="shrink-0 self-start w-6 aspect-square"
        />
      </div>
    </div>
  );
}

export default FeaturedJobsTitle;
