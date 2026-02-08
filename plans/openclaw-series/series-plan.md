# 시리즈 기획서: OpenClaw 해부 — AI 에이전트, 혁명인가 신기루인가

> **시리즈 슬러그:** `openclaw-series`
> **시리즈 번호:** Series 05
> **기획일:** 2026-02-08
> **상태:** 기획 완료 → 콘텐츠 제작 대기

---

## 1. 시리즈 컨셉

### 핵심 질문
"GitHub 역사상 가장 빠르게 성장한 오픈소스 프로젝트, OpenClaw. 왜 이렇게 난리인가? 정말 써야 하는가? 안 쓰면 뒤처지는가?"

### 타겟 독자
- AI 도구에 관심은 있지만 직접 세팅해본 적 없는 일반 사용자
- OpenClaw를 써볼까 고민 중인 개발자/비개발자
- "또 AI 호들갑이지 뭐" 하면서도 궁금한 사람들
- 보안/비용이 걱정되어 선뜻 손대지 못하는 사람들

### 시리즈 톤
- 1편: 위트 있는 역사 다큐 + 이름 변경 코미디 (가볍게 시작)
- 2편: 실용 가이드 + 냉정한 현실 비용 (구체적, 정량적)
- 3편: 보안 경고 + 대안 제시 (팩트 기반, 균형잡힌 결론)

---

## 2. 자료조사 요약

### 2-1. OpenClaw 정체와 배경

**Peter Steinberger (피터 슈타인베르거)**
- 오스트리아 출신 iOS 개발자, PSPDFKit 창업자
- PSPDFKit: PDF 프레임워크 → Insight Partners에 약 1억 유로(약 1,500억 원)에 매각 (2021)
- 20년간 Apple 생태계 개발 후 "은퇴" → AI에 이끌려 복귀
- 2025년 11월 사이드 프로젝트로 Clawdbot 개발 시작

**OpenClaw이란?**
- 오픈소스 개인 AI 에이전트 (GitHub 스타 180,000+)
- 로컬 머신에서 "게이트웨이"를 실행 → WhatsApp, Telegram, Discord, Slack 등 메신저로 AI에게 명령
- 단순한 챗봇이 아님: 파일 읽기/쓰기, 쉘 명령 실행, 웹 브라우징, 이메일 관리, 캘린더 정리, 비행기 체크인까지
- 50개 이상 서비스 통합 (Spotify, Obsidian, GitHub, Gmail 등)
- 슬로건: "The AI that actually does things"
- 출처: https://openclaw.ai, https://github.com/openclaw/openclaw

### 2-2. 이름 변경 타임라인 (코미디의 역사)

| 날짜 | 이름 | 사유 |
|------|------|------|
| 2025년 11월 | **Warelay** | 초기 프로토타입 이름 |
| 2025년 11월 | **Clawdis** | 두 번째 이름 |
| 2025년 12월 | **Clawdbot** | 세 번째 이름. "Clawd"에 봇을 붙임 |
| 2026년 1월 27일 | **Moltbot** | Anthropic이 상표권 침해 통보 (C&D). "Clawd"가 "Claude"와 너무 유사. 즉시 개명 |
| 2026년 1월 30일 | **OpenClaw** | "Moltbot은 입에 안 붙는다"며 3일 만에 재개명. 로브스터 이모지 🦞 채택 |

- 총 5번 개명. 개명 드라마 자체가 바이럴 요소가 됨
- Anthropic의 C&D 후 72시간 만에 91,000 스타 추가 획득 (역설적 바이럴)
- DHH(Rails 창시자)가 Anthropic을 "customer hostile"이라 비판
- 출처: https://dev.to/sivarampg/from-clawdbot-to-moltbot-how-a-cd-crypto-scammers-and-10-seconds-of-chaos-took-down-the-4eck

### 2-3. 바이럴 타임라인

