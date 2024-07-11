import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  RectangleStackIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  MapPinIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  WrenchScrewdriverIcon,
  DocumentMagnifyingGlassIcon,
  ShieldExclamationIcon,
  ServerStackIcon 
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications,  } from "@/pages/dashboard";
import DivisionManagement from "./pages/dashboard/divisionManagement";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};



export const routes = [
  {
    layout: "dashboard",
    title:"Dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      
    ],
  },

  {
    title: "Master",
    layout: "Master",
    pages: [
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Division Management",
        path: "/division-management",
        element: <DivisionManagement />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "User Management",
        path: "/user-management",
        element: <DivisionManagement />,
      },
      {
        icon: <DocumentCheckIcon {...icon} />,
        name: "checklist management",
        path: "/checklist-management",
        element: <DivisionManagement />,
      },
      {
        icon: <ShieldExclamationIcon {...icon} />,
        name: "safety alert management",
        path: "/safety-alert-management",
        element: <DivisionManagement />,
      },
      {
        icon: <MapPinIcon {...icon} />,
        name: "location management",
        path: "/location-management",
        element: <DivisionManagement />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "site management",
        path: "/site-management",
        element: <DivisionManagement />,
      },
     
    ],
  },

  

  {
        title: "Hazard Reporting",
        layout: "Hazard",
        pages: [
          {
            icon: <DocumentTextIcon {...icon} />,
            name: "hazard report",
            path: "/hazard-report",
            element: <DivisionManagement />,
          },
          {
            icon: <ClipboardDocumentListIcon {...icon} />,
            name: "hazard history",
            path: "/hazard-history",
            element: <DivisionManagement />,
          },
        ],
      },

      {
        title: "ToolBox",
        layout: "ToolBox",
        pages: [
          {
            icon: <WrenchScrewdriverIcon {...icon} />,
            name: "toolbox entry",
            path: "/toolbox-entry",
            element: <DivisionManagement />,
          },
          {
            icon: <DocumentMagnifyingGlassIcon {...icon} />,
            name: "toolbox history",
            path: "/toolbox-history",
            element: <DivisionManagement />,
          },
          
        ],
      },
    
  {
    // title: "auth pages",
    layout: "dashoard",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];
export default routes;
