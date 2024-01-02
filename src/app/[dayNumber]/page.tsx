"use client";
import { Fragment, useEffect } from "react";
import MyGoogleMap from "../MyGoogleMap";
import "./page.css";
import Td from "./Td";
import { useRouter, usePathname } from "next/navigation";
import LeftSvg from "../assets/arrowLeft.svg";

const schedule1 = [
  { time: "15:30", plan: "나리타 공항 도착" },
  { time: "18:00", plan: "숙소에 짐 풀기" },
  { time: "18:20", plan: "후카이도 라멘" },
  { time: "19:30", plan: "팀랩 플래닛 도쿄" },
  { time: "22:30", plan: "도쿄타워" },
];
const schedule2 = [
  { time: "10:30", plan: "출발" },
  { time: "11:00", plan: "쿠라스시" },
  { time: "12:00", plan: "라포레 하라주쿠" },
  { time: "13:00", plan: "오모테산도 힐즈" },
  { time: "15:00", plan: "마리온 크레페" },
  { time: "15:30", plan: "타케시타 거리" },
  { time: "16:00", plan: "요요기 공원" },
  { time: "16:40", plan: "시부야스카이 전망대" },
  { time: "18:00", plan: "규카츠 시부야점" },
  { time: "20:00", plan: "메가 돈키호테" },
];
const schedule3 = [
  { time: "6:30", plan: "출발" },
  { time: "8:00", plan: "디즈니랜드" },
  { time: "22:00", plan: "지하상가 저녁" },
];
const schedule4 = [
  { time: "10:40", plan: "출발" },
  { time: "11:00", plan: "이세쥬 스키야키" },
  { time: "12:20", plan: "가미나리몬" },
  { time: "12:40", plan: "아사쿠사 멘치카츠,요헤이" },
  { time: "14:00", plan: "센소지" },
  { time: "14:20", plan: "아사쿠사 타코마루, 이모핏피" },
  { time: "~16:00", plan: "공항도착" },
];

type ScheduleItem = {
  time: string;
  plan: string;
};

export default function Page() {
  const router = useRouter();
  let schedule: ScheduleItem[] = [];
  const pathname = usePathname();
  switch (pathname) {
    case "/day1":
      schedule = schedule1;
      break;
    case "/day2":
      schedule = schedule2;
      break;
    case "/day3":
      schedule = schedule3;
      break;
    case "/day4":
      schedule = schedule4;
      break;
  }
  console.log(pathname);
  return (
    <div className="day1wrapper">
      <div
        className="leftSvg"
        onClick={() => {
          router.back();
        }}
      >
        <LeftSvg />
      </div>
      <MyGoogleMap />
      <section className="sectionStyle">
        <p className="pstyle">상세 일정❗️</p>
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-left tl">시간</th>
              <th className="text-left">일정</th>
            </tr>
          </thead>
          <tbody className="table-style">
            {schedule.map((item, index) => (
              <Td key={index} time={item.time} plan={item.plan} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
