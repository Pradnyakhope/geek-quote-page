
const Header = () => {
    return(
    <header className="navContainer">
        <div className="div1 flex">
          <a href="/" className="">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite logo" />
            <span className="logo-text">GeekFoods</span>
          </a>
        </div>
        <div className="div2 flex">
          <ul className="menuList">
            <li><a href="/" className="menu active">Home</a></li>
            <li><a href="/">Quote</a></li>
            <li><a href="/">Restaurents</a></li>
            <li><a href="/">Foods</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="div3 flex">
          <button className="btn">Get started</button>
        </div> 
      </header>
    )
};

export default Header;