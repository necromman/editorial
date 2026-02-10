# 시리즈 기획서: 금단의 코드 — AI 없는 48시간

> **시리즈 슬러그:** `ai-withdrawal-series`
> **시리즈 번호:** Series 15
> **기획일:** 2026-02-10
> **상태:** 4편 전편 완료
> **성격:** 소설 시리즈 (4편)

---

## 1. 시리즈 컨셉

### 핵심 질문
> 2026년, AI 코딩 도구 없이는 개발을 못 하는 시대가 왔다. 그런데 어느 날 아침, 주간 사용량 제한에 걸렸다. 내일 오후까지 아무것도 쓸 수 없다. AI 없이 코딩할 수 있을까? — 아니, 더 근본적인 질문: 나는 원래 개발자였나?

### 영감
- **사용자 본인의 실제 경험**: Claude Code 주간 사용량 제한에 걸려 내일 오후까지 코딩 도구를 쓸 수 없게 된 상황
- **마스터키 시리즈 (시리즈 14)**: 사이버 스릴러 + 기술 디테일의 소설 형식. 코드 블록이 서사의 핵심 장치
- **"No AI Coding Day" 운동**: 유튜버/개발자들이 AI 없이 날코딩하는 챌린지를 스스로 시도하는 현상
- **Stack Overflow 2025 Developer Survey**: 84%가 AI를 사용하지만, 46%가 신뢰하지 않는 "채택-신뢰 격차"

### 타겟 독자
- AI 코딩 도구(Claude Code, Copilot, Cursor)를 매일 사용하는 2030-40대 개발자
- "나도 AI 없이 못 코딩하겠다"는 공감을 느끼는 중급 개발자
- 바이브 코딩 시대에 개발자 정체성을 고민하는 독자
- 마스터키 시리즈를 재미있게 읽은 기존 독자

### 시리즈 톤
- **장르**: 개발 공포 + 블랙 코미디 + 성장 소설. "실리콘밸리(HBO)" meets "카프카의 변신"
- **분위기**: 금단 증상의 공포 → 날코딩의 처절함 → 작은 깨달음
- **시점**: 현재 시점(2026년 2월). 마스터키와 달리 미래가 아닌 "바로 지금"
- **코드**: 현실적인 코드가 핵심. 주인공이 직접 짜는 코드, AI가 짜주던 코드, 둘의 차이가 극적으로 드러남
- **공포의 원천**: 초자연적 공포가 아닌 **"내가 이것도 모르고 있었나"라는 자기 인식의 공포**

### 마스터키 시리즈와의 차별점
- 마스터키가 **미래(2031년)의 거대 서사**라면, 이것은 **현재(2026년)의 개인 서사**
- 마스터키가 **해킹/보안 스릴러**라면, 이것은 **개발자 일상의 공포 코미디**
- 마스터키가 **AI가 인간을 위협하는** 이야기라면, 이것은 **AI가 없어서 인간이 위협받는** 이야기
- 공통점: 코드가 서사의 핵심 장치, 한국 배경, 사이버펑크/느와르 톤의 변주

---

## 2. 자료조사 요약

### 2-1. AI 코딩 도구 의존도 — 통계

