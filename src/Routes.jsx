import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';import Home from './pages/Home'
import CheckResults from './pages/CheckResults';
import ViewResults from './pages/ViewResults';
import BuyCheckerPage from './pages/BuyCheckerPage';
import Faqs from './pages/faqs';
import AboutPage from './pages/AboutPage';

const Routes = () => {
  return (
    <div>
      <Router>
        <RouterRoutes>
            <Route path='/' element={<Home />} />
            <Route path='/check-results' element={<CheckResults />} />
            <Route path='/view-results' element={<ViewResults />} />
            <Route path='/buycheckerpage' element={<BuyCheckerPage />} />
            <Route path='/faqs' element={<Faqs />} />
            <Route path='/about' element={<AboutPage />} />
        </RouterRoutes>
      </Router>
    </div>
  )
}

export default Routes
