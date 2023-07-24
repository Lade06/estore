const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h1 className="text-uppercase">LADEH DELICACIES</h1>

              <p>
                Ladeh Delicacies provides you with varieties of delicious <br />  delicacies at your disposal,
                we offer delivery Nation wide <br /> with affordable price.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              {/* <h5 className="text-uppercase">Links</h5> */}

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Order
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0"></h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={ { backgroundColor: 'rgba(0, 0, 0, 0.2)'} }
        >
        <h4>  © 2023 Copyright 
           Ladeh Delicacies </h4>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
