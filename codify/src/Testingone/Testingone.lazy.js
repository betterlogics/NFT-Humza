import React, { lazy, Suspense } from 'react';

const LazyTestingone = lazy(() => import('./Testingone'));

const Testingone = props => (
  <Suspense fallback={null}>
    <LazyTestingone {...props} />
  </Suspense>
);

export default Testingone;
