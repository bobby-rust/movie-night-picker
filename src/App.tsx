import React, { useState } from "react";
import "./App.css";
import config from "./config.json";

enum SortOptions {
    Popularity = "popularity.desc",
    Rating = "vote_average.desc",
    Latest = "release_date.desc",
    Revenue = "revenue.desc",
    VoteCount = "vote_count.desc",
}

enum Genre {
    Action = "Action",
    Adventure = "Adventure",
    Animation = "Animation",
    Comedy = "Comedy",
    Crime = "Crime",
    Documentary = "Documentary",
    Drama = "Drama",
    Family = "Family",
    Fantasy = "Fantasy",
    History = "History",
    Horror = "Horror",
    Music = "Music",
    Mystery = "Mystery",
    Romance = "Romance",
    ScienceFiction = "Science Fiction",
    TVMovie = "TV Movie",
    Thriller = "Thriller",
    War = "War",
    Western = "Western",
}

/**
 * Add cast filter in future, need the actor's IDs
 */
type FilterOptions = {
    genre: Genre;
};

function App() {
    // Set up state
    const [page, setPage] = useState<number>(1);
    const [sortOptions, setSortOptions] = useState<SortOptions>(
        SortOptions.Popularity
    );

    const handlePageForward = () => {
        setPage(page + 1);
    };
    const handlePageBackward = () => {
        setPage(page - 1);
    };

    return (
        <div className='App'>
            <button onClick={handlePageForward} />
            <button onClick={handlePageBackward} />
        </div>
    );
}

export default App;
