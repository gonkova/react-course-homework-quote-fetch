import React, { useState, useEffect } from 'react';

/*. Създаване на компонент с цитати
Създайте компонент приемащ цитат и автор. Направете API заявка към
https://dummyjson.com/quotes и покажете цитатите.
Нека да се показват 10 цитата на страницата, като добавите GET параметъра
limit(https://dummyjson.com/quotes?limit=10) */

export default function App() {
    const [quotes, setQuotes] = useState([]);
    const PER_PAGE = 10;

    useEffect(() => {
        fetch(`https://dummyjson.com/quotes?limit=${PER_PAGE}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.quotes);
                setQuotes(data.quotes);
            })
    }, []

    );

    return (
        <div className="App">
            <ul>
                {quotes.map(quote => <li key={quote.id}>Author: {quote.author} - Quote: {quote.quote}</li>)}
            </ul>
        </div>
    );
}
