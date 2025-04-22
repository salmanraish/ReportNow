import React from "react";

const dashboardStyles = {
  user: {
    background: "#F1F3F4",
    textColor: "#333333",
    hoverColor: "#E3E7EB",
    borderColor: "#2980B9",
  },
  officer: {
    background: "#34495E",
    textColor: "#F5F5F5",
    hoverColor: "#3F5C77",
    borderColor: "#2980B9",
  },
  admin: {
    background: "#BDC3C7",
    textColor: "#2C3E50",
    hoverColor: "#AEB6BF",
    borderColor: "#2980B9",
  },
  analytics: {
    background: "#363D40",
    textColor: "#FFFFFF",
    hoverColor: "#424B4D",
    borderColor: "#2980B9",
  },
};

export default function UserRoles() {
  const roles = [
    {
      name: "USER",
      style: dashboardStyles.user,
      icon: "https://online.uktech.ac.in/account/images/attendation.jpg",
      alt: "User Icon",
      href: "https://uktech.ac.in/images/im_icon6.png",
    },
    {
      name: "OFFICER",
      style: dashboardStyles.officer,
      icon: "https://online.uktech.ac.in/account/images/faculty.png",
      alt: "Officer Icon",
      href: "https://online.uktech.ac.in/account/ums-page.html",
    },
    {
      name: "ADMIN",
      style: dashboardStyles.admin,
      icon: "https://giscloud.com/wp-content/themes/wp-boomerang/images/decision-maker-6.1.png?x44644",
      alt: "Admin Icon",
      href: "https://online.uktech.ac.in/account/ums-page.html",
    },
    {
      name: "ANALYTIC",
      style: dashboardStyles.analytics,
      icon: "https://cdn2.iconfinder.com/data/icons/analytics-soft-fill/60/Male-Analyst-analytical-data-analysis-man-512.png",
      alt: "Analytics Icon",
      href: "https://online.uktech.ac.in/account/ums-page.html",
    },
  ];

  return (
    <div className="flex items-center justify-center px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full md:max-w-8xl mt-10 mb-10 md:h-50">
        {roles.map((role, index) => (
          <a
            key={index}
            href={role.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center rounded-lg shadow-xl transition-transform transform hover:scale-105 p-6"
            style={{
              backgroundColor: role.style.background,
              color: role.style.textColor,
              borderRadius: "10px",
              transition: "background 0.3s, border 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = role.style.hoverColor;
              e.currentTarget.style.border = `1px solid ${role.style.borderColor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = role.style.background;
              e.currentTarget.style.border = "none";
            }}
          >
            <img
              src={role.icon}
              alt={role.alt}
              title={role.name}
              className="mb-4"
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            />
            <span className="text-lg font-semibold">{role.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}