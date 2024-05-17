import * as React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center px-16 pt-16 pb-10 bg-gray-800 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1192px] max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-2 self-start text-2xl font-bold tracking-tight leading-9 text-white whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/73e18cc76db3eed2c9924634519ed30297dfd9175e43bcd6f9f5fa26bee354cc?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
                className="shrink-0 w-8 aspect-square"
              />
              <div className="flex-auto">JobHuntly</div>
            </div>
            <div className="mt-10 text-base leading-7 text-zinc-200">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </div>
          </div>
          <div className="flex flex-col self-stretch text-base leading-6 text-zinc-200">
            <div className="text-lg font-semibold text-white">About</div>
            <div className="mt-7">Companies</div>
            <div className="mt-4">Pricing</div>
            <div className="mt-4">Terms</div>
            <div className="mt-4">Advice</div>
            <div className="mt-4">Privacy Policy</div>
          </div>
          <div className="flex flex-col mt-1 text-base leading-6 text-zinc-200">
            <div className="text-lg font-semibold text-white">Resources</div>
            <div className="mt-8">Help Docs</div>
            <div className="mt-8">Guide</div>
            <div className="mt-9">Updates</div>
            <div className="mt-9">Contact Us</div>
          </div>
          <div className="flex flex-col text-base leading-6">
            <div className="text-lg font-semibold text-white">
              Get job notifications
            </div>
            <div className="mt-7 leading-7 text-zinc-200">
              The latest job news, articles, sent to your inbox weekly.
            </div>
            <div className="flex gap-2 mt-11 max-md:mt-10">
              <div className="justify-center items-start px-4 py-3 text-gray-400 bg-white border border-solid border-zinc-200 max-md:pr-5">
                Email Address
              </div>
              <div className="justify-center px-6 py-3 font-bold text-center text-white whitespace-nowrap bg-indigo-600 max-md:px-5">
                Subscribe
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-32 text-base font-medium leading-6 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto my-auto">
            2021 @ JobHuntly. All rights reserved.
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b02b978c72582f3eb7d6b7d3d665189e67a7d4c7b5806317209f081ccb68297?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
            className="shrink-0 w-64 max-w-full aspect-[7.69]"
          />
        </div>
      </div>
    </div>
  );
}


export default Footer;