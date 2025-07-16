# API 測試與管理儀表板

這是一個全端 Web 應用程式，旨在管理、測試和監控各種 API 的狀態。它提供了一個友善的使用者介面，讓您可以新增 API、管理其測試資料、執行測試並查看測試結果的歷史記錄。

後端是使用 .NET Core Web API 建置的，而前端則是一個使用 Angular Material 進行 UI 設計的 Angular 單頁應用程式 (SPA)。

## 功能特色

- **API 管理：** 為您想監控的 API 提供完整的 CRUD (建立、讀取、更新、刪除) 功能。
- **測試資料管理：** 為每個 API 管理不同的測試資料集 (例如 JSON、XML)。
- **一鍵測試：** 直接從儀表板輕鬆觸發對單個 API 的測試。
- **日誌記錄：** 每次測試執行都會被記錄下來，包括狀態碼和回應主體。
- **儀表板總覽：** 一個中央儀表板，可查看所有受管理 API 的整體健康狀況，並一目了然地看到最新的測試結果。

## 技術棧

- **後端：** .NET 8, ASP.NET Core Web API, Entity Framework Core (記憶體內資料庫)
- **前端：** Angular, TypeScript, Angular Material

## 開始使用

請按照以下說明在您的本機電腦上啟動並執行專案，以進行開發和測試。

### 必要條件

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js and npm](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli): `npm install -g @angular/cli`

### 安裝與執行

1.  **啟動後端 API：**
    開啟一個終端機，並從專案根目錄執行以下命令：
    ```bash
    dotnet run --project MesApiTooCheck
    ```
    後端 API 將會在 `http://localhost:5127` 上執行。您可以透過 `http://localhost:5127/swagger` 存取 Swagger UI 來查看 API 文件。

2.  **啟動前端應用程式：**
    開啟一個 *新的* 終端機，並從專案根目錄執行以下命令：
    ```bash
    cd MesApiTooCheck-UI
    npm install
    ng serve
    ```
    Angular 應用程式將會在 `http://localhost:4200` 上執行。

## API 文件

後端提供以下 RESTful 端點。您也可以透過 Swagger UI 進行互動式探索。

### API 項目 (`/api/ApiItems`)
- `GET /`: 獲取所有 API 項目。
- `GET /{id}`: 根據 ID 獲取特定的 API 項目。
- `POST /`: 建立一個新的 API 項目。
- `PUT /{id}`: 更新現有的 API 項目。
- `DELETE /{id}`: 刪除一個 API 項目。

### 測試資料 (`/api/TestData`)
- `GET /`: 獲取所有測試資料。
- `GET /{id}`: 根據 ID 獲取特定的測試資料。
- `POST /`: 建立新的測試資料。
- `PUT /{id}`: 更新現有的測試資料。
- `DELETE /{id}`: 刪除測試資料。

### 測試執行 (`/api/Test`)
- `POST /{id}`: 觸發對特定 API 項目 (根據其 ID) 的測試。可以在請求主體中選擇性地包含 `testDataId`。

### 測試日誌 (`/api/TestLogs`)
- `GET /`: 獲取所有測試日誌，按最新排序。
- `GET /{id}`: 根據 ID 獲取特定的測試日誌。