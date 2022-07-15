import { TailSpin } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <TailSpin height="80" width="80" color="#3f51b5" />
    </Spinner>
  );
};