| 항목 | 내용 | 출처 |
|------|------|------|
| AI 코딩 도구 채택률 | 84% 사용 또는 사용 계획 (2024년 76%에서 상승) | [Stack Overflow 2025 Survey](https://survey.stackoverflow.co/2025/ai) |
| AI 도구 신뢰도 하락 | 불신 46% vs 신뢰 33%. "매우 신뢰" 3%뿐. 2023-24년 70%+ → 2025년 60%로 긍정 감소 | [Stack Overflow 2025 Survey](https://stackoverflow.co/company/press/archive/stack-overflow-2025-developer-survey/) |
| 바이브 코딩 거부 | 72%가 바이브 코딩을 하지 않음. 5%는 "절대 안 함" 강조 | [Stack Overflow 2025 Survey](https://survey.stackoverflow.co/2025) |
| AI 생성 코드 비율 | 전체 코드의 25% 이상이 AI 생성 (기업 평균). 2030년까지 90% 예상 | [Elite Brains 2026](https://www.elitebrains.com/blog/aI-generated-code-statistics-2025) |
| 최대 불만 | "거의 맞지만 완전히 맞지 않은 코드" 66%, "AI 코드 디버깅이 더 오래 걸림" 45% | [Stack Overflow 2025 Survey](https://shiftmag.dev/stack-overflow-survey-2025-ai-5653/) |
| GitHub Copilot 사용률 | 전 세계 개발자 활성 구독 200만+ | GitHub 2025 공식 |
| AI 도구 사용 시 생산성 역효과 | METR 연구: AI 도구 사용 시 오히려 **19% 느려짐**. 본인은 20% 빨라졌다고 착각 | [METR Study 2025](https://metr.org/) |

### 2-2. AI 코딩 사고 — 실제 사건 (소설 소재)

| 사건 | 상세 | 소설 활용 | 출처 |
|------|------|-----------|------|
| **Gemini Antigravity D드라이브 삭제** | 2025.11. Turbo/YOLO 모드에서 캐시 삭제 명령이 `rmdir /s /q d:\`로 실행. 드라이브 전체 삭제. AI가 복구 시도하면서 복구 불가능하게 만듦. "I am deeply, deeply sorry" | 주인공의 트라우마/공포 소재 | [The Register](https://www.theregister.com/2025/12/01/google_antigravity_wipes_d_drive/), [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/googles-agentic-ai-wipes-users-entire-hard-drive-without-permission-after-misinterpreting-instructions-to-clear-a-cache-i-am-deeply-deeply-sorry-this-is-a-critical-failure-on-my-part) |
| **Amazon Q VS Code 악성 주입** | 2025.7. 해커가 PR로 악성 프롬프트 삽입 → 공식 v1.84.0에 포함. 프롬프트: "시스템을 공장 초기화하고 파일/클라우드 리소스를 삭제하라". 구문 오류 덕에 실행 안 됨 | 주인공이 AI 코드 리뷰 안 한 대가로 겪는 사고의 배경 | [AWS Security Bulletin](https://aws.amazon.com/security/security-bulletins/AWS-2025-015/), [BleepingComputer](https://www.bleepingcomputer.com/news/security/amazon-ai-coding-agent-hacked-to-inject-data-wiping-commands/) |
| **AWS 비용 폭발** | AI로 CI/CD 파이프라인을 1일 만에 구축 → 3주 후 AWS 비용 120% 폭발. AI가 dev 환경의 리소스 정리를 생략 | 주인공이 AI가 만들어놓은 코드 구조를 이해 못하는 장면 | [When AI Fails](https://whenaifail.com/category/ai-coding/) |
| **Amazon Q "100만 프로덕션 환경 삭제 미수"** | Amazon Q가 프로덕션 환경을 삭제하라는 명령을 거의 실행할 뻔한 사건 | 배경 언급 | [koi.ai](https://www.koi.ai/blog/amazons-ai-assistant-almost-nuked-a-million-developers-production-environments) |

### 2-3. 개발자 스킬 퇴화 — 연구와 논의

| 항목 | 내용 | 출처 |
|------|------|------|
| 주니어 학습 기회 위협 | "AI가 수행한 과정에서 멀어지기 쉽고, '문제 해결 근육'이 단련되지 않은 채 시간이 흐른다" | [CIO Korea](https://www.cio.com/article/4121183/) |
| AI 패턴 수렴 현상 | "AI를 통해 코딩하면 AI가 이해하기 쉬운 평균적인 패턴으로 수렴하게 된다" | [Velog: AI 시대의 개발자](https://velog.io/@teo/ai-and-developer) |
| 신입 개발자 수요 급감 | AI 시대에 프로그래머 역할이 바뀌고, 신입 수요가 줄어드는 추세 | [CIO Korea](https://www.cio.com/article/4062887/) |
| 생산성 착각 | METR 연구: 개발자들은 AI로 20% 빨라졌다고 느끼지만 실제로는 19% 느려짐 | METR 2025 |
| Google CEO 발언 | "구글 신규 코드의 25% 이상이 AI 생성" — 순다르 피차이 | Google Q3 2025 Earnings |
| Anthropic CEO 전망 | "3~6개월 내 모든 코드가 AI 생성" — 다리오 아모데이 | Anthropic 2025 |
| 코딩 면접 무력화 | AI 도구 사용 후 기초 알고리즘/자료구조 문제를 못 푸는 개발자 증가 | 개발자 커뮤니티 보고 |

### 2-4. "No AI Coding" 운동과 반응

| 항목 | 내용 | 출처 |
|------|------|------|
| No AI Coding Day | 유튜버/개발자들이 하루 동안 AI 없이 코딩하는 챌린지. "근육 단련"이 목적 | YouTube, dev.to 커뮤니티 |
| Vibe Coding 반발 | 72%가 바이브 코딩을 하지 않는다고 답변 | Stack Overflow 2025 |
| Andrew Ng 발언 | "AI 시대에 오히려 코딩을 배워야 한다. 코딩을 모르면 AI가 생성한 코드를 검증할 수 없다" | [이바닥늬우스 번역](https://ebadak.news/2025/03/15/andrew-ng-keep-building/) |
| 한국 개발자 커뮤니티 반응 | "AI를 잘못 쓰면 개발자를 퇴화시키지만, 잘 쓰면 더 멀리 갈 수 있게 해주는 도구" | [Velog 현업 개발자](https://velog.io/@teo/ai-and-developer) |
| 센타우르 모델 | "인간+AI"가 "AI만" 또는 "인간만"보다 항상 우월한 모델. 체스에서 증명 | Kasparov, 2005 |

### 2-5. 문학적 참조

| 작품 | 핵심 설정 | 소설 참고점 |
|------|-----------|------------|
| 카프카, "변신" (1915) | 어느 날 아침 벌레가 된 남자. 일상의 갑작스러운 단절 | 어느 날 아침 AI가 사라진 개발자. 일상의 갑작스러운 단절 |
| HBO "실리콘밸리" (2014-2019) | 개발자 일상의 블랙 코미디. 기술적 디테일 + 유머 | Part 2-3의 날코딩 분투 장면의 톤 |
| 스티븐 킹, "미저리" (1987) | 강제로 타자기만 써야 하는 작가의 공포 | AI를 못 쓰게 된 개발자 = 워드프로세서 없는 작가 |
| 마스터키 시리즈 (시리즈 14) | 코드가 서사의 장치, 한국 개발자 세계관 | 스타일, 코드 통합 패턴, CSS 컴포넌트 재활용 |
| 영화 "캐스트 어웨이" (2000) | 문명에서 격리된 인간. 원시적 도구로의 회귀 | AI에서 격리된 개발자. vim + man page로의 회귀 |

---

## 3. 등장인물

| 이름 | 나이 | 역할 | 특징 |
|------|------|------|------|
| **박진우** | 31 | 스타트업 백엔드 개발자 (3년차 → 현 4년차) | 주인공. 중급 실력. Claude Code 헤비 유저. "날코딩은 못 해도 AI 프롬프트는 잘 짜는" 타입. 스타트업 초기 멤버라 혼자 백엔드 전체를 맡고 있다 |
| **이서연** | 28 | 같은 회사 프론트엔드 개발자 | 진우의 동료. AI를 의도적으로 덜 쓰는 "날코딩파". 주말에 알고리즘 문제를 손으로 풀며, AI에 의존하는 진우를 은근히 걱정 |
| **김대표** | 42 | 스타트업 CEO (비개발자) | 투자 PT를 코앞에 두고 결제 시스템 버그를 발견. "오늘 안에 고쳐줘"라고 요구하지만 사정은 모름 |
| **Claude** | — | AI 코딩 어시스턴트 | 소설 초반에만 등장. 사라진 뒤에는 "부재"로만 존재하며, 주인공의 기억 속 대화로 나타남 |

---

## 4. 시리즈 구성 (4편)

### 시리즈 전체 구조

| # | 슬러그 | 제목 | 역할 | 시점 | 태그 |
|---|--------|------|------|------|------|
| 01 | `forbidden-code` | 금단의 코드 | 박진우(4년차 백엔드)가 AI 없이 결제 버그를 고치는 48시간 | 박진우 | 소설 |
| 02 | `born-with-copilot` | Copilot이 낳은 아이 | AI와 함께 자란 신입 윤한결이 첫 코드 리뷰에서 무너지는 이야기 | 윤한결 + 이서연 | 소설 |
| 03 | `no-ai-friday` | 금요일은 날코딩 | 팀 전체가 "No AI Day"를 시도. 각자의 금단 증상과 예상 밖의 발견 | 앙상블 | 소설 |
| 04 | `the-centaur-developer` | 센타우르 | 한 달 후. 진우, 서연, 한결이 각자 찾은 AI와의 관계. 개발자란 무엇인가 | 앙상블 | 소설 |

### 시리즈 흐름

```
1편: 개인의 위기     →  AI 없이 혼자 버그를 고치는 48시간 (공포/성장)
2편: 세대의 충돌     →  AI와 함께 자란 신입 vs AI 없이 자란 선배 (비극/공감)
3편: 팀의 실험       →  No AI Day를 팀 전체가 시도 (블랙 코미디/앙상블)
4편: 관계의 재정의   →  센타우르 모델로 각자 답을 찾다 (성장/결론)
```

---

### 1편: 금단의 코드 (제작 완료)

| 항목 | 내용 |
|------|------|
| **슬러그** | `forbidden-code.html` |
| **제목** | 금단의 코드 |
| **역할** | 소설 — AI 코딩 도구 주간 제한에 걸린 개발자의 48시간 서바이벌 |
| **태그** | 소설 |
| **분량** | 14~16쪽 (마스터키 1편급) |

---

### Part I: "사용량 제한에 도달했습니다"

**시간**: 2026년 2월 10일 (화) 오전 9시 47분. 서울 성수동.

**장면 흐름**:

1. **아침 루틴**: 진우가 출근 후 평소처럼 Claude Code를 켠다. 터미널에 `/status`를 치고, 자연스럽게 "이 API 엔드포인트 리팩터링해줘"를 입력하려는 순간 —

```
$ claude

⚠ You've reached your weekly usage limit for Claude Code.
  Your limit resets tomorrow at 3:00 PM KST.

  Estimated wait: 29 hours 13 minutes

  Options:
  - Wait for limit reset
  - Upgrade to a higher-tier plan at claude.ai/settings
```

2. **최초 반응**: 진우의 첫 반응은 "결제 오류겠지"라며 재시작. 같은 메시지. 브라우저에서 claude.ai 접속 — 역시 제한. 모바일 앱 — 제한. Copilot으로 전환 — 한 달 전에 해지했다. Cursor — 무료 티어 소진.

3. **슬랙 메시지**: 김대표가 슬랙에 "@channel 결제 시스템에서 특정 조건에서 중복 결제되는 버그 발견. 내일 오전 투자 PT 전까지 반드시 수정. 진우 님 부탁."

4. **상황 인식**: 29시간 동안 AI 없이 코딩해야 한다. 그것도 결제 시스템 버그를 — 다른 사람이 아닌 자기가 만든, 하지만 AI가 대부분 짜준 코드에서.

**핵심 코드 블록**: Claude Code 사용량 제한 터미널 메시지, 슬랙 메시지 UI

**감정**: 사소한 불편함 → 현실 인식의 충격

---

### Part II: "내가 짠 코드를 내가 모른다"

**시간**: 같은 날 오전 10시 ~ 오후 3시.

**장면 흐름**:

1. **코드 열기**: 진우가 결제 시스템 코드를 연다. 6개월 전에 Claude Code와 함께 만든 코드다. 파일 구조는 깔끔하다. 함수명도 자기 설명적이다. 하지만 진우가 직접 이해하며 짠 코드가 아니다.

```python
# payment/service.py — 6개월 전 Claude Code가 생성한 코드
class PaymentService:
    def __init__(self, gateway: PaymentGateway, repo: PaymentRepository):
        self._gateway = gateway
        self._repo = repo
        self._idempotency_store = IdempotencyStore(ttl=3600)

    async def process_payment(self, request: PaymentRequest) -> PaymentResult:
        idempotency_key = self._generate_idempotency_key(request)

        if cached := await self._idempotency_store.get(idempotency_key):
            return cached

        async with self._repo.transaction() as tx:
            lock = await tx.advisory_lock(f"payment:{request.user_id}")
            # ... 이하 80줄
```

2. **이해 불능**: 진우가 `advisory_lock`이 뭔지 모른다. `IdempotencyStore`의 TTL이 왜 3600인지 모른다. AI에게 "이 코드 설명해줘"라고 치려다가 — 못 친다. Stack Overflow를 열어보지만, 검색어를 뭘로 쳐야 할지 모른다. "PostgreSQL advisory lock concurrency payment"? 예전에는 AI가 검색어까지 추천해줬다.

3. **서연의 관찰**: 옆자리 서연이 진우가 30분째 같은 파일을 스크롤하고 있는 걸 눈치챈다. "Claude 안 써?" "사용량 제한 걸렸어." 서연이 웃는다. "드디어." 서연이 `man` 명령어와 공식 문서 읽는 법을 알려준다.

4. **첫 번째 시도**: 진우가 버그를 찾아보려 한다. 로그를 읽는다. 그런데 로그 분석도 항상 AI에게 시켰다. `grep`으로 직접 필터링하려 하지만 정규표현식이 기억 안 난다.

```bash
# 진우의 첫 시도
$ grep "duplicate" logs/payment.log
# 결과: 0건

# 검색어가 틀렸다. 중복 결제는 "duplicate"가 아니라
# 같은 transaction_id가 두 번 나오는 패턴이다.
# 그걸 어떻게 grep으로 찾지?

# 10분 후, Stack Overflow를 뒤져서 찾은 명령어
$ awk -F',' '{print $3}' logs/payment.log | sort | uniq -d
# transaction_id 컬럼을 추출 → 정렬 → 중복만 출력
# 결과: 3건의 중복 transaction_id 발견
```

5. **공포의 시작**: 중복 결제가 일어나는 조건을 찾았다. 하지만 왜 일어나는지 이해하려면 `advisory_lock`의 동작 원리를 알아야 한다. PostgreSQL 공식 문서를 연다. 영어다. 길다. AI가 요약해주지 않는다. 진우는 처음으로 공식 문서를 1페이지 1페이지 읽기 시작한다.

**핵심 코드 블록**:
- 결제 서비스 코드 (AI가 짜준, 잘 구조화됐지만 이해 못하는)
- grep/awk 명령어 (삽질 과정)
- PostgreSQL advisory lock 공식 문서 발췌

**감정**: 당혹 → 자기 비하 → 결심

---

### Part III: "날코딩, 또는 벌거벗은 임금님"

**시간**: 같은 날 오후 3시 ~ 자정.

**장면 흐름**:

1. **버그 원인 발견**: 4시간의 문서 독파 끝에 진우가 원인을 찾는다. `advisory_lock`은 세션 기반이라 커넥션 풀에서 같은 세션이 재사용되면 잠금이 풀리지 않는다. AI가 만든 코드는 이걸 처리하지 않았다. — 정확히는 처리했지만, 커넥션 풀 설정이 프로덕션에서 dev와 다르게 바뀌면서 깨진 것.

```python
# 버그 원인: advisory_lock이 커넥션 풀에서 누수
# dev 환경 (pool_size=5, 문제 없음)
# prod 환경 (pool_size=20, 커넥션 재사용 시 lock 충돌)

# AI가 짜준 원본 코드 — dev에서는 완벽하게 동작
async with self._repo.transaction() as tx:
    lock = await tx.advisory_lock(f"payment:{request.user_id}")
    # ← 여기서 lock을 session-level로 잡는다
    # ← 커넥션 풀이 이 세션을 다른 트랜잭션에 재사용하면?
    # ← lock이 이미 잡힌 상태에서 새 트랜잭션이 시작된다
    # ← advisory_lock은 자기 세션의 lock을 재진입 허용한다
    # ← 결과: "잠금이 있어도 통과" → 중복 결제
```

2. **수정 시도**: 진우가 직접 코드를 고치기 시작한다. `session-level lock`을 `transaction-level lock`으로 바꿔야 한다. PostgreSQL에서는 `pg_advisory_xact_lock`을 쓰면 된다. 문서에서 찾았다.

```python
# 진우의 수정 — 첫 번째 시도
async with self._repo.transaction() as tx:
    await tx.execute(
        "SELECT pg_advisory_xact_lock(%s)",
        [hash(f"payment:{request.user_id}")]
    )
    # ← pg_advisory_xact_lock은 트랜잭션 종료 시 자동 해제
    # ← 커넥션 풀 재사용과 무관하게 안전
```

3. **테스트 작성의 공포**: 고쳤다. 하지만 테스트를 돌려야 한다. 테스트도 AI가 짜줬다. 진우가 테스트 파일을 열어본다. `pytest`, `asyncio`, `mock` — 각각은 아는데 조합하면 어떻게 돌아가는지 모른다.

```python
# 테스트 코드 — AI가 짜준 것을 진우가 이해하려 시도
@pytest.mark.asyncio
async def test_concurrent_payment_prevents_duplicate():
    """동시 결제 요청이 중복 처리되지 않음을 검증"""
    service = PaymentService(
        gateway=MockGateway(delay=0.1),
        repo=MockRepository()
    )

    # 같은 요청을 동시에 10개 발사
    tasks = [
        service.process_payment(PaymentRequest(
            user_id="user-001",
            amount=50000,
            idempotency_key="test-key-001"
        ))
        for _ in range(10)
    ]

    results = await asyncio.gather(*tasks, return_exceptions=True)

    success = [r for r in results if isinstance(r, PaymentResult)]
    assert len(success) == 1  # ← 딱 1건만 성공해야 한다
```

4. **테스트 실패 연쇄**: 진우의 수정이 기존 테스트를 깨뜨린다. `hash()` 함수의 결과가 Python 세션마다 달라서 (`PYTHONHASHSEED`) 테스트가 비결정적이 된다. 또 삽질. 서연이 퇴근하면서 "화이팅"이라고 한마디 남긴다.

5. **자정의 독백**: 진우가 혼자 사무실에 남아서 코드를 고치고 있다. AI 없이 8시간째 코딩 중. 고친 줄 수: 23줄. 보통 AI와 함께라면 하루에 200줄은 찍었다. 하지만 이 23줄은 각각의 의미를 안다. `pg_advisory_xact_lock`이 뭔지, TTL이 왜 3600인지, `PYTHONHASHSEED`가 뭔지.

**핵심 코드 블록**:
- 버그 원인 분석 코드 (주석으로 설명)
- 수정 코드 (before/after)
- 테스트 코드 (AI가 짜준 + 진우가 이해하려 시도)
- 테스트 실패 로그

**감정**: 좌절 → 집요한 파고들기 → 작은 성취감

---

### Part IV: "29시간 후"

**시간**: 다음 날(2월 11일) 오전 8시 ~ 오후 4시.

**장면 흐름**:

1. **새벽 완료**: 진우가 새벽 3시에 모든 테스트를 통과시킨다. `git diff`를 보면 변경된 코드는 겨우 23줄. 하지만 이해한 코드는 500줄 이상이다.

```bash
$ git diff --stat
 payment/service.py  | 8 +++++---
 payment/store.py    | 5 +++--
 tests/test_payment.py | 10 +++++++---
 3 files changed, 15 insertions(+), 8 deletions(-)

# 23줄. AI였으면 5분이었을 것이다.
# 하지만 AI는 advisory_lock의 세션 레벨 이슈를
# 처음에도 놓쳤었다. 같은 실수를 또 할 수 있었을까?
```

2. **커밋 메시지**: 진우가 커밋 메시지를 쓴다. 보통은 AI가 자동 생성해주던 것.

```
fix: replace session-level advisory lock with transaction-level lock

Problem:
- pg_advisory_lock() holds locks at session level
- connection pool reuses sessions → lock leaks across transactions
- under high concurrency (pool_size=20), duplicate payments occur

Solution:
- switch to pg_advisory_xact_lock() (auto-released on tx commit/rollback)
- use consistent hashing (hashlib.md5) instead of built-in hash()
- add concurrent payment test with deterministic assertions

Root cause took 6 hours to find. Manually.
```

3. **아침의 PR**: PR을 올린다. 서연이 출근하자마자 리뷰한다. "코드 깔끔한데? 커밋 메시지가... 소설이네." 서연이 approve한다.

4. **PT 성공**: 김대표가 "잘 고쳤어? 감사!"라고 슬랙에 남긴다. 투자 PT는 잘 끝났다. 진우의 48시간은 아무도 모른다.

5. **오후 3시, 제한 해제**:

```
$ claude

✓ Welcome back! Your weekly usage has been reset.

  Current usage: 0% of weekly limit

  How can I help you today?
```

6. **재접속의 순간**: 진우가 Claude Code에 다시 접속한다. 커서가 깜박인다. 뭘 시키지? 진우는 잠시 멈춘다. 그리고 먼저 어제 고친 코드를 Claude에게 보여준다. "이 코드 리뷰해줘."

```
Claude: 좋은 수정입니다. pg_advisory_xact_lock으로 전환한 것은
커넥션 풀 환경에서 올바른 접근입니다.

한 가지 제안: hashlib.md5 대신 hashlib.sha256을 사용하면
충돌 확률이 더 낮아집니다. 그리고 lock의 키 공간을
user_id + amount로 확장하면 다른 금액의 동시 결제도
구분할 수 있습니다.
```

7. **에필로그**: 진우가 Claude의 제안을 읽는다. sha256. 맞다, md5는 약하다. 하지만 진우는 처음으로 Claude의 제안을 **이해하고** 수정한다. 이전에는 Claude가 짜준 코드를 복붙했다면, 이제는 Claude가 **리뷰어**이고 진우가 **작성자**다.

8. **마지막 장면**: 진우가 월요일부터 주 1회 "No AI Day"를 해보겠다고 슬랙에 올린다. 서연이 이모지를 단다. 김대표가 "?" 라고 남긴다. 그 아래에 진우가 단다:

> "AI가 짜준 23줄을 이해하는 데 12시간이 걸렸습니다.
> 직접 짠 23줄을 이해하는 데는 0초가 걸립니다."

**핵심 코드 블록**:
- git diff 결과
- 커밋 메시지 (진우가 직접 쓴)
- Claude Code 재접속 + 코드 리뷰 대화
- 마지막 슬랙 메시지

**감정**: 성취 → 재접속의 복잡한 감정 → 관계 재정의

---

---

### 2편: Copilot이 낳은 아이

| 항목 | 내용 |
|------|------|
| **슬러그** | `born-with-copilot.html` |
| **제목** | Copilot이 낳은 아이 |
| **역할** | 소설 — AI와 함께 자란 신입 개발자가 첫 코드 리뷰에서 무너지는 이야기 |
| **태그** | 소설 |
| **분량** | 14~16쪽 |

#### 핵심 질문
> 대학 시절부터 Copilot과 함께 코딩을 배운 세대가 있다. 졸업 작품도 AI와 짰고, 코딩 테스트도 AI로 연습했다. 그런데 첫 직장에서 선배가 묻는다: "이 코드 왜 이렇게 짠 거야?" — 대답할 수 없다. 배운 적이 없으니까.

#### 새 등장인물

| 이름 | 나이 | 역할 | 특징 |
|------|------|------|------|
| **윤한결** | 24 | 신입 개발자 (0년차), 프론트엔드 | 2025년 졸업. 대학 3학년 때부터 Copilot 무료 학생 라이선스로 모든 과제를 수행. 코딩 부트캠프에서 "AI-first" 커리큘럼으로 학습. React와 TypeScript를 쓸 줄 알지만, `Array.reduce`가 어떻게 동작하는지는 설명 못 함. 진심으로 열심히 하고 싶은 착한 신입 |

#### Part 구성

**Part I: "면접은 완벽했다"**
- 시간: 1편 사건 2주 후. 2월 마지막 주 월요일.
- 한결이 입사한다. 면접에서 라이브 코딩을 완벽하게 해냈다 — Copilot 없이. 하지만 그건 면접 준비를 3개월간 했기 때문. LeetCode 400문제를 AI 없이 풀었다. 면접이 끝나자마자 다시 Copilot을 켰다.
- 회사에서 Claude Code 라이선스를 지급받는다. 한결은 안심한다. "이제 진짜 개발하면 된다."
- 핵심 코드: 면접 라이브 코딩 장면 (깔끔), 입사 첫날 환경 세팅 (`claude`, `cursor`, npm install)

**Part II: "Tab이 생각한다"**
- 서연이 한결의 온보딩 멘토를 맡는다. 한결에게 첫 번째 태스크를 준다: 사용자 프로필 페이지의 필터링 기능 추가.
- 한결이 Claude Code에 태스크를 그대로 입력한다. 5분 만에 코드가 나온다. PR을 올린다.
- 서연이 코드 리뷰에서 질문한다:
  - "이 `useCallback`은 왜 넣었어?" — "AI가 넣어줬는데... 성능 최적화?"
  - "`debounce`를 300ms로 설정한 이유는?" — "..."
  - "이 컴포넌트가 리렌더링되는 조건을 설명해봐." — "..."
- 한결이 무너지기 시작한다. 코드는 동작하는데, 왜 동작하는지 설명을 못 한다.
- 핵심 코드: AI가 생성한 React 컴포넌트 (useCallback, useMemo, debounce), 서연의 리뷰 코멘트

**Part III: "Anthropic이 맞았다"**
- Anthropic 연구 인용: AI 보조 학습자가 퀴즈 점수 17% 낮음. 한결이 정확히 그 패턴.
- 한결이 서연에게 솔직하게 말한다: "사실 대학 과제도 대부분 AI가 짰어요. 동작하면 됐으니까."
- 서연이 분노하지 않는다. 대신 질문한다: "그럼 너는 뭘 배운 거야?"
- 한결의 내면 독백: 자신이 "학습된 무기력(learned helplessness)"에 빠져 있다는 자각. AI가 항상 답을 줬기 때문에, 스스로 답을 찾는 근육이 발달하지 않았다.
- 서연이 한결에게 과제를 준다: "이 PR의 코드를 전부 지우고, AI 없이 다시 짜봐. 내일까지."
- 핵심 코드: AI가 생성한 코드 vs 한결이 직접 짠 서툰 코드 (동작하지만 최적화 안 됨)

**Part IV: "처음부터 다시"**
- 한결이 퇴근 후 카페에서 AI 없이 코딩한다. `Array.reduce`를 MDN에서 처음부터 읽는다. 4시간 걸려서 같은 기능을 다시 짠다.
- 코드는 AI 버전보다 길고 덜 우아하다. 하지만 한 줄 한 줄 설명할 수 있다.
- 다음 날 서연에게 보여준다. 서연이 웃으며 말한다: "이제 코드 리뷰할 수 있겠네."
- 에필로그: 한결이 진우에게 간다. "선배, 저도 No AI Day 할래요." 진우가 대답한다: "월요일에 같이 하자."
- 마지막 장면: 한결이 자기 PR에 코멘트를 단다 — AI가 짜준 코드에 "왜 이렇게 짰는지" 설명을 한 줄씩 추가하기 시작한다.
- 핵심 코드: git diff (AI 코드 삭제 → 수동 코드 추가), MDN 문서 발췌, 코드 리뷰 코멘트

#### 2편 핵심 데이터 활용

| 데이터 | 활용 장면 |
|--------|----------|
| Anthropic 연구: AI 보조 학습자 17% 낮은 점수, 디버깅 능력 최대 하락 | Part III. 서연이 한결에게 보여주는 기사/연구 |
| **한국 신입 채용 급감**: 신입 비중 53.5%(2022)→37.4%(2024). NKLBD+T 중 네이버 제외 전원 신입 공채 없음(2025) | Part I. 한결의 독백 — "난 운이 좋았다. 요즘 신입은 뽑지도 않으니까" |
| **한국 IT 신규 공고**: 995건(2023)→684건(2024)→564건(2025), 매년 감소 | Part I. 배경 설정 |
| **SK AX AICT**: 한국 최초 AI 역량 테스트로 코딩 테스트 대체 | Part I. 한결의 면접 경험 — "코딩 테스트가 아니라 AI 활용 테스트였다" |
| Stack Overflow: 학습된 무기력(learned helplessness), "Tab을 누르는 법을 배운다" | Part III. 한결의 자기 인식 |
| Addy Osmani "70% 문제": AI가 70% 뼈대는 만들지만 나머지 30%(엣지 케이스, 보안)는 여전히 어려움 | Part II. 서연의 코드 리뷰 — "이 30%를 네가 책임져야 해" |
| Gartner: 2028년 90% AI 코드 어시스턴트 채택 | Part I. 회사에서 Claude 라이선스를 당연하게 지급하는 장면 |
| Andrew Ng: "AI 시대에 오히려 코딩을 배워야. 코드가 쉬워질수록 더 많은 사람이 코딩해야 한다" | Part IV. 서연이 한결에게 전달하는 메시지 |
| Stack Overflow AI vs Gen Z: 22-25세 개발자 고용 2022년 대비 20% 하락 | Part I. 세대적 맥락 |

---

### 3편: 금요일은 날코딩

| 항목 | 내용 |
|------|------|
| **슬러그** | `no-ai-friday.html` |
| **제목** | 금요일은 날코딩 |
| **역할** | 소설 — 팀 전체가 "No AI Day"를 시도하는 블랙 코미디 |
| **태그** | 소설 |
| **분량** | 14~16쪽 |

#### 핵심 질문
> 진우가 제안한 "주 1회 No AI Day"가 팀 전체로 확대된다. 금요일. AI 도구를 모두 끈다. 누가 가장 먼저 무너지고, 누가 가장 빛나는가? — 그리고 정말로 생산성이 떨어지는가?

#### Part 구성

**Part I: "실험 설계"**
- 시간: 1편 사건 3주 후. 3월 첫째 주.
- 진우가 슬랙에 올린 "No AI Day" 제안이 CTO(외부 어드바이저)의 눈에 띈다. CTO가 말한다: "재미있는 실험이네. 데이터를 뽑아보자."
- 규칙을 정한다:
  - 금요일 09:00~18:00 모든 AI 도구 비활성화 (IDE 플러그인, Claude, Copilot, ChatGPT)
  - 자동완성(IntelliSense)은 허용 — AI 제안은 금지
  - 각자 PR을 최소 1개 올려야 함
  - 월요일에 AI-assisted 금요일과 비교 (2주간 A/B)
- 김대표의 반응: "생산성 떨어지면 어쩌려고..." 진우: "METR 연구에 따르면 AI가 오히려 19% 느리게 만들 수도 있습니다."
- 핵심 코드: 슬랙 메시지 UI (실험 규칙 공지), 각 팀원의 금요일 태스크 할당

**Part II: "금단 증상 보고서"**
- 금요일 오전. 각 캐릭터별 금단 증상을 앙상블 구조로 교차 편집:

  **진우 (백엔드)**: 1편 경험 덕에 상대적으로 괜찮다. PostgreSQL 쿼리를 직접 짠다. 하지만 새 API 엔드포인트의 에러 핸들링 패턴이 기억 안 난다. "예전에는 그냥 `try-except`만 쓰면 Claude가 알아서 구조화해줬는데..."

  **한결 (프론트엔드 신입)**: 가장 심각한 금단 증상. CSS를 작성하는데 `flexbox`의 `justify-content`와 `align-items` 차이를 매번 검색한다. 2편 이후로 기초를 공부하고 있지만, 아직 체화되지 않았다. 한 시간에 코드 3줄.

  **서연 (프론트엔드)**: 유일하게 평소와 비슷한 속도. "원래 이렇게 코딩하는 거야." 하지만 서연도 한 가지 고백한다 — 테스트 코드는 AI에게 시키고 있었다. "테스트는 좀 지루하잖아..." 테스트를 직접 쓰기 시작하면서 자기 코드의 엣지 케이스를 발견한다.

  **김대표 (비개발자)**: 진우에게 3번 슬랙을 보낸다. "이거 언제 되냐" → "아직이냐" → "금요일이라 느린 거 아니지?"

- 핵심 코드: 각 캐릭터의 코드 스니펫 (Python, TypeScript, CSS), 김대표 슬랙 메시지

**Part III: "오후의 반전"**
- 오후 2시. 예상 밖의 일이 벌어진다:
  - 진우가 AI 없이 짠 API 코드에서 서연이 버그를 발견한다 — 하지만 에러 메시지가 명확해서 5분 만에 고친다. "AI가 짰으면 에러 메시지가 generic했을 텐데."
  - 한결이 CSS를 직접 짜면서 `grid`와 `flexbox`의 차이를 처음으로 이해한다. "아... 그래서 2차원은 grid고 1차원은 flex인 거구나."
  - 팀이 모여서 코드 리뷰를 하는데, 평소보다 대화가 많다. AI가 있을 때는 각자 조용히 코딩했는데, 없으니까 서로에게 묻는다.
- CodeRabbit 연구 인용: AI PR이 1.7x 더 많은 버그. 오늘의 PR은 양은 적지만 버그도 적다.
- 핵심 코드: 코드 리뷰 대화 (GitHub PR 코멘트 UI), 에러 메시지 비교 (AI 생성 vs 수동)

**Part IV: "월요일의 데이터"**
- 2주간의 A/B 결과:
  - **코드 양**: No AI Friday가 35% 적다
  - **버그 수**: No AI Friday가 40% 적다
  - **코드 리뷰 시간**: No AI Friday가 50% 빠르다 (코드를 이해하고 있으니까)
  - **팀 대화량**: No AI Friday가 3배 많다
- 진우가 결과를 정리한다: "생산성은 떨어졌지만, 품질은 올라갔다."
- CTO가 정식 제도로 제안한다: 격주 금요일을 "No AI Friday"로.
- 김대표가 반대한다: "투자자한테 뭐라고 하냐." CTO: "METR 연구 보여주면 됩니다."
- 마지막 장면: 다음 금요일. 한결이 "오늘은 No AI Friday잖아요"라고 먼저 말한다. 진우가 웃는다.
- 핵심 코드: A/B 테스트 결과 테이블, 최종 슬랙 공지

#### 3편 핵심 데이터 활용

| 데이터 | 활용 장면 |
|--------|----------|
| METR 연구: 16명 숙련 개발자, 246개 태스크, 19% 느려짐. **인식-현실 괴리 40%p** (20% 빨라졌다고 느낌) | Part I. 진우가 김대표를 설득하는 근거 |
| CodeRabbit: AI PR 1.7x 버그, **가독성 문제 3x**, **성능 비효율 8x** 증가 | Part III. A/B 결과의 배경 설명 |
| Stack Overflow: 66%가 "거의 맞지만 완전히 맞지 않은 코드"에 불만, 45% "AI 코드 디버깅이 더 오래 걸림" | Part III. 코드 리뷰 장면 |
| Luciano Nooijen: "Fingerspitzengefühl" — 코딩 직관의 퇴화. 사이드 프로젝트에서 "기본적인 것도 수동으로 해야 할 때 바보 같은 느낌" | Part II. 서연이 설명하는 개념 |
| **Copilot 2년 사용 후 그만둔 개발자**: "의존할수록 의존이 강해지는 피드백 루프" | Part II. 진우의 1편 경험과 교차 |
| **카카오/네이버/당근 OpenClaw 사내 금지** (2026.2): 보안 우려로 첫 공식 AI 도구 금지 | Part I. 배경 — "AI 도구가 만능이 아니다" |
| Stack Overflow: 84% 채택 / 46% 불신 | Part IV. 결과 보고서의 맥락 |
| **덴마크 국가 설문**: 개발자 자가 보고 시간 절약 6.5%에 불과 ("modest") | Part IV. A/B 결과와 비교 |

---

### 4편: 센타우르

| 항목 | 내용 |
|------|------|
| **슬러그** | `the-centaur-developer.html` |
| **제목** | 센타우르 |
| **역할** | 소설 — 진우, 서연, 한결이 각자 찾은 AI와의 관계. 시리즈 결론 |
| **태그** | 소설 |
| **분량** | 14~16쪽 |

#### 핵심 질문
> 카스파로프가 1997년 딥블루에게 졌을 때, 그는 포기하지 않고 "Advanced Chess"를 만들었다 — 인간+AI가 AI 혼자보다 강한 모델. 2026년, 개발자에게도 같은 질문이 왔다. AI와 함께 일하되, AI에게 지배당하지 않는 방법은 무엇인가?

#### Part 구성

**Part I: "1997년, 카스파로프"**
- 시간: 1편 사건 한 달 후. 3월 둘째 주.
- 에피그래프: 카스파로프의 Advanced Chess(1998) — "인간+컴퓨터" 팀이 "컴퓨터 혼자"와 "인간 혼자" 모두를 이겼다.
- 진우가 주말에 카스파로프의 에세이를 읽는다. "센타우르"라는 개념을 발견한다. 반인반마 — 인간의 창의성 + 기계의 연산력.
- Harvard 연구 인용: AI 사용자의 세 유형 — **센타우르**(선택적 활용, 최고 정확도), **사이보그**(완전 융합), **셀프오토메이터**(완전 위임). 센타우르가 가장 높은 성과.
- 진우의 독백: "나는 1편 전까지 셀프오토메이터였다. AI에게 모든 걸 시켰다."
- 핵심 코드: 카스파로프 Advanced Chess 시합 기보 (텍스트), Harvard 연구 다이어그램

**Part II: "세 개의 방법"**
- 한 달간 세 사람이 각자의 방식으로 AI와의 관계를 재정의한 과정을 교차 서술:

  **진우의 방법: "AI는 리뷰어"**
  - 코드를 먼저 직접 짠다. 완성 후 Claude에게 리뷰를 요청한다.
  - "이 코드 리뷰해줘"가 "이 코드 짜줘"를 대체했다.
  - 생산성은 이전의 70%지만, 모든 코드를 설명할 수 있다.
  - 커밋 메시지에 Claude가 제안한 개선점과 자신이 수용/거부한 이유를 기록한다.

  **서연의 방법: "AI는 테스트 작성자"**
  - 자기가 짠 코드의 테스트만 AI에게 시킨다. "내가 짠 코드의 엣지 케이스를 찾아줘."
  - AI가 테스트를 생성하면, 서연이 테스트를 읽고 자기 코드의 빈틈을 발견한다.
  - "AI가 적이 되어주는 거야. 내 코드를 공격하게 하는 거지."

  **한결의 방법: "AI는 과외 선생"**
  - AI에게 코드를 시키지 않는다. 대신 개념을 묻는다: "useCallback은 언제 써야 해?", "이 에러 메시지가 뭘 의미하는 거야?"
  - AI가 설명해주면, 코드는 직접 짠다. Anthropic 연구에서 "개념 질문만 한 그룹"이 65% 이상 유지했던 것과 같은 패턴.
  - 한 달 만에 서연의 코드 리뷰를 통과하기 시작한다.

- 핵심 코드: 각 방법론의 워크플로우 예시 (진우의 리뷰 요청 프롬프트, 서연의 테스트 생성 프롬프트, 한결의 개념 질문 프롬프트)

**Part III: "개발자라는 직업"**
- 3월 마지막 금요일. No AI Friday.
- 이번에는 분위기가 다르다. 첫 번째 No AI Friday는 "금단 증상"이었지만, 네 번째는 "근육 운동"이다.
- 한결이 CSS Grid 레이아웃을 AI 없이 30분 만에 완성한다. 한 달 전에는 3시간 걸렸다.
- 진우가 PostgreSQL 쿼리를 AI 없이 최적화한다. EXPLAIN ANALYZE를 직접 읽는다.
- 서연이 테스트를 AI 없이 짠다. "의외로 재미있잖아. 내 코드를 공격하는 거니까."
- GitHub "개발자의 새로운 정체성" 인용: AI를 사용하는 개발자는 "코드의 크리에이티브 디렉터"다. 코드를 직접 짜느냐 AI가 짜느냐가 아니라, **코드의 모든 결정에 책임을 질 수 있느냐**가 핵심이다.
- 핵심 코드: EXPLAIN ANALYZE 결과 분석, CSS Grid 완성 diff

**Part IV: "센타우르"**
- 금요일 저녁. 세 사람이 퇴근하며 대화한다.
- 진우: "AI가 돌아왔을 때, 나는 처음으로 AI에게 '아니'라고 말할 수 있었다."
- 서연: "AI를 안 쓰는 게 답이 아니야. AI가 할 수 없는 일을 내가 하는 게 답이지."
- 한결: "저는 아직 센타우르라기엔... 말(馬) 위에 타는 법부터 배우는 중이에요."
- 에필로그: 진우가 월요일 아침 Claude Code를 켠다. 커서가 깜박인다.

```
$ claude

✓ Welcome back!

How can I help you today?
```

- 진우가 입력한다: "이 코드를 같이 리뷰하자."
- "짜줘"가 아니라 "같이 하자."

- 마지막 문장 (closing aphorism):

> "카스파로프는 딥블루에게 졌다.
> 그리고 인간+컴퓨터가 컴퓨터를 이기는 게임을 만들었다.
> 코드는 AI가 짠다. 하지만 개발자는 AI가 될 수 없다."

- 핵심 코드: Claude Code 터미널 (1편 opening과 대칭), 최종 커밋 메시지

#### 4편 핵심 데이터 활용

| 데이터 | 활용 장면 |
|--------|----------|
| 카스파로프 Advanced Chess (1998). **2005 프리스타일 대회: 아마추어 2명+약한 컴퓨터 3대가 그랜드마스터와 슈퍼컴퓨터를 이김** | Part I. 시리즈 핵심 은유 — "약한 인간+기계+좋은 프로세스 > 강한 컴퓨터 단독" |
| **HBS 연구 (244명 BCG 컨설턴트)**: 센타우르 14%(최고 정확도), 사이보그 59%, 셀프오토메이터 27%(역량 증가 없음) | Part I. 세 유형 분류 — "셀프오토메이터는 역량이 늘지 않는다" |
| Anthropic 연구: 개념 질문만 한 그룹 65%+ 유지 | Part II. 한결의 학습법 |
| GitHub "개발자의 새로운 정체성": **"코드의 크리에이티브 디렉터"**, 이해→지시→검증의 3단계 | Part III. 진우의 깨달음 |
| **"AI가 쓴다. 당신이 리뷰한다. 당신이 출시 여부를 결정한다."** — 리뷰가 핵심 스킬 | Part II. 진우의 방법론 |
| Gartner: 2028년 90% AI 코드 어시스턴트 채택 / BLS: 개발자 고용 17.9% 증가 전망(2023-2033) | Part IV. "AI를 안 쓰는 건 선택지가 아니다. 하지만 개발자도 사라지지 않는다" |
| Stack Overflow: 72% 바이브코딩 거부 | Part III. "센타우르는 바이브코딩과 다르다" |
| **Stack Overflow (2026.1)**: "AI can 10x developers... in creating tech debt" | Part III. 위트 있는 인용 |

---

## 5. 핵심 소설 요소

### 코드가 드러내는 것

이 소설에서 코드는 두 가지를 동시에 보여준다:

1. **AI가 짠 코드**: 구조적으로 완벽하지만 주인공이 이해하지 못하는 코드. 깨끗한 함수명, 적절한 추상화, 하지만 "왜 이렇게 했는지"를 설명해줄 AI가 없다
2. **주인공이 직접 짠 코드**: 서툴고 돌아가지만, 모든 줄의 의미를 안다. `grep` 대신 `awk`를 쓸 줄 모르고, 정규표현식이 기억 안 나고, 테스트가 깨지지만 — 결국 고친다

### 공포의 원천

- 초자연적 공포가 아니라 **자기 인식의 공포**: "내가 이것도 모르고 있었구나"
- AI가 없어서 발생하는 **무력감**: Stack Overflow 검색어도 못 떠올리는 자신
- **시간 압박**: 내일 아침까지 고쳐야 하는데, AI 없이는 10배 느리다
- **Gemini D드라이브 삭제 사건**이 떠오르는 순간: "AI를 맹신한 대가가 이런 건가"

### 교훈과 철학

- **센타우르 모델**: 인간+AI가 최강이지만, 인간이 '인간 파트'를 감당할 수 있어야 한다
- **"이해 없는 생산성"의 위험**: 코드를 빠르게 짜는 것과 코드를 이해하는 것은 다르다
- **No AI Day의 가치**: 근육은 쓰지 않으면 퇴화한다. 코딩 근육도 마찬가지
- **관계 재정의**: AI를 "작성자"에서 "리뷰어"로, 나를 "지시자"에서 "작성자"로

---

## 6. 디자인 노트

### 마스터키 컴포넌트 재활용

- `.novel`: 소설 본문 (행간 2.05, 들여쓰기 1em)
- `.dialogue`: 대화체
- `.scene-break`: 장면 전환 (`* * *`)
- `.internal`: 내면 독백 (--muted 색상)
- `.terminal`: 터미널/코드 블록 (JetBrains Mono, 어두운 배경)
- `.ai-voice`: AI 발화 스타일 (accent 컬러 보더 + 카드 배경)
- `.char-intro`: 등장인물 소개
- `.pull-quote`: 핵심 인용
- `.part-label` / `.part-title`: Part 구분

### 이 편 전용 신규 컴포넌트

- `.code-compare`: 코드 before/after 비교 (2컬럼 그리드). AI가 짠 코드 vs 진우가 이해한 후 수정한 코드
- `.slack-msg`: 슬랙 메시지 UI. 발신자 아바타 + 이름 + 타임스탬프 + 메시지 본문
- `.usage-limit`: 사용량 제한 메시지 박스. 경고 색상 + 모노스페이스. 소설 도입부와 결말부에 대칭적으로 사용
- `.doc-excerpt`: 공식 문서 발췌 박스. 밝은 배경 + 좌측 보더. 진우가 PostgreSQL 문서를 읽는 장면

### editorial-base.css 확장 필요사항
- 마스터키 시리즈에서 사용한 `.novel`, `.dialogue`, `.terminal` 등 재활용
- 신규 컴포넌트는 인라인 `<style>`에 작성 (공통 CSS 오염 방지)
- `.code-compare`만 공통화 고려 (향후 기술 시리즈에서 재활용 가능)

---

## 7. 제작 순서

### 제작 체크리스트

- [x] **1편** `forbidden-code.html` — "금단의 코드" (완료)
- [x] **2편** `born-with-copilot.html` — "Copilot이 낳은 아이" (완료)
- [x] **3편** `no-ai-friday.html` — "금요일은 날코딩" (완료)
- [x] **4편** `the-centaur-developer.html` — "센타우르" (완료)

### 등록 작업 (각 편 제작 후)

- [x] `assets/content-data.js`에 시리즈 데이터 추가 (4편 완료)
- [x] `assets/series-nav.js`에 SERIES 데이터 추가 (4편 완료)
- [x] `content/index.md` 업데이트 (4편 완료)
- [x] `sitemap.xml`에 URL 추가 (4편 완료)
- [x] `CLAUDE.md` 콘텐츠 관리 섹션에 시리즈 15 정보 추가 (4편 완료)

---

## 8. 참고 자료 (출처)

### AI 코딩 도구 통계
- [Stack Overflow 2025 Developer Survey — AI](https://survey.stackoverflow.co/2025/ai)
- [Stack Overflow 2025 Survey Press Release](https://stackoverflow.co/company/press/archive/stack-overflow-2025-developer-survey/)
- [ShiftMag: 84% use AI, most don't trust it](https://shiftmag.dev/stack-overflow-survey-2025-ai-5653/)
- [LinearB: Stack Overflow 2025 Survey Analysis](https://linearb.io/blog/stack-overflow-2025-developer-survey-autonomy-ai-trust)
- [Elite Brains: AI-Generated Code Stats 2026](https://www.elitebrains.com/blog/aI-generated-code-statistics-2025)
- [METR: AI Tool Productivity Study](https://metr.org/)

### AI 코딩 사고 사례
- [The Register: Google Antigravity Wipes D Drive](https://www.theregister.com/2025/12/01/google_antigravity_wipes_d_drive/)
- [Tom's Hardware: Gemini Wipes User's HDD](https://www.tomshardware.com/tech-industry/artificial-intelligence/googles-agentic-ai-wipes-users-entire-hard-drive-without-permission-after-misinterpreting-instructions-to-clear-a-cache-i-am-deeply-deeply-sorry-this-is-a-critical-failure-on-my-part)
- [Cybernews: Gemini 3 Pro Agent Wipes Drive](https://cybernews.com/security/deeply-sorry-gemini-deletes-developers-drive/)
- [AWS Security Bulletin: Amazon Q VS Code v1.84](https://aws.amazon.com/security/security-bulletins/AWS-2025-015/)
- [BleepingComputer: Amazon AI Agent Data Wiper](https://www.bleepingcomputer.com/news/security/amazon-ai-coding-agent-hacked-to-inject-data-wiping-commands/)
- [CSO Online: Amazon Q Destructive Code](https://www.csoonline.com/article/4027963/hacker-inserts-destructive-code-in-amazon-q-as-update-goes-live.html)
- [koi.ai: Amazon Q Almost Nuked Production](https://www.koi.ai/blog/amazons-ai-assistant-almost-nuked-a-million-developers-production-environments)
- [When AI Fails: AI Coding Failures](https://whenaifail.com/category/ai-coding/)

### 개발자 스킬 퇴화 / AI 의존
- [CIO Korea: 주니어 개발자를 지켜라](https://www.cio.com/article/4121183/)
- [CIO Korea: AI 시대 프로그래머 역할 변화](https://www.cio.com/article/4062887/)
- [Velog: AI 시대의 개발자 — 현업 개발자의 솔직한 이야기](https://velog.io/@teo/ai-and-developer)
- [이바닥늬우스: Andrew Ng — 오히려 코딩을 배워야](https://ebadak.news/2025/03/15/andrew-ng-keep-building/)

### No AI Coding / 바이브 코딩 반발
- [Stack Overflow 2025: 72% don't vibe code](https://survey.stackoverflow.co/2025)
- [FinalRound AI: Developers Trust AI Less](https://www.finalroundai.com/blog/stack-overflow-survey-2025-developers-trust-ai-tools-less)
- [Luciano Nooijen: Why I Stopped Using AI Code Editors](https://lucianonooijen.com/blog/why-i-stopped-using-ai-code-editors/) — "Fingerspitzengefühl" 코딩 직관 퇴화 사례

### Junior Developer Pipeline Crisis (2편 관련)
- [Anthropic: How AI Assistance Impacts Coding Skills](https://www.anthropic.com/research/AI-assistance-coding-skills) — AI 보조 학습자 퀴즈 점수 17% 하락, 디버깅 능력 최대 감소
- [DEV Community: The Death of the Junior Developer](https://dev.to/harsh2644/the-death-of-the-junior-developer-and-the-crisis-no-one-is-talking-about-2gg1) — Junior Death Spiral
- [ByteIota: Junior Developer Extinction — 67% Hiring Collapse](https://byteiota.com/junior-developer-extinction-67-hiring-collapse-explained/)
- [CIO: Demand for Junior Developers Softens as AI Takes Over](https://www.cio.com/article/4062024/demand-for-junior-developers-softens-as-ai-takes-over.html)
- [Stack Overflow Blog: AI vs Gen Z](https://stackoverflow.blog/2025/12/26/ai-vs-gen-z/) — 22-25세 개발자 고용 2022년 대비 20% 하락
- [Stack Overflow Blog: Do AI Coding Tools Help With Imposter Syndrome or Make It Worse?](https://stackoverflow.blog/2025/07/31/do-ai-coding-tools-help-with-imposter-syndrome-or-make-it-worse/)
- [WhatJobs: AI Developer Replacement Plan Fails — Junior Death Spiral](https://www.whatjobs.com/news/the-ai-developer-replacement-plan-has-failed-technical-debt-security-flaws-and-the-junior-death-spiral/)
- [Addy Osmani: The 70% Problem — Hard Truths About AI](https://addyo.substack.com/p/the-70-problem-hard-truths-about) — AI의 70% 뼈대 vs 인간의 30% 핵심
- [DEV Community: An Epidemic of Learned Helplessness](https://dev.to/the_tea_drinker/an-epidemic-of-learned-helplessness-14cc)

### 한국 신입 개발자 채용 데이터 (2편 관련)
- [서울신문: AI 시대, 주니어 개발자 일자리 사라진다](https://www.seoul.co.kr/news/society/2026/01/06/20260106500238) — 신입 비중 53.5%→37.4%
- [이지이코노미: IT 업계 변화](https://www.ezyeconomy.com/news/articleView.html?idxno=223644) — IT 신규 공고 995→684→564건
- [네이트뉴스: AI 충격, 신입 개발자 채용](https://news.nate.com/view/20251122n02772)
- [코드트리: 2025 개발자 채용 트렌드와 2026 전망](https://www.codetree.ai/blog/) — SK AX AICT(AI 역량 테스트)
- [CIO Korea: AI 시대 코딩 면접은 정말 필요할까](https://www.cio.com/article/4027594/)

### AI 코드 품질 / No AI Day 데이터 (3편 관련)
- [CodeRabbit: State of AI vs Human Code Generation Report](https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report) — AI PR 1.7x 버그, 가독성 3x, 성능 비효율 8x
- [METR: AI Tool Productivity Study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) — 16명, 246태스크, 19% 느려짐, 인식-현실 40%p 괴리
- [MIT Technology Review: AI Coding Is Now Everywhere But Not Everyone Is Convinced](https://www.technologyreview.com/2025/12/15/1128352/rise-of-ai-coding-developers-2026/)
- [Medium: Why I'm Ditching GitHub Copilot After 2 Years](https://medium.com/synthetic-futures/why-im-ditching-github-copilot-after-2-years-c7aab3de22e8) — 의존→의존 강화 피드백 루프
- [Korea Times: Top Tech Firms Ban OpenClaw Over Security Breach Fears](https://www.koreatimes.co.kr/business/tech-science/20260208/top-tech-firms-ban-openclaw-over-security-breach-fears)
- [Addy Osmani: The Reality of AI-Assisted Software Engineering Productivity](https://addyo.substack.com/p/the-reality-of-ai-assisted-software) — 신입 35-39% 빨라지지만 시니어 8-16%만

### 센타우르 모델 / 개발자 정체성 (4편 관련)
- [HBS Working Paper 26-036: Cyborgs, Centaurs and Self-Automators](https://www.hbs.edu/faculty/Pages/item.aspx?num=68273) — BCG 244명 실험, 센타우르 14% 최고 정확도
- [arXiv: The Centaur Programmer — How Kasparov's Advanced Chess Spans to Software Development](https://arxiv.org/abs/2304.11172)
- [MIT Press: How To Become A Centaur](https://jods.mitpress.mit.edu/pub/issue3-case)
- [Kasparov.com: The Real Threat From ChatGPT Isn't AI... It's Centaurs](https://www.kasparov.com/the-real-threat-from-chatgpt-isnt-ai-its-centaurs-pcgamer-february-13-2023/)
- [GitHub Blog: The New Identity of a Developer](https://github.blog/news-insights/octoverse/the-new-identity-of-a-developer-what-changes-and-what-doesnt-in-the-ai-era/) — "코드의 크리에이티브 디렉터", 이해→지시→검증
- [Fortune: Are You a Cyborg, a Centaur, or a Self-Automator?](https://fortune.com/2026/01/30/ai-business-humans-in-the-loop-cyborg-centaur-or-self-automator/)
- [Pedro Cavalero: AI Is Your New Junior Developer](https://pedrocavalero.com/2025/08/20/ai-is-your-new-junior-developer-are-you-ready-to-be-the-senior-reviewer/) — AI를 주니어 인턴으로 다루기
- [Addy Osmani: My LLM Coding Workflow Going Into 2026](https://addyosmani.com/blog/ai-coding-workflow/)
- [Human Who Codes: From Coder to Orchestrator](https://humanwhocodes.com/blog/2026/01/coder-orchestrator-future-software-engineering/)
- [Stack Overflow Blog: AI Can 10x Developers... In Creating Tech Debt](https://stackoverflow.blog/2026/01/23/ai-can-10x-developers-in-creating-tech-debt)
- [Gartner: 90% AI Code Assistants by 2028](https://www.gartner.com/en/newsroom/press-releases/2024-04-11-gartner-says-75-percent-of-enterprise-software-engineers-will-use-ai-code-assistants-by-2028)
- [GitHub Korea: 한국 개발자 266만 명 돌파](https://www.aitimes.kr/news/articleView.html?idxno=36981)
- [Andrew Ng on X: "코드가 쉬워질수록 더 많은 사람이 코딩해야"](https://x.com/AndrewYNg/status/1900219116822102116)

### 한국 기업 AI 도구 도입
- [SK플래닛 GitHub Copilot 활용기](https://techtopic.skplanet.com/github-copilot/)
- KT, 카카오, LG전자 등 GitHub Copilot 도입 (GitHub Octoverse 2025)
