import React from "react";
import { Header } from "./componentes/Header";
import 'boxicons';
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/DataProvider";
function App() {
  return (
    <DataProvider>
    <div className="App">
      
      <Paginas />
    </div>
    </DataProvider>
  );
}

export default App;
