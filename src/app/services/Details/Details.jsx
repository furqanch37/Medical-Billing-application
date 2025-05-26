import './Details.css';
import ServicesSidebar from './ServicesSidebar';

const Details = () => {
  return (
    <div className="outpatient-container">
      <ServicesSidebar />
      <div className="content">
        <img src="/assets/services/one.jpg" alt="Surgery" className="top-image" />
        <h2>Outpatient Surgery</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida.
          Phasellus vel risus euismod, luctus ex eget, malesuada augue. Vivamus fermentum ut ex quis imperdiet sodales.
          Sed aliquam nibh nibh, a rutrum turpis pellentesque a. Nulla nibh libero, tincidunt cursus urna sed, suscipit
          imperdiet eros. Sed sodales libero sapien, at rutrum mi placerat eget. Nulla vestibulum lectus vel eros eleifend
          malesuada. Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor ut in turpis.
        </p>
        <p>
          In nec imperdiet turpis. Suspendisse quis orci ac orci pulvinar eleifend. Nullam vitae quam risus. Integer eget
          sagittis nulla. Praesent consectetur lacus ex mauris eleifend. Integer non lacus eu. Mauris tortor lorem, laoreet
          quis commodo vitae, sodales vel augue.
        </p>

        <div className="services-grid">
          <div className="services-card">
            <h4>Investigations</h4>
            <ul>
              <li>Colonoscopy – $105</li>
              <li>Gastroscopy – $225</li>
              <li>Gastroscopy – $225</li>
              <li>Colonoscopy – $105</li>
              <li>Colonoscopy – $105</li>
              <li>Allergy testing – $355</li>
            </ul>
          </div>
          <div className="services-card">
            <h4>Treatments</h4>
            <ul>
              <li>Colonoscopy – $105</li>
              <li>Gastroscopy – $225</li>
              <li>Gastroscopy – $225</li>
              <li>Colonoscopy – $105</li>
              <li>Colonoscopy – $105</li>
              <li>Allergy testing – $355</li>
            </ul>
          </div>
          <div className="services-card">
            <h4>Our Services</h4>
            <ul>
              <li>Colonoscopy – $105</li>
              <li>Gastroscopy – $225</li>
              <li>Gastroscopy – $225</li>
              <li>Colonoscopy – $105</li>
              <li>Colonoscopy – $105</li>
              <li>Allergy testing – $355</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
