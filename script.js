 function toggleFilters() {
      var searchIcon = document.querySelector('.more-icon');
      var filters = document.querySelector('.filters');

      if (searchIcon.src.includes('white')) {
        searchIcon.src = './img/more-violet.png';
        filters.style.display = 'flex';
      } else {
        searchIcon.src = './img/more-white.png';
        filters.style.display = 'none';
      }
    }