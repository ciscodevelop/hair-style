import { Typewriter } from "react-simple-typewriter";
import "./home.scss";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="left">
        <div className="imgBG">
          <img src="/asset/img/hairdresser-personal.png  " alt="" />
        </div>
      </div>
      <div className="right">
        <div className="card-main">
          <div className="header">
            <h5>LUCIA VERTA</h5>
          </div>
          <div className="body">
                      <p>
                      <Typewriter
            words={['Taglio e Acconciatura', 'Colore', 'Trattamenti per la cura dei capelli', 'Hair Styling']}
            loop={5}
            cursor
            cursorStyle='♥'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
              
            </p>
          </div>
          <div className="footer">
            <a href="#contact">Contattami</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
