import React, { useState } from 'react';

interface SearchBarProps {
    setCity: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setCity }) => {
    const [city, setCityInput] = useState('');

    const handleSearch = () => {
        setCity(city);
    };

    return (
        <div className='search-city'>
            <input
                type="text"
                value={city}
                onChange={(e) => setCityInput(e.target.value)}
                placeholder='Enter a city'
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
