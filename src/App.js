import React from "react";
import "./App.css";
import Row from "./Row.js";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      {/* Nav Bar */}
      <Nav />
      {/*Banner */}
      <Banner />
      {/* Popular Movie component */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginials}
        isLargeRow={true}
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaies}></Row>
    </div>
  );
}

export default App;
