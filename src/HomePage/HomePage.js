import React, { useState } from "react";
import { Container } from "./styles";
import Navbar from "./../components/Navbar/Navbar";
import BreadCrumbs from "./../components/BreadCrumbs/BreadCrumbs";
import FilterBar from "./../components/FilterBar/FilterBar";
import Searchbar from "../components/Searchbar/Searchbar";
import PaginationBar from "./../components/PaginationBar/PaginantionBar";
import VerticalMenu from "./../components/VerticalMenu/VerticalMenu";
import SubscribersCard from "./../components/SubscribersCard/SubscribersCard";
import ProductCard from "./../components/ProductCard/ProductCard";

export default function HomePage() {
  const createCards = (quantity) => {
    let items = [];
    for (let i = 0; i < quantity; i++) {
      items.push(<ProductCard idx={i} />);
    }
    return items;
  };
  const postlist = createCards(50);

  // Pagination --------------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const lastPage = Math.ceil(postlist.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = postlist.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    activeLink();
  };

  const activeLink = () => {
    const idxContainer = document.getElementById("pagination-container");
    const idxBtns = idxContainer.getElementsByClassName("idx-btn");
    for (let i = 0; i < idxBtns.length; i++) {
      idxBtns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
  };
  // -------------------------

  return (
    <Container>
      <nav id="side-menu">
        <VerticalMenu />
      </nav>
      <div id="main-area">
        <header id="header">
          <Navbar />
          <BreadCrumbs />
        </header>
        <div id="content-area">
          <aside id="filter-menu">
            <SubscribersCard />
          </aside>
          <main id="content">
            <FilterBar />
            <Searchbar />
            <div id="cards-container">
              {currentPosts}
            </div>
          </main>
        </div>
        <footer id="pagination">
          <PaginationBar
            currentPage={currentPage}
            paginate={paginate}
            postlist={postlist}
            lastPage={lastPage}
          />
        </footer>
      </div>
    </Container>
  );
}
