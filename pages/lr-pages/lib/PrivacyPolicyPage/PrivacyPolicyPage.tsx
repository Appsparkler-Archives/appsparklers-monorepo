import { Link } from "@remix-run/react";

export const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col justify-center max-w-sm bg-base-100">
        <div className="navbar bg-primary text-primary-content border-8 border-base-100">
          <div className="flex-1">
            <Link to="/" className="text-xl btn btn-ghost">
              Lets Recite
            </Link>
          </div>
        </div>
        <div className="prose p-2">
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy is designed to help you understand how we
            collect, use, and safeguard your personal information, or rather,
            the lack thereof.
          </p>
          <h2>We Do Not Collect Your Data</h2>
          <p>
            We want you to feel comfortable and safe while using our app. To
            ensure your privacy and security, we want to make it clear that:
          </p>
          <ul>
            <li>We do not collect any personal information about you.</li>
            <li>We do not track your usage of the app.</li>
            <li>We do not analyze or store your behavior within the app.</li>
          </ul>
          <h2>We Do Not Use Your Information</h2>
          <p>
            Since we do not collect any information about you, it follows that
            we do not use your information in any way. Your privacy is of utmost
            importance to us, and we are committed to maintaining it.
          </p>
          <h2>We Do Not Share Your Information</h2>
          <p>
            We want to reassure you that your data is yours, and we have no
            intention of sharing it with anyone. We do not sell, trade, or share
            any information that could potentially identify you. Your trust in
            us is important, and we aim to protect your privacy at all times.
          </p>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please feel free to contact us at
            <a href="mailto:appsparkler@gmail.com">appsparkler@gmail.com</a>.
          </p>
          <p>
            Thank you for choosing our app in your day to day practice of
            Heartfulness. Your privacy and trust are of utmost importance to us.
          </p>
        </div>
        <div className="h-3 w-full bg-primary"></div>
      </div>
    </div>
  );
};
