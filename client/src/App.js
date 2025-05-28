import { iconifyIcons } from "./assets/icons/icon.jsx";
import { Button } from "./components/common/Button.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import Header from "./components/layout/header/Header";
import Index from "./sections/Index.jsx";

function App() {

  const style = {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: '20px',
    border: 'transparent',
    backgroundColor: '#57F957',
    color: `var(--bg-color)`,
    borderRadius: '50%',
    padding: '6px 8px',
    zIndex: '20',
  }

  const scrollToTop = () => window.scrollTo(0, 0)

  return (
    <>
      <Button text={iconifyIcons.upArrow} style={style} onClick={scrollToTop} name='UpToggleBtn'></Button>
      <Header />
      <Index />
      <Footer />
    </>
  );
}

export default App;
