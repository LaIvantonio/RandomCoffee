import React from 'react';
import Link from 'next/link';

const RootPage = () => {
    return (
        <div className="my-[4rem]">
            <div className="block text-center">
                <h2 className="text-[2.2rem] uppercase font-bold bg-yellow inline-block py-[.5rem] px-[1.5rem] rounded-xl">
                    Ваша анкета
                </h2>
            </div>

            <div className="flex justify-center items-start gap-[4rem] my-[2rem]">
                <form className="flex flex-col justify-center items-end my-[2rem] gap-[2rem]">
                    <label className="flex justify-center items-start gap-[2rem]">
                        <span className="text-[1.8rem] text-orange">Должность:</span>
                        <input
                            className="border-[.2rem] border-orange rounded-[1rem] text-[1.6rem]"
                            type="text"
                            name="role"
                            id="role"
                            placeholder="PHP разработчик"
                        />
                    </label>
                    <label className="flex justify-center items-start gap-[2rem]">
                        <span className="text-[1.8rem] text-orange">
                            Номер телефона: <span className="text-black">+7</span>
                        </span>
                        <input
                            className="border-[.2rem] border-orange rounded-[1rem] text-[1.6rem]"
                            type="tel"
                            id="phone"
                            name="phone"
                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                            placeholder="9001001010"
                        />
                    </label>
                    <label className="flex justify-center items-start gap-[2rem]">
                        <span className="text-[1.8rem] text-orange">Интересы:</span>
                        <textarea
                            className="border-[.2rem] border-orange rounded-[1rem] text-[1.6rem]"
                            name="interests"
                            rows="5"
                            id="interests"
                            placeholder="Играю на гитаре..."
                            wrap="off"></textarea>
                    </label>
                    <button className="text-blue text-[2rem] hover:underline">✏️ Изменить</button>
                </form>
                <div className="flex justify-center items-center gap-[2rem]">
                    <p className="text-[8.6rem]">🧑‍💻</p>
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-[2.2rem] font-bold">{'Паевский Олег Олегович'}</p>
                        <p className="text-[2rem]">
                            Общая оценка: {4.8} <span class="icon-star-full text-orange"></span>
                        </p>
                        <Link href="/auth" className="text-blue text-[2rem] hover:underline">
                            Выйти из аккаунта
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="block text-center mb-[2rem]">
                    <h2 className="text-[2.2rem] uppercase font-bold bg-yellow inline-block py-[.5rem] px-[1.5rem] rounded-xl">
                        История встреч
                    </h2>
                </div>

                <div className="flex justify-start items-center flex-wrap">
                    <div className="flex justify-start items-center">
                        <object data="../coffee-icon.svg" type="image/svg+xml"></object>
                        <div className="text-[1.8rem]">
                            <p>Дата: {'10.04.24'}</p>
                            <p>
                                Ваша оценка: 5<span class="icon-star-full text-orange"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RootPage;
