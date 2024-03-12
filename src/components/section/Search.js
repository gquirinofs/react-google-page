import styles from './Search.module.css'
import Logo from '../images/Logo.svg'
import SearchBar from '../elements/SearchBar.js'

function Search() {
  return(
    <div className={styles.Search}>
      <img src={Logo} alt='Error' width='273' height='93'/>
      <SearchBar/>
    </div>
  );
}

export default Search;
