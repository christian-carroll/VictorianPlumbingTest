import { useState, useEffect } from 'react';
import FilterBar from './components/FilterBy/FilterBar';
import ProductsList from './components/Products/ProductsList';
import SortSelector from './components/SortSelector';
import './App.css';

const logoUrl = 'https://images-nonprod.victorianplumbing.co.uk/uat/products/brands/victorian-plumbing/logoimages/vplogo.png';

function App() {
  const [data, setData] = useState({});
  const [activeFilters, setActiveFilters] = useState({});
  const [currentSort, setCurrentSort] = useState(1);

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
        sort: currentSort,
        facets: activeFilters,
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
          setData(result);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, [currentSort, activeFilters]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr', gridGap: '25px' }}>
      <FilterBar filterData={data.facets} setActiveFilters={setActiveFilters} />
      <div style={{ gridTemplateRows: '100px 1fr', display: 'grid', gridGap: '25px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '5fr 1fr',
            gridGap: '25px',
            justifyItems: 'center',
            backgroundColor: 'white',
            padding: '10px',
            alignItems: 'center',
            borderRadius: '5px',
          }}>
          <img src={logoUrl} alt={'Victorian Plumbing'} style={{ width: '250px', borderRadius: '5px' }} />
          <SortSelector currentSort={currentSort} setCurrentSort={setCurrentSort} />
        </div>
        <ProductsList productData={data.products} />
      </div>
    </div>
  );
}

export default App;
