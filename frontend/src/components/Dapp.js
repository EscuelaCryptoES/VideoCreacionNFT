import React, {Component} from "react";

import { ethers } from "ethers";

import SimpleStorageArtifact from "../contracts/SimpleStorage.json";
import contractAddreSS from "../contracts/contract-address-simplestorage.json";

import { Loading } from "./Loading";
import { Gallery } from "./Gallery";

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

    // If Blockchain connection doesn't works
    if (this.state.art.length === 0) {
      return <Loading />;
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

    this._simpleStorage = new ethers.Contract(
      contractAddreSS.SimpleStorage,
      SimpleStorageArtifact.abi,
      this._provider
    );
    
    // Retrieve NFT info
    //const storedData = await this._simpleStorage.getArt(); 
    this.setState({ 
      art: [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,
        38,39,40,41,42,43,44,45,46,47,48,49,50
      ]
    }) 
    // storedData.toString() });
  }

  // async _transferData(data){
  //   try {
  //     // If a transaction fails, we save that error in the component's state.
  //     // We only save one such error, so before sending a second transaction, we
  //     // clear it.
  //     this._dismissTransactionError();

  //     // We send the transaction, and save its hash in the Dapp's state. This
  //     // way we can indicate that we are waiting for it to be mined.
  //     const tx = await this._simpleStorage.set(data);
  //     this.setState({ txBeingSent: tx.hash });

  //     // We use .wait() to wait for the transaction to be mined. This method
  //     // returns the transaction's receipt.
  //     const receipt = await tx.wait();

  //     // The receipt, contains a status flag, which is 0 to indicate an error.
  //     if (receipt.status === 0) {
  //       // We can't know the exact error that made the transaction fail when it
  //       // was mined, so we throw this generic one.
  //       throw new Error("Transacción fallida");
  //     }

  //     // If we got here, the transaction was successful, so you may want to
  //     // update your state. Here, we update the user's balance.
  //     await this._updateValue();
  //   } catch (error) {
  //     // We check the error code to see if this error was produced because the
  //     // user rejected a tx. If that's the case, we do nothing.
  //     if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
  //       return;
  //     }

  //     // Other errors are logged and stored in the Dapp's state. This is used to
  //     // show them to the user, and for debugging.
  //     console.error(error);
  //     this.setState({ transactionError: error });
  //   } finally {
  //     // If we leave the try/catch, we aren't sending a tx anymore, so we clear
  //     // this part of the state.
  //     this.setState({ txBeingSent: undefined });
  //   }
  // }

  // This method resets the state
  _resetState() {
    this.setState(this.initialState);
  }
}
