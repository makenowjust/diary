exports.onRouteUpdate = () => {
  if (document.querySelector('.embedly-card') === null) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://cdn.embedly.com/widgets/platform.js';
  document.getElementsByTagName('head')[0].appendChild(script);
};
