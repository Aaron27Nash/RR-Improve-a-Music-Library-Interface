import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SeachBar'
import { SearchContext } from './context/DataContext'
function App() {
    let [searchTerm, setSearchTerm] = useState('')
    let [data, setData] = useState([])
    let [message, setMessage] = useState('Search for Music!')
    let searchInput = useRef('')

    {/* ... */}

    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearchTerm(term)
    }

    return (
        <div className="App">
            <SearchContext.Provider value={{
                term: searchInput,
                handleSearch: handleSearch
            }}>
                <SearchBar />
            </SearchContext.Provider>
            {message}
            <DataContext.Provider value={data}>
                <Gallery />
            </DataContext.Provider>
        </div>
    )
}


const App = () => {
    let [searchTerm, setSearchTerm] = useState('')
    let [data, setData] = useState([])
    let [message, setMessage] = useState('Search for Music!')
    

    {/* ... */}

    return (
        <div className="App">
            <SearchBar handleSearch={handleSearch} />
            {message}
            <DataContext.Provider value={data} >
                <Gallery />
            </DataContext.Provider>
        </div>
    )
}

