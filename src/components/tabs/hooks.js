import {useState} from 'react';

import {DetailsTab} from './details-tab';
import {ReviewsTab} from './reviews-tab';
import {OverviewTab} from './overview-tab';

export const useTabs = () => {
  const [tab, setTab] = useState(`overview`);
  const tabClickHandler = (newTab) => (evt) => {
    evt.preventDefault();
    setTab(newTab);
  };

  const getCurrentTab = () => {
    switch (tab) {
      case `overview`:
        return OverviewTab;
      case `details`:
        return DetailsTab;
      case `reviews`:
        return ReviewsTab;
      default:
        return null;
    }
  };

  return {
    tab,
    tabClickHandler,
    CurrentTab: getCurrentTab(tab),
  };
};
