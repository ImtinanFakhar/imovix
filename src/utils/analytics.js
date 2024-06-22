import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-7ZTDD6T4X0'); // Replace with your tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};
