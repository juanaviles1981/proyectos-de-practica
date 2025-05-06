import { useState } from "react";

export function TwitterFollowCard({ children, userName = "Desconocido" }) {
  const [isFollowing, setFollowing] = useState(false);

  const imageSrc = `https://unavatar.io/twitter/${userName}`;
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonclassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="Avatar de midudev"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span
            tw-followCard-infoUserName
            className="tw-followCard-infoUserName"
          >
            @{userName}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonclassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
