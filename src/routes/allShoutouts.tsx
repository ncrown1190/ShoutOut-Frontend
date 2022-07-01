import React, { useEffect, useState } from "react";
import ShoutoutList from "../components/ShoutoutList";
import "./allShoutouts.css";

import ShoutOut from "../models/shoutoutInterface";

import { addShoutout, fetchAllShoutouts } from "../services/shoutoutAPIservice";

export default function AllShoutoutsRoute() {
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>([]);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [textArea, setTextArea] = useState("");

  useEffect(() => {
    fetchAllShoutouts().then((res) => setShoutOuts(res));
  }, [shoutOuts]);

  return (
    <div>
      <ShoutoutList shoutouts={shoutOuts} />

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addShoutout({ to: to, from: from, shoutout: textArea });
          setTo("");
          setFrom("");
          setTextArea("");
        }}
      >
        <h3>Leave a Shout Out</h3>
        <label htmlFor="to">To</label>
        <input
          className="to"
          type="text"
          name="to"
          id="to"
          value={to}
          onChange={(e) => {
            setTo(e.target.value);
          }}
        />

        <label htmlFor="from">
          From
          <input
            type="text"
            name="from"
            id="from"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          />
        </label>

        <label htmlFor="shoutout">Shoutout</label>
        <textarea
          name="shoutout"
          id="shoutout"
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
        />
        <input className="btn" type="submit" value="Submit Shout Out!" />
      </form>
    </div>
  );
}
