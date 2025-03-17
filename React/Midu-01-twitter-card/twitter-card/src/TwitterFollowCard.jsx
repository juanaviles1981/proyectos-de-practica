export function TwitterFollowCard( {userName, name, isFollowing} ) {

    const imageSrc = `https://unavatar.io/twitter/${userName}`;
    return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="Avatar de midudev"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span
            tw-followCard-infoUserName
            className="tw-followCard-infoUserName"
          >
            @{userName}
           
          </span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
