# Ionic QR Code Scanner (React)

A simple and responsive QR code scanner app built with **Ionic React** and `react-qr-barcode-scanner`. This web-based scanner uses the device's **camera** to detect and read QR codes in real-time, directly from your browser.



## Features

*  Real-time QR code scanning via webcam
*  Browser-based — no native installation required
*  Clean and mobile-friendly UI with scan animation
*  Built using modern Ionic React components



## Tech Stack

* **Framework**: Ionic React + TypeScript
* **QR Scanner**: [`react-qr-barcode-scanner`](https://www.npmjs.com/package/react-qr-barcode-scanner)
* **UI Components**: `IonPage`, `IonContent`, `IonButton`, etc.



## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/dtoyoda10/ionic-react-qrcode-scanner.git
cd ionic-react-qrcode-scanner
npm install
npm start
```



## Usage

Run the development server:

```bash
ionic serve
```

Open the app in your browser at `http://localhost:8100`. Grant camera permission when prompted.



## Project Structure

```
src/
├── assets/
│   └── icons/             # Scanner icon
├── components/
│   └── Layout.tsx         # Reusable layout wrapper
├── pages/
│   └── scanner.page.tsx   # Main scanner page
├── App.tsx                # App entry and routing
└── main.tsx               # Bootstrap file
```



## Screenshots

<img src="https://github.com/user-attachments/assets/8123ec3d-0e78-47ce-828d-01a829dd667c" width="300" />



## Production Build

To generate a production build:

```bash
ionic build
```

The compiled app will be output to the `build/` directory. You can deploy it to any static hosting service like **Vercel**, **Netlify**, or **Firebase Hosting**.



## Browser Compatibility

* Works in all modern browsers that support webcam access
* ✅ Chrome (Desktop & Mobile)
* ✅ Safari (iOS)
* ⚠️ Firefox support may vary depending on device

> For **native app support**, consider using:
> [`@capacitor-community/barcode-scanner`](https://www.npmjs.com/package/@capacitor-community/barcode-scanner)



## License

This project is licensed under the [MIT License](./LICENSE).
