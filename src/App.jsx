import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Banner from './components/Banner';
import Profile from './pages/Profile';
import ProjectDetail from './pages/ProjectDetail';
import AccomplishmentDetail from './pages/AccomplishmentDetail';

const App = () => {
  return (
    <Router>
      <Banner />
      <main className="relative -top-[26vh] md:w-3/4 lg:w-1/2 xl:w-[50%] 2xl:w-[40%] mx-auto">
        <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-10 lg:py-6 2xl:p-12 2xl:py-6 shadow dark:bg-darkBg dark:shadow-gray-600">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route
              path="/accomplish/:id"
              element={<AccomplishmentDetail />}
            />
          </Routes>
        </div>
      </main>

      <div className="-mt-[26vh] invisible">Thank you!</div>
    </Router>
  );
};

export default App;
