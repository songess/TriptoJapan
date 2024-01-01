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
      <button className="btn green">2일차 (1/6 Sat)</button>
      <button className="btn purple">3일차 (1/7 Sun)</button>
      <button className="btn yellow">4일차 (1/5 Mon)</button>
    </main>
  );
}
