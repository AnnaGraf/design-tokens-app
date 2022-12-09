import './style/index.scss';

function App() {
  return (
    <>
    <h6 className="overline-l text-secondary-on-light">Polaroid</h6>
    <h2 className='headline-xl'>Two new products</h2>
    <div className='row'> 
      <div className="card-product-promo-large">
        <div className="title-section-center">
          <h6 className="overline-l text-secondary-on-light">Exclusive</h6>
          <h2 className="headline-l text-primary-on-light">
            Polaroid Camera White
          </h2>

          <p className="body-m text-secondary-on-light vertical-margin-24">Launch 2023</p>
          <button className="button button-secondary-on-light button-small">
            Learn more
          </button>
        </div>
        <div className=''>
          <img src="https://www.figma.com/community/widget/1030479012894344777/snapshot" />
        </div>
      </div>

      <div className="card-product-promo-large">
        <div className="title-section-center">
          <h6 className="overline-l text-secondary-on-light">Exclusive</h6>
          <h2 className="headline-l text-primary-on-light">
            Polaroid Camera Beige
          </h2>

          <p className="body-m text-secondary-on-light vertical-margin-24">Launch 2024</p>
          <button className="button button-secondary-on-light button-small">
            Learn more
          </button>
        </div>
        <div className=''>
          <img src="https://www.kindpng.com/picc/m/56-564937_clip-art-polaroid-camera-clip-art-transparent-background.png" />
        </div>
      </div>
      </div>
    
    </>
  );
}

export default App;
