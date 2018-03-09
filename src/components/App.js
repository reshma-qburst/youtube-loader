import React from 'react';
import Search from '../containers/Search';

import { mainWrapper, container, headerWrapper, footerWrapper } from '../styles/style'

const App = () => {
    return (
        <section style={mainWrapper}>
            <header style={headerWrapper}>QBurst</header>
            <div style={container}>
                <Search />
            </div>
            <footer style={footerWrapper}>© 2018 Reshma Kareem</footer>
        </section>
    )
  }
export default App;