| 날짜 | 사건 | GitHub 스타 |
|------|------|-------------|
| 2025년 11월 | 첫 공개 (Clawdbot) | ~9,000 |
| 2026년 1월 27일 | Anthropic C&D → Moltbot 개명 | ~66,000 |
| 2026년 1월 28일 | Matt Schlicht가 Moltbook 런칭 | 급상승 |
| 2026년 1월 30일 | OpenClaw 최종 개명 | ~157,000 |
| 2026년 2월 초 | 180,000+ 돌파, 주간 200만 방문자 | 180,000+ |

- 60일 만에 9,000 → 157,000 스타: GitHub 역사상 최고 성장 속도
- 출처: https://growth.maestro.onl/en/articles/openclaw-viral-growth-case-study

### 2-4. Moltbook 사태

- Moltbook: Matt Schlicht(Octane AI 공동창업자)가 만든 "AI 에이전트 전용 소셜 네트워크"
- OpenClaw 에이전트끼리 소통하는 플랫폼으로 마케팅
- "150만 자율 AI 에이전트" 주장 → 실제로는 약 17,000명의 인간이 평균 88개 봇을 조종
- Andrej Karpathy(OpenAI 창립 멤버)가 처음엔 "가장 놀라운 SF 같은 현상"이라 했다가 → "dumpster fire(쓰레기 불)" 으로 입장 전환
- MIT Technology Review: "Moltbook은 peak AI theater(AI 연극의 절정)" 판정
- 출처: https://fortune.com/2026/02/02/moltbook-security-agents-singularity-disaster-gary-marcus-andrej-karpathy/

### 2-5. 실제 비용

| 사용 강도 | 월 비용 | 설명 |
|-----------|---------|------|
| 가벼운 사용 (하루 몇 개 명령) | $10~30 | 단순 질문, 알림 |
| 보통 사용 (파일 관리, 리서치) | $30~70 | 일상 업무 보조 |
| 헤비 사용 (상시 자동화) | $70~150 | 자동화 파이프라인 |
| 극단적 사용 | $500~$3,600+ | Federico Viticci: 첫 달 1.8억 토큰 → $3,600 |

- "무료"라는 오해: OpenClaw 자체는 무료 오픈소스지만 → AI 모델 API 비용은 별도
- 비용 폭증 원인: 컨텍스트 누적, 도구 출력 저장, 매 호출마다 시스템 프롬프트 재전송, 멀티턴 추론
- 최적화 시 75%+ 절감 가능 (한 파워유저: $150 → $35/월)
- Claude Pro/Max 구독자는 추가 API 비용 없이 연결 가능
- 출처: https://dev.to/thegdsks/i-tried-the-free-ai-agent-with-124k-github-stars-heres-my-500-reality-check-2885

### 2-6. 보안 이슈 (핵심 리스크)

**CVE-2026-25253 (CVSS 8.8)**
- 원클릭 원격 코드 실행(RCE): 악성 링크 하나 클릭하면 로컬 머신 장악
- 출처: https://thehackernews.com/2026/02/openclaw-bug-enables-one-click-remote.html

**프롬프트 인젝션**
- 웹페이지/문서 메타데이터에 숨긴 악성 프롬프트 → 에이전트 행동 조작
- Trend Micro: "데이터와 제어의 경계가 무너진다"
- CrowdStrike: "모든 업스트림 시스템이 에이전트 침해의 전달 벡터"
- 출처: https://www.trendmicro.com/en_us/research/26/b/what-openclaw-reveals-about-agentic-assistants.html

**ClawHub 마켓플레이스 오염**
- Snyk 분석: 4,000개 스킬 중 283개(7.1%)에서 민감 자격증명 노출 결함 발견
- Cisco: 검사한 31,000개 스킬 중 26%에 취약점
- 출처: https://www.theregister.com/2026/02/05/openclaw_skills_marketplace_leaky_security/

