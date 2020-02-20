import React from 'react';

export default function Modal ({ isModalOpen, onClick, stream }) {
  const url = `https://player.twitch.tv/?channel=${stream.user_name}&autoplay=false`;
  const streamerUrl = `https://www.twitch.tv/${stream.user_name}`;
  const date = new Date(stream.started_at);
  const startedDate = `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`;
  return (
    <div className={isModalOpen ? 'modal-active modal' : 'modal-hide modal'} onClick={(event) => onClick(event)}>
      <div className='modal-container'>
        <button className='stream-modal-close' onClick={event => onClick(event)}>
          <i className="fas fa-times fa-3x"></i>
        </button>
        <div className='stream-info'>
          <a className='stream-username' href={streamerUrl}>{stream.user_name}</a>
          <div className='stream-details'>
            <div className='stream-title'>{stream.title}</div>
            <div className='stream-date'>
              <p className='stream-date title'>시작 날짜</p>
              <p>{startedDate}</p>
            </div>
            <div className='stream-number-of-viewers'>
              <p className='stream-number-of-viewers title'>시청자 수</p>
              <p>{stream.viewer_count}</p>
            </div>
            <div className='stream-lang'>
              <p className='stream-lang title'>언어</p>
              <p>{stream.language}</p>
            </div>
          </div>
        </div>
        <div className='stream-video'>
          <iframe
              className='stream-iframe'
              title={stream.title}
              src={url}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              allowFullScreen={true}>
          </iframe>
        </div>
      </div>
    </div>
  );
};
