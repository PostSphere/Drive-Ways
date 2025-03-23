import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCar, faCheck } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-5 bg-light my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading mb-4">How It Works</h2>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="feature-item mb-5 text-center">
              <FontAwesomeIcon icon={faSearch} className="display-3 text-primary mb-4" />
              <h3 className="mb-3">Search</h3>
              <p className="text-muted">Find the perfect car for your trip by browsing through our extensive collection.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-item mb-5 text-center">
              <FontAwesomeIcon icon={faCar} className="display-3 text-success mb-4" />
              <h3 className="mb-3">Choose</h3>
              <p className="text-muted">Select from a wide range of cars that fit your preferences and budget.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-item mb-5 text-center">
              <FontAwesomeIcon icon={faCheck} className="display-3 text-warning mb-4" />
              <h3 className="mb-3">Book</h3>
              <p className="text-muted">Complete the booking process with ease and get ready to drive away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;