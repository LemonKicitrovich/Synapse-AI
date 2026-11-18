Ganti seluruh isi file README.md di VS Code dengan versi bahasa Inggris di bawah ini, simpan (Ctrl + S), lalu unggah ke repositori GitHub-mu:
# 🩺 SYNAPSE AI — System for Symptom Navigation & Predictive Evaluation

![Status](https://img.shields.io/badge/Status-Completed_MVP-10B981?style=flat-square)
![Program](https://img.shields.io/badge/Capstone-Hacktiv8_x_IBM_SkillsBuild-059669?style=flat-square)
![Built With](https://img.shields.io/badge/Built_With-IBM_Bob-0F172A?style=flat-square)
![Tech](https://img.shields.io/badge/Stack-HTML5_%7C_Tailwind_CSS_%7C_Vanilla_JS-38BDF8?style=flat-square)

**SYNAPSE AI** is a frontend-based self-health assistant web application designed to help users perform preliminary symptom screening and receive structured medical triage guidance quickly and clearly.

This project was developed as the **Final Project (Capstone Project)** for the **Hacktiv8 x IBM SkillsBuild (2026)** program using **IBM Bob**.

---

## 🎯 Background & Objective

Many people struggle to distinguish between minor symptoms that can be managed safely at home and serious medical conditions that require immediate professional care. Searching randomly on the internet often leads to unnecessary panic (*cyberchondria*) or delayed treatment.

**SYNAPSE AI** bridges this gap by:
* Translating everyday symptom descriptions into relevant preliminary health insights.
* Providing clear urgency classifications (*triage*) so users know their exact next steps.
* Offering safe first-aid recommendations alongside critical warning signs (*red flags*).

---

## ✨ Key Features

1. **140+ Medical Conditions Knowledge Base:**
   Covers common daily illnesses, respiratory/ENT issues, digestive disorders, tropical diseases, dermatology, ophthalmology, ergonomics/neurology, and emergency conditions. Every result displays both common and scientific terminology in the format **`Common Name (Scientific / Medical Name)`**.
2. **3-Tier Medical Triage Classification:**
   * 🟢 **Self-Care at Home (*Mandiri di Rumah*):** Mild symptoms manageable with home care and monitoring.
   * 🟡 **Consult a Doctor (*Konsultasi Dokter*):** Conditions requiring clinical evaluation and medical prescription.
   * 🔴 **Emergency / Go to ER (*Darurat / Segera ke IGD*):** High-risk symptoms requiring immediate emergency medical attention.
3. **Rule-Based Matching Engine & Input Guardrails:**
   * Uses **Word-Boundary Keyword Matching & Relevance Scoring** to calculate symptom match accuracy.
   * Built-in **Input Guardrails** filter out empty, overly short (`< 3` characters), or random gibberish inputs to prevent false-positive results.
4. **Interactive Header Logo Menu & System Controls:**
   * **About Creator:** Developer profile and Capstone program details.
   * **AI Architecture & Database:** Live dynamic counter of indexed medical conditions and transparent logic documentation.
   * **Emergency Medical Contacts (SOS):** Quick-access Indonesian emergency hotlines (`119`, `112`, `1500-567`).
   * **System Settings:** Real-time **Dark Mode** toggle, AI analysis simulation speed control, and history management.
5. **Local Checkup History (*LocalStorage*):**
   Stores valid symptom checks directly in the user's browser without external servers, keeping user data private and lightweight.

---

## 📁 Project Structure

Built with a clean, modular frontend architecture with zero external API dependencies:

```text
Synapse-AI/
├── index.html      # Main UI layout, interactive dropdown modals, and Tailwind configuration
├── style.css       # Custom animations, smooth transitions, and supporting styles
├── data.js         # Knowledge base of 140+ medical conditions (keywords, triage, first-aid, red flags)
├── script.js       # Symptom matching algorithm, input guardrails, Dark Mode, and LocalStorage logic
└── README.md       # Project documentation
```

---

## 🚀 Getting Started

Because **SYNAPSE AI** runs 100% client-side, no build tools or installations are required:

1. Clone or download this repository.
2. Ensure all files (`index.html`, `style.css`, `data.js`, `script.js`, `README.md`) remain in the same root directory.
3. Double-click **`index.html`** to launch it directly in any modern web browser (Chrome, Edge, Firefox, or Safari), or run it via **Live Server** in VS Code.

---

## 👨‍💻 Developer

* **Name:** Raihan Noviansyah
* **Role:** Frontend & AI System Developer
* **Program:** Capstone Project — Hacktiv8 x IBM SkillsBuild (2026)

---

## ⚠️ Medical Disclaimer

> **Important:** The information and triage evaluations provided by **SYNAPSE AI** are strictly for educational and preliminary guidance purposes only and **do not constitute a clinical medical diagnosis**. Always consult a licensed physician or qualified healthcare provider for accurate diagnosis and treatment.

