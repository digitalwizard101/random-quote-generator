import React, { useState, useEffect } from "react";
import axios from "axios";
import "../src/App.css";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faHashtag,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const colors = [
    "#fba65b",
    "#9fc695",
    ,
    "#b4ad15",
    "#f5a097",
    "#2c74d4",
    "#685cc9",
    "#238f16",
    "#d2aae",
    "#fad342",
    "#23663f",
    "#c04325",
    "#45c55d",
    "#c5a679",
    "#4943ed",
    "#22a79",
    "#2ee012",
    "#12fb1a",
    "#16069e",
    "#3c522e",
    "#15838b",
    "#8d5fe",
    "#e04cb7",
    "#2e3db5",
    "#101e81",
    "#7a94de",
    "#dbf23a",
    "#37a6cc",
    "#b66e69",
    "#cea92b",
    "#516420",
    "#196dd8",
    "#ed2270",
    "#a9a63c",
    "#3cc4c",
    "#d0461",
    "#62328",
    "#34741c",
    "#6c862e",
    "#651f60",
    "#e3f85e",
    "#c4525",
    "#a9e821",
    "#a8e1bd",
    "#93f3e0",
    "#74d8c",
    "#581fa5",
    "#ced228",
    "#e26b54",
    "#448356",
    "#dff4c2",
    "#c0e243",
    "#3d22b0",
    "#2fc4ff",
    "#b382f2",
    "#cdfd25",
    "#c6764",
    "#c32e85",
    "#fd0f21",
    "#bee44e",
    "#a054b9",
    "#11fcc2",
    "#c5b563",
    "#c2e27a",
    "#221d4a",
    "#5dc0d3",
    "#783a89",
    "#869ac0",
    "#eb8703",
    "#b04adf",
    "#f435e6",
    "#a4162",
    "#791080",
    "#351080",
    "#ce6934",
    "#5cd066",
    "#809529",
    "#cb2981",
    "#6a6293",
    "#b6e3d7",
    "#ca565d",
    "#954a4b",
    "#a1e9a9",

  ];

  let color = Math.floor(Math.random() * colors.length);
  const [colored, setColored] = useState(0);

  let currentQuote = "";
  function getQuote() {
    $.ajax({
      url: "	https://api.adviceslip.com/advice",
      success: function (r) {
        if (typeof r === "string") {
          r = JSON.parse(r);
          console.log(r.slip.advice);
        }
        currentQuote = r.slip.advice;

        $("#text").animate(
          {
            opacity: 0,
          },
          500,
          function () {
            $(this).animate(
              {
                opacity: 1,
              },
              500
            );
            $("#text").text(r.slip.advice);
          }
        );

        let color = Math.floor(Math.random() * colors.length);
        setColored(color);
      },
    });
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div
      className="container-fluid app  "
      style={{ backgroundColor: colors[color] }}
    >
      <div className="row">
        <div
          className="col  p-5 "
          id="quote-box"
          style={{ color: colors[color] }}
        >
          <div>
            <h1 id="text">
              Welcome To Random Quotes <br />
              <FontAwesomeIcon icon={faQuoteLeft} />
            </h1>
          </div>
          <div className="button-box">
            <div className="button-box1">
              <button
                className="btn btn-primary"
                style={{ backgroundColor: colors[color] }}
                onClick={() => getQuote()}
              >
                New Quote
              </button>
            </div>

            <div className=" button-box2">
              <button
                className="btn btn-primary"
                style={{ backgroundColor: colors[color] }}
                id="twitter"
              >
                <a
                  href="https://www.x.com"
                  id="tweet-quote"
                  title="Tweet this quote!"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FontAwesomeIcon icon={faHashtag} /> Twitter
                </a>
              </button>

              <button
                className="btn btn-primary"
                style={{ color: "white", backgroundColor: colors[color] }}
                id="facebook-quote"
              >
                <a
                  href="https://www.facebook.com"
                  id="message-quote"
                  title="message this quote!"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FontAwesomeIcon icon={faMessage} /> Facebook
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
