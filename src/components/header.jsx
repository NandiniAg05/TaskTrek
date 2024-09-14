import { BsFillCalendarCheckFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="sidebar">
      <header>
        <h3><BsFillCalendarCheckFill className="icon-header"/>TaskTrek</h3>
      </header>

      <header className="head-category">Categories</header>
      <div className="categories">
        <a href="/" className="home-first">
          <p>House</p>
          <div className="mark">.........</div>
        </a>
        <a href="/" className="home-first">
          <p>Family</p>
        </a>
        <a href="/" className="home-first">
          <p>Work</p>
        </a>
        <a href="/" className="home-first">
          <p>Sports</p>
        </a>
      </div>

      <header className="head-category">Data</header>
      <div className="categories">
        <a href="/" className="home-first">
          <p>Statistics</p>
        </a>
        <a href="/" className="home-first">
          <p>Compare</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
