import styles from './NavBar.module.css';
import Text1 from '../elements/Text1.js';
import Menu from '../images/Menu.svg'
import ProfileImg from '../images/ProfileImg.svg'

function NavBar() {
  return(
    <div className={styles.NavBar}>
      <Text1 text='Gmail'/>
      <Text1 text='Imagens'/>
      <img src={Menu} width="33" height="33" alt='Error'/>
      <img src={ProfileImg} width="44" height="44" alt='Error'/>
    </div>
  );
}

export default NavBar;
