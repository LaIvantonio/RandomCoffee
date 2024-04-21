import React from 'react'

const Match = () => {
  return (
      <div className="block mt-[2rem]">
          <div className="block text-center">
              <h2 className="text-[2.2rem] uppercase font-bold bg-yellow inline-block py-[.5rem] px-[1.5rem] rounded-xl">
                  Детали встречи
              </h2>
          </div>

          <div className="flex justify-around items-center gap-[2rem]">
              <div className="flex flex-col items-center flex-1">
                  <p className="text-[6.4rem]">🧑‍💻</p>
              </div>
              <div className="h-[.8rem] bg-lemon flex-grow flex-1"></div>
              <object data="coffee-icon.svg" type="image/svg+xml"></object>
              <p className="text-[6.4rem] font-bold text-orange">+</p>
              <object data="coffee-icon.svg" type="image/svg+xml"></object>
              <div className="h-[.8rem] bg-lemon flex-grow flex-1"></div>
              <div className="flex flex-col items-center flex-1">
                  <p className="text-[6.4rem]">🙋</p>
              </div>
          </div>
          <div className="border-b mt-[2rem]">
              <h3 className="text-[2rem] uppercase font-bold text-center">Анкета собеседника</h3>
              <div className="my-[2rem]">
                  <div className="flex flex-wrap justify-center items-center text-center gap-x-[4rem]">
                      <div className="flex justify-around items-center text-center gap-[1rem]">
                          <span className="text-[1.6rem] uppercase font-bold text-center text-orange">
                              ФИО:
                          </span>
                          <span className="text-[1.6rem] uppercase text-center">
                              {'Иванов Иван Иванович'}
                          </span>
                      </div>
                      <div className="flex justify-around items-center text-center gap-[1rem]">
                          <span className="text-[1.6rem] uppercase font-bold text-center text-orange">
                              Должность:
                          </span>
                          <span className="text-[1.6rem] uppercase text-center">
                              {'HR-менеджер'}
                          </span>
                      </div>
                      <div className="flex justify-around items-center text-center gap-[1rem]">
                          <span className="text-[1.6rem] uppercase font-bold text-center text-orange">
                              Номер телефона:
                          </span>
                          <span className="text-[1.6rem] uppercase text-center">
                              {'+79289009090'}
                          </span>
                      </div>
                      <div className="mt-[2rem]">
                          <span className="text-[1.6rem] uppercase font-bold text-center text-orange block">
                              Увлечения
                          </span>
                          <span className="text-[1.4rem] uppercase text-center block">
                              {
                                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat fuga nostrum accusamus. Quam doloremque veniam itaque illum, ipsam obcaecati.'
                              }
                          </span>
                      </div>
                  </div>
              </div>
          </div>
          <div></div>
          <form className="py-[2rem] mb-[2rem] flex flex-col">
              <div className="py-[1rem]">
                  <h3 className="text-[1.8rem] uppercase font-bold text-center text-orange">
                      Формат встречи
                  </h3>
                  <div className="flex justify-center items-center gap-[2rem]">
                      <label className="flex items-center gap-[.5rem] button-match">
                          <input type="radio" name="formatMeeting" id="online" />
                          <span className="text-[1.6rem] uppercase block">Онлайн</span>
                      </label>
                      <label className="flex items-center gap-[.5rem] button-match">
                          <input type="radio" name="formatMeeting" id="offline" />
                          <span className="text-[1.6rem] uppercase block">Оффлайн</span>
                      </label>
                  </div>
              </div>
              <div className="py-[1rem]">
                  <div>
                      <h3 className="text-[1.8rem] uppercase font-bold text-center text-orange">
                          Дата встречи
                      </h3>
                      <input
                          className="block m-auto text-[1.6rem] uppercase rounded-x border-orange"
                          type="date"
                          name="date"
                      />
                  </div>
                  <div className="py-[1rem]">
                      <h3 className="text-[1.8rem] uppercase font-bold text-center text-orange">
                          Примерное время встречи
                      </h3>
                      <div className="flex justify-center items-center gap-[2rem]">
                          <label className="flex items-center gap-[.5rem] button-match">
                              <input type="radio" name="time" id="postMeridiem" />
                              <span className="text-[1.6rem] uppercase block">
                                  1-я половина дня
                              </span>
                          </label>
                          <label className="flex items-center gap-[.5rem] button-match">
                              <input type="radio" name="time" id="afterMeridiem" />
                              <span className="text-[1.6rem] uppercase block">
                                  2-я половина дня
                              </span>
                          </label>
                      </div>
                  </div>
              </div>
              <button className="text-[2rem] uppercase m-auto font-bold bg-yellow inline-block py-[.5rem] px-[1.5rem] rounded-xl hover:bg-lemon">
                  Сохранить
              </button>
          </form>
      </div>
  );
}

export default Match;