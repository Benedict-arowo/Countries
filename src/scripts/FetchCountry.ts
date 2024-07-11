import Country from "../types/Country";
import Countries from "./Countries";

export const FetchCountry = ({
	name,
	code,
	capital,
	drivingSide,
	region,
}: IFetchCountry): Country[] => {
	return Countries.filter((country) => {
		(name && country.name.includes(name)) ||
			(code && country.code.includes(code)) ||
			(capital && country.capital.includes(capital)) ||
			(drivingSide && country.drivingSide === drivingSide) ||
			(region && country.region === region);
	});
};

export const FetchCountryByName = (name: string): Country | undefined => {
	return Countries.find((country) => country.name === name);
};

export const FetchCountryByCode = (code: string): Country | undefined => {
	return Countries.find((country) => country.code === code);
};

export const FetchCountryByCapital = (capital: string): Country | undefined => {
	return Countries.find((country) => country.capital === capital);
};

interface IFetchCountry {
	name: string | undefined;
	code: string | undefined;
	capital: string | undefined;
	drivingSide: "left" | "right" | undefined;
	region: string | undefined;
}
