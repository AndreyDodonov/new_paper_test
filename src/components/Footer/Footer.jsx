import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer_root">
            <div className="footer_backy">
                <div className="footer_subscription">
                    <form action="/" method="POST" name="subscription-form" id="subscription-form" class="subscription_wrapper">
                        <h2 class="subscription_title">Подпишитесь на новостную рассылку</h2>
                        <div class="subscription_container">
                            <input type="email" name="subscription-email-input" id="subscription-email-input" placeholder="Введите ваш e-mail" class="subscription_input" required="" value="" />
                            <button type="button" class="subscription_submit"></button>
                        </div>
                    </form>
                </div>

                <div>
                    <div className="footer_columns">
                        <div class="column_root">
                            <h2 class="title_root">Почитать</h2>
                            <ul class="column_list">
                                <li class="column_item"><a href="/">Главная</a></li>
                                <li class="column_item"><a href="/news">Новости</a></li>
                                <li class="column_item"><a href="/inquiries">Расследования</a></li>
                                <li class="column_item"><a href="/stories">Репортажи</a></li>
                                <li class="column_item"><a href="/features">Сюжеты</a></li>
                                <li class="column_item"><a href="/views">Мнения</a></li>
                                <li class="column_item"><a href="https://special.novayagazeta.ru/">Спецпроекты</a></li>
                                <li class="column_item"><a href="/spb"><b>Петербург</b></a></li>
                                <li class="column_item"><a href="/newsletter">Newsletter</a></li>
                            </ul>
                        </div>
                        {/* СОЦСЕТИ */}
                        <div class="сolumn_root">
                            <h2 class="title_root">Соцсети</h2>
                            <ul class="column_list">
                                <li class="column_item"><a href="//www.facebook.com/novgaz/">Facebook</a></li>
                                <li class="column_item"><a href="//twitter.com/novaya_gazeta">Twitter</a></li>
                                <li class="column_item"><a href="//vk.com/novgaz">ВКонтакте</a></li>
                                <li class="column_item"><a href="//www.youtube.com/user/novayagazeta">YouTube</a></li>
                                <li class="column_item"><a href="//ok.ru/novayagazeta">Одноклассники</a></li>
                                <li class="column_item"><a href="//instagram.com/novayagazeta">Instagram</a></li>
                                <li class="column_item"><a href="//tlgg.ru/novaya_pishet">Telegram</a></li>
                                <li class="column_item"><a href="https://www.tiktok.com/@novayagazeta">TikTok</a></li>
                                <li class="column_item"><a href="https://zen.yandex.ru/novayagazeta.ru">Яндекс.Дзен</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;