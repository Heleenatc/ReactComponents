export const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [{ label: "city", to: "/city" }],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children: [{
              label: "Check",
              to: "/check",
            },

            ],
          },
        ],
      },
    ],
  },
];

export default menus;
