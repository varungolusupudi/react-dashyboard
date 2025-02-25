import React from 'react';
import { useState, useEffect } from 'react';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const [cardDetails, setCardDetails] = useState([
        {
            'name': "",
            'username': "",
            'email': '',
            'address': '',
            'phone': '',
            'website': '',
            'company': '',
        }
    ]);




    return (
        <div className="my-16">
            <input onChange={handleChange} className="mx-4 rounded-lg border-solid border-2 border-black p-4" id="search-bar" type="text" />
            <button className="rounded-full border-solid border-2 border-black p-4" type="submit">Submit</button>
            <h1>{searchTerm}</h1>

            {cardDetails.map((card) => (
            <div>
                <h2>{card.name}</h2>
                <h2>{card.username}</h2>
                <h2>{card.email}</h2>
                <h2>{card.address}</h2>
                <h2>{card.phone}</h2>
                <h2>{card.website}</h2>
                <h2>{card.company}</h2>
            </div>
            ))}
        </div>
    );
}

export default Search;