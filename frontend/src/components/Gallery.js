import React from "react";
import "./css/Dapp.css"

export function Gallery({ transferData }) {
  return (
    <div>
      <div className="row text-center">
        {transferData.map((art,key) => {
          return(
            <div key={key} className="col-md-2">  
              <div className="art">
                {art}
                {/* <img
                src = {`./images/${art}.jpg`}
                alt = {art}
                /> */}
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  );
}
