import { useState } from "react";
import images1 from "../Assets/deli1.jpg";
import images2 from "../Assets/deli2.jpg";
import images3 from "../Assets/deli3.jpg";
import images4 from "../Assets/deli4.jpg";
import images5 from "../Assets/deli5.jpg";
import images6 from "../Assets/deli6.jpg";
// import images7 from "./Assets/deli7.jpg"
import images8 from "../Assets/deli8.jpg";

// const App = () => {
//   const [counter, setCounter] = useState(0); //initial state
//   const handleCount = ()  =>{
//     setCounter(preCounter => preCounter +1)
//   }
// }

const Store = () => {
  
  return (
    
    <div>
      <div className="container text-center mt-5 ">
        <div className="row">
          <div className="col-md-4 pic">
            <img src={images1} alt="" className="img" />
            <p>Delicious Delicacies</p>
            <p>#20,500</p>
            <button type="button" className="btn btn-outline-primary">
              Order Now
            </button>
          </div>
          <div className="col-md-4 pic">
            <img src={images2} alt="" className="img" height="248px" />
            <p>Delicious Delicacies</p>
            <p>#20,500</p>
            <button type="button" className="btn btn-outline-primary">
              Order Now
            </button>
          </div>
          <div className="col-md-4 pic">
            <img src={images3} alt="" className="img" />
            <p>Delicious Delicacies</p>
            <p>#20,500</p>
            <button type="button" className="btn btn-outline-primary">
              Order Now
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 pic">
            <img src={images4} alt="" className="img" />
            <p>Delicious Delicacies</p>
            <p>#20,500</p>
            <button type="button" className="btn btn-outline-primary">
              Order Now
            </button>
          </div>
          <div className="col-md-4 pic">
            <img src={images5} alt="" className="img" height="248px" />
            <p>Delicious Delicacies</p>
            <p>#20,500</p>
            <button type="button" className="btn btn-outline-primary">
              Order Now
            </button>
          </div>
          <div className="col-md-4 pic">
            <img src={images6} alt="" className="img" />
            <p>Delicious Delicacies</p>
            <p>#20,500</p>
            <button type="button" className="btn btn-outline-primary">
              Order Now
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 pic">
            <img src={images1} alt="" className="img" />
            <p>Delicious Delicacies</p>
            <p>#20,500</p>
            <button type="button" className="btn btn-outline-primary">
              Order Now
            </button>
          </div>
          <div className="col-md-4 pic">
            <img src={images8} alt="" className="img" height="248px" />
            <p>Delicious Delicacies</p>
            <p>#20,500</p>
            <button type="button" className="btn btn-outline-primary">
              Order Now
            </button>
          </div>
          <div className="col-md-4 pic">
            <img src={images3} alt="" className="img" />
            <p>Delicious Delicacies</p>
            <p>#20,500</p>
            <button type="button" className="btn btn-outline-primary">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
