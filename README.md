# RealEstateKayt – Vacation Property Management System

Programming project for managing, listing, and displaying vacation rentals.
Includes backend in C# (non-ASP.NET), frontend in Angular, and SQL schema/data for database.

---

## 🧩 Main Features
- ✅ Data model for properties (ID, address, price, availability)
- ✅ Internal property service in backend
- ✅ Angular component to list properties
- ✅ SQL schema + seed data
- ✅ Fully structured for GitHub view – no runtime required

---

## 📁 Project Structure

```
RealEstateKayt/
├── backend/               # C# console project (no ASP.NET)
│   ├── Models/            # Property entity
│   ├── Services/          # Property service logic
│   ├── Data/              # SQL schema and connection
│   ├── Program.cs         # Entry point
│   └── RealEstateKayt.csproj
│
├── frontend/              # Angular base structure
│   └── real-estate-client/
│       ├── src/app/...    # Components, services, models
│       ├── angular.json
│       ├── package.json
│       └── tsconfig.json
│
├── database/              # SQL schema and seed data
│   ├── schema.sql
│   └── seed.sql
│
├── global.json            # Forces dotnet SDK 10.0.100
├── .gitignore
└── README.md              # This file
```

---

## ⚙️ Requirements (if running locally)
- dotnet SDK 10.0.100
- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)

---

## 🚀 Optional Execution (for development only)

```bash
# Backend
cd backend
dotnet run

# Frontend
cd frontend/real-estate-client
npm install
ng serve
```
