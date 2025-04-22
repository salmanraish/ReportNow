import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, ShieldAlert, Globe, AlertTriangle } from "lucide-react";

const crimeTrends = [
  {
    title: "Recent Crime Statistics",
    icon: <ShieldAlert className="text-red-500" size={30} />, 
    details: [
      "Cybercrime increased by 35% last year.",
      "Women safety issues rising in metro cities.",
      "Financial fraud cases up by 20%.",
    ],
  },
  {
    title: "Cybercrime & Online Fraud",
    icon: <Globe className="text-blue-500" size={30} />, 
    details: [
      "Common Scams: Phishing, Fake Job Offers, OTP Fraud.",
      "Use 2FA & avoid clicking unknown links.",
      "Report: Call 155260 or visit cybercrime.gov.in",
    ],
  },
  {
    title: "Emergency Crime Reporting",
    icon: <PhoneCall className="text-green-500" size={30} />, 
    details: [
      "Fastest way: Dial 112",
      "Women Helpline: 1091",
      "Free Legal Aid: 1800-999-999",
    ],
  },
  {
    title: "Fake News & Misinformation",
    icon: <AlertTriangle className="text-yellow-500" size={30} />, 
    details: [
      "Deepfake & AI-generated content increasing.",
      "Verify news via Alt News, Factly.",
      "Political propaganda manipulates social media.",
    ],
  },
];

const CrimeTrends = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 grid gap-4 grid-cols-1 md:grid-cols-2">
      {crimeTrends.map((trend, index) => (
        <Card key={index} className="shadow-lg p-4 rounded-2xl border">
          <CardContent>
            <div className="flex items-center gap-3 mb-3">
              {trend.icon}
              <h2 className="text-xl font-semibold">{trend.title}</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-600">
              {trend.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CrimeTrends;