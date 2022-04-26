import ResultsContainer from "./ResultsContainer";
import Country from "./Country";

const Results = (props) => {
  return (
    <ResultsContainer>
      {props.result.map((country) => (
        <Country
          key={country.id}
          flag={country.flag}
          name={country.name}
          capital={country.capital}
          population={country.population}
          languages={country.languages}
          currencies={country.currencies}
          maps={country.maps}
        />
      ))}
    </ResultsContainer>
  );
};

export default Results;
