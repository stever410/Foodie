import {useState} from 'react';
import {Props} from '../../../App';

const useHooks = () => {
  const buttons = ['Login', 'Sign-up'];
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleChangeTab = (selectedIndex: number) => {
    setSelectedButtonIndex(selectedIndex);
  };

  return {
    states: {
      buttons,
      selectedButtonIndex,
    },
    handlers: {
      handleChangeTab,
    },
  };
};

export default useHooks;
