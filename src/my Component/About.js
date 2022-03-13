import React, {useState} from "react";

export default function About() {


    const [myStyle, setmyStyle] = useState({
      color: "black",
      backgroundColor: "white",
      borderRadius: "8px",
    });

    const [btntext, setbtnText] = useState("Enable dark mode")


   const  toggleStyle = () => {
        if (myStyle.color === 'black') {
             setmyStyle({
               color: "white",
               backgroundColor: "black",
               borderRadius: "8px",
             });
             setbtnText("Enable Light Mode")
        }else{
             setmyStyle({
               color: "black",
               backgroundColor: "white",
             });
             setbtnText("Enable Dark Mode");
        }
    }

  return (
    <>
      <div className="my-5">
        <div className="container">
          <h2>About Us</h2>
          <div className="card w-100">
            <div className="card-body" style={myStyle}>
              <h5 className="card-title">You can change your Mode</h5>
              <p className="card-text my-3">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
              <button onClick={toggleStyle} className="btn btn-primary">
                {btntext}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
