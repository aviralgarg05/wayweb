export default function Faqs() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-secondary-db-100 mb-4">Frequently Asked Questions</h2>
      <p className="text-secondary-db-70 font-regular text-xl leading-relaxed">
        Find answers to the most common questions about Waysorted, its features, and how to make the most of the platform.
      </p>

      <h3 className="text-xl font-semibold text-secondary-db-100 mt-10 mb-4">FAQ website</h3>
      <p className="text-secondary-db-70 font-regular text-xl leading-relaxed italic">
        Updated FAQ&apos;s website
      </p>

      <div className="mt-6 space-y-8">
        <div>
          <h4 className="text-lg font-semibold text-secondary-db-100 mb-2">FAQ 1</h4>
          <p className="text-secondary-db-70 font-regular text-xl leading-relaxed">
            Waysorted unifies essential design tools into one place, so you spend less time switching between plugins and tabs. By reducing tool juggling, it helps teams work faster, stay focused, and avoid unnecessary costs from managing multiple tools.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-db-100 mb-2">FAQ 2</h4>
          <p className="text-secondary-db-70 font-regular text-xl leading-relaxed">
            Unlike individual plugins or scattered tool sources, Waysorted brings essential tools together in one unified suite. This reduces compatibility issues, performance strain, scattered support, and the cost of managing multiple subscriptions, so teams work more smoothly and efficiently.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-db-100 mb-2">FAQ 4</h4>
          <p className="text-secondary-db-70 font-regular text-xl leading-relaxed">
            Waysorted currently includes four core tools for color management, PDF export, file importing, and unit conversion. More tools are planned, including Way AI and additional utilities designed to further simplify and streamline creative workflows.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-db-100 mb-2">FAQ 9</h4>
          <p className="text-secondary-db-70 font-regular text-xl leading-relaxed">
            Open the Waysorted Figma plugin to start using the tools available during the beta. All current features are accessible for testing and feedback. A credit-based system for premium features will be introduced in a future release.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-secondary-db-100 mt-10 mb-4">General FAQs</h3>
      <ul className="list-disc list-inside text-secondary-db-70 font-regular text-xl leading-relaxed mt-4 space-y-4">
        <li><span className="text-secondary-db-100 font-semibold">What is Waysorted?</span>: Waysorted is a unified Figma platform bundling plugins to simplify workflows, reduce fragmentation, and enhance productivity.</li>
        <li><span className="text-secondary-db-100 font-semibold">How do I create an account?</span>: Sign up at waysorted.com/signup with your email or Google account, verify, and set up your profile.</li>
        <li><span className="text-secondary-db-100 font-semibold">Is Waysorted free?</span>: Yes. During the beta phase, Waysorted is free to use, with access to all available tools and features. Pricing and plans will be introduced in future releases.</li>
        <li><span className="text-secondary-db-100 font-semibold">How does Waysorted integrate with Figma?</span>: Waysorted works as a Figma plugin that runs directly inside your Figma workspace, giving you access to bundled tools without requiring separate installations for each plugin.</li>
        <li><span className="text-secondary-db-100 font-semibold">What plugins are available at Beta launch?</span>: During the beta launch, Waysorted includes a set of core tools such as PDF Exporter, Paletteable, Unit Conversion, and Import Tool. Additional tools may be added or updated as the platform evolves.</li>
        <li><span className="text-secondary-db-100 font-semibold">Can I suggest new tools?</span>: Yes, through request a feature; submit ideas or plugins for community review.</li>
        <li><span className="text-secondary-db-100 font-semibold">Is Waysorted secure?</span>: Yes, with secure integrations, data processing under Privacy Policy, and no third-party sharing without consent.</li>
        <li><span className="text-secondary-db-100 font-semibold">What if I encounter issues?</span>: Check the troubleshooting section in the documentation or contact our support team at info@waysorted.com. Support is available 24/7.</li>
        <li><span className="text-secondary-db-100 font-semibold">How do I upgrade my subscription?</span>: From the &quot;Account Settings&quot; &gt; Subscription section, select a plan and complete payment.</li>
        <li><span className="text-secondary-db-100 font-semibold">Where can I learn more?</span>: Visit the Learning Hub for tutorials and advanced guides for each tool.</li>
      </ul>

      <p className="text-secondary-db-70 font-regular text-xl leading-relaxed mt-6">
        For additional FAQs, see the full Troubleshooting and Support section.
      </p>

      <p className="text-secondary-db-70 font-regular text-sm leading-relaxed mt-6">
        Last updated: December 2025. Need help? Contact info@waysorted.com or use Report a Bug from your dashboard.
      </p>
    </>
  );
}
