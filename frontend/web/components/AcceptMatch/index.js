import React from 'react'

const AcceptMatch = () => {
  return (
      <div className="fixed top-0 left-0 w-full h-screen bg-notification">
          <div className="bg-white inline-flex flex-col p-[2rem] rounded-xl absolute-center">
              <p className="text-[2.8rem] ">
                  Готов ли ты к <span className="text-orange">встречам</span> на этой неделе? 🙋
              </p>
              <div className="flex justify-around gap-[2rem] my-[2rem]">
                  <label className="flex justify-center items-center gap-[.5rem] button-match flex-1">
                      <input type="radio" name="ready" id="yes" />
                      <p className="text-[2rem]">Готов</p>
                  </label>
                  <label className="flex justify-center items-center gap-[1rem] button-match flex-1">
                      <input type="radio" name="ready" id="no" />
                      <p className="text-[2rem]">Не готов</p>
                  </label>
              </div>
              <textarea
                  className="border-[.2rem] border-orange rounded-xl text-[1.6rem] p-[1rem] mb-[2rem]"
                  name="reason"
                  id="reason"
                  rows="3"
                  placeholder="Причина отказа"
                  wrpa="off"></textarea>
              <button className="text-[2.2rem] uppercase m-auto font-bold bg-yellow inline-block py-[.5rem] px-[1.5rem] rounded-xl hover:bg-lemon">
                  Отправить
              </button>
          </div>
      </div>
  );
}

export default AcceptMatch;