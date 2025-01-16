document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      document.querySelectorAll('.recipe-card').forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  