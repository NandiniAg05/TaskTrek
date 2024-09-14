import { BsFillCalendarCheckFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="sidebar">
      <header>
        <h3><BsFillCalendarCheckFill className="icon-header"/>TaskTrek</h3>
      </header>

      <header className="head-category">Categories</header>
      <div className="categories">
        <button className="home-first">
          <p>House</p>
          <div className="mark">.........</div>
        </button>
        <button className="home-first">
          <p>Family</p>
        </button>
        <button className="home-first">
          <p>Work</p>
        </button>
        <button className="home-first">
          <p>Sports</p>
        </button>
      </div>

      <header className="head-category">Data</header>
      <div className="categories">
        <button className="home-first">
          <p>Statistics</p>
        </button>
        <button className="home-first">
          <p>Compare</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
