import react from "react";
import "../NewsMain/NewsMain.css";

const NewsMain = () => {
    return (
        <div>
            <main className="container">

<div className="news_wrap">

    <div className="news_main">
        <div className="news_main_item">
            <a href="#" className="news_main_link"></a>
            <div className="picwrapper">
                <div className="news_main_image3"></div>
            </div>
            <div className="news_main_text">
                <div className="news_main_heading">
                    <span>открытое письмо</span>
                </div>
            </div>
        </div>
        <div className="news_main_item">
            <a href="#" className="news_main_link"></a>
            <div className="picwrapper">
                <div className="news_main_image2"></div>
            </div>
            <div className="news_main_text">
                <div className="news_main_heading">
                    <span>открытое письмо</span>
                </div>
                <a href="#" className="news_main_text_title">
                    <h2 className="title_title">
                        Призываем прокуратуру призвать чего-то там
                    </h2>
                    <span className="title_subtitle">
                        Заявление лауреатов
                        Нобелевской премии мира М.С. Горбачева и Д.А. Муратова по поводу ликвидации
                        «Международного
                        Мемориала»
                    </span>
                </a>
                <div className="main_news_info_container">
                    <div className="main_news_info">
                        <div className="info_author">
                            <span>
                                <a href="#" className="author_link">
                                    Додонов Андрей
                                </a>
                            </span>
                            <span className="publication_time">
                                10 часов назад
                            </span>
                        </div>
                    </div>
                    <div className="info_watches">
                        <img src="/style/ic_visibility_grey_24dp.svg" alt="views" className="Types_svg__2kjXU"
                            style={{height: "16px"}}/>
                        <p>7680</p>
                    </div>

                </div>
            </div>

        </div>
        <div className="news_main_item">
            <a href="#" className="news_main_link"></a>
            <div className="picwrapper">
                <div className="news_main_image1">
                </div>
            </div>
            <div className="news_main_text">
                <div className="news_main_heading">
                    <span>открытое письмо</span>
                </div>
            </div>
        </div>
    </div>

</div>
</main>
        </div>
    )
}

export default NewsMain;