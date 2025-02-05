import './App.css';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import FirstPage from './page/firstpage';
import Login from './page/login/Login';
import Register from './page/login/register/Register';
import Adminhome from './page/fook/adminhome/Adminhome';
import Movies from './page/fook/movie/Movie';
import Homepage from './page/note/Homepage/homepage';
import UserAccount from './page/pool/user_account/userAccount';
import MovieDetailPage from './page/note/MovieDetailpage/movieDetailpage';
import TopRatingpage from './page/note/Topratingpage/topRatingpage';
import Categoriespage from './page/note/Categoriespage/categoriespage';
import Searchpage from './page/note/searchpage/searchpage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<Adminhome/>}/>
        <Route path='/admin/movie' element={<Movies/>}/>
        <Route path="/homepage"  element={<Homepage/>}/>
        <Route path="/moviedetailpage"  element={<MovieDetailPage/>}/>
        <Route path="/topratingpage"  element={<TopRatingpage/>}/>
        <Route path="/categoriespage"  element={<Categoriespage/>}/>
        <Route path="/searchpage"  element={<Searchpage/>}/>
        <Route path='/account' element={<UserAccount/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
