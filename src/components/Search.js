import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [cardDetails, setCardDetails] = useState([]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const fetchSearch = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await res.json();
        console.log(data);
        let filteredSearch = filterSearch(data);
        console.log(filteredSearch);
        setCardDetails(filteredSearch);
    }

    const filterSearch = (data) => {
        return data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    const handleSubmit = () => {
        fetchSearch();
    }

    return (
        <div className="my-16">
            <input onChange={handleChange} className="mx-4 rounded-lg border-solid border-2 border-black p-4" id="search-bar" type="text" placeholder="Search by Name..." />
            <button onClick={handleSubmit} className="rounded-full border-solid border-2 border-black p-4 duration-500 hover:bg-amber-50 hover:scale-110" type="submit">Submit</button>

            <Card cardDetails={cardDetails} />
        </div>
    );
}

export default Search;