export interface NotificationProps {
  user: string;
  userPicture: string;
  message: string;
  time: string;
  unread: boolean;
  link?: string;
  picture?: string;
  privateMessage?: string;
}

export function Notification(props: NotificationProps) {
  const { user, userPicture, message, time, unread } = props;
  return (
    <li className={unread ? 'unread' : ''}>
      <img src={userPicture} alt={user + ' picture'}></img>
      <section>
        <article>
          <h2>
            <a href="#">{user}</a> {message + ' '}
            {props.link && <a href="#">{props.link}</a>}
            {unread && <span className="unread"></span>}
            <span className="time">{time}</span>
          </h2>
          {props.picture && <img src={props.picture} alt="picture"></img>}
        </article>
        {props.privateMessage && <p>{props.privateMessage}</p>}
      </section>
    </li>
  );
}
