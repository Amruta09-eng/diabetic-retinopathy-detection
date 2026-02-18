import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { DashboardLayout } from "./components/DashboardLayout";
import { PatientDashboard } from "./pages/PatientDashboard";
import { ScreeningFlow } from "./pages/ScreeningFlow";
import { ResultScreen } from "./pages/ResultScreen";
import { DoctorBooking } from "./pages/DoctorBooking";
import { MedicalVault } from "./pages/MedicalVault";
import { ProfilePage } from "./pages/ProfilePage";
import { ReportsPage } from "./pages/ReportsPage";
import { DoctorPanel } from "./pages/DoctorPanel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/signup",
    Component: SignupPage,
  },
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      {
        path: "dashboard",
        Component: PatientDashboard,
      },
      {
        path: "screening",
        Component: ScreeningFlow,
      },
      {
        path: "screening/result",
        Component: ResultScreen,
      },
      {
        path: "doctor-booking",
        Component: DoctorBooking,
      },
      {
        path: "medical-vault",
        Component: MedicalVault,
      },
      {
        path: "profile",
        Component: ProfilePage,
      },
      {
        path: "reports",
        Component: ReportsPage,
      },
      {
        path: "doctor-panel",
        Component: DoctorPanel,
      },
    ],
  },
]);
