import React from 'react'

const RootPage = () => {
  return (
      <div className="flex flex-col gap-[4rem] px-[4rem] pt-[2rem] pb-[12rem] text-center">
          <h3 className="text-[2.8rem] uppercase font-bold">Пользователи сервиса</h3>
          <div className="flex flex-col gap-[2rem] items-center p-[4rem] rounded-x shadow-auth">
              <h3 className="text-[2.2rem] uppercase font-bold">Создание нового аккаунта</h3>
              <div className="flex justify-center items-center gap-[2rem]">
                  <label className="flex justify-center items-center gap-[2rem]">
                      <p className="text-[1.8rem] text-orange">Google Почта</p>
                      <input
                          className="border-[.2rem] border-orange rounded-[1rem] text-[1.6rem]"
                          type="text"
                      />
                  </label>
                  <label className="flex justify-center items-center gap-[2rem]">
                      <p className="text-[1.8rem] text-orange">Пароль</p>
                      <input
                          className="border-[.2rem] border-orange rounded-[1rem] text-[1.6rem]"
                          type="text"
                      />
                  </label>
              </div>
              <button className="text-[2.2rem] uppercase font-bold bg-yellow inline-block py-[.5rem] px-[1.5rem] rounded-xl hover:bg-lemon">
                  Добавить
              </button>
          </div>

          <ul className="flex flex-col gap-[2rem] items-start p-[4rem] rounded-x shadow-auth">
              <li className="inline-flex justify-between items-center gap-[4rem] text-[2rem]">
                  <p className="font-bold text-orange">{1}</p>
                  <p className="font-bold">{'Паевский Олег Олегович'}</p>
                  <p>
                      Общая оценка: 4<span class="icon-star-full text-orange"></span>
                  </p>
              </li>
              <li className="inline-flex justify-between items-center gap-[4rem] text-[2rem]">
                  <p className="font-bold text-orange">{2}</p>
                  <p className="font-bold">{'Бородинов Иван Сергеевич'}</p>
                  <p>
                      Общая оценка: 4<span class="icon-star-full text-orange"></span>
                  </p>
              </li>
              <li className="inline-flex justify-between items-center gap-[4rem] text-[2rem]">
                  <p className="font-bold text-orange">{3}</p>
                  <p className="font-bold">{'Черный Ярослав Андреевич'}</p>
                  <p>
                      Общая оценка: оценки нет
                  </p>
              </li>
              <li className="inline-flex justify-between items-center gap-[4rem] text-[2rem]">
                  <p className="font-bold text-orange">{4}</p>
                  <p className="font-bold">{'Гуденко Антон Степанович'}</p>
                  <p>
                      Общая оценка: оценки нет
                  </p>
              </li>
              <li className="inline-flex justify-between items-center gap-[4rem] text-[2rem]">
                  <p className="font-bold text-orange">{5}</p>
                  <p className="font-bold">{'Иванов Иван Иванович'}</p>
                  <p>
                      Общая оценка: 4<span class="icon-star-full text-orange"></span>
                  </p>
              </li>
          </ul>
      </div>
  );
}

export default RootPage;