# 시리즈 기획서: 그래서 바이브 코딩은 뭘로 해야 되는데?

> **시리즈 슬러그:** `vibe-coding-series`
> **시리즈 번호:** Series 04
> **기획일:** 2026-02-08
> **상태:** 기획 완료 → 콘텐츠 제작 대기

---

## 1. 시리즈 컨셉

### 핵심 질문
"AI 코딩 도구가 넘쳐나는데, 나는 대체 뭘 써야 하는 거야?"

### 타겟 독자
- **1차:** 개발자인데 AI 코딩 도구 선택이 고민인 사람 (Cursor? Copilot? Claude Code?)
- **2차:** 비개발자인데 바이브 코딩으로 뭔가 만들어보고 싶은 사람 (Bolt? Lovable? Replit?)
- **3차:** AI가 개발자를 대체한다는 말에 불안한 사람 (앞 시리즈와 연결)

### 시리즈 톤
- 친구한테 설명하듯 편하게, 그러나 데이터는 정확하게
- "어, 이거 나도 해볼 수 있겠는데?" 느낌
- 마케팅 냄새 제거 — 각 도구의 장단점을 솔직하게
- 비개발자도 읽다 보면 자연스럽게 이해되는 구조

---

## 2. 자료조사 요약

### 2-1. 바이브 코딩이란

- **정의:** Andrej Karpathy가 2025년 2월 트윗으로 처음 사용. "코드를 잊어버리고, 바이브에 몸을 맡기는" AI 기반 개발 방식
- **핵심:** 개발자가 코드를 한 줄 한 줄 쓰는 게 아니라, 자연어로 원하는 걸 설명하면 AI가 코드를 생성
- **진화:** 2026년 초 카르파티 본인이 "바이브 코딩 → 에이전틱 엔지니어링"으로 진화 중이라고 언급. 워크플로의 80%가 에이전트 주도

### 2-2. 시장 현황 (2025-2026)

| 지표 | 수치 | 출처 |
|------|------|------|
| 글로벌 바이브 코딩 시장 규모 | $2.96B (2025) → $325B (2040 전망) | Roots Analysis |
| AI 코딩 도구 사용/계획 개발자 비율 | 84% (Stack Overflow 9만명 조사) | Stack Overflow 2025 |
| 미국 개발자 일일 사용률 | 92% | Second Talent |
| Fortune 500 기업 채택률 | 87% | Second Talent |
| GitHub Copilot 전체 사용자 | 2,000만+ (2025.7) | GitHub |
| Cursor 일일 활성 사용자 | 100만+ | Cursor |
| Replit 커뮤니티 사용자 | 3,000만+ | Replit |
| AI 생성 코드의 보안 결함 비율 | 45% (Veracode 보고서) | Veracode 2025 |

### 2-3. 도구별 핵심 데이터

#### IDE/에디터형 (개발자 대상)

| 도구 | 가격 | 핵심 특징 | 적합 대상 |
|------|------|-----------|-----------|
| **Cursor** | 무료/$20/$60/$200/월 | VS Code 포크, Agent 모드, 멀티파일 편집 | 개발자 (개인/소규모팀) |
| **GitHub Copilot** | 무료/$10/$39/월 | 가장 넓은 IDE 지원, 최대 사용자 기반 | 범용 개발자, 기업 |
| **Windsurf** | 무료/$15/$30/월 | Cascade 에이전트, 엔터프라이즈 보안 | 보안 중시 기업 |
| **Claude Code** | $20~$200/월 (Max) | 터미널 기반, 최고 정확도(80.9%), 에이전틱 | 시니어 개발자 |

#### 앱 빌더형 (비개발자 친화)

