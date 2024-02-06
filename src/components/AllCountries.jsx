import React from "react";

function AllCountries({
  name,
  flags,
  native,
  population,
  region,
  subRegion,
  capital,
  domain,
  pul,
  language,
  borders,
}) {
  return (
    <div className="flex item-center error flex-col max-w-full md:flex-row gap-5">
      {flags ? (
        <img
          className="h-[229px] md:h-[300px] md:w-[370px] w-[300px] rounded-lg mb-12"
          src={flags}
          alt=""
        />
      ) : (
        <div className="skeleton h-[229px] md:h-[430px] md:w-[590px] w-[320px]"></div>
      )}
      <div className="flex flex-row max-w-[400px] container">
        <div className="flex-col flex md:flex-row gap-10">
          <div className="flex gap-5">
            <div className="text-sm flex flex-col mb-12 gap-3 w-[400px]">
              <h1 className="text-xl inline-block font-bold mb-8">{name}</h1>
              <span className=" text-[19px] font-simebold flex">
                Native Name:{" "}
                <span className="font-sm text-[14px] ml-2 text-slate-800 dark:text-slate-300">
                  {native}
                </span>
              </span>
              <span className=" text-[19px] font-simebold">
                Population:{" "}
                <span className="font-sm text-[16px] ml-2 text-slate-800 dark:text-slate-300">
                  {population}
                </span>
              </span>
              <span className=" text-[19px] font-simebold ">
                Region:
                <span className="font-sm text-[17px] ml-2 text-slate-800 dark:text-slate-300">
                  {region}
                </span>
              </span>
              <span className=" text-[19px] font-simebold">
                Sub Region:
                <span className="font-sm text-[15px] ml-2  text-slate-800 dark:text-slate-300">
                  {subRegion}
                </span>
              </span>
              <span className=" text-[19px] font-simebold">
                Capital:
                <span className="font-sm text-[15px] ml-2  text-slate-800 dark:text-slate-300">
                  {capital}
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-3 mt-[67px]">
              <span className=" text-[19px] font-simebold">
                Top Level Domain:
                <span className="font-sm text-[14px] ml-2 text-slate-800 dark:text-slate-300">
                  {domain}
                </span>
              </span>
              <span className=" text-[19px] font-simebold">
                Currencies:
                <span className="font-sm text-[14px] ml-2 text-slate-800 dark:text-slate-300">
                  {pul}
                </span>
              </span>
              <span className=" text-[19px] font-simebold ">
                Languages:
                <span className="font-sm text-[15px] ml-2 text-slate-800 felx gap-1  dark:text-slate-300">
                  {language}
                </span>
              </span>
              <div className="self-start mt-20 mr-10">
                <span className=" text-[19px] font-simebold flex">
                  Border Countries:{" "}
                  <span className="bg-black font-sm text-[14px] ml-2 text-slate-800 dark:text-slate-300">
                    {borders}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCountries;
