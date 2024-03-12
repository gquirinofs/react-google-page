import styles from './SearchBar.module.css';
import SearchLens from '../images/SearchLens.svg';
import KeyBoard from '../images/Keyboard.svg';
import GoogleMic from '../images/GoogleMic.svg';

function SearchBar() {
  const iconSize = 28;
  return(
    <>
      <form className={styles.SearchBar}>
        <img className={styles.leftEl} width={iconSize} height={iconSize} src={SearchLens} alt='Error'/> 
        <input type='text' placeholder='Search Google or type a URL'/>
        <div className={styles.rightEl}>
          <img src={KeyBoard} width={iconSize} height={iconSize} alt='Error'/>  
          <img src={GoogleMic} width={iconSize} height={iconSize} alt='Error'/>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
