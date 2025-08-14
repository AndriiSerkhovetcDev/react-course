import React, { useEffect, useState } from 'react';
import { netflixTitles } from "../../data/mockData";
import style from "./HeaderSearch.module.css"

const HeaderSearch = () => {
    const [showSearchInput, setShowSearchInput] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [debouncedSearchValue, setDebouncedSearchValue] = useState('')
    const [isValidValue, setIsValidValue] = useState(false)
    const [filteredMovies, setFilteredMovies] = useState([])

    const handlerShowSearchInput = () => {
        setShowSearchInput(showSearchInput => !showSearchInput)
    }

    useEffect(() => {
       if (showSearchInput) {
            console.log("search input is show")
       } else {
            console.log('search input was clear and hide')
            handleClearInput();
            setFilteredMovies([])
       }
    }, [showSearchInput])

    const hasValidLength = (value) =>  value.length > 2;
    
    const findMovieBySearch = (inputValue) => {
        return netflixTitles.filter(title =>
            title.toLowerCase().includes(inputValue.toLowerCase()))
    }

    const handleClearInput = () => {
        setSearchValue("")
        setIsValidValue(false)
    } 

    const handlerValidSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchValue(searchValue)
        }, 300)

        return () => clearTimeout(timer)
    }, [searchValue])

    useEffect(() => {
        const isValidLength = hasValidLength(debouncedSearchValue)

        if (isValidLength) {
            setIsValidValue(true)
            setFilteredMovies(findMovieBySearch(debouncedSearchValue))
        } else {
            setIsValidValue(false)
            setFilteredMovies([])
        }
    },[debouncedSearchValue])

    return (
        <div className={style.headerSearchContainer}>
            <div className={style.searchInputContainer}>
                <input 
                    type="text" 
                    className={`${style.searchInput} ${showSearchInput ? style.showSearchInput : ''}`}
                    placeholder="Search"
                    value={searchValue}
                    onChange={handlerValidSearchValue}
                />
                {showSearchInput && searchValue && (
                    <button className={style.resetSearchValue} onClick={handleClearInput}>×</button>
                )}
                <div className={`${style.searchResultsWrapper} ${showSearchInput && isValidValue ? style.showSearchResult : ''}`}>
                    <span className={style.userSearchResult}> User find: {searchValue}</span>
                    {filteredMovies.length ? (
                        <ul className={style.searchResultsList}>
                            {filteredMovies.map((movie, index) => (
                                <li key={index} className={style.searchResultItem}>{movie}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className={style.emptySearhResult}>Movie not found</p>
                    )}
                </div>
            </div>
            <button className={style.headerSearch} onClick={handlerShowSearchInput}></button>
        </div>
        
    );
};

export default HeaderSearch;