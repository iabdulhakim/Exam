import React, { useEffect, useRef, useState } from "react";
import { filterCountryApi, filterRegionApi, getCountriesApi } from "../api/api";
import Country from "../components/Country";
import { Link, useNavigation } from "react-router-dom";

function Home() {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [currentCountry, setCurrentCountry] = useState();
  const Countries = async () => {
    const currentCountryApi = await getCountriesApi();
    setCurrentCountry(currentCountryApi.data);
  };
  useEffect(() => {
    Countries();
  }, []);
  const FilterRegion = async (Region) => {
    const filterReg = await filterRegionApi(Region);
    setCurrentCountry(filterReg.data);
  };
  useEffect(() => {
    Countries();
  }, []);
  const FilterCountry = async (country) => {
    const filterCoun = await filterCountryApi(country);
    setCurrentCountry(filterCoun.data);
  };
  useEffect(() => {
    Countries();
  }, []);
  const inpRef = useRef();
  const searchCountry = (e) => {
    e.preventDefault();
    const inp = inpRef.current.value;
    FilterCountry(inp);
  };
  return (
    <div className="container mx-auto max-w-full md:max-w-full ">
      <div className="flex md:flex-row flex-col md:justify-between pt-8">
          <form onSubmit={searchCountry} className="relative ">
            <input
              ref={inpRef}
              type="text"
              className="py-6 mb-14 rounded dark:bg-[#1b263b] shadow-md shadow-gray-300 dark:shadow-[rgba(27,_38,_59,_0.2)_0px_7px_29px_0px] text-lg mx-5 pr-24 pl-16 bg-white  max-w-[360px] md:max-w-[400px]"
              name=""
              placeholder="Search for a country.."
              id=""
            />
            <img
              className="absolute left-12 w-[25px] top-6 "
              src="/search.svg"
              alt=""
            />
          </form>
          <details className="dropdown mb-8 md:mb-14">
            <summary className="m-1 btn border hover:bg-slate-100 dark:bg-[#1b263b] border-none ml-5 btn-lg px-10 text-inherit text-md font-sm bg-[#f8f9fa]">
              Filter by Region
              <span>
                <img src="./down-arrow.svg" alt="" className="w-7 ml-5" />
              </span>
            </summary>
            <ul className="p-4 pr-12 ml-2 flex flex-col md:w-[200px] md:text-[16px] gap-2 shadow menu dark:bg-[#1b263b] bg-[#f8f9fa] dropdown-content z-[1] max-w-[270px]   rounded-box ">
              {regions.map((region, i) => (
                <li
                  className="cursor-pointer"
                  key={i}
                  onClick={() => {
                    FilterRegion(region);
                  }}
                >
                  {region}
                </li>
              ))}
            </ul>
          </details>
      </div>
      <div className="flex flex-col  mx-auto  gap-10  bg-inherit  flex-wrap max-w-[264px] md:max-w-[95%]  md:gap-12 md:flex-row  md:max-full   ">
        {currentCountry ? (
          currentCountry.map((country) => (
            <Link to={"country/" + country.name.common}>
              <Country
                key={country.id}
                name={country.name.common}
                flags={country.flags.png}
                capital={country.capital}
                region={country.region}
                population={country.population}
              />
            </Link>
          ))
        ) : (
          <div class="flex mx-auto mt-4 h-screen">
            <div class="relative">
            <span className="loading loading-dots loading-lg"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
