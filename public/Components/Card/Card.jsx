import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div>
      {props.ClassicCard && (
        <div className="classic-card-container">
          <div className="classic-card">
            <img src={props.ClassicCard} className="card-img" />
          </div>
          <Link to="#">{props.CardLink}</Link>
        </div>
      )}
      {props.RecomeCard && (
        <div className="recome-card">
          <div className="recome-img-container">
            <img src={props.RecomeCard} className="recome-img" />
          </div>
          <div className="recome-card-main">
            <h1 className="recome-title">{props.Recome}</h1>
            <div className="recome-content">
              <h2 className="recome-features">{props.features}</h2>
              <div className="recome-button">
                <button className="bg-blue-500  hover:bg-blue-600  rounded-lg text-white text-xl w-4auto ml-auto mr-auto p-2 ">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.SoftwareCard && (
        <div className="soft-card-container">
          <img src={props.SoftwareCard} className="soft-img" />
          <button className="bg-blue-500 hover:bg-blue-600  rounded-lg text-white text-xl w-4auto ml-auto mr-auto p-2  flybutton">
            Learn more
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
