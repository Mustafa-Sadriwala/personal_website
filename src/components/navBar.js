import * as React from 'react';
import {useStyletron} from 'baseui';
import {Button} from 'baseui/button';
import {Layer} from 'baseui/layer';
import {
  ChevronDown,
  Delete,
  Upload as Icon,
} from 'baseui/icon';
import {Unstable_AppNavBar as AppNavBar} from 'baseui/app-nav-bar';

function renderItem(item) {
  return item.label;
}
const MAIN_NAV = [
  {
    icon: Icon,
    item: {label: 'Primary alpha1'},
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
  },
  {
    icon: Icon,
    item: {label: 'Primary alpha2'},
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
  },
  {
    icon: ChevronDown,
    item: {label: 'Primary alpha3'},
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
    navExitIcon: Delete,
    nav: [
      {
        icon: Icon,
        item: {label: 'Secondary menu1'},
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
      },
      {
        icon: Icon,
        item: {label: 'Secondary menu2'},
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
      },
    ],
  }
];

function NavBar(props) {
  const [css] = useStyletron();
  const containerStyles = css({
    boxSizing: 'border-box',
    width: '100vw',
    position: 'fixed',
    top: '0',
    left: '0',
  });
  return (
    <React.Fragment>
        <Layer>
          <div className={containerStyles}>
            <AppNavBar
              appDisplayName="Mustafa Sadriwala"
              mainNav={MAIN_NAV}
              onNavItemSelect={({item}) => {
                console.log(item);
              }}
            />
          </div>
        </Layer>
    </React.Fragment>
  );
};

export default NavBar