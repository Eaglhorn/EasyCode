function http() {
    return {
         request(url, options) {
            const response =  fetch(url, options).then(response => {
                if (!response.ok) {
                    return Promise.reject(response);
                }
                return response.json();
            });

            return response;
        },
    };
}

const myHttp = http();

myHttp
  .request(`https://jsonplaceholder.typicode.com/posts/1`)
  .then(res => console.log(res))
  .catch(err => console.log(err));

myHttp
  .request(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST',
    body: JSON.stringify({ title: 'My title', body: 'Mybody' }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => console.log(res))
  .catch(err => console.log(err));

const newsService = {
    apiKey : '9c27b0f722b84da5a08312d2b125351b',
    apiUrl : 'https://newsapi.org/v2',
    topHeadlines(country = 'ua',categories = 'business') {
            return Promise.resolve().then(() => {
                return  myHttp.request(`${this.apiUrl}/top-headlines?country=${country}&category=${categories}&apiKey=${this.apiKey}`);
        });
    },
    everything(text) {
        return Promise.resolve().then(() => {
            return  myHttp.request(`${this.apiUrl}/everything?q=${text}&apiKey=${this.apiKey}`);
        });
    },
};


// Elements
const newsContainer = document.querySelector('.news-container .row');

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    loadNews();
});

function renderPrommis(country, categories, search, top = true) {
    if(!top){
        newsService.everything(search)
            .then(res => onGetResponse(null, res))
            .catch(err => onGetResponse(err));
    }else {
        newsService.topHeadlines(country, categories)
            .then(res => renderNews(res.articles))
            .catch(err => onGetResponse(err));
    }
}

function loadNews() {
    const form = document.querySelector('form');
    renderPrommis();


    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const country = event.target[1].value;
        const categories = event.target[3].value;
        const search = event.target[4].value;

        if(event.target[4].value === '') {
            renderPrommis(country, categories);
        }else {
            renderPrommis(country,categories,search, false);
        }

    });


}

function onGetResponse(err, res) {
    if (err) {
        alert(err);
        return;
    }

    if (!res.articles.length) {
        alert('Новостей не найдено');
        return;
    }

    renderNews(res.articles);
}

function renderNews(newsItems) {
    let fragment = '';

    newsItems.forEach(item => {
        const el = newsTemplate(item);
        fragment += el;
    });

    newsContainer.insertAdjacentHTML('afterbegin', fragment);
}

function newsTemplate({ url, title, description, urlToImage } = {}) {
    return `
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage}">
          <span class="card-title">${title || ''}</span>
        </div>
        <div class="card-content">
          <p>${description || ''}</p>
        </div>
        <div class="card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
  `;
}
/*---------------------------*/
