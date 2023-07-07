import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { RecoilRoot } from 'recoil';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <Suspense>
      <App />
    </Suspense>
  </RecoilRoot>,
);
