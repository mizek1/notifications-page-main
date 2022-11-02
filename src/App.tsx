import { useState } from 'react';
import './App.less';
import { Notification, NotificationProps } from './components/Notification';

const Notifications: NotificationProps[] = [
  {
    user: 'Mark Webber',
    userPicture: '/avatar-mark-webber.webp',
    message: 'reacted to your recent post',
    time: '1m ago',
    unread: true,
    link: 'My first tournament today!',
  },
  {
    user: 'Angela Gray',
    userPicture: '/avatar-angela-gray.webp',
    message: 'followed you',
    time: '5m ago',
    unread: true,
  },
  {
    user: 'Jacob Thompson',
    userPicture: '/avatar-jacob-thompson.webp',
    message: 'has joined your group',
    time: '1 day ago',
    unread: true,
    link: 'Chess Club',
  },
  {
    user: 'Rizky Hasanuddin',
    userPicture: '/avatar-rizky-hasanuddin.webp',
    message: 'sent you a private message',
    time: '5 days ago',
    unread: false,
    privateMessage: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
    I'm already having lots of fun and improving my game.`,
  },
  {
    user: 'Kimberly Smith',
    userPicture: '/avatar-kimberly-smith.webp',
    message: 'commented on your picture',
    time: '1 week ago',
    unread: false,
    picture: '/image-chess.webp',
  },
  {
    user: 'Nathan Peterson',
    userPicture: '/avatar-nathan-peterson.webp',
    message: 'reacted to your recent post',
    time: '2 weeks ago',
    unread: false,
    link: '5 end-game strategies to increase your win rate',
  },
  {
    user: 'Anna Kim',
    userPicture: '/avatar-anna-kim.webp',
    message: 'left the group',
    time: '2 weeks ago',
    unread: false,
    link: 'Chess Club',
  },
];

function App() {
  const [notifications, setNotifications] = useState(Notifications);

  function toggleRead() {
    setNotifications(
      notifications.map((notification) => {
        return { ...notification, unread: !notification.unread };
      })
    );
  }

  function markAllAsRead() {
    setNotifications(
      notifications.map((notification) => ({ ...notification, unread: false }))
    );
  }

  return (
    <div className="container">
      <header>
        <h1>
          Notifications
          <span className="counter">
            {
              notifications.filter((notification) => {
                return notification.unread;
              }).length
            }
          </span>
        </h1>
        <nav>
          <button onClick={markAllAsRead}>Mark all as read</button>
        </nav>
      </header>
      <main>
        <ul>
          {notifications.map((notification) => {
            return (
              <Notification
                key={notification.user}
                {...notification}
              ></Notification>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
