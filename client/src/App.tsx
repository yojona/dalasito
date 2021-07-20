import React from 'react';
import Card from './components/Card';
import GoLive from './components/GoLive';
import Layout from './components/Layout';
import Page from './components/Page';
import Topbar from './components/Topbar';

const App = () => {
  return (
    <Layout>
      <Topbar />
      <Page>
        <Card>
          <GoLive title="Transmitir en vivo" />
        </Card>
      </Page>
    </Layout>
  );
}

export default App;
