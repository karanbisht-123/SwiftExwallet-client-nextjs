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
                      <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1755954057/createwaalet_mggtyy.webp" alt="Create a New Wallet">
                    </li>
                    <li>
                      <strong>Import an Existing Wallet</strong><br>
                      If you already have a <strong>wallet</strong> (using <strong>private key</strong>, <strong>JSON</strong>, or <strong>recovery phrase</strong>), you can bring it into <strong>SwiftEx</strong>.<br>
                      <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1755954058/importwallet_rszh3l.webp" alt="Import an Existing Wallet">
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
              <p>Once this <strong>setup</strong> is complete, you’re ready to start exploring the <strong>SwiftEx ecosystem</strong> whether it's managing <strong>wallets</strong>, <strong>trading</strong>, or <strong>swapping assets</strong>.</p>
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
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752066055/createwallet1_xbeh44.avif" alt="Step 1: Create Wallet">
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
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752068253/importwallet1_itcayq.avif" alt="Step 1: Navigate to Import">
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
              <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752068773/switchwallet_a9ma4p.webp" alt="Switch Between Wallets">
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
              <p>The <strong>SwiftEx home screen</strong> is designed to offer streamlined access to the app’s most essential <strong>features</strong>, all from a single, convenient location. This allows you to manage your <strong>crypto activities</strong> efficiently whether you're a beginner or an experienced <strong>trader</strong>.</p>
              <h3>What You Can Access from the Home Screen</h3>
              <p>At the top of the screen, you'll find quick links to the following actions:</p>
              <ul>
                <li>
                  <strong>Receive</strong>: Accept <strong>cryptocurrencies</strong> into your <strong>wallet</strong> using your <strong>public address</strong> or <strong>QR code</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958592/ixqftxzf3bfwo9zvvdau_pvqszd.avif" alt="Step 1: Receive">
                </li>
                <li>
                  <strong>Send</strong>: Transfer <strong>tokens</strong> securely to any other <strong>wallet address</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958596/swiuggz7hmfi0zrmoldt_a082bs.avif" alt="Step 2: Send">
                </li>
                <li>
                  <strong>Swap</strong>: Instantly exchange one <strong>cryptocurrency</strong> for another at the best available rate.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958593/r12t0oflofmlgkqjt2qv_p6ybwb.avif" alt="Step 3: Swap">
                </li>
                <li>
                  <strong>Buy</strong>: Purchase <strong>crypto</strong> using <strong>fiat</strong> through integrated providers such as <strong>card payments</strong> or <strong>bank transfers</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958595/zubgkqpxzzljcwe5bnj0_jpi5l1.avif" alt="Step 4: Buy">
                </li>
              </ul>
              <p>Each of these options is clearly displayed for easy <strong>navigation</strong>, ensuring that even complex <strong>transactions</strong> feel intuitive. Whether you’re sending funds to a friend or making a <strong>swap</strong> for trading purposes, everything starts from the <strong>home screen</strong>.</p>
            `,
            keywords: ['home screen', 'navigation', 'swiftex', 'crypto'],
            relatedArticles: [
              'send-receive-crypto-send',
              'send-receive-crypto-receive',
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
            id: 'send-receive-crypto-send',
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
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958519/rx6bxbte54f6smlnttjn_jnihfm.avif" alt="Step 1: Tap Send">
                </li>
                <li>
                  <strong>Choose the Blockchain Network</strong><br>
                  If the token supports multiple <strong>networks</strong> (e.g. <strong>ETH</strong>, <strong>BNB</strong>, <strong>XLM</strong>), you’ll see a <strong>network selection</strong> prompt. Choose the correct <strong>blockchain network</strong>. Tip: If you're unsure, ask the recipient which <strong>network</strong> they support. Sending to the wrong <strong>network</strong> may result in lost <strong>funds</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958522/yuwm0ftvbbzcl0leafpd_rupfah.avif" alt="Step 2: Choose Network">
                </li>
                <li>
                  <strong>Enter Recipient Details</strong><br>
                  Paste or scan the recipient’s <strong>wallet address</strong> using the <strong>QR code scanner</strong>. If required, enter the <strong>memo</strong>/<strong>tag</strong>/<strong>destination tag</strong> for tokens like <strong>XLM</strong>, <strong>XRP</strong>, or <strong>ATOM</strong>. Important: Double-check the <strong>wallet address</strong> and <strong>memo/tag</strong> (if needed). Incorrect information can result in permanent loss of <strong>funds</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958522/qpi8axfokokbn1hvmel8_chigpu.avif" alt="Step 3: Enter Details">
                </li>
                <li>
                  <strong>Enter the Amount and Review Fees</strong><br>
                  Type the amount of <strong>tokens</strong> you want to send. <strong>SwiftEx</strong> will display:<br>
                  • The <strong>network fee</strong> (<strong>gas fee</strong>).<br>
                  • Estimated <strong>arrival time</strong>.<br>
                  • A warning if your remaining balance falls below required limits.<br>
                  The total you send and the amount the recipient receives are clearly shown, so there are no surprises.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958526/gjmetrgsj9enblz4xjmj_ddghsd.avif" alt="Step 4: Enter Amount">
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
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958520/rturpcp5oxcsr667oqla_iwrw8t.avif" alt="Step 5: Confirm Send">
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
              'send-receive-crypto-receive',
              'swapping-assets',
              'transaction-stuck',
            ],
            path: '/send-receive-crypto-send',
          },
        ],
      },
      {
        id: 'receive-crypto',
        name: 'Receive Crypto',
        articles: [
          {
            id: 'send-receive-crypto-receive',
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
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958524/transection7_gkxpub.avif" alt="Step 1: Tap Receive">
                </li>
                <li>
                  <strong>Choose the Blockchain Network</strong><br>
                  If the asset is supported on multiple <strong>chains</strong>, you will be prompted to select the correct <strong>blockchain network</strong> (<strong>ETH</strong>, <strong>BNB</strong>, <strong>XLM</strong>). Make sure to use the same <strong>network</strong> the sender is using. Sending to the wrong <strong>network</strong> can permanently destroy your <strong>funds</strong>. Always confirm with the sender beforehand.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958523/transction8_j6ifrh.avif" alt="Step 2: Choose Network">
                </li>
                <li>
                  <strong>Copy or Share Your Wallet Address</strong><br>
                  You will see your <strong>wallet address</strong> and a <strong>QR code</strong>. You can:<br>
                  • Copy the <strong>address</strong> to your clipboard.<br>
                  • Share the <strong>address</strong> via messaging or email.<br>
                  • Let the sender scan your <strong>QR code</strong>.<br>
                  <strong>QR codes</strong> make it easier and safer to receive <strong>funds</strong> without copy-paste mistakes.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958518/transction9_x8ig6x.avif" alt="Step 3: Share Address">
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
            relatedArticles: ['send-receive-crypto-send', 'swapping-assets', 'transaction-stuck'],
            path: '/send-receive-crypto-receive',
          },
        ],
      },
    ],
  },
  {
    id: 'Swapping',
    name: 'Swapping and Bridging Assets',
    path: '/swapping',
    description:
      'Explore <strong>trading features</strong> in <strong>SwiftEx</strong>, including <strong>swapping</strong>, <strong>spot trading</strong>, and <strong>large order trading</strong>.',
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
              <p><strong>SwiftEx</strong> makes it easy to exchange one <strong>cryptocurrency</strong> for another directly within the app whether you’re a complete beginner or a seasoned <strong>trader</strong>. The <strong>Swap</strong> feature is designed for users who want a quick, <strong>secure</strong>, and seamless <strong>asset exchange</strong> experience without diving deep into technical <strong>trading tools</strong>. Think of it as the easiest way to convert your <strong>crypto</strong> at the best available rate — in just one tap.</p>
              <h3>How do Swaps Work in SwiftEx?</h3>
              <p><strong>SwiftEx</strong> uses <strong>smart routing</strong> and <strong>decentralized liquidity protocols</strong> to ensure your <strong>assets</strong> are exchanged using the most optimal market path. When you initiate a <strong>swap</strong>, <strong>SwiftEx</strong> looks for the best available <strong>trade path</strong> whether it's a direct <strong>swap</strong> (e.g. <strong>ETH</strong> → <strong>USDC</strong>) or a <strong>multi-hop trade</strong> (e.g. <strong>ETH</strong> → <strong>SOL</strong> → <strong>USDC</strong>) — to get you the best <strong>price</strong> with minimal <strong>slippage</strong>. <strong>Swaps</strong> in <strong>SwiftEx</strong> are powered by <strong>secure</strong>, <strong>decentralized exchanges</strong> and <strong>liquidity aggregators</strong>.</p>
              <h3>What You Need to Know Before Swapping</h3>
              <ul>
                <li><strong>Slippage Tolerance</strong>: <strong>Swaps</strong> are designed to be accurate, but market <strong>prices</strong> can move quickly. If the <strong>price</strong> changes by more than your set <strong>slippage tolerance</strong> (default is usually 1%), the <strong>swap</strong> won’t go through to protect your <strong>funds</strong>.</li>
                <li><strong>Liquidity Warning</strong>: Swapping <strong>tokens</strong> with low market <strong>liquidity</strong> may result in significant losses or failed <strong>transactions</strong>. Always check the final <strong>quote</strong> before approving a <strong>swap</strong>.</li>
                <li><strong>Minimum Token Balance</strong>: Certain <strong>blockchains</strong> (like <strong>Stellar</strong> or <strong>Solana</strong>) require a <strong>minimum reserve</strong> to hold a new <strong>asset</strong>. For example, <strong>Stellar</strong> requires 0.5–1 <strong>XLM</strong> (approx) to open a new <strong>trustline</strong> (hold a new <strong>asset</strong>).</li>
                <li><strong>Network Fees</strong>: A small <strong>fee</strong> is included in your <strong>swap quote</strong> to cover <strong>network</strong> and <strong>protocol costs</strong>. This <strong>fee</strong> may vary depending on the <strong>asset</strong> you are buying and <strong>network congestion</strong>.</li>
              </ul>
              <h3>How to Swap Assets in SwiftEx</h3>
              <ol>
                <li>
                  <strong>Open the Swap Feature</strong><br>
                  Launch the <strong>SwiftEx app</strong>. Tap the ‘<strong>Swap</strong>’ button on the <strong>home screen</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958544/fq0oj4bvhlqoh0iuozju_cdj2dg.avif" alt="Step 1: Open Swap">
                </li>
                <li>
                  <strong>Choose the Preferred Token Pair to Swap</strong><br>
                  In the ‘<strong>You Pay</strong>’ field, select the <strong>token</strong> you want to sell. In the ‘<strong>You Receive</strong>’ field, select the <strong>token</strong> you want to buy. Enter either the amount you want to pay or the amount you want to <strong>swap</strong>. <strong>SwiftEx</strong> will automatically calculate the matching value based on live <strong>market data</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958546/pbi0ldrnyjaohfgpevig_u5gmhj.avif" alt="Step 2: Choose Token Pair">
                </li>
                <li>
                  <strong>Review and Confirm the Swap</strong><br>
                  Check the <strong>exchange rate</strong>, <strong>network fee</strong>, and estimated time for the <strong>swap</strong>. Make sure the <strong>tokens</strong> and <strong>amounts</strong> are correct — once confirmed, the <strong>transaction</strong> cannot be reversed. Tap the ‘<strong>Swap</strong>’ button to proceed.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958547/grnv4g95e1zriz7gleqo_j6zyjh.avif" alt="Step 3: Confirm Swap">
                </li>
              </ol>
              <h3>Important Notes & Tips</h3>
              <p>If the <strong>swap</strong> fails, try adjusting the <strong>swap amount</strong>, selecting a different <strong>token pair</strong>, or increasing your <strong>slippage tolerance</strong>. Some <strong>tokens</strong> require additional <strong>approval transactions</strong> or <strong>gas fees</strong>. <strong>SwiftEx</strong> will guide you if that’s the case. If you’re adding a <strong>token</strong> you don’t already hold in your <strong>wallet</strong> (on <strong>networks</strong> like <strong>Stellar</strong>), make sure you have the <strong>minimum base reserve</strong> (like 0.5–1 <strong>XLM</strong>).</p>
              <h3>Swap Fees on SwiftEx</h3>
              <p><strong>SwiftEx</strong> includes a transparent <strong>fee model</strong> directly within the <strong>swap rate</strong>. The <strong>fees</strong> vary based on:</p>
              <table>
                <tr><th>Asset Type</th><th>Swap Fee</th></tr>
                <tr><td><strong>Scam-reported tokens</strong></td><td>Up to 15%</td></tr>
                <tr><td><strong>Unknown / low-verified</strong></td><td>1%</td></tr>
                <tr><td><strong>Standard (known) assets</strong></td><td>0.75%</td></tr>
                <tr><td><strong>Curated tokens</strong></td><td>0.3%</td></tr>
                <tr><td><strong>Featured tokens</strong> (e.g., <strong>USDC</strong>, <strong>XLM</strong>, <strong>ETH</strong>)</td><td>0.2%</td></tr>
              </table>
              <p><strong>SwiftEx</strong> does not charge any extra <strong>fee</strong> on top of this — it’s included in your quoted <strong>swap rate</strong>. Still have questions about <strong>swapping</strong>? Check the <strong>Help Center</strong> or contact <strong>SwiftEx Support</strong> directly in the app.</p>
            `,
            keywords: ['swap', 'trade', 'crypto', 'fees', 'swiftex'],
            relatedArticles: ['instant-trade', 'large-order-trade', 'usdc-import'],
            path: '/swapping-assets',
          },
        ],
      },
      {
        id: 'Bridging asset',
        name: 'Bridging Asset on Trade Wallet',
        articles: [
          {
            id: 'Bridging asset',
            title: 'Bridging Asset on Trade Wallet',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p><strong>SwiftEx</strong> offers a smooth <strong>trading experience</strong>, enabling you to exchange your <strong>crypto assets</strong> with just a few taps. Whether you're swapping <strong>stablecoins</strong> or trading across <strong>chains</strong>, it's quick, <strong>secure</strong>, and intuitive.</p>
              <p><strong>Note:</strong> Before you begin, please ensure your <strong>Trade Wallet</strong> is activated to access <strong>trading functionality</strong>.</p>
              <ol>
                <li>
                  <strong>Activate the Trade Wallet</strong><br>
                  To begin <strong>trading</strong> on <strong>SwiftEx</strong>: Go to the <strong>home tab</strong>. Select the <strong>asset</strong> you’d like to trade. Tap ‘<strong>Trade</strong>’. Follow the prompts to activate your <strong>Trade Wallet</strong>, if it hasn’t been enabled already. Activation is a one-time process and ensures your <strong>wallet</strong> is ready to handle real-time <strong>trading transactions</strong> securely.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958545/kqepxagwpnjhimimqimj_tpru1q.avif" alt="Step 1: Activate Trade Wallet">
                </li>
                <li>
                  <strong>Initiate a Trade</strong><br>
                  From the selected <strong>token</strong> screen, tap the ‘<strong>Trade</strong>’ button. Choose the <strong>token</strong> you want to receive in exchange. Enter the amount of the <strong>token</strong> you'd like to trade. <strong>SwiftEx</strong> will automatically fetch the best market routes and <strong>prices</strong> from supported <strong>liquidity providers</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958548/ikwwaafdo3axphrxiph4_tgo3qx.avif" alt="Step 2: Initiate Trade">
                </li>
                <li>
                  <strong>Review Quotes</strong><br>
                  After entering the <strong>trade amount</strong>, you’ll be presented with real-time <strong>quotes</strong> sourced from multiple <strong>decentralized</strong> and <strong>cross-chain liquidity providers</strong>. <strong>Quotes</strong> are displayed in order of <strong>value</strong> and <strong>speed</strong> to help you make the most efficient decision. Always double-check the <strong>exchange rate</strong> and estimated <strong>fees</strong> before proceeding.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958549/itzuuxbit2mzalc2udzp_qw0xav.avif" alt="Step 3: Review Quotes">
                </li>
                <li>
                  <strong>Approve the Trade</strong><br>
                  Once satisfied with the <strong>quote</strong>, tap the ‘<strong>Approve</strong>’ button to confirm the <strong>trade</strong>. You may be asked to confirm the <strong>transaction</strong> via <strong>PIN</strong>, <strong>biometric ID</strong>, or an additional <strong>approval method</strong> depending on your <strong>wallet security settings</strong>. All <strong>transactions</strong> are secured <strong>on-chain</strong> and visible via <strong>blockchain explorers</strong> after execution.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958550/jsngkqv0ciunzfz7iini_xp4ath.avif" alt="Step 4: Approve Trade">
                </li>
                <li>
                  <strong>Get Confirmation</strong><br>
                  Once your <strong>trade</strong> is executed, you’ll receive an in-app <strong>confirmation</strong> and <strong>push notification</strong>. You can view the updated <strong>balance</strong> in your <strong>Home tab</strong> and check the <strong>transaction history</strong> under the ‘<strong>Activity</strong>’ section.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958551/hxqj06l2twr7ii40mnfs_cxta58.avif" alt="Step 5: Get Confirmation">
                </li>
              </ol>
            `,
            keywords: ['trade', 'spot trading', 'crypto', 'trade wallet', 'swiftex'],
            relatedArticles: ['swapping-assets', 'large-order-trade', 'usdc-import'],
            path: '/instant-trade',
          },
        ],
      },
    ],
  },
  {
    id: 'spottrading',
    name: 'How to Do Spot Trading Via SwiftEx',
    path: '/spot-trading',
    description:
      'Explore <strong>trading features</strong> in <strong>SwiftEx</strong>, including <strong>swapping</strong>, <strong>spot trading</strong>, and <strong>large order trading</strong>.',
    subtopics: [
      {
        id: 'instant-trading',
        name: 'Instant Trading',
        articles: [
          {
            id: 'instant-trade',
            title: 'How to Place a Instant Trade',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p>The <strong>Instant Trade</strong> feature on <strong>SwiftEx</strong> allows you to quickly swap between supported <strong>token pairs</strong> with real-time <strong>market execution</strong>. It’s ideal for users who want fast conversions without navigating complex <strong>order books</strong> or <strong>charts</strong>.</p>
              <h3><strong>Note:</strong> This feature requires <strong>Trade Wallet</strong> activation before use.</h3>
              <p>Follow these simple steps to quickly swap one <strong>cryptocurrency</strong> for another using the <strong>Instant Trade</strong> feature:</p>
              <h3>Step 1: Navigate to Instant Trade</h3>
              <p>From the default <strong>Wallet screen</strong>, tap on the <strong>‘Exchange’ tab</strong> in the bottom navigation menu.<br>
              On the <strong>Exchange screen</strong>, select the <strong>‘Trade’ option</strong>, and then choose <strong>‘Instant Trade’</strong>.<br>
              <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1755954335/instanttrade_y9yjml.webp" alt="Step 1: Access Instant Trade"></p>
              <h3>Step 2: Select Your Trading Pair</h3>
              <p>Within the <strong>Instant Trade</strong> interface:<br>
              • Choose the <strong>cryptocurrency</strong> you wish to <strong>sell</strong> (e.g., <strong>BTC</strong>, <strong>ETH</strong>).<br>
              • Choose the <strong>cryptocurrency</strong> you wish to <strong>buy</strong> (e.g., <strong>USDT</strong>, <strong>USDC</strong>).<br>
              You can initiate <strong>trades</strong> between any supported <strong>crypto pairs</strong>, subject to the available <strong>liquidity</strong> in the <strong>network</strong>.<br>
              <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752071039/instanttrade2_elu6ei.avif" alt="Step 2: Select Trading Pair"></p>
              <h3>Step 3: Enter Transaction Amount</h3>
              <p>Enter the amount of the <strong>cryptocurrency</strong> you intend to <strong>sell</strong> or the amount of the <strong>cryptocurrency</strong> you wish to <strong>buy</strong>.<br>
              The system will automatically calculate the corresponding equivalent value for the other <strong>cryptocurrency</strong>, based on real-time <strong>market rates</strong>.<br>
              <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752071039/instanttrade3_mfk1m9.avif" alt="Step 3: Enter Amount"></p>
              <h3>Step 4: Review Your Trade Details</h3>
              <p>Before confirming, carefully review all the <strong>trade information</strong> presented:<br>
              • <strong>Exchange Rate</strong>: The current conversion rate between your selected <strong>tokens</strong>.<br>
              • <strong>Slippage Tolerance</strong>: The maximum percentage change in <strong>price</strong> you are willing to accept during execution.<br>
              • <strong>Estimated Network Fee</strong>: The approximate cost for processing the <strong>transaction</strong> on the <strong>blockchain</strong>.<br>
              • <strong>Minimum Received</strong>: The minimum amount of the <strong>buy</strong> <strong>token</strong> you are expected to receive.<br>
              It's crucial to ensure that the <strong>exchange rate</strong> and <strong>network fees</strong> meet your expectations before proceeding with the <strong>swap</strong>.<br>
              <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752071040/instanttrade4_oj0ue9.avif" alt="Step 4: Review Trade Details"></p>
              <h3>Step 5: Confirm Your Instant Swap</h3>
              <p>Once you have verified all details and are satisfied, tap <strong>‘Swap Token’</strong> to finalize and initiate your <strong>trade</strong>.<br>
              Your <strong>instant swap</strong> will be executed at the best available <strong>market price</strong>, drawing real-time <strong>quotes</strong> from our integrated <strong>liquidity providers</strong>.<br>
              After a successful <strong>transaction</strong>, you can check the full details in your <strong>Transaction History</strong>.<br>
              <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752071041/instanttrade5_vkrcw3.avif" alt="Step 5: Confirm Swap"></p>
            `,
            keywords: [
              'instant trade',
              'quick swap',
              'crypto exchange',
              'swiftex trade',
              'cryptocurrency swap',
              'trading pairs',
            ],
            relatedArticles: ['large-order-trade', 'swapping-assets', 'usdc-import'],
            path: '/instant-trade',
          },
        ],
      },
      {
        id: 'large-order-trading',
        name: 'Large Order Trading',
        articles: [
          {
            id: 'large-order-trade',
            title: 'How to Place a Large Order Trade',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p>The <strong>Large Order Trade</strong> feature is designed for users who want greater control over their <strong>trades</strong>. It allows you to place custom <strong>buy</strong> or <strong>sell</strong> offers for high-volume <strong>transactions</strong> at your desired <strong>price</strong>, making it ideal for strategic <strong>trading decisions</strong>.</p>
              <h3><strong>Note:</strong> This feature requires <strong>Trade Wallet</strong> activation before use.</h3>
              <p>Follow the steps below to place a custom <strong>trade offer</strong> using the <strong>Large Order Trade</strong> option:</p>
              <h3>How to Place a Large Order Trade</h3>
              <ol>
                <li>
                  <strong>Navigate to Large Order Trade</strong><br>
                  From the default <strong>Wallet screen</strong>, tap on the <strong>‘Exchange’ tab</strong> in the bottom navigation menu.<br>
                  On the <strong>Exchange screen</strong>, select the <strong>‘Trade’ option</strong>, and then choose <strong>‘Large Order Trade’</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1755954336/largeorder_i51jpd.webp" alt="Step 1: Navigate to Large Order Trade">
                </li>
                <li>
                  <strong>Choose Trading Pair and Order Type</strong><br>
                  Select the <strong>cryptocurrency pair</strong> you wish to trade (e.g., <strong>ETH</strong>/<strong>USDC</strong>). Then, specify whether you want to place a <strong>Buy</strong> or <strong>Sell</strong> order.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752071546/largeordertrade2_cynlsn.avif" alt="Step 2: Choose Trading Pair">
                </li>
                <li>
                  <strong>Set Custom Price and Amount</strong><br>
                  Enter the exact amount of the <strong>asset</strong> you intend to <strong>buy</strong> or <strong>sell</strong>.<br>
                  Next, define your desired <strong>price</strong> at which you want the <strong>trade</strong> to execute. This flexibility allows you to precisely target specific <strong>market conditions</strong> that align with your <strong>trading strategy</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752071509/largeorder4_ndhezo.avif" alt="Step 3: Set Price">
                </li>
                <li>
                  <strong>Create Your Offer</strong><br>
                  Tap <strong>‘Create Offer’</strong> to submit your custom <strong>trade</strong>. Your <strong>offer</strong> will be promptly listed in the <strong>order book</strong> and will remain active until it is fully filled, modified, or you manually cancel it.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752071512/largeorder5_gyogzd.avif" alt="Step 4: Create Offer">
                </li>
              </ol>
              <h3>Managing Your Offers</h3>
              <p>You can easily view, edit, or delete your active <strong>trade offers</strong> at any time by visiting the <strong>‘Offers’ section</strong> within the app. This provides you with complete control over your ongoing <strong>large orders</strong>, eliminating the need to repeatedly resubmit <strong>trades</strong>.</p>
              <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752071555/largeorder6_urjr7o.avif" alt="Manage Offers">
            `,
            keywords: [
              'large order',
              'trade',
              'crypto',
              'order book',
              'swiftex',
              'high-volume trading',
              'custom price',
            ],
            relatedArticles: ['swapping-assets', 'instant-trade', 'usdc-import'],
            path: '/large-order-trade',
          },
        ],
      },
    ],
  },
  {
    id: 'asset-management',
    name: 'Asset Management',
    path: '/asset-management',
    description:
      'Manage your <strong>crypto assets</strong>, including adding <strong>custom tokens</strong>, importing <strong>USDC</strong>, and handling <strong>exchange wallets</strong> in <strong>SwiftEx</strong>.',
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
              <p><strong>SwiftEx</strong> allows you to add any <strong>custom token</strong> that may not already be listed by default. This feature is especially helpful when managing newer or less common <strong>tokens</strong> within supported <strong>networks</strong> like <strong>Ethereum</strong> or <strong>Binance Smart Chain</strong>. If you’re holding <strong>tokens</strong> from a new project or using <strong>custom contracts</strong>, this feature ensures you can still view and manage them securely from within the app.</p>
              <h3>What are Custom Tokens?</h3>
              <p><strong>Custom tokens</strong> are digital <strong>assets</strong> that are not pre-listed in the <strong>SwiftEx app</strong> but can be added manually by providing their <strong>contract address</strong>. These <strong>tokens</strong> operate on <strong>blockchain networks</strong> such as <strong>Ethereum</strong> (<strong>ERC-20</strong>), <strong>Binance Smart Chain</strong> (<strong>BEP-20</strong>), and others supported by <strong>SwiftEx</strong>.</p>
              <h3>How to Add a Custom Token</h3>
              <ol>
                <li>
                  <strong>Go to the Assets Section</strong><br>
                  Open the <strong>SwiftEx app</strong>. Tap on the ‘<strong>Assets</strong>’ tab from the bottom menu.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958610/cgeqcceghezx3uxjeyee_hjo8vh.avif" alt="Step 1: Go to Assets">
                </li>
                <li>
                  <strong>Select the Blockchain Network</strong><br>
                  Choose the <strong>crypto chain</strong> where your <strong>custom token</strong> exists (e.g., <strong>Ethereum</strong>, <strong>BNB Smart Chain</strong>). This ensures that your <strong>token</strong> is registered on the correct <strong>blockchain</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958622/bnjh0cdc0ngca1bpluxk_hmrg3o.avif" alt="Step 2: Select Network">
                </li>
                <li>
                  <strong>Enter the Token Contract Address</strong><br>
                  Tap ‘<strong>Add Asset</strong>’. Paste the full <strong>contract address</strong> of the <strong>token</strong> you'd like to add. The <strong>contract address</strong> is a unique identifier for the <strong>token</strong> and can typically be found on trusted sources like <strong>CoinGecko</strong>, <strong>CoinMarketCap</strong>, or the project’s official website.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958632/mwvu9qfpzkltln2mevgo_yks9kr.avif" alt="Step 3: Enter Address">
                </li>
                <li>
                  <strong>Confirm & Add</strong><br>
                  Once the <strong>contract address</strong> is verified, <strong>SwiftEx</strong> will auto-fill details like <strong>token name</strong>, <strong>symbol</strong>, and <strong>decimals</strong>. Tap ‘<strong>Add Asset</strong>’ to complete the process.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958627/zw5tep0m1a1ebvzag82b_wigwat.avif" alt="Step 4: Confirm Add">
                </li>
                <li>
                  <strong>View Your Token</strong><br>
                  Your <strong>custom token</strong> will now appear in your <strong>Assets section</strong>. You can now <strong>receive</strong>, <strong>send</strong>, or <strong>trade</strong> the <strong>asset</strong> like any other listed <strong>token</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958614/lwzgzz33y7bdg5rza2ly_ghcclv.avif" alt="Step 5: View Token">
                </li>
              </ol>
              <h3>Security Tip</h3>
              <p>When adding <strong>custom tokens</strong>, always verify the authenticity of the <strong>contract address</strong> to avoid adding <strong>scam</strong> or <strong>fraudulent assets</strong>. You can cross-check <strong>token details</strong> via trusted <strong>blockchain explorers</strong> like <strong>Etherscan</strong> or <strong>BscScan</strong>.</p>
            `,
            keywords: ['custom tokens', 'assets', 'contract address', 'blockchain', 'swiftex'],
            relatedArticles: [
              'usdc-import',
              'swapping-assets',
              'send-receive-crypto-send',
              'send-receive-crypto-receive',
            ],
            path: '/add-custom-tokens',
          },
        ],
      },
      {
        id: 'usdc-import',
        name: 'USDC Import',
        articles: [
          {
            id: 'usdc-import',
            title: 'USDC Import & Asset Management in SwiftEx',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p><strong>SwiftEx</strong> allows seamless management of your <strong>USDC holdings</strong> and other <strong>assets</strong> directly through the app’s <strong>Exchange interface</strong>. Whether you’re preparing to <strong>trade</strong>, <strong>swap</strong>, or hold, importing <strong>USDC</strong> to your <strong>Trade Wallet</strong> is fast and efficient. Please note: This feature requires <strong>Trade Wallet</strong> activation before use.</p>
              <h3>What Is USDC Import?</h3>
              <p><strong>USDC</strong> (<strong>USD Coin</strong>) is one of the most commonly used <strong>stablecoins</strong> in <strong>crypto trading</strong>. <strong>SwiftEx</strong> enables you to import <strong>USDC</strong> from your <strong>wallet</strong> to your <strong>Trade Wallet</strong> so it can be used for <strong>spot trades</strong>, <strong>swaps</strong>, or <strong>large-order executions</strong> directly on the platform.</p>
              <h3>How to Import USDC</h3>
              <ol>
                <li>
                  <strong>Go to the Exchange Tab</strong><br>
                  Open the <strong>SwiftEx App</strong>. Tap on the ‘<strong>Exchange</strong>’ tab from the bottom navigation bar.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958625/m4g9f1oxwprkalu5apv8_vt8knb.avif" alt="Step 1: Go to Exchange">
                </li>
                <li>
                  <strong>Tap on Import USDC</strong><br>
                  Look for the ‘<strong>Import USDC</strong>’ button on the screen. Tap it to begin the <strong>import process</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1755954341/importusdc_qtu8ze.webp" alt="Step 2: Import USDC">
                </li>
                <li>
                  <strong>Select Your Network and Asset</strong><br>
                  Choose the <strong>blockchain network</strong> where your <strong>USDC</strong> is currently held (e.g., <strong>Ethereum</strong>, <strong>BSC</strong>, <strong>Polygon</strong>). Confirm the correct <strong>asset type</strong> (<strong>USDC</strong>).<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958616/awf27rbpj3gbp7w6htth_r5cndm.avif" alt="Step 3: Select Network">
                </li>
                <li>
                  <strong>Enter Amount to Import</strong><br>
                  Specify the amount of <strong>USDC</strong> you’d like to transfer into your <strong>Trade Wallet</strong>. Ensure you have enough <strong>gas/native token</strong> in your sending <strong>wallet</strong> to cover the <strong>transaction fee</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958611/ychjciicpb595xtgwepp_sjbeya.avif" alt="Step 4: Enter Amount">
                </li>
                <li>
                  <strong>Review the Quote</strong><br>
                  <strong>SwiftEx</strong> will fetch real-time <strong>quotes</strong> from available providers to give you the best possible <strong>rate</strong> and <strong>execution path</strong>. Carefully check the <strong>exchange rate</strong> and expected final <strong>balance</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958633/bba3nkwb3zrxcy5jvlq4_ovuoxd.avif" alt="Step 5: Review Quote">
                </li>
                <li>
                  <strong>Confirm the Import</strong><br>
                  Once satisfied, tap ‘<strong>Confirm</strong>’ to finalize the <strong>transaction</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958634/tpoaktsey96oybtwyxrb_xl03xi.avif" alt="Step 6: Confirm Import">
                </li>
                <li>
                  <strong>USDC Received in Trade Wallet</strong><br>
                  After <strong>confirmation</strong>, your imported <strong>USDC</strong> will reflect in your <strong>Trade Wallet</strong> under the ‘<strong>Assets</strong>’ section. It’s now available for <strong>trading</strong>, <strong>swapping</strong>, or <strong>transferring</strong>.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958623/bkfmbakpp97u9nqclgpw_embak6.avif" alt="Step 7: USDC Received">
                </li>
              </ol>
            `,
            keywords: ['usdc', 'import', 'trade wallet', 'stablecoin', 'swiftex'],
            relatedArticles: ['swapping-assets', 'instant-trade', 'large-order-trade'],
            path: '/usdc-import',
          },
        ],
      },
      {
        id: 'exchange-wallet',
        name: 'Exchange Wallet',
        articles: [
          {
            id: 'exchange-wallet',
            title: 'Send & Receive from Exchange Wallet in SwiftEx',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p>Once your Trade Wallet is activated on SwiftEx, you can send and receive assets directly from the Exchange Wallet with ease. This enables seamless on-chain transfers for supported tokens, helping you manage your portfolio efficiently.</p>
              <h3>Sending Crypto from Trade Wallet</h3>
              <p>If you’d like to send tokens directly from your Exchange Wallet, follow the steps below:</p>
              <ol>
                <li>
                  <strong>Go to the Assets Section</strong><br>
                  Open the SwiftEx App. Tap on the ‘Exchange’ tab at the bottom. Navigate to the ‘Assets’ section.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1755954340/assets_sb1nc3.webp" alt="Step 1: Go to Assets">
                </li>
                <li>
                  <strong>Choose the Token</strong><br>
                  Select the specific crypto asset you wish to send from your Trade Wallet (e.g., USDC, ETH, XLM).<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958616/sgnjogy584r8go2y612n_yfwjvq.avif" alt="Step 2: Choose Token">
                </li>
                <li>
                  <strong>Enter Transaction Details</strong><br>
                  Input the recipient’s wallet address carefully. Enter the amount you wish to send.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958613/s8r1vnt1lqqx2nobyikr_hzchmr.avif" alt="Step 3: Enter Details">
                </li>
                <li>
                  <strong>Confirm and Send</strong><br>
                  Tap the ‘Send’ button. Review the summary of your transaction. Tap ‘Confirm’ to authorize the transfer. Double-check the wallet address before sending. Crypto transactions are irreversible once processed.<br>
                </li>
              </ol>
              <h3>Receiving Crypto into Trade Wallet</h3>
              <p>Want to receive crypto directly into your SwiftEx Exchange Wallet? Here’s how:</p>
              <ol>
                <li>
                  <strong>Go to the Receive Section</strong><br>
                  Tap on the ‘Assets’ tab under Exchange.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958621/uk7ktlbicdsahriu0ka1_fnbaq8.avif" alt="Step 1: Go to Assets">
                </li>
                <li>
                  <strong>Select the Token</strong><br>
                  Choose the token you’d like to receive (e.g., USDT, USDC, ETH). Tap ‘Receive’ on the top menu. You will be shown a QR code and a wallet address specific to that token.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958616/sgnjogy584r8go2y612n_yfwjvq.avif" alt="Step 2: Select Token">
                </li>
                <li>
                  <strong>Share Your Address</strong><br>
                  Copy the address or share the QR code with the sender. Wait for the transaction to be confirmed on-chain. Ensure the sender uses the correct blockchain network and token version when transferring.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1752073164/recive_nervyw.avif" alt="Step 3: Share Address">
                </li>
              </ol>
              <h3>Security Reminder</h3>
              <p>Receiving and sending assets from your Trade Wallet requires network-specific wallet addresses. Always confirm the network compatibility before initiating transactions.</p>
            `,
            keywords: ['exchange wallet', 'send', 'receive', 'crypto', 'swiftex'],
            relatedArticles: [
              'usdc-import',
              'send-receive-crypto-send',
              'send-receive-crypto-receive',
              'add-custom-tokens',
            ],
            path: '/exchange-wallet',
          },
        ],
      },
      {
        id: 'add-new-assets',
        name: 'Add New Assets',
        articles: [
          {
            id: 'add-new-assets',
            title: 'Adding New Assets to Your Trade Wallet in SwiftEx',
            modifiedDate: 'Fri, 20 Jun 2025 at 11:27 AM',
            content: `
              <p>SwiftEx allows you to expand your portfolio by adding more crypto tokens to your Trade Wallet. Whether it's a popular token or a custom one with a contract address, the process is quick and secure. Please note: This feature requires Trade Wallet activation before use.</p>
              <h3>What Is the 'Add Asset' Feature?</h3>
              <p>The Add Asset functionality enables you to manually include supported or custom tokens in your wallet, making them visible and available for trade, swap, or transfer. This is useful for tokens not pre-listed in your default wallet view.</p>
              <h3>How to Add a New Asset</h3>
              <ol>
                <li>
                  <strong>Navigate to the Assets Section</strong><br>
                  Open the SwiftEx App. Tap on the ‘Exchange’ tab at the bottom. Go to the ‘Assets’ section.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1755954340/assets_sb1nc3.webp" alt="Step 1: Go to Assets">
                </li>
                <li>
                  <strong>Tap ‘Add Asset’</strong><br>
                  On the Assets screen, locate and tap on ‘Add Asset’ at the top or bottom of the list.<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958608/pwrpxt8ltab2daxvac9j_r9ylpg.avif" alt="Step 2: Tap Add Asset">
                </li>
                <li>
                  <strong>Search or Add Manually</strong><br>
                  Browse through the list of available tokens supported on your selected chain. Ensure the contract address is accurate and corresponds to the correct blockchain (e.g., Ethereum, BSC, Polygon).<br>
                  <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1751958619/etkbrdjbixedp2xayvjc_kts2st.avif" alt="Step 3: Search or Add">
                </li>
                <li>
                  <strong>Confirm and Add</strong><br>
                  Tap ‘Add’ to complete the process. The token will now appear under your Assets section in the Exchange Wallet.<br>
                </li>
              </ol>
              <h3>Security Tip</h3>
              <p>When adding custom tokens, always verify the authenticity of the contract address to avoid adding scam or fraudulent assets. You can cross-check token details via trusted blockchain explorers like Etherscan or BscScan.</p>
            `,
            keywords: ['add asset', 'custom tokens', 'trade wallet', 'blockchain', 'swiftex'],
            relatedArticles: ['add-custom-tokens', 'usdc-import', 'swapping-assets'],
            path: '/add-new-assets',
          },
        ],
      },
    ],
  },
  {
    id: 'on-off-ramp',
    name: 'On/Off Ramp',
    path: '/on-off-ramp',
    description:
      'Learn how to <strong>buy</strong> and <strong>sell cryptocurrencies</strong> using fiat currency in the <strong>SwiftEx App</strong>, complete <strong>KYC verification</strong>, and view <strong>transaction history</strong> securely.',
    subtopics: [
      {
        id: 'buy-crypto',
        name: 'Buy Crypto',
        articles: [
          {
            id: 'buy-crypto',
            title: 'Buy/On-Ramping Assets',
            modifiedDate: 'Mon, 01 Sep 2025 at 10:36 AM',
            content: `
            <p><strong>SwiftEx</strong> enables users to purchase <strong>cryptocurrencies</strong> using fiat currency through its <strong>On/Off Ramp</strong> feature. This guide walks you through the process, ensuring a seamless and secure experience.</p>
            <h3>Prerequisites</h3>
            <p>For transactions above a certain amount (e.g., $50, varies by region; check <strong>Alchemy Pay</strong> documentation), <strong>KYC verification</strong> is required.</p>
            <h3>How to Buy Crypto with On-Ramp</h3>
            <ol>
              <li>
                <strong>Access the On/Off Ramp Section</strong><br>
                Open the <strong>SwiftEx App</strong>. Navigate to the <strong>Exchange</strong> tab and select the <strong>On/Off Ramp</strong> section.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756207138/onofframpselection_v3o9fi.webp" alt="Step 1: Access On/Off Ramp Section">
              </li>
              <li>
                <strong>Choose a Provider</strong><br>
                Select a trusted provider (e.g., <strong>Alchemy Pay</strong>) to handle fiat-to-crypto conversion securely.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756207136/provider_kpbtmc.avif" alt="Step 2: Choose Provider">
              </li>
              <li>
                <strong>Select Currencies and Payment Method</strong><br>
                <ul> 
                 <li> <strong>Buy</strong> tab is selected by default.</li>
                  <li>Choose your fiat currency (e.g., USD, INR, or other region-specific fiat currencies supported by the provider).</li>
                  <li>Select the cryptocurrency to buy (e.g., <strong>Bitcoin</strong>, <strong>Ethereum</strong>).</li>
                  <li>Pick a payment method based on your region (e.g., Credit/Debit Card, Bank Transfer, UPI, or other local payment options; check with the provider for available methods).</li>
                </ul>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756703923/buyslectfiatandcoin_y3nl8q.webp" alt="Step 3: Select Currencies and Payment Method">
              </li>
              <li>
                <strong>Enter Transaction Details</strong><br>
                Input the fiat amount you want to spend. The equivalent crypto amount is calculated based on real-time rates. Review the summary (rates, fees, estimated delivery time).<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756207134/Enteramount_xtspqr.avif" alt="Step 4: Enter Transaction Details">
              </li>
              <li>
                <strong>Complete Your Purchase</strong><br>
                Tap <strong>Buy Now</strong>. If the transaction exceeds the no-KYC limit (e.g., $50, varies by region), complete <strong>KYC</strong> (see KYC Verification section). Enter payment details, review the final summary, and tap <strong>Confirm</strong>. Crypto will be credited to your wallet.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756207326/buycryptoalchmeypay_q5tm9f.webp" alt="Step 5: Complete Purchase">
              </li>
            </ol>
            <h3>Post-Purchase</h3>
            <p>After a successful transaction, view details in the <strong>Settings</strong> section under <strong>Transaction History</strong>.</p>
            <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756704217/reciveEth_ip84m2.webp" alt="Step 6: Transction History">
            <h3>Security Note</h3>
            <p>All transactions are processed securely by trusted providers, with data encrypted and compliant with global standards (e.g., <strong>GDPR</strong>, <strong>CCPA</strong>).</p>
          `,
            keywords: ['buy crypto', 'fiat currency', 'on-ramp', 'swiftex', 'wallet'],
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
            title: 'Sell/Off-Ramping Assets',
            modifiedDate: 'Mon, 01 Sep 2025 at 10:36 AM',
            content: `
            <p><strong>SwiftEx</strong> allows users to sell <strong>cryptocurrencies</strong> for fiat currency through its <strong>On/Off Ramp</strong> feature, with funds credited to your chosen payout method. This guide covers the process, including special steps for selling <strong>Ethereum (ETH)</strong>.</p>
            <h3>Prerequisites</h3>
            <p><strong>KYC verification</strong> is mandatory for all sell transactions, regardless of amount.</p>
            <h3>How to Sell Crypto with Off-Ramp</h3>
            <ol>
              <li>
                <strong>Access the On/Off Ramp Section</strong><br>
                Open the <strong>SwiftEx App</strong> and navigate to the <strong>On/Off Ramp</strong> section via the <strong>Exchange</strong> tab.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756207138/onofframpselection_v3o9fi.webp" alt="Step 1: Access On/Off Ramp Section">
              </li>
              <li>
                <strong>Choose a Provider</strong><br>
                Select a trusted provider (e.g., <strong>Alchemy Pay</strong>) for crypto-to-fiat conversion.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756207136/provider_kpbtmc.avif" alt="Step 2: Choose Provider">
              </li>
              <li>
                <strong>Select Currencies and Payout Method</strong><br>
                <ul> 
                 <li>Switch to the <strong>Sell</strong> tab. </li>
                  <li>Choose the cryptocurrency to sell (e.g., <strong>Bitcoin</strong>, <strong>Ethereum</strong>).</li>
                  <li>Select the fiat currency to receive (e.g., USD, INR, or other region-specific fiat currencies supported by the provider).</li>
                  <li>Choose a payout method based on your region (e.g., Bank Transfer, UPI, or other local payment options; check with the provider for available methods).</li>
                </ul>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756704399/sellcryptofiat_pywaqo.webp" alt="Step 3: Select Currencies and Payout Method">
              </li>
              <li>
                <strong>Enter Transaction Details</strong><br>
                Enter the crypto amount to sell. The equivalent fiat amount is auto-calculated using real-time rates. Review the summary (rates, fees, estimated delivery time).<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756704842/sellamount_dqqtgu.avif" alt="Step 4: Enter Transaction Details">
              </li>
              <li>
                <strong>Complete Your Sale</strong><br>
                Tap <strong>Sell Now</strong>. If not already completed, complete <strong>KYC</strong> (see KYC Verification section). Enter payout details, review the final summary, and tap <strong>Confirm</strong> to initiate the sale.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756705628/sell_o0wepv.webp" alt="Step 5: Complete Sale">
              </li>
              <li>
                <strong>Send ETH (if applicable)</strong><br>
                If selling <strong>Ethereum (ETH)</strong>, you’ll receive an ETH address to transfer your ETH. Go to the <strong>Send</strong> section in the <strong>SwiftEx App</strong>, select the ETH chain, add the provided ETH address, enter the ETH amount, and confirm the transfer. Fiat will be credited upon successful transfer.<br>
                <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756705694/ethsale_p7mvvp.webp" alt="Step 6: Send ETH">
              </li>
            </ol>
            <h3>Post-Sale</h3>
            <p>After a successful sale, view details in the <strong>Settings</strong> section under <strong>Transaction History</strong>.</p>
                            <img src="https://res.cloudinary.com/dz1xabyjf/image/upload/v1756705827/sellcrypto_ynqrg9.avif" alt="Step 7: history">
            <h3>Security Note</h3>
            <p>All transactions are processed securely by trusted providers, with data encrypted and compliant with global standards (e.g., <strong>GDPR</strong>, <strong>CCPA</strong>).</p>
          `,
            keywords: ['sell crypto', 'fiat currency', 'off-ramp', 'swiftex', 'wallet'],
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
            <p><strong>KYC (Know Your Customer)</strong> verification is required for certain buy transactions (above a certain amount, e.g., $50, varies by region) and all sell transactions in the <strong>SwiftEx App</strong>. This process ensures compliance and security, managed by trusted third-party providers like <strong>Alchemy Pay</strong>.</p>
            <h3>Why KYC is Needed</h3>
            <p>KYC ensures:<br>
            - Protection against fraud and money laundering.<br>
            - Compliance with local and international regulations.<br>
            - Security for your account and transactions.</p>
            <p><strong>SwiftEx</strong> does not directly store user data; all KYC data is managed securely by third-party providers, encrypted and compliant with global standards (e.g., <strong>GDPR</strong>, <strong>CCPA</strong>).</p>
            <h3>Required Documents</h3>
            <p>- <strong>Photo ID</strong>: Valid passport, national ID, or driver’s license.<br>
            - <strong>Proof of Address</strong>: Recent utility bill, bank statement, or government-issued residency document (e.g., Aadhaar in India or equivalent).<br>
            - <strong>Live Selfie/Video</strong>: A selfie or short video holding your ID to verify identity.</p>
            <h3>KYC Process</h3>
            <ol>
              <li>
                <strong>Start Verification</strong><br>
                During a buy (if above the no-KYC limit) or sell transaction, you’ll be prompted to complete KYC via the third-party provider’s interface in the <strong>SwiftEx App</strong>.<br>
              </li>
              <li>
                <strong>Upload Documents</strong><br>
                Submit clear, legible images of required documents as guided by the provider.<br>
              </li>
              <li>
                <strong>Complete Selfie Check</strong><br>
                Follow prompts to take a live selfie or video with your ID.<br>
              </li>
              <li>
                <strong>Await Approval</strong><br>
                Documents are reviewed by the third-party provider within 24-48 hours. You’ll be notified via app or email.<br>
              </li>
            </ol>
            <h3>Notes</h3>
            <p>- KYC is a one-time process unless additional checks are needed (e.g., regulatory updates).<br>
            - For buy transactions, small amounts (e.g., up to $50) may not require KYC; check <strong>Alchemy Pay</strong> for current limits.<br>
            - Contact support via the <strong>SwiftEx App</strong> or email for issues.</p>
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
            <p>After completing a buy or sell transaction in the <strong>SwiftEx App</strong>, you can view all transaction details, including dates, amounts, currencies, and status.</p>
            <h3>How to View Transaction History</h3>
            <ol>
              <li>
                <strong>Navigate to Settings</strong><br>
                Open the <strong>SwiftEx App</strong> and go to the <strong>Settings</strong> section.<br>
              </li>
              <li>
                <strong>Select Transaction History</strong><br>
                Tap <strong>Transaction History</strong> to view a complete list of your transactions.<br>
              </li>
            </ol>
            <h3>Contact Support</h3>
            <p>For help with viewing transaction history or any issues, reach out via the <strong>SwiftEx App</strong> or email support.</p>
          `,
            keywords: ['transaction history', 'swiftex', 'settings', 'transactions'],
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
              'send-receive-crypto-send',
              'send-receive-crypto-receive',
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
              'send-receive-crypto-send',
              'send-receive-crypto-receive',
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
