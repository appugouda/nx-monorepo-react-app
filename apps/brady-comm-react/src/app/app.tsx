import React, { useEffect, useState } from 'react';
import { Message } from '@brady-comm/api-interfaces';
import Search from '../components/search/search';
import ResponsiveAppBar from '../components/responsive-app-bar/responsive-app-bar';
import DataGrid from '../components/data-grid/data-grid';
import SmartGrid from '../components/smart-grid/smart-grid';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  // useEffect(() => {
  //   fetch('/api')
  //     .then((r) => r.json())
  //     .then(setMessage);
  // }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Brady Commodities Transition</h1>
        <ResponsiveAppBar/>
      </div>
      <div><Search/></div>
      <div>{m.message}</div>
      <DataGrid/>
      <SmartGrid/>
    </>
  );
};

export default App;
