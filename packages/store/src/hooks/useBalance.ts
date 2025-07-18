import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useBalance = () => {
  return useSelector((state: RootState) => state.balance);
};
