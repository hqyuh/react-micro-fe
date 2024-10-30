import Counter from '@/components/Counter';

import { state } from '../../shared/shared';

const RemoteApp = () => {
  console.log('shared => ', state.message);

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>I'm the remote app</h1>
      <Counter />
    </div>
  );
};

export default RemoteApp;
