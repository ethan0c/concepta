"use client";

import { PageShell } from "@/components/layout";
import { InternalHeroSection } from "@/components/sections";

export default function TermsAndConditions() {
  return (
    <PageShell headerTheme="light">
        <InternalHeroSection label="Legal" title="Terms and Conditions" />

        {/* Content */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="page-container">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-500 mb-8">Last updated: April 17, 2020</p>

              <div className="prose prose-gray max-w-none space-y-8">
                <p className="text-gray-700 leading-relaxed">
                  Please read these Terms and Conditions (&ldquo;Terms&rdquo;, &ldquo;Terms and Conditions&rdquo;) carefully before using this Website. Your access to and use of the Website is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  By using this Website, you represent and warrant that you have read, understand and are bound by these Terms of Use.
                </p>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Conduct</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In using Concepta Innovation Services Website, you agree that you will not:
                  </p>
                  <ol className="list-[lower-alpha] pl-6 space-y-3 text-gray-700">
                    <li>Delete, modify, hack or attempt to change or alter any of the Content on the Website;</li>
                    <li>Use any device, software or routine intended to damage or otherwise interfere with the proper functioning of the Website, servers or networks connected to the Website, or take any other action that interferes with other parties&apos; use of the Website;</li>
                    <li>Use any robot, spider or other automatic or manual device or process for the purpose of harvesting or compiling information on the Website or for purposes other than for a generally available search engine;</li>
                    <li>Use any Concepta Innovation Services names or marks without our prior written consent, including as metatags, search engine keywords, or hidden text;</li>
                    <li>Use any material or information, including images or photographs, which are made available through the Website in any manner that infringes any copyright, trademark, patent, trade secret or other proprietary right of any party; or</li>
                    <li>Upload files that contain viruses, Trojan horses, worms, time bombs, cancelbots, corrupted files, or any other similar software or programs that may damage the operation of another&apos;s computer or property of another.</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Concepta Disclaimer Statement</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Any mention of commercial products within Concepta Innovation Services web pages is for information only; it does not imply recommendation or endorsement by Concepta Innovation Services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our website, including all content, software, and functions available on or accessed through our website, is &ldquo;AS IS&rdquo;. To the fullest extent permitted by law, we and any subsidiaries and affiliates make no representations or warranties of any kind with regard to the content, software or functions accessed through our Site, for any products or services or links to third parties or for any security breach associated with the transmission of sensitive information via our Site or any linked site.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 uppercase text-sm">
                    We and any subsidiaries and affiliates disclaim any express or implied warranties, including, without limitation, non-infringement and data accuracy. We neither represent nor warrant that any content, software or the functions accessed through our site will be uninterrupted or error-free, that defects will be corrected, or that our site or the server that makes it available is free of viruses or other harmful components. We and any subsidiaries and affiliates disclaim liability for direct, indirect, punitive or special damages related to your use of the site.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You are solely responsible for determining the appropriateness of using and distributing the software and you assume all risks associated with its use, including but not limited to the risks and costs of program errors, compliance with applicable laws, damage to or loss of data, programs or equipment, and the unavailability or interruption of operation. This software is not intended to be used in any situation where a failure could cause risk of injury or damage to property. The software developed by Concepta is subject to copyright protection within the United States.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may change these terms from time to time. Please review these terms periodically for any updates or changes. Your continued use of our Website following the posting of any updates or changes to these terms constitutes your acceptance of such changes. If you object to any provision of these terms or any subsequent modifications to these terms, your only recourse is to immediately terminate use of the Website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

    </PageShell>
  );
}
