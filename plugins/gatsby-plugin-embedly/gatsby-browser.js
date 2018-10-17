let injected = false;

exports.onRouteUpdate = () => {
  if (document.querySelector('.embedly-card') === null) {
    return;
  }

  // Prevent to inject platform.js twice.
  if (injected) {
    return;
  }
  injected = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://cdn.embedly.com/widgets/platform.js';
  document.getElementsByTagName('head')[0].appendChild(script);
};
