import React, { useState } from "react";
import BookSearch from "../../components/BookSearch";
import LazyGrid from "../../components/LazyGrid";

export default function Books() {
  const [name, setName] = useState("");

  const [language, setLanguage] = useState("");
  const [author, setAuthor] = useState("");

  const resetSearch = ()=>{
    setName("")
    setLanguage("")
    setAuthor("")
  }
  return (
    <div>
      <BookSearch
        setLanguage={setLanguage}
        language={language}
        setName={setName}
        name={name}
        author={author}
        setAuthor={setAuthor}
        resetSearch={resetSearch}
      />
      <LazyGrid name={name} language={language} author={author}/>
    </div>
  );
}
