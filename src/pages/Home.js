import BookList from "../Components/BookList";
import React, { useEffect, useState, useContext } from "react";
import SearchBar from "../Components/SearchBar";
import { Container } from "react-bootstrap";
import { MoonLoader } from "react-spinners";
import MyCarousel from "../Components/MyCarousel";
import ThemeContext from "../context/ThemeContext";
import ErrorContext from "../context/ErrorContext";
import TokenContext from "../context/TokenContext";
import { Moon } from "react-bootstrap-icons";
import MyNav from "../Components/MyNav"
import Myfooter from "../Components/Myfooter"

function Home() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { setErrors } = useContext(ErrorContext);
  const { token } = useContext(TokenContext);
  const getBooks = async () => {
    try {
      const response = await fetch("https://epibooks.onrender.com/");
      return await response.json();
    } catch (error) {
      setErrors(error);
    }
  };
  useEffect(() => {
    setLoading(true);
    getBooks().then((books) => {
      setBooks(books);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <MyNav />
      <Container
        fluid
        style={{ backgroundColor: theme.background, color: theme.foreground }}
      >
        <div className="py-2">
          {(loading || token.length === 0) && (
            <div className="d-flex justify-content-center vh-100 v-100 align-items-center">
              <MoonLoader color="#76h7j7" size={60} />
            </div>
          )}
          {!loading && token.length > 0 &&
            <main>
              <MyCarousel books={books} />
              <SearchBar data={books} query={query} setQuery={setQuery} />
              <BookList
                books={books}
                query={query} />
            </main>}
        </div>
      </Container>
      <Myfooter />
    </>
  );
}

export default Home;