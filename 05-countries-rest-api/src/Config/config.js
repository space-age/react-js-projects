/********************
 *
 *  Here put variables that should be constants and use thru out the project
 *
 *
 *********************/

export const API_URL = "https://restcountries.com/v3.1";
export const API_URL_ALL = "https://restcountries.com/v3.1/all";
export const API_URL_NAME = "https://restcountries.com/v3.1/name";
export const TIMEOUT_SEC = 10;
export const RES_PER_PAGE = 12;

export const TABS_DROPDOWN_ARRAY = [
  {
    arrayNames: ["africa", "americas", "asia", "europe", "oceania"],
    query: "/region/",
    tabName: "Region",
    id: 0,
  },

  {
    arrayNames: [
      "South America",
      "North America",
      "Central America",
      "Southern Europe",
      "Eastern Asia",
    ],
    query: "/subregion/",
    tabName: "Sub-Region",
    id: 1,
  },

  {
    arrayNames: ["english", "chinese", "spanish", "french", "arabic"],
    query: "/lang/",
    tabName: "Common Languages",
    id: 2,
  },
  {
    arrayNames: [
      "united states dollar",
      "euro",
      "japanese yen",
      "british pound",
      "swiss franc",
    ],
    query: "/currency/",
    tabName: "Common Currency",
    id: 3,
  },
];
