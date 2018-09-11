var routes=[ // Index page
  {
      path: '/', url: './index.html', name: 'home',
  }
  ,
  {
      path: '/about/', url: './pages/about.html', name: 'about',
  }
  ,
  {
      path: '/start/', url: './pages/start.html', name: 'start',
  }
  ,
  {
      path: '/all/', url: './pages/all.html', name: 'all',
  }
  ,
  {
      path: '/result/', url: './pages/result.html', name: 'result',
  }
  ,
  {
      path: '/search-name/', url: './pages/search_name.html', name: 'search_name',
  }
  ,
  {
      path: '/region/', url: './pages/search_region.html', name: 'search_region',
  }
  ,
  {
      path: '/view/', url: './pages/view.html', name: 'search_result',
  },
  ,
  {
      path: '/search/', url: './pages/search.html', name: 'search',
  }
  , // Default route (404 page). MUST BE THE LAST
  {
      path: '(.*)', url: './pages/404.html',
  }
  
  ];