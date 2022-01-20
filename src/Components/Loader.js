import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <MutatingDots height={100} color={'red'} width={100} />
    </div>
  );
};
export default Loader;
