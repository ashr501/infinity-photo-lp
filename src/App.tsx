import './index.css'

const LINE_URL = 'https://line.me/R/ti/p/@andinfinity' // ← LINE公式アカウントURLに差し替え

function App() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#0c0c0c', color: '#f0ede8', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{ padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e1e1e' }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', letterSpacing: '0.05em' }}>& Infinity</span>
        <a href={LINE_URL} target="_blank" rel="noreferrer" style={btnStyle}>
          LINEで注文する
        </a>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '100px 32px 80px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.2em', color: '#888', marginBottom: '24px', textTransform: 'uppercase' }}>
          AI Product Photography
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 6vw, 72px)', margin: '0 0 24px', lineHeight: 1.15 }}>
          マネキン写真を、<br />
          モデル品質に。
        </h1>
        <p style={{ fontSize: '17px', color: '#aaa', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 48px' }}>
          スマホで撮ったマネキン写真をAIが変換。<br />
          「生成AIを使ったけど、思い通りにならない」<br />
          そのストレスを解消します。
        </p>
        <a href={LINE_URL} target="_blank" rel="noreferrer" style={{ ...btnStyle, fontSize: '16px', padding: '16px 40px' }}>
          LINEで注文する →
        </a>
      </section>

      {/* Before / After placeholder */}
      <section style={{ background: '#111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: '12px', letterSpacing: '0.2em', color: '#666', marginBottom: '48px', textTransform: 'uppercase' }}>
            Before / After
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div style={placeholderStyle}>
                  <span style={{ color: '#444', fontSize: '12px' }}>BEFORE</span>
                </div>
                <div style={{ ...placeholderStyle, border: '1px solid #2a2a2a' }}>
                  <span style={{ color: '#555', fontSize: '12px' }}>AFTER</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#444', fontSize: '13px', marginTop: '24px' }}>
            ※ 事例写真は順次追加予定
          </p>
        </div>
      </section>

      {/* For whom */}
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 32px' }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.2em', color: '#666', marginBottom: '40px', textTransform: 'uppercase', textAlign: 'center' }}>
          For
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            'AIで商品写真を作ろうとしたが、思い通りの仕上がりにならなかった',
            '商品写真の質を上げたいが撮影コストをかけたくない',
            'マネキン・ハンガー写真を本格的な商品写真に変えたい',
            'ECの商品ページをすぐにグレードアップしたい',
          ].map((text) => (
            <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ color: '#c9a87c', fontSize: '18px', lineHeight: 1, marginTop: '2px' }}>✓</span>
              <p style={{ margin: 0, fontSize: '16px', color: '#ccc', lineHeight: 1.6 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: '#111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', letterSpacing: '0.2em', color: '#666', marginBottom: '8px', textTransform: 'uppercase', textAlign: 'center' }}>
            Pricing
          </p>
          {/* Campaign banner */}
          <div style={{ background: '#1a1500', border: '1px solid #c9a87c', borderRadius: '8px', padding: '14px 24px', textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#c9a87c', fontSize: '13px', letterSpacing: '0.05em' }}>
              🎉 ローンチキャンペーン中 — 通常価格より 40% OFF
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: '1枚', regular: '¥500', price: '¥300', note: 'まず試したい方へ' },
              { label: '10枚パック', regular: '¥4,500', price: '¥2,700', note: '1枚あたり ¥270', highlight: true },
              { label: '月20枚', regular: '¥8,000/月', price: '¥4,800/月', note: 'サブスクリプション' },
            ].map((plan) => (
              <div key={plan.label} style={{
                border: plan.highlight ? '1px solid #c9a87c' : '1px solid #1e1e1e',
                borderRadius: '12px',
                padding: '32px 24px',
                textAlign: 'center',
                position: 'relative',
              }}>
                {plan.highlight && (
                  <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#c9a87c', color: '#0c0c0c', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                    人気
                  </span>
                )}
                <p style={{ fontSize: '13px', color: '#888', marginBottom: '12px', marginTop: 0 }}>{plan.label}</p>
                <p style={{ fontSize: '13px', color: '#444', margin: '0 0 4px', textDecoration: 'line-through' }}>{plan.regular}</p>
                <p style={{ fontSize: '28px', fontWeight: 600, margin: '0 0 8px', color: plan.highlight ? '#c9a87c' : '#f0ede8' }}>{plan.price}</p>
                <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>{plan.note}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#444', marginTop: '24px' }}>
            ※ キャンペーン価格は予告なく終了する場合があります
          </p>
        </div>
      </section>

      {/* Flow */}
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 32px' }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.2em', color: '#666', marginBottom: '48px', textTransform: 'uppercase', textAlign: 'center' }}>
          How it works
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {[
            { step: '01', title: 'LINEで相談', desc: 'ボタンからアカウントを追加。枚数や仕上がりのご要望をお聞かせください' },
            { step: '02', title: 'お支払い', desc: 'ご確認後、決済リンクをLINEでお送りします。クレジットカード・各種決済対応' },
            { step: '03', title: '写真を送る', desc: 'お支払い完了後、マネキン・ハンガーで撮影した商品写真をLINEに送信' },
            { step: '04', title: '24時間以内に納品', desc: 'AIが処理した高品質な写真をLINEでお届け' },
          ].map((item) => (
            <div key={item.step} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', color: '#2a2a2a', lineHeight: 1, minWidth: '48px' }}>{item.step}</span>
              <div>
                <p style={{ margin: '0 0 6px', fontSize: '16px', fontWeight: 500 }}>{item.title}</p>
                <p style={{ margin: 0, fontSize: '14px', color: '#888', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '80px 32px 120px', textAlign: 'center', background: '#0c0c0c' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 48px)', margin: '0 0 16px' }}>
          まずは1枚、試してみてください。
        </h2>
        <p style={{ color: '#888', fontSize: '15px', marginBottom: '40px' }}>LINEで写真を送るだけ。返信不要です。</p>
        <a href={LINE_URL} target="_blank" rel="noreferrer" style={{ ...btnStyle, fontSize: '16px', padding: '18px 48px' }}>
          LINEで注文する →
        </a>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '32px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '12px', color: '#444' }}>© 2026 & Infinity — AI Product Photography</p>
      </footer>

    </div>
  )
}

const btnStyle: React.CSSProperties = {
  background: '#f0ede8',
  color: '#0c0c0c',
  border: 'none',
  borderRadius: '4px',
  padding: '12px 24px',
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',
  letterSpacing: '0.03em',
}

const placeholderStyle: React.CSSProperties = {
  aspectRatio: '3/4',
  background: '#161616',
  border: '1px solid #1a1a1a',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default App
