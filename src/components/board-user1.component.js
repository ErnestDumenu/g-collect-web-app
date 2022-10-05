import '../card.css';
import React, { useState, useEffect } from "react";
import bin from '../images/garbage.svg';
import truck from '../images/garbage-truck.svg';
import receipts from '../images/receipt.svg';
import settings from '../images/settings.svg';


import UserService from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState("");

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
      <header className="jumbotron">
        <h3>{content.message}</h3>
      </header>
      <div className="row1-container">

        <a href="#" class="card education">
          <div class="overlay"></div>
          <div class="circle">
            <img src={bin} alt="Garbage Bin"></img>
          </div>
          <p>Education</p>
        </a>



        <a href="#" class="card credentialing">
          <div class="overlay"></div>
          <div class="circle">
            <img src={bin} alt="Garbage Bin"></img>
          </div>
          <p>Credentialing</p>
        </a>




        <a href="#" class="card wallet">
          <div class="overlay"></div>
          <div class="circle">

            <img src={bin} alt="Garbage Bin"></img>

          </div>
          <p>Wallet</p>
        </a>










        <a href="#" class="card human-resources">
          <div class="overlay"></div>
          <div class="circle">
            <img src={bin} alt="Garbage Bin"></img>
          </div>
        </a>
        <p>Wallet</p>
        </div>
      </div>
      );
};

      export default BoardUser;
