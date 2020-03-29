export const categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
export const paises = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za' ]
export const getApiUrl = (categoria,paises )=> `https://newsapi.org/v2/top-headlines?country=${paises}&category=${categoria}&apiKey=88266c20307b4e749cf7ee086a6dbc0b`;

