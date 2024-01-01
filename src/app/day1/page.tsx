import { Fragment } from "react";
import MyGoogleMap from "../MyGoogleMap";
import "./page.css";

export default function Page() {
  return (
    <div className="day1wrapper">
      <MyGoogleMap />
      <section>
        <p className="pstyle">상세 일정❗️</p>
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-left">시간</th>
              <th className="text-left">일정</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <td className="text-left">15:30</td>
              <td className="text-left">나리타 공항 도착</td>
            </tr>
            <tr>
              <td className="text-left">18:00</td>
              <td className="text-left">숙소에 짐 풀기</td>
            </tr>
            <tr>
              <td className="text-left">18:20</td>
              <td className="text-left">후카이도 라멘</td>
            </tr>
            <tr>
              <td className="text-left">19:30</td>
              <td className="text-left">팀랩 플래닛 도쿄</td>
            </tr>
            <tr>
              <td className="text-left">22:30</td>
              <td className="text-left">도쿄타워</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
