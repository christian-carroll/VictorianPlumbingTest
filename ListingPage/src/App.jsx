import { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar';
import ProductsList from './components/ProductsList';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    document.body.style.backgroundColor = '#9fb5b1';

    return () => {
      document.body.style.backgroundColor = 'transparent';
    };
  });

  useEffect(() => {
    const fetchData = async () => {
      const raw = JSON.stringify({
        query: 'toilets',
        pageNumber: 0,
        size: 0,
        additionalPages: 0,
        sort: 1,
      });

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: raw,
      };

      fetch('https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setData(result);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr', gridGap: '25px' }}>
      <FilterBar filterData={data.facets} />
      <ProductsList productData={data.products} />
    </div>
  );
}

export default App;
