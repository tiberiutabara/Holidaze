import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        type="text"
        placeholder="Search hotel by name..."
        onChange={(e) => setText(e.target.value)}
      />

      {results &&
        results.map((result) => (
          <Link key={result.id} to={`/hotel/${result.id}`}>
            {result.attributes.Title}
          </Link>
        ))}
    </>
  );
}
