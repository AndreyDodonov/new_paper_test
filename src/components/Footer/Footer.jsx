import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer_root">
            <div className="footer_backy">
                <div className="footer_subscription">
                    <form action="/" method="POST" name="subscription-form" id="subscription-form" className="subscription_wrapper">
                        <h2 className="subscription_title">Подпишитесь на новостную рассылку</h2>
                        <div className="subscription_container">
                            <input type="email" name="subscription-email-input" id="subscription-email-input" placeholder="Введите ваш e-mail" className="subscription_input" required="" value="" />
                            <button type="button" className="subscription_submit"></button>
                        </div>
                    </form>
                </div>

                <div>
                    <div className="footer_columns">
                        <div className="column_root">
                            <h2 className="title_root">Почитать</h2>
                            <ul className="column_list">
                                <li className="column_item"><a href="/">Главная</a></li>
                                <li className="column_item"><a href="/news">Новости</a></li>
                                <li className="column_item"><a href="/inquiries">Расследования</a></li>
                                <li className="column_item"><a href="/stories">Репортажи</a></li>
                                <li className="column_item"><a href="/features">Сюжеты</a></li>
                                <li className="column_item"><a href="/views">Мнения</a></li>
                                <li className="column_item"><a href="https://special.novayagazeta.ru/">Спецпроекты</a></li>
                                <li className="column_item"><a href="/spb"><b>Петербург</b></a></li>
                                <li className="column_item"><a href="/newsletter">Newsletter</a></li>
                            </ul>
                        </div>
                        {/* СОЦСЕТИ */}
                        <div className="сolumn_root">
                            <h2 className="title_root">Соцсети</h2>
                            <ul className="column_list">
                                <li className="column_item"><a href="//www.facebook.com/novgaz/">Facebook</a></li>
                                <li className="column_item"><a href="//twitter.com/novaya_gazeta">Twitter</a></li>
                                <li className="column_item"><a href="//vk.com/novgaz">ВКонтакте</a></li>
                                <li className="column_item"><a href="//www.youtube.com/user/novayagazeta">YouTube</a></li>
                                <li className="column_item"><a href="//ok.ru/novayagazeta">Одноклассники</a></li>
                                <li className="column_item"><a href="//instagram.com/novayagazeta">Instagram</a></li>
                                <li className="column_item"><a href="//tlgg.ru/novaya_pishet">Telegram</a></li>
                                <li className="column_item"><a href="https://www.tiktok.com/@novayagazeta">TikTok</a></li>
                                <li className="column_item"><a href="https://zen.yandex.ru/novayagazeta.ru">Яндекс.Дзен</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;