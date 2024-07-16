import './app.css'
import React from 'react';
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MoveiList from '../movei-list/movei-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';

function App(props) {
    const data = [
        {name: 'Empire of Osman', viewers:988, favourite: false},
        {name: 'Ertugrul', viewers:789, favourite: false},
        {name: 'Omar', viewers:1099, favourite: true},
    ]
    return (
        <div className='app font-monospace'>
            <div className='content'>
                <AppInfo/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <MoveiList data={data}/>
                <MoviesAddForm/>
            </div>
        </div>
    );
}

export default App;