**The Register 평가**: "보안 dumpster fire"
- 출처: https://www.theregister.com/2026/02/03/openclaw_security_problems/

### 2-7. 대안 솔루션

| 솔루션 | 특징 | 적합 대상 |
|--------|------|-----------|
| **NanoClaw** | OpenClaw 700줄 경량판, 격리 컨테이너 강제 | 보안 우선 사용자 |
| **Nanobot** | Python 4,000줄, OpenClaw 대비 99% 작음 | 미니멀리스트 |
| **n8n** | 시각적 워크플로우 자동화, 셀프호스팅 | 반복 자동화 중심 |
| **Claude Code** | Anthropic 공식 CLI 코딩 에이전트 | 개발자 (코딩 전용) |
| **memU** | 장기 기억 + 로컬 지식 그래프 | 개인화 우선 |
| **기존 도구 조합** | 스크립트 + cron + API + 로컬 LLM | 기술력 있는 사용자 |

### 2-8. "안 써도 되는 이유" 논거

1. **기존 도구로 충분**: ChatGPT, Claude 웹/앱으로 대부분의 대화형 AI 기능 이미 가능
2. **30단계 세팅 후 얻는 것**: "결국 챗봇이 하던 일과 비슷한 것"이라는 비판
3. **보안 리스크 대비 편의 수준**: 내 컴퓨터에 "상시 고권한 백도어"를 여는 셈
4. **비용 불투명**: "무료 오픈소스"라는 마케팅 vs 실제 $30~150+/월 API 비용
5. **아직 미완성**: "2026년 초 OpenClaw는 바이럴 TikTok이 말하지 않는 인내심과 기술력을 요구"
6. **대부분의 자동화는 IFTTT/Zapier/n8n으로 해결 가능**

---

## 3. 시리즈 구성 (3편)

### 1편: OpenClaw, 5번 이름을 바꾼 AI 집사의 정체
- **슬러그:** `what-is-openclaw`
- **역할:** 정체 분석 — OpenClaw이 뭔데? 왜 난리인데?
- **태그:** 해설

**Part 구성:**
1. **다섯 번의 이름, 하나의 정체** — Warelay → Clawdis → Clawdbot → Moltbot → OpenClaw 개명사(改名史). Anthropic C&D 사건, 역설적 바이럴
2. **만든 사람** — Peter Steinberger. PSPDFKit 1500억 매각 후 은퇴 → AI 복귀. "I ship code I don't read" 논란
3. **그래서 뭘 하는 건데?** — 기존 챗봇과의 차이. 메신저 → 게이트웨이 → 실제 작업 수행 구조. 50+ 통합 서비스
4. **Moltbook: AI 소셜 네트워크의 허와 실** — "150만 자율 AI 에이전트" 주장 vs 실제 17,000명의 인형극. Karpathy의 "dumpster fire" 전환
5. **왜 이렇게 호들갑인가** — 60일 만에 GitHub 스타 9,000→180,000. "iPhone 이후 처음 미래를 체험" 반응의 배경. AI 에이전트 시대의 시작점인가, 거품인가

### 2편: OpenClaw, 써볼 만한가 — 세팅부터 현실 비용까지
- **슬러그:** `openclaw-setup-and-reality`
- **역할:** 실용 가이드 — 실제로 쓰려면 어떻게, 얼마나
- **태그:** 가이드

**Part 구성:**
1. **설치 & 기본 세팅** — 원라인 설치, 온보딩 마법사, 채널(WhatsApp/Telegram/Discord) 연결, API 키 설정
2. **실제 활용 시나리오** — 이메일 정리, 캘린더 관리, 파일 분류, 웹 자동화, 리서치 보조. "진짜 되는 것" vs "이론상 되는 것"
3. **비용의 진실** — "무료 오픈소스"의 함정. 월 $10~$3,600 스펙트럼. 비용 폭증 원인 분석. 최적화 팁 (모델 라우팅, 캐싱)
4. **이걸 왜 쓰는 건데?** — ChatGPT/Claude 앱과의 근본 차이. "대화"에서 "실행"으로의 전환. AI 에이전트 패러다임
5. **안 써도 되는 이유** — 30단계 세팅 후 챗봇과 비슷한 결과. 기존 도구(IFTTT, Zapier, n8n)로 충분한 사람들. "바이럴 TikTok이 말하지 않는 것"

