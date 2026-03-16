"use client";

import { PageShell } from "@/components/layout";
import { InternalHeroSection } from "@/components/sections";

export default function PrivacyPolicy() {
  return (
    <PageShell headerTheme="light">
        <InternalHeroSection label="Legal" title="Privacy Policy" />

        {/* Content */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="page-container">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-500 mb-8">Last updated: September 1, 2021</p>

              <div className="prose prose-gray max-w-none space-y-8">
                <p className="text-gray-700 leading-relaxed">
                  We are committed to the privacy of our visitors. This privacy statement explains the personal data Concepta processes, how we process it and for what purposes.
                </p>

                <div>
                  <h2 className="text-2xl font-semibold concepta-section-heading mb-4">Cookies</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To better serve our visitors, we use technology to track new and returning visitors actions while on the website. These small files are commonly referred to as &ldquo;cookies.&rdquo; Our cookies do not contain any personally identifiable information. Our web measurement applications compare the behavior of new and returning visitors in the aggregate to help us identify workflows and trends and resolve common problems on our site.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Visitors may choose to remove or block the use of web measurement and customization technologies by changing the setting of your browser to block cookies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold concepta-section-heading mb-4">Personal Data</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Concepta collects data from you, through our interactions with you and through our services. When using our website forms or calling or emailing us, users are required to provide part or all the following information below, depending on the features or services they wish to access:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>First and last name</li>
                    <li>Email address</li>
                    <li>Company name, City, Country</li>
                    <li>Work phone</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Submitting voluntary information constitutes your consent to the use of the information for the stated purpose. When you click the &ldquo;Submit&rdquo; button on any of the Web forms found on our sites, you are indicating your voluntary consent to use of the information you submit for the purpose stated.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold concepta-section-heading mb-4">How We Use Personal Data</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Concepta uses the data we collect for variety of purposes, to provide the service or carry out the transactions you request and make informed business decisions. To provide products or support services to you, and to personalize our services and marketing efforts, which includes sending relevant communications and offers. We also use the data to analyze and improve our business and comply with all applicable legal requirements.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We do not share your personal information with third parties for their marketing purposes other than those specified in this Privacy Statement. However, with your consent we can share with third parties working on our behalf and in compliance with our Privacy Policy and security measures.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold concepta-section-heading mb-4">Protection of Personal Information</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The security of your personal information is important to us. We use reasonable administrative, logical, physical, and managerial measures to safeguard your personal information against such risks as loss or unauthorized access, destruction, use, modification, or disclosure of data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold concepta-section-heading mb-4">Links to Other Websites</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our Web site contains links to various other private, and or public organizations. Once you link to another site, you are then subject to the privacy policies of the new site. It is always a good idea to read the Privacy Policy of any site you visit.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold concepta-section-heading mb-4">Interaction with Children</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We do not knowingly collect or solicit personal information from anyone under the age of 13. In the event we learn that we have collected personal information from a child under the age of 13 without verification of parental consent, steps will be taken promptly to remove that information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold concepta-section-heading mb-4">Special Notices to California Residents</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you are a California resident, you are entitled to request information concerning any personal information you provide to us as part of an established business relationship for personal purposes that we disclose to third parties for their direct marketing purposes. We do not share such personal information with third parties for such purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold concepta-section-heading mb-4">Where Information is Maintained</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Data maintained by Concepta may be transferred to and maintained on servers or databases located outside your vicinity or country. Data collection, use, transfer, and disclosure of your personal data will be governed by the applicable laws in the United States.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold concepta-section-heading mb-4">Changes to this Privacy Statement</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify and update this Privacy Policy from time to time. When we make changes to this Privacy Statement, we will amend the revision date at the top of this page and such modified or amended Privacy Statement shall be effective as to you and your information as of that revision date. We encourage you to periodically review this Privacy Statement to view any updates.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold concepta-section-heading mb-4">Contacting Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions, please send us an email at{" "}
                    <a href="mailto:support@conceptainnovation.com" className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors">
                      support@conceptainnovation.com
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

    </PageShell>
  );
}
