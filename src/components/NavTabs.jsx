import './NavTabs.css'
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="header" >
      <h1 className="name">Daniel MacDonald</h1>

    <ul className="navList">
      
      <li className="navLink">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          

          className={currentPage === 'About' ? 'active' : 'incative'}
        >
          About Me
        </a>
      </li>
      <li className="navLink">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          

          className={currentPage === 'Portfolio' ? 'active' : 'inactive'}
        >
          Portfolio
        </a>
      </li>
      <li className="navLink">
        <a
          href="#contact"
          

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'active' : 'inactive'}
        >
          Contact
        </a>
      </li>
      <li className="navLink">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          

          className={currentPage === 'Blog' ? 'active' : 'inactive'}
        >
          Resume
        </a>
      </li>
     
    </ul>
    </header>
  );
}

export default NavTabs;
