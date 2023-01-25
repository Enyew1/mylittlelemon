import Header from "./Header";
import Main from "./Main";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import "../App.css";
function Homepage() {
  return (
    <div>
      <Header />
      <Main>
        <CallToAction />
        <Specials />
      </Main>
    </div>
  );
}

export default Homepage;
