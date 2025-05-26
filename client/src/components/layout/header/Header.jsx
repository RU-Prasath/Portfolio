import { iconifyIcons } from "../../../assets/icons/icon";
import { useTheme } from "../../../context/ThemeContext";
import { navSec } from "../../../data/constants";
import { Button } from "../../common/Button";
import './Header.css';

const Header = () => {

  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'dark' ? iconifyIcons.sun : iconifyIcons.moon;

  return (
    <nav className="container d-flex justify-content-between align-items-center pt-4">
      <div>
        <p className="logo k2d fw"><span className="green">&lt;</span> RU <span className="green">/&gt;</span></p>
      </div>
      <div className="d-flex align-items-center gap-3">
        <Button text={themeIcon} onClick={toggleTheme} className="theme" />
        <a href={navSec.gitHub} target="blank">{iconifyIcons.github}</a>
        <a href={navSec.linkedIn} target="blank">{iconifyIcons.linkedIn}</a>
        <a href={navSec.hireMeLink}><Button text={navSec.hireMeBtn} className="fw text-primary hireBtn" /></a>
      </div>
    </nav>
  )
}

export default Header