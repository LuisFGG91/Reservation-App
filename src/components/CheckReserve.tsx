import { Link } from "react-router-dom";
import { TypeOfReserve } from "../global";
import { API, graphqlOperation } from "aws-amplify";
import { createReserve } from "../graphql/mutations";
import dayjs from "dayjs";

export const CheckReserve = () => {
  async function addReservation(reservation: TypeOfReserve) {
    try {
      if (
        !reservation.date ||
        !reservation.menu ||
        !reservation.stylistId ||
        !reservation.customerId
      ) {
        console.log("====addTodoできてないよ=====");
        return;
      }
      await API.graphql(
        graphqlOperation(createReserve, { input: reservation })
      );
    } catch (err) {
      console.log("error creating reservation:", err);
    }
  }

  function eventOnClick() {
    const reserve: TypeOfReserve = {
      date: sessionStorage.getItem("start")!,
      menu: sessionStorage.getItem("menu")!,
      stylistId: 2,
      customerId: sessionStorage.getItem("user")!,
    };

    addReservation(reserve);
    const homeLink: HTMLInputElement = document.getElementById(
      "home"
    ) as HTMLInputElement;
    setTimeout(function () {
      homeLink.click();
    }, 500);
  }

  return (
    <div id="check-reserve">
      <h3 className="text-center">Confirmation</h3>
      <table className="table table-striped table-dark ">
        <tbody>
          <tr>
            <td className="text-center">予約日</td>
            <td className="text-center">
              {dayjs(sessionStorage.getItem("start")).format(
                "YY年MM月DD日\nHH時mm分"
              )}
            </td>
          </tr>
          <tr>
            <td className="text-center">メニュー</td>
            <td className="text-center">{sessionStorage.getItem("menu")}</td>
          </tr>
          <tr>
            <td className="text-center">料金</td>
            <td className="text-center">
              {sessionStorage.getItem("amountOfMoney")} 円
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <button className="btn btn-dark" onClick={eventOnClick}>
          予約確定
        </button>
      </div>
      <Link id="home" to={"/"}></Link>
    </div>
  );
};
