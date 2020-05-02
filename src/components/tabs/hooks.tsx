import {useState, SyntheticEvent} from 'react';

import {DetailsTab} from './details-tab';
import {ReviewsTab} from './reviews-tab';
import {OverviewTab} from './overview-tab';
import {TFilm} from '../../reducer/types';

type TComponent = (props: {movie: TFilm}) => JSX.Element;

type TUseTab = {
  tab: string;
  tabClickHandler: (newTab: string) => (evt: SyntheticEvent) => void;
  CurrentTab: TComponent;
}

export const useTabs = (): TUseTab => {
  const [tab, setTab] = useState(`overview`);
  const tabClickHandler = (newTab: string) => (evt: SyntheticEvent): void => {
    evt.preventDefault();
    setTab(newTab);
  };

  const getCurrentTab = (): TComponent => {
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
    CurrentTab: getCurrentTab(),
  };
};
