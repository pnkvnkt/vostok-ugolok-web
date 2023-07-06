import React from "react";
import style from "./Info.module.css";
import IconAndText from "../assets/IconAndText/IconAndText";

const Info = () => {
  return (
    <section className={style.info}>
      <div className={style.wrapper}>
        <div>
          <h3>Как добраться</h3>
          <div className={style.mapAndContactWrapper}>
            <img className={style.map} src="./images/map.png" alt=""></img>
            <div className={style.contact}>
              <IconAndText
                iconPath="./images/info_geo.svg"
                text="​Монастырская улица, 14"
                color="black"
              />
              <IconAndText
                iconPath="./images/info_clock.svg"
                text="10:00 — 19:00"
                color="black"
              />
              <IconAndText
                iconPath="./images/phone-icon__black.svg"
                text="+7 (965) 566 78 99"
                color="black"
              />
              <IconAndText
                iconPath="./images/tg-icon.svg"
                text="@botboooot"
                color="black"
              />
              {/* <IconAndText
                iconPath="./images/tg-icon.svg"
                text="@botboooot"
                color="black"
              /> */}
            </div>
          </div>
        </div>
        <div className={style.separator}></div>
        <div>
          <h3>Заголовок от Васиного CI #3 (TG)</h3>
          <p>Можно заполнить текстовым контентом по типу “О нас” В мобильной версии эти два блока разворачиваются (каждый на всю ширину)</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
