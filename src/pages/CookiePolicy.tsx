import { FC } from 'react';

const CookiePolicy: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      
      <p className="text-sm text-gray-500 italic mb-8">
        Last Updated: March 14, 2025
      </p>

      <h2 className="text-xl font-semibold mb-3">What Are Cookies</h2>
      <p className="text-gray-600 mb-8">
        Cookies are small text files placed on your device when you visit a website. They store information such as your preferences to improve your browsing experience.
      </p>

      <h2 className="text-xl font-semibold mb-3">How We Use Cookies</h2>
      <p className="text-gray-600 mb-3">
        We use cookies to tailor your experience, analyze website usage, and improve our services. This helps in remembering your settings and ensuring a smoother navigation experience.
      </p>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
        <li>Remembering preferences and settings</li>
        <li>Analyzing website performance</li>
        <li>Improving functionality</li>
        <li>Maintaining language and accessibility preferences</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Types of Cookies We Use</h2>
      <h3 className="font-medium mb-2">Essential Cookies</h3>
      <p className="text-gray-600 mb-4">
        These cookies are crucial for website operation, enabling basic functions such as page navigation and secure access.
      </p>
      
      <h3 className="font-medium mb-2">Preference Cookies</h3>
      <p className="text-gray-600 mb-4">
        These cookies remember your choices, offering a personalized experience.
      </p>
      
      <h3 className="font-medium mb-2">Analytics Cookies</h3>
      <p className="text-gray-600 mb-8">
        These cookies anonymously collect data to help us understand visitor interactions and enhance our website.
      </p>

      <h2 className="text-xl font-semibold mb-3">Managing Cookies</h2>
      <p className="text-gray-600 mb-8">
        Most browsers allow you to manage cookie preferences through their settings. You can disable cookies, block them, or receive alerts when cookies are sent. Note that disabling cookies may affect site functionality.
      </p>

      <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
      <p className="text-gray-600 mb-8">
        You have the right to request details about the data collected via cookies and to manage or delete your personal information. For further assistance regarding your data privacy, please reach out to our support team.
      </p>

      <h2 className="text-xl font-semibold mb-3">Changes to Our Cookie Policy</h2>
      <p className="text-gray-600">
        We reserve the right to update our cookie policy periodically. Significant changes will be communicated via email or through a prominent notice on our website.
      </p>
    </div>
  );
};

export default CookiePolicy;
