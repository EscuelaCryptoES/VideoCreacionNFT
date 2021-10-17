import React, {Component} from "react";

import { ethers } from "ethers";

import EscuelaCryptoESArtifact from "../contracts/EscuelaCryptoES.json";
import EscuelaCryptoESContract from "../contracts/contract-address-escuelaCryptoES.json";

import { Gallery } from "./Gallery";
import { Loading } from "./Loading";

import "./css/Dapp.css"

export class Dapp extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      art: []
    };

    this.state = this.initialState;
  }

  componentDidMount = async () => {
    this._intializeEthers();
  }

  componentWillUnmount = () => {
    this._resetState();
  }

  render() {
    if(this.state.art.length === 0){
       return <Loading/>
    }
    // If everything is loaded, we render the application.
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-12">
            <h1>
              Art Marketplace
            </h1>
            <p>
            </p>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="mt-3">
            {
              <Gallery
                transferData= {this.state.art}
              />
            }
          </div>
        </div>
      </div>
    );
  }

  

  async _intializeEthers() {

    this._provider = new ethers.providers.Web3Provider(window.ethereum);

    this._escuelaCryptoES = new ethers.Contract(
      EscuelaCryptoESContract.EscuelaCryptoES,
      EscuelaCryptoESArtifact.abi,
      this._provider
    );
    
    // Retrieve NFT info
    const artCount = await this._escuelaCryptoES.artRegistered();

    for(let i = 0; i < artCount; i++){
      const storedData = await this._escuelaCryptoES.tokenURI(i);
      fetch(storedData)
      .then((res) => res.json())
      .then((data) => {
        this.setState(prevState => ({
          art: [
            ...this.state.art,
            data
          ]
        }))
      })
    }
  }

  // This method resets the state
  _resetState() {
    this.setState(this.initialState);
  }
}
