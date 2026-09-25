import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import Header from "@/components/Layout/Header/header";
import Footer from "@/components/Layout/Footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "YM Motors | Used Cars in Crawley",
  description:
    "Discover Used pre-owned vehicles with certified inspections, flexible financing, and trusted automotive services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const assistLoopAgentId =
    process.env.NEXT_PUBLIC_ASSISTLOOP_AGENT_ID;

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />

        <div className="flex-1">{children}</div>

        <Footer />

        {assistLoopAgentId && (
          <>
            <Script
              src="https://assistloop.ai/assistloop-widget.js"
              strategy="afterInteractive"
            />

            <Script
              id="assistloop-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function initAssistLoop() {
                    function startWidget() {
                      if (window.AssistLoopWidget) {
                        window.AssistLoopWidget.init({
                          agentId: "${assistLoopAgentId}"
                        });
                      } else {
                        setTimeout(startWidget, 100);
                      }
                    }

                    startWidget();
                  })();
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}