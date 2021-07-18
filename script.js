const url = 'https://anime30-retrieve.herokuapp.com/';

const table_body = document.querySelector("tbody");


async function retrieve_data(url, table_body){

    table_body.innerHTML = "";

    const response = await fetch(url)
    .then(e => e.json());

    for(anime of response) {
        row =  `
            <tr>
                <td class=" text-truncate" style="max-width: 500px;">${anime.name}</td>
                <td>${anime.episode}</td>
                <td>${anime.released}</td>
                <td>${anime.state}</td>
                <td>${anime.next_episode}</td>
            </tr>
        `;
        table_body.innerHTML += row;
    };

    
};

retrieve_data(url, table_body)