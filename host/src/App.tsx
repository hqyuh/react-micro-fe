import { lazy, Suspense, useEffect } from 'react';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

// @ts-ignore
const RemoteApp = lazy(() => import('remote/remote-app'));

const HostApp = () => {
  useEffect(() => {
    of('emit')
      .pipe(tap(() => console.log("I'm RxJS from host")))
      .subscribe();
  }, []);

  return (
    <div className='text-3xl font-bold underline'>
      <div>Host</div>
      <Suspense fallback='Loading...'>
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default HostApp;
