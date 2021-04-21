import {useState} from 'react';
import {Props} from '../../../App';

const useHooks = (props: Props) => {
  const {navigation} = props;
  const buttons = ['Login', 'Sign-up'];
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleBackToWelcome = () => {
    navigation.navigate('Welcome');
  };

  const handleChangeTab = (selectedIndex: number) => {
    setSelectedButtonIndex(selectedIndex);
  };

  return {
    states: {
      buttons,
      selectedButtonIndex,
    },
    handlers: {
      handleBackToWelcome,
      handleChangeTab,
    },
  };
};

export default useHooks;
