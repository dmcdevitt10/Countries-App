import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
    const currentPontentials = useSelector(selectPotentials)
    console.log(currentPontentials)

    return <div className="stack">{currentPontentials?.map((country) => {
        return <h2>{country.name.common}</h2>
    })}</div>;
};

export default OptionDisplay;
