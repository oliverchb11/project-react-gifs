export const getGifs = async(category) => {
    const path = 'https://api.giphy.com/v1/';
    const api_key = '4A1PmENMAe81fnWP1ZXzBcoWfYWLTecG';
    const recource = `${path}gifs/search?q=${encodeURI(category)}&limit=10&api_key=${api_key}`;
    const response = await fetch(recource);
    const { data } = await response.json();
    const gifs = data.map(({ id, images: { downsized }, username, title }) => {
        return {
            id,
            images: downsized.url,
            username,
            title
        }
    })
    return gifs
}