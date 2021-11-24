
import styles from './App.module.scss';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from './HomePage'
import WorkPage from './WorkPage'
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
              <Link to = '/works'><p className = {location.pathname==="/works" ? styles.selected : null}>WORKS</p></Link>
            </div>
          </div>
        </header>

        {/* Contents */}
        <section className = {styles.content}>
          <Routes>
            <Route path = '/myweb' element = { <HomePage /> } />
            <Route path = '/works' element = { <WorkPage /> } />
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
