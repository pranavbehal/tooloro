import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AIChatUI() {
  const [message, setMessage] = useState("");
  const [contentHeight, setContentHeight] = useState("calc(100vh - 64px)");

  useEffect(() => {
    const updateContentHeight = () => {
      const navHeight = document.querySelector(".nav")?.offsetHeight || 0;
      setContentHeight(`calc(100vh - ${navHeight}px)`);
    };

    updateContentHeight();
    window.addEventListener("resize", updateContentHeight);

    return () => window.removeEventListener("resize", updateContentHeight);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-between bg-gray-100 p-5 overflow-hidden"
      style={{ height: contentHeight }}
    >
      <div className="flex-grow flex flex-col items-center justify-center w-full mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Chat with AI to help you find products - coming soon!
        </h2>
      </div>

      <div className="w-full max-w-2xl mx-auto space-y-4 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="h-auto py-3 px-4 justify-start text-left"
          >
            What are the best note-taking apps?
          </Button>
          <Button
            variant="outline"
            className="h-auto py-3 px-4 justify-start text-left"
          >
            I want to start a blog, what should I use?
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Write a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
