# ChatGPT Conversation Transcript

> Export of the visible conversation between the user and ChatGPT.
> Hidden system/developer instructions, private reasoning, and internal tool metadata are not included.
> Uploaded files/images are represented by textual placeholders where applicable.

---

## User

در انجام گام به گام این پروژه توضیحات لازمی که باید داده شود و کارهایی که نیاز است تا انجام دهم را بگو:



# فرانت‌اند ایستا با قابلیت استقرار خودکار

یک نرم‌افزار static frontend را به‌صورت pure یا با چارچوبی  دلخواه (مانند ReactJS یا Angular یا Vue)، پیاده‌سازی کنید و در فرآیند  پیاده‌سازی آن از git استفاده کنید. با کمک [Github Actions](https://github.com/features/actions) نیز این نرم‌افزار static خود را به‌صورت خودکار، روی Github Pages مستقر (deploy) کنید.

> از اهداف آزمایش این است که در فرآیند پیاده‌سازی نرم‌افزار، ترجیحاً از  همه‌ی دستوراتی که در فیلم آموزشی بیان شده، استفاده کنید تا نسبت به  آن‌ها آشنایی و تسلط پیدا کنید؛ از این رو توصیه می‌کنیم دستورات git را  بدون کمک IDE و به صورت دستی در ترمینال وارد کنید تا از نزدیک اتفاقاتی را  که می‌افتد، ببینید؛ در این حالت یادگیری بیشتری دارید.

برای انجام آزمایش به نکات زیر توجه کنید:

- انتظار می‌رود که فرآیند ایجاد این نرم‌افزار، به صورت همزمان توسط  همه‌ی اعضای تیم ایجاد، در یک مخزن کد (repository) در Github دنبال شود.
- در پروژه‌ی خود از فایل .gitignore استفاده کنید.
- نیاز است تا حداقل ۲۰ commit معنا‌دار در فرآیند پیاده‌سازی نرم‌افزار وجود داشته باشد.
  - منظور از معناداری commit ها، این است که اتفاق مشخصی در فرآیند پیاده‌سازی رخ داده باشد.
- لازم است برای مدیریت بهتر فرآیند پیاده‌سازی نرم‌افزار، از حداقل سه شاخه‌ی معنا‌دار استفاده کنید.
  - منظور از معناداری شاخه‌ها، نام‌گذاری مناسب شاخه و هم‌چنین،  مرتبط‌بودن شاخه‌ها با فرآیند پیاده‌سازی نرم‌افزار است؛ برای مثال شاخه  dev و یا feature هر کدام با غرض‌های متفاوتی ایجاد می‌شوند و یا شاخه  hotfix برای برطرف‌کردن بعضی باگ‌های خاص در نرم‌افزار به‌کار می‌رود.
- حداقل دو conflict را در فرآیند پیاده‌سازی برطرف کنید. این conflict ها می‌تواند در یک شاخه یا هنگام ادغام دو شاخه رخ دهد.
- با اعمال محدودیت در مخزن خود در Github، شاخه‌ی main پروژه را محافظت  کنید؛ به صورتی که تنها از طریق pull request امکان ادغام شاخه‌ای دیگر با  شاخه‌ی main را داشته باشید.
- ‌ضروری است شاخه‌ها را به درستی با شاخه‌ی main و یا دیگر شاخه‌های  مرتبط ادغام (merge) کنید. این کار را از طریق pull request انجام دهید.
- برای استقرار مستمر می‌توانید از Github Actions و [workflow های آماده](https://github.com/ssc-public/Software-Engineering-Lab/actions/new) استفاده کنید.
- گزارشی از جزئیات پیاده‌سازی مراحل فوق شامل توضیح در خصوص برنچ ها و  همچنین کامیت ها و آدرس github page مربوطه برای لانچ فرانت را با فرمت  markdown در فایل README پروژه بنویسید.

\**شایان ذکر است که ضبط فیلم برای این آزمایش ضروری بوده و جزئی از نمره خواهد بود. توضیحات و الزامات ضبط ویدئو،* [*در بخش مربوطه*](https://quera.org/course/assignments/101815/problems/340032) *آورده شده‌است.\**

# پرسش‌ها

علاوه بر گزارش آزمایش، پاسخ سوالات زیر را هم داخل فایل README بنویسید:

1. پوشه‌ی .git چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟
2. منظور از atomic بودن در atomic commit و atomic pull-request چیست؟
3. تفاوت دستورهای fetch و pull و merge و rebase و cherry-pick را بیان کنید.
4. تفاوت دستورهای reset و revert و restore و switch و checkout را بیان کنید.
5. منظور از stage یا همان index چیست؟ دستور stash چه کاری را انجام می‌دهد؟
6. مفهوم snapshot به چه معناست؟ ارتباط آن با commit چیست؟ (راهنمایی: [لینک](https://github.blog/2020-12-17-commits-are-snapshots-not-diffs/))
7. تفاوت‌های local repository و remote repository \</pre>

---

## Assistant

برای اینکه پروژه هم نمره‌ی فنی بگیرد و هم در ویدئو قابل دفاع باشد، بهتر است از همان ابتدا مسیر کار را طوری بچینید که **۲۰+ commit، سه شاخه، دو conflict، Pull Request، محافظت از main و GitHub Pages** همگی طبیعی و قابل‌نمایش باشند. من مسیر را از ساخت پروژه تا متن‌هایی که باید در README توضیح دهید، به ترتیب می‌چینم.

برای خودِ فرانت‌اند، ساده‌ترین انتخاب برای این آزمایش **HTML + CSS + JavaScript خالص** است؛ چون تمرکز آزمایش روی Git/GitHub/Actions است و درگیر تنظیم `base path`، build و وابستگی‌های React/Vite نمی‌شوید. البته اگر هدف تیم تمرین React هم هست، همین روند را می‌توان با React انجام داد.

بله. برای این آزمایش بهتر است پروژه را طوری پیش ببرید که **هر الزام صورت‌مسئله در تاریخچه Git قابل مشاهده و در فیلم قابل اثبات باشد**. پیشنهاد من این است که برای جلوگیری از درگیری با build و dependencyها، پروژه را با **HTML + CSS + JavaScript خالص** بسازید؛ مثلاً یک Landing Page شامل Navbar، Hero، Features، Team، Contact، Dark Mode و Responsive Design.

## نقشه کلی پروژه

جریان کارتان بهتر است این‌طور باشد:

```text
ایجاد Repository
        ↓
git init + اولین commit
        ↓
push اولیه به main
        ↓
محافظت از main
        ↓
ایجاد dev
        ↓
ایجاد feature branches
        ↓
توسعه توسط اعضای تیم
        ↓
حداقل 20 commit
        ↓
ایجاد و حل دو Conflict
        ↓
Pull Request: feature → dev
        ↓
Pull Request: dev → main
        ↓
GitHub Actions
        ↓
GitHub Pages
        ↓
تکمیل README
        ↓
ضبط فیلم نهایی
```

---

# گام ۱: موضوع و ساختار پروژه را مشخص کنید

مثلاً یک سایت به نام:

```text
TeamFlow
```

که یک صفحه معرفی ابزار مدیریت تیم باشد.

ساختار:

```text
teamflow/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
└── .github/
    └── workflows/
        └── deploy.yml
```

ویژگی‌هایی که می‌توانید بین اعضا تقسیم کنید:

```text
Navbar
Hero
Features
Team
Footer
Dark mode
Mobile menu
Responsive design
Animations
Accessibility
GitHub Pages deployment
README
```

این تقسیم‌بندی کمک می‌کند commitها و branchهای شما واقعاً معنی‌دار باشند.

---

# گام ۲: Repository را در GitHub ایجاد کنید

در GitHub یک repository مثلاً با نام زیر بسازید:

```text
static-frontend-lab
```

بهتر است هنگام ساخت Repository، گزینه ساخت خودکار README را نزنید تا پروژه را خودتان از ترمینال initialize کنید.

اعضای تیم را هم به Repository اضافه کنید.

سپس یک نفر پروژه اولیه را ایجاد کند:

```bash
mkdir static-frontend-lab
cd static-frontend-lab

git init
git branch -M main
```

نام و ایمیل Git هر عضو هم بهتر است مربوط به حساب GitHub خودش باشد:

```bash
git config user.name "Your Name"
git config user.email "your-email@example.com"
```

بررسی:

```bash
git config user.name
git config user.email
git status
```

فایل‌ها را ایجاد کنید و اولین commit را بزنید:

```bash
git add .
git status

git commit -m "chore: initialize project structure"
```

remote را اضافه کنید:

```bash
git remote add origin https://github.com/USERNAME/static-frontend-lab.git

git remote -v
```

و اولین push:

```bash
git push -u origin main
```

`git init` مخزن محلی Git و پوشه `.git` را ایجاد می‌کند. خود `.git` دیتابیس و metadata مخزن، از جمله objects، refs، HEAD و index را نگهداری می‌کند.

---

# گام ۳: `.gitignore` اضافه کنید

برای پروژه pure HTML/CSS/JS می‌توانید چیزی شبیه این داشته باشید:

```gitignore
# OS files
.DS_Store
Thumbs.db

# IDE
.idea/
.vscode/

# Logs
*.log

# Environment files
.env
.env.*

# Temporary files
*.tmp
```

بعد:

```bash
git add .gitignore
git commit -m "chore: add gitignore"
git push
```

اگر React/Vite استفاده کردید، این موارد را هم اضافه کنید:

```gitignore
node_modules/
dist/
```

---

# گام ۴: همین ابتدا `main` را محافظت کنید

این مرحله را **بعد از push اولیه** انجام دهید تا از آن به بعد هیچ‌کس مستقیم روی `main` کار نکند.

در GitHub وارد:

```text
Repository
→ Settings
→ Branches / Rules
→ Add branch protection rule
```

شوید.

Branch را:

```text
main
```

قرار دهید و حداقل:

```text
Require a pull request before merging
```

را فعال کنید.

اگر چند عضو دارید، بهتر است:

```text
Require approvals: 1
```

را هم فعال کنید.

در صورت وجود گزینه مربوطه، جلوگیری از bypass شدن قوانین توسط مدیر repository نیز گزینه خوبی برای نمایش در آزمایش است.

از این لحظه:

**هیچ‌کس نباید بزند:**

```bash
git push origin main
```

برای تغییرات عادی.

بلکه باید:

```text
branch → Pull Request → main
```

داشته باشید.

---

# گام ۵: استراتژی Branchها

برای اینکه requirement سه branch را با فاصله زیاد رد کنید، این ساختار را پیشنهاد می‌کنم:

```text
main
│
└── dev
    │
    ├── feature/navbar
    ├── feature/hero
    ├── feature/features
    ├── feature/theme
    └── fix/responsive
```

### معنی آن‌ها

`main` نسخه stable و deploy شده است.

`dev` محل integration تغییرات اعضای تیم است.

`feature/navbar` فقط Navbar.

`feature/hero` فقط Hero.

`feature/theme` مثلاً dark mode.

`fix/responsive` رفع مشکل responsive.

بنابراین branchها صرفاً برای گرفتن نمره ساخته نشده‌اند و واقعاً کاربرد مشخصی دارند.

---

# گام ۶: شاخه `dev` را بسازید

مثلاً:

```bash
git switch -c dev
git push -u origin dev
```

حالا یکی از اعضا Navbar را انجام می‌دهد:

```bash
git switch dev
git switch -c feature/navbar
```

بعد تغییرات را انجام دهد:

```bash
git status
git diff
```

و مثلاً:

```bash
git add index.html
git commit -m "feat: add navigation bar structure"
```

سپس CSS:

```bash
git add assets/css/style.css
git commit -m "style: add navbar styles"
```

و push:

```bash
git push -u origin feature/navbar
```

---

# گام ۷: Pull Request بزنید

در GitHub:

```text
feature/navbar
        ↓ PR
dev
```

یک عضو دیگر PR را بررسی و merge کند.

برای همه featureها همین سیاست را اجرا کنید:

```text
feature/* → dev
```

و در انتهای یک نسخه:

```text
dev → main
```

را هم با Pull Request انجام دهید.

یعنی main مستقیماً تغییر نکند.

---

# گام ۸: هر عضو قبل از شروع کار خودش repository را به‌روز کند

اعضای تیم repository را clone کنند:

```bash
git clone https://github.com/USERNAME/static-frontend-lab.git
cd static-frontend-lab
```

قبل از ساخت feature جدید:

```bash
git fetch origin

git switch dev

git pull origin dev
```

بعد:

```bash
git switch -c feature/features
```

این روش احتمال کار کردن روی کد قدیمی را کمتر می‌کند.

---

# گام ۹: ۲۰ commit را از الان برنامه‌ریزی کنید

**۲۰ commit را در آخر کار مصنوعی نسازید.**

مثلاً این ۲۴ commit کاملاً قابل دفاع‌اند:

```text
1.  chore: initialize project structure
2.  chore: add gitignore rules
3.  docs: add initial project description
4.  feat: add navbar structure
5.  style: style navigation bar
6.  feat: add hero section
7.  style: add hero section styles
8.  feat: add feature cards
9.  style: style feature cards
10. feat: add team section
11. feat: add contact section
12. feat: add footer
13. style: define global typography
14. style: add project color variables
15. feat: add smooth scrolling
16. feat: add mobile navigation
17. feat: add dark mode toggle
18. fix: improve mobile navigation
19. fix: improve cards responsive layout
20. a11y: improve image alt texts and labels
21. ci: add GitHub Pages deployment workflow
22. docs: document branch strategy and conflicts
23. docs: add git concepts questions and answers
24. docs: add deployed GitHub Pages URL
```

اگر ویژگی واقعاً وجود ندارد فقط برای commit آن را نسازید. اصل ماجرا این است که:

> هر commit باید یک تغییر مشخص و قابل توضیح داشته باشد.

برای دیدن تاریخچه:

```bash
git log --oneline
```

و برای فیلم خیلی بهتر:

```bash
git log --oneline --graph --decorate --all
```

---

# گام ۱۰: مفهوم Atomic Commit را عملاً رعایت کنید

مثلاً این commit خوب نیست:

```text
fix everything
```

چون ممکن است Navbar، Footer، README، CSS و JavaScript را هم‌زمان تغییر داده باشد.

بهتر:

```text
feat: add dark mode toggle
```

و بعد:

```text
style: add dark mode colors
```

Atomic Commit یعنی یک commit روی **یک تغییر منطقی مشخص** تمرکز کند.

Atomic Pull Request نیز یعنی PR یک هدف مشخص داشته باشد؛ مثلاً:

```text
Add dark mode
```

نه:

```text
Add dark mode + fix footer + rewrite README + change navbar
```

---

# گام ۱۱: Conflict اول را ایجاد و حل کنید

این قسمت مهم است و **حتماً فیلم بگیرید**.

فرض کنید دو نفر از یک نسخه `dev` branch می‌سازند:

```text
feature/hero
feature/navbar
```

هر دو یک خط مشابه در `index.html` را تغییر می‌دهند.

مثلاً:

```html
<header>
```

یا متن title مشترک.

ابتدا PR شاخه:

```text
feature/hero → dev
```

را merge کنید.

حالا `feature/navbar` از dev عقب افتاده است.

روی `feature/navbar`:

```bash
git switch feature/navbar
git fetch origin
git merge origin/dev
```

احتمالاً می‌بینید:

```text
CONFLICT (content): Merge conflict in index.html
```

بعد:

```bash
git status
```

داخل فایل چیزی شبیه این دیده می‌شود:

```text
<<<<<<< HEAD
کد feature/navbar
=======
کد dev
>>>>>>> origin/dev
```

خودتان تصمیم بگیرید نسخه نهایی چه باشد و markerها را پاک کنید.

بعد:

```bash
git add index.html

git commit -m "fix: resolve header merge conflict"

git push
```

این می‌شود **Conflict شماره ۱**.

در README توضیح دهید:

```text
Conflict #1

Branches:
feature/navbar and dev

File:
index.html

Cause:
Both branches modified the header section.

Resolution:
We manually combined the intended changes and committed the
resolved version.
```

---

# گام ۱۲: Conflict دوم

مثلاً:

```text
feature/theme
```

و:

```text
fix/responsive
```

هر دو selector زیر را تغییر دهند:

```css
.hero {
    ...
}
```

اول یکی merge شود.

روی دیگری:

```bash
git fetch origin
git merge origin/dev
```

Conflict را این بار داخل:

```text
assets/css/style.css
```

حل کنید:

```bash
git status
```

فایل را اصلاح کنید:

```bash
git add assets/css/style.css
git commit -m "fix: resolve responsive styles conflict"
git push
```

در README هم Conflict دوم را مستند کنید.

---

# گام ۱۳: دستورهای Git را عملاً تمرین کنید

صورت آزمایش تأکید کرده که بهتر است دستورات را دستی در terminal اجرا کنید. چند دستور را حتماً در طول پروژه استفاده کنید:

```bash
git status
git add
git commit
git log
git diff
git branch
git switch
git fetch
git pull
git push
git merge
git stash
git restore
git revert
git rebase
git cherry-pick
```

ولی `reset` و `rebase` را روی تاریخچه‌ای که دیگر اعضا استفاده می‌کنند بی‌دلیل اجرا نکنید.

مثلاً برای `stash` یک سناریوی واقعی:

وسط تغییر Navbar هستید ولی باید سریع branch دیگری را ببینید:

```bash
git status
git stash
git switch dev
```

برگردید:

```bash
git switch feature/navbar
git stash pop
```

برای مشاهده stage:

```bash
git add index.html

git diff
git diff --staged
```

این دو دستور خیلی خوب مفهوم Working Directory و Stage را نشان می‌دهند.

---

# گام ۱۴: GitHub Actions را اضافه کنید

پس از اینکه نسخه سایت آماده شد، branch بسازید:

```bash
git switch dev
git pull origin dev

git switch -c ci/github-pages
```

فایل زیر را ایجاد کنید:

```text
.github/workflows/deploy.yml
```

برای یک سایت pure static می‌توانید از workflow فعلی پیشنهادشده در مستندات GitHub Pages استفاده کنید:

```yaml
name: Deploy static site to Pages

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v6

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v4
        with:
          path: "."

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

سپس:

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Pages deployment workflow"
git push -u origin ci/github-pages
```

Pull Request:

```text
ci/github-pages → dev
```

و نهایتاً:

```text
dev → main
```

---

# گام ۱۵: GitHub Pages را فعال کنید

در Repository:

```text
Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions
```

را انتخاب کنید.

بعد از merge شدن PR به `main`:

```text
Repository → Actions
```

را باز کنید.

باید workflow سبز شود.

برای project page آدرس معمولاً به شکل زیر خواهد بود:

```text
https://USERNAME.github.io/REPOSITORY/
```

---

# گام ۱۶: استقرار خودکار را عملاً ثابت کنید

فقط یک بار deploy شدن کافی نیست که مفهوم Continuous Deployment را خوب نمایش دهد.

مثلاً در branch:

```text
fix/footer-text
```

یک تغییر کوچک انجام دهید:

```bash
git commit -m "fix: update footer copyright text"
```

بعد:

```text
Pull Request → dev
dev → main
```

وقتی main تغییر کند، بدون اینکه دستی Pages را deploy کنید، GitHub Action دوباره اجرا می‌شود و نسخه جدید سایت منتشر می‌شود.

این قسمت برای فیلم خیلی ارزشمند است.

---

# گام ۱۷: ساختار README

README شما بهتر است حداقل این بخش‌ها را داشته باشد:

```markdown
# Static Frontend with Automatic Deployment

## Project Description

## Team Members

## Technologies

## Project Structure

## How to Run

## Git Workflow

### Branch Strategy

### Commit Strategy

### Pull Requests

### Merge Conflicts

#### Conflict #1

#### Conflict #2

### Main Branch Protection

## Continuous Deployment

### GitHub Actions

### GitHub Pages

## Live Demo

## Git Questions

### Question 1
...

### Question 2
...

...

### Question 7
...
```

---

# گام ۱۸: در قسمت Branchها چه بنویسید؟

مثلاً توضیح دهید:

```text
main:
Contains the stable and production-ready version of the project.
Direct pushes to this branch are restricted.

dev:
Integration branch. Completed features are merged into this
branch through pull requests before being released to main.

feature/navbar:
Used for implementing the navigation component.

feature/theme:
Used for implementing dark/light theme functionality.

fix/responsive:
Used for resolving responsive layout issues.
```

برای هر branch بهتر است توضیح دهید:

```text
هدف branch
چه کسی روی آن کار کرد
چه تغییراتی انجام شد
به کدام branch merge شد
شماره PR
```

---

# گام ۱۹: گزارش Commitها

لازم نیست تمام جزئیات commit را دستی از حافظه بنویسید.

در پایان:

```bash
git log --oneline --all
```

و:

```bash
git log --graph --oneline --decorate --all
```

را اجرا کنید.

در README می‌توانید چند commit مهم را معرفی کنید و سپس توضیح دهید که تاریخچه کامل در Git repository موجود است.

حتماً تعداد commit واقعی:

```text
>= 20
```

باشد.

---

# پاسخ سؤال‌های README

## سؤال ۱ — پوشه `.git` چیست؟

`.git` پوشه‌ای است که repository محلی Git را تشکیل می‌دهد. اطلاعاتی مانند objectهای Git، commitها و داده‌های repository، references مربوط به branchها و tagها، `HEAD`، configuration و staging area/index در آن نگهداری می‌شود.

با دستور:

```bash
git init
```

ساخته می‌شود.

همچنین هنگام:

```bash
git clone
```

کردن یک repository نیز Git repository محلی شامل `.git` ایجاد می‌شود.

---

# سؤال ۲ — Atomic Commit و Atomic Pull Request

**Atomic Commit** یعنی یک commit باید نماینده یک تغییر منطقی و مشخص باشد.

مثلاً:

```text
feat: add mobile navigation
```

بهتر از:

```text
update project
```

است.

اگر Navbar را اضافه کرده‌ایم، بهتر است همان تغییر مرتبط در commit باشد و همزمان به صورت بی‌ربط README، Footer و Dark Mode را تغییر ندهیم.

**Atomic Pull Request** نیز همین ایده را در سطح PR دارد؛ یک PR بهتر است یک هدف مشخص و مستقل داشته باشد تا review، تست و merge آن ساده‌تر باشد.

مثلاً:

```text
Add dark mode support
```

یک PR مناسب است.

---

# سؤال ۳ — تفاوت fetch، pull، merge، rebase و cherry-pick

### `git fetch`

اطلاعات جدید remote را دانلود می‌کند و remote-tracking refs را به‌روز می‌کند ولی مستقیماً branch کاری فعلی را با آن merge نمی‌کند.

```bash
git fetch origin
```

### `git pull`

ابتدا fetch انجام می‌دهد و سپس تغییرات branch remote را با branch فعلی integrate می‌کند؛ نوع integration می‌تواند بر اساس تنظیم/گزینه merge یا rebase باشد.

```bash
git pull origin dev
```

### `git merge`

تاریخچه دو branch را با یکدیگر ترکیب می‌کند.

```bash
git merge feature/navbar
```

ممکن است نتیجه fast-forward باشد یا یک merge commit ایجاد شود.

### `git rebase`

commitهای branch جاری را روی base جدید replay می‌کند:

```bash
git rebase main
```

به همین دلیل commitهای replayشده شناسه‌های جدید پیدا می‌کنند و تاریخچه تغییر می‌کند.

### `git cherry-pick`

تغییرات ایجادشده توسط یک commit مشخص را انتخاب کرده و روی branch فعلی به شکل یک commit جدید اعمال می‌کند.

```bash
git cherry-pick a1b2c3d
```

خلاصه:

```text
fetch       → دریافت اطلاعات remote
pull        → دریافت + integrate
merge       → ترکیب تاریخچه branchها
rebase      → بازپخش commitها روی base جدید
cherry-pick → برداشتن یک commit مشخص و اعمال روی branch فعلی
```

---

# سؤال ۴ — reset، revert، restore، switch و checkout

### `git reset`

برای جابه‌جا کردن HEAD/branch و بسته به mode برای تغییر index و Working Tree استفاده می‌شود.

مثلاً:

```bash
git reset --soft HEAD~1
```

یا:

```bash
git reset --hard HEAD~1
```

`--hard` خطرناک است چون می‌تواند تغییرات working tree را از بین ببرد.

### `git revert`

به جای حذف commit از تاریخچه، یک **commit جدید** می‌سازد که اثر commit قبلی را معکوس می‌کند.

```bash
git revert <commit>
```

بنابراین معمولاً برای تاریخچه‌ای که push شده گزینه امن‌تری از بازنویسی history است.

### `git restore`

برای برگرداندن محتوای فایل‌ها در working tree یا staging area استفاده می‌شود.

```bash
git restore index.html
```

یا:

```bash
git restore --staged index.html
```

### `git switch`

کار اصلی آن جابه‌جایی بین branchهاست:

```bash
git switch dev
```

و ساخت branch:

```bash
git switch -c feature/navbar
```

### `git checkout`

دستور قدیمی‌تر و چندمنظوره است که هم می‌تواند branch را عوض کند و هم فایل‌ها را restore کند.

امروزه برای واضح‌تر شدن عملیات معمولاً:

```text
switch  → branch
restore → files
```

استفاده می‌شود.

---

# سؤال ۵ — Stage یا Index چیست؟ Stash چیست؟

Stage یا Staging Area که در Git به آن **Index** نیز گفته می‌شود، محلی است که تعیین می‌کنیم چه تغییراتی وارد commit بعدی شوند.

مثلاً:

```bash
git add index.html
```

نسخه فعلی `index.html` را برای snapshot بعدی stage می‌کند.

بعد:

```bash
git commit
```

commit بر اساس محتوای stage ساخته می‌شود.

### Stash

`stash` برای ذخیره موقت تغییرات commitنشده است:

```bash
git stash
```

حالا می‌توانیم branch را عوض کنیم.

سپس:

```bash
git stash pop
```

تا تغییرات دوباره اعمال شوند.

---

# سؤال ۶ — Snapshot چیست و چه ارتباطی با Commit دارد؟

به‌صورت مفهومی Git هر commit را به‌عنوان یک **snapshot از وضعیت پروژه** در یک لحظه در نظر می‌گیرد، نه صرفاً یک فایل diff.

فایل‌ها در objectهایی مانند `blob` ذخیره می‌شوند و treeها ساختار directory را نمایش می‌دهند؛ commit به tree مربوط به snapshot پروژه و همچنین parent commit مرتبط است.

می‌توان مفهومی تصور کرد:

```text
Commit C
│
├── index.html   version 3
├── style.css    version 5
└── main.js      version 2
```

commit بعدی:

```text
Commit D
│
├── index.html   version 4
├── style.css    version 5
└── main.js      version 2
```

Git برای ذخیره‌سازی بهینه objectها را reuse می‌کند، بنابراین لازم نیست محتوای تکراری را هر بار دوباره ذخیره کند.

---

# سؤال ۷ — Local Repository و Remote Repository

**Local Repository** روی سیستم خود توسعه‌دهنده قرار دارد.

مثلاً:

```text
C:\Users\Ali\Projects\static-frontend
```

یا:

```text
/home/ali/projects/static-frontend
```

شما می‌توانید بدون اینترنت روی آن:

```bash
git status
git add
git commit
git branch
git switch
git log
```

انجام دهید.

**Remote Repository** نسخه‌ای از repository است که روی یک سرویس دیگر مانند GitHub قرار دارد و معمولاً برای همکاری بین اعضای تیم استفاده می‌شود.

مثلاً:

```text
origin
```

به remote GitHub اشاره می‌کند.

مشاهده آن:

```bash
git remote -v
```

دریافت اطلاعات:

```bash
git fetch origin
```

ارسال commitها:

```bash
git push origin feature/navbar
```

بنابراین:

```text
Local Repository
     │
     │ git push
     ▼
Remote Repository (GitHub)
     │
     │ git fetch / git pull
     ▼
Local Repository
```

---

# گام ۲۰: چه چیزهایی را حتماً در فیلم نشان دهید؟

برای اینکه تقریباً هیچ الزام قابل اثباتی جا نیفتد، این ترتیب مناسب است:

1. Repository در GitHub و اعضای تیم.
2. اجرای چند دستور با terminal، نه IDE.
3. نمایش `.gitignore`.
4. اجرای `git status`.
5. نمایش branchها با:
   ```bash
   git branch
   ```
6. ایجاد یک feature branch با `git switch -c`.
7. انجام `git add` و `git commit`.
8. نمایش تاریخچه با:
   ```bash
   git log --oneline --graph --all
   ```
9. نمایش حداقل ۲۰ commit.
10. نمایش حداقل سه branch معنی‌دار.
11. نمایش **Conflict شماره ۱** در Terminal.
12. نمایش markerهای `<<<<<<<` و حل Conflict.
13. نمایش **Conflict شماره ۲**.
14. نمایش Pull Requestهای feature → dev.
15. نمایش Pull Request مربوط به dev → main.
16. نمایش تنظیم Branch Protection مربوط به `main`.
17. نشان دهید direct push به main روش کار تیم نیست و merge از PR انجام می‌شود.
18. نمایش فایل:
   ```text
   .github/workflows/deploy.yml
   ```
19. نمایش اجرای موفق workflow در تب Actions.
20. باز کردن آدرس GitHub Pages.
21. یک تغییر جدید merge کنید و نشان دهید Action خودکار دوباره اجرا می‌شود.
22. README و پاسخ هفت سؤال را نمایش دهید.

---

## در پایان پروژه باید بتوانید این چک نهایی را تیک بزنید

```text
✓ Static frontend پیاده‌سازی شده
✓ Git از ابتدای پروژه استفاده شده
✓ تمام اعضای تیم روی یک repository کار کرده‌اند
✓ .gitignore وجود دارد
✓ حداقل 20 commit معنادار وجود دارد
✓ حداقل 3 branch معنادار وجود دارد
✓ حداقل 2 merge conflict واقعاً حل شده
✓ main محافظت شده است
✓ main فقط از طریق Pull Request تغییر کرده است
✓ feature branchها از طریق PR ادغام شده‌اند
✓ GitHub Actions ساخته شده است
✓ GitHub Pages فعال است
✓ deploy خودکار با تغییر main انجام می‌شود
✓ آدرس GitHub Pages در README قرار دارد
✓ Branchها در README توضیح داده شده‌اند
✓ Commitها در README گزارش شده‌اند
✓ دو Conflict در README گزارش شده‌اند
✓ پاسخ هر 7 سؤال در README قرار دارد
✓ فیلم مراحل تهیه شده است
```

با این روند، تاریخچه نهایی Git شما هم طبیعی خواهد بود و هم تقریباً تمام چیزهایی که استاد ممکن است هنگام بررسی repository یا فیلم بخواهد—branch، commit، conflict، PR، protection، Actions و Pages—به‌صورت واضح قابل مشاهده خواهد بود.

---

## User

PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git push -u origin main

error: src refspec main does not match any

error: failed to push some refs to 'https://github.com/Ali-Najar/static-frontend-lab.git'

---

## Assistant

این خطا معمولاً یعنی Git در مخزن محلی شما هنوز شاخه‌ای به نام `main` ندارد، یا هنوز هیچ commitی ایجاد نشده که قابل push باشد.

اول این سه دستور را بزن:

```bash
git status
git branch
git log --oneline
```

اگر `git log` خطایی شبیه این داد:

```text
fatal: your current branch 'main' does not have any commits yet
```

یعنی هنوز commit اولیه را نزده‌ای. در این حالت:

```bash
git add .
git commit -m "chore: initialize project structure"
```

بعد مطمئن شو نام branch برابر `main` است:

```bash
git branch -M main
```

و سپس:

```bash
git push -u origin main
```

پس ترتیب کامل پیشنهادی الان این است:

```bash
git status

git add .

git commit -m "chore: initialize project structure"

git branch -M main

git remote -v

git push -u origin main
```

اگر هنگام `git commit` پیام مربوط به `user.name` و `user.email` گرفتی، یک بار این‌ها را تنظیم کن:

```bash
git config --global user.name "Ali Najar"
git config --global user.email "ایمیل متصل به GitHub"
```

بعد دوباره:

```bash
git commit -m "chore: initialize project structure"
git push -u origin main
```

**علت اصلی خطای شما:**

```text
error: src refspec main does not match any
```

یعنی Git چیزی به نام `main` که دارای commit باشد برای ارسال به GitHub پیدا نکرده است.

اگر خروجی این سه دستور را بفرستی:

```bash
git status
git branch
git log --oneline
```

می‌توانم دقیقاً بگویم الان repository شما در چه وضعیتی است و دستور بعدی چیست.

---

## User

در حال انجام پروژه بصورت تک نفره هستم ولی خب میشه عمده چیز هایش را تک نفره هم انجام داد

---

## Assistant

بله، تقریباً همه‌ی بخش‌های فنی این پروژه را می‌توانی تک‌نفره انجام بدهی. فقط باید حواست باشد صورت‌مسئله گفته «همه اعضای تیم»، ولی اگر عملاً تک‌نفره‌ای، باید Git workflow را شبیه یک تیم واقعی اجرا کنی.

یعنی این کارها را همچنان انجام بده:

- `main` را محافظت کن و مستقیم روی آن کار نکن.
- یک شاخه `dev` داشته باش.
- برای هر قابلیت، branch جدا بساز؛ مثلاً:
  ```bash
  feature/navbar
  feature/hero
  feature/dark-mode
  fix/responsive
  ```
- برای ادغام branchها Pull Request بساز، حتی اگر خودت سازنده و merge‌کننده PR هستی.
- حداقل ۲۰ commit واقعاً معنادار داشته باش.
- دو conflict واقعی ایجاد و خودت حل کن.
- GitHub Actions و GitHub Pages را راه‌اندازی کن.
- همه این مراحل را در README گزارش کن.

برای کار تک‌نفره پیشنهاد می‌کنم workflow تو این باشد:

```text
main
└── dev
    ├── feature/navbar
    ├── feature/hero
    ├── feature/features
    ├── feature/dark-mode
    └── fix/responsive
```

مثلاً برای هر قابلیت:

```bash
git switch dev
git pull origin dev

git switch -c feature/navbar
```

تغییرات را انجام بده:

```bash
git add .
git commit -m "feat: add navbar structure"

git add .
git commit -m "style: add navbar responsive styles"

git push -u origin feature/navbar
```

بعد در GitHub:

```text
feature/navbar → Pull Request → dev
```

پس از تکمیل چند feature:

```text
dev → Pull Request → main
```

### دو conflict را هم تک‌نفره می‌توانی کاملاً واقعی ایجاد کنی

مثلاً ابتدا:

```bash
git switch dev
git switch -c feature/hero
```

در `index.html` این خط را تغییر بده:

```html
<h1>Build Better Software</h1>
```

commit کن.

بعد از `dev` یک branch دیگر بساز:

```bash
git switch dev
git switch -c feature/home-title
```

همان خط را متفاوت تغییر بده:

```html
<h1>Welcome to TeamFlow</h1>
```

هر دو را commit کن.

ابتدا `feature/hero` را به `dev` merge کن.

بعد:

```bash
git switch feature/home-title
git fetch origin
git merge origin/dev
```

حالا چون هر دو branch همان خط را تغییر داده‌اند، احتمالاً conflict می‌گیری:

```text
CONFLICT (content): Merge conflict in index.html
```

و بعد خودت آن را حل می‌کنی.

برای conflict دوم همین کار را روی `style.css` انجام بده.

### یک نکته مهم درباره Branch Protection

چون تنها هستی، در GitHub بهتر است الزام:

```text
Require a pull request before merging
```

را فعال کنی، اما اگر:

```text
Require approvals
```

را روی ۱ بگذاری، ممکن است نتوانی PR خودت را approve کنی و گیر بیفتی.

پس برای پروژه تک‌نفره بهتر است branch protection داشته باشی ولی الزام approval شخص دوم را فعال نکنی، مگر اینکه یک همکلاسی بتواند PRهایت را review کند.

در README هم شفاف بنویس که پروژه به‌صورت فردی انجام شده و برای تمرین فرآیند تیمی، از feature branch، Pull Request و branch protection استفاده کرده‌ای. این از این بهتر است که وانمود کنی چند نفر روی پروژه کار کرده‌اند.

در واقع پروژه تک‌نفره حتی می‌تواند برای یادگیری Git خیلی مناسب باشد، چون خودت تمام نقش‌ها را تجربه می‌کنی:

```text
Developer
↓
Feature Branch
↓
Commit
↓
Push
↓
Pull Request
↓
Merge
↓
Deployment
```

و از نظر الزامات، مهم‌ترین بخش‌هایی که باید عمداً برایشان برنامه داشته باشی **۲۰ commit، حداقل ۳ branch، دو conflict و PRهای متعدد** هستند؛ بقیه تقریباً مستقیم قابل انجام‌اند.

---

## User

خب همه اون مراحلی که گفته بودی انجام بدم برای پروژه رو با جزییات کامل بگو و همچنین طوری توضیح بده که یاد هم بگیرم

---

## Assistant

این بار مسیر را مثل یک **آزمایش آموزشی واقعی** می‌چینم: در هر مرحله می‌گویم «چه کاری انجام بدهی»، «چه دستوری بزنی»، «چرا این کار را می‌کنیم»، «چه چیزی باید ببینی» و «چه چیزی را برای گزارش/ویدئو نگه داری». چون تک‌نفره‌ای، workflow را طوری طراحی می‌کنیم که همچنان branch، PR، conflict و deployment را درست تمرین کنی.

برای اینکه ۲۰ commit مصنوعی نشوند، پروژه را به چند قابلیت کوچک می‌شکنیم. من فرض می‌کنم پروژه‌ات یک سایت تک‌صفحه‌ای ساده با HTML/CSS/JS است؛ مثلاً معرفی یک محصول/تیم. همین انتخاب برای این درس عالی است، چون تمام تمرکز روی Git می‌ماند و با `npm` و build system حواس‌مان پرت نمی‌شود.

حتماً. این پروژه را طوری جلو می‌بریم که در پایان فقط «تحویلش نداده باشی»، بلکه واقعاً Git را بفهمی. چون تک‌نفره‌ای، نقش چند توسعه‌دهنده را با branchهای مختلف شبیه‌سازی می‌کنیم، اما هیچ کار ساختگی یا غیرمنطقی لازم نیست.

من فرض می‌کنم repository تو همین است:

```text
Ali-Najar/static-frontend-lab
```

و پروژه را با **HTML + CSS + JavaScript خالص** می‌سازیم.

---

# نقشه‌ای که قرار است اجرا کنیم

جریان کلی ما این است:

```text
Local Project
    │
    ├── main                 ← نسخه پایدار
    │
    └── dev                  ← محل تجمیع توسعه
         │
         ├── feature/navbar
         ├── feature/hero
         ├── feature/sections
         ├── feature/theme
         ├── feature/interactions
         ├── fix/responsive
         └── ci/github-pages

feature/* → Pull Request → dev
dev       → Pull Request → main
main      → GitHub Actions → GitHub Pages
```

در طول این مسیر هم:

```text
20+ meaningful commits
3+ meaningful branches
2 merge conflicts
Pull Requests
Branch Protection
.gitignore
GitHub Actions
GitHub Pages
README
```

را خواهیم داشت.

---

# مرحله صفر — اول مدل ذهنی Git را یاد بگیر

قبل از دستور زدن، این تصویر را در ذهن داشته باش:

```text
Working Directory
      │
      │ git add
      ▼
Staging Area / Index
      │
      │ git commit
      ▼
Local Repository
      │
      │ git push
      ▼
Remote Repository / GitHub
```

فرض کن `index.html` را تغییر داده‌ای.

در ابتدا تغییر فقط روی کامپیوتر تو است:

```text
Working Directory
```

وقتی می‌زنی:

```bash
git add index.html
```

می‌گویی:

> Git، نسخه فعلی این فایل را برای commit بعدی آماده کن.

بعد:

```bash
git commit -m "feat: add navigation bar"
```

یک snapshot در repository محلی ایجاد می‌شود.

هنوز GitHub چیزی از آن نمی‌داند.

وقتی:

```bash
git push
```

می‌زنی، commitهای محلی به remote repository می‌روند.

---

# مرحله ۱ — وضعیت فعلی پروژه‌ات را بررسی کن

تو الان داخل این مسیر هستی:

```powershell
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab>
```

اول این‌ها را اجرا کن:

```bash
git status
```

بعد:

```bash
git branch --show-current
```

بعد:

```bash
git remote -v
```

و:

```bash
git log --oneline
```

### این دستورها چه می‌کنند؟

`git status` وضعیت فایل‌های تغییرکرده، stage شده و untracked را نشان می‌دهد.

`git branch --show-current` می‌گوید الان روی کدام branch هستی.

مثلاً:

```text
main
```

`git remote -v` ارتباط repository محلی با GitHub را نشان می‌دهد.

`git log --oneline` تاریخچه commitها را نشان می‌دهد.

اگر هنوز commit نداری ممکن است خطایی شبیه این ببینی:

```text
fatal: your current branch 'main' does not have any commits yet
```

مشکلی نیست؛ همین را در مرحله بعد حل می‌کنیم.

---

# مرحله ۲ — اطلاعات Git خودت را بررسی کن

بزن:

```bash
git config user.name
git config user.email
```

اگر خالی بود یا اشتباه بود:

```bash
git config --global user.name "Ali Najar"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

ایمیل بهتر است ایمیلی باشد که GitHub آن را به حساب تو می‌شناسد.

---

# مرحله ۳ — ساختار اولیه پروژه را بساز

داخل پروژه این ساختار را ایجاد کن:

```text
static-frontend-lab/
│
├── index.html
├── README.md
├── .gitignore
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   └── images/
│
└── .github/
    └── workflows/
```

---

# مرحله ۴ — یک HTML خیلی ساده ایجاد کن

فعلاً `index.html` را پیچیده نکن.

مثلاً:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TeamFlow</title>

    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <main>
        <h1>TeamFlow</h1>
        <p>A simple static frontend project.</p>
    </main>

    <script src="assets/js/main.js"></script>
</body>
</html>
```

در `style.css`:

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}
```

در `main.js`:

```javascript
console.log("TeamFlow application loaded.");
```

---

# مرحله ۵ — `.gitignore`

فایل:

```text
.gitignore
```

را بساز و داخل آن:

```gitignore
# Operating System
.DS_Store
Thumbs.db

# IDE
.idea/
.vscode/

# Environment files
.env
.env.*

# Logs
*.log

# Temporary files
*.tmp
```

قرار بده.

### `.gitignore` چه می‌کند؟

به Git می‌گوید:

> این فایل‌ها یا پوشه‌ها را track نکن.

مثلاً `.env` ممکن است اطلاعات محرمانه داشته باشد، بنابراین نباید وارد repository شود.

---

# مرحله ۶ — اولین commit واقعی

حالا:

```bash
git status
```

باید فایل‌های untracked را ببینی.

قبل از `git add` این را هم امتحان کن:

```bash
git diff
```

حالا:

```bash
git add index.html assets
```

دوباره:

```bash
git status
```

خواهی دید فایل‌ها زیر قسمت:

```text
Changes to be committed
```

آمده‌اند.

حالا:

```bash
git commit -m "chore: initialize static frontend project"
```

این **Commit شماره ۱** تو است.

---

# مرحله ۷ — `.gitignore` را جداگانه commit کن

```bash
git add .gitignore
git status
```

بعد:

```bash
git commit -m "chore: add gitignore rules"
```

این **Commit شماره ۲** است.

چرا جدا؟

چون داریم Atomic Commit را رعایت می‌کنیم.

---

# مرحله ۸ — README اولیه

در `README.md` فعلاً بنویس:

```markdown
# Static Frontend Lab

A static frontend project created for the Software Engineering Lab.

## Technologies

- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Actions
- GitHub Pages
```

بعد:

```bash
git add README.md
git commit -m "docs: add initial project README"
```

این می‌شود **Commit شماره ۳**.

---

# مرحله ۹ — اسم branch را main کن

حالا:

```bash
git branch -M main
```

بررسی:

```bash
git branch
```

باید:

```text
* main
```

ببینی.

---

# مرحله ۱۰ — Remote را بررسی کن

```bash
git remote -v
```

اگر این را داری:

```text
origin https://github.com/Ali-Najar/static-frontend-lab.git
```

کاری لازم نیست.

اگر نداری:

```bash
git remote add origin https://github.com/Ali-Najar/static-frontend-lab.git
```

---

# مرحله ۱۱ — اولین Push

حالا دیگر خطای قبلی را نباید بگیری، چون commit داری:

```bash
git push -u origin main
```

گزینه `-u` ارتباط tracking بین local `main` و `origin/main` را برقرار می‌کند.

---

# مرحله ۱۲ — تفاوت local و remote را همین‌جا بفهم

الان دو چیز داریم:

```text
main
```

branch روی سیستم تو.

و:

```text
origin/main
```

نماینده branch موجود روی GitHub.

این‌ها لزوماً همیشه برابر نیستند.

---

# مرحله ۱۳ — `main` را محافظت کن

این کار مهم است.

از اینجا به بعد دیگر قرار نیست مستقیم روی `main` توسعه بدهیم.

در GitHub تقریباً:

```text
Repository
→ Settings
→ Branches
→ Branch protection rules
→ Add rule
```

Branch pattern:

```text
main
```

فعال کن:

```text
Require a pull request before merging
```

### نکته مهم برای تو که تک‌نفره‌ای

**Require approvals را فعال نکن.**

---

# مرحله ۱۴ — چرا main را محافظت کردیم؟

در پروژه واقعی:

```text
main = نسخه‌ای که باید سالم باشد
```

نمی‌خواهیم توسعه‌دهنده همین‌طوری بزند:

```bash
git push origin main
```

بلکه می‌خواهیم:

```text
Feature
   ↓
Pull Request
   ↓
Review / Checks
   ↓
Main
```

---

# مرحله ۱۵ — branch توسعه `dev`

حالا روی سیستم:

```bash
git switch main
git pull origin main
git switch -c dev
git push -u origin dev
```

---

# مرحله ۱۶ — استراتژی branchهای ما

از این به بعد:

```text
main
│
└── dev
    │
    ├── feature/navbar
    ├── feature/hero
    ├── feature/sections
    ├── feature/theme
    ├── feature/interactions
    └── fix/responsive
```

قانون:

```text
main
```

فقط نسخه production.

```text
dev
```

نسخه integration.

```text
feature/*
```

برای قابلیت جدید.

```text
fix/*
```

برای bug fix.

```text
ci/*
```

برای CI/CD.

---

# مرحله ۱۷ — قانون طلایی قبل از ساخت feature

همیشه قبل از شروع feature جدید:

```bash
git switch dev
git pull origin dev
```

بعد feature را بساز:

```bash
git switch -c feature/navbar
```

چرا؟

چون feature جدید باید از **جدیدترین dev** ساخته شود.

---

# مرحله ۱۸ — اولین Feature واقعی: Navbar

روی:

```text
feature/navbar
```

باش:

```bash
git branch --show-current
```

حالا Navbar را به `index.html` اضافه کن.

مثلاً:

```html
<header class="header">
    <nav class="navbar">
        <a href="#" class="logo">TeamFlow</a>

        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#team">Team</a></li>
        </ul>
    </nav>
</header>
```

بعد:

```bash
git diff
git add index.html
git diff --staged
git commit -m "feat: add navigation bar structure"
```

**Commit شماره ۴**

---

# مرحله ۱۹ — Style مربوط به Navbar

CSS را تغییر بده.

بعد:

```bash
git status
git diff
git add assets/css/style.css
git commit -m "style: add navigation bar styles"
```

**Commit شماره ۵**

---

# مرحله ۲۰ — Responsive Navbar

Responsive را اضافه کن:

```css
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
}
```

بعد:

```bash
git add assets/css/style.css
git commit -m "style: make navigation responsive"
```

**Commit شماره ۶**

---

# مرحله ۲۱ — Feature branch را Push کن

```bash
git push -u origin feature/navbar
```

---

# مرحله ۲۲ — Pull Request اول

در GitHub:

```text
feature/navbar → dev
```

عنوان:

```text
feat: add responsive navigation bar
```

---

# مرحله ۲۳ — local dev خودت را به‌روز کن

```bash
git switch dev
git pull origin dev
```

---

# مرحله ۲۴ — Feature دوم: Hero

```bash
git switch dev
git pull origin dev

git switch -c feature/hero
```

Hero section ایجاد کن.

Commit اول:

```bash
git add index.html
git commit -m "feat: add hero section content"
```

**Commit شماره ۷**

CSS:

```bash
git add assets/css/style.css
git commit -m "style: add hero section layout"
```

**Commit شماره ۸**

CTA button:

```bash
git add index.html assets/css/style.css
git commit -m "feat: add hero call-to-action button"
```

**Commit شماره ۹**

Push:

```bash
git push -u origin feature/hero
```

سپس:

```text
feature/hero → PR → dev
```

merge.

---

# مرحله ۲۵ — برنامه ۲۰+ commit

برنامه‌ات می‌تواند تقریباً این باشد:

| # | Commit |
|---|---|
| 1 | `chore: initialize static frontend project` |
| 2 | `chore: add gitignore rules` |
| 3 | `docs: add initial project README` |
| 4 | `feat: add navigation bar structure` |
| 5 | `style: add navigation bar styles` |
| 6 | `style: make navigation responsive` |
| 7 | `feat: add hero section content` |
| 8 | `style: add hero section layout` |
| 9 | `feat: add hero call-to-action button` |
| 10 | `feat: add features section` |
| 11 | `style: add feature card styles` |
| 12 | `feat: add team section` |
| 13 | `feat: add footer section` |
| 14 | `feat: add dark mode toggle` |
| 15 | `style: add dark theme variables` |
| 16 | `feat: add smooth scrolling` |
| 17 | `feat: add mobile menu interaction` |
| 18 | `fix: improve mobile layout` |
| 19 | `fix: resolve hero spacing issue` |
| 20 | `a11y: improve semantic HTML and labels` |
| 21 | `ci: add GitHub Pages deployment workflow` |
| 22 | `docs: document branch strategy` |
| 23 | `docs: document merge conflict resolutions` |
| 24 | `docs: add answers to Git questions` |
| 25 | `docs: add GitHub Pages deployment URL` |

---

# مرحله ۲۶ — Feature Sections

```bash
git switch dev
git pull origin dev
git switch -c feature/sections
```

Features section:

```bash
git add index.html
git commit -m "feat: add features section"
```

CSS:

```bash
git add assets/css/style.css
git commit -m "style: add feature card styles"
```

Team:

```bash
git add index.html
git commit -m "feat: add team section"
```

Footer:

```bash
git add index.html
git commit -m "feat: add footer section"
```

Push:

```bash
git push -u origin feature/sections
```

PR:

```text
feature/sections → dev
```

---

# حالا قسمت مهم: Conflict

باید حداقل **دو conflict** داشته باشی.

---

# مرحله ۲۷ — Conflict شماره ۱

هدف:

```text
دو branch یک خط index.html را متفاوت تغییر دهند.
```

ابتدا:

```bash
git switch dev
git pull origin dev
```

فرض کن در Hero این خط را داری:

```html
<h1>Build Better Teams</h1>
```

## Branch اول

```bash
git switch -c feature/hero-copy
```

تغییر بده به:

```html
<h1>Build Better Teams Together</h1>
```

بعد:

```bash
git add index.html
git commit -m "feat: improve hero headline"
git push -u origin feature/hero-copy
```

قبل از merge، branch دوم را از همان dev قدیمی بساز.

```bash
git switch dev
git switch -c feature/marketing-copy
```

همان خط را تغییر بده به:

```html
<h1>Manage Your Team Smarter</h1>
```

Commit:

```bash
git add index.html
git commit -m "feat: update marketing headline"
git push -u origin feature/marketing-copy
```

---

# مرحله ۲۸ — Branch اول را merge کن

در GitHub:

```text
feature/hero-copy → dev
```

Merge کن.

---

# مرحله ۲۹ — Conflict را ایجاد کن

روی terminal:

```bash
git switch feature/marketing-copy
git fetch origin
git merge origin/dev
```

احتمالاً:

```text
CONFLICT (content): Merge conflict in index.html
```

---

# مرحله ۳۰ — فایل Conflict را نگاه کن

داخل `index.html` احتمالاً:

```text
<<<<<<< HEAD
<h1>Manage Your Team Smarter</h1>
=======
<h1>Build Better Teams Together</h1>
>>>>>>> origin/dev
```

---

# مرحله ۳۱ — Conflict را حل کن

نسخه نهایی:

```html
<h1>Build Smarter Teams Together</h1>
```

بعد:

```bash
git status
git add index.html
git status
git commit -m "fix: resolve hero headline merge conflict"
git push
```

### این Conflict شماره ۱ است.

---

# مرحله ۳۲ — Conflict شماره ۲ در CSS

اول:

```bash
git switch dev
git pull origin dev
```

در `style.css` مثلاً:

```css
.hero {
    padding: 80px 20px;
}
```

branch اول:

```bash
git switch -c feature/hero-layout
```

تغییر:

```css
.hero {
    padding: 120px 20px;
}
```

Commit:

```bash
git add assets/css/style.css
git commit -m "style: increase hero section spacing"
git push -u origin feature/hero-layout
```

برگرد dev:

```bash
git switch dev
```

branch دوم:

```bash
git switch -c fix/mobile-hero
```

همان خط:

```css
.hero {
    padding: 60px 16px;
}
```

Commit:

```bash
git add assets/css/style.css
git commit -m "fix: adjust hero spacing for mobile"
git push -u origin fix/mobile-hero
```

ابتدا در GitHub:

```text
feature/hero-layout → dev
```

را merge کن.

بعد terminal:

```bash
git switch fix/mobile-hero
git fetch origin
git merge origin/dev
```

Conflict.

نسخه نهایی منطقی:

```css
.hero {
    padding: 120px 20px;
}

@media (max-width: 768px) {
    .hero {
        padding: 60px 16px;
    }
}
```

بعد:

```bash
git add assets/css/style.css
git commit -m "fix: resolve hero responsive spacing conflict"
git push
```

### Conflict دوم تمام شد.

---

# مرحله ۳۳ — `git stash` را واقعاً یاد بگیر

```bash
git switch dev
git pull origin dev
git switch -c feature/interactions
```

`main.js` را تغییر بده ولی commit نکن.

بعد:

```bash
git status
git stash push -m "WIP mobile interaction"
git status
git stash list
git switch dev
git switch feature/interactions
git stash pop
```

---

# مرحله ۳۴ — `restore` را تمرین کن

```bash
git status
git diff
git restore index.html
```

⚠️ تغییر commitنشده‌ات از بین می‌رود.

---

# مرحله ۳۵ — Unstage کردن

مثلاً:

```bash
git add index.html
git restore --staged index.html
```

---

# مرحله ۳۶ — `fetch` و `pull` را عملی بفهم

### fetch

```bash
git fetch origin
```

یعنی آخرین اطلاعات GitHub را بگیر، ولی روی branch فعلی چیزی integrate نکن.

### pull

```bash
git pull origin dev
```

یعنی remote changes را بگیر و در branch فعلی integrate کن.

---

# مرحله ۳۷ — `merge` را بفهم

فرض کن:

```text
dev
A---B
     \
      C---D feature
```

وقتی feature با dev merge شود:

```text
A---B-------M dev
     \     /
      C---D
```

---

# مرحله ۳۸ — `rebase` را بفهم

فرض کن:

```text
A---B---C dev
     \
      D---E feature
```

اگر روی feature:

```bash
git rebase dev
```

بزنی:

```text
A---B---C---D'---E'
```

---

# مرحله ۳۹ — `cherry-pick`

فرض کن commit:

```text
abc1234
```

در branch دیگری داری و فقط همان commit را می‌خواهی.

```bash
git cherry-pick abc1234
```

---

# مرحله ۴۰ — `reset` و `revert`

## reset

```bash
git reset --soft HEAD~1
```

یا خطرناک‌تر:

```bash
git reset --hard HEAD~1
```

## revert

```bash
git revert <commit-hash>
```

history را پاک نمی‌کند؛ یک commit جدید می‌سازد که اثر commit قبلی را خنثی می‌کند.

---

# مرحله ۴۱ — سایر featureها

## Dark Mode

```bash
git switch dev
git pull origin dev
git switch -c feature/theme
```

JavaScript:

```bash
git add assets/js/main.js
git commit -m "feat: add dark mode toggle"
```

CSS:

```bash
git add assets/css/style.css
git commit -m "style: add dark theme variables"
```

Push و PR.

---

# مرحله ۴۲ — Interactions

```bash
git switch dev
git pull origin dev
git switch -c feature/interactions
```

مثلاً:

```bash
git add assets/js/main.js
git commit -m "feat: add smooth scrolling"
```

و:

```bash
git add assets/js/main.js
git commit -m "feat: add mobile menu interaction"
```

Push + PR.

---

# مرحله ۴۳ — Responsive fixes

```bash
git switch dev
git pull origin dev
git switch -c fix/responsive
```

مثلاً:

```bash
git add assets/css/style.css
git commit -m "fix: improve mobile layout"
```

بعد:

```bash
git add assets/css/style.css
git commit -m "fix: improve feature cards responsiveness"
```

Push و PR.

---

# مرحله ۴۴ — Accessibility

```bash
git add index.html
git commit -m "a11y: improve semantic HTML and labels"
```

---

# مرحله ۴۵ — تاریخچه Git را مشاهده کن

```bash
git log --oneline --graph --decorate --all
```

این دستور را **حتماً در فیلم نشان بده**.

---

# مرحله ۴۶ — حالا GitHub Actions

```bash
git switch dev
git pull origin dev
git switch -c ci/github-pages
```

فایل:

```text
.github/workflows/deploy.yml
```

را ایجاد کن.

محتوا:

```yaml
name: Deploy static site to GitHub Pages

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload static files
        uses: actions/upload-pages-artifact@v4
        with:
          path: "."

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

# مرحله ۴۷ — Workflow را commit کن

```bash
git add .github/workflows/deploy.yml
git diff --staged
git commit -m "ci: add GitHub Pages deployment workflow"
git push -u origin ci/github-pages
```

PR:

```text
ci/github-pages → dev
```

---

# مرحله ۴۸ — dev را به main ببریم

```text
dev → Pull Request → main
```

عنوان:

```text
release: deploy first stable frontend version
```

---

# مرحله ۴۹ — فعال کردن GitHub Pages

به:

```text
Repository
→ Settings
→ Pages
```

برو.

در:

```text
Build and deployment
```

Source را بگذار:

```text
GitHub Actions
```

---

# مرحله ۵۰ — Action را ببین

بعد از merge شدن در `main`، برو:

```text
Repository → Actions
```

باید workflow:

```text
Deploy static site to GitHub Pages
```

اجرا شده باشد.

---

# مرحله ۵۱ — آدرس سایت

برای repository تو معمولاً چیزی مشابه:

```text
https://ali-najar.github.io/static-frontend-lab/
```

خواهد بود.

آدرس نهایی را از GitHub بگیر و در README قرار بده.

---

# مرحله ۵۲ — Continuous Deployment را ثابت کن

یک branch جدید:

```bash
git switch dev
git pull origin dev
git switch -c fix/footer-text
```

Footer را تغییر بده:

```bash
git add index.html
git commit -m "fix: update footer copyright text"
git push -u origin fix/footer-text
```

PR:

```text
fix/footer-text → dev
```

بعد:

```text
dev → main
```

وقتی main تغییر کرد، workflow خودکار اجرا می‌شود.

---

# مرحله ۵۳ — README را کامل کن

README نهایی تقریباً این ساختار را داشته باشد:

```markdown
# Static Frontend with Automatic Deployment

## Project Overview

## Technologies

## Project Structure

## How to Run

## Git Workflow

### Branch Strategy

### Commit Strategy

### Pull Requests

### Merge Conflict #1

### Merge Conflict #2

### Main Branch Protection

## Continuous Deployment

### GitHub Actions

### GitHub Pages

## Live Demo

## Git Questions

### Question 1
...

### Question 2
...

### Question 3
...

### Question 4
...

### Question 5
...

### Question 6
...

### Question 7
...
```

---

# مرحله ۵۴ — گزارش Branchها

مثلاً:

```markdown
## Branch Strategy

### main

The `main` branch contains the stable and deployable version
of the application. Direct changes to this branch are restricted.

### dev

The `dev` branch is used as the integration branch.
Feature branches are merged into `dev` through Pull Requests.

### feature/navbar

Used to develop the navigation component.

### feature/hero

Used to implement the hero section.

### feature/theme

Used to implement the dark theme.

### fix/responsive

Used to resolve responsive layout issues.
```

---

# مرحله ۵۵ — گزارش Conflictها

مثلاً:

```markdown
### Merge Conflict #1

The first conflict occurred between `feature/marketing-copy`
and `dev`.

Both branches modified the hero heading in `index.html`.

The conflict was resolved manually by combining the intended
changes into a final heading.

### Merge Conflict #2

The second conflict occurred in `assets/css/style.css`.

Two branches modified the padding of the `.hero` section.

The conflict was resolved by keeping the desktop spacing and
using a media query for the mobile layout.
```

---

# مرحله ۵۶ — دلیل Atomic Commitها را در README بگو

مثلاً:

```markdown
Commits were kept atomic whenever possible. Each commit
represents one logical change, such as adding the navigation
structure, styling the navigation component, implementing
dark mode, or fixing responsive behavior.
```

---

# مرحله ۵۷ — تعداد commitها را بررسی کن

```powershell
git rev-list --all --count
```

---

# مرحله ۵۸ — Branchها را بررسی کن

Local:

```bash
git branch
```

همه local و remote:

```bash
git branch -a
```

---

# مرحله ۵۹ — Remoteها

```bash
git remote -v
```

---

# مرحله ۶۰ — برای فیلم چه چیزهایی نشان بدهی؟

ترتیب خوب برای فیلم:

1. Repository در GitHub.
2. فایل‌های پروژه.
3. `.gitignore`.
4. `git status`.
5. `git branch -a`.
6. `git log --oneline --graph --decorate --all`.
7. تعداد commitها.
8. feature branchها.
9. Pull Requestها.
10. Conflict اول و نحوه حل.
11. Conflict دوم و نحوه حل.
12. Branch Protection برای `main`.
13. فایل `deploy.yml`.
14. تب GitHub Actions.
15. اجرای موفق workflow.
16. سایت GitHub Pages.
17. README.
18. پاسخ هفت سؤال.
19. یک تغییر جدید و اجرای دوباره deployment.

---

# چند دستور که باید واقعاً معنی‌شان را بلد باشی

```bash
git status
```

وضعیت Working Tree و Stage.

```bash
git add
```

قرار دادن تغییر در Staging Area.

```bash
git commit
```

ساخت snapshot جدید.

```bash
git push
```

ارسال commitها به remote.

```bash
git fetch
```

گرفتن اطلاعات جدید remote بدون integrate کردن مستقیم در branch جاری.

```bash
git pull
```

گرفتن و integrate کردن تغییرات.

```bash
git switch
```

تعویض branch.

```bash
git merge
```

ادغام history دو branch.

```bash
git rebase
```

بازپخش commitها روی base جدید.

```bash
git cherry-pick
```

اعمال commit مشخص روی branch جاری.

```bash
git stash
```

کنار گذاشتن موقت تغییرات commitنشده.

```bash
git restore
```

بازیابی فایل یا unstage کردن.

```bash
git revert
```

ساخت commit جدید برای خنثی کردن commit قبلی.

```bash
git reset
```

جابه‌جایی HEAD/index و بسته به mode تغییر Working Tree.

---

# مهم‌ترین عادت در طول پروژه

بعد از تقریباً **هر کار** این سه دستور را زیاد بزن:

```bash
git status
git diff
git log --oneline -5
```

قبل از commit:

```bash
git diff
```

بعد از stage:

```bash
git diff --staged
```

بعد commit:

```bash
git log --oneline -5
```

---

## مسیر پیشنهادی تو از همین الان

چون Repository را ساخته‌ای، فعلاً **فقط تا ایجاد `dev` جلو برو**:

```bash
git status
git branch --show-current
git remote -v
git log --oneline
```

اگر هنوز commit نداری:

```bash
git add .
git commit -m "chore: initialize static frontend project"
git branch -M main
git push -u origin main
```

بعد Branch Protection را تنظیم کن و:

```bash
git switch -c dev
git push -u origin dev
```

از آن نقطه به بعد، دیگر توسعه را مستقیم روی `main` انجام نده؛ هر قابلیت جدید را با یک `feature/*` شروع کن. این مسیر باعث می‌شود تا پایان پروژه تقریباً تمام مفاهیم اصلی Git—Working Tree، Stage، Commit، Branch، Remote، Fetch/Pull، Merge، Conflict، PR و CI/CD—را واقعاً لمس کرده باشی.

---

## User

من html, css, js بلد نیستم این هارو هم کنار هر مرحله که توضیح میدی بگو چی بزارم (مراحلی که گفتی خیلی خوب بودن تغییرشون نده)

---

## Assistant

حتماً. ساختار همان مراحلی می‌ماند که قبلاً دادم؛ فقط از این به بعد هرجا قرار است چیزی در `index.html`، `style.css` یا `main.js` تغییر کند، **دقیقاً می‌گویم کدام فایل را باز کنی، چه کدی بگذاری، و آن کد چه کاری می‌کند**. فرض هم می‌کنیم از صفر HTML/CSS/JS را یاد می‌گیری، نه اینکه چیزی از قبل بلد باشی.

یک نکته مهم: اگر بعضی مراحل قبلی را انجام داده‌ای، **دوباره برایشان commit نساز**. فقط وضعیت پروژه‌ات را با این راهنما تطبیق بده و از جایی که هستی ادامه بده.

---

# قبل از مرحله ۱ — سه فایل اصلی ما چه هستند؟

پروژه ما در نهایت تقریباً این شکلی است:

```text
static-frontend-lab/
│
├── index.html
├── README.md
├── .gitignore
│
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
│
└── .github/
    └── workflows/
        └── deploy.yml
```

سه فایل مهم frontend:

```text
index.html
style.css
main.js
```

خیلی ساده:

```text
HTML        → ساختمان سایت
CSS         → ظاهر سایت
JavaScript  → رفتار سایت
```

---

# مرحله ۱ — وضعیت فعلی پروژه

در PowerShell:

```powershell
git status
git branch --show-current
git remote -v
git log --oneline
```

---

# مرحله ۲ — تنظیم نام و ایمیل Git

```powershell
git config user.name
git config user.email
```

اگر تنظیم نشده:

```powershell
git config --global user.name "Ali Najar"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

---

# مرحله ۳ — ساخت فایل‌های اولیه

این ساختار را بساز:

```text
static-frontend-lab/
│
├── index.html
├── README.md
├── .gitignore
│
└── assets/
    ├── css/
    │   └── style.css
    │
    └── js/
        └── main.js
```

---

# مرحله ۴ — اولین HTML

فایل `index.html` را باز کن و کل محتوای آن را فعلاً این قرار بده:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>TeamFlow</title>

    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <main>
        <h1>TeamFlow</h1>

        <p>
            A simple static frontend project for Software Engineering Lab.
        </p>
    </main>

    <script src="assets/js/main.js"></script>
</body>
</html>
```

---

# مرحله ۴.۱ — اولین CSS

فایل `assets/css/style.css`:

```css
* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ffffff;
    color: #222222;
}

main {
    padding: 40px;
}
```

---

# مرحله ۴.۲ — اولین JavaScript

فایل `assets/js/main.js`:

```javascript
console.log("TeamFlow application loaded.");
```

---

# مرحله ۵ — `.gitignore`

در `.gitignore`:

```gitignore
# Operating system files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Environment variables
.env
.env.*

# Logs
*.log

# Temporary files
*.tmp
```

---

# مرحله ۶ — اولین Commit

```powershell
git status
git diff
git add index.html assets
git status
git diff --staged
git commit -m "chore: initialize static frontend project"
```

**Commit شماره ۱**

---

# مرحله ۷ — Commit مربوط به `.gitignore`

```powershell
git add .gitignore
git commit -m "chore: add gitignore rules"
```

**Commit شماره ۲**

---

# مرحله ۸ — README اولیه

```markdown
# Static Frontend Lab

A static frontend project created for the Software Engineering Lab.

## Technologies

- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Actions
- GitHub Pages

## Project Status

The project is currently under development.
```

بعد:

```powershell
git add README.md
git commit -m "docs: add initial project README"
```

**Commit شماره ۳**

---

# مرحله ۹ — branch اصلی را `main` کن

```powershell
git branch -M main
git branch
```

---

# مرحله ۱۰ — Remote

```powershell
git remote -v
```

اگر `origin` نداری:

```powershell
git remote add origin https://github.com/Ali-Najar/static-frontend-lab.git
```

---

# مرحله ۱۱ — اولین Push

```powershell
git push -u origin main
```

---

# مرحله ۱۲ — Local و Remote

مدل ذهنی:

```text
کامپیوتر تو                     GitHub

main                           origin/main
 A                                A
 B                                B
 C                                C
```

---

# مرحله ۱۳ — محافظت از `main`

در GitHub تنظیم کن که تغییرات `main` از Pull Request عبور کنند.

برای پروژه تک‌نفره، approval اجباری شخص دیگر قرار نده.

---

# مرحله ۱۴ — فلسفه main

از این مرحله به بعد:

**روی `main` کدنویسی نکن.**

```text
main
↑
PR
↑
dev
↑
PR
↑
feature/*
```

---

# مرحله ۱۵ — ساخت `dev`

```powershell
git switch main
git pull origin main
git switch -c dev
git push -u origin dev
```

---

# مرحله ۱۶ — معماری branchها

```text
main
│
└── dev
    ├── feature/navbar
    ├── feature/hero
    ├── feature/sections
    ├── feature/theme
    ├── feature/interactions
    ├── fix/responsive
    └── ci/github-pages
```

---

# مرحله ۱۷ — قبل از هر Feature

```powershell
git switch dev
git pull origin dev
git switch -c feature/navbar
```

---

# مرحله ۱۸ — Navbar

داخل `index.html`، قبل از `<main>`:

```html
<header class="header">
    <nav class="navbar">
        <a href="#home" class="logo">TeamFlow</a>

        <button
            class="menu-button"
            id="menuButton"
            type="button"
            aria-label="Open navigation menu"
        >
            ☰
        </button>

        <ul class="nav-links" id="navLinks">
            <li>
                <a href="#home">Home</a>
            </li>

            <li>
                <a href="#features">Features</a>
            </li>

            <li>
                <a href="#team">Team</a>
            </li>

            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
</header>
```

`<main>` را:

```html
<main id="home">
    <h1>TeamFlow</h1>

    <p>
        A simple static frontend project for Software Engineering Lab.
    </p>
</main>
```

کن.

Commit:

```powershell
git diff
git add index.html
git commit -m "feat: add navigation bar structure"
```

**Commit شماره ۴**

---

# مرحله ۱۹ — CSS مربوط به Navbar

در `assets/css/style.css`:

```css
.header {
    background-color: #ffffff;
    border-bottom: 1px solid #dddddd;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar {
    max-width: 1100px;
    margin: 0 auto;
    padding: 16px 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    color: #2563eb;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 24px;

    padding: 0;
    margin: 0;
}

.nav-links a {
    color: #222222;
    text-decoration: none;
    font-weight: 500;
}

.nav-links a:hover {
    color: #2563eb;
}

.menu-button {
    display: none;
    border: 0;
    background: transparent;
    font-size: 28px;
    cursor: pointer;
}
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "style: add navigation bar styles"
```

**Commit شماره ۵**

---

# مرحله ۲۰ — Responsive Navbar

```css
@media (max-width: 768px) {
    .navbar {
        flex-wrap: wrap;
    }

    .menu-button {
        display: block;
    }

    .nav-links {
        display: none;
        width: 100%;
        flex-direction: column;
        gap: 12px;
        padding-top: 16px;
    }

    .nav-links.active {
        display: flex;
    }
}
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "style: make navigation responsive"
```

**Commit شماره ۶**

---

# مرحله ۲۱ — Push Navbar

```powershell
git push -u origin feature/navbar
```

---

# مرحله ۲۲ — Pull Request

```text
feature/navbar → PR → dev
```

---

# مرحله ۲۳ — dev را Local به‌روز کن

```powershell
git switch dev
git pull origin dev
```

---

# مرحله ۲۴ — Hero Section

```powershell
git switch dev
git pull origin dev
git switch -c feature/hero
```

`index.html`:

```html
<main>
    <section class="hero" id="home">
        <div class="hero-content">
            <p class="hero-label">
                Simple Team Management
            </p>

            <h1>
                Build Better Teams
            </h1>

            <p class="hero-description">
                TeamFlow helps teams organize their work,
                communicate clearly, and achieve their goals.
            </p>
        </div>
    </section>
</main>
```

Commit:

```powershell
git add index.html
git commit -m "feat: add hero section content"
```

**Commit شماره ۷**

---

# مرحله ۲۴.۱ — CSS Hero

```css
.hero {
    min-height: 70vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 100px 24px;

    background-color: #f8fafc;
    text-align: center;
}

.hero-content {
    max-width: 750px;
}

.hero-label {
    color: #2563eb;
    font-weight: bold;
    margin-bottom: 12px;
}

.hero h1 {
    font-size: 52px;
    margin: 0 0 20px;
}

.hero-description {
    color: #555555;
    font-size: 20px;
    line-height: 1.7;
    margin: 0;
}
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "style: add hero section layout"
```

**Commit شماره ۸**

---

# مرحله ۲۴.۲ — دکمه CTA

HTML:

```html
<a href="#features" class="primary-button">
    Explore Features
</a>
```

CSS:

```css
.primary-button {
    display: inline-block;

    margin-top: 28px;
    padding: 14px 24px;

    background-color: #2563eb;
    color: #ffffff;

    text-decoration: none;
    border-radius: 8px;

    font-weight: bold;
}

.primary-button:hover {
    background-color: #1d4ed8;
}
```

Commit:

```powershell
git add index.html assets/css/style.css
git commit -m "feat: add hero call-to-action button"
```

**Commit شماره ۹**

Push:

```powershell
git push -u origin feature/hero
```

PR:

```text
feature/hero → dev
```

---

# مرحله ۲۵ — برنامه Commitها

تا اینجا:

```text
1  chore: initialize static frontend project
2  chore: add gitignore rules
3  docs: add initial project README
4  feat: add navigation bar structure
5  style: add navigation bar styles
6  style: make navigation responsive
7  feat: add hero section content
8  style: add hero section layout
9  feat: add hero call-to-action button
```

---

# مرحله ۲۶ — Features Section

```powershell
git switch dev
git pull origin dev
git switch -c feature/sections
```

داخل `index.html` بعد از Hero:

```html
<section class="features section" id="features">
    <div class="section-heading">
        <p class="section-label">
            Features
        </p>

        <h2>
            Everything your team needs
        </h2>

        <p>
            Simple tools designed to make teamwork easier.
        </p>
    </div>

    <div class="feature-grid">
        <article class="feature-card">
            <h3>Task Management</h3>

            <p>
                Organize tasks and keep track of your team's progress.
            </p>
        </article>

        <article class="feature-card">
            <h3>Team Collaboration</h3>

            <p>
                Keep important information in one place for everyone.
            </p>
        </article>

        <article class="feature-card">
            <h3>Progress Tracking</h3>

            <p>
                See what has been completed and what still needs attention.
            </p>
        </article>
    </div>
</section>
```

Commit:

```powershell
git add index.html
git commit -m "feat: add features section"
```

**Commit شماره ۱۰**

---

# مرحله ۲۶.۱ — CSS Features

```css
.section {
    padding: 80px 24px;
}

.section-heading {
    max-width: 650px;
    margin: 0 auto 48px;
    text-align: center;
}

.section-label {
    color: #2563eb;
    font-weight: bold;
}

.section-heading h2 {
    font-size: 38px;
    margin: 8px 0 12px;
}

.section-heading p {
    color: #666666;
}

.feature-grid {
    max-width: 1100px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.feature-card {
    padding: 28px;
    border: 1px solid #dddddd;
    border-radius: 12px;
    background-color: #ffffff;
}

.feature-card h3 {
    margin-top: 0;
}

.feature-card p {
    color: #666666;
    line-height: 1.6;
}
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "style: add feature card styles"
```

**Commit شماره ۱۱**

---

# مرحله ۲۶.۲ — Team

HTML:

```html
<section class="team section" id="team">
    <div class="section-heading">
        <p class="section-label">
            Team
        </p>

        <h2>
            Meet the developer
        </h2>

        <p>
            This project was implemented individually as part
            of the Software Engineering Lab.
        </p>
    </div>

    <div class="team-card">
        <div class="avatar">
            AN
        </div>

        <h3>Ali Najar</h3>

        <p>
            Developer
        </p>
    </div>
</section>
```

CSS:

```css
.team {
    background-color: #f8fafc;
}

.team-card {
    max-width: 360px;
    margin: 0 auto;
    padding: 32px;

    background-color: #ffffff;

    border: 1px solid #dddddd;
    border-radius: 12px;

    text-align: center;
}

.avatar {
    width: 80px;
    height: 80px;

    margin: 0 auto 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #2563eb;
    color: #ffffff;

    border-radius: 50%;

    font-size: 24px;
    font-weight: bold;
}

.team-card h3 {
    margin-bottom: 4px;
}

.team-card p {
    color: #666666;
    margin: 0;
}
```

Commit:

```powershell
git add index.html assets/css/style.css
git commit -m "feat: add team section"
```

**Commit شماره ۱۲**

---

# مرحله ۲۶.۳ — Contact و Footer

HTML:

```html
<section class="contact section" id="contact">
    <div class="section-heading">
        <p class="section-label">
            Contact
        </p>

        <h2>
            Let's work together
        </h2>

        <p>
            This section demonstrates another component
            of the static frontend.
        </p>
    </div>

    <div class="contact-box">
        <a href="mailto:example@example.com">
            example@example.com
        </a>
    </div>
</section>
```

بعد از `</main>`:

```html
<footer class="footer">
    <p>
        © 2026 TeamFlow. Software Engineering Lab Project.
    </p>
</footer>
```

CSS:

```css
.contact-box {
    text-align: center;
}

.contact-box a {
    color: #2563eb;
    text-decoration: none;
    font-weight: bold;
}

.footer {
    padding: 28px 24px;

    background-color: #111827;
    color: #ffffff;

    text-align: center;
}

.footer p {
    margin: 0;
}
```

Commit:

```powershell
git add index.html assets/css/style.css
git commit -m "feat: add contact and footer sections"
```

**Commit شماره ۱۳**

Push:

```powershell
git push -u origin feature/sections
```

PR:

```text
feature/sections → dev
```

---

# مرحله ۲۷ تا ۳۱ — Conflict شماره ۱

در Hero:

```html
<h1>
    Build Better Teams
</h1>
```

## Branch اول

```powershell
git switch dev
git pull origin dev
git switch -c feature/hero-copy
```

تغییر:

```html
<h1>
    Build Better Teams Together
</h1>
```

بعد:

```powershell
git add index.html
git commit -m "feat: improve hero headline"
git push -u origin feature/hero-copy
```

Branch دوم:

```powershell
git switch dev
git switch -c feature/marketing-copy
```

تغییر:

```html
<h1>
    Manage Your Team Smarter
</h1>
```

بعد:

```powershell
git add index.html
git commit -m "feat: update marketing headline"
git push -u origin feature/marketing-copy
```

در GitHub:

```text
feature/hero-copy → dev
```

را Merge کن.

بعد:

```powershell
git switch feature/marketing-copy
git fetch origin
git merge origin/dev
```

در Conflict:

```text
<<<<<<< HEAD
<h1>
    Manage Your Team Smarter
</h1>
=======
<h1>
    Build Better Teams Together
</h1>
>>>>>>> origin/dev
```

نسخه نهایی:

```html
<h1>
    Build Smarter Teams Together
</h1>
```

بعد:

```powershell
git add index.html
git commit -m "fix: resolve hero headline merge conflict"
git push
```

---

# مرحله ۳۲ — Conflict شماره ۲

در `.hero`:

```css
padding: 100px 24px;
```

Branch اول:

```powershell
git switch dev
git pull origin dev
git switch -c feature/hero-layout
```

تغییر:

```css
padding: 120px 24px;
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "style: increase hero section spacing"
git push -u origin feature/hero-layout
```

Branch دوم:

```powershell
git switch dev
git switch -c fix/mobile-hero
```

تغییر:

```css
padding: 60px 16px;
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "fix: adjust hero spacing for mobile"
git push -u origin fix/mobile-hero
```

در GitHub اول:

```text
feature/hero-layout → dev
```

Merge.

بعد:

```powershell
git switch fix/mobile-hero
git fetch origin
git merge origin/dev
```

نسخه نهایی:

```css
.hero {
    min-height: 70vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 120px 24px;

    background-color: #f8fafc;
    text-align: center;
}
```

و در Media Query:

```css
@media (max-width: 768px) {
    .hero {
        padding: 60px 16px;
    }
}
```

بعد:

```powershell
git add assets/css/style.css
git commit -m "fix: resolve hero responsive spacing conflict"
git push
```

---

# مرحله ۳۳ — Stash

```powershell
git switch dev
git pull origin dev
git switch -c feature/interactions
```

در `main.js` موقتاً:

```javascript
const testMessage = "Work in progress";
console.log(testMessage);
```

بعد:

```powershell
git status
git stash push -m "WIP interactions"
git status
git stash list
git stash pop
```

آن دو خط موقت را بعداً پاک کن.

---

# مرحله ۳۴ و ۳۵ — Restore

```powershell
git restore index.html
```

و برای unstage:

```powershell
git restore --staged index.html
```

---

# مرحله ۳۶ تا ۴۰ — Git Commands

همان توضیحات قبلی را نگه می‌داریم:

```text
fetch
pull
merge
rebase
cherry-pick
reset
revert
restore
```

---

# مرحله ۴۱ — Dark Mode

```powershell
git switch dev
git pull origin dev
git switch -c feature/theme
```

HTML در Navbar:

```html
<button
    class="theme-button"
    id="themeButton"
    type="button"
    aria-label="Change color theme"
>
    🌙
</button>
```

CSS:

```css
.theme-button {
    border: 1px solid #dddddd;
    background-color: #ffffff;

    width: 42px;
    height: 42px;

    border-radius: 8px;

    cursor: pointer;
    font-size: 18px;
}
```

`main.js`:

```javascript
console.log("TeamFlow application loaded.");

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});
```

Commit:

```powershell
git add index.html assets/js/main.js assets/css/style.css
git commit -m "feat: add dark mode toggle"
```

**Commit شماره ۱۴**

---

# مرحله ۴۱.۱ — CSS Dark Mode

```css
body.dark-theme {
    background-color: #0f172a;
    color: #f8fafc;
}

body.dark-theme .header {
    background-color: #111827;
    border-bottom-color: #334155;
}

body.dark-theme .nav-links a {
    color: #f8fafc;
}

body.dark-theme .hero {
    background-color: #0f172a;
}

body.dark-theme .hero-description {
    color: #cbd5e1;
}

body.dark-theme .features {
    background-color: #111827;
}

body.dark-theme .feature-card {
    background-color: #1e293b;
    border-color: #334155;
}

body.dark-theme .feature-card p {
    color: #cbd5e1;
}

body.dark-theme .team {
    background-color: #0f172a;
}

body.dark-theme .team-card {
    background-color: #1e293b;
    border-color: #334155;
}

body.dark-theme .team-card p {
    color: #cbd5e1;
}

body.dark-theme .section-heading p {
    color: #cbd5e1;
}

body.dark-theme .theme-button {
    background-color: #1e293b;
    border-color: #475569;
}
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "style: add dark theme styles"
```

**Commit شماره ۱۵**

Push + PR.

---

# مرحله ۴۲ — Interactions

```powershell
git switch dev
git pull origin dev
git switch -c feature/interactions
```

Mobile menu JS:

```javascript
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
```

Commit:

```powershell
git add assets/js/main.js
git commit -m "feat: add mobile menu interaction"
```

**Commit شماره ۱۶**

بعد:

```javascript
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
```

Commit:

```powershell
git add assets/js/main.js
git commit -m "feat: close mobile menu after navigation"
```

**Commit شماره ۱۷**

Push + PR.

---

# مرحله ۴۳ — Responsive Fixes

```powershell
git switch dev
git pull origin dev
git switch -c fix/responsive
```

```css
@media (max-width: 768px) {
    .hero h1 {
        font-size: 38px;
    }

    .hero-description {
        font-size: 18px;
    }

    .section-heading h2 {
        font-size: 30px;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

    .section {
        padding: 60px 16px;
    }
}
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "fix: improve mobile layout"
```

**Commit شماره ۱۸**

Tablet:

```css
@media (min-width: 769px) and (max-width: 950px) {
    .feature-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "fix: improve feature cards responsiveness"
```

**Commit شماره ۱۹**

---

# مرحله ۴۴ — Accessibility

در Navbar:

```html
<nav class="navbar" aria-label="Main navigation">
```

Commit:

```powershell
git add index.html
git commit -m "a11y: improve semantic HTML and labels"
```

**Commit شماره ۲۰**

---

# مرحله ۴۵ — Git Graph

```powershell
git log --oneline --graph --decorate --all
```

---

# مرحله ۴۶ — GitHub Actions

```powershell
git switch dev
git pull origin dev
git switch -c ci/github-pages
```

فایل `.github/workflows/deploy.yml`:

```yaml
name: Deploy static site to GitHub Pages

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload static files
        uses: actions/upload-pages-artifact@v4
        with:
          path: "."

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

# مرحله ۴۷ — Commit Workflow

```powershell
git add .github/workflows/deploy.yml
git diff --staged
git commit -m "ci: add GitHub Pages deployment workflow"
git push -u origin ci/github-pages
```

**Commit شماره ۲۱**

PR:

```text
ci/github-pages → dev
```

---

# مرحله ۴۸ — Release به Main

```text
dev → Pull Request → main
```

عنوان:

```text
release: deploy first stable frontend version
```

---

# مرحله ۴۹ — GitHub Pages

```text
Settings
→ Pages
→ Build and deployment
→ GitHub Actions
```

---

# مرحله ۵۰ — Actions

```text
Repository
→ Actions
```

---

# مرحله ۵۱ — سایت نهایی

بعد از deployment، آدرس Pages را از خود GitHub بردار و در README قرار بده.

---

# مرحله ۵۲ — ثابت کردن Auto Deployment

```powershell
git switch dev
git pull origin dev
git switch -c fix/footer-text
```

Footer را تغییر بده و:

```powershell
git add index.html
git commit -m "fix: update footer copyright text"
git push -u origin fix/footer-text
```

بعد:

```text
fix/footer-text → PR → dev
dev → PR → main
```

---

# مرحله ۵۳ تا ۵۶ — README

ساختار:

```markdown
# Static Frontend with Automatic Deployment

## Project Overview

## Technologies

## Project Structure

## How to Run

## Git Workflow

### Branch Strategy

### Commit Strategy

### Pull Requests

### Merge Conflict #1

### Merge Conflict #2

### Main Branch Protection

## Continuous Deployment

### GitHub Actions

### GitHub Pages

## Live Demo

## Git Questions

### Question 1
### Question 2
### Question 3
### Question 4
### Question 5
### Question 6
### Question 7
```

---

# مرحله ۵۷ — شمارش Commitها

```powershell
git rev-list --all --count
git log --oneline --all
```

---

# مرحله ۵۸ — دیدن Branchها

```powershell
git branch
git branch -a
```

---

# مرحله ۵۹ — Remote

```powershell
git remote -v
```

---

# مرحله ۶۰ — فیلم نهایی

1. Repository
2. فایل‌های HTML/CSS/JS
3. `.gitignore`
4. `git status`
5. Branchها
6. Commitها
7. Graph
8. PRها
9. Conflict اول
10. Conflict دوم
11. Branch Protection
12. GitHub Actions
13. Workflow
14. GitHub Pages
15. سایت نهایی
16. README
17. پاسخ سؤال‌ها

---

## User

فرض کن الان اینهارو دارم داخل کد ام و الان برنچ جدید hero رو ساختم که چیزاشون اضافه کنم.

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
}

Js:

console.log("TeamFlow application loaded.");


Html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TeamFlow</title>

    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <main>
        <h1>TeamFlow</h1>
        <p>A simple static frontend project.</p>
    </main>

    <script src="assets/js/main.js"></script>
</body>
</html>

<header class="header">
    <nav class="navbar">
        <a href="#" class="logo">TeamFlow</a>

        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#team">Team</a></li>
        </ul>
    </nav>
</header>

---

## Assistant

بله، دقیقاً از همین وضعیت ادامه می‌دهیم. فقط قبل از اضافه‌کردن Hero یک ایراد مهم در HTML فعلی‌ات وجود دارد که باید اصلاح شود:

الان `<header>` را **بعد از `</html>` گذاشته‌ای**:

```html
</html>

<header class="header">
    ...
</header>
```

این از نظر ساختار HTML درست نیست. تمام چیزی که قرار است در صفحه نمایش داده شود باید داخل `<body>` باشد. پس اول ساختار را درست می‌کنیم، بعد Hero را اضافه می‌کنیم.

## ۱. اول `index.html` را به این شکل دربیاور

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>TeamFlow</title>

    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <header class="header">
        <nav class="navbar">

            <a href="#home" class="logo">
                TeamFlow
            </a>

            <ul class="nav-links">
                <li>
                    <a href="#home">Home</a>
                </li>

                <li>
                    <a href="#features">Features</a>
                </li>

                <li>
                    <a href="#team">Team</a>
                </li>
            </ul>

        </nav>
    </header>


    <main>

        <section class="hero" id="home">

            <div class="hero-content">

                <p class="hero-label">
                    Simple Team Management
                </p>

                <h1>
                    Build Better Teams
                </h1>

                <p class="hero-description">
                    TeamFlow helps teams organize their work,
                    communicate clearly, and achieve their goals.
                </p>

            </div>

        </section>

    </main>


    <script src="assets/js/main.js"></script>

</body>

</html>
```

حالا ساختار صفحه درست است.

## CSS کامل

```css
* {
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    margin: 0;

    font-family: Arial, Helvetica, sans-serif;

    background-color: #ffffff;
    color: #222222;
}


/* =========================
   Navbar
========================= */

.header {
    background-color: #ffffff;

    border-bottom: 1px solid #dddddd;
}


.navbar {
    max-width: 1100px;

    margin: 0 auto;

    padding: 16px 24px;

    display: flex;

    align-items: center;

    justify-content: space-between;
}


.logo {
    color: #2563eb;

    font-size: 24px;

    font-weight: bold;

    text-decoration: none;
}


.nav-links {
    list-style: none;

    display: flex;

    gap: 24px;

    padding: 0;

    margin: 0;
}


.nav-links a {
    color: #222222;

    text-decoration: none;

    font-weight: 500;
}


.nav-links a:hover {
    color: #2563eb;
}


/* =========================
   Hero
========================= */

.hero {
    min-height: 70vh;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 100px 24px;

    background-color: #f8fafc;

    text-align: center;
}


.hero-content {
    max-width: 750px;
}


.hero-label {
    color: #2563eb;

    font-weight: bold;

    margin-bottom: 12px;
}


.hero h1 {
    font-size: 52px;

    margin-top: 0;

    margin-bottom: 20px;
}


.hero-description {
    color: #555555;

    font-size: 20px;

    line-height: 1.7;

    margin: 0;
}


/* =========================
   Responsive
========================= */

@media (max-width: 768px) {

    .nav-links {
        display: none;
    }

    .hero {
        padding: 60px 16px;
    }

    .hero h1 {
        font-size: 38px;
    }

    .hero-description {
        font-size: 18px;
    }

}
```

JavaScript فعلاً:

```javascript
console.log("TeamFlow application loaded.");
```

حالا روی branch Hero:

```powershell
git branch --show-current
git status
```

اول HTML را جدا commit کن:

```powershell
git add index.html
git status
git diff --staged
git commit -m "feat: add hero section content"
```

بعد CSS:

```powershell
git status
git diff
git add assets/css/style.css
git diff --staged
git commit -m "style: add hero section layout"
```

Hero هنوز یک مرحله دیگر دارد: CTA Button که بهتر است commit سوم branch باشد:

```text
feat: add hero call-to-action button
```

---

## User

نیازی نیست توضیح کارهایی که در html ,css, js میکنی را توضیح دهی صرفا کدشان را بده

---

## Assistant

باشه. از این به بعد برای HTML/CSS/JS فقط **کد دقیق لازم** را می‌دهم و توضیح اضافی درباره خود کدها نمی‌دهم؛ تمرکز توضیحی را روی Git و مراحل پروژه نگه می‌دارم.

برای وضعیت فعلی branch `feature/hero`:

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >
    <title>TeamFlow</title>

    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <header class="header">
        <nav class="navbar">
            <a href="#home" class="logo">TeamFlow</a>

            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#team">Team</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero" id="home">
            <div class="hero-content">
                <p class="hero-label">
                    Simple Team Management
                </p>

                <h1>
                    Build Better Teams
                </h1>

                <p class="hero-description">
                    TeamFlow helps teams organize their work,
                    communicate clearly, and achieve their goals.
                </p>
            </div>
        </section>
    </main>

    <script src="assets/js/main.js"></script>

</body>
</html>
```

### `assets/css/style.css`

```css
* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ffffff;
    color: #222222;
}

.header {
    background-color: #ffffff;
    border-bottom: 1px solid #dddddd;
}

.navbar {
    max-width: 1100px;
    margin: 0 auto;
    padding: 16px 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    color: #2563eb;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 24px;

    padding: 0;
    margin: 0;
}

.nav-links a {
    color: #222222;
    text-decoration: none;
    font-weight: 500;
}

.nav-links a:hover {
    color: #2563eb;
}

.hero {
    min-height: 70vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 100px 24px;

    background-color: #f8fafc;
    text-align: center;
}

.hero-content {
    max-width: 750px;
}

.hero-label {
    color: #2563eb;
    font-weight: bold;
    margin-bottom: 12px;
}

.hero h1 {
    font-size: 52px;
    margin-top: 0;
    margin-bottom: 20px;
}

.hero-description {
    color: #555555;
    font-size: 20px;
    line-height: 1.7;
    margin: 0;
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .hero {
        padding: 60px 16px;
    }

    .hero h1 {
        font-size: 38px;
    }

    .hero-description {
        font-size: 18px;
    }
}
```

### `assets/js/main.js`

```javascript
console.log("TeamFlow application loaded.");
```

حالا:

```powershell
git branch --show-current
git status
```

اول HTML:

```powershell
git add index.html
git diff --staged
git commit -m "feat: add hero section content"
```

بعد CSS:

```powershell
git add assets/css/style.css
git diff --staged
git commit -m "style: add hero section layout"
```

بعد برای commit سوم Hero، داخل `index.html`:

```html
<a href="#features" class="primary-button">
    Explore Features
</a>
```

CSS:

```css
.primary-button {
    display: inline-block;
    margin-top: 28px;
    padding: 14px 24px;

    background-color: #2563eb;
    color: #ffffff;

    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
}

.primary-button:hover {
    background-color: #1d4ed8;
}
```

بعد:

```powershell
git add index.html assets/css/style.css
git commit -m "feat: add hero call-to-action button"
```

در پایان:

```powershell
git log --oneline -5
git push -u origin feature/hero
```

در GitHub:

```text
feature/hero → Pull Request → dev
```

و پس از merge:

```powershell
git switch dev
git pull origin dev
```

---

## User

خب همه مراحل بعدی را که باید انجام بدم را بگو از اینجا

---

## Assistant

از همین نقطه ادامه می‌دهیم و فرض می‌کنیم `feature/hero` را ساخته‌ای و سه commit مربوط به Hero را انجام داده‌ای. مراحل بعدی را طوری می‌چینم که هم پروژه کامل شود، هم شرط‌های آزمایش مثل ۲۰+ commit، دو conflict، چند branch، PR، محافظت `main` و deploy خودکار را کامل کنی.

خیلی خوب. از همین جایی که الان هستی ادامه می‌دهیم و فرض می‌کنیم:

```text
main
└── dev
    ├── feature/navbar   ← تمام شده و داخل dev merge شده
    └── feature/hero     ← الان روی این هستی
```

و Hero را ساخته‌ای. از اینجا تا پایان پروژه، این ترتیب را برو.

---

# مرحله ۱ — Hero را تمام کن و Merge کن

اگر هنوز CTA دکمه را اضافه نکرده‌ای، داخل `index.html` بعد از `hero-description` بگذار:

```html
<a href="#features" class="primary-button">
    Explore Features
</a>
```

به `style.css` اضافه کن:

```css
.primary-button {
    display: inline-block;
    margin-top: 28px;
    padding: 14px 24px;

    background-color: #2563eb;
    color: #ffffff;

    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
}

.primary-button:hover {
    background-color: #1d4ed8;
}
```

بعد:

```powershell
git status
git diff
git add index.html assets/css/style.css
git commit -m "feat: add hero call-to-action button"
git log --oneline -5
git push -u origin feature/hero
```

در GitHub:

```text
base: dev
compare: feature/hero
```

عنوان:

```text
feat: add hero section
```

PR را Merge کن.

بعد:

```powershell
git switch dev
git pull origin dev
```

---

# مرحله ۲ — Features + Team + Contact

```powershell
git switch dev
git pull origin dev
git switch -c feature/sections
```

داخل `index.html` بعد از Hero:

```html
<section class="features section" id="features">
    <div class="section-heading">
        <p class="section-label">Features</p>

        <h2>
            Everything your team needs
        </h2>

        <p>
            Simple tools designed to make teamwork easier.
        </p>
    </div>

    <div class="feature-grid">

        <article class="feature-card">
            <h3>Task Management</h3>

            <p>
                Organize tasks and keep track of your team's progress.
            </p>
        </article>

        <article class="feature-card">
            <h3>Team Collaboration</h3>

            <p>
                Keep important information in one place for everyone.
            </p>
        </article>

        <article class="feature-card">
            <h3>Progress Tracking</h3>

            <p>
                See what has been completed and what still needs attention.
            </p>
        </article>

    </div>
</section>
```

Commit:

```powershell
git add index.html
git diff --staged
git commit -m "feat: add features section"
```

---

# مرحله ۳ — Style مربوط به Features

```css
.section {
    padding: 80px 24px;
}

.section-heading {
    max-width: 650px;
    margin: 0 auto 48px;
    text-align: center;
}

.section-label {
    color: #2563eb;
    font-weight: bold;
}

.section-heading h2 {
    font-size: 38px;
    margin: 8px 0 12px;
}

.section-heading p {
    color: #666666;
}

.feature-grid {
    max-width: 1100px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.feature-card {
    padding: 28px;

    background-color: #ffffff;

    border: 1px solid #dddddd;
    border-radius: 12px;
}

.feature-card h3 {
    margin-top: 0;
}

.feature-card p {
    color: #666666;
    line-height: 1.6;
}
```

```powershell
git add assets/css/style.css
git commit -m "style: add feature card styles"
```

---

# مرحله ۴ — Team Section

HTML:

```html
<section class="team section" id="team">

    <div class="section-heading">
        <p class="section-label">
            Team
        </p>

        <h2>
            Meet the developer
        </h2>

        <p>
            This project was implemented individually
            for the Software Engineering Lab.
        </p>
    </div>

    <div class="team-card">

        <div class="avatar">
            AN
        </div>

        <h3>Ali Najar</h3>

        <p>
            Developer
        </p>

    </div>

</section>
```

CSS:

```css
.team {
    background-color: #f8fafc;
}

.team-card {
    max-width: 360px;

    margin: 0 auto;
    padding: 32px;

    background-color: #ffffff;

    border: 1px solid #dddddd;
    border-radius: 12px;

    text-align: center;
}

.avatar {
    width: 80px;
    height: 80px;

    margin: 0 auto 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #2563eb;
    color: #ffffff;

    border-radius: 50%;

    font-size: 24px;
    font-weight: bold;
}

.team-card h3 {
    margin-bottom: 4px;
}

.team-card p {
    margin: 0;
    color: #666666;
}
```

Commit:

```powershell
git add index.html assets/css/style.css
git commit -m "feat: add team section"
```

---

# مرحله ۵ — Contact و Footer

داخل `<main>`:

```html
<section class="contact section" id="contact">

    <div class="section-heading">
        <p class="section-label">
            Contact
        </p>

        <h2>
            Let's work together
        </h2>

        <p>
            This section demonstrates another component
            of the static frontend.
        </p>
    </div>

    <div class="contact-box">
        <a href="mailto:example@example.com">
            example@example.com
        </a>
    </div>

</section>
```

Navbar:

```html
<li>
    <a href="#contact">Contact</a>
</li>
```

بعد از `</main>`:

```html
<footer class="footer">
    <p>
        © 2026 TeamFlow. Software Engineering Lab Project.
    </p>
</footer>
```

CSS:

```css
.contact-box {
    text-align: center;
}

.contact-box a {
    color: #2563eb;
    text-decoration: none;
    font-weight: bold;
}

.footer {
    padding: 28px 24px;

    background-color: #111827;
    color: #ffffff;

    text-align: center;
}

.footer p {
    margin: 0;
}
```

Commit و Push:

```powershell
git add index.html assets/css/style.css
git commit -m "feat: add contact and footer sections"
git push -u origin feature/sections
```

PR:

```text
feature/sections → dev
```

بعد:

```powershell
git switch dev
git pull origin dev
```

---

# مرحله ۶ — Conflict شماره ۱

Branch اول:

```powershell
git switch dev
git pull origin dev
git switch -c feature/hero-copy
```

عنوان Hero را:

```html
<h1>
    Build Better Teams Together
</h1>
```

کن.

```powershell
git add index.html
git commit -m "feat: improve hero headline"
git push -u origin feature/hero-copy
```

هنوز Merge نکن.

Branch دوم:

```powershell
git switch dev
git switch -c feature/marketing-copy
```

عنوان را:

```html
<h1>
    Manage Your Team Smarter
</h1>
```

کن.

```powershell
git add index.html
git commit -m "feat: update marketing headline"
git push -u origin feature/marketing-copy
```

---

# مرحله ۷ — branch اول را Merge کن

در GitHub:

```text
feature/hero-copy → PR → dev
```

Merge.

---

# مرحله ۸ — Conflict را ایجاد کن

```powershell
git switch feature/marketing-copy
git fetch origin
git merge origin/dev
```

باید چیزی شبیه:

```text
CONFLICT (content): Merge conflict in index.html
```

بگیری.

Conflict را به:

```html
<h1>
    Build Smarter Teams Together
</h1>
```

حل کن.

بعد:

```powershell
git add index.html
git commit -m "fix: resolve hero headline merge conflict"
git push origin feature/marketing-copy
```

در GitHub:

```text
feature/marketing-copy → dev
```

Merge.

---

# مرحله ۹ تا ۱۱ — Conflict شماره ۲

```powershell
git switch dev
git pull origin dev
git switch -c feature/hero-layout
```

در CSS:

```css
padding: 120px 24px;
```

Commit و Push:

```powershell
git add assets/css/style.css
git commit -m "style: increase hero section spacing"
git push -u origin feature/hero-layout
```

Branch دوم:

```powershell
git switch dev
git switch -c fix/mobile-hero
```

مقدار:

```css
padding: 60px 16px;
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "fix: adjust hero spacing for mobile"
git push -u origin fix/mobile-hero
```

در GitHub:

```text
feature/hero-layout → dev
```

Merge.

بعد:

```powershell
git switch fix/mobile-hero
git fetch origin
git merge origin/dev
```

نسخه نهایی:

```css
.hero {
    min-height: 70vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 120px 24px;

    background-color: #f8fafc;
    text-align: center;
}
```

Media Query:

```css
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .hero {
        padding: 60px 16px;
    }

    .hero h1 {
        font-size: 38px;
    }

    .hero-description {
        font-size: 18px;
    }
}
```

بعد:

```powershell
git add assets/css/style.css
git commit -m "fix: resolve hero responsive spacing conflict"
git push
```

PR:

```text
fix/mobile-hero → dev
```

---

# مرحله ۱۲ — Dark Mode

```powershell
git switch dev
git pull origin dev
git switch -c feature/theme
```

HTML:

```html
<button
    class="theme-button"
    id="themeButton"
    type="button"
    aria-label="Change color theme"
>
    🌙
</button>
```

CSS:

```css
.theme-button {
    width: 42px;
    height: 42px;

    border: 1px solid #dddddd;
    border-radius: 8px;

    background-color: #ffffff;

    cursor: pointer;
    font-size: 18px;
}
```

JS:

```javascript
console.log("TeamFlow application loaded.");

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});
```

Commit:

```powershell
git add index.html assets/css/style.css assets/js/main.js
git commit -m "feat: add dark mode toggle"
```

---

# مرحله ۱۳ — CSS مربوط به Dark Mode

```css
body.dark-theme {
    background-color: #0f172a;
    color: #f8fafc;
}

body.dark-theme .header {
    background-color: #111827;
    border-bottom-color: #334155;
}

body.dark-theme .nav-links a {
    color: #f8fafc;
}

body.dark-theme .hero {
    background-color: #0f172a;
}

body.dark-theme .hero-description {
    color: #cbd5e1;
}

body.dark-theme .features {
    background-color: #111827;
}

body.dark-theme .feature-card {
    background-color: #1e293b;
    border-color: #334155;
}

body.dark-theme .feature-card p {
    color: #cbd5e1;
}

body.dark-theme .team {
    background-color: #0f172a;
}

body.dark-theme .team-card {
    background-color: #1e293b;
    border-color: #334155;
}

body.dark-theme .team-card p {
    color: #cbd5e1;
}

body.dark-theme .section-heading p {
    color: #cbd5e1;
}

body.dark-theme .theme-button {
    background-color: #1e293b;
    border-color: #475569;
}
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "style: add dark theme styles"
git push -u origin feature/theme
```

PR → dev.

---

# مرحله ۱۴ و ۱۵ — Mobile Menu و JavaScript

```powershell
git switch dev
git pull origin dev
git switch -c feature/interactions
```

HTML:

```html
<button
    class="menu-button"
    id="menuButton"
    type="button"
    aria-label="Open navigation menu"
>
    ☰
</button>
```

CSS:

```css
.menu-button {
    display: none;

    border: 0;
    background-color: transparent;

    font-size: 28px;
    cursor: pointer;
}
```

Media Query:

```css
@media (max-width: 768px) {

    .navbar {
        flex-wrap: wrap;
    }

    .menu-button {
        display: block;
    }

    .nav-links {
        display: none;

        width: 100%;

        flex-direction: column;
        gap: 12px;

        padding-top: 16px;
    }

    .nav-links.active {
        display: flex;
    }

    .hero {
        padding: 60px 16px;
    }

    .hero h1 {
        font-size: 38px;
    }

    .hero-description {
        font-size: 18px;
    }
}
```

JS:

```javascript
console.log("TeamFlow application loaded.");

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});


const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
```

Commit:

```powershell
git add index.html assets/css/style.css assets/js/main.js
git commit -m "feat: add mobile menu interaction"
```

بعد JS:

```javascript
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
```

Commit:

```powershell
git add assets/js/main.js
git commit -m "feat: close mobile menu after navigation"
git push -u origin feature/interactions
```

PR → dev.

---

# مرحله ۱۶ — Responsive Fixes

```powershell
git switch dev
git pull origin dev
git switch -c fix/responsive
```

در Media Query:

```css
@media (max-width: 768px) {

    .hero h1 {
        font-size: 38px;
    }

    .hero-description {
        font-size: 18px;
    }

    .section-heading h2 {
        font-size: 30px;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

    .section {
        padding: 60px 16px;
    }
}
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "fix: improve mobile layout"
```

Tablet:

```css
@media (min-width: 769px) and (max-width: 950px) {
    .feature-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

Commit:

```powershell
git add assets/css/style.css
git commit -m "fix: improve feature cards responsiveness"
git push -u origin fix/responsive
```

PR → dev.

---

# مرحله ۱۷ — Accessibility

```powershell
git switch dev
git pull origin dev
git switch -c fix/accessibility
```

`nav`:

```html
<nav class="navbar" aria-label="Main navigation">
```

Commit:

```powershell
git add index.html
git commit -m "a11y: improve semantic HTML and labels"
git push -u origin fix/accessibility
```

PR → dev.

---

# مرحله ۱۸ — حداقل ۲۰ Commit

```powershell
git switch dev
git pull origin dev
git log --oneline --all
git rev-list --all --count
git log --oneline --graph --decorate --all
```

---

# مرحله ۱۹ — stash

```powershell
git switch dev
git switch -c docs/readme
git status
git stash push -m "WIP README changes"
git stash list
git stash pop
```

---

# مرحله ۲۰ — README اولیه workflow

```powershell
git add README.md
git commit -m "docs: add project workflow overview"
git push -u origin docs/readme
```

PR → dev.

---

# مرحله ۲۱ — GitHub Actions

```powershell
git switch dev
git pull origin dev
git switch -c ci/github-pages
```

`.github/workflows/deploy.yml`:

```yaml
name: Deploy static site to GitHub Pages

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload static files
        uses: actions/upload-pages-artifact@v4
        with:
          path: "."

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Commit:

```powershell
git add .github/workflows/deploy.yml
git diff --staged
git commit -m "ci: add GitHub Pages deployment workflow"
git push -u origin ci/github-pages
```

PR → dev.

---

# مرحله ۲۲ — محافظت `main`

اگر قبلاً انجام نداده‌ای:

```text
Repository
→ Settings
→ Branches / Rules
```

برای `main`:

```text
Require a pull request before merging
```

---

# مرحله ۲۳ — dev را به main Release کن

در GitHub:

```text
base: main
compare: dev
```

عنوان:

```text
release: deploy first stable frontend version
```

---

# مرحله ۲۴ — GitHub Pages

```text
Repository
→ Settings
→ Pages
→ Build and deployment
→ GitHub Actions
```

---

# مرحله ۲۵ — Workflow را بررسی کن

```text
Repository
→ Actions
```

باید:

```text
Deploy static site to GitHub Pages
```

را ببینی.

---

# مرحله ۲۶ — Auto Deployment را ثابت کن

```powershell
git switch dev
git pull origin dev
git switch -c fix/footer-text
```

Footer را تغییر بده.

```powershell
git add index.html
git commit -m "fix: update footer copyright text"
git push -u origin fix/footer-text
```

بعد:

```text
fix/footer-text → PR → dev
dev → PR → main
```

---

# مرحله ۲۷ — README نهایی

```powershell
git switch dev
git pull origin dev
git switch -c docs/final-readme
```

ساختار README:

```markdown
# Static Frontend with Automatic Deployment

## Project Overview

## Technologies

## Project Structure

## How to Run

## Git Workflow

### Branch Strategy

### Commit Strategy

### Pull Requests

### Merge Conflict #1

### Merge Conflict #2

### Main Branch Protection

## Continuous Deployment

### GitHub Actions

### GitHub Pages

## Live Demo

## Git Questions

### 1. What is the .git directory?

### 2. Atomic Commit and Atomic Pull Request

### 3. fetch vs pull vs merge vs rebase vs cherry-pick

### 4. reset vs revert vs restore vs switch vs checkout

### 5. Stage/Index and Stash

### 6. Snapshot and Commit

### 7. Local Repository vs Remote Repository
```

Commit:

```powershell
git add README.md
git commit -m "docs: complete project report and git questions"
git push -u origin docs/final-readme
```

PR → dev → main.

---

# مرحله ۲۸ — پاک کردن branchهای تمام‌شده

اختیاری:

```powershell
git switch dev
git branch -d feature/hero
git branch -d feature/navbar
git branch -d feature/sections
git fetch --prune
```

---

# مرحله ۲۹ — بررسی نهایی repository

```powershell
git status
git branch -a
git rev-list --all --count
git log --oneline --graph --decorate --all
git remote -v
```

---

# مرحله ۳۰ — چیزهایی که باید در پایان داشته باشی

```text
✓ Static HTML/CSS/JS frontend
✓ .gitignore
✓ 20+ meaningful commits
✓ بیش از 3 branch معنادار
✓ Conflict #1 در index.html
✓ Conflict #2 در style.css
✓ Pull Requestهای feature → dev
✓ Pull Requestهای dev → main
✓ Protected main
✓ GitHub Actions
✓ GitHub Pages
✓ Automatic Deployment
✓ README کامل
✓ پاسخ هر 7 سؤال
✓ GitHub Pages URL در README
```

---

## User

Your branch is up to date with 'origin/dev'.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git switch -c feature/marketing-copy
Switched to a new branch 'feature/marketing-copy'
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git add index.html
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git commit -m "feat: update marketing headline"
[feature/marketing-copy bd38147] feat: update marketing headline
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git push -u origin feature/marketing-copy
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 20 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 327 bytes | 327.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote:
remote: Create a pull request for 'feature/marketing-copy' on GitHub by visiting:
remote:      https://github.com/Ali-Najar/static-frontend-lab/pull/new/feature/marketing-copy
remote:
To https://github.com/Ali-Najar/static-frontend-lab.git
 * [new branch]      feature/marketing-copy -> feature/marketing-copy
branch 'feature/marketing-copy' set up to track 'origin/feature/marketing-copy'.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git switch feature/marketing-copy
Already on 'feature/marketing-copy'
Your branch is up to date with 'origin/feature/marketing-copy'.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git fetch origin
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git merge origin/dev
Already up to date.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git merge origin/dev^C
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git switch feature/marketing-copy
Already on 'feature/marketing-copy'
Your branch is up to date with 'origin/feature/marketing-copy'.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git fetch origin
remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (1/1), 901 bytes | 100.00 KiB/s, done.
From https://github.com/Ali-Najar/static-frontend-lab
   90c889b..157f32d  main       -> origin/main
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git merge origin/dev
Already up to date.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git switch feature/marketing-copy
Already on 'feature/marketing-copy'
Your branch is up to date with 'origin/feature/marketing-copy'.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git fetch origin
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git merge origin/dev
Already up to date.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git switch dev
Switched to branch 'dev'
Your branch is up to date with 'origin/dev'.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git pull origin dev
From https://github.com/Ali-Najar/static-frontend-lab
 * branch            dev        -> FETCH_HEAD
Already up to date.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git switch -c feature/hero-copy
fatal: a branch named 'feature/hero-copy' already exists
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git add index.html
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git commit -m "feat: improve hero headline"
[dev 119414f] feat: improve hero headline
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git push -u origin feature/hero-copy
Everything up-to-date
branch 'feature/hero-copy' set up to track 'origin/feature/hero-copy'.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git switch dev
Already on 'dev'
Your branch is ahead of 'origin/dev' by 1 commit.
  (use "git push" to publish your local commits)
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git switch -c feature/marketing-copy
fatal: a branch named 'feature/marketing-copy' already exists
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git switch feature/hero-copy
Switched to branch 'feature/hero-copy'
Your branch is up to date with 'origin/feature/hero-copy'.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git switch feature/marketing-copy
Switched to branch 'feature/marketing-copy'
Your branch is up to date with 'origin/feature/marketing-copy'.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git add index.html
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git commit -m "feat: update marketing headline"
On branch feature/marketing-copy
Your branch is up to date with 'origin/feature/marketing-copy'.

nothing to commit, working tree clean
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git push -u origin feature/marketing-copy
Everything up-to-date
branch 'feature/marketing-copy' set up to track 'origin/feature/marketing-copy'.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git switch feature/marketing-copy
Already on 'feature/marketing-copy'
Your branch is up to date with 'origin/feature/marketing-copy'.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git fetch origin
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git merge origin/dev
Already up to date.

---

## Assistant

مشکل دقیقاً مشخص است و خوشبختانه چیزی خراب نشده. اتفاق اصلی این بوده که commit مربوط به `hero-copy` را وقتی هنوز روی `dev` بودی زده‌ای:

```text
[dev 119414f] feat: improve hero headline
```

یعنی این commit:

```text
119414f
```

به‌جای اینکه روی:

```text
feature/hero-copy
```

باشد، روی **local `dev`** قرار گرفته است.

به همین دلیل وقتی روی `feature/marketing-copy` می‌زنی:

```powershell
git merge origin/dev
```

Git می‌گوید:

```text
Already up to date.
```

چون `origin/dev` هنوز آن تغییر Hero را ندارد.

## الان دقیقاً این کارها را انجام بده

### ۱. اول commit اشتباهی را از `dev` به `feature/hero-copy` منتقل کنیم

```powershell
git switch feature/hero-copy
git cherry-pick 119414f
git push origin feature/hero-copy
```

### اینجا `cherry-pick` چه کرد؟

commit `119414f` روی `dev` بود و با cherry-pick همان تغییر را روی `feature/hero-copy` اعمال می‌کنیم.

---

# ۲. حالا `dev` محلی را تمیز کنیم

```powershell
git switch dev
git status
git reset --hard origin/dev
git status
```

---

# ۳. حالا `feature/hero-copy` را در GitHub به `dev` merge کن

```text
base: dev
compare: feature/hero-copy
```

عنوان:

```text
feat: improve hero headline
```

و Merge کن.

---

# ۴. مطمئن شو GitHub واقعاً `dev` را تغییر داده

```powershell
git fetch origin
git log origin/dev --oneline -5
```

---

# ۵. حالا برو روی `feature/marketing-copy`

```powershell
git switch feature/marketing-copy
git branch --show-current
git fetch origin
git merge origin/dev
```

اگر `feature/hero-copy` واقعاً وارد `dev` شده باشد باید Conflict بگیری.

Conflict را به:

```html
<h1>
    Build Smarter Teams Together
</h1>
```

حل کن.

بعد:

```powershell
git add index.html
git status
git commit -m "fix: resolve hero headline merge conflict"
git push origin feature/marketing-copy
```

و در GitHub:

```text
feature/marketing-copy → dev
```

Merge کن.

---

## User

PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git cherry-pick 119414f
The previous cherry-pick is now empty, possibly due to conflict resolution.
If you wish to commit it anyway, use:

    git commit --allow-empty

Otherwise, please use 'git cherry-pick --skip'
On branch feature/hero-copy
Your branch is up to date with 'origin/feature/hero-copy'.

You are currently cherry-picking commit 119414f.
  (all conflicts fixed: run "git cherry-pick --continue")
  (use "git cherry-pick --skip" to skip this patch)
  (use "git cherry-pick --abort" to cancel the cherry-pick operation)

nothing to commit, working tree clean
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git push origin feature/hero-copy
Everything up-to-date
PS C:\Users\Haj Ali\Desktop\HajAli\Uni

---

## Assistant

این خروجی یعنی تغییر commit `119414f` از قبل روی `feature/hero-copy` وجود دارد یا دقیقاً همان تغییر قبلاً روی این branch اعمال شده؛ بنابراین `cherry-pick` چیزی برای اضافه‌کردن پیدا نکرده.

الان مهم‌ترین کار این است که **از حالت نیمه‌کاره cherry-pick خارج شوی**.

```powershell
git cherry-pick --skip
git status
```

بعد برای بررسی:

```powershell
git log --oneline --decorate --graph --all -15
git log feature/hero-copy --oneline -5
git log dev --oneline -5
```

اگر داخل `feature/hero-copy` عنوان این است:

```html
<h1>
    Build Better Teams Together
</h1>
```

پس branch درست است.

در آن صورت مستقیم PR:

```text
feature/hero-copy → dev
```

و Merge.

بعد:

```powershell
git fetch origin
git log origin/dev --oneline -5
git switch feature/marketing-copy
git merge origin/dev
```

در Conflict:

```text
<<<<<<< HEAD
<h1>
    Manage Your Team Smarter
</h1>
=======
<h1>
    Build Better Teams Together
</h1>
>>>>>>> origin/dev
```

نسخه نهایی:

```html
<h1>Build Smarter Teams Together</h1>
```

بعد:

```powershell
git add index.html
git commit -m "fix: resolve hero headline merge conflict"
git push origin feature/marketing-copy
```

---

## User

Otherwise, please use 'git cherry-pick --skip'
On branch feature/hero-copy
Your branch is up to date with 'origin/feature/hero-copy'.

You are currently cherry-picking commit 119414f.
  (all conflicts fixed: run "git cherry-pick --continue")
  (use "git cherry-pick --skip" to skip this patch)
  (use "git cherry-pick --abort" to cancel the cherry-pick operation)

nothing to commit, working tree clean
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git push origin feature/hero-copy
Everything up-to-date
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git push origin feature/hero-copygit cherry-pick --skip^C
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git cherry-pick --skip
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git status
On branch feature/hero-copy
Your branch is up to date with 'origin/feature/hero-copy'.

nothing to commit, working tree clean
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git log --oneline --decorate --graph --all -15
* 119414f (dev) feat: improve hero headline
| *   157f32d (origin/main) Merge pull request #4 from Ali-Najar/feature/hero-copy
| |\
| | * 311413d (HEAD -> feature/hero-copy, origin/feature/hero-copy) feat: improve hero headline
| |/
|/|
| | * bd38147 (origin/feature/marketing-copy, feature/marketing-copy) feat: update marketing headline
| |/
|/|
* |   189a764 (origin/dev) Merge pull request #3 from Ali-Najar/feature/sections
|\
| * | 091009b (origin/feature/sections, feature/sections) feat: add contact and footer sections
| * | 231ac96 feat: add team section
| * | 9e1dbfa style: add feature card styles
| * | 2e3792f feat: add features section
|/ /
* |   7506839 Merge pull request #2 from Ali-Najar/feature/hero
|\
| * | 10f83d5 (origin/feature/hero, feature/hero) feat: add hero call-to-action button
| * | a0574e5 style: add hero section layout
:
* 119414f (dev) feat: improve hero headline
| *   157f32d (origin/main) Merge pull request #4 from Ali-Najar/feature/hero-copy
| |\
| | * 311413d (HEAD -> feature/hero-copy, origin/feature/hero-copy) feat: improve hero headline
| |/
|/|
| | * bd38147 (origin/feature/marketing-copy, feature/marketing-copy) feat: update marketing headline
| |/
|/|
* |   189a764 (origin/dev) Merge pull request #3 from Ali-Najar/feature/sections
|\
| * | 091009b (origin/feature/sections, feature/sections) feat: add contact and footer sections
| * | 231ac96 feat: add team section
| * | 9e1dbfa style: add feature card styles
| * | 2e3792f feat: add features section
|/ /
* |   7506839 Merge pull request #2 from Ali-Najar/feature/hero
|\
| * | 10f83d5 (origin/feature/hero, feature/hero) feat: add hero call-to-action button
| * | a0574e5 style: add hero section layout
Finishing logfile... (interrupt to abort)
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab>
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git switch feature/hero-copy
Already on 'feature/hero-copy'
Your branch is up to date with 'origin/feature/hero-copy'.
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git status
On branch feature/hero-copy
Your branch is up to date with 'origin/feature/hero-copy'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        tatus

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab> git status
On branch feature/hero-copy
Your branch is up to date with 'origin/feature/hero-copy'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        tatus

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\Haj Ali\Desktop\HajAli\University\SE Az\1-Git\static-frontend-lab>

---

## Assistant

الان وضعیت کاملاً مشخص شد و می‌شود تمیز درستش کرد. نکته اصلی این است که `feature/hero-copy` **به اشتباه به `main` merge شده**، نه به `dev`:

```text
157f32d (origin/main) Merge pull request #4 from Ali-Najar/feature/hero-copy
```

در حالی که `origin/dev` هنوز روی:

```text
189a764 (origin/dev) Merge pull request #3 from Ali-Najar/feature/sections
```

است.

همچنین local `dev` یک commit اضافه و تکراری دارد:

```text
119414f (dev) feat: improve hero headline
```

ولی خود `feature/hero-copy` درست است و commit خودش را دارد:

```text
311413d (feature/hero-copy) feat: improve hero headline
```

## ۱. اول فایل تصادفی `tatus` را پاک کن

```powershell
Get-Content .\tatus
Remove-Item .\tatus
git status
```

---

## ۲. local `dev` را اصلاح کن

```powershell
git switch dev
git status
git reset --hard origin/dev
git status
```

---

# ۳. حالا `feature/hero-copy` را این بار به `dev` Merge کن

در GitHub:

```text
base: dev
compare: feature/hero-copy
```

نه:

```text
base: main
```

PR را Merge کن.

---

# ۴. local اطلاعات GitHub را آپدیت کن

```powershell
git fetch origin
git log origin/dev --oneline -5
```

---

# ۵. حالا Conflict واقعی را ایجاد کن

```powershell
git switch feature/marketing-copy
git status
git branch --show-current
git fetch origin
git merge origin/dev
```

این بار باید Conflict بگیری.

---

# ۶. Conflict را حل کن

در `index.html`:

```text
<<<<<<< HEAD
<h1>Manage Your Team Smarter</h1>
=======
<h1>Build Better Teams Together</h1>
>>>>>>> origin/dev
```

را تبدیل کن به:

```html
<h1>
    Build Smarter Teams Together
</h1>
```

بعد:

```powershell
git add index.html
git status
git commit -m "fix: resolve hero headline merge conflict"
git push origin feature/marketing-copy
```

---

# ۷. Marketing را به dev Merge کن

در GitHub:

```text
base: dev
compare: feature/marketing-copy
```

PR بساز و Merge کن.

قرار workflow از این به بعد:

```text
feature/*
    ↓ PR
dev
    ↓ PR
main
```

است.

---

## User

https://ali-najar.github.io/static-frontend-lab/

---

## Assistant

این URL همان آدرسی است که باید در بخش **Live Demo** فایل `README.md` قرار بدهی:

```markdown
## Live Demo

The deployed application is available at:

https://ali-najar.github.io/static-frontend-lab/
```

ولی یک نکته مهم: من همین الان آدرس را بررسی کردم و فعلاً پاسخ **404 Not Found** می‌دهد.

پس احتمالاً یکی از این موارد هنوز کامل نشده:

- GitHub Pages روی `GitHub Actions` تنظیم نشده.
- workflow هنوز موفق اجرا نشده.
- فایل `index.html` در artifact منتشرشده پیدا نشده.
- آخرین تغییرات هنوز به `main` نرسیده‌اند.

اول برو:

```text
Repository
→ Actions
```

و ببین workflow مربوط به Pages سبز شده یا قرمز.

بعد برو:

```text
Settings
→ Pages
```

و بررسی کن Source روی:

```text
GitHub Actions
```

باشد.

اگر خروجی صفحه **Actions** یا خطایی که workflow می‌دهد را بفرستی، دقیق می‌گویم کجای deploy مشکل دارد.

---

## User

[Image attached: GitHub Actions error screenshot showing `Get Pages site failed`, `Error: Not Found`, and a Node.js deprecation warning.]

---

## Assistant

مشکل اصلی کاملاً مشخص است: **GitHub Pages برای این repository هنوز فعال/پیکربندی نشده تا از GitHub Actions استفاده کند**. خود خطا هم همین را می‌گوید:

```text
Get Pages site failed.
Please verify that the repository has Pages enabled
and configured to build using GitHub Actions.
```

این مراحل را انجام بده:

1. برو به repository:
   ```text
   Ali-Najar/static-frontend-lab
   ```

2. برو به:
   ```text
   Settings
   → Pages
   ```

3. در بخش:
   ```text
   Build and deployment
   ```

4. جلوی:
   ```text
   Source
   ```

   انتخاب کن:

   ```text
   GitHub Actions
   ```

بعد برگرد به:

```text
Actions
```

workflow قبلی را باز کن و بزن:

```text
Re-run jobs
→ Re-run all jobs
```

یا چون workflow تو `workflow_dispatch` دارد، می‌توانی دستی هم اجرا کنی.

در مورد Warning پایین تصویر:

```text
Node.js 20 is deprecated...
actions/configure-pages@v5
```

این **علت شکست deployment نیست**. خطای اصلی همان `Get Pages site failed / Not Found` است.

فعلاً `deploy.yml` را تغییر نده؛ workflowای که داری از نظر ساختار کلی درست است.

بعد از اینکه:

```text
Settings → Pages → Source → GitHub Actions
```

را انجام دادی و workflow را دوباره اجرا کردی، باید مرحله:

```text
Configure GitHub Pages
```

از این خطا رد شود.

---

## User

خب این دستور العمل ازمایشگاه هست. طبق این readme کامل را به من بده برای گزارش کار. سپس توضیح بده که چه نکاتی مهم است که به آنها اشاره کنم و چیز های خواسته شده مسئله چیست. این ها هم سوالاتی که باید پاسخ داده شوند هست:

علاوه بر گزارش آزمایش، پاسخ سوالات زیر را هم داخل فایل README بنویسید:

    پوشه‌ی .git چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟
    منظور از atomic بودن در atomic commit و atomic pull-request چیست؟
    تفاوت دستورهای fetch و pull و merge و rebase و cherry-pick را بیان کنید.
    تفاوت دستورهای reset و revert و restore و switch و checkout را بیان کنید.
    منظور از stage یا همان index چیست؟ دستور stash چه کاری را انجام می‌دهد؟
    مفهوم snapshot به چه معناست؟ ارتباط آن با commit چیست؟ (راهنمایی: لینک)
    تفاوت‌های local repository و remote repository </pre>

[PDF attachment: SELab-Plc-Summer-2025.pdf]

---

## Assistant

طبق دستورالعمل عمومی آزمایشگاه، گزارش باید **داخل `README.md` و به زبان فارسی** باشد و نباید گزارش را به‌صورت PDF تحویل بدهید. متن زیر را می‌توانی مبنای README نهایی قرار بدهی. بخش‌هایی که با `TODO` مشخص کرده‌ام باید با اطلاعات واقعی repository خودت تکمیل شوند.

# آزمایش فرانت‌اند ایستا با قابلیت استقرار خودکار

## مشخصات پروژه

- **نام پروژه:** TeamFlow
- **نام دانشجو:** علی نجار
- **Repository:** [Ali-Najar/static-frontend-lab](https://github.com/Ali-Najar/static-frontend-lab)
- **Live Demo:** [GitHub Pages](https://ali-najar.github.io/static-frontend-lab/)
- **نوع انجام پروژه:** فردی
- **تکنولوژی‌ها:** HTML، CSS، JavaScript، Git، GitHub، GitHub Actions و GitHub Pages

---

# 1. مقدمه و هدف آزمایش

هدف این آزمایش آشنایی عملی با مفاهیم Git و فرایند توسعه نرم‌افزار مبتنی بر Version Control است. در این آزمایش یک Frontend ایستا با استفاده از HTML، CSS و JavaScript پیاده‌سازی شده و تمام مراحل توسعه آن با Git مدیریت شده است.

در طول انجام پروژه تلاش شده است مفاهیم زیر به‌صورت عملی مورد استفاده قرار گیرند:

- ایجاد و مدیریت Local Repository
- اتصال Local Repository به Remote Repository
- استفاده از `.gitignore`
- ایجاد commitهای معنادار و Atomic
- استفاده از Branchهای مختلف برای توسعه قابلیت‌ها
- استفاده از Pull Request برای ادغام تغییرات
- محافظت از Branch اصلی پروژه
- ایجاد و حل Merge Conflict
- استفاده از دستورهای مختلف Git مانند `fetch`، `pull`، `merge`، `stash`، `restore` و ...
- پیاده‌سازی Continuous Deployment با GitHub Actions
- استقرار خودکار پروژه روی GitHub Pages

---

# 2. معرفی پروژه

پروژه **TeamFlow** یک وب‌سایت Frontend ایستا برای معرفی یک ابزار فرضی مدیریت تیم است.

این پروژه صرفاً در سمت Client اجرا می‌شود و برای اجرای آن به Backend یا Database نیازی نیست.

قابلیت‌های پیاده‌سازی‌شده در پروژه عبارت‌اند از:

- Navigation Bar
- Hero Section
- Call To Action Button
- Features Section
- Team Section
- Contact Section
- Footer
- Responsive Design
- Dark Mode
- Mobile Navigation Menu
- Smooth Scrolling
- Semantic HTML و برخی بهبودهای Accessibility

---

# 3. ساختار پروژه

```text
static-frontend-lab/
│
├── index.html
├── README.md
├── .gitignore
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── main.js
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

# 4. اجرای پروژه

```bash
git clone https://github.com/Ali-Najar/static-frontend-lab.git
cd static-frontend-lab
```

و فایل `index.html` در مرورگر باز می‌شود.

Live Demo:

https://ali-najar.github.io/static-frontend-lab/

---

# 5. استفاده از Git در پروژه

```bash
git init
git add .
git commit -m "chore: initialize static frontend project"
git remote add origin https://github.com/Ali-Najar/static-frontend-lab.git
git push -u origin main
```

---

# 6. فایل `.gitignore`

```gitignore
# Operating system files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Environment files
.env
.env.*

# Logs
*.log

# Temporary files
*.tmp
```

---

# 7. استراتژی Branchها

```text
feature/*
     |
     v
    dev
     |
     v
    main
```

Branchهای اصلی:

| Branch | هدف |
|---|---|
| `main` | نگهداری نسخه پایدار و قابل Deploy |
| `dev` | ادغام و Integration قابلیت‌های مختلف |
| `feature/navbar` | پیاده‌سازی Navigation Bar |
| `feature/hero` | پیاده‌سازی Hero Section |
| `feature/sections` | پیاده‌سازی Features، Team، Contact و Footer |
| `feature/hero-copy` | تغییر متن Hero و ایجاد سناریوی Conflict |
| `feature/marketing-copy` | تغییر دیگر متن Hero و ایجاد Conflict |
| `feature/hero-layout` | تغییر Layout بخش Hero |
| `fix/mobile-hero` | اصلاح Hero برای Mobile و ایجاد Conflict دوم |
| `feature/theme` | پیاده‌سازی Dark Mode |
| `feature/interactions` | پیاده‌سازی تعاملات JavaScript و Mobile Menu |
| `fix/responsive` | رفع مشکلات Responsive Design |
| `fix/accessibility` | بهبود Semantic HTML و Accessibility |
| `ci/github-pages` | اضافه کردن GitHub Actions و Deployment |

---

# 8. Commit Strategy

نمونه commitها:

```text
chore: initialize static frontend project
chore: add gitignore rules
docs: add initial project README
feat: add navigation bar structure
style: add navigation bar styles
style: make navigation responsive
feat: add hero section content
style: add hero section layout
feat: add hero call-to-action button
feat: add features section
style: add feature card styles
feat: add team section
feat: add contact and footer sections
feat: improve hero headline
feat: update marketing headline
fix: resolve hero headline merge conflict
style: increase hero section spacing
fix: adjust hero spacing for mobile
fix: resolve hero responsive spacing conflict
feat: add dark mode toggle
style: add dark theme styles
feat: add mobile menu interaction
feat: close mobile menu after navigation
fix: improve mobile layout
fix: improve feature cards responsiveness
a11y: improve semantic HTML and labels
ci: add GitHub Pages deployment workflow
```

برای شمارش:

```bash
git rev-list --all --count
```

و نمایش graph:

```bash
git log --oneline --graph --decorate --all
```

---

# 9. Pull Requestها

```text
feature branch
      |
      | Pull Request
      v
     dev
      |
      | Pull Request
      v
     main
```

---

# 10. محافظت از Branch اصلی

روی `main` گزینه:

```text
Require a pull request before merging
```

فعال شد.

---

# 11. Merge Conflict اول

در `index.html` و بین:

```text
feature/hero-copy
feature/marketing-copy
```

دو نسخه:

```html
<h1>
    Build Better Teams Together
</h1>
```

و:

```html
<h1>
    Manage Your Team Smarter
</h1>
```

به conflict رسیدند.

نسخه نهایی:

```html
<h1>
    Build Smarter Teams Together
</h1>
```

و:

```bash
git add index.html
git commit -m "fix: resolve hero headline merge conflict"
```

---

# 12. Merge Conflict دوم

در:

```text
assets/css/style.css
```

و بین:

```text
feature/hero-layout
fix/mobile-hero
```

حل شد.

Desktop:

```css
.hero {
    padding: 120px 24px;
}
```

Mobile:

```css
@media (max-width: 768px) {
    .hero {
        padding: 60px 16px;
    }
}
```

---

# 13. یک خطای فرایندی و نحوه اصلاح آن

در یکی از مراحل یک Pull Request مربوط به `feature/hero-copy` به اشتباه مستقیم به `main` Merge شد.

برای بررسی و اصلاح وضعیت از:

```bash
git status
git branch -a
git fetch origin
git log --oneline --graph --decorate --all
```

و در یک مرحله از `cherry-pick` و `reset` استفاده شد.

---

# 14. استفاده از Stash

```bash
git stash push -m "WIP changes"
git stash list
git stash pop
```

---

# 15. GitHub Actions

Workflow:

```text
.github/workflows/deploy.yml
```

و trigger:

```yaml
on:
  push:
    branches:
      - main
```

مراحل:

```text
Checkout Repository
        ↓
Configure GitHub Pages
        ↓
Upload Static Files
        ↓
Deploy to GitHub Pages
```

---

# 16. GitHub Pages و Continuous Deployment

Live Demo:

https://ali-najar.github.io/static-frontend-lab/

---

# 17. مدیریت فعالیت‌ها و Kanban Board

پیشنهاد ستون‌ها:

```text
To Do
In Progress
Done
```

و لینک Board باید در README قرار گیرد.

---

# 18. مستندسازی استفاده از هوش مصنوعی

مدل:

```text
GPT-5.6 Sol
```

ابزار:

```text
ChatGPT
```

موارد استفاده:

- برنامه‌ریزی مراحل
- توضیح Workflow Git
- ساختار Branchها
- نمونه HTML/CSS/JS
- Conflictها
- عیب‌یابی Git
- GitHub Actions/Pages
- README
- توضیح مفاهیم Git

پرامپت‌ها بهتر است در:

```text
AI_USAGE.md
```

ثبت شوند.

---

# 19. پرسش‌های آزمایش

## سوال 1: پوشه `.git` چیست؟

پوشه `.git` مهم‌ترین قسمت Local Repository است و Objectها، Branch/Tag refs، `HEAD`، Index، تنظیمات local، Remoteها و Reflog را نگهداری می‌کند.

با:

```bash
git init
```

ایجاد می‌شود؛ `git clone` نیز آن را ایجاد می‌کند.

---

## سوال 2: Atomic Commit و Atomic Pull Request

Atomic یعنی یک تغییر روی یک هدف منطقی مشخص تمرکز داشته باشد.

Commit خوب:

```text
feat: add dark mode toggle
```

نه:

```text
add dark mode, change footer, fix navbar and update README
```

---

## سوال 3: fetch / pull / merge / rebase / cherry-pick

| دستور | کاربرد |
|---|---|
| `fetch` | دریافت اطلاعات جدید Remote بدون ادغام مستقیم |
| `pull` | دریافت اطلاعات Remote و Integrate کردن آن |
| `merge` | ترکیب تاریخچه دو Branch |
| `rebase` | بازاعمال Commitها روی Base جدید |
| `cherry-pick` | اعمال یک Commit مشخص روی Branch فعلی |

---

## سوال 4: reset / revert / restore / switch / checkout

- `reset`: جابه‌جایی HEAD و بسته به mode تغییر Index/Working Tree
- `revert`: ساخت commit جدید برای معکوس کردن commit قبلی
- `restore`: بازیابی فایل یا unstage
- `switch`: تغییر branch
- `checkout`: دستور قدیمی‌تر و چندمنظوره برای branch/file

---

## سوال 5: Stage / Index و Stash

```text
Working Directory
        |
        | git add
        v
Staging Area / Index
        |
        | git commit
        v
Repository
```

Stash:

```bash
git stash
git stash list
git stash pop
```

---

## سوال 6: Snapshot و Commit

Commit یک snapshot منطقی از وضعیت tracked files پروژه در یک لحظه است و علاوه بر snapshot اطلاعات parent، author، timestamp و message دارد.

---

## سوال 7: Local Repository و Remote Repository

Local روی سیستم توسعه‌دهنده است و Remote روی سرویس دیگری مانند GitHub.

```text
Local Repository
       |
       | git push
       v
Remote Repository
       |
       | git fetch / git pull
       v
Local Repository
```

---

# 20. دستورهای مهم

```bash
git init
git status
git add
git commit
git log
git diff
git branch
git switch
git fetch
git pull
git push
git merge
git stash
git restore
git reset
git revert
git rebase
git cherry-pick
git remote
```

---

# 21. نتیجه‌گیری

در این آزمایش Static Frontend با HTML/CSS/JS پیاده‌سازی شد و توسعه با Git، Branch، Pull Request، Merge Conflict، Branch Protection و Continuous Deployment روی GitHub Pages انجام شد.

---

# 22. چک‌لیست نهایی

- [ ] پروژه Static Frontend پیاده‌سازی شده است.
- [ ] Git از ابتدای پروژه استفاده شده است.
- [ ] فایل `.gitignore` وجود دارد.
- [ ] حداقل ۲۰ Commit معنادار وجود دارد.
- [ ] حداقل سه Branch معنادار ایجاد شده است.
- [ ] حداقل دو Merge Conflict ایجاد و حل شده است.
- [ ] `main` محافظت شده است.
- [ ] ورود تغییرات به `main` از طریق Pull Request انجام شده است.
- [ ] Feature Branchها از طریق Pull Request ادغام شده‌اند.
- [ ] GitHub Actions تنظیم شده است.
- [ ] GitHub Pages فعال و قابل دسترسی است.
- [ ] Automatic Deployment آزمایش شده است.
- [ ] آدرس Live Demo در README قرار دارد.
- [ ] Branchها و Commitها در گزارش توضیح داده شده‌اند.
- [ ] دو Conflict در گزارش مستند شده‌اند.
- [ ] پاسخ هر هفت سؤال در README وجود دارد.
- [ ] Kanban Board ایجاد و لینک آن ثبت شده است.
- [ ] استفاده از هوش مصنوعی مستند شده است.
- [ ] تمام پرامپت‌های استفاده‌شده ثبت شده‌اند.
- [ ] فیلم نهایی آزمایش تهیه شده است.

بعد از README، نکات مهمی که باید به آن‌ها اشاره شود:

- README باید فارسی و داخل repository باشد.
- گزارش PDF نباید ارسال شود.
- فیلم نهایی ضروری است.
- حداقل ۲۰ commit، سه branch و دو conflict باید در خود Git history قابل اثبات باشند.
- Kanban Board و تقسیم taskها باید قابل مشاهده باشد.
- استفاده از AI باید مستند شود: نام مدل، ابزار، روش استفاده، promptها و نحوه تعامل.
- در فیلم باید نشان بدهی که به کار انجام‌شده مسلطی.

---

## User

Can you put the whole of this gpt chat into a .md file?

---

## User

Can you put the whole of this gpt chat into a .md file? give it to me for download