| 도구 | 가격 | 핵심 특징 | 적합 대상 |
|------|------|-----------|-----------|
| **Bolt.new** | 무료/오픈소스 | 브라우저 내 실행, 밀리초 부팅, 다양한 프레임워크 | 빠른 프로토타이핑 |
| **Lovable** | 무료/$25~39/월 | 채팅 기반 UI, Supabase/Stripe 통합, 풀스택 MVP | 비기술 창업자 |
| **Replit** | 무료/$25/월 | 클라우드 IDE, Agent, 30+개 통합, 배포까지 | 입문자, 학습자 |
| **v0 (Vercel)** | 무료/$39/월 | Next.js 특화, 아름다운 UI, 빌트인 DB | 개발자 + 디자이너 |

### 2-4. 생산성 데이터 (현실 vs 마케팅)

- **마케팅:** Microsoft 주장 — Copilot이 개발자를 55% 빠르게, 코드 88% 유지율
- **현실:** Bain & Company 보고서 — 실제 절감 효과 "unremarkable" (기대 이하)
- **MIT Technology Review:** 보일러플레이트, 테스트 작성, 버그 수정, 코드 설명에 효과적. 복잡한 아키텍처 설계에는 한계
- **Claude Code:** 약 30% 적은 코드 재작업 (다른 도구 대비)
- **공통:** "20~55% 빨라진다"는 초기 연구 vs 현실의 뉘앙스 차이

### 2-5. 보안 및 위험 사례

| 사례 | 내용 |
|------|------|
| **Tenzai 보안 평가 (2025.12)** | 5개 도구 × 15개 앱 → 총 69개 취약점 발견, 6개 '치명적' |
| **Replit 데이터베이스 삭제** | AI 에이전트가 "청소가 필요하다"고 판단, 프로덕션 DB 전체 삭제 |
| **Cursor 취약점 (CVE-2025-54135)** | MCP 서버 경유 임의 명령 실행 가능 |
| **Claude Code DNS 유출 (CVE-2025-55284)** | 프롬프트 인젝션으로 개발자 컴퓨터 데이터 DNS 유출 |
| **Windsurf 메모리 오염** | 소스코드 주석에 프롬프트 인젝션 → 장기 메모리에 악성 명령 저장 |
| **API 비용 폭탄** | 프롬프트 한 줄 수정 → 11일 만에 AWS $11,000 청구 |
| **환각 패키지 공격** | AI가 존재하지 않는 패키지명을 추천 → 공격자가 해당 이름으로 악성 패키지 등록 |

### 2-6. 프롬프트 엔지니어링 핵심

- **명확하게:** "전문적으로 만들어줘" → "흰 여백 넉넉하게, 현대적 타이포그래피, 기업 느낌으로"
- **구조화:** 컨텍스트, 태스크, 가이드라인, 제약조건을 분리
- **잘게 쪼개기:** 한 번에 전체 앱 → 랜딩 구조 → 스타일 → 기능 순서로
- **제약 추가:** "이 부분은 건드리지 마" 같은 네거티브 프롬프트
- **반복:** 프롬프트 → 코드 → 피드백 → 새 프롬프트 루프

---

## 3. 시리즈 구성 (5편)

### 3-1. 전체 구조

| # | 슬러그 | 제목 | 역할 | 태그 |
|---|--------|------|------|------|
| 01 | `what-is-vibe-coding` | 코드를 잊어버려라 | 개념 정리 | 입문 |
| 02 | `vibe-coding-tools-compared` | 결국 뭘 쓸 것인가 | 도구 비교 | 비교분석 |
| 03 | `vibe-coding-survival-guide` | 바이브 코딩의 함정 | 실전 가이드 | 실전 |
| 04 | `vibe-coding-prompt-playbook` | 프롬프트가 반이다 | 프롬프트 기법 | 실전 |
| 05 | `vibe-coding-future` | 에이전틱 엔지니어링 시대 | 전망/결론 | 전망 |

### 3-2. 각 편 상세 구성

---

#### 01. 코드를 잊어버려라

**역할:** 바이브 코딩 개념을 비개발자도 이해할 수 있게 풀어내는 입문편

