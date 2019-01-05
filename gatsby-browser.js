/* eslint-disable no-alert */

exports.onServiceWorkerUpdateFound = () => {
  const answer = window.confirm(
    'This application has been updated. Reload to display the latest version?',
  );
  if (answer === true) {
    window.reload();
  }
};
