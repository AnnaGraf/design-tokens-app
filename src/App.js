import './style/index.scss';

import HotelSearchForm from './components/search/HotelSearchForm';
import HotelsList from './components/hotels/HotelsList';
function App() {
  return (
    <>
     <HotelSearchForm />
     <HotelsList />
     </>
  );
}

export default App;
