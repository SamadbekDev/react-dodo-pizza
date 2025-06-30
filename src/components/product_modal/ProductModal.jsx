import React from "react";
import CrossImg from '../../assets/images/cross.svg'
import OptionSelect from "./option_select/OptionSelect";

import DeleteIng from '../../assets/images/delete.svg'

const ProductModal = ({ active, setModalActive }) => {
  const closeModal = () => {
    setModalActive(false);
    document.body.style.overflow = "hidden scroll";
  };
  return (
    <>
      <div className={active ? "product_modal active" : "product_modal"}>
        <div className="modal_header">
          <button
            className="modal_close_btn"
            onClick={() => {
              closeModal();
            }}
          >
            <img src={CrossImg} alt="" />
          </button>
        </div>
        <div className="modal_main">
          <div className="modal_left">
            <div className="product_img">
              <div className="img_small active">
                <img
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/0a72035efc5f40459ec312a6cddc9f32_1875x1875.jpeg"
                  alt=""
                />
                <div className="medium_circle"></div>
                <div className="large_circle"></div>
              </div>
              <div className="img_medium ">
                <img
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/cbaea8960cf74534886d295f3450b5d8_1875x1875.jpeg"
                  alt=""
                />
                <div className="large_circle"></div>
              </div>
              <div className="img_large">
                <img
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/00e3eb388c304f4da042bcb19f5759ad_1875x1875.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="modal_right">
            <h2 className="product_title">Пицца "Диабло"</h2>
            <p className="product_modal_desc">
              30&nbsp;см, традиционное тесто, 740 г
            </p>
            <div className="question_ingridients">
              <p>
                <span>красный лук</span>
                <img src={DeleteIng} alt="" className="delete_svg" />,{" "}
                <span>халапеньо консерв</span>
                <img src={DeleteIng} alt="" className="delete_svg" />,{" "}
                <span>сыр моцарелла</span>
                <img src={DeleteIng} alt="" className="delete_svg" />,{" "}
                <span>говядина (фарш)</span>
                <img src={DeleteIng} alt="" className="delete_svg" />,{" "}
                <span>пепперони</span>
                <img src={DeleteIng} alt="" className="delete_svg" />,{" "}
                <span>соус барбекю</span>
                <img src={DeleteIng} alt="" className="delete_svg" />,{" "}
                <span>сладкий перец</span>
                <img src={DeleteIng} alt="" className="delete_svg" />,{" "}
                <span>томаты</span>
                <img src={DeleteIng} alt="" className="delete_svg" />
              </p>
            </div>
            <OptionSelect
              data={["Маленькая", "Средняя", "Большая"]}
            ></OptionSelect>
            <OptionSelect data={["Традиционное", "Тонкое"]}></OptionSelect>

            <div className="add_to_pizza">
              <h3>Добавить в пиццу</h3>
              <div className="add_ingridients">
                <div className="box_ingridients">
                  <img
                    src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA"
                    alt=""
                  />
                  <h2>Острый халапеньо</h2>
                  <span>4&nbsp;000 сум</span>
                </div>
                <div className="box_ingridients">
                  <img
                    src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611EA0840DB86284E"
                    alt=""
                  />
                  <h2>Сыр моцарелла</h2>
                  <span>12&nbsp;000 сум</span>
                </div>
                <div className="box_ingridients">
                  <img
                    src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF50F6026F"
                    alt=""
                  />
                  <h2>Шампиньоны</h2>
                  <span>4&nbsp;000 сум</span>
                </div>
              </div>
              <button className="btn_add_pizza">Добавить в корзину за 89&nbsp;000 сум </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_dark"></div>
    </>
  );
};

export default ProductModal;
