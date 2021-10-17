import React from "react";
import "./css/Dapp.css"

export function Gallery({ transferData }) {
  return (
    <div>
      <div className="row text-center">
        {transferData.map((art,key) => {
          return(
            <div key={key} className="col-md-4">  
              <div className="art">
                {
                  <img
                    src = {art.image}
                    alt = {art.name}
                  /> 
                }
                <br />
                <h4>{art.name}</h4>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  );
}
