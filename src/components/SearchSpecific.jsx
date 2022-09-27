// General imports
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Style imports
import './styles/SearchSpecific.scss'

export default function SearchSpecific(props) {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filteredResults = props.data.filter((e) =>
      e.attributes.Title.toLowerCase()
        .replace(/\s+/g, "")
        .includes(text.toLowerCase().replace(/\s+/g, ""))
    );
    text.length >= 1 ? setResults(filteredResults) : setResults(null);
  }, [text, props.data]);

  return (
    <>
      <input
      className="search-specific"
        type="text"
        placeholder="Search hotel by name..."
        onChange={(e) => setText(e.target.value)}
      />

      <div className="specific-results">
        {results &&
          results.map((result) => (
            <Link key={result.id} to={`/hotel/${result.id}`}>
              {result.attributes.Title}
            </Link>
          ))}
      </div>
    </>
  );
}
