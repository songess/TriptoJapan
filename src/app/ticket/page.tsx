import "./page.css";

export default function page() {
  return (
    <div className="twrapper">
      <a
        href="/박채원_시부야스카이.pdf"
        className="button btnFade btnLightBlue"
      >
        시부야스카이_채원
      </a>
      <a href="송은수_시부야스카이.pdf" className="button btnFade btnOrange">
        시부야스카이_은수
      </a>
      <a href="/디즈니.pdf" className="button btnFade btnBlueGreen">
        디즈니
      </a>
      <a
        href="https://teamlabplanets.dmm.com/ko/mytickets/f785265748058c806e"
        className="button btnFade btnPurple"
      >
        팀랩 플래닛 도쿄
      </a>
      <a
        href="https://www.vjw.digital.go.jp/main/#/vjwplo001"
        className="button btnFade btnLightBlue"
      >
        비짓 재팬
      </a>
      <a href="/메트로패스.pdf" className="button btnFade btnBlueGreen">
        메트로패스
      </a>
    </div>
  );
}
