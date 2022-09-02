import Footer from './components/footer/footer';
import NavBar from './components/navBar/navBar';
import Video from './pages/video';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/home';

const App = () =>{
  return (
    <Router>
     <NavBar />
		 	<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/videos/:videoId" element={<Video />}/>
			</Routes>
		 <Footer />
    </Router>
  );
}

export default App;
