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
              <p>Shoutout To:{shoutout.to}</p>
              <p>Shoutout From:{shoutout.from}</p>
              <p>Shoutout:{shoutout.shoutout}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