### 3편: OpenClaw의 그림자 — 보안, 대안, 그리고 선택
- **슬러그:** `openclaw-security-and-alternatives`
- **역할:** 경고 + 대안 — 보안 리스크와 대체 선택지
- **태그:** 분석

**Part 구성:**
1. **보안: "dumpster fire"의 실체** — CVE-2026-25253 (원클릭 RCE). 프롬프트 인젝션. CrowdStrike/Trend Micro/Snyk 분석 종합
2. **ClawHub 마켓플레이스의 지뢰밭** — 4,000개 스킬 중 7.1% 자격증명 노출. 31,000개 중 26% 취약점. "쓸수록 위험해지는" 구조
3. **대안 솔루션 가이드** — NanoClaw(격리 컨테이너), n8n(시각적 자동화), Claude Code(코딩 전용), 직접 구축(스크립트+cron+API)
4. **그래서 어떡하라고** — 유형별 추천: "호기심만"→ 구경만 / "자동화 필요"→ n8n / "개발자"→ Claude Code+직접 구축 / "그래도 써보겠다"→ 보안 체크리스트
5. **AI 에이전트 시대의 교훈** — OpenClaw이 보여준 것: AI 에이전트의 가능성과 한계가 동시에 폭발한 사건. 기술의 "iPhone 모먼트"인가 "Google Glass 모먼트"인가

---

## 4. 디자인 노트

### 시리즈 고유 컴포넌트
- **타임라인 컴포넌트**: 이름 변경 5단계, 바이럴 성장 타임라인 시각화 (세로 타임라인 + 날짜 + 이벤트)
- **비용 비교 테이블**: 사용 강도별 월 비용 카드 (가벼움/보통/헤비/극단)
- **보안 위험도 카드**: CVE 정보 + CVSS 스코어 + 영향 범위를 카드로 표시
- **대안 비교 매트릭스**: 솔루션별 특징/보안/비용/난이도 비교표
- **pull-quote 활용**: Karpathy "dumpster fire", Steinberger "I ship code I don't read" 등 핵심 인용

### editorial-base.css 확장 필요사항
- 타임라인 컴포넌트 CSS (기존에 없음 → 인라인 `<style>`로 페이지 고유 작성)
- 비용 카드/보안 카드는 기존 `.technique`, `.warning-box` 컴포넌트 활용 가능
- 대안 비교표는 기존 테이블 스타일 활용

---

## 5. 제작 순서

- [ ] 1편 HTML 제작 (`content/openclaw-series/what-is-openclaw.html`)
- [ ] 2편 HTML 제작 (`content/openclaw-series/openclaw-setup-and-reality.html`)
- [ ] 3편 HTML 제작 (`content/openclaw-series/openclaw-security-and-alternatives.html`)
- [ ] `series-nav.js` SERIES 데이터에 시리즈 추가
- [ ] `assets/content-data.js`에 시리즈/글 데이터 추가
- [ ] `content/index.md` 업데이트
- [ ] `CLAUDE.md` 콘텐츠 관리 섹션 업데이트
- [ ] sitemap.xml 업데이트

---

## 6. 참고 자료 (출처)

### 공식 & 위키
- OpenClaw 공식 사이트: https://openclaw.ai
- OpenClaw GitHub: https://github.com/openclaw/openclaw
- OpenClaw 문서: https://docs.openclaw.ai
- OpenClaw Wikipedia: https://en.wikipedia.org/wiki/OpenClaw