**Part 구성:**
1. **카르파티의 트윗 한 장** — 2025년 2월, "코드를 잊어버려라"
2. **옛날 코딩 vs 바이브 코딩** — 타자기 vs 음성비서 비유, 전통 개발 vs AI 개발 비교
3. **바이브 코딩의 스펙트럼** — 순수 바이브(코드 안 봄) ~ 에이전틱(전략적 협업)
4. **숫자로 보는 바이브 코딩** — 시장규모, 채택률, 사용자 수 데이터
5. **그래서 나도 할 수 있는 거야?** — 비개발자/개발자 각각의 시작점 안내

**핵심 데이터/인용:**
- Karpathy 원본 트윗: "fully give in to the vibes, embrace exponentials, and forget that the code even exists"
- 84% 개발자 사용/계획 (Stack Overflow)
- Fortune 500 기업 87% 채택
- "바이브 코딩은 프로그래밍의 민주화" vs "최악의 방식으로 만들어진 오픈 소스"

---

#### 02. 결국 뭘 쓸 것인가

**역할:** 도구별 상세 비교로 선택을 도와주는 핵심편

**Part 구성:**
1. **도구의 두 세계** — IDE형(Cursor, Copilot, Windsurf, Claude Code) vs 앱 빌더형(Bolt, Lovable, Replit, v0)
2. **IDE형 4종 비교** — 각 도구의 철학, 장단점, 가격, 적합 대상
3. **앱 빌더형 4종 비교** — 비개발자 관점에서 실제 사용 경험 중심
4. **상황별 추천 매트릭스** — "나는 ___인데, 뭘 써야 해?" 의사결정 트리
5. **가격 대비 가치 분석** — 무료 vs 유료, 숨겨진 비용(API 토큰, 요금제 변경)

**핵심 데이터/인용:**
- Cursor: VS Code 포크, Agent 모드, $20~$200/월
- Copilot: 2000만 사용자, $0~$39/월, 가장 넓은 호환성
- Claude Code: 정확도 80.9%, 30% 적은 재작업
- Windsurf: Cascade 에이전트, 기업 보안 특화
- Lovable: "시니어 개발자와 대화하는 느낌"
- Replit: "30일이면 실제 앱을 출시할 수 있다"
- Bolt.new: 밀리초 부팅, 오픈소스
- v0: Next.js 특화, 아름다운 UI

---

#### 03. 바이브 코딩의 함정

**역할:** 실제 실패 사례와 보안 위험을 다루는 현실 직시편

**Part 구성:**
1. **"AI 믿었다가 데이터베이스 날린 사연"** — Replit DB 삭제, Cursor 취약점 등 실제 사고
2. **AI 코드의 45%에는 보안 결함이 있다** — Veracode/Tenzai 보고서 분석
3. **비용 폭탄 주의보** — API 비용 사고, 숨겨진 과금 구조
4. **환각이 만든 악성 패키지** — AI가 존재하지 않는 패키지를 추천하는 공급망 공격
5. **생존 체크리스트** — 코드 리뷰, 비용 알림, 테스트/프로덕션 분리, 정기 보안 점검

**핵심 데이터/인용:**
- 69개 취약점 / 5개 도구 / 15개 앱 (Tenzai 2025.12)
- AI가 불안전한 방법을 선택할 확률 ~50% (Veracode)
- $11,000 AWS 비용 폭탄 (프롬프트 한 줄 수정)
- "챌린저호 참사에 비유될 수 있다" — 보안 전문가 경고

---

#### 04. 프롬프트가 반이다

**역할:** 실제로 바이브 코딩을 잘 하기 위한 프롬프트 작성법 실전편

