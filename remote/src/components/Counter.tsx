import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default () => {
  const [count, setCount] = useState<number>(0);

  return <Button onClick={() => setCount(count + 1)}>Remote counter: {count}</Button>;
};
