import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <a
        href="https://www.vjw.digital.go.jp/main/#/vjwplo001"
        className="maina"
      >
        일본 여행✈️
      </a>
      <a href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EB%8F%84%EC%BF%84+%EB%82%A0%EC%94%A8" className="suba">
        도쿄 3박4일! 날씨는..?
      </a>
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
