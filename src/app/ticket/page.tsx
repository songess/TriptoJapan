"use client";
import Link from "next/link";
import "./page.css";
import LeftSvg from "../assets/arrowLeft.svg";

export default function page() {
  return (
    <div className="twrapper">
      <Link href="/" className="leftSvg">
        <LeftSvg />
      </Link>
      <a href="/메트로패스.pdf" className="button btnFade btnBlueGreen">
        메트로패스
      </a>
      <a
        href="https://teamlabplanets.dmm.com/ko/mytickets/f785265748058c806e"
        className="button btnFade btnLightBlue"
      >
        팀랩 플래닛 도쿄
      </a>
      <div className="ticktSet">
        <a href="/박채원_시부야스카이.pdf" className="button btnFade btnOrange">
          시부야스카이_채원
        </a>
        <a href="/송은수_시부야스카이.pdf" className="button btnFade btnOrange">
          시부야스카이_은수
        </a>
      </div>
      <div className="ticktSet">
        <a href="/디즈니_채원.pdf" className="button btnFade btnPurple">
          디즈니_채원
        </a>
        <a href="/디즈니_은수.pdf" className="button btnFade btnPurple">
          디즈니_은수
        </a>
      </div>
    </div>
  );
}
