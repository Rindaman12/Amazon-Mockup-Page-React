import React from "react";

import classes from "./App.module.css";
import ProductData from "./ProductData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcKWA-Zvwanrjh0CGSYf-_rOcqMNnlbRICnqgIKkih5ofY6IQbRCt_sGFuYC39DmP5g8&usqp=CAU"
            alt="Amazon Logo"
          />
        </nav>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />
        </div>
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>
            {ProductData.description}
          </p>
          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            <img
              className={[classes.ProductImage, classes.SelectedProductImage].join(' ')}
              src="https://imgur.com/PTgQlim.png"
              alt="Red Colored Watch"
            />
             <img
              className={classes.ProductImage}
              src="https://imgur.com/iOeUBV7.png"
              alt="Black Colored Watch"
            />
             <img
              className={classes.ProductImage}
              src="https://imgur.com/Mplj1YR.png"
              alt="Blue Colored Watch"
            />
             <img
              className={classes.ProductImage}
              src="https://imgur.com/xSIK4M8.png"
              alt="Purple Colored Watch"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
