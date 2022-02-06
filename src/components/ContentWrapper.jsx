import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import MoviesTable from './MoviesTable';

export default function ContentWrapper() {
  return <>
      
    <div id="content-wrapper" className="d-flex flex-column">

      <div id="content">
        <TopBar />
        <ContentRowTop />
      </div>
      <MoviesTable />
			<Footer />

		</div>

  </>;
}
