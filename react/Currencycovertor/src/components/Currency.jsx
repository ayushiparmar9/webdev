import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";
import toast from "react-hot-toast";
import axios from "axios";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromAmt, setFromAmt] = useState("");
  const [toAmt, setToAmt] = useState("");
  const Convert = async () => {
    if (!from || !to || !fromAmt) {
      toast.error("somethinggggg");
      return;
    }

    try {
      const res = await axios.get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from
          .split(" ")[0]
          .toLowerCase()}.json`
      );

      setToAmt(
        fromAmt *
          res.data[from.split(" ")[0].toLowerCase()][
            to.split(" ")[0].toLowerCase()
          ]
      );
    } catch (error) {}
  };

  return (
    <>
      <div className="h-screen bg-amber-200 p-5">
        <div className="w-3xl bg-white rounded shadow border p-3 mx-auto">
          <div className="grid grid-cols-2  gap-2">
            <div>
              {from && (
                <img
                  src={`https://flagsapi.com/${from.split(" ")[1]}/flat/48.png`}
                  alt=""
                />
              )}

              <select
                name="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                <option value="">--select Country--</option>
                {CountryData.countries.map((country, idx) => (
                  <option
                    value={country.CurrencyCode + " " + country.CountryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
              </select>
            </div>
            <select
              name="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="">--select Country--</option>
              {CountryData.countries.map((country, idx) => (
                <option
                  value={country.CurrencyCode + " " + country.CountryCode}
                  key={idx}
                >
                  {country.CountryName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="FromAmt">Amount</label>
          <input
            type="text"
            name="fromAmt"
            value={fromAmt}
            onChange={(e) => setFromAmt(e.target.value)}
            className="border rounded p-3 w-full"
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-300 px-4 py-2"
          onClick={Convert}
        >
          Convert
        </button>
        <div className="border" />

        <div>
          <label htmlFor="toAmt">
            onverted Amount : {toAmt ? toAmt : "XXXXXX"}
          </label>
        </div>
        <div className="border" />
      </div>
    </>
  );
};

export default Currency;
