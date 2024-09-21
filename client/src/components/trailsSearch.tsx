import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './searchbar';
import TrailList from './TrailList';


const TrailsSearch: React.FC = () => {
    const [trails, setTrails]   = useState([]);

    const handleSearch = async (city: string) => {
        try{
            const res = await axios.get(`https://prescriptiontrails.org/api/filter/?by=city&${city}&offset=0&count=6`);
            setTrails(res.data.trails);
        }catch(err){
            console.log("Error fetching trails", err);
        }
};

return (
    <div className='trails-search'>
        <SearchBar setCity={handleSearch} />
        <TrailList trail={trails} />
    </div>
);
};

export default TrailsSearch;