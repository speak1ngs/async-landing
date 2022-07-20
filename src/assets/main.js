
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC1emV4A8liRs9p80CY8ElUQ&part=snippet%2Cid&order=date&maxResults=10'


const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '786cba0d25msh5a3878b12201aacp194fb3jsn991e6d32e1ce',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const asFetch = async (urlAPI) =>{
    const response = await fetch(urlAPI, options)
    const data = await response.json();
    return data;
};
// autoejecutarse;
(async () =>{
    try {
        const videos  = await asFetch(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,4).join('')}
        `;
    
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();

