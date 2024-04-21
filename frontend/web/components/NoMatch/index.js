import React from 'react'

const NoMatch = () => {
  return (
      <div className="flex flex-col items-center">
          <p className="text-[3.2rem] text-center">
              На эту неделю у тебя не запланировано никаких{' '}
              <span className="text-orange">встреч</span>
          </p>
          <object className="w-[20rem]" data="cat-sleep.svg" type="image/svg+xml"></object>
      </div>
  );
}

export default NoMatch;