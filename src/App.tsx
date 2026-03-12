import './index.css'

const LINE_URL = 'https://line.me/R/ti/p/@andinfinity'

const coral = '#e8664a'
const pink = '#f2a8bc'
const peach = '#fdd5c0'
const bgAlt = '#fdf6f4'
const textColor = '#2d2d2d'
const muted = '#999'

function App() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", background: '#fff', color: textColor, minHeight: '100vh', position: 'relative' }}>

      {/* ── Background decorations ── */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        {/* Soft blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-100px', width: '520px', height: '520px', borderRadius: '50%', background: 'rgba(242,168,188,0.18)', filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', top: '320px', left: '-130px', width: '460px', height: '460px', borderRadius: '50%', background: 'rgba(253,213,192,0.2)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', top: '750px', right: '-60px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(242,168,188,0.15)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', top: '1250px', left: '8%', width: '360px', height: '360px', borderRadius: '50%', background: 'rgba(253,213,192,0.18)', filter: 'blur(70px)' }} />
        <div style={{ position: 'absolute', top: '1800px', right: '5%', width: '340px', height: '340px', borderRadius: '50%', background: 'rgba(242,168,188,0.15)', filter: 'blur(80px)' }} />

        {/* Small circle dots */}
        <div style={{ position: 'absolute', top: '110px', left: '6%', width: '10px', height: '10px', borderRadius: '50%', background: pink, opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: '75px', right: '13%', width: '7px', height: '7px', borderRadius: '50%', background: peach, opacity: 0.7 }} />
        <div style={{ position: 'absolute', top: '260px', right: '7%', width: '13px', height: '13px', borderRadius: '50%', background: pink, opacity: 0.35 }} />
        <div style={{ position: 'absolute', top: '490px', left: '4%', width: '8px', height: '8px', borderRadius: '50%', background: peach, opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '760px', right: '9%', width: '9px', height: '9px', borderRadius: '50%', background: pink, opacity: 0.45 }} />
        <div style={{ position: 'absolute', top: '1050px', left: '7%', width: '14px', height: '14px', borderRadius: '50%', background: peach, opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: '1350px', right: '5%', width: '8px', height: '8px', borderRadius: '50%', background: pink, opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: '1600px', left: '9%', width: '11px', height: '11px', borderRadius: '50%', background: peach, opacity: 0.45 }} />
        <div style={{ position: 'absolute', top: '1900px', right: '11%', width: '9px', height: '9px', borderRadius: '50%', background: pink, opacity: 0.4 }} />

        {/* Diamond shapes */}
        <div style={{ position: 'absolute', top: '190px', right: '17%', width: '10px', height: '10px', background: peach, opacity: 0.55, transform: 'rotate(45deg)' }} />
        <div style={{ position: 'absolute', top: '580px', left: '8%', width: '8px', height: '8px', background: pink, opacity: 0.4, transform: 'rotate(45deg)' }} />
        <div style={{ position: 'absolute', top: '920px', right: '12%', width: '10px', height: '10px', background: peach, opacity: 0.5, transform: 'rotate(45deg)' }} />
        <div style={{ position: 'absolute', top: '1450px', left: '12%', width: '9px', height: '9px', background: pink, opacity: 0.4, transform: 'rotate(45deg)' }} />
        <div style={{ position: 'absolute', top: '1700px', right: '7%', width: '11px', height: '11px', background: peach, opacity: 0.45, transform: 'rotate(45deg)' }} />

        {/* Small cross marks */}
        <svg style={{ position: 'absolute', top: '340px', right: '14%', opacity: 0.35 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <line x1="7" y1="0" x2="7" y2="14" stroke={pink} strokeWidth="2" strokeLinecap="round"/>
          <line x1="0" y1="7" x2="14" y2="7" stroke={pink} strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <svg style={{ position: 'absolute', top: '870px', left: '5%', opacity: 0.3 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <line x1="7" y1="0" x2="7" y2="14" stroke={peach} strokeWidth="2" strokeLinecap="round"/>
          <line x1="0" y1="7" x2="14" y2="7" stroke={peach} strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <svg style={{ position: 'absolute', top: '1550px', right: '14%', opacity: 0.3 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <line x1="7" y1="0" x2="7" y2="14" stroke={pink} strokeWidth="2" strokeLinecap="round"/>
          <line x1="0" y1="7" x2="14" y2="7" stroke={pink} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Nav */}
        <nav style={{ padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', letterSpacing: '0.05em', color: textColor }}>& Infinity</span>
          <a href={LINE_URL} target="_blank" rel="noreferrer" style={btnFilled}>
            LINEで注文する
          </a>
        </nav>

        {/* Hero */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 32px 80px', textAlign: 'center' }}>
          {/* Checkbox lines */}
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '10px', marginBottom: '40px', textAlign: 'left' }}>
            {[
              'AIを使ったけど思い通りにならない',
              '商品写真の撮影コストをかけたくない',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '20px', height: '20px', border: `2px solid ${pink}`, borderRadius: '4px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: pink, fontSize: '12px', fontWeight: 700 }}>✓</span>
                </span>
                <span style={{ fontSize: '14px', color: '#666' }}>{item}</span>
                {item === '商品写真の撮影コストをかけたくない' && (
                  <span style={{ fontSize: '14px', color: '#666', marginLeft: '4px' }}>あなたへ</span>
                )}
              </div>
            ))}
          </div>

          <h1 style={{ fontSize: 'clamp(30px, 6vw, 52px)', margin: '0 0 32px', lineHeight: 1.35, fontWeight: 700 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1em', color: pink, opacity: 0.5 }}>"</span>
            {' '}マネキン写真を、<br />
            <span style={{ color: coral }}>モデル品質</span>に変える{' '}
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1em', color: pink, opacity: 0.5 }}>"</span>
          </h1>

          <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.9, maxWidth: '480px', margin: '0 auto 40px' }}>
            スマホで撮ったマネキン写真をAIが変換。<br />
            LINEで送るだけで、プロ品質の商品写真に。
          </p>

          <a href={LINE_URL} target="_blank" rel="noreferrer" style={{ ...btnFilled, fontSize: '16px', padding: '16px 44px', borderRadius: '30px' }}>
            LINEで注文する →
          </a>

          {/* Sub badges */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px', marginTop: '32px' }}>
            {[
              { label: '24時間以内に納品', sub: '急ぎの更新にも対応' },
              { label: '写真1枚につき修正対応', sub: 'トライアルは2回、他プランは1回' },
            ].map((b) => (
              <div key={b.label} style={{ textAlign: 'center' }}>
                <p style={{ margin: '0 0 4px', fontSize: '13px', color: coral, fontWeight: 600 }}>✓ {b.label}</p>
                <p style={{ margin: 0, fontSize: '11px', color: muted }}>{b.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 商用利用OK section ── */}
        <section style={{ background: 'linear-gradient(160deg, #fff5f2 0%, #fdf0f8 50%, #fff8f2 100%)', padding: '72px 32px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: pink, marginBottom: '16px', textTransform: 'uppercase', fontWeight: 700 }}>
              Commercial Use
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, margin: '0 0 12px', color: textColor, lineHeight: 1.3 }}>
              すべての写真が<br /><span style={{ color: coral }}>商用利用OK</span>
            </h2>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8, margin: '0 0 48px' }}>
              納品後の著作権は<strong>100%お客様に帰属</strong>します。<br />
              ECサイトからSNS広告まで、どこでも自由にお使いいただけます。
            </p>

            {/* Use cases grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '40px' }}>
              {[
                { icon: '🛒', label: 'ECサイト', sub: '商品ページに即掲載' },
                { icon: '📸', label: 'Instagram', sub: 'フィード・ストーリーズ' },
                { icon: '𝕏', label: 'X（Twitter）', sub: '広告・有機投稿' },
                { icon: '💬', label: 'LINE公式', sub: 'リッチメッセージ' },
                { icon: '📄', label: 'チラシ・DM', sub: '印刷物にも使用可' },
                { icon: '📦', label: 'カタログ', sub: '商品カタログ・冊子' },
              ].map((item) => (
                <div key={item.label} style={{ background: '#fff', borderRadius: '16px', padding: '20px 12px', boxShadow: '0 2px 16px rgba(242,168,188,0.12)', border: '1px solid rgba(242,168,188,0.2)' }}>
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.icon}</div>
                  <p style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 700, color: textColor }}>{item.label}</p>
                  <p style={{ margin: 0, fontSize: '11px', color: muted }}>{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Copyright note */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#fff', border: `1px solid ${peach}`, borderRadius: '30px', padding: '12px 28px' }}>
              <span style={{ fontSize: '18px' }}>©️</span>
              <span style={{ fontSize: '13px', color: '#555' }}>
                著作権は納品と同時にお客様へ移転。再販・転用もご自由に。
              </span>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section style={{ background: bgAlt, padding: '80px 32px' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <p style={{ textAlign: 'center', fontSize: '11px', letterSpacing: '0.2em', color: pink, marginBottom: '12px', textTransform: 'uppercase', fontWeight: 700 }}>
              Before / After
            </p>
            <h2 style={sectionTitle}>こんなに変わります</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '20px', padding: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div>
                      <p style={{ margin: '0 0 8px', fontSize: '11px', color: muted, textAlign: 'center', fontWeight: 600 }}>BEFORE</p>
                      <div style={{ aspectRatio: '3/4', background: '#f5f5f5', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#ccc', fontSize: '12px' }}>準備中</span>
                      </div>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 8px', fontSize: '11px', color: coral, textAlign: 'center', fontWeight: 600 }}>AFTER ✨</p>
                      <div style={{ aspectRatio: '3/4', background: bgAlt, border: `1px solid ${peach}`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#ddd', fontSize: '12px' }}>準備中</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', color: muted, fontSize: '13px', marginTop: '24px' }}>
              ※ 事例写真は順次追加予定
            </p>
          </div>
        </section>

        {/* For whom */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '80px 32px' }}>
          <p style={{ textAlign: 'center', fontSize: '11px', letterSpacing: '0.2em', color: pink, marginBottom: '12px', textTransform: 'uppercase', fontWeight: 700 }}>
            こんな方へ
          </p>
          <h2 style={sectionTitle}>こんなお悩みありませんか？</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'AIで商品写真を作ろうとしたが、思い通りの仕上がりにならなかった',
              '商品写真の質を上げたいが撮影コストをかけたくない',
              'マネキン・ハンガー写真を本格的な商品写真に変えたい',
              'ECの商品ページをすぐにグレードアップしたい',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: bgAlt, borderRadius: '14px', padding: '16px 20px' }}>
                <span style={{ width: '22px', height: '22px', border: `2px solid ${pink}`, borderRadius: '5px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                  <span style={{ color: pink, fontSize: '12px', fontWeight: 700 }}>✓</span>
                </span>
                <p style={{ margin: 0, fontSize: '15px', color: '#555', lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section style={{ background: bgAlt, padding: '80px 32px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ textAlign: 'center', fontSize: '11px', letterSpacing: '0.2em', color: pink, marginBottom: '12px', textTransform: 'uppercase', fontWeight: 700 }}>
              料金
            </p>
            <h2 style={sectionTitle}>料金プラン</h2>

            {/* Campaign banner */}
            <div style={{ background: `linear-gradient(135deg, #fff5f2 0%, #fdf0f8 100%)`, border: `2px solid ${coral}`, borderRadius: '16px', padding: '18px 28px', textAlign: 'center', marginBottom: '40px' }}>
              <p style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 700, color: coral }}>
                🎉 サービス開始記念キャンペーン価格
              </p>
              <p style={{ margin: '0 0 6px', fontSize: '12px', color: '#777' }}>
                通常価格より大幅割引中
              </p>
              <p style={{ margin: 0, fontSize: '12px', color: coral, fontWeight: 600 }}>
                ⚠️ キャンペーンは予告なく終了する場合があります
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(172px, 1fr))', gap: '16px' }}>
              {[
                {
                  name: 'お試し',
                  num: 1, unit: '枚',
                  regularTotal: '¥500', regularPer: '¥500/枚',
                  campaignTotal: '¥300', campaignPer: '¥300/枚',
                  revision: '修正2回 / 枚',
                  badge: 'まずここから', badgeColor: pink,
                },
                {
                  name: 'ライト',
                  num: 5, unit: '枚',
                  regularTotal: '¥1,650', regularPer: '¥330/枚',
                  campaignTotal: '¥1,250', campaignPer: '¥250/枚',
                  revision: '修正1回 / 枚',
                },
                {
                  name: 'スタンダード',
                  num: 20, unit: '枚',
                  regularTotal: '¥6,600', regularPer: '¥330/枚',
                  campaignTotal: '¥3,800', campaignPer: '¥190/枚',
                  revision: '修正1回 / 枚',
                  badge: '人気 No.1', badgeColor: coral, highlight: true,
                },
                {
                  name: 'プレミアム',
                  num: 50, unit: '枚',
                  regularTotal: '¥16,500', regularPer: '¥330/枚',
                  campaignTotal: '¥8,500', campaignPer: '¥170/枚',
                  revision: '修正2回 / 枚',
                },
              ].map((plan) => (
                <div key={plan.name} style={{
                  background: '#fff',
                  border: plan.highlight ? `2px solid ${coral}` : plan.badgeColor === pink ? `2px solid ${pink}` : '1px solid #f0e8e4',
                  borderRadius: '20px',
                  padding: '32px 20px 24px',
                  textAlign: 'center',
                  position: 'relative',
                  boxShadow: plan.highlight ? `0 8px 32px rgba(232,102,74,0.15)` : '0 2px 12px rgba(0,0,0,0.04)',
                }}>
                  {plan.badge && (
                    <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: plan.badgeColor, color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 16px', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                      {plan.badge}
                    </span>
                  )}

                  {/* Plan name */}
                  <p style={{ fontSize: '12px', color: muted, margin: '0 0 10px', fontWeight: 500, letterSpacing: '0.05em' }}>{plan.name}</p>

                  {/* Photo count — big */}
                  <div style={{ margin: '0 0 16px' }}>
                    <span style={{ fontSize: '52px', fontWeight: 700, color: plan.highlight ? coral : plan.badgeColor === pink ? pink : textColor, lineHeight: 1 }}>{plan.num}</span>
                    <span style={{ fontSize: '18px', fontWeight: 700, color: plan.highlight ? coral : plan.badgeColor === pink ? pink : textColor }}>{plan.unit}</span>
                  </div>

                  {/* Regular price */}
                  <p style={{ fontSize: '12px', color: '#bbb', margin: '0 0 2px', textDecoration: 'line-through' }}>{plan.regularTotal}（税込）</p>
                  <p style={{ fontSize: '11px', color: '#d0d0d0', margin: '0 0 8px', textDecoration: 'line-through' }}>{plan.regularPer}</p>

                  {/* Campaign price */}
                  <p style={{ fontSize: '26px', fontWeight: 700, margin: '0 0 4px', color: plan.highlight ? coral : plan.badgeColor === pink ? pink : textColor }}>{plan.campaignTotal}</p>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: plan.highlight ? coral : plan.badgeColor === pink ? pink : '#888', margin: '0 0 12px' }}>
                    {plan.campaignPer}
                  </p>

                  {/* Divider */}
                  <div style={{ borderTop: '1px solid #f5ede9', margin: '0 0 12px' }} />

                  {/* Revision */}
                  <p style={{ fontSize: '11px', color: plan.revision === '修正2回 / 枚' ? pink : '#bbb', margin: 0, fontWeight: plan.revision === '修正2回 / 枚' ? 600 : 400 }}>
                    {plan.revision}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p style={{ textAlign: 'center', fontSize: '12px', color: muted, margin: 0 }}>
                納品仕様：1,024px / JPEG / LINEファイル送信（画質劣化なし）/ <strong style={{ color: coral }}>商用利用可</strong>
              </p>
              <p style={{ textAlign: 'center', fontSize: '12px', color: muted, margin: 0 }}>
                修正は写真1枚につき対応 ／ お試し・プレミアムは2回、ライト・スタンダードは1回
              </p>
              <p style={{ textAlign: 'center', fontSize: '11px', color: '#bbb', margin: 0 }}>
                ※ 表示価格はすべて税込 ／ キャンペーン価格は予告なく終了する場合があります
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '80px 32px' }}>
          <p style={{ textAlign: 'center', fontSize: '11px', letterSpacing: '0.2em', color: pink, marginBottom: '12px', textTransform: 'uppercase', fontWeight: 700 }}>
            ご利用の流れ
          </p>
          <h2 style={sectionTitle}>かんたん4ステップ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { step: '01', title: 'LINEで相談', desc: 'ボタンからアカウントを追加。枚数や仕上がりのご要望をお聞かせください' },
              { step: '02', title: 'お支払い', desc: 'ご確認後、決済リンクをLINEでお送りします。クレジットカード・各種決済対応' },
              { step: '03', title: '写真を送る', desc: 'お支払い完了後、マネキン・ハンガーで撮影した商品写真をLINEに送信' },
              { step: '04', title: '24時間以内に納品', desc: 'AIが処理した高品質な写真をLINEでお届け' },
            ].map((item, idx) => (
              <div key={item.step} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: idx === 3 ? coral : bgAlt, border: `2px solid ${idx === 3 ? coral : peach}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '15px', color: idx === 3 ? '#fff' : coral, fontWeight: 700 }}>{item.step}</span>
                </div>
                <div style={{ paddingTop: '10px' }}>
                  <p style={{ margin: '0 0 6px', fontSize: '16px', fontWeight: 700, color: textColor }}>{item.title}</p>
                  <p style={{ margin: 0, fontSize: '14px', color: '#777', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ background: bgAlt, padding: '80px 32px 100px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: pink, marginBottom: '16px', textTransform: 'uppercase', fontWeight: 700 }}>
            まずは気軽に
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', margin: '0 0 16px', fontWeight: 700, lineHeight: 1.4 }}>
            まずは1枚、試してみてください。
          </h2>
          <p style={{ color: '#888', fontSize: '15px', marginBottom: '40px', lineHeight: 1.8 }}>
            LINEで写真を送るだけ。<br />
            お試し1枚 ¥300から。
          </p>
          <a href={LINE_URL} target="_blank" rel="noreferrer" style={{ ...btnFilled, fontSize: '16px', padding: '18px 52px', borderRadius: '30px' }}>
            LINEで注文する →
          </a>
          <p style={{ fontSize: '12px', color: muted, marginTop: '20px' }}>24時間以内に納品 / 返金保証なし / 修正1回無料</p>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid #f5ede9`, padding: '32px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#bbb' }}>© 2026 & Infinity — AI Product Photography</p>
        </footer>

      </div>
    </div>
  )
}

const btnFilled: React.CSSProperties = {
  background: coral,
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  padding: '12px 24px',
  fontSize: '14px',
  fontWeight: 700,
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',
  letterSpacing: '0.03em',
}

const sectionTitle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '22px',
  fontWeight: 700,
  margin: '0 0 40px',
  color: '#2d2d2d',
}

export default App
