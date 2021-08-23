import React from "react";
import GoogleFontLoader from "react-google-font-loader";

const FontsLoader = (): React.ReactElement => (
  <GoogleFontLoader
    fonts={[
      {
        font: 'Bebas Neue',
        weights: [400, 700, 800],
      },
      {
        font: 'Nunito Sans',
        weights: [400, 700, 800],
      },
    ]}
    subsets={['cyrillic-ext', 'greek']}
  />
);

export default FontsLoader;