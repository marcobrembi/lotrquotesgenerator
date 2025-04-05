document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('quote-button').addEventListener('click', function () {

        // Fetch cit causale + id
        fetch(`https://the-one-api.dev/v2/quote`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiToken}`
            }
        })
        .then(res => res.json())
        .then(data => {
            // Cit causale
            const randomQuote = data.docs[Math.floor(Math.random() * data.docs.length)];

            // Id
            const characterId = randomQuote.character;

            // fetch per id
            fetch(`https://the-one-api.dev/v2/character/${characterId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${apiToken}`
                }
            })
            .then(res => res.json())
            .then(characterData => {
                const characterName = characterData.docs[0].name;

                // print
                document.getElementById('quote-text').innerHTML = `"${randomQuote.dialog}" - ${characterName}`;
            });
        });
    });
});
