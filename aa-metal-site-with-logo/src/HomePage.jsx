import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-200 text-gray-900 p-4">
      <header className="text-center py-12 bg-white shadow-md rounded-2xl mb-8">
        <h1 className="text-5xl font-bold text-blue-900">א.א פתרונות במתכת</h1>
        <p className="text-2xl mt-3 text-blue-700">מגשימים כל חלום באיכות בלתי מתפשרת</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="shadow-lg rounded-2xl bg-white overflow-hidden">
          <img src="/assets/laser.jpg" alt="חיתוך בלייזר" className="w-full h-48 object-cover" />
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">חיתוך וכיפוף בלייזר</h2>
            <p>חיתוך בלייזר מדויק לכל סוגי המתכת – כולל כיפוף, חריטה ויצירת קבצי DXF.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl bg-white overflow-hidden">
          <img src="/assets/pergola1.jpg" alt="פרגולת אלומיניום" className="w-full h-48 object-cover" />
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">פרגולות אלומיניום</h2>
            <p>פרגולות בהתאמה אישית כולל חשמליות, קונזוליות ויוקרתיות עם גימור גבוה במיוחד.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl bg-white overflow-hidden">
          <img src="/assets/pool1.jpg" alt="כיסוי בריכה" className="w-full h-48 object-cover" />
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">כיסוי בריכה הידראולי</h2>
            <p>כיסויים קשיחים, רצפה נפתחת והנעה חשמלית – בטיחות, יוקרה ונוחות במקום אחד.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl bg-white overflow-hidden">
          <img src="/assets/gate.jpg" alt="שערים וגדרות" className="w-full h-48 object-cover" />
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">שערים וגדרות</h2>
            <p>ייצור שערים וגדרות מברזל או אלומיניום, כולל חיתוך לייזר ודגמים בהתאמה אישית.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl bg-white overflow-hidden">
          <img src="/assets/cladding.jpg" alt="חיפוי קירות" className="w-full h-48 object-cover" />
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">חיפוי קירות דקורטיבי</h2>
            <p>חיפויי אלומיניום ומתכת בעיצוב נקי ומודרני לקירות פנים וחוץ.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl bg-white overflow-hidden">
          <img src="/assets/stairs.jpg" alt="מדרגות ומעקות" className="w-full h-48 object-cover" />
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">מדרגות ומעקות</h2>
            <p>מדרגות צפות, מעקות יוקרתיים ומבני מתכת בהתאמה מושלמת לפרויקט.</p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-16 py-6 text-sm text-gray-600 border-t border-gray-300">
        <p>© 2025 א.א פתרונות במתכת | טלפון: 050-7841159</p>
      </footer>
    </div>
  );
}