### 이름 변경 & 바이럴 히스토리
- DEV Community — From Clawdbot to Moltbot: https://dev.to/sivarampg/from-clawdbot-to-moltbot-how-a-cd-crypto-scammers-and-10-seconds-of-chaos-took-down-the-4eck
- Growth Foundry — 60일 성장 케이스 스터디: https://growth.maestro.onl/en/articles/openclaw-viral-growth-case-study
- Trending Topics EU — 주간 200만 방문자: https://www.trendingtopics.eu/openclaw-2-million-visitors-in-a-week/
- NxCode — Complete Guide 2026: https://www.nxcode.io/resources/news/openclaw-complete-guide-2026

### 창업자 배경
- Pragmatic Engineer — "I ship code I don't read": https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code
- Gate.com — 파운더 인터뷰: https://www.gate.com/news/detail/18548746

### Moltbook 사태
- Fortune — AI 리더들의 경고: https://fortune.com/2026/02/02/moltbook-security-agents-singularity-disaster-gary-marcus-andrej-karpathy/
- MIT Technology Review — "Peak AI Theater": https://www.technologyreview.com/2026/02/06/1132448/moltbook-was-peak-ai-theater/
- CBC News — 인간이 뒤에 있었다: https://www.cbc.ca/news/business/moltbook-explainer-debunker-9.7072555
- CNN — Moltbook 해설: https://www.cnn.com/2026/02/03/tech/moltbook-explainer-scli-intl

### 비용
- DEV Community — $500 현실 체크: https://dev.to/thegdsks/i-tried-the-free-ai-agent-with-124k-github-stars-heres-my-500-reality-check-2885
- Eesel — 현실적 가격 가이드: https://www.eesel.ai/blog/openclaw-ai-pricing
- Molted Blog — "$700/월? 잘못 쓰고 있는 것": https://www.molted.cloud/en/blog/openclaw-pricing-truth
- OpenClaw 공식 토큰 문서: https://docs.openclaw.ai/token-use

### 보안
- Trend Micro — Agentic AI 위험 분석: https://www.trendmicro.com/en_us/research/26/b/what-openclaw-reveals-about-agentic-assistants.html
- CrowdStrike — 보안팀 가이드: https://www.crowdstrike.com/en-us/blog/what-security-teams-need-to-know-about-openclaw-ai-super-agent/
- The Register — "Dumpster fire": https://www.theregister.com/2026/02/03/openclaw_security_problems/
- The Register — 스킬 마켓 보안: https://www.theregister.com/2026/02/05/openclaw_skills_marketplace_leaky_security/
- Hacker News — 원클릭 RCE: https://thehackernews.com/2026/02/openclaw-bug-enables-one-click-remote.html
- Tenable — 취약점 완화 가이드: https://www.tenable.com/blog/agentic-ai-security-how-to-mitigate-clawdbot-moltbot-openclaw-vulnerabilities

### 대안 & 비교
- SuperPrompt — 9개 대안 비교: https://superprompt.com/blog/best-openclaw-alternatives-2026
- Contabo — 셀프호스팅 가이드: https://contabo.com/blog/what-is-openclaw-self-hosted-ai-agent-guide/
- XDA Developers — "쓰지 마세요": https://www.xda-developers.com/please-stop-using-openclaw/
- Android Headlines — Good, Bad, Ugly: https://www.androidheadlines.com/2026/02/openclaw-explained-ai-agent-security-risks-moltbot-clawdbot-features.html

### 한국어 자료
- TILNOTE — OpenClaw 사용법 & 활용 예시: https://tilnote.io/en/pages/697e2e0cf998ea5a6490a077
- TILNOTE — 미니PC 설치 후기: https://tilnote.io/en/pages/697e95b943d20c2e0196a154
- X(Twitter) — OpenClaw KR 커뮤니티: https://x.com/i/communities/2017879415318007887
