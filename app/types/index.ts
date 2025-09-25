export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };

  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}

export interface CountryDetailed extends Country {
  borders: string[];
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  subregion: string;
  topLevelDomain: string[];
}
