import { useState, useEffect } from "react";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Table } from "../components/Table";
import { getPokemon } from "../services/getPokemon";

function App() {
  const [showNewPanel, setShowNewPanel] = useState(false);
  const [title, setTitle] = useState("");
  const [pokemon, setPokemon] = useState({});

  const [data, setData] = useState([]);

  useEffect(() => {
    getPokemon("", true).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="App">
      <Header
        setTitle={setTitle}
        setShowNewPanel={setShowNewPanel}
        setData={setData}
      />
      <Table
        data={data}
        setPokemon={setPokemon}
        setShowNewPanel={setShowNewPanel}
        setTitle={setTitle}
        setData={setData}
      />
      {showNewPanel && (
        <Form
          title={title}
          setShowNewPanel={setShowNewPanel}
          data={data}
          setData={setData}
          pokemon={pokemon}
          setPokemon={setPokemon}
        />
      )}
    </div>
  );
}

export default App;
