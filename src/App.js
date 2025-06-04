import React from 'react';
import Header from './component/header';
import MainBanner from './component/main_banner';
import Promotion from './component/promotion';
import NewItems from './component/newitems';
import BRPlay from './component/brplay';
import BeBetter from './component/bebetter';
import BrBenefit from './component/brbenefit';
import Footer from './component/footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <MainBanner />
      <Promotion />
      <NewItems />
      <BRPlay />
      <BeBetter />
      <BrBenefit />
      <Footer />
    </div>
  );
}

export default App;