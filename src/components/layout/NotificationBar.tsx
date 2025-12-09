"use client";

interface NotificationBarProps {
  message?: string;
}

export default function NotificationBar({ 
  message = "🚀 New: Advanced AI-powered cybersecurity solutions now available for enterprise clients." 
}: NotificationBarProps) {
  return (
    <div
      className="fixed top-16 w-full z-40"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
      }}
    >
      <div className="header-content py-2">
        <p className="cisco-body-large text-center text-gray-700">{message}</p>
      </div>
    </div>
  );
}
