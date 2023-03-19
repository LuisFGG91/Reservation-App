import { Link } from "react-router-dom";
import "./css/Header.css";
import "./css/FooterNavbar.css";

export const FooterNavbar = () => {
  function onClickButton() {
    if (sessionStorage.getItem("menu") === null) {
      alert("メニューを選択して下さい");
    } else {
      const link: HTMLElement | null = document.getElementById("link");
      if (link) {
        link.click();
      }
    }
  }
  function onClickArButton() {
    window.location.href =
      "https://japan-crew-cut-association.github.io/photoedit-web-js/";
    // const link: HTMLElement | null = document.getElementById("ar");
    // if (link) {
    //   link.click();
    // }
  }

  return (
    <div className="footer_navbar">
      <button
        className="btn btn-dark btn-next"
        onClick={() => onClickArButton()}
      >
        ARで髪型を試す
      </button>

      <button className="btn btn-dark btn-next" onClick={() => onClickButton()}>
        予約時間選択へ
      </button>
      <Link id="link" to={"selecttime/"}></Link>
    </div>
  );
};
