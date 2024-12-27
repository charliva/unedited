import Link from "next/link";
import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">No Data Collection</h2>
            <p className="  mb-4">
              We want to make it absolutely clear that this website does not
              collect, store, or process any personal data from its visitors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">No Cookies</h2>
            <p className="  mb-4">
              This website does not use cookies or any other tracking
              mechanisms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              No Third-Party Services
            </h2>
            <p className="mb-4">
              We do not integrate with any third-party services that could
              potentially collect user data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className=" ">
              If you have any questions about this privacy policy, please feel
              free to reach out to{" "}
              <Link href="mailto:charlie@unedited.site" className="underline">
                charlie@unedited.site
              </Link>
            </p>
          </section>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
