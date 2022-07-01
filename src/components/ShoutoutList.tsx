import ShoutOut from "../models/shoutoutInterface";
import "./ShoutoutList.css";

interface Props {
  shoutouts: ShoutOut[];
}

export default function ShoutoutList({ shoutouts }: Props) {
  return (
    <div>
      <ul>
        {shoutouts.map((shoutout, index) => {
          return (
            <li className="list" key={index}>
              <p>
                <h3> Shoutout To:{shoutout.to}</h3>
              </p>
              <p>
                <h5>Shoutout From:{shoutout.from}</h5>
              </p>
              <p>
                <h4> Shoutout:{shoutout.shoutout}</h4>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
