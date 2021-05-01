import React from "react";
import Search from "./components/Search/Searchbox";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {

  return (
    <div>
      <Header />
      <Search />
      <Table />
    </div>
  );
}

export default App;

// image: res.data.results[0].picture.thumbnail,
          // first: res.data.results[0].name.first,
          // last: res.data.results[0].name.last,
          // email: res.data.results[0].email,
          // phone: res.data.results[0].phone,
          // dob: res.data.results[0].dob.date,