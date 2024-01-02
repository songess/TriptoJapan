import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <h1>일본 여행✈️</h1>
      <p>도쿄 3박4일!</p>
      <Link href="/day1">
        <button className="btn cyan">1일차 (1/5 Fri)</button>
      </Link>
      <Link href="/day2">
        <button className="btn green">2일차 (1/6 Sat)</button>
      </Link>
      <Link href="/day3">
        <button className="btn purple">3일차 (1/7 Sun)</button>
      </Link>
      <Link href="/day4">
        <button className="btn yellow">4일차 (1/8 Mon)</button>
      </Link>
      <Link href="/ticket">
        <button className="btn blue">티켓 모음</button>
      </Link>
    </main>
  );
}
