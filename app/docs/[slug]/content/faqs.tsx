export default function Faqs() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-secondary-db-100 mb-4">Frequently Asked Questions</h2>
      <p className="text-secondary-db-70 font-regular text-xl leading-relaxed">
        Find answers to the most common questions about Waysorted, its features, and how to make the most of the platform.
      </p>

      <h3 className="text-xl font-semibold text-secondary-db-100 mt-10 mb-4">General Questions</h3>
      <ul className="list-disc list-inside text-secondary-db-70 font-regular text-xl leading-relaxed">
        <li><span className="text-secondary-db-100">What is Waysorted?</span>: Waysorted unifies essential design tools into one place, so you spend less time switching between plugins and tabs. By reducing tool juggling, it helps teams work faster, stay focused, and avoid unnecessary costs from managing multiple tools.</li>
        <li><span className="text-secondary-db-100">How is Waysorted different?</span>: Unlike individual plugins or scattered tool sources, Waysorted brings essential tools together in one unified suite. This reduces compatibility issues, performance strain, scattered support, and the cost of managing multiple subscriptions, so teams work more smoothly and efficiently.</li>
        <li><span className="text-secondary-db-100">Which design tools are supported?</span>: Currently, Waysorted integrates with Figma, with plans to support additional platforms in the future.</li>
      </ul>

      <h3 className="text-xl font-semibold text-secondary-db-100 mt-10 mb-4">Features</h3>
      <ul className="list-disc list-inside text-secondary-db-70 font-regular text-xl leading-relaxed">
        <li><span className="text-secondary-db-100">What tools are included?</span>: Waysorted currently includes four core tools for color management, PDF export, file importing, and unit conversion. More tools are planned, including Way AI and additional utilities designed to further simplify and streamline creative workflows.</li>
      </ul>

      <h3 className="text-xl font-semibold text-secondary-db-100 mt-10 mb-4">Account and Billing</h3>
      <ul className="list-disc list-inside text-secondary-db-70 font-regular text-xl leading-relaxed">
        <li><span className="text-secondary-db-100">How do I reset my password?</span>: Click &quot;Forgot Password&quot; on the login page and follow the email instructions to reset your credentials.</li>
        <li><span className="text-secondary-db-100">Can I change my email address?</span>: Yes, navigate to Settings &gt; Profile to update your email. You&apos;ll need to verify the new address.</li>
        <li><span className="text-secondary-db-100">How are credits purchased?</span>: Credits can be purchased through the Credits section in your dashboard using various payment methods.</li>
      </ul>

      <h3 className="text-xl font-semibold text-secondary-db-100 mt-10 mb-4">Technical Support</h3>
      <ul className="list-disc list-inside text-secondary-db-70 font-regular text-xl leading-relaxed">
        <li><span className="text-secondary-db-100">The plugin isn&apos;t loading</span>: Try refreshing Figma, checking your internet connection, or reinstalling the plugin from the Figma Community.</li>
        <li><span className="text-secondary-db-100">My credits aren&apos;t showing</span>: Ensure you&apos;re logged into the correct account. If the issue persists, contact support.</li>
        <li><span className="text-secondary-db-100">Where can I get help?</span>: Visit our Support page or email info@waysorted.com for assistance.</li>
      </ul>

      <h3 className="text-xl font-semibold text-secondary-db-100 mt-10 mb-4">Getting Started</h3>
      <ul className="list-disc list-inside text-secondary-db-70 font-regular text-xl leading-relaxed">
        <li><span className="text-secondary-db-100">How do I start using Waysorted?</span>: Open the Waysorted Figma plugin to start using the tools available during the beta. All current features are accessible for testing and feedback. A credit-based system for premium features will be introduced in a future release.</li>
      </ul>
    </>
  );
}
