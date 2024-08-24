import { Routes, Route } from "react-router-dom";
import {Home, Features, Pricing, FAQ, Contact, LoginPage, SignUpPage, ActivationPage, SubscriptionPage, PurchasePage, CCInfoPage, EmailSetUp, EmailSuccess, DashboardHome, ProfilePage, Settings, Templates, Inbox} from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/subscription" element={<SubscriptionPage/>} />
        <Route path="/activation" element={<ActivationPage/>} />
        <Route path="/purchase" element={<PurchasePage/>} />
        <Route path="/ccinfo" element={<CCInfoPage/>} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="/email-setup" element={<EmailSetUp/>} />
        <Route path="/email-success" element={<EmailSuccess/>} />

        <Route path="/dashboard-home" element={<DashboardHome/>} />
        <Route path="/profile-page" element={<ProfilePage/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/templates" element={<Templates/>} />
        <Route path="/inbox" element={<Inbox/>} />

    </Routes>
  )
}
