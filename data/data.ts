export interface Article {
  id: string;
  title: string;
  content: string;
  headerImage?: string;
  modifiedDate?: string;
  keywords?: string[];
  relatedArticles?: string[];
  path: string;
}

export interface Subtopic {
  id: string;
  name: string;
  articles: Article[];
}

export interface Category {
  id: string;
  name: string;
  path: string;
  description?: string;
  subtopics: Subtopic[];
}

const allArticlesMap = new Map<string, Article>();

export const categories: Category[] = [
  {
    id: 'account-setup',
    name: 'Account Setup',
    path: '/account-setup',
    description:
      'Learn how to create and set up your <strong>SwiftEx account</strong> to start your <strong>crypto journey</strong>.',
    subtopics: [
      {
        id: 'account-creation',
        name: 'Account Creation',
        articles: [
          {
            id: 'create-swiftex-account',
            title: 'Creating an Account in SwiftEx',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p>You can get started with the <strong>SwiftEx mobile app</strong> in just a few simple steps. Available for both <strong>Android</strong> and <strong>iOS</strong>, the app provides a <strong>secure</strong> and <strong>intuitive interface</strong> to manage your <strong>crypto journey</strong> from day one.</p>
              <h3>SwiftEx Mobile App Setup Guide</h3>
              <ol>
                <li>
                  <strong>Download the App</strong><br>
                  Go to the <strong>Google Play Store</strong> (Android) or <strong>Apple App Store</strong> (iOS). Search for “<strong>SwiftEx</strong>” and download the official application to your device.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958491/wcsqfz37oiobpz8f0jlt_nhwuir.avif">
                </li>
                <li>
                  <strong>Launch the App and Set a PIN</strong><br>
                  Open the app after installation. You’ll be prompted to create a <strong>6-digit PIN code</strong> that will be used to:<br>
                  • <strong>Access</strong> the app securely<br>
                  • <strong>Authorize</strong> wallet actions and <strong>transactions</strong>.<br>
                  Make sure your <strong>PIN</strong> is easy to remember but difficult for others to guess.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958486/my1c58tluivhuf7xgi6r_jip2se.avif">
                </li>
                <li>
                  <strong>Confirm Your PIN</strong><br>
                  To complete the <strong>account setup</strong>, you’ll be asked to re-enter the same <strong>6-digit PIN</strong> you set earlier. This ensures your <strong>PIN</strong> is correctly stored and confirmed for future use.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958486/gjxtkwee8efda8gs6xep_xka4br.avif">
                </li>
                <li>
                  <strong>Choose a Wallet Setup Option</strong><br>
                  Once your <strong>PIN</strong> is set, you'll be given three choices for <strong>wallet setup</strong>:<br>
                  <ol>
                    <li>
                      <strong>Create a New Wallet</strong><br>
                      Ideal for first-time users looking to generate a fresh <strong>wallet</strong>.<br>
                      <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770300232/image_12_dd5ffm.webp" alt="Create a New Wallet">
                    </li>
                    <li>
                      <strong>Import an Existing Wallet</strong><br>
                      If you already have a <strong>wallet</strong> (using <strong>private key</strong>, <strong>JSON</strong>, or <strong>recovery phrase</strong>), you can bring it into <strong>SwiftEx</strong>.<br>
                      <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770300232/image_14_a76i79.webp" alt="Import an Existing Wallet">
                    </li>
                  </ol>
                  Choose the option that fits your current needs.<br>
                </li>
                <li>
                  <strong>Enable Biometric Security (Optional)</strong><br>
                  For enhanced <strong>security</strong> and ease of access, enable <strong>Face ID</strong> or <strong>Fingerprint Unlock</strong>, depending on your device’s capabilities. This step is optional but highly recommended for faster and more <strong>secure access</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958490/jg0p04zfjxufrfwoz1hm_q8eqop.avif" alt="Step 5: Enable Biometric Security">
                </li>
              </ol>
<p>
  Once this <strong>setup</strong> is complete, you’re ready to start exploring the
  <strong> SwiftEx ecosystem</strong> — whether it's managing <strong>wallets</strong>,
  <strong> bridging</strong>, or <strong>swapping assets</strong>.
</p>
            `,
            keywords: ['account', 'create', 'setup', 'swiftex', 'onboarding'],
            relatedArticles: [
              'wallet-management-create',
              'wallet-management-import',
              'wallet-management-switch',
            ],
            path: '/create-swiftex-account',
          },
        ],
      },
    ],
  },
  {
    id: 'wallet-management',
    name: 'Wallet Management',
    path: '/wallet-management',
    description:
      'Manage your <strong>crypto wallets</strong>, including creating, importing, and switching between them in <strong>SwiftEx</strong>.',
    subtopics: [
      {
        id: 'create-wallet',
        name: 'Create Wallet',
        articles: [
          {
            id: 'wallet-management-create',
            title: 'Creating a Multichain Wallet in SwiftEx',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p><strong>SwiftEx</strong> allows you to create a <strong>multichain wallet</strong> efficiently to manage your <strong>crypto assets</strong> across multiple <strong>blockchains</strong>.</p>
              <ol>
                <li>
                  <strong>Go to Wallet Tab</strong><br>
                  Go to the <strong>Wallet tab</strong> and tap ‘<strong>Create Wallet</strong>’.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770301231/1000136724_lwdu3h.webp" alt="Step 1: Create Wallet">
                </li>
                <li>
                  <strong>Name Your Wallet</strong><br>
                  Name your <strong>wallet</strong> for easy identification.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752066056/createwallet2_krtbe5.avif" alt="Step 2: Name Wallet">
                </li>
                <li>
                  <strong>Receive Recovery Phrase</strong><br>
                  You’ll now receive a <strong>Recovery Phrase</strong> (also called a <strong>mnemonic</strong> or <strong>seed phrase</strong>). Write this phrase down and store it in a <strong>secure location</strong>. It is important to store the <strong>Recovery Phrase</strong> securely since anyone with access to it can gain full control over your <strong>funds</strong> and <strong>account</strong>.<br>
                  • Do not share it with anyone, not even with <strong>SwiftEx support</strong>.<br>
                  • Use a <strong>password manager</strong> or physically write it down and store it in a <strong>safe place</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752066056/createwallet3_folnxl.avif" alt="Step 3: Recovery Phrase">
                </li>
                <li>
                  <strong>Confirm Recovery Phrase</strong><br>
                  Confirm the <strong>Recovery Phrase</strong> in the correct order to verify you’ve saved it properly.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752066055/createwallet4_u5cv0a.avif" alt="Step 4: Confirm Recovery Phrase">
                </li>
              </ol>
              <h3>Security Reminder</h3>
              <p>Anyone who gains access to your <strong>private key</strong> or <strong>recovery phrase</strong> can take full control of your <strong>wallet</strong> and <strong>funds</strong>. <strong>SwiftEx</strong> does not store or have access to these keys. Be sure to:<br>
              • Never share your keys with anyone, not even <strong>SwiftEx support</strong>.<br>
              • Avoid saving them in plain text on your phone or <strong>cloud storage</strong>.<br>
              • Use a <strong>password manager</strong> or write them down and store them in a <strong>secure physical location</strong>.</p>
            `,
            keywords: ['wallet', 'multichain', 'create', 'recovery phrase', 'swiftex'],
            relatedArticles: [
              'create-swiftex-account',
              'wallet-management-import',
              'wallet-management-switch',
            ],
            path: '/wallet-management-create',
          },
        ],
      },
      {
        id: 'import-wallet',
        name: 'Import Wallet',
        articles: [
          {
            id: 'wallet-management-import',
            title: 'Importing an Existing Wallet into SwiftEx',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p>Already using another <strong>crypto wallet</strong>? <strong>SwiftEx</strong> makes it easy to import your existing <strong>wallet</strong> using a <strong>Private Key</strong>, <strong>JSON file</strong>, or <strong>Recovery Phrase</strong> giving you full access to your <strong>assets</strong> within a <strong>secure</strong>, <strong>intuitive interface</strong>. Whether you’re switching platforms or accessing an older <strong>wallet</strong>, importing is seamless and secure.</p>
              <ol>
                <li>
                  <strong>Navigate to the Wallet Tab</strong><br>
                  Open the <strong>SwiftEx app</strong>. Tap the ‘<strong>Wallet</strong>’ icon from the bottom navigation. Select the ‘<strong>Import Wallet</strong>’ option. After this, select one of the listed supported <strong>wallet types</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770300037/1000136720_xcrueg.webp" alt="Step 1: Navigate to Import">
                </li>
                <li>
                  <strong>Name Your Wallet</strong><br>
                  Give your imported <strong>wallet</strong> a unique name for easy identification. This name is only visible to you and can be changed later.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752068253/importwallet2_lmc9mg.avif" alt="Step 2: Name Imported Wallet">
                </li>
                <li>
                  <strong>Choose Import Method</strong><br>
                  <strong>SwiftEx</strong> supports three methods to import an existing <strong>wallet</strong>. Select the one that matches your current setup:<br>
                  • <strong>Private Key</strong> – Enter your wallet’s <strong>private key</strong> directly.<br>
                  • <strong>JSON Key File</strong> – Upload the key file downloaded from a previous wallet platform (e.g., <strong>MetaMask</strong>, <strong>MyEtherWallet</strong>).<br>
                  • <strong>Recovery Phrase</strong> / <strong>Mnemonic</strong> – Enter the 12 or 24-word phrase used to generate your <strong>wallet</strong>.<br>
                  Tip: Use only one method per import. The option you select should match how you backed up your original <strong>wallet</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752068253/importwallet3_hvhyuv.avif" alt="Step 3: Choose Import Method">
                </li>
                <li>
                  <strong>Paste or Upload Your Key</strong><br>
                  • <strong>Private Key</strong>: Paste the full <strong>private key</strong> string.<br>
                  • <strong>JSON File</strong>: Upload the file directly from your device.<br>
                  • <strong>Recovery Phrase</strong>: Enter each word in the correct order, ensuring there are no typos or extra spaces.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752068253/importwallet4_dovnno.avif" alt="Step 4: Enter Key">
                </li>
                <li>
                  <strong>Complete the Import</strong><br>
                  Tap ‘<strong>Import</strong>’ to finish the process. Your <strong>wallet</strong> will now appear in your <strong>Choose Wallet</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752068253/importwallet5_wtrosl.avif" alt="Step 5: Complete Import">
                </li>
              </ol>
              <p>You can now:<br>
              • View balances across supported <strong>chains</strong>.<br>
              • <strong>Send</strong>, <strong>receive</strong>, or <strong>swap tokens</strong>.<br>
              • Manage <strong>assets</strong> with full functionality.</p>
              <h3>Security Reminder</h3>
              <p>Anyone who gains access to your <strong>private key</strong> or <strong>recovery phrase</strong> can take full control of your <strong>wallet</strong> and <strong>funds</strong>. <strong>SwiftEx</strong> does not store or have access to these keys. Be sure to:<br>
              • Never share your keys with anyone, not even <strong>SwiftEx support</strong>.<br>
              • Avoid saving them in plain text on your phone or <strong>cloud storage</strong>.<br>
              • Use a <strong>password manager</strong> or write them down and store them in a <strong>secure physical location</strong>.</p>
            `,
            keywords: ['wallet', 'import', 'recovery phrase', 'swiftex'],
            relatedArticles: [
              'create-swiftex-account',
              'wallet-management-create',
              'wallet-management-switch',
            ],
            path: '/wallet-management-import',
          },
        ],
      },
      {
        id: 'switch-wallets',
        name: 'Switch Between Wallets',
        articles: [
          {
            id: 'wallet-management-switch',
            title: 'Switching Between Wallets in SwiftEx',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p>Managing multiple <strong>wallets</strong>? No problem. Use the ‘<strong>Choose Wallet</strong>’ option from the <strong>Wallet tab</strong> to quickly switch between your imported and newly created <strong>wallets</strong>. <strong>SwiftEx</strong> supports <strong>multi-wallet management</strong> so you can keep your <strong>assets</strong> organized across <strong>networks</strong>.</p>
              <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770300233/image_15_jn8ztw.webp" alt="Switch Between Wallets">
            `,
            keywords: ['wallet', 'switch', 'multichain', 'swiftex'],
            relatedArticles: [
              'create-swiftex-account',
              'wallet-management-create',
              'wallet-management-import',
            ],
            path: '/wallet-management-switch',
          },
        ],
      },
    ],
  },
  {
    id: 'navigation',
    name: 'Navigation',
    path: '/navigation',
    description:
      'Understand how to navigate the <strong>SwiftEx app</strong>’s <strong>home screen</strong> for quick access to key <strong>features</strong>.',
    subtopics: [
      {
        id: 'home-screen',
        name: 'Home Screen Navigation',
        articles: [
          {
            id: 'home-screen-navigation',
            title: 'Home Screen Navigation in SwiftEx',
            headerImage:
              'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958594/qmlyjl5r2wmg1jlby0vz_lcbkiz.avif',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
            <p>The <strong>SwiftEx home screen</strong> is designed to offer streamlined access to the app’s most essential <strong>features</strong>, all from a single, convenient location. This allows you to manage your <strong>digital assets</strong> efficiently whether you're a beginner or an experienced user.</p>
            <h3>What You Can Access from the Home Screen</h3>
            <p>At the top of the screen, you'll find quick links to the following actions:</p>
            <ul>
              <li>
                <strong>Send</strong>: Transfer <strong>tokens</strong> securely to any other <strong>wallet address</strong>.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770277869/send1_twncf0.webp" alt="Step 1: Send">
              </li>
                  <li>
                <strong>Receive</strong>: Accept <strong>cryptocurrencies</strong> into your <strong>wallet</strong> using your <strong>public address</strong> or <strong>QR code</strong>.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770277872/recive1_cz0hwo.webp" alt="Step 2: Receive">
              </li>
              <li>
                <strong>Swap</strong>: Instantly exchange one <strong>cryptocurrency</strong> for another using supported liquidity routes.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770278571/image_3_urixv8.webp" alt="Step 3: Swap">
              </li>
              <li>
                <strong>Buy</strong>: Purchase <strong>crypto</strong> using <strong>fiat</strong> through <strong>licensed and trusted third-party providers</strong>, supporting options such as <strong>card payments</strong> and <strong>bank transfers</strong>.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770278570/image_1_uohhib.webp" alt="Step 4: Buy">
              </li>
            </ul>
            <p>Each of these options is clearly displayed for easy <strong>navigation</strong>, ensuring that even complex <strong>asset operations</strong> feel intuitive. Whether you’re transferring funds, performing a <strong>swap</strong>, or purchasing crypto via a trusted partner, everything starts from the <strong>home screen</strong>.</p>
          `,
            keywords: ['home screen', 'navigation', 'swiftex', 'crypto'],
            relatedArticles: [
              'send-crypto',
              'receive-crypto',
              'swapping-assets',
              'deposit-withdraw',
            ],
            path: '/home-screen-navigation',
          },
        ],
      },
    ],
  },
  {
    id: 'transactions',
    name: 'Transactions',
    path: '/transactions',
    description:
      'Guide to sending and receiving <strong>cryptocurrencies</strong> securely with <strong>SwiftEx</strong>.',
    subtopics: [
      {
        id: 'send-crypto',
        name: 'Send Crypto',
        articles: [
          {
            id: 'send-crypto',
            title: 'Sending Crypto with SwiftEx',
            headerImage:
              'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958525/efcwwfkhibrrlembh0ij_c9bmrq.avif',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p><strong>SwiftEx</strong> allows you to send <strong>crypto</strong> securely to any <strong>wallet address</strong> across multiple <strong>blockchain networks</strong> quickly, easily, and with full transparency. Whether you're transferring funds to a friend, an <strong>exchange</strong>, or a <strong>hardware wallet</strong>, the <strong>Send</strong> feature is designed for users of all experience levels. <strong>SwiftEx</strong> makes <strong>crypto transfers</strong> safe, intuitive, and trackable with just a few taps.</p>
              <h4>How to Send Crypto with SwiftEx</h4>
              <ol>
                <li>
                  <strong>Tap the ‘Send’ Button</strong><br>
                  Open the <strong>SwiftEx app</strong>. Go to the <strong>Send section</strong> on the home.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770279005/1000136588_r413rg.webp" alt="Step 1: Tap Send">
                </li>
                <li>
                  <strong>Choose the Blockchain Network</strong><br>
                  If the token supports multiple <strong>networks</strong> (e.g. <strong>ETH</strong>, <strong>BNB</strong>, <strong>XLM</strong>), you’ll see a <strong>network selection</strong> prompt. Choose the correct <strong>blockchain network</strong>. Tip: If you're unsure, ask the recipient which <strong>network</strong> they support. Sending to the wrong <strong>network</strong> may result in lost <strong>funds</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770278897/1000136593_q7kz5t.webp" alt="Step 2: Choose Network">
                </li>
                <li>
                  <strong>Enter Recipient Details</strong><br>
                  Paste or scan the recipient’s <strong>wallet address</strong> using the <strong>QR code scanner</strong>. If required, enter the <strong>memo</strong>/<strong>tag</strong>/<strong>destination tag</strong> for tokens like <strong>XLM</strong>, <strong>XRP</strong>, or <strong>ATOM</strong>. Important: Double-check the <strong>wallet address</strong> and <strong>memo/tag</strong> (if needed). Incorrect information can result in permanent loss of <strong>funds</strong>.<br>
                </li>
                <li>
                  <strong>Enter the Amount and Review Fees</strong><br>
                  Type the amount of <strong>tokens</strong> you want to send. <strong>SwiftEx</strong> will display:<br>
                  • The <strong>network fee</strong> (<strong>gas fee</strong>).<br>
                  • Estimated <strong>arrival time</strong>.<br>
                  • A warning if your remaining balance falls below required limits.<br>
                  The total you send and the amount the recipient receives are clearly shown, so there are no surprises.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770278899/1000136595_1_avdvsz.webp" alt="Step 4: Enter Amount">
                </li>
                <li>
                  <strong>Confirm and Authenticate</strong><br>
                  Carefully review the <strong>transaction details</strong>:<br>
                  • <strong>Blockchain type</strong><br>
                  • <strong>Amount</strong><br>
                  • <strong>Recipient address</strong><br>
                  • <strong>Selected network</strong><br>
                  • <strong>Network fee</strong><br>
                  Tap ‘<strong>Confirm & Send</strong>’.<br>
                </li>
              </ol>
              <h3>Security Reminders</h3>
              <ul>
                <li>Never share your <strong>private keys</strong> or <strong>recovery phrases</strong>. These are only for your use. If someone gains access, they can control all your <strong>funds</strong>.</li>
                <li>You control your <strong>funds</strong>. <strong>SwiftEx</strong> never has access to your <strong>private keys</strong>. All sends are performed securely through your <strong>wallet</strong>.</li>
                <li>Beware of <strong>phishing</strong>. Never send <strong>crypto</strong> in response to unknown DMs, emails, or giveaway links. Always confirm requests from trusted contacts.</li>
                <li>Store <strong>recovery phrases</strong> safely. In case of device loss or reset, you can recover your <strong>SwiftEx wallet</strong> only using the <strong>Recovery Phrase</strong>. Anyone with access to this phrase can access and control your <strong>funds</strong>. It’s important to store your <strong>Recovery Phrase</strong> securely. <strong>SwiftEx</strong> cannot retrieve it for you.</li>
              </ul>
            `,
            keywords: ['send', 'crypto', 'wallet', 'swiftex'],
            relatedArticles: [
              'receive-crypto',
              'swapping-assets',
              'transaction-stuck',
            ],
            path: '/send-crypto',
          },
        ],
      },
      {
        id: 'receive-crypto',
        name: 'Receive Crypto',
        articles: [
          {
            id: 'receive-crypto',
            title: 'Receiving Crypto with SwiftEx',
            headerImage:
              'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958525/efcwwfkhibrrlembh0ij_c9bmrq.avif',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p><strong>SwiftEx</strong> makes it easy to receive <strong>crypto</strong> from any <strong>wallet</strong>, <strong>exchange</strong>, or user directly into your <strong>secure SwiftEx account</strong>. Whether you're getting paid, transferring from another <strong>wallet</strong>, or receiving <strong>funds</strong> from an <strong>exchange</strong>, the process is fast, safe, and simple. With <strong>SwiftEx</strong>, you can receive <strong>crypto</strong> instantly with full transparency and <strong>multi-chain support</strong>.</p>
              <h4>Before You Receive: What You Should Know</h4>
              <ul>
                <li>Always confirm the <strong>network</strong>. Most <strong>tokens</strong> exist on multiple <strong>blockchains</strong>. Make sure the sender is using the same <strong>network</strong> that you choose in your <strong>SwiftEx wallet</strong> (e.g., <strong>Ethereum</strong>, <strong>BNB Chain</strong>, <strong>Polygon</strong>, <strong>Tron</strong>, etc.).</li>
                <li>Check if a <strong>memo</strong>/<strong>tag</strong> is required. For certain coins like <strong>XRP</strong>, <strong>XLM</strong>, or <strong>ATOM</strong>, you must include a <strong>memo</strong>, <strong>tag</strong>, or <strong>destination tag</strong> when receiving from an <strong>exchange</strong>. Failure to do so may result in lost <strong>funds</strong>.</li>
                <li>Your <strong>address</strong> is unique per <strong>network</strong>. Using the wrong <strong>address</strong> or <strong>network</strong> can lead to the loss of <strong>funds</strong>. Always double-check the <strong>blockchain</strong> and <strong>wallet address</strong> before sharing it.</li>
              </ul>
              <h4>How to Receive Crypto in Your SwiftEx Wallet</h4>
              <ol>
                <li>
                  <strong>Tap the ‘Receive’ Button</strong><br>
                  Open the <strong>SwiftEx app</strong>. Go to the <strong>Receive section</strong> on the home.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770279005/1000136589_zacnfq.webp" alt="Step 1: Tap Receive">
                </li>
                <li>
                  <strong>Choose the Blockchain Network</strong><br>
                  If the asset is supported on multiple <strong>chains</strong>, you will be prompted to select the correct <strong>blockchain network</strong> (<strong>ETH</strong>, <strong>BNB</strong>, <strong>XLM</strong>). Make sure to use the same <strong>network</strong> the sender is using. Sending to the wrong <strong>network</strong> can permanently destroy your <strong>funds</strong>. Always confirm with the sender beforehand.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770278900/1000136600_o09wr6.webp" alt="Step 2: Choose Network">
                </li>
                <li>
                  <strong>Copy or Share Your Wallet Address</strong><br>
                  You will see your <strong>wallet address</strong> and a <strong>QR code</strong>. You can:<br>
                  • Copy the <strong>address</strong> to your clipboard.<br>
                  • Share the <strong>address</strong> via messaging or email.<br>
                  • Let the sender scan your <strong>QR code</strong>.<br>
                  <strong>QR codes</strong> make it easier and safer to receive <strong>funds</strong> without copy-paste mistakes.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770278901/1000136598_o4ow3d.webp" alt="Step 3: Share Address">
                </li>
                <li>
                  <strong>(If Required) Provide Memo/Tag</strong><br>
                  Some assets require an additional <strong>memo</strong>/<strong>tag</strong>/<strong>destination tag</strong> when receiving from centralized <strong>exchanges</strong> or custodial <strong>wallets</strong> (like <strong>XRP</strong>, <strong>XLM</strong>, etc.). If required, <strong>SwiftEx</strong> will clearly display the <strong>Memo/Tag</strong> below your <strong>wallet address</strong>. Make sure the sender includes it correctly during the <strong>transaction</strong>. Failing to include the <strong>memo/tag</strong> can result in delayed or permanently lost <strong>funds</strong>.<br>
                </li>
                <li>
                  <strong>Wait for Confirmation</strong><br>
                  Once the sender initiates the <strong>transfer</strong>:<br>
                  • The <strong>transaction</strong> will appear in your <strong>wallet</strong> once it receives <strong>block confirmations</strong>.<br>
                  • You can track the real-time status using the <strong>transaction hash</strong> on a <strong>blockchain explorer</strong>.<br>
                  • Also you can check all <strong>transactions</strong> from the different <strong>histories section</strong>.<br>
                  Most <strong>crypto transfers</strong> take a few seconds to a few minutes, depending on the <strong>network congestion</strong> and <strong>fees</strong>.<br>
                </li>
              </ol>
              <p>Your <strong>Funds</strong> Are Now in Your <strong>Wallet</strong>! Once the <strong>transaction</strong> is completed and confirmed:<br>
              • You’ll receive a <strong>push notification</strong> from <strong>SwiftEx</strong>.<br>
              • The <strong>token balance</strong> in your <strong>wallet</strong> will update instantly.</p>
              <h3>Security Reminders</h3>
              <ul>
                <li>Never share your <strong>private keys</strong> or <strong>recovery phrases</strong>. These are only for your use. If someone gains access, they can control all your <strong>funds</strong>.</li>
                <li>Only receive <strong>tokens</strong> that are supported. <strong>SwiftEx</strong> supports multiple <strong>networks</strong>, but not all <strong>tokens</strong>. Ensure the <strong>token</strong> and its <strong>network</strong> are both listed and supported.</li>
                <li>Always double-check the <strong>network</strong>. If someone sends you <strong>tokens</strong> on an unsupported <strong>chain</strong>, <strong>SwiftEx</strong> cannot recover those <strong>funds</strong>.</li>
                <li>Store <strong>recovery phrases</strong> safely. In case of device loss or reset, you can recover your <strong>SwiftEx wallet</strong> only using the <strong>Recovery Phrase</strong>. Anyone with access to this phrase can access and control your <strong>funds</strong>. It’s important to store your <strong>Recovery Phrase</strong> securely. <strong>SwiftEx</strong> cannot retrieve it for you.</li>
              </ul>
            `,
            keywords: ['receive', 'crypto', 'wallet', 'swiftex'],
            relatedArticles: ['send-crypto', 'swapping-assets', 'transaction-stuck'],
            path: '/receive-crypto',
          },
        ],
      },
    ],
  },
  {
    id: 'swapping',
    name: 'Swapping Assets',
    path: '/swapping',
    description:
      'Explore <strong>asset swapping features</strong> in <strong>SwiftEx</strong>, including fast <strong>token swaps</strong> and seamless <strong>asset conversion</strong>.',
    subtopics: [
      {
        id: 'swapping-assets',
        name: 'Swapping Assets',
        articles: [
          {
            id: 'swapping-assets',
            title: 'Swapping Assets in SwiftEx',
            headerImage:
              'https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958525/efcwwfkhibrrlembh0ij_c9bmrq.avif',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
<p><strong>SwiftEx</strong> makes it easy to Swap one <strong>digital asset</strong> into another directly within the app. The <strong>Swap</strong> feature is built for users who want a fast, <strong>secure</strong>, and simple way to <strong>exchange assets</strong> without complex interfaces.</p>

<h3>How Swaps Work in SwiftEx</h3>
<p><strong>SwiftEx</strong> uses <strong>smart routing</strong> and integrated <strong>decentralized liquidity protocols</strong> to find the most efficient conversion path. When you initiate a <strong>swap</strong>, the system evaluates available routes — including direct and multi-hop paths — to deliver the best available <strong>rate</strong> with minimal <strong>slippage</strong>.</p>

<h3>Important Things to Know</h3>
<ul>
  <li><strong>Slippage Protection</strong>: If market rates change beyond your allowed tolerance, the swap is automatically cancelled to protect your funds.</li>
  <li><strong>Liquidity Considerations</strong>: Low-liquidity assets may result in higher price impact or failed swaps.</li>
  <li><strong>Network Requirements</strong>: Some networks (such as <strong>Stellar</strong>) require a minimum balance to hold new assets (for example, ~0.5–1 <strong>XLM</strong> for a new trustline).</li>
  <li><strong>Network Fees</strong>: Fees are included directly in the quoted swap rate and vary by network and asset.</li>
</ul>

<h3>How to Swap Assets</h3>
<ol>
  <li>
    <strong>Open Swap</strong><br>
    Open the <strong>SwiftEx app</strong> and tap the <strong>Swap</strong> option on the home screen.
                      <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770279767/1000136590_ghxar0.webp" alt="Step 1: Tap Swap">
  </li>
  <li>
  <strong>Select Network & Assets</strong><br>
  First choose the network, then select the asset you want to swap and the asset you’ll receive. Enter the amount to see the estimated output in <strong>SwiftEx</strong>.
  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770280255/image_4_givu69.webp" alt="Step 3: Select network and assets">
</li>

  <li>
    <strong>Review & Confirm</strong><br>
    Review the conversion rate, estimated fees, and final amount. Confirm to proceed with the swap.
                      <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770279767/1000136642_txtnx9.webp" alt="Step 3: confirmSwap">
  </li>
</ol>

<h3>Swap Fees</h3>
<p><strong>SwiftEx</strong> applies a transparent fee model that is included in the displayed rate:</p>
<table>
  <tr><th>Asset Category</th><th>Fee</th></tr>
  <tr><td>Scam-reported assets</td><td>Up to 15%</td></tr>
  <tr><td>Low-verification assets</td><td>1%</td></tr>
  <tr><td>Standard assets</td><td>0.75%</td></tr>
  <tr><td>Curated assets</td><td>0.3%</td></tr>
  <tr><td>Featured assets (USDC, XLM, ETH)</td><td>0.2%</td></tr>
</table>

<p>No additional fees are charged beyond what is shown in the quote.</p>
          `,
            keywords: ['swap', 'asset conversion', 'crypto', 'fees', 'swiftex'],
            relatedArticles: ['instant-swap', 'advanced-swap', 'usdc-import'],
            path: '/swapping-assets',
          },
        ],
      },
    ],
  },

  {
    id: 'asset-conversion',
    name: 'How to Swap Assets via SwiftEx S-DEX',
    path: '/asset-conversion',
    description:
      'Explore <strong>asset conversion features</strong> in <strong>SwiftEx S-DEX</strong>, including <strong>instant swaps</strong> and <strong>advanced swap options</strong>.',
    subtopics: [
      {
        id: 'instant-swap',
        name: 'Instant Swap',
        articles: [
          {
            id: 'instant-swap',
            title: 'How to Perform an Instant Swap',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
            <p>The <strong>Instant Swap</strong> feature on <strong>SwiftEx S-DEX</strong> allows you to quickly convert between supported <strong>digital assets</strong> using real-time <strong>price quotes</strong>. It is designed for users who want fast and simple <strong>asset conversion</strong> without complex interfaces.</p>
            <h3><strong>Note:</strong> This feature requires <strong>Stellar Wallet</strong> activation before use.</h3>
            <p>Follow these steps to convert one <strong>cryptocurrency</strong> into another using <strong>Instant Swap</strong>:</p>

            <h3>Step 1: Navigate to Instant Swap</h3>
            <p>From the default <strong>Wallet screen</strong>, locate and tap the <strong>'S-DEX'</strong> tab. Once inside the <strong>S-DEX screen</strong>, you'll see various asset management options. Select <strong>'Swap Assets'</strong> to access the conversion features, then choose <strong>'Instant Swap'</strong> for quick asset conversions with real-time pricing.<br>
            <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770283118/image_6_rtowy2.webp" alt="Step 1: Access Instant Swap"></p>

            <h3>Step 2: Select Asset Pair</h3>
            <p>
            You'll now need to specify which assets you want to convert. First, choose the <strong>asset</strong> you want to convert from - this will be deducted from your wallet. Next, select the <strong>asset</strong> you want to receive after the conversion is complete. The available assets depend on your wallet balances, supported networks, and available <strong>liquidity routes</strong> within the S-DEX system. Make sure you have sufficient balance of the source asset before proceeding.<br>
            <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770283118/1000136650_kn5wvn.webp" alt="Step 2: Select Asset Pair"></p>

            <h3>Step 3: Enter Amount</h3>
            <p>Enter the precise amount of the source asset you want to convert. You can  type the amount manually  As you enter the amount, the system will automatically calculate and display the estimated output amount you'll receive based on current <strong>conversion rates</strong>. This calculation happens in real-time, so the estimated output may adjust slightly as market conditions change.<br>
            <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770283118/1000136651_i8hurp.webp" alt="Step 3: Enter Amount"></p>

            <h3>Step 4: Review Conversion Details</h3>
            <p>
            Before proceeding, carefully review all the important details of your conversion:
            <br><br>
            • <strong>Conversion Rate:</strong> The current rate at which your assets will be converted. This rate is fetched in real-time from integrated liquidity partners.<br><br>
            • <strong>Estimated Network Fee:</strong> The blockchain network fee required to process this conversion transaction. This fee goes to the network validators, not to SwiftEx.<br><br>
            • <strong>Minimum Received:</strong> The guaranteed minimum amount you'll receive, accounting for potential minor rate fluctuations during processing. This protects you from unexpected price changes.<br><br>
            Take your time to verify all these details are acceptable before moving forward. If any values seem incorrect or unexpected, you can go back and adjust your inputs.
            </p>

            <h3>Step 5: Confirm Swap</h3>
            <p>Once you've reviewed and confirmed all the details are correct, tap the <strong>'Confirm Swap'</strong> button to execute the conversion. The system will process your request immediately using real-time quotes from integrated <strong>liquidity partners</strong>. The conversion typically completes within a few moments, depending on network conditions. You can track the status and result of your conversion in your <strong>Transaction History</strong>, where you'll see a detailed record including the amounts converted, rates applied, and timestamp.<br>
            <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770283141/1000136652_wablwj.webp" alt="Step 5: Confirm Swap"></p>
          `,
            keywords: [
              'instant swap',
              'asset conversion',
              'crypto swap',
              'swiftex sdex',
              'token conversion',
            ],
            relatedArticles: ['advanced-swap', 'swapping-assets', 'usdc-import'],
            path: '/instant-swap',
          },
        ],
      },
      {
        id: 'advanced-swap',
        name: 'Advanced Swap',
        articles: [
          {
            id: 'advanced-swap',
            title: 'How to Create an Advanced Swap',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
      <p>The <strong>Advanced Swap</strong> feature allows users to create custom swap requests with specific terms. You can define your preferred <strong>conversion rate</strong> and <strong>amount</strong>, giving you greater control over how and when your assets are converted. This is particularly useful when you want to set a target rate and wait for market conditions to meet your requirements.</p>
      <h3><strong>Note:</strong> This feature requires <strong>Stellar Wallet</strong> activation before use.</h3>

      <h3>How to Create an Advanced Swap</h3>
      <ol>
        <li>
          <strong>Navigate to Advanced Swap</strong><br>
          From your SwiftEx home screen, open the <strong>S-DEX</strong> tab to access Stellar-based features. Within the S-DEX interface, select <strong>Swap Assets</strong> to view available conversion options. Choose <strong>Advanced Swap</strong> to access the custom swap creation interface where you can set your own terms and conditions for asset conversion.<br>
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770283446/image_7_cqzope.webp" alt="Step 1: Navigate to Advanced Swap">
        </li>
        <li>
          <strong>Select Asset Pair</strong><br>
          Choose the specific assets you wish to convert between. Select your source asset (what you're offering) and your destination asset (what you want to receive). The system will display your available balance for the source asset and show you the current market rate as a reference point. Make sure both assets are supported and that you have sufficient balance to create the swap request.<br>
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770283369/1000136654_any00g.webp" alt="Step 2: Select Asset Pair">
        </li>
        <li>
          <strong>Set Swap Terms</strong><br>
          Now define the specific terms for your swap request. Enter the exact amount of the source asset you want to convert. Then, set your preferred conversion rate - this is the rate at which you're willing to convert your assets. You can set this rate above or below the current market rate depending on your strategy. The system will calculate and show you the expected output amount based on your chosen rate. Consider setting realistic rates that are more likely to be fulfilled.<br>
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770283368/1000136655_fwipfg.webp" alt="Step 3: Set Terms">
        </li>
        <li>
          <strong>Create Advanced Swap</strong><br>you manually complete or cancel 
          After reviewing your swap terms one final time, tap the <strong>'Execute'</strong> button to create your swap request. Your request will be added to the <strong>swap pool</strong> where it remains active until one of three things happens: it gets matched with a compatible request, it, or it expires (if you set an expiration time). Your assets will be temporarily held while the request is active, ensuring they're available when a match is found.
        </li>
      </ol>

      <h3>Managing Your Swaps</h3>
      <p>You can easily monitor and manage all your active <strong>advanced swaps</strong> from the <strong>Advance Swap History</strong> section. This section shows the current status of each swap request, including details like creation time, rates, amounts, and matching progress. From here, you can view detailed information, modify certain parameters, or cancel any active swap request at any time before it's been fulfilled. Cancelled swaps will immediately return the held assets back to your available balance.</p>
    `,
            keywords: [
              'advanced swap',
              'asset swap',
              'crypto',
              'swap pool',
              'swiftex sdex',
            ],
            relatedArticles: ['instant-swap', 'swapping-assets', 'usdc-import'],
            path: '/advanced-swap',
          },
        ],
      }

    ],
  },

  {
    id: 'asset-management',
    name: 'Asset Management',
    path: '/asset-management',
    description:
      'Manage your <strong>digital assets</strong> in SwiftEx, including adding <strong>custom tokens</strong>, adding <strong>USDC</strong> to Stellar, using <strong>USDC</strong> from Stellar, and managing your <strong>internal wallets</strong> across supported networks.',
    subtopics: [
      {
        id: 'custom-tokens',
        name: 'Custom Tokens',
        articles: [
          {
            id: 'add-custom-tokens',
            title: 'Adding Custom Tokens in SwiftEx',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
          <p>
          <strong>SwiftEx</strong> allows you to add <strong>custom tokens</strong>
          that are not listed by default. This helps you view and manage
          additional <strong>assets</strong> across supported
          <strong>blockchain networks</strong>.
          </p>

          <h3>What Are Custom Tokens?</h3>
          <p>
          Custom tokens are digital assets added manually using a verified
          <strong>contract address</strong>. These tokens are displayed
          within your internal wallet for tracking and transfers.
          </p>

          <h3>Supported Networks</h3>
          <p>
          <strong>Ethereum</strong> and <strong>BNB Smart Chain</strong>
          </p>

          <h3>How to Add a Custom Token</h3>
          <ol>
            <li>
              <strong>Switch tab Asset to Add Assets</strong><br>
              Open the SwiftEx app from your home screen. Once inside, locate and tap on the <strong>Assets</strong> tab. From there, you'll see an option to <strong>Add Assets</strong> - tap on it to proceed to the token addition screen.
            </li>
            <li>
              <strong>Select Network</strong><br>
              You'll be presented with a list of supported blockchain networks. Choose the specific blockchain network where your custom token exists - either <strong>Ethereum</strong> or <strong>BNB Smart Chain</strong>. Make sure you select the correct network as tokens exist on specific chains and cannot be found on others.
              <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770288365/1000136656_cekdpl.webp" alt="Step 2: addcustom tokens">
            </li>
            <li>
              <strong>Enter Contract Address</strong><br>
              In the provided input field, carefully paste the <strong>contract address</strong> of your custom token. This is a unique identifier (usually starting with "0x") that represents the token on the blockchain. You can copy this address from the token's official website, CoinGecko, CoinMarketCap, or your trusted source. Double-check the address to ensure accuracy.
              <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770288366/1000136657_h1pbgl.webp" alt="Step 3: addcustom tokens">
            </li>
            <li>
              <strong>Confirm & Add</strong><br>
              Once you enter the contract address, SwiftEx will automatically fetch and display the token details including its <strong>name</strong>, <strong>symbol</strong>, and <strong>decimal places</strong>. Review these details carefully to ensure they match the token you want to add. If everything looks correct, tap the <strong>Add</strong> or <strong>Confirm</strong> button to complete the process.
            </li>
            <li>
              <strong>View Asset</strong><br>
              Your newly added custom token will now appear in your asset list on the main Assets screen. You can view its balance, current value, and perform actions like <strong>sending</strong> or <strong>receiving</strong> this token. The token will remain visible in your wallet until you choose to remove it.
            </li>
          </ol>

          <h3>Security Tip</h3>
          <p>
          Always verify contract addresses from official sources
          before adding a custom token. Never add tokens from untrusted sources or suspicious messages, as scammers often create fake tokens with similar names to legitimate ones.
          </p>
        `,
            path: '/add-custom-tokens',
          },
        ],
      },

      {
        id: 'add-usdc',
        name: 'Add USDC',
        articles: [
          {
            id: 'add-usdc',
            title: 'Add USDC to Stellar Wallet',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
      <p>
      <strong>Add USDC</strong> allows you to bring supported
      stable assets from your <strong>wallets on other networks</strong>
      into your <strong>active Stellar wallet</strong>
      within the SwiftEx app.
      </p>

      <p>
      Assets selected from
      <strong>Ethereum</strong> or
      <strong>BNB Smart Chain</strong>
      are <strong>bridged internally</strong> and
      made available as
      <strong>USDC on your active Stellar wallet</strong>.
      </p>

      <h3>Default Stellar Asset</h3>
      <p>
      On the Stellar network,
      <strong>USDC is used by default</strong>.
      This ensures a consistent experience
      when moving assets between Stellar
      and other networks.
      </p>

      <h3>Supported Networks</h3>
      <p>
      Source networks:
      <strong>Ethereum</strong>,
      <strong>BNB Smart Chain</strong><br>
      Destination network:
      <strong>Stellar (USDC)</strong>
      </p>

      <h3>How to Add USDC</h3>
      <ol>
        <li>
          <strong>Open S-DEX</strong><br>
          From your SwiftEx home screen, locate and tap on the <strong>S-DEX</strong> icon or menu option. This will take you to the Stellar-specific features section where you can manage your Stellar assets and perform cross-chain operations.
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770289166/1000136636_avczbj.webp" alt="Step 1: Add-USDC">
        </li>
        <li>
          <strong>Select Add USDC</strong><br>
          Once inside the S-DEX section, you'll see various options for managing your Stellar assets. Look for and tap on the <strong>Add USDC</strong> button or card. This initiates the process of bringing stablecoins from your wallets on other networks into your Stellar wallet.
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770289476/1000136638_ndqtpj.webp" alt="Step 2: Add-USDC">
        </li>
        <li>
          <strong>Select Source Network</strong><br>
          You'll be presented with a list of supported source networks. Choose either <strong>Ethereum</strong> or <strong>BNB Smart Chain</strong> depending on where your stablecoins currently reside. The app will display your available balance on the selected network to help you decide.
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770289025/1000136660_sqizks.webp" alt="Step 3: Add-USDC">
        </li>
        <li>
          <strong>Select Asset</strong><br>
          From the available stablecoins on your chosen network, select either <strong>USDC</strong> or <strong>USDT</strong>. Enter the amount you wish to transfer to your Stellar wallet. The app will show your current balance and may suggest a recommended amount based on available funds and minimum requirements.
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770289025/1000136661_vdaly8.webp" alt="Step 4: Add-USDC">
        </li>
        <li>
          <strong>Select Fee Option</strong><br>
          Choose how you'd like to pay for the transaction fee. You can either pay with the <strong>native token</strong> of the source network (ETH for Ethereum, BNB for BNB Smart Chain) or use <strong>asset-based fees</strong> where a small portion of the stablecoin you're transferring is used to cover the cost. Review the estimated fee amount before proceeding.
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770289024/1000136663_uhcoho.webp" alt="Step 5: Add-USDC">
        </li>
        <li>
          <strong>Confirm Destination</strong><br>
          Review the transaction summary showing the amount being transferred and the destination. Your selected stablecoins will be automatically converted and made available as <strong>USDC on your active Stellar wallet</strong>. Verify that your Stellar wallet address is correct and that you understand the conversion that will take place.
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770289025/1000136662_za15ew.webp" alt="Step 6: Add-USDC">
        </li>
        <li>
          <strong>Confirm</strong><br>
          After reviewing all transaction details including the amount, fees, and destination, tap the <strong>Confirm</strong> button to execute the transfer. The process may take a few moments to complete. Once finished, your USDC will appear in your Stellar wallet and you'll receive a confirmation notification.
        </li>
      </ol>

      <h3>Note</h3>
      <p>
      Asset movement happens only between
      your internal wallets within the SwiftEx app.
      SwiftEx does not provide
      exchange or trading services - this is purely an internal asset management feature to help you organize and access your funds across different blockchain networks.
      </p>
    `,
            path: '/add-usdc',
          },
        ],
      },

      {
        id: 'cross-chain-transfers',
        name: 'Cross-chain Transfers',
        articles: [
          {
            id: 'cross-chain-transfers',
            title: 'Cross-chain Crypto Transfers',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
      <p>
      <strong>Cross-chain transfers</strong> allow you to move
      <strong>USDC</strong> from your
      <strong>active Stellar wallet</strong>
      to your <strong>internal wallets on other networks</strong>
      within the SwiftEx app.
      </p>

      <p>
      During this process,
      <strong>USDC on Stellar</strong>
      is <strong>bridged internally</strong>
      and represented as
      <strong>USDC or USDT</strong>
      on the selected destination network.
      </p>

      <h3>Supported Networks</h3>
      <p>
      Source network:
      <strong>Stellar (USDC)</strong><br>
      Destination networks:
      <strong>Ethereum</strong>,
      <strong>BNB Smart Chain</strong>
      </p>

      <h3>How to Transfer</h3>
      <ol>
        <li>
          <strong>Open S-DEX</strong><br>
          Launch the SwiftEx app and navigate to the <strong>S-DEX</strong> section from your home screen. This is your gateway to managing Stellar-based assets and performing cross-chain transfers between your wallets.
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770289166/1000136636_avczbj.webp" alt="Step 1: Cross-chain Transfer">
        </li>
        <li>
          <strong>Select Cross-chain Transfer</strong><br>
          Within the S-DEX interface, locate and tap on the <strong>Cross-chain Transfer</strong> option. This feature allows you to transfer your Stellar-based USDC to other supported networks. Make sure you have sufficient USDC balance in your Stellar wallet before proceeding.
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770289843/1000136639_h3zmrt.webp" alt="Step 2: Cross-chain Transfer">
        </li>
        <li>
          <strong>Select Destination Network</strong><br>
          Choose where you want to send your USDC - either <strong>Ethereum</strong> or <strong>BNB Smart Chain</strong>. Consider factors like transaction fees and your intended use case when selecting the destination network. The app will display relevant information about each network to help you decide.
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770290862/1000136665_rurxyk.webp" alt="Step 3: Cross-chain Transfer">
        </li>
        <li>
          <strong>Select Asset</strong><br>
          Choose the format you want your asset to take on the destination network - either <strong>USDC</strong> or <strong>USDT</strong>. Enter the amount you wish to transfer from your Stellar wallet. The app will show your available Stellar USDC balance and may indicate minimum and maximum transfer limits.
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770290862/1000136666_gaufdr.webp" alt="Step 4: Cross-chain Transfer">
        </li>
        <li>
          <strong>Confirm Wallet</strong><br>
          Review the destination wallet details carefully. Your assets will be transferred to your <strong>internal wallet</strong> on the selected network within SwiftEx - not to any external address. Verify that the displayed wallet address matches your intended destination wallet within the app.
        </li>
        <li>
          <strong>Select Fee Option</strong><br>
          Choose your preferred method for paying transaction fees. You can either pay with <strong>Stellar's native token (XLM)</strong> or use a portion of your USDC to cover the fees. Compare the fee amounts for each option and select the one that works best for you. The estimated total cost will be displayed clearly.
          <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770290864/1000136669_binqhf.webp" alt="Step 5: Cross-chain Transfer">
        </li>
        <li>
          <strong>Confirm</strong><br>
          Review all transaction details one final time including the amount, destination network, asset type, and fees. Once you're satisfied that everything is correct, tap the <strong>Confirm</strong> button to initiate the transfer. The bridging process will begin and you'll receive a notification once your assets are successfully available on the destination network.
        </li>
      </ol>

      <h3>Important</h3>
      <p>
      Manual address entry and
      third-party transfers are not supported with this feature.
      All asset movement is handled
      between your internal wallets within SwiftEx only. This ensures security and prevents accidental transfers to incorrect addresses. If you need to send assets to external wallets, please use the standard Send feature instead.
      </p>
    `,
            path: '/cross-chain-transfers',
          },
        ],
      },
    ],
  },

  {
    id: 'fiat-access',
    name: 'Fiat Access',
    path: '/fiat-access',
    description:
      'Learn how to <strong>acquire</strong> and <strong>convert cryptocurrencies</strong> using fiat currency in the <strong>SwiftEx App</strong>, complete <strong>KYC verification</strong>, and view <strong>transaction history</strong> securely.',
    subtopics: [
      {
        id: 'buy-crypto',
        name: 'Buy Crypto',
        articles: [
          {
            id: 'buy-crypto',
            title: 'Acquiring Crypto with Fiat',
            modifiedDate: 'Mon, 01 Sep 2025 at 10:36 AM',
            content: `
            <p><strong>SwiftEx</strong> enables users to acquire <strong>cryptocurrencies</strong> using fiat currency through its <strong>Fiat Access</strong> feature. This guide walks you through the process, ensuring a seamless and secure experience.</p>
            <h3>Prerequisites</h3>
            <p>For transactions above a certain amount (e.g., $50, varies by region; check your selected payment provider's documentation), <strong>KYC verification</strong> is required.</p>
            <h3>How to Acquire Crypto with Fiat</h3>
            <ol>
              <li>
                <strong>Access the Fiat Access Section</strong><br>
                Open the <strong>SwiftEx App</strong> from your home screen. Locate and tap on the <strong>SDEX</strong> option to access Stellar-based features. Within the SDEX section, you'll find the <strong>Fiat Access</strong> option - tap on it to proceed to the fiat conversion interface.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770295970/image_10_xpsecl.webp" alt="Step 1: Access Fiat Access Section">
              </li>
              <li>
                <strong>Choose a Payment Provider</strong><br>
                You'll be presented with a list of trusted payment providers that facilitate fiat-to-crypto conversions. Select your preferred provider (e.g., <strong>Alchemy Pay</strong> or other available options) to handle the transaction securely. Each provider may have different supported regions, payment methods, and fee structures, so choose the one that best suits your needs.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770294680/1000136706_uyundv.webp" alt="Step 2: Choose Payment Provider">
              </li>
              <li>
                <strong>Select Currencies and Payment Method</strong><br>
                <ul> 
                 <li>The <strong>Buy</strong> tab is selected by default on the fiat screen.</li>
                  <li>Choose your fiat currency from the dropdown menu (e.g., USD, INR, EUR, or other region-specific fiat currencies supported by your selected provider).</li>
                  <li>Select the cryptocurrency you want to acquire (e.g., <strong>Bitcoin</strong>, <strong>Ethereum</strong>, <strong>USDC</strong>, or other supported digital assets).</li>
                  <li>Pick a payment method based on your region and availability. Options may include Credit/Debit Card, Bank Transfer, UPI, or other local payment methods. Check with your selected provider for the complete list of available payment options in your area.</li>
                </ul>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770295932/image_11_zglt1i.webp" alt="Step 3: Select Currencies and Payment Method">
              </li>
              <li>
                <strong>Enter Transaction Details</strong><br>
                Input the fiat amount you want to spend in the designated field. The system will automatically calculate and display the equivalent cryptocurrency amount you'll receive based on real-time conversion rates. Carefully review the transaction summary which includes the current conversion rate, any applicable processing fees, and the estimated delivery time for your crypto to arrive in your wallet. Make sure all details are accurate before proceeding.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770296151/FiatBuy_unyi6n.webp" alt="Step 4: Enter Transaction Details">
              </li>
              <li>
                <strong>Complete Your Purchase</strong><br>
                Once you've reviewed all details, tap the <strong>Buy Now</strong> button. If your transaction amount exceeds the no-KYC limit set by the provider (e.g., $50, varies by region and provider), you'll be prompted to complete <strong>KYC verification</strong> (refer to the KYC Verification section for detailed steps). After KYC (if required), enter your payment details as requested by the provider. Review the final transaction summary one more time, then tap <strong>Confirm</strong> to execute the purchase. Your cryptocurrency will be credited to your SwiftEx wallet once the transaction is processed successfully.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756207326/buycryptoalchmeypay_q5tm9f.webp" alt="Step 5: Complete Purchase">
              </li>
            </ol>
            <h3>Post-Purchase</h3>
            <p>After a successful transaction, you can view basic transaction details by tapping the <strong>Transaction History</strong> icon located in the top right corner of your home screen. For comprehensive blockchain details, you can view your transaction on block explorers like <strong>Etherscan</strong>, <strong>BscScan</strong>, or <strong>Stellar.org</strong>.<br>
            <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756704217/reciveEth_ip84m2.webp" alt="Post-Purchase: Transaction History"></p>
            <h3>Security Note</h3>
            <p>All transactions are processed securely by trusted payment providers. Your payment information and personal data are encrypted and handled in compliance with global data protection standards including <strong>GDPR</strong> and <strong>CCPA</strong>. SwiftEx does not directly store your payment card details or sensitive personal information.</p>
          `,
            keywords: ['buy crypto', 'fiat currency', 'fiat access', 'swiftex', 'wallet'],
            relatedArticles: ['sell-crypto-fiat', 'kyc-verification', 'transaction-history'],
            path: '/buy-crypto-fiat',
          },
        ],
      },
      {
        id: 'sell-crypto',
        name: 'Sell Crypto',
        articles: [
          {
            id: 'sell-crypto',
            title: 'Converting Crypto to Fiat',
            modifiedDate: 'Mon, 01 Sep 2025 at 10:36 AM',
            content: `
            <p><strong>SwiftEx</strong> allows users to convert <strong>cryptocurrencies</strong> into fiat currency through its <strong>Fiat Access</strong> feature, with funds credited to your chosen payout method. This guide covers the complete process, including special steps for converting <strong>Ethereum (ETH)</strong>.</p>
            <h3>Prerequisites</h3>
            <p><strong>KYC verification</strong> is mandatory for all crypto-to-fiat conversion transactions, regardless of the amount. This is a regulatory requirement enforced by payment providers.</p>
            <h3>How to Convert Crypto to Fiat</h3>
            <ol>
              <li>
                <strong>Access the Fiat Access Section</strong><br>
                Open the <strong>SwiftEx App</strong> and navigate to <strong>SDEX</strong> from your home screen. Within the SDEX section, select the <strong>Fiat Access</strong> option. This will take you to the fiat conversion interface where you can manage your crypto-to-fiat transactions.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770295970/image_10_xpsecl.webp" alt="Step 1: Access Fiat Access Section">
              </li>
              <li>
                <strong>Choose a Payment Provider</strong><br>
                Select a trusted payment provider from the available options (e.g., <strong>Alchemy Pay</strong> or other supported providers) to facilitate your crypto-to-fiat conversion. Different providers may offer different payout methods, processing times, and fee structures based on your region, so choose accordingly.<br>
              </li>
              <li>
                <strong>Select Currencies and Payout Method</strong><br>
                <ul> 
                 <li>Switch to the <strong>Sell</strong> tab on the fiat screen to access the conversion interface.</li>
                  <li>Choose the cryptocurrency you want to convert from your wallet (e.g., <strong>Bitcoin</strong>, <strong>Ethereum</strong>, <strong>USDC</strong>, or other supported digital assets).</li>
                  <li>Select the fiat currency you want to receive (e.g., USD, INR, EUR, or other region-specific fiat currencies supported by your selected provider).</li>
                  <li>Choose your preferred payout method based on your region and the provider's available options. This may include Bank Transfer, UPI, or other local payout methods. Verify with your selected provider which payout methods are available in your area.</li>
                </ul>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770295932/image_11_zglt1i.webp" alt="Step 3: Select Currencies and Payout Method">
              </li>
              <li>
                <strong>Enter Transaction Details</strong><br>
                Enter the amount of cryptocurrency you want to convert in the designated input field. The system will automatically calculate and display the equivalent fiat amount you'll receive using real-time conversion rates. Review the comprehensive transaction summary including the current conversion rate, any applicable processing or network fees, and the estimated time for the fiat to reach your payout method. Ensure all details are correct before proceeding.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1770296152/FiatSell_mlg6rt.webp" alt="Step 4: Enter Transaction Details">
              </li>
              <li>
                <strong>Complete Your Conversion</strong><br>
                Tap the <strong>Sell Now</strong> button to proceed. If you haven't completed <strong>KYC verification</strong> yet, you'll be prompted to do so at this stage (refer to the KYC Verification section for detailed guidance). After KYC completion, enter your payout account details carefully as this is where your fiat funds will be sent. Review the final transaction summary thoroughly, including all amounts and fees, then tap <strong>Confirm</strong> to initiate the conversion process.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756705628/sell_o0wepv.webp" alt="Step 5: Complete Conversion">
              </li>
              <li>
                <strong>Send ETH (if applicable)</strong><br>
                If you're converting <strong>Ethereum (ETH)</strong>, you'll receive a specific ETH deposit address from the payment provider. To complete the transaction, navigate to the <strong>Send</strong> section within the <strong>SwiftEx App</strong>. Select the Ethereum network, carefully enter or paste the provided ETH address (double-check for accuracy), input the exact ETH amount shown in your conversion request, and confirm the transfer. Your fiat funds will be credited to your payout method once the ETH transfer is successfully confirmed on the blockchain.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756705694/ethsale_p7mvvp.webp" alt="Step 6: Send ETH">
              </li>
            </ol>
            <h3>Post-Conversion</h3>
            <p>After your conversion is successfully completed, you can view basic transaction details by tapping the <strong>Transaction History</strong> icon located in the top right corner of your home screen. For comprehensive blockchain details, you can view your transaction on block explorers like <strong>Etherscan</strong>, <strong>BscScan</strong>, or <strong>Stellar.org</strong>.<br>
            <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756705827/sellcrypto_ynqrg9.avif" alt="Post-Conversion: Transaction History"></p>
            <h3>Security Note</h3>
            <p>All conversion transactions are processed securely through trusted payment providers. Your banking information and personal data are encrypted and handled in strict compliance with global data protection standards including <strong>GDPR</strong> and <strong>CCPA</strong>. SwiftEx does not directly store your banking details or sensitive personal information.</p>
          `,
            keywords: ['sell crypto', 'fiat currency', 'fiat access', 'swiftex', 'wallet'],
            relatedArticles: ['buy-crypto-fiat', 'kyc-verification', 'transaction-history'],
            path: '/sell-crypto-fiat',
          },
        ],
      },
      {
        id: 'kyc-verification',
        name: 'KYC Verification',
        articles: [
          {
            id: 'kyc-verification',
            title: 'Completing KYC Verification on SwiftEx',
            modifiedDate: 'Mon, 01 Sep 2025 at 10:36 AM',
            content: `
            <p><strong>KYC (Know Your Customer)</strong> verification is a regulatory requirement for certain fiat acquisition transactions (above a threshold amount, e.g., $50, which varies by region and provider) and all crypto-to-fiat conversion transactions in the <strong>SwiftEx App</strong>. This verification process ensures compliance with financial regulations and enhances security, and is managed by trusted third-party payment providers.</p>
            <h3>Why KYC is Needed</h3>
            <p>KYC verification serves multiple important purposes:<br>
            - <strong>Fraud Prevention:</strong> Protects your account and the platform against fraudulent activities and identity theft.<br>
            - <strong>Regulatory Compliance:</strong> Ensures adherence to local and international anti-money laundering (AML) and counter-terrorism financing (CTF) regulations.<br>
            - <strong>Account Security:</strong> Adds an additional layer of security to protect your account and transactions from unauthorized access.<br>
            - <strong>Transaction Limits:</strong> Allows you to access higher transaction limits and full platform functionality.</p>
            <p><strong>Important:</strong> SwiftEx does not directly collect, process, or store your KYC data. All verification information is securely managed by third-party payment providers who are specialized in identity verification. Your data is encrypted and handled in compliance with global privacy standards including <strong>GDPR</strong> and <strong>CCPA</strong>.</p>
            <h3>Required Documents</h3>
            <p>You'll need to provide the following documents during the KYC process:<br><br>
            - <strong>Government-Issued Photo ID:</strong> A valid and current passport, national identity card, or driver's license. The document must be unexpired and show your photo, full name, date of birth, and ID number clearly.<br><br>
            - <strong>Proof of Address:</strong> A recent document (typically issued within the last 3 months) such as a utility bill, bank statement, or government-issued residency document. In some regions, specific documents like Aadhaar (India) or equivalent national residence cards are accepted. The document must clearly show your full name and current residential address.<br><br>
            - <strong>Live Selfie or Video Verification:</strong> A real-time selfie or short video clip where you hold your ID document next to your face. This biometric verification step confirms that you are the actual person shown in the ID document and helps prevent identity fraud.</p>
            <h3>KYC Verification Process</h3>
            <ol>
              <li>
                <strong>Initiate Verification</strong><br>
                During a fiat acquisition transaction (if your amount exceeds the no-KYC threshold) or any crypto-to-fiat conversion transaction, you'll be automatically prompted to complete KYC verification. The process takes place within a secure interface provided by the third-party payment provider, embedded seamlessly in the <strong>SwiftEx App</strong>. You'll be guided through each step with clear instructions.<br>
              </li>
              <li>
                <strong>Upload Required Documents</strong><br>
                Follow the on-screen prompts to capture or upload clear, high-quality images of your required documents. Make sure all text is legible, there's no glare or shadows, and all four corners of the document are visible in the image. The verification system will automatically check the image quality and may ask you to retake photos if they don't meet the required standards.<br>
              </li>
              <li>
                <strong>Complete Biometric Verification</strong><br>
                Follow the step-by-step instructions to complete the live selfie or video verification. You may be asked to turn your head, blink, or perform simple actions to confirm you're a real person. Hold your ID document clearly next to your face as instructed. This step typically takes less than a minute to complete.<br>
              </li>
              <li>
                <strong>Submit and Await Review</strong><br>
                After submitting all required information, your documents will be reviewed by the payment provider's verification team. The review process typically takes between 24 to 48 hours, though it may be faster during non-peak times. You'll receive a notification through the app and/or via email once your verification status is updated. You can check your verification status at any time in the app.<br>
              </li>
            </ol>
            <h3>Important Notes</h3>
            <p>
            - <strong>One-Time Process:</strong> KYC verification is typically a one-time requirement. Once approved, you won't need to repeat it unless regulatory updates, account security concerns, or provider policy changes necessitate re-verification.<br><br>
            - <strong>Transaction Thresholds:</strong> For fiat acquisition transactions, amounts below a certain threshold (e.g., up to $50, varies by region and provider) may not require KYC. Check your selected payment provider's current limits and requirements for accurate information.<br><br>
            - <strong>Verification Issues:</strong> If your documents are rejected or you encounter any issues during the verification process, you'll receive specific feedback on what needs to be corrected. Common issues include poor image quality, expired documents, or mismatched information.<br><br>
            - <strong>Support:</strong> For assistance with KYC verification or any related questions, contact support through the <strong>SwiftEx App</strong>'s support section or via email. The support team can guide you through the process and help resolve any verification issues.
            </p>
          `,
            keywords: ['kyc', 'verification', 'swiftex', 'compliance', 'security'],
            relatedArticles: ['buy-crypto-fiat', 'sell-crypto-fiat', 'transaction-history'],
            path: '/kyc-verification',
          },
        ],
      },
      {
        id: 'transaction-history',
        name: 'Transaction History',
        articles: [
          {
            id: 'transaction-history',
            title: 'Viewing Transaction History on SwiftEx',
            modifiedDate: 'Mon, 01 Sep 2025 at 10:36 AM',
            content: `
            <p>After completing any fiat acquisition or crypto conversion transaction in the <strong>SwiftEx App</strong>, you can view basic transaction details directly in the app.</p>
            <h3>How to Access Transaction History</h3>
            <ol>
              <li>
                <strong>Navigate to Transaction History</strong><br>
                Open the <strong>SwiftEx App</strong> from your device. On the home screen, look for the <strong>Transaction History</strong> icon located in the top right corner and tap on it to view your transaction records.<br>
              </li>
              <li>
                <strong>Review Your Transactions</strong><br>
                You'll see a list of your fiat-related transactions with basic details. Tap on any transaction to view more information.<br>
              </li>
            </ol>
            <h3>View Detailed Blockchain Information</h3>
            <p>For comprehensive transaction details including block confirmations, gas fees, and complete blockchain data, you can view your transactions on block explorers:<br>
            - <strong>Etherscan</strong> for Ethereum transactions<br>
            - <strong>BscScan</strong> for BNB Smart Chain transactions<br>
            - <strong>Stellar.org</strong> for Stellar network transactions</p>
            <h3>Contact Support</h3>
            <p>If you have questions about a specific transaction, please reach out to our support team through the <strong>SwiftEx App</strong> or via email. Have your transaction ID ready for faster assistance.</p>
          `,
            keywords: ['transaction history', 'swiftex', 'transactions'],
            relatedArticles: ['buy-crypto-fiat', 'sell-crypto-fiat', 'kyc-verification'],
            path: '/transaction-history',
          },
        ],
      },
    ],
  },
  {
    id: 'troubleshooting-faq',
    name: 'Troubleshooting & FAQ',
    path: '/troubleshooting-faq',
    description:
      'Find solutions to common issues and answers to frequently asked questions in SwiftEx.',
    subtopics: [
      {
        id: 'transaction-issues',
        name: 'Transaction Issues',
        articles: [
          {
            id: 'transaction-stuck',
            title: 'What if My Transaction is Pending or Stuck?',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p>Most transfers are completed within minutes depending on network congestion. If it remains pending for too long:</p>
              <ol>
                <li>
                  <strong>Double-check Your Internet Connection</strong><br>
                  Ensure you have a stable internet connection.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752075263/networkerror_ovvi2v.avif">
                </li>
                <li>
                  <strong>Reopen the App</strong><br>
                  Reopen the app to refresh status.<br>
                </li>
                <li>
                  <strong>Reach Out to Support</strong><br>
                  Reach out to SwiftEx Support with the transaction hash if needed.<br>
                </li>
              </ol>
            `,
            keywords: ['transaction', 'stuck', 'pending', 'troubleshooting', 'swiftex'],
            relatedArticles: [
              'cannot-send-funds',
              'send-crypto',
              'receive-crypto',
            ],
            path: '/transaction-stuck',
          },
          {
            id: 'cannot-send-funds',
            title: 'Troubleshooting: Still Haven’t Received Your Crypto?',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p>Still haven’t received your crypto?</p>
              <ol>
                <li>
                  <strong>Confirm the Transaction Was Successfully Sent</strong><br>
                  Confirm the transaction was successfully sent by the sender.<br>
                </li>
                <li>
                  <strong>Verify the Correct Address and Network</strong><br>
                  Verify the correct address and network were used.<br>
                </li>
                <li>
                  <strong>Check Your Token List</strong><br>
                  Check your token list — some assets may be hidden. You can manually enable them from SwiftEx settings.<br>
                </li>
                <li>
                  <strong>Contact Support</strong><br>
                  Reach out to SwiftEx Support with the transaction hash and sender details.<br>
                </li>
              </ol>
              <h3>Received the Wrong Token?</h3>
              <p>Reach out to SwiftEx Support with the transaction hash and sender details.</p>
            `,
            keywords: ['receive', 'troubleshooting', 'crypto', 'swiftex'],
            relatedArticles: [
              'transaction-stuck',
              'send-crypto',
              'receive-crypto',
            ],
            path: '/cannot-send-funds',
          },
        ],
      },
    ],
  },
];

categories.forEach(category => {
  category.subtopics.forEach(subtopic => {
    subtopic.articles.forEach(article => {
      allArticlesMap.set(article.id, article);
    });
  });
});

export const getArticleById = (articleId: string): Article | undefined => {
  return allArticlesMap.get(articleId);
};

export const getArticlesByIds = (articleIds: string[]): Article[] => {
  const foundArticles: Article[] = [];
  for (const id of articleIds) {
    const article = allArticlesMap.get(id);
    if (article) {
      foundArticles.push(article);
    }
  }
  return foundArticles;
};

export const getCategoryOfArticle = (articleId: string): Category | undefined => {
  for (const category of categories) {
    for (const subtopic of category.subtopics) {
      if (subtopic.articles.some(article => article.id === articleId)) {
        return category;
      }
    }
  }
  return undefined;
};
