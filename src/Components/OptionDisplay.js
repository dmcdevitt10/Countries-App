import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
  const currentPontentials = useSelector(selectPotentials);
  console.log(currentPontentials);

  const dispatch = useDispatch();

  return (
    <div className="stack">
      {currentPontentials?.map((country, index) => {
        return (
          <h2
            key={country.name.official}
            className="country-option"
            onClick={() =>
              dispatch(setDisplayCountry(currentPontentials[index]))
            }
          >
            {country.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
