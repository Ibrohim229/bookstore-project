"use client";
import React from "react";
import { searchBooks } from "../data/booksAPI";
import { img } from "../data/img.jpg";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import PopularBooks from "./PopularBooks";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = async () => {
    try {
      const data = await searchBooks(query);
      setBooks(data.items);
      setShowSearchResults(true);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    if (inputValue.trim() === "") {
      setShowSearchResults(false);
    }
  };

  return (
    <div className="flex flex-col pt-10 gap-4">
      <div className="flex justify-center">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for books"
          className="bg-slate-100 w-64 pl-7 p-3 rounded-l-full text-lg outline-none"
        />
        <button
          onClick={handleSearch}
          className="flex justify-center outline-none items-center w-16 left-0 bg-slate-100 rounded-r-full"
        >
          <CiSearch size={30} color="grey" />
        </button>
      </div>

      {!showSearchResults && <PopularBooks />}

      {showSearchResults && (
        <div className="grid relative lg:grid-cols-3 md:grid-cols-2 gap-10 mt-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex flex-col lg:w-80 md:w-72 justify-between border border-black rounded-3xl overflow-hidden"
            >
              {book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.thumbnail ? (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="border-b-[1px] border-black w-full h-full object-cover"
                />
              ) : (
                <img
                  src={img}
                  alt={book.volumeInfo.title}
                  className="w-full h-full object-cover"
                />
              )}

              <div className="p-4 flex flex-col gap-10 items-start">
                <h2 className="font-bold text-lg font-sans">
                  {book.volumeInfo.title}
                </h2>
                <div className="flex flex-col">
                  {book.volumeInfo.authors && (
                    <p>Author: {book.volumeInfo.authors.join(", ")}</p>
                  )}
                  {book.volumeInfo.publishedDate && (
                    <p>Published Date: {book.volumeInfo.publishedDate}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
