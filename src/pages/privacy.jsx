import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          This privacy policy applies to the services provided by Grinler
          Technologies Private Limited (referred to as &quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;).
        </p>
        <p className="mb-4">
          We are committed to protecting the privacy of our users&apos; data and
          handle it responsibly. This policy outlines how we collect, use, and
          store personal information gathered through our app.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We may collect the following types of information from our users:
          <ul>
            <li>
              Personal information such as name, email address, and contact
              details provided during registration.
            </li>
            <li>
              Usage data and analytics, including log files and device
              information.
            </li>
            <li>
              User-generated content, such as comments, posts, and other
              interactions with our app.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the collected information for the following purposes:
          <ul>
            <li>
              To provide and improve our services, personalize user experience,
              and develop new features.
            </li>
            <li>
              To communicate with users, respond to inquiries, and send
              important notifications.
            </li>
            <li>
              To analyze user behavior, perform data analytics, and optimize our
              app&apos;s performance.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4">User-Generated Content</h2>
        <p className="mb-4">
          Our app may allow users to generate content. By submitting
          user-generated content, users agree to allow us to use and display
          this content within the app. Users retain ownership of their content,
          and we do not claim any rights to it.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We take data security seriously and implement appropriate measures to
          protect user information from unauthorized access, disclosure, or
          alteration. However, no data transmission over the internet or
          electronic storage can be guaranteed to be 100% secure. Therefore, we
          cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services to support our app, including
          analytics, advertising, and customer support tools. These third-party
          services may collect and process user information according to their
          own privacy policies. We recommend reviewing their policies to
          understand how they handle user data.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
        <p className="mb-4">
          Users have the following choices regarding their data:
          <ul>
            <li>
              Updating or correcting personal information in their user profile.
            </li>
            <li>
              Opting out of promotional communications and marketing emails.
            </li>
            <li>
              Deleting their account and associated data from our app upon
              request.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify users about significant changes via email or
          through a notice on our app&apos;s website.
        </p>

        <p className="text-sm text-gray-500 mt-4">
          Last updated: Sat, 22 Jul 2023
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
