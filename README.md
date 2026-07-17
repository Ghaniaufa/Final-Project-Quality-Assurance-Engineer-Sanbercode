# 🚀 OrangeHRM Automation Testing with Cypress

## 📖 Deskripsi

Project ini merupakan implementasi **Automation Testing** menggunakan **Cypress** pada website **OrangeHRM Demo**.

Automation dibuat menggunakan konsep **Page Object Model (POM)** untuk memisahkan element dan action sehingga kode lebih terstruktur, mudah dipelajari, dan mudah dipelihara. Selain itu, pengujian juga menggunakan **Cypress Intercept** untuk melakukan validasi request dan response API yang terjadi selama proses automation.

Website yang digunakan:

https://opensource-demo.orangehrmlive.com/

---

# 🎯 Tujuan Project

Project ini dibuat untuk:

- Mempelajari Automation Testing menggunakan Cypress.
- Mengimplementasikan konsep Page Object Model (POM).
- Menggunakan Cypress Intercept untuk validasi API.
- Membuat automation test yang lebih rapi dan reusable.
- Melatih pembuatan test case berdasarkan skenario pengujian.
- Sebagai tugas akhir Bootcamp QA Automation SanberCode.

---

# 🛠 Tech Stack

- Cypress
- JavaScript
- Node.js
- Visual Studio Code
- Git
- GitHub

---

# 📁 Struktur Folder

```
cypress
│
├── e2e
│   ├── Login
│   ├── Directory
│   └── Recruitment
│
├── fixtures
│   ├── loginData.json
│   ├── directoryData.json
│   └── recruitmentData.json
│
├── pages
│   ├── LoginPage.js
│   ├── Directory.js
│   └── Recruitment.js
│
└── support
```

---

# 🧩 Fitur Automation

## ✅ Login

Automation pada halaman Login menggunakan **POM** dan **Intercept**.

### Test Case

- TC001 Login dengan Username & Password Valid
- TC002 Login dengan Username Salah
- TC003 Login dengan Password Salah
- TC004 Login dengan Username dan Password Salah
- TC005 Login dengan Username Kosong
- TC006 Login dengan Password Kosong
- TC007 Login dengan Username & Password Kosong
- TC008 Login dengan Username dan Password Mengandung Spasi

---

## 📂 Directory

Automation pada menu Directory menggunakan **Page Object Model** dan **Intercept**.

### Test Case

- TC001 Open Directory Page
- TC002 Search Employee
- TC003 Reset Search
- TC004 Search Without Filter
- TC005 Verify Search Button
- TC006 Verify Reset Button
- TC007 Verify Directory Table
- TC008 Verify Directory URL

---

## 👨‍💼 Recruitment

Automation pada menu Recruitment menggunakan **Page Object Model** dan **Intercept**.

### Test Case

- TC001 Open Recruitment Page
- TC002 Search Without Filter
- TC003 Verify Reset Button
- TC004 Verify Candidate Name Input
- TC005 Verify Search Button
- TC006 Verify Reset Button
- TC007 Verify Recruitment Table
- TC008 Verify Recruitment URL + Intercept

---

# 🔄 Page Object Model

Project ini menerapkan konsep **Page Object Model (POM)** sehingga setiap halaman memiliki file tersendiri.

Contoh:

- LoginPage.js
- Directory.js
- Recruitment.js

Dengan konsep ini kode menjadi:

- Lebih rapi
- Mudah dipelihara
- Reusable
- Mengurangi duplikasi kode

---

# 🌐 Cypress Intercept

Project ini juga menggunakan **cy.intercept()** untuk melakukan validasi request API.

Contoh penggunaan:

- Login Validation
- Directory Employee API
- Recruitment Candidate API

Intercept digunakan untuk memastikan request berhasil dikirim serta response yang diterima sesuai dengan yang diharapkan.

---

# ✅ Assertion yang Digunakan

Beberapa assertion yang digunakan pada project ini antara lain:

- should('be.visible')
- should('exist')
- should('include')
- should('contain')
- should('have.value')
- should('be.enabled')
- should('eq')
- should('have.property')

---

# ▶️ Cara Menjalankan Project

## Install Dependency

```bash
npm install
```

## Install Cypress

```bash
npm install cypress --save-dev
```

## Membuka Cypress

```bash
npx cypress open
```

## Menjalankan Semua Test

```bash
npx cypress run
```

---

# 📊 Hasil Automation

Total automation yang dibuat:

| Feature | Total Test Case |
|----------|----------------:|
| Login | 8 |
| Directory | 8 |
| Recruitment | 8 |
| **Total** | **24 Test Case** |

---

# 📚 Pembelajaran

Melalui project ini saya mempelajari:

- Software Testing
- Functional Testing
- End-to-End Testing
- Cypress Automation
- Page Object Model (POM)
- Cypress Intercept
- Locator & Selector
- Assertion
- Reusable Function
- Test Case Automation
- Git & GitHub Workflow

---

# 👨‍💻 Author

**Ghani Aufa**

Fresh Graduate Information Technology

Universitas Muhammadiyah Yogyakarta

GitHub:
(https://github.com/Ghaniaufa)

LinkedIn:
(https://www.linkedin.com/in/ghaniaufa/)

---

⭐ Terima kasih telah mengunjungi repository ini. Kritik dan saran sangat terbuka untuk membantu pengembangan kemampuan saya di bidang Software Quality Assurance dan Automation Testing.
