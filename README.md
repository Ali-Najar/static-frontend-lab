# آزمایش فرانت‌اند ایستا با قابلیت استقرار خودکار

## مشخصات پروژه

* **نام پروژه:** TeamFlow
* **Repository:** [Ali-Najar/static-frontend-lab](https://github.com/Ali-Najar/static-frontend-lab)
* **Live Demo:** [GitHub Pages](https://ali-najar.github.io/static-frontend-lab/)

---

# 1. مقدمه و هدف آزمایش

هدف این آزمایش آشنایی عملی با مفاهیم Git و فرایند توسعه نرم‌افزار مبتنی بر Version Control است. در این آزمایش یک Frontend ایستا با استفاده از HTML، CSS و JavaScript پیاده‌سازی شده و تمام مراحل توسعه آن با Git مدیریت شده است.

در طول انجام پروژه تلاش شده است مفاهیم زیر به‌صورت عملی مورد استفاده قرار گیرند:

* ایجاد و مدیریت Local Repository
* اتصال Local Repository به Remote Repository
* استفاده از `.gitignore`
* ایجاد commitهای معنادار و Atomic
* استفاده از Branchهای مختلف برای توسعه قابلیت‌ها
* استفاده از Pull Request برای ادغام تغییرات
* محافظت از Branch اصلی پروژه
* ایجاد و حل Merge Conflict
* استفاده از دستورهای مختلف Git مانند `fetch`، `pull`، `merge`، `stash`، `restore` و ...
* پیاده‌سازی Continuous Deployment با GitHub Actions
* استقرار خودکار پروژه روی GitHub Pages

---

# 2. معرفی پروژه

پروژه **TeamFlow** یک وب‌سایت Frontend ایستا برای معرفی یک ابزار فرضی مدیریت تیم است.

این پروژه صرفاً در سمت Client اجرا می‌شود و برای اجرای آن به Backend یا Database نیازی نیست.

قابلیت‌های پیاده‌سازی‌شده در پروژه عبارت‌اند از:

* Navigation Bar
* Hero Section
* Call To Action Button
* Features Section
* Team Section
* Contact Section
* Footer
* Responsive Design
* Dark Mode
* Mobile Navigation Menu
* Smooth Scrolling
* Semantic HTML و برخی بهبودهای Accessibility

---

# 3. ساختار پروژه

ساختار اصلی فایل‌های پروژه به شکل زیر است:

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

فایل `index.html` ساختار اصلی صفحه، فایل `style.css` ظاهر سایت و فایل `main.js` رفتارهای تعاملی Frontend را شامل می‌شوند.

فایل `deploy.yml` نیز Workflow مربوط به GitHub Actions را تعریف می‌کند.

---

# 4. اجرای پروژه

از آنجا که پروژه Pure Static Frontend است، برای اجرای آن کافی است Repository را Clone کنیم:

```bash
git clone https://github.com/Ali-Najar/static-frontend-lab.git
```

سپس وارد پروژه شویم:

```bash
cd static-frontend-lab
```

و فایل زیر را در مرورگر باز کنیم:

```text
index.html
```

نسخه Deploy شده پروژه نیز از طریق آدرس زیر قابل مشاهده است:

https://ali-najar.github.io/static-frontend-lab/

---

# 5. استفاده از Git در پروژه

Repository محلی پروژه با دستور زیر ایجاد شد:

```bash
git init
```

سپس فایل‌ها به Staging Area اضافه شدند:

```bash
git add .
```

و اولین Commit ایجاد شد:

```bash
git commit -m "chore: initialize static frontend project"
```

Remote Repository نیز با دستور زیر به پروژه متصل شد:

```bash
git remote add origin https://github.com/Ali-Najar/static-frontend-lab.git
```

و Branch اصلی به GitHub ارسال شد:

```bash
git push -u origin main
```

---

# 6. فایل `.gitignore`

برای جلوگیری از Track شدن فایل‌هایی که نباید وارد Repository شوند، از فایل `.gitignore` استفاده شده است.

نمونه محتوای این فایل:

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

استفاده از `.gitignore` باعث می‌شود فایل‌های موقت، تنظیمات IDE، فایل‌های Environment و فایل‌های غیرضروری وارد Repository نشوند.

---

# 7. استراتژی Branchها

برای مدیریت بهتر توسعه پروژه از چند Branch با اهداف متفاوت استفاده شد.

ساختار کلی Workflow پروژه به صورت زیر بود:

```text
feature/*
     |
     v
    dev
     |
     v
    main
```

Branchهای Feature و Fix ابتدا از `dev` ایجاد شده و پس از تکمیل از طریق Pull Request به `dev` ادغام شدند.

در پایان، نسخه کامل موجود در `dev` از طریق Pull Request وارد `main` شد.

## Branchهای اصلی

| Branch                   | هدف                                         |
| ------------------------ | ------------------------------------------- |
| `main`                   | نگهداری نسخه پایدار و قابل Deploy           |
| `dev`                    | ادغام و Integration قابلیت‌های مختلف        |
| `feature/navbar`         | پیاده‌سازی Navigation Bar                   |
| `feature/hero`           | پیاده‌سازی Hero Section                     |
| `feature/sections`       | پیاده‌سازی Features، Team، Contact و Footer |
| `feature/hero-copy`      | تغییر متن Hero و ایجاد سناریوی Conflict     |
| `feature/marketing-copy` | تغییر دیگر متن Hero و ایجاد Conflict        |
| `feature/hero-layout`    | تغییر Layout بخش Hero                       |
| `fix/mobile-hero`        | اصلاح Hero برای Mobile و ایجاد Conflict دوم |
| `feature/theme`          | پیاده‌سازی Dark Mode                        |
| `feature/interactions`   | پیاده‌سازی تعاملات JavaScript و Mobile Menu |
| `fix/responsive`         | رفع مشکلات Responsive Design                |
| `fix/accessibility`      | بهبود Semantic HTML و Accessibility         |
| `ci/github-pages`        | اضافه کردن GitHub Actions و Deployment      |

> قبل از تحویل، Branchهایی از جدول که واقعاً در Repository ساخته نشده‌اند حذف خواهند شد.

---

# 8. Commit Strategy

در این پروژه تلاش شد Commitها تا حد امکان Atomic و معنادار باشند.

به جای Commitهایی مانند:

```text
update
fix files
changes
```

از پیام‌هایی استفاده شد که دقیقاً هدف Commit را مشخص می‌کنند.

نمونه‌هایی از Commitهای پروژه:

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

تعداد واقعی Commitهای Repository در زمان تحویل:

```text
49
```

شرط آزمایش وجود حداقل ۲۰ Commit معنادار است.

برای مشاهده تاریخچه Commitها نیز از دستور زیر استفاده شد:

```bash
git log --oneline --graph --decorate --all
```

---

# 9. Pull Requestها

برای ادغام تغییرات از Pull Request استفاده شد.

Workflow معمول توسعه به این صورت بود:

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

برای مثال:

```text
feature/hero → dev
feature/sections → dev
feature/theme → dev
feature/interactions → dev
fix/responsive → dev
ci/github-pages → dev
dev → main
```

این ساختار باعث شد تغییرات قبل از ورود به Branch اصلی به صورت جداگانه قابل بررسی باشند.

---

# 10. محافظت از Branch اصلی

برای جلوگیری از ایجاد تغییر مستقیم روی `main`، این Branch در GitHub محافظت شد.

در تنظیمات Repository، Rule مربوط به `main` ایجاد و گزینه زیر فعال شد:

```text
Require a pull request before merging
```

بنابراین روند مورد انتظار برای ورود تغییرات به نسخه پایدار پروژه:

```text
Feature
   ↓
Pull Request
   ↓
dev
   ↓
Pull Request
   ↓
main
```

است.

از آنجا که این پروژه به‌صورت فردی انجام شده است، الزام Approval توسط فرد دوم فعال نشده است.

---

# 11. Merge Conflict اول

Conflict اول در فایل:

```text
index.html
```

ایجاد شد.

دو Branch زیر از یک Base مشترک ایجاد شدند:

```text
feature/hero-copy
feature/marketing-copy
```

در Branch اول عنوان Hero به شکل زیر تغییر داده شد:

```html
<h1>
    Build Better Teams Together
</h1>
```

و در Branch دوم همان قسمت به شکل دیگری تغییر داده شد:

```html
<h1>
    Manage Your Team Smarter
</h1>
```

پس از ادغام `feature/hero-copy` در `dev`، روی Branch دوم دستور زیر اجرا شد:

```bash
git fetch origin
git merge origin/dev
```

از آنجا که یک قسمت یکسان از فایل در هر دو Branch به شکل متفاوت تغییر کرده بود، Git قادر به انتخاب خودکار نسخه صحیح نبود و Merge Conflict ایجاد شد.

فایل در حالت Conflict شامل Markerهایی مشابه زیر بود:

```text
<<<<<<< HEAD
Manage Your Team Smarter
=======
Build Better Teams Together
>>>>>>> origin/dev
```

Conflict به صورت دستی حل شد و نسخه نهایی به شکل زیر انتخاب شد:

```html
<h1>
    Build Smarter Teams Together
</h1>
```

سپس فایل حل‌شده Stage و Commit شد:

```bash
git add index.html
git commit -m "fix: resolve hero headline merge conflict"
```

---

# 12. Merge Conflict دوم

Conflict دوم در فایل:

```text
assets/css/style.css
```

ایجاد شد.

دو Branch زیر مقدار `padding` مربوط به `.hero` را به صورت متفاوت تغییر دادند:

```text
feature/hero-layout
fix/mobile-hero
```

یک Branch مقدار مربوط به Desktop را افزایش داد:

```css
padding: 120px 24px;
```

و Branch دیگر مقدار مناسب Mobile را قرار داد:

```css
padding: 60px 16px;
```

پس از Merge شدن یکی از Branchها در `dev`، دستور زیر روی Branch دیگر اجرا شد:

```bash
git fetch origin
git merge origin/dev
```

Git در قسمت CSS Conflict ایجاد کرد.

برای حل Conflict تصمیم گرفته شد مقدار Desktop حفظ شود:

```css
.hero {
    padding: 120px 24px;
}
```

و مقدار Mobile در Media Query قرار گیرد:

```css
@media (max-width: 768px) {
    .hero {
        padding: 60px 16px;
    }
}
```

پس از حل Conflict:

```bash
git add assets/css/style.css
git commit -m "fix: resolve hero responsive spacing conflict"
```

اجرا شد.

---

# 13. GitHub Actions

برای Continuous Deployment از GitHub Actions استفاده شد.

Workflow مربوط به Deployment در فایل زیر قرار دارد:

```text
.github/workflows/deploy.yml
```

Workflow با Push شدن تغییرات روی `main` اجرا می‌شود:

```yaml
on:
  push:
    branches:
      - main
```

مراحل اصلی Deployment عبارت‌اند از:

```text
Checkout Repository
        ↓
Configure GitHub Pages
        ↓
Upload Static Files
        ↓
Deploy to GitHub Pages
```

Permissionهای مورد نیاز نیز در Workflow تعریف شده‌اند:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

به این ترتیب پس از Merge شدن تغییر جدید روی `main`، Workflow بدون Deploy دستی اجرا می‌شود.

---

# 14. GitHub Pages و Continuous Deployment

پروژه روی GitHub Pages منتشر شده است.

آدرس نسخه Deploy شده:

https://ali-najar.github.io/static-frontend-lab/

برای بررسی Continuous Deployment یک تغییر جدید روی یک Branch جداگانه انجام شد و پس از طی Workflow زیر:

```text
fix branch
    ↓
dev
    ↓
main
```

GitHub Action دوباره به صورت خودکار اجرا شد.

بنابراین Deployment پروژه با تغییر `main` به‌صورت خودکار انجام می‌شود.

---

# 15. مستندسازی استفاده از هوش مصنوعی

در فرایند انجام این پروژه از ابزار هوش مصنوعی به عنوان دستیار آموزشی استفاده شده است.

## مدل مورد استفاده

```text
GPT-5.6 Sol
```

## موارد استفاده

از مدل در موارد زیر کمک گرفته شد:

* برنامه‌ریزی مراحل انجام آزمایش
* توضیح Workflow مناسب Git
* پیشنهاد ساختار Branchها
* ارائه نمونه کد HTML، CSS و JavaScript
* توضیح روش ایجاد و حل Merge Conflict
* عیب‌یابی مشکلات Git و Branchها
* بررسی خطاهای GitHub Actions و GitHub Pages
* پیشنهاد ساختار گزارش README
* توضیح مفاهیم Git برای پاسخ به پرسش‌های آزمایش

تمام دستورات قبل از اجرا بررسی شده و نتیجه واقعی آن‌ها در Repository مورد ارزیابی قرار گرفته است.

هوش مصنوعی در این آزمایش به عنوان **دستیار** مورد استفاده قرار گرفته و مسئولیت اجرا، بررسی نتیجه دستورات و درک مراحل بر عهده دانشجو بوده است.

## پرامپت‌ها

مطابق دستورالعمل آزمایشگاه، پرامپت‌های استفاده‌شده باید مستند شوند.

به دلیل طولانی بودن تعامل، متن کامل پرامپت‌ها باید در انتهای این README یا در فایل جداگانه زیر قرار گیرد:

```text
AI_USAGE.md
```

**به دلیل اینکه نسخه ChatGPT Buisness امکان export چت به افراد خارج workspace را نمی‌دهد، محتوای چت داخل این فایل مارک داون قرار گرفته است.**

---

# 16. پرسش‌های آزمایش

## سوال 1: پوشه `.git` چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

پوشه `.git` مهم‌ترین قسمت یک Local Repository است و اطلاعات داخلی Git مربوط به Repository را نگهداری می‌کند.

وقتی دستور زیر اجرا می‌شود:

```bash
git init
```

Git در پوشه فعلی یک Directory مخفی با نام:

```text
.git
```

ایجاد می‌کند.

اطلاعات مهم ذخیره‌شده در آن شامل موارد زیر است:

* Objectهای Git مانند Commit، Tree و Blob
* اطلاعات Branchها و Tagها
* Referenceها یا `refs`
* فایل `HEAD`
* Staging Area یا Index
* تنظیمات Local Repository
* اطلاعات Remoteها
* Reflog و بخشی از تاریخچه داخلی Repository

برای مثال `HEAD` مشخص می‌کند در حال حاضر روی چه Branch یا Commitی قرار داریم.

پوشه `.git` در واقع Repository واقعی Git است و فایل‌های پروژه در کنار آن Working Directory را تشکیل می‌دهند.

هنگام اجرای:

```bash
git clone <repository-url>
```

نیز Git به صورت خودکار Repository محلی و پوشه `.git` را ایجاد می‌کند.

---

# سوال 2: منظور از Atomic بودن در Atomic Commit و Atomic Pull Request چیست؟

Atomic بودن یعنی یک تغییر تا حد امکان تنها **یک هدف منطقی و مشخص** داشته باشد.

## Atomic Commit

یک Atomic Commit باید یک تغییر مشخص را انجام دهد.

برای مثال Commit زیر مناسب است:

```text
feat: add dark mode toggle
```

زیرا فقط قابلیت Dark Mode را اضافه می‌کند.

اما Commitی مانند:

```text
add dark mode, change footer, fix navbar and update README
```

چند تغییر نامرتبط را در یک Commit قرار داده و Atomic نیست.

Atomic Commit باعث می‌شود:

* تاریخچه Git قابل فهم‌تر باشد.
* Code Review ساده‌تر شود.
* پیدا کردن Bug راحت‌تر باشد.
* Revert کردن یک تغییر ساده‌تر شود.
* استفاده از Cherry-pick قابل کنترل‌تر باشد.

## Atomic Pull Request

Atomic Pull Request نیز باید یک هدف مشخص داشته باشد.

برای مثال:

```text
Add responsive navigation
```

یک PR مناسب است.

اما PRی که به صورت همزمان Navbar، Footer، Dark Mode و README را تغییر دهد، بررسی و مدیریت سخت‌تری خواهد داشت.

بنابراین Atomic بودن در Commit و Pull Request به معنی کوچک بودن صرف نیست؛ بلکه به معنی **تمرکز روی یک واحد منطقی و منسجم تغییر** است.

---

# سوال 3: تفاوت `fetch`، `pull`، `merge`، `rebase` و `cherry-pick` چیست؟

## `git fetch`

دستور:

```bash
git fetch origin
```

اطلاعات جدید را از Remote Repository دریافت می‌کند و Remote-Tracking Branchهایی مانند:

```text
origin/main
origin/dev
```

را به‌روزرسانی می‌کند.

اما Branch فعلی و Working Directory را مستقیماً تغییر نمی‌دهد.

بنابراین `fetch` برای دریافت و مشاهده وضعیت جدید Remote بدون ادغام فوری آن مناسب است.

---

## `git pull`

مثال:

```bash
git pull origin dev
```

ابتدا اطلاعات Remote را دریافت می‌کند و سپس آن‌ها را در Branch جاری Integrate می‌کند.

به صورت مفهومی:

```text
pull = fetch + integration
```

این Integration معمولاً با Merge انجام می‌شود، اما بسته به تنظیمات می‌تواند از Rebase نیز استفاده کند.

---

## `git merge`

مثال:

```bash
git merge origin/dev
```

تاریخچه دو Branch را با یکدیگر ترکیب می‌کند.

در صورت نیاز ممکن است یک Merge Commit ایجاد شود.

یکی از ویژگی‌های مهم Merge این است که Commitهای قبلی را بازنویسی نمی‌کند و شکل انشعاب تاریخچه قابل حفظ است.

---

## `git rebase`

مثال:

```bash
git rebase dev
```

Commitهای Branch فعلی را روی Base جدید دوباره اعمال می‌کند.

برای مثال:

```text
A---B---C dev
     \
      D---E feature
```

بعد از Rebase:

```text
A---B---C---D'---E'
```

Rebase تاریخچه خطی‌تری تولید می‌کند؛ اما چون Commitها دوباره ساخته می‌شوند، Hash آن‌ها نیز تغییر می‌کند.

به همین دلیل روی Branchهای Shared باید با احتیاط استفاده شود.

---

## `git cherry-pick`

مثال:

```bash
git cherry-pick 119414f
```

تغییرات یک Commit مشخص را انتخاب کرده و روی Branch فعلی اعمال می‌کند.

برخلاف Merge، کل Branch وارد Branch فعلی نمی‌شود و فقط Commit انتخاب‌شده اعمال می‌شود.

Cherry-pick برای انتقال یک تغییر خاص میان Branchها مفید است.

---

## خلاصه

| دستور         | کاربرد                                       |
| ------------- | -------------------------------------------- |
| `fetch`       | دریافت اطلاعات جدید Remote بدون ادغام مستقیم |
| `pull`        | دریافت اطلاعات Remote و Integrate کردن آن    |
| `merge`       | ترکیب تاریخچه دو Branch                      |
| `rebase`      | بازاعمال Commitها روی Base جدید              |
| `cherry-pick` | اعمال یک Commit مشخص روی Branch فعلی         |

---

# سوال 4: تفاوت `reset`، `revert`، `restore`، `switch` و `checkout` چیست؟

## `git reset`

`reset` می‌تواند موقعیت `HEAD` را تغییر دهد و بسته به Mode روی Index و Working Directory نیز اثر بگذارد.

مثال:

```bash
git reset --soft HEAD~1
```

Commit آخر را از History فعلی عقب می‌برد ولی تغییرات را در Stage نگه می‌دارد.

```bash
git reset --mixed HEAD~1
```

حالت پیش‌فرض است و تغییرات را از Stage نیز خارج می‌کند.

```bash
git reset --hard HEAD~1
```

هم Commit و هم تغییرات Working Directory را به وضعیت قبلی بازمی‌گرداند.

`--hard` می‌تواند باعث از دست رفتن تغییرات شود و باید با احتیاط استفاده شود.

---

## `git revert`

مثال:

```bash
git revert <commit>
```

Commit قبلی را از History حذف نمی‌کند.

در عوض یک Commit جدید ایجاد می‌کند که اثر Commit موردنظر را معکوس می‌کند.

به همین دلیل برای Repository مشترک و Commitهایی که Push شده‌اند معمولاً انتخاب امن‌تری است.

---

## `git restore`

برای بازگرداندن محتوای فایل‌ها استفاده می‌شود.

مثال:

```bash
git restore index.html
```

تغییر Commitنشده فایل را دور می‌اندازد.

برای خارج کردن فایل از Stage نیز می‌توان نوشت:

```bash
git restore --staged index.html
```

---

## `git switch`

برای جابه‌جایی بین Branchها استفاده می‌شود:

```bash
git switch dev
```

و برای ساخت Branch جدید:

```bash
git switch -c feature/navbar
```

---

## `git checkout`

`checkout` دستور قدیمی‌تر و چندمنظوره Git است.

می‌تواند برای تغییر Branch استفاده شود:

```bash
git checkout dev
```

و همچنین در برخی حالت‌ها برای بازیابی فایل‌ها.

در نسخه‌های جدید Git برای خواناتر شدن کارها، وظایف اصلی `checkout` میان دو دستور جدا شده‌اند:

```text
switch  → مدیریت جابه‌جایی Branch
restore → بازیابی فایل‌ها
```

---

# سوال 5: Stage یا Index چیست؟ دستور `stash` چه کاری انجام می‌دهد؟

## Stage / Index

Staging Area یا Index مرحله‌ای میان Working Directory و Commit است.

مدل کلی:

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

وقتی یک فایل تغییر می‌کند، هنوز به صورت خودکار وارد Commit بعدی نمی‌شود.

با:

```bash
git add index.html
```

نسخه فعلی فایل برای Commit بعدی Stage می‌شود.

برای مشاهده تغییرات Stage شده:

```bash
git diff --staged
```

استفاده می‌شود.

وجود Stage اجازه می‌دهد از میان چند تغییر موجود در Working Directory فقط تغییرات موردنظر را وارد Commit بعدی کنیم.

---

## `git stash`

`stash` برای ذخیره موقت تغییرات Commitنشده استفاده می‌شود.

مثال:

```bash
git stash
```

یا:

```bash
git stash push -m "WIP changes"
```

پس از آن Working Directory تمیز می‌شود و می‌توان موقتاً روی Branch دیگری کار کرد.

مشاهده Stashها:

```bash
git stash list
```

و بازیابی:

```bash
git stash pop
```

به صورت پیش‌فرض فایل‌های Untracked الزاماً وارد Stash نمی‌شوند و در صورت نیاز می‌توان از گزینه‌هایی مانند `-u` استفاده کرد.

---

# سوال 6: Snapshot چیست و چه ارتباطی با Commit دارد؟

یکی از مدل‌های ذهنی مهم Git این است که Commitها را به عنوان **Snapshot** در نظر بگیریم، نه صرفاً مجموعه‌ای از Diffها.

Snapshot یعنی تصویری منطقی از وضعیت فایل‌های Track شده پروژه در یک لحظه مشخص.

برای مثال Commit اول ممکن است نشان‌دهنده وضعیت زیر باشد:

```text
Commit A

index.html → Version 1
style.css  → Version 1
main.js    → Version 1
```

Commit بعدی:

```text
Commit B

index.html → Version 2
style.css  → Version 1
main.js    → Version 1
```

Git لازم نیست فایل بدون تغییر را هر بار دوباره به صورت مستقل ذخیره کند؛ Objectهای بدون تغییر می‌توانند دوباره مورد استفاده قرار گیرند.

یک Commit در Git علاوه بر اشاره به Snapshot پروژه، اطلاعاتی مانند موارد زیر نیز دارد:

* Parent Commit
* Author
* Committer
* Timestamp
* Commit Message

بنابراین Commit را می‌توان به صورت مفهومی چنین در نظر گرفت:

```text
Commit
│
├── Snapshot / Tree
├── Parent Commit
├── Author
├── Date
└── Message
```

در نتیجه Commit فقط «تفاوت نسبت به Commit قبلی» نیست، بلکه به یک Snapshot مشخص از وضعیت پروژه اشاره می‌کند.

منبع پیشنهادی:

https://github.blog/open-source/git/commits-are-snapshots-not-diffs/

---

# سوال 7: تفاوت Local Repository و Remote Repository چیست؟

## Local Repository

Local Repository روی سیستم توسعه‌دهنده قرار دارد.

برای مثال:

```text
C:\Users\Haj Ali\...\static-frontend-lab
```

در Local Repository می‌توان بدون اتصال به اینترنت دستورهای مختلفی مانند موارد زیر را اجرا کرد:

```bash
git status
git add
git commit
git branch
git switch
git merge
git log
```

Commit ابتدا در Local Repository ایجاد می‌شود.

---

## Remote Repository

Remote Repository نسخه‌ای از Repository است که روی یک سیستم یا سرویس دیگر مانند GitHub قرار دارد.

در این پروژه Remote Repository روی GitHub قرار دارد:

```text
https://github.com/Ali-Najar/static-frontend-lab.git
```

Remote پیش‌فرض پروژه با نام:

```text
origin
```

شناخته می‌شود.

برای مشاهده Remoteها:

```bash
git remote -v
```

استفاده می‌شود.

---

## ارتباط Local و Remote

ارسال Commitهای Local به Remote:

```bash
git push
```

دریافت اطلاعات Remote:

```bash
git fetch
```

دریافت و Integrate کردن تغییرات:

```bash
git pull
```

مدل کلی:

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

بنابراین تفاوت اصلی این است که Local Repository محیط کاری و History محلی هر توسعه‌دهنده است، در حالی که Remote Repository برای اشتراک کد، همکاری میان توسعه‌دهندگان، Backup و هماهنگ‌سازی تغییرات استفاده می‌شود.

---
