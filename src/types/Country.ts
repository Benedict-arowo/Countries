interface Country {
	name: string;
	code: string;
	flagUrl: string;
	capital: string;
	region: string;
	subregion: string;
	coordinates: {
		latitude: number;
		longitude: number;
	};
	area: number;
	languages: string[];
	currency: [
		{
			name: string;
			key: string;
			symbol: string;
		}
	];
	callingCode: string;
	timeZones: string[];
	drivingSide: string;
	internetTLD: string[];
	majorCities: string[];
	nationalAnthem: string;
	historicalEvents: string[];
}

export default Country;
