
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F6F4] text-[#333] font-sans">
      <header className="text-center p-6 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-[#FF758F]">AZOR IMAGE 台灣版</h1>
        <p className="mt-2 text-base">立即診斷專屬你的色彩！</p>
      </header>

      <main className="p-6 space-y-10">
        <section className="text-center">
          <button className="bg-[#FF9E9E] hover:bg-[#FF6B6B] text-white px-6 py-3 rounded-full text-lg font-medium shadow-md">
            開始AI色彩診斷
          </button>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-[#FF758F] mb-4">我們的功能</h2>
          <ul className="space-y-3">
            <li>✔️ AI智慧分析你的肌膚、眼睛與髮色</li>
            <li>✔️ 根據色彩推薦妝容與穿搭風格</li>
            <li>✔️ 預約一對一專業諮詢</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-[#FF758F] mb-4">風格模擬</h2>
          <p className="mb-4">依據AI診斷結果，呈現專屬風格搭配建議</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FFECEC] p-4 rounded-lg">清新甜美 Look</div>
            <div className="bg-[#FFF4E6] p-4 rounded-lg">自然暖調 Look</div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="text-xl font-semibold text-[#FF758F] mb-2">預約與諮詢</h2>
          <p className="mb-4">透過 LINE 與我們聯絡，立即預約色彩諮詢</p>
          <a
            href="https://line.me/R/ti/p/@azorim"
            className="inline-block bg-[#FFC46B] hover:bg-[#FFB347] text-white px-5 py-2 rounded-full font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            加入 LINE @azorim
          </a>
        </section>
      </main>

      <footer className="text-center text-sm p-6 text-[#999]">
        <p>Instagram: @azorim / @PIBA ｜ 官方網站: www.piba.co.kr</p>
      </footer>
    </div>
  );
}
