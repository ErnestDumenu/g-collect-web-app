import '../custom.css';
import React, { useState, useEffect } from "react";
import bin from '../images/garbage.svg';
import truck from '../images/garbage-truck.svg';
import receipts from '../images/receipt.svg';
import Modal from "./modals/request.modal.component";
import Orders from "./modals/receipts.modal.component";


import UserService from "../services/user.service";



const BoardUser = () => {
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <div className="row1-container">
        <button className="box box-down cyan" onClick={() => setIsOpen(true)} >
          <h2>Order Bin</h2>
          <p>Need a Standard Bin?</p>
          <p>Click Here to Order A Standard Bin that will be delivered to your doorstep...</p>
          <img src={bin} alt="Garbage Bin"></img>
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}

        <button className="box red" onClick={() => setIsOpen(true)}>
          <h2>Request Collection</h2>
          <p>Is your Bin full?</p>
          <p>Click Here to Request our Garbage Disposal Service</p>
          <img src={truck} alt="Garbage Truck"></img>
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}

        <button className="box box-down blue" onClick={() => setIsOpen(true)}>
          <h2>View Receipts</h2>
          <p>Click Here to view your receipts from previous requests and Orders </p>
          <img src={receipts} alt="Receipt"></img>
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default BoardUser;
