# AgriWallet: A Subsidy & Credit Platform for Farmers

---

````md
# 🌾 AgriWallet: Digital Subsidy & Credit Platform for Ethiopian Farmers

**AgriWallet** leverages **Fayda Digital ID** to bring verified smallholder farmers into the formal financial ecosystem. It enables them to access government subsidies, microloans, and crop insurance through a secure digital wallet. Built during the **Fayda Hackathon**, this project aims to promote inclusive, transparent, and fraud-free agricultural financing in Ethiopia.

---

## 👥 Contributors

- Simret Markos  
- Tadele Getachew  
- Honelign Selamu  

---

## 🧠 Project Synopsis

### ❗ Problem Statement

Many smallholder farmers in Ethiopia face severe barriers when trying to access financial support, including:

- Lack of formal identification or banking access
- Fraud-prone and inefficient manual subsidy systems
- Exclusion from financial services such as loans and insurance

This leads to a cycle of poverty, low productivity, and financial vulnerability.

---

### 💡 Planned Solution

AgriWallet is a mobile and web platform that:

1. Uses **Fayda ID** for identity verification and Know Your Customer (KYC) compliance.
2. Creates a secure **digital wallet** for each verified farmer to receive:
   - Government or NGO-issued subsidies (e.g., seeds, fertilizers)
   - Microloans from MFIs or cooperative banks
   - Crop insurance payouts during disasters
3. Connects stakeholders—**government agencies**, **NGOs**, and **banks**—to **disburse**, **track**, and **monitor** support.
4. Ensures that credits can only be used at **approved agricultural merchants**, ensuring accountability and targeted usage.

---

### 🎯 Expected Outcomes

- Onboard **5,000+ farmers** in the first year
- Reduce **subsidy leakage by at least 40%**
- Improve **access to credit and insurance**
- Strengthen **financial inclusion** in rural areas

---

### 🛡️ Fayda’s Role

Fayda serves as the **core identity backbone** of AgriWallet:

- Ensures **only verified farmers** can access services
- Enables **secure KYC** for banks and microfinance institutions
- Guarantees **transparent, fraud-free** transactions for government and NGOs
- Uses **OIDC (OpenID Connect)** for secure authentication and user profile access

---

## 🔁 Use Case Flow

```mermaid
flowchart TD
    Farmer([Farmer]) -->|Registers| App[AgriWallet App]
    App -->|Verify Identity| Fayda[Fayda OIDC Verification]
    Gov[Government/NGO] -->|Credits Wallet| App
    Farmer -->|Receives Subsidy Credits| App
    Farmer -->|Buys Seeds/Fertilizer| Merchant[Approved Merchants]
    Bank[Cooperative Banks/MFIs] -->|Tracks & Issues Loans| App
````

---

## 🧰 Tech Stack

| Layer    | Technology                                             |
| -------- | ------------------------------------------------------ |
| Frontend | React (Web), Flutter (Mobile)                          |
| Backend  | Node.js + Express                                      |
| Database | MongoDB / PostgreSQL                                   |
| Identity | Fayda Digital ID (OIDC)                                |
| APIs     | RESTful API architecture                               |
| Hosting  | Vercel / Netlify (Frontend), Render / Heroku (Backend) |

---

## 🚀 MVP Features

* Fayda-based **farmer registration**
* **Digital wallet** dashboard (view credits, transactions)
* **Subsidy disbursement** by government or NGO dashboards
* **Merchant interface** for scanning & accepting wallet payments
* Basic **loan application** and status tracking by MFIs/coops

---

## 👤 User Roles

* **Farmer**: Registers, views wallet, receives subsidies/loans
* **Government/NGO**: Verifies farmers, disburses funds, monitors usage
* **Merchant**: Accepts credits from farmers, verifies transactions
* **Bank/MFI**: Reviews verified profiles, issues & monitors loans

---

## 🧑‍💻 Team Responsibilities

* **Simret Markos** – Frontend & UI/UX design
* **Tadele Getachew** – Business logic, use case research & pitch preparation
* **Honelign Selamu** – Backend development & Fayda OIDC integration  

---

## 🌱 Future Vision

* Integrate **weather-indexed crop insurance APIs**
* Add **USSD interface** for farmers without smartphones
* Link with **Ethiopian financial institutions** for broader impact
* Add **analytics dashboards** for governments and NGOs
* Provide **financial literacy content** in local languages

---

## 📬 Contact

For inquiries or collaboration:

* Email: honelignselamu2@gmail.com
---

> **AgriWallet** was created during the Fayda Hackathon 2025 to build a more inclusive and digitally empowered agricultural finance system in Ethiopia.

```

---

