const SwiftAmlPolicy = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto lg:px-4">
        <div className="bg-[#020E46] text-white p-4 lg:p-8 lg:mt-20 mt-16 rounded-xl mx-3 lg:mx-2 xl:mx-0">
          <h1 className="lg:text-4xl text-2xl font-semibold mb-2">SwiftEx Wallet</h1>
          <h1 className="lg:text-4xl text-2xl font-semibold mb-2">AML & Compliance Statement</h1>
          <p className="mb-8 mt-4 text-lg">Effective Date: 30 January 2026</p>
        </div>

        <div className="mx-4 lg:mx-2 xl:mx-0">
          <p className="mb-6 mt-12 text-xl font-semibold">
            This AML & Compliance Statement applies to the SwiftEx Wallet application (“SwiftEx”), operated by 3-102-938072 SOCIEDAD DE RESPONSABILIDAD LIMITADA, a company incorporated in Costa Rica.
          </p>

          <div className="py-3">
            <h2 className="text-xl font-bold mb-2 text-[#020E46]">1. Purpose</h2>
            <div className="text-md">
              SwiftEx Wallet is committed to preventing misuse of its software in connection with money laundering, terrorist financing, fraud, sanctions evasion, or other illicit activities. This statement outlines SwiftEx’s compliance approach in alignment with its non-custodial software model.
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-xl font-bold mb-2 text-[#020E46]">2. Business Model</h2>
            <div className="text-md">
              SwiftEx Wallet is a non-custodial wallet interface.
              <ul className="list-disc pl-5 mt-1 leading-tight space-y-1">
                <li>SwiftEx does not hold, custody, transmit, or control user funds.</li>
                <li>Users retain sole control of their private keys and digital assets.</li>
                <li>SwiftEx provides software tools that allow users to interact directly with blockchain networks.</li>
              </ul>
              Because SwiftEx does not act as a financial intermediary, its regulatory profile differs from custodial exchanges, brokers, or payment processors.
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-xl font-bold mb-2 text-[#020E46]">3. Reliance on Licensed Partners</h2>
            <div className="text-md">
              For features involving conversion between digital assets and fiat currency, SwiftEx integrates licensed third-party providers.
              <br />
              These partners are responsible for:
              <ul className="list-disc pl-5 mt-1 leading-tight space-y-1">
                <li>Customer identity verification (KYC/CDD)</li>
                <li>Transaction monitoring</li>
                <li>Sanctions screening</li>
                <li>Regulatory reporting obligations</li>
              </ul>
              SwiftEx does not independently conduct KYC, monitor transactions, or file regulatory reports.
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-xl font-bold mb-2 text-[#020E46]">4. Prohibited Use</h2>
            <div className="text-md">
              Users may not use SwiftEx Wallet for activities involving:
              <ul className="list-disc pl-5 mt-1 leading-tight space-y-1">
                <li>Money laundering</li>
                <li>Terrorist financing</li>
                <li>Sanctions evasion</li>
                <li>Fraud or scams</li>
                <li>Illegal goods or services</li>
                <li>Circumventing geographic restrictions</li>
              </ul>
              SwiftEx reserves the right to restrict access to its application interface in cases of suspected abuse.
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-xl font-bold mb-2 text-[#020E46]">5. Geographic & Sanctions Considerations</h2>
            <div className="text-md">
              SwiftEx may implement technical access controls aligned with applicable sanctions regimes and the compliance requirements of its third-party partners.
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-xl font-bold mb-2 text-[#020E46]">6. Partner Due Diligence</h2>
            <div className="text-md">
              Before integrating financial service providers, SwiftEx conducts due diligence including:
              <ul className="list-disc pl-5 mt-1 leading-tight space-y-1">
                <li>Verification of regulatory status</li>
                <li>Review of compliance controls</li>
                <li>Periodic reassessment of partners</li>
              </ul>
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-xl font-bold mb-2 text-[#020E46]">7. Compliance Governance</h2>
            <div className="text-md">
              SwiftEx maintains internal processes to support responsible operation of its platform, including:
              <ul className="list-disc pl-5 mt-1 leading-tight space-y-1">
                <li>Compliance awareness among relevant personnel</li>
                <li>Review of new integrations for regulatory impact</li>
                <li>Periodic policy review</li>
              </ul>
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-xl font-bold mb-2 text-[#020E46]">8. Reporting Concerns</h2>
            <div className="text-md">
              Suspected misuse of SwiftEx may be reported to:
              <br />
              Email: info@swiftexwallet.com
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-xl font-bold mb-2 text-[#020E46]">9. Policy Review</h2>
            <div className="text-md">
              This statement is reviewed periodically and updated as necessary to reflect regulatory developments and changes to the SwiftEx platform.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiftAmlPolicy;
