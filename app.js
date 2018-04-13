var search = instantsearch({
  // Replace with your own values
  appId: 'SSDBH1YDTP',
  apiKey: 'e8b0ae573ad09cb0f04a1a2da61659b8', // search only API key, no ADMIN key
  indexName: 'minute_cl_cluj',
  urlSync: true,
  searchParameters: {
    hitsPerPage: 10
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

search.start();

