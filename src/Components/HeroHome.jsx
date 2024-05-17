import * as React from "react";
import 'tailwindcss/tailwind.css';

function HeroHome() {
  return (
    <div className="flex flex-col bg-slate-50">
      <div className="flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1192px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-2 py-0.5 my-auto">
              <div className="flex overflow-hidden relative flex-col justify-center items-center w-8 aspect-square">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/21d5d8c1cae1879b0295cbc4a3f9257f40b5d2c875ed079d64b7f60084273242?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b016888d0fbacb2f5485e4fcca45538f96b7f305fcfaf7f7f9c8a844371bad21?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
                  className="w-full aspect-square"
                />
              </div>
              <div className="flex-auto text-2xl font-bold tracking-tight leading-9 text-slate-800">
                JobHuntly
              </div>
            </div>
            <div className="flex gap-4 justify-center items-start pt-6 text-base font-medium leading-6 text-slate-600">
              <div className="pb-7">Find Jobs</div>
              <div className="pb-7">Browse Companies</div>
            </div>
          </div>
          <div className="flex gap-4 justify-between py-3.5 pl-6 text-base font-bold leading-6 text-center">
            <div className="my-auto text-indigo-600">Login</div>
            <div className="justify-center px-6 py-3 text-white bg-indigo-600 max-md:px-5">
              Sign Up
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-20 w-full max-w-[1315px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 pt-4 text-base leading-6 max-md:mt-10 max-md:max-w-full">
              <div className="text-7xl font-semibold text-sky-400 leading-[79px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                <span className="text-slate-800">Discover more than</span>{" "}
                <span className="text-sky-400">5000+ Jobs</span>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/63fe47dcadc6dd9980cf8e08b877315c947ddc9f1ecf620149da88702e060506?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
                className="self-center mt-7 aspect-[16.67] w-[629px] max-md:max-w-full"
              />
              <div className="mt-6 text-xl leading-8 text-slate-600 max-md:max-w-full">
                Great platform for the job seeker that searching for new career
                heights and passionate about startups.
              </div>
              <div className="flex gap-0 justify-center py-4 pl-4 mt-6 bg-white shadow-2xl max-md:flex-wrap">
                <div className="flex flex-1 gap-4 px-4 text-slate-500">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9db8721803ed71131c4d5c1e115a2d6411773ea62c6811959594b4f4d9acc901?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                  <div className="flex flex-col flex-1 justify-between pt-5">
                    <div>Job title or keyword</div>
                    <div className="shrink-0 mt-2.5 h-px bg-zinc-200" />
                  </div>
                </div>
                <div className="flex flex-1 gap-4 pr-6 pl-2 text-slate-800 max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/18c58ab3488229779e66b0c4daf8d232e38b3825157d3ea69833bfa168c56e9b?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                  <div className="flex flex-col flex-1 justify-between pt-5">
                    <div className="flex gap-5 justify-between">
                      <div>Florence, Italy</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/24f376da485871f2d977e4cbb0bdc62b43510dd6d7400080ccdcd43d4d2cdc86?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
                        className="shrink-0 my-auto w-4 aspect-square"
                      />
                    </div>
                    <div className="shrink-0 mt-2.5 h-px bg-zinc-200" />
                  </div>
                </div>
                <div className="shrink-0 px-7 py-3.5 w-0.5 bg-indigo-600 h-[57px]" />
              </div>
              <div className="mt-4 text-gray-800 max-md:max-w-full">
                Popular :{" "}
                <span className="font-medium">
                  UI Designer, UX Researcher, Android, Admin
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1c3f2f0e3dbc3aec9dd0c9adf50f3039288a53a20752035117cd42f23dd3e89?apiKey=024e8f76f3bf43349975efd1033fe4d3&"
              className="grow mt-96 w-full aspect-[2.33] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default HeroHome;