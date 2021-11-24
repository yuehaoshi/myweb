
import styles from './App.module.scss';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import LifePage from './LifePage'
import GamePage from './GamePage'
import WorkPageDetail from './WorkPageDetail'

function App() {
  let location = useLocation();
  return (
    <div className= {styles.App}>

      {/* header */}
      <header className = {styles.header}>
          <div className = {styles.box}>
            <Link to = '/myweb'><div className = {styles.boxleft}>Yuehao's Room</div></Link>
            <div className = {styles.boxright}>
              <Link to = '/myweb'><p className = {location.pathname==="/myweb" ? styles.selected : null}>HOME</p></Link>
              <Link to = '/works'><p className = {(location.pathname==="/works" || location.pathname==="/works/1" || location.pathname==="/works/2" || location.pathname==="/works/3" || location.pathname==="/works/4") ? styles.selected : null}>WORKS</p></Link>
              <Link to = '/life'><p className = {location.pathname==="/life" ? styles.selected : null}>LIFE</p></Link>
              <Link to = '/games'><p className = {location.pathname==="/games" ? styles.selected : null}>GAMES</p></Link>
            </div>
          </div>
        </header>

        {/* Contents */}
        <section className = {styles.content}>
          <Routes>
            <Route path = '/myweb' element = { <HomePage /> } />
            <Route path = '/works' element = { <WorkPage /> } />
            <Route path = '/life' element = { <LifePage /> } />
            <Route path = '/games' element = { <GamePage /> } />
            <Route path = '/works/:id' element = { <WorkPageDetail/>} />
          </Routes>
        </section>

        {/* Footer */}
        <footer className = {styles.footer}>
          <p>© <b>2021 Yuehao Shi</b></p>
          <p>Handmade with</p>
        </footer>
    </div>
  );
}

export default App;
