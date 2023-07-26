import "../App.css";
const Form = () => {
  return (
    <div>
      <div className="container formap p-5">
        <div className="row">
          <div className="col-md-6">
            <form action="https://formspree.io/f/mwkdpzyw" method="POST">
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="FirstName"  name="First Name" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control" id="LastName"  name="Last Name" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input type="text" className="form-control" id="EmailAddress" name="Email Address" required />
              </div>
              <textarea id="txtArea" name="Message"></textarea>

              <button className="btn btn-primary">Submit</button>
            </form>
          </div>

          <div className="col-md-6">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="Interactive Map"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=lagos 
           state&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;