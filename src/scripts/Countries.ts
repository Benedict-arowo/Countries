import country_list from "../data/countries.json";
import Country from "../types/Country";

const Countries = (): Country[] => {
	const countries = country_list as unknown as Country[];
	return countries;
};

export default Countries();
