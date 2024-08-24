# Custom Email Platform

## Overview

This repository contains the frontend code for a custom email platform that allows users to create email accounts using their existing domain. The platform is designed to be user-friendly and automated, providing an easy setup process for users with little to no technical experience. It includes a subscription model and offers white label capabilities for agencies.

## Features

- **User Registration and Login:**
  - Sign up via paid subscription or activation code.
  - Integration with Stripe and PayPal for payment processing.
  - 7-day free trial for subscription plans.

- **Dashboard:**
  - Manage emails (Inbox, Sent, Drafts, Templates).
  - User profile customization.
  - Email composition with AI Writing Assistant and Template Builder.

- **Email Composition Interface:**
  - Drag-and-drop email template builder.
  - AI-generated suggestions for email content.

- **Settings:**
  - Account and subscription management.
  - White label customization for agencies.
  - User branding options (name, logo, color scheme).

- **White Label Agency Customization:**
  - Platform branding customization (name, color scheme, logo).
  - User branding instructions and customization options.

## Tech Stack

- **Frontend:** React / Angular / Vue.js (Choose the appropriate one)
- **Backend:** Node.js / Ruby on Rails / Django (Integration done by the backend team)
- **Database:** MySQL / PostgreSQL / MongoDB (Handled by the backend team)
- **APIs Integrated:**
  - Whois API
  - Entri Connect API
  - Stripe API
  - PayPal API
  - OpenAI API

## Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/custom-email-platform.git
    cd custom-email-platform
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add the necessary environment variables:

    ```plaintext
    REACT_APP_API_URL=<Backend API URL>
    REACT_APP_STRIPE_PUBLIC_KEY=<Your Stripe Public Key>
    REACT_APP_PAYPAL_CLIENT_ID=<Your PayPal Client ID>
    REACT_APP_OPENAI_API_KEY=<Your OpenAI API Key>
    ```

4. **Run the application:**

    ```bash
    npm start
    # or
    yarn start
    ```

5. **Build for production:**

    ```bash
    npm run build
    # or
    yarn build
    ```

## White Label Customization

For agencies looking to white-label this platform, follow these steps:

1. **Navigate to the settings page:**
   Customize the platform name, color scheme, and logo.

2. **User Branding:**
   Agencies can provide users with options to customize their branding, including business name, logo, and color scheme.


## Acknowledgments

- [Whois API](https://www.whoisxmlapi.com/)
- [Entri Connect API](https://www.entri.io/)
- [Stripe](https://stripe.com/)
- [PayPal](https://www.paypal.com/)
- [OpenAI](https://openai.com/)

---

