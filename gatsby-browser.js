/* eslint-disable no-alert */

// TODO: use `onServiceWorkerUpdateReady` instead: https://github.com/gatsbyjs/gatsby/pull/10432

exports.onServiceWorkerUpdateFound = () => {
  const answer = window.confirm(
    'This application has been updated. Reload to display the latest version?',
  );
  if (answer === true) {
    window.reload();
  }
};
