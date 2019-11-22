barba.use(barbaCss);
barba.init({
  transitions: [
    {
      name: 'fade',
      beforeEnter() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  ]
});
