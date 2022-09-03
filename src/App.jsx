// imports
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// component imports
import Header from "./components/Header";

// page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Results from "./pages/Results";
import Hotel from "./pages/Hotel";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Owner from "./pages/Owner";

// apollo client

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/results" element={<Results />} />
            <Route path="/hotel/:id" element={<Hotel />} />

            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/owner" element={<Owner />} />
          </Routes>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
