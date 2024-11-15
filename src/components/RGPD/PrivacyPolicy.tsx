import React from "react";
import Footer from "../Bars/FootBar";
import Navbar from "../Bars/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar isProductDetailPage={false} scroll={true} />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                1. Introduction
              </h2>
              <p className="text-gray-600 mb-2">
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your personal data when you use our services. We are
                committed to ensuring the privacy and security of your personal
                information in compliance with the General Data Protection
                Regulation (GDPR).
              </p>
              <p className="text-gray-600">
                By using our services, you consent to the data practices
                described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                2. Data Controller
              </h2>
              <p className="text-gray-600">
                Sunset Skate Club is the data controller responsible for your
                personal data. If you have any questions about this Privacy
                Policy, including any requests to exercise your legal rights,
                please contact us at [your contact email].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                3. Information We Collect
              </h2>
              <p className="text-gray-600 mb-2">
                We collect and process the following types of personal data:
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Identity Data: first name, last name, username</li>
                <li>Contact Data: email address, telephone number, address</li>
                <li>
                  Technical Data: IP address, browser type and version, time
                  zone setting, operating system
                </li>
                <li>
                  Usage Data: information about how you use our website and
                  services
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                4. How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-2">
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>
                  Where we need to perform the contract we are about to enter
                  into or have entered into with you
                </li>
                <li>
                  Where it is necessary for our legitimate interests and your
                  interests and fundamental rights do not override those
                  interests
                </li>
                <li>
                  Where we need to comply with a legal or regulatory obligation
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                5. Data Retention
              </h2>
              <p className="text-gray-600">
                We will only retain your personal data for as long as necessary
                to fulfil the purposes we collected it for, including for the
                purposes of satisfying any legal, accounting, or reporting
                requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                6. Your Rights Under GDPR
              </h2>
              <p className="text-gray-600 mb-2">
                Under certain circumstances, you have rights under data
                protection laws in relation to your personal data, including the
                right to:
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                7. Data Security
              </h2>
              <p className="text-gray-600">
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used or
                accessed in an unauthorised way, altered or disclosed. We also
                limit access to your personal data to those employees, agents,
                contractors and other third parties who have a business need to
                know.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                8. International Transfers
              </h2>
              <p className="text-gray-600">
                We may transfer your personal data to countries outside the
                European Economic Area (EEA). Whenever we transfer your personal
                data out of the EEA, we ensure a similar degree of protection is
                afforded to it by ensuring at least one of the following
                safeguards is implemented: [Describe your safeguards, e.g.,
                Standard Contractual Clauses, EU-US Privacy Shield, etc.]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                9. Changes to This Policy
              </h2>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date at the top of
                this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                10. Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Sunset Skate Club
                <br />
                Adress: 123 Skate Street, Boardville, SK 90210
                <br />
                Email: info@skateshop.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