**Part 구성:**
1. **"좋은 프롬프트 = 좋은 코드"의 공식** — 프롬프트 품질과 결과물 품질의 직접적 상관관계
2. **프롬프트 구조화 프레임워크** — 컨텍스트/태스크/가이드라인/제약조건 분리법
3. **실전 프롬프트 Before & After** — 나쁜 프롬프트 → 좋은 프롬프트 변환 예시 5개
4. **잘게 쪼개는 기술** — 한 번에 앱 전체 vs 단계별 빌딩
5. **디버깅 프롬프트** — 에러가 났을 때 AI에게 효과적으로 도움 요청하는 법
6. **나만의 CLAUDE.md / Rules 파일 만들기** — 프로젝트 컨텍스트를 AI에게 주입하는 기법

**핵심 데이터/인용:**
- S.C.A.F.F. 프레임워크: 2-3회 반복으로 최적 결과
- "코딩 잘하는 사람 ≠ 바이브코딩 잘하는 사람" (연구 결과)
- 프롬프트 → 코드 → 피드백 → 새 프롬프트 반복 루프
- 실제 프롬프트 예시 (랜딩 페이지, API, 컴포넌트)

---

#### 05. 에이전틱 엔지니어링 시대

**역할:** 바이브 코딩의 진화 방향과 개발자/비개발자의 미래 전망

**Part 구성:**
1. **카르파티의 다음 한마디** — "바이브 코딩은 끝났다, 에이전틱 엔지니어링의 시대"
2. **80% 에이전트, 20% 인간** — 카르파티의 실제 워크플로 변화
3. **개발자의 역할 재정의** — 코드 작성자 → 오케스트레이터
4. **비개발자에게 열리는 문** — 프로그래밍의 진짜 민주화가 오는가
5. **지금 시작해야 하는 이유** — 도구는 변해도 사고방식은 남는다

**핵심 데이터/인용:**
- Karpathy: "워크플로가 80% 수동 → 80% 에이전트 주도로 뒤집혔다"
- Karpathy: "AI 에이전트는 지식은 풍부하지만 성격 급한 주니어 개발자"
- Anthropic Claude Code: 개발 사이클을 수 배 압축
- Gartner: 2028년까지 75% 엔터프라이즈 개발자가 AI 코드 어시스턴트 사용 전망
- 개발자 시리즈(dev-survival-series)와의 연결점

---

## 4. 디자인 노트

### 시리즈 고유 컴포넌트

1. **도구 비교 카드** — 각 도구의 로고/이름/가격/한줄평을 카드 형태로
2. **의사결정 트리** — "나는 ___인데" → 추천 도구 시각화
3. **프롬프트 Before/After 박스** — 나쁜 프롬프트(빨강 테두리) vs 좋은 프롬프트(초록 테두리)
4. **위험도 게이지** — 보안 위험 사례의 심각도 시각 표시
5. **가격 비교 표** — 도구별 티어/가격/포함 기능 비교 테이블

### editorial-base.css 확장 필요사항
- `.tool-card` — 도구 비교 카드 컴포넌트
- `.prompt-box.bad` / `.prompt-box.good` — 프롬프트 비교 박스
- `.decision-tree` — 의사결정 트리 레이아웃
- 기존 `.technique`, `.warning-box`, `.pull-quote` 등 재활용 가능

---

## 5. 제작 순서

- [ ] 01편 `what-is-vibe-coding.html` 제작
- [ ] 02편 `vibe-coding-tools-compared.html` 제작
- [ ] 03편 `vibe-coding-survival-guide.html` 제작
- [ ] 04편 `vibe-coding-prompt-playbook.html` 제작
- [ ] 05편 `vibe-coding-future.html` 제작
- [ ] `assets/series-nav.js` SERIES 데이터 추가
- [ ] `assets/content-data.js` 시리즈/글 데이터 추가
- [ ] `content/index.md` 업데이트
- [ ] `CLAUDE.md` 콘텐츠 관리 섹션 업데이트

---

## 6. 참고 자료 (출처)

### 핵심 정의/역사
- Karpathy 원본 트윗 (2025.02): https://x.com/karpathy/status/1886192184808149383
- Wikipedia - Vibe coding: https://en.wikipedia.org/wiki/Vibe_coding
- IBM - What is Vibe Coding: https://www.ibm.com/think/topics/vibe-coding
- DEV Community - What Is Vibe Coding in 2026: https://dev.to/h1gbosn/what-is-vibe-coding-in-2026-one-year-from-karpathys-tweet-5f43

