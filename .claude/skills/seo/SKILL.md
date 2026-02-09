---
name: seo
description: Use this skill whenever creating or modifying HTML content pages for the blog. This skill ensures every page has proper SEO meta tags, Open Graph tags, structured data, and semantic HTML for search engine visibility. Must be applied together with the editorial-content-page skill. Trigger automatically when generating any HTML content in the content/ directory.
---

# SEO Skill

블로그에 배포되는 모든 HTML 콘텐츠에 검색 엔진 최적화(SEO)를 적용하는 스킬. editorial-content-page 스킬과 반드시 함께 사용한다.

## 필수 적용 항목

### 1. HTML 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{페이지 제목} — {사이트명}</title>
  <meta name="description" content="{150자 이내 요약}">
  <link rel="canonical" href="{정규 URL}">
  <!-- Open Graph -->
  <!-- Structured Data -->
  <!-- Fonts & Styles -->
</head>
```

- `lang="ko"` 필수
- `<title>`은 60자 이내, `{페이지 제목} — {사이트명}` 형식
- `<meta name="description">`은 150자 이내, 핵심 내용 요약

### 2. Open Graph 태그

```html
<meta property="og:type" content="article">
<meta property="og:title" content="{페이지 제목}">
<meta property="og:description" content="{150자 이내 요약}">
<meta property="og:url" content="{정규 URL}">
<meta property="og:image" content="{OG 이미지 URL}">
<meta property="og:locale" content="ko_KR">
<meta property="og:site_name" content="{사이트명}">
<meta property="article:published_time" content="{ISO 8601 날짜}">
```

- `og:image`는 1200x630px 권장. 없으면 기본 이미지 사용
- `og:type`은 콘텐츠 페이지에서 `article`, 랜딩 페이지에서 `website`

### 3. Twitter Card 태그

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{페이지 제목}">
<meta name="twitter:description" content="{150자 이내 요약}">
<meta name="twitter:image" content="{OG 이미지 URL}">
```

### 4. 구조화된 데이터 (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{페이지 제목}",
  "description": "{요약}",
  "datePublished": "{ISO 8601}",
  "dateModified": "{ISO 8601}",
  "author": {
    "@type": "Person",
    "name": "{저자명}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "{사이트명}"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{정규 URL}"
  }
}
</script>
```

### 5. 시맨틱 HTML

콘텐츠 영역에 시맨틱 태그를 사용한다:

```html
<article>
  <header>
    <!-- masthead: 제목, 부제, 날짜 -->
  </header>
  <main>
    <section><!-- Part I --></section>
    <section><!-- Part II --></section>
    <section><!-- Part III --></section>
  </main>
  <footer>
    <!-- 출처, 크레딧 -->
  </footer>
</article>
```

- `<article>` 태그로 콘텐츠 전체를 감싼다
- 각 Part는 `<section>` 태그로 감싼다
- 제목 태그 위계: `<h1>` 1개(페이지 제목), `<h2>`(Part 제목), `<h3>`(소항목)

### 6. 이미지 최적화 (해당 시)

```html
<img src="..." alt="{이미지 설명}" width="..." height="..." loading="lazy">
```

- `alt` 속성 필수 (빈 문자열 금지, 장식용 이미지는 `alt=""`)
- `width`/`height` 명시 (CLS 방지)
- `loading="lazy"` (첫 화면 이미지 제외)

## URL 규칙

- 파일명은 영문 소문자 + 하이픈 슬러그 사용
- 예: `content/wasted-life-series/so-what-now.html`
- URL에 한글, 언더스코어(_), 대문자 사용 금지

## 날짜 규칙

- **연도를 절대 혼동하지 않는다.** 콘텐츠 생성 시점의 실제 연도를 확인하여 기입한다
- `article:published_time`, `datePublished`, `dateModified`, sitemap `lastmod` 등 모든 날짜 필드에 정확한 날짜를 사용한다
- 날짜 형식은 ISO 8601 (`YYYY-MM-DD`)을 사용한다

## sitemap.xml 업데이트 (필수)

**새 콘텐츠를 추가할 때마다 `sitemap.xml`에 해당 URL을 반드시 추가한다.** 이 단계를 빠뜨리면 검색 엔진이 새 콘텐츠를 발견하지 못한다.

```xml
<url>
  <loc>https://necromman.github.io/editorial/content/[시리즈-슬러그]/[파일-슬러그].html</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

- `lastmod`는 콘텐츠 생성일과 동일하게 기입한다
- 시리즈별로 XML 주석(`<!-- Series XX: 시리즈 제목 -->`)으로 구분한다
- 랜딩 페이지(`/`)의 `lastmod`도 새 콘텐츠 추가 시 갱신한다

## 체크리스트 (SEO 검수)

콘텐츠 생성 후 아래 항목을 확인한다:

- [ ] `<title>` 태그가 있고 60자 이내인가
- [ ] `<meta name="description">`이 있고 150자 이내인가
- [ ] `lang="ko"` 속성이 있는가
- [ ] Open Graph 태그 6종이 모두 있는가 (type, title, description, url, image, locale)
- [ ] Twitter Card 태그가 있는가
- [ ] JSON-LD 구조화 데이터가 있는가
- [ ] `<h1>` 태그가 정확히 1개인가
- [ ] 제목 위계가 순서대로인가 (h1 → h2 → h3, 건너뛰기 없음)
- [ ] `<article>`, `<section>` 시맨틱 태그를 사용하는가
- [ ] canonical URL이 설정되어 있는가
- [ ] 파일명이 영문 슬러그인가
- [ ] **`sitemap.xml`에 새 URL이 추가되었는가**

## 이 스킬의 적용 시점

- **새 HTML 콘텐츠 작성 시**: editorial-content-page 스킬과 함께 반드시 적용
- **기존 HTML 수정 시**: SEO 태그가 빠져 있으면 추가
- **content/index.md 업데이트 시**: 새 콘텐츠의 슬러그와 메타 정보 반영
