import { Members } from "../views/Members";
import { Books } from "../views/Books";

export default [
  {
    pathname: "/members",
    element: <Members />,
  },
  {
    pathname: "/books",
    element: <Books />,
  },
  {
    pathname: "/auth/login",
    element: <></>,
  },
  {
    pathname: "/*",
    element: <Members />,
  },
];
