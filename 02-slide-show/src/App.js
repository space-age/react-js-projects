import Title from "./components/Title.js";
import ScientistsForm from "./components/ScientistsForm.js";
import SectionContainer from "./components/UI/SectionContainer.js";

import imageTesla from "./images/nikola-tesla.JPG";
import imageEinstein from "./images/albert-einstein.JPG";
import imageNewton from "./images/isac-newton.JPG";
import imageDarwin from "./images/charles-darwin.JPG";
import imageEdison from "./images/thomas-edison.JPG";

function App() {
  // local reviews data
  const scientists = [
    {
      id: 0,
      name: "Nikola Tesla",
      job: "Electrical Engineer",
      img: imageTesla,
      text: "Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current electricity supply system.",
      link: "https://en.wikipedia.org/wiki/Nikola_Tesla",
    },
    {
      id: 1,
      name: "Albert Einstein",
      job: "Theoretical Physicist",
      img: imageEinstein,
      text: "Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest physicists of all time. Einstein is best known for developing the theory of relativity.",
      link: "https://en.wikipedia.org/wiki/Albert_Einstein",
    },
    {
      id: 2,
      name: "Isac Newton",
      job: "Mathematicians ",
      img: imageNewton,
      text: "Sir Isaac Newton PRS was an English mathematician, physicist, astronomer, alchemist, theologian, and author widely recognised as one of the greatest mathematicians and physicists of all time.",
      link: "https://en.wikipedia.org/wiki/Isaac_Newton",
    },
    {
      id: 3,
      name: "Charles Darwin",
      job: "Evolutionary Biologist",
      img: imageDarwin,
      text: "Charles Robert Darwin FRS FRGS FLS FZS was an English naturalist, geologist and biologist, best known for his contributions to evolutionary biology.",
      link: "https://en.wikipedia.org/wiki/Charles_Darwin",
    },
    {
      id: 4,
      name: "Thomas Edison",
      job: "Inventor",
      img: imageEdison,
      text: "Thomas Alva Edison was an American inventor and businessman. He developed many devices in fields such as electric power generation, mass communication, sound recording, and motion pictures.",
      link: "https://en.wikipedia.org/wiki/Thomas_Edison",
    },
  ];

  return (
    <div>
      <main>
        <SectionContainer>
          <Title title="famous scientists" />
          <ScientistsForm scientists={scientists} />
        </SectionContainer>
      </main>
    </div>
  );
}

export default App;
