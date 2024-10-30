import { lazy, Suspense, useEffect } from 'react';
import { of, tap } from 'rxjs';

const Remote = lazy(
  // @ts-ignore
  async () => import('remote/remote-app')
);

export default () => {
  console.log("I'm React from host");

  useEffect(() => {
    of('emit')
      .pipe(tap(() => console.log("I'm RxJs from host")))
      .subscribe();
  }, []);

  return (
    <>
      <div className='text-3xl font-bold underline'>Host</div>

      <Suspense fallback='Loading...'>
        <Remote />
      </Suspense>
    </>
  );
};
