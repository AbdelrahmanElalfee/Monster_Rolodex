import './App.css';
import CardListComponent from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import {useState, useEffect} from "react";

const App = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

  return (
      <div className="App">
          <h1 className='app-title'>Monsters Rolodex</h1>
          <SearchBox
              placeholder='search monsters'
              className='monsters-search-box'
              onChangeHandler={onSearchChange}
          />
          <CardListComponent  className='monsters-card-list' monsters={filteredMonsters}/>
      </div>
  );
}

export default App;
