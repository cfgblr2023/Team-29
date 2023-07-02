import { NavLink } from "react-router-dom";
import "./sidebar.css"

export const Sidebar = () => {
  return (
    <div className="cd-sidebar">
      <NavLink to={"/cd-dashboard"} className={"cd-sidebar-values"}>Home</NavLink>
      <NavLink to={"/cd-requests"} className={"cd-sidebar-values"}>Request Approvals</NavLink>
      <NavLink to={"/cd-feedback"} className={"cd-sidebar-values"}>Session Feedback</NavLink>
      <NavLink to={"/cd-mentee"} className={"cd-sidebar-values"}>Mentee List</NavLink>
    </div>
  );
};
