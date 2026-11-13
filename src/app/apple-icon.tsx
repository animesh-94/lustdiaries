import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          background:
            "linear-gradient(135deg, #7B22A3 0%, #5D177E 55%, #3C0D52 100%)",
        }}
      >
        <svg
          viewBox="0 0 40 36"
          width="112"
          height="100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 32.5C20 32.5 5.5 23.2 5.5 12.6C5.5 7.7 9.3 4 14 4C16.8 4 19.2 5.4 20.6 7.5C22 5.4 24.4 4 27.2 4C31.9 4 35.7 7.7 35.7 12.6C35.7 23.2 20 32.5 20 32.5Z"
            stroke="#FFFFFF"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 26.8C20 26.8 11.2 20.4 11.2 13.7C11.2 10.9 13.4 8.8 16.1 8.8C17.8 8.8 19.3 9.7 20 11C20.7 9.7 22.2 8.8 23.9 8.8C26.6 8.8 28.8 10.9 28.8 13.7C28.8 20.4 20 26.8 20 26.8Z"
            stroke="#EBD6F8"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}