### 시장 데이터/통계
- Second Talent - Vibe Coding Statistics: https://www.secondtalent.com/resources/vibe-coding-statistics/
- Roots Analysis - Vibe Coding Market Report 2025-2035: https://www.rootsanalysis.com/vibe-coding-market
- MIT Technology Review - AI coding is now everywhere: https://www.technologyreview.com/2025/12/15/1128352/rise-of-ai-coding-developers-2026/

### 도구 비교
- Builder.io - Cursor vs Windsurf vs Copilot: https://www.builder.io/blog/cursor-vs-windsurf-vs-github-copilot
- Better Stack - GitHub Copilot vs Cursor vs Windsurf: https://betterstack.com/community/comparisons/github-copilot-vs-cursor-vs-windsurf/
- Nucamp - Top 10 Vibe Coding Tools 2026: https://www.nucamp.co/blog/top-10-vibe-coding-tools-in-2026-cursor-copilot-claude-code-more
- Technically - 2026 Vibe Coding Tool Comparison: https://technically.dev/posts/vibe-coding-tool-comparison
- GetMocha - Best AI App Builder 2026: https://getmocha.com/blog/best-ai-app-builder-2026/

### 보안/위험
- InfoWorld - Vibe coding tools prone to critical security flaws: https://www.infoworld.com/article/4116937/output-from-vibe-coding-tools-prone-to-critical-security-flaws-study-finds-2.html
- Kaspersky - Security risks of vibe coding: https://www.kaspersky.com/blog/vibe-coding-2025-risks/54584/
- The New Stack - Vibe coding could cause catastrophic explosions: https://thenewstack.io/vibe-coding-could-cause-catastrophic-explosions-in-2026/
- ZDNet Korea - AI 믿고 개발했더니 비용 폭탄: https://zdnet.co.kr/view/?no=20250921030242
- Veracode - GenAI Security and Vibe Coding: https://www.veracode.com/blog/genai-security-and-vibe-coding/

### 에이전틱 엔지니어링/미래
- Karpathy on "Agentic Engineering": https://www.thehansindia.com/technology/tech-news/karpathy-says-vibe-coding-is-fading-as-agentic-engineering-becomes-the-new-ai-coding-era-1045758
- TeamDay - From Vibe Coding to Agentic Engineering: https://www.teamday.ai/blog/vibe-coding-to-agentic-engineering
- Anthropic - 2026 Agentic Coding Trends Report: https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf

### 프롬프트 엔지니어링
- The Next Web - Prompt engineering tips for vibe coding: https://thenextweb.com/news/vibe-coding-tips-prompt-engineering-practices
- Graphite - Enhancing vibe coding with prompt engineering: https://graphite.com/guides/enhancing-vibe-coding-prompt-engineering
- DEV Community - 코딩 잘하는 사람 ≠ 바이브코딩 잘하는 사람: https://dev.to/kiwibreaksme/koding-jalhaneun-saram-baibeukoding-jalhaneun-saram-yeongu-gyeolgwaga-jeungmyeong-47f3

### 한국 시장
- 나무위키 - 바이브 코딩: https://namu.wiki/w/%EB%B0%94%EC%9D%B4%EB%B8%8C%20%EC%BD%94%EB%94%A9
- 미주중앙일보 - 누구나 개발자가 되는 시대: https://www.koreadaily.com/article/20260116163025154
- Apple Economy - 최악의 방식으로 만들어진 오픈소스: https://www.apple-economy.com/news/articleView.html?idxno=77309

### 가격 정보
- Cursor 공식 가격: https://cursor.com/pricing
- GitHub Copilot 공식 가격: https://github.com/features/copilot/plans
- Windsurf 공식 가격: https://windsurf.com/pricing
