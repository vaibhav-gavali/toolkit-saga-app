import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CATS_STATE, getCatsFetch } from './catState';
import './App.css';

function App() {
  const cats = useSelector((state) => state.catsStore[`${CATS_STATE}`]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  console.log('cats', cats);

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>Images of different species of cats. lots of cats for your viewing</p>
      <hr />
      <div className="Gallery">
        {cats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                src={cat.image.url}
                alt={cat.name}
                width="200"
                height="200px"
              />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
