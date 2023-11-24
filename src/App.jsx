import { useState, useEffect, useCallback } from "react";
import AddMovie from "./assets/component/AddMovie";
import "./App.css";
import MovieList from "./assets/component/MovieList";
import Filter from "./assets/component/Filter"

const info = [
  {
    title: "The Black Book",
    img: "https://tinyurl.com/56pke263",
    description:
      "After his son is framed for a kidnapping, a bereaved deacon takes justice into his own hands and fights a corrupt police gang to absolve him.",
    posterURL: "www.blackbook.com",
    rating: 9.6,
  },
  {
    title: "300",
    img: "https://rb.gy/y1kz1l",
    description:
      "In the ancient battle of Thermopylae, King Leonidas and 300 Spartans fight against Xerxes and his massive Persian army. They face insurmountable odds when they are betrayed by a Spartan reject.",
    posterURL: "www.300.com",
    rating: 9.3,
  },
  {
    title: "Troy",
    img: "https://tinyurl.com/3rrctb46",
    description:
      "Paris, the prince of Troy, convinces the beautiful Helen to leave her husband, King Menelaus, and come with him. But this enrages the king, and he declares war on Troy along with all his allies.",
    posterURL: "www.troy.com",
    rating: 9.3,
  },
  {
    title: "Transformers - The Last Knight",
    img: "https://rb.gy/8286u9",
    description:
      "Quintessa brainwashes Optimus Prime and heads to Earth to search for an ancient staff. Cade, Bumblebee and the Autobots race against time to find it, while also escaping an anti-Transformers force.",
    posterURL: "www.transformers.com",
    rating: 8.3,
  },

  {
    title: "The Walking Dead",
    img: "https://tinyurl.com/ycyrfxkz",
    description:
      "Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor.",
    posterURL: "www.thewalkingdead.com",
    rating: 8.2,
  },
  {
    title: "Outcast",
    img: "https://rb.gy/v06dqq",
    description:
      "Cathal (James Nesbitt) is a killer who is pursuing his former lover Mary (Kate Dickie). Mary, a woman who comes from an ancient and magical Celtic race, and her son Fergal (Niall Bruton) hide in an outlying district of Edinburgh and use magic to protect themselves, but Cathal is determined to outsmart them. Local residents begin to die at the hands of an unidentified force, but it is unknown if Cathal is the killer, or if is he trying to destroy the beast.",
    posterURL: "www.outcast.com",
    rating: 6.9,
  },
];

function App() {
  const [list, setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  const filter = useCallback(
    (key, rate) => {
      setKeyword(key);
      setRate(rate);
      console.log(rate + "  " + key);
      setFiltredList(
        list.filter((element) => {
          return (
            element.title.toLowerCase().includes(key.toLowerCase()) &&
            element.rating >= rate
          );
        })
      );
    },
    [list, setKeyword, setRate]
  );

  useEffect(() => {
    filter(keyword, rate);
  }, [filter, keyword, rate]);

  function adding(movie) {
    if (movie.title && movie.img && movie.description && movie.posterURL) {
      setList((prevList) => [...prevList, movie]);
    }
  }

  return (
    <div className="App">
      <Filter filter={filter} />
      <MovieList list={filtredList} />
      <AddMovie adding={adding} />
    </div>
  );
}

export default App;