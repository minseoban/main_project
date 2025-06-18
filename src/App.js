import React, { useState } from 'react';

import Header from './component/header';
import MainBanner from './component/main_banner';
import Promotion from './component/promotion';
import NewItems from './component/newitems';
import BRPlay from './component/brplay';
import BeBetter from './component/bebetter';
import BrBenefit from './component/brbenefit';
import Footer from './component/footer';
import MenuTab from './component/menu_tab';
import BrplayTab from './component/brplay_tab';
import BrstoryTab from './component/brstory_tab';
import DeliverystoreTab from './component/Deliverystore_tab';

import './App.css';

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "menu":
        return <MenuTab />;
      case "br play":
        return <BrplayTab />;
      case "br story":
        return <BrstoryTab />;
      case "deliverystore":
        return <DeliverystoreTab />;
      case "home":
      default:
        return (
          <>
            <MainBanner />
            <Promotion />
            <NewItems />
            <BRPlay />
            <BeBetter />
            <BrBenefit />
          </>
        );
    }
  };

  return (
    <div>
      <Header onNavigate={setPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
