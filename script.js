const quizData = [
  {
    question: "What is a primary reason to study blockchain technology?",
    a: "For digital marketing",
    b: "To understand decentralized systems",
    c: "For database management",
    d: "For graphic designing",
    correct: "b",
  },
  {
    question: "Blockchain is primarily known as:",
    a: "A social network",
    b: "A type of cryptocurrency",
    c: "An immtutable, distributed ledger technology",
    d: "An operating system",
    correct: "c",
  },
  {
    question:
      "Which of the following is an application of blockchain technology?",
    a: "Video streaming",
    b: "Supply chain management",
    c: "Photo editing",
    d: "Email services",
    correct: "b",
  },
  {
    question: "What is a hashing algorithm primarily used for in blockchain?",
    a: "Generating passwords",
    b: "Data encryption",
    c: "Improving graphics",
    d: "Speeding up transactions",
    correct: "b",
  },
  {
    question: "What does an immutable ledger in blockchain ensure?",
    a: "Unlimited data storage",
    b: "Irreversible record of transactions",
    c: "Faster data processing",
    d: "User anonymity",
    correct: "b",
  },
  {
    question: "P2P stands for:",
    a: "Price to Performance",
    b: "Private to Public",
    c: "Peer to Peer",
    d: "Performance to Power",
    correct: "c",
  },
  {
    question: "A distributed P2P network in blockchain helps in:",
    a: "Centralizing data",
    b: "Reducing security",
    c: "Decentralizing the network",
    d: "Increasing transaction costs",
    correct: "c",
  },
  {
    question: "What is a key component of blockchain mining?",
    a: "Video editing",
    b: "Verifying and adding transactions to the blockchain",
    c: "Social media management",
    d: "Developing mobile applications",
    correct: "b",
  },
  {
    question:
      "The Byzantine Generals Problem in blockchain refers to issues related to:",
    a: "Game theory",
    b: "Fault tolerance in distributed systems",
    c: "Economic forecasting",
    d: "Cryptocurrency pricing",
    correct: "b",
  },
  {
    question: "Proof of Work in blockchain is a:",
    a: "Consensus mechanism",
    b: "Data encryption method",
    c: "Database structure",
    d: "Networking protocol",
    correct: "a",
  },
  {
    question: "The main difference between Bitcoin and blockchain is:",
    a: "Bitcoin is a type of blockchain",
    b: "Bitcoin uses blockchain technology",
    c: "Blockchain is a digital currency",
    d: "Blockchain is a type of Bitcoin",
    correct: "b",
  },
  {
    question: "Bitcoin's monetary policy is characterized by:",
    a: "Unlimited supply",
    b: "Regular government audits",
    c: "Fixed supply limit",
    d: "Fluctuating values based on stock market",
    correct: "c",
  },
  {
    question: "In Bitcoin mining, a nonce is a:",
    a: "Type of digital wallet",
    b: "Number used once in cryptographic computations",
    c: "Name of a mining software",
    d: "Form of digital currency",
    correct: "b",
  },
  {
    question: "In the context of mining, CPU, GPU, and ASIC are:",
    a: "Cryptocurrency regulations",
    b: "Types of mining hardware",
    c: "Digital wallet types",
    d: "Blockchain protocols",
    correct: "b",
  },
  {
    question: "A mining pool in blockchain is:",
    a: "A collection of cryptocurrencies",
    b: "A group of miners combining their computing power",
    c: "A digital currency exchange platform",
    d: "A type of blockchain algorithm",
    correct: "b",
  },
  {
    question: "In blockchain, a timestamp is used to:",
    a: "Indicate the miner's location",
    b: "Record the exact time of a transaction",
    c: "Set the price of cryptocurrencies",
    d: "Measure the speed of mining",
    correct: "b",
  },
  {
    question: "In blockchain, mempool stands for:",
    a: "Memory Pool, a collection of unconfirmed transactions",
    b: "Mining equipment pool",
    c: "Memory allocation for blockchain software",
    d: "Monthly earnings pool in mining",
    correct: "a",
  },
  {
    question:
      "The process of mining transactions in blockchain primarily involves:",
    a: "Designing new cryptocurrencies",
    b: "Verifying and adding transactions to the blockchain",
    c: "Exchanging cryptocurrencies",
    d: "Regulating cryptocurrency markets",
    correct: "b",
  },
  {
    question: "In Bitcoin, UTXOs are:",
    a: "User Transaction Outputs",
    b: "Unverified Transaction Objects",
    c: "Unspent Transaction Outputs",
    d: "Unified Transaction Operations",
    correct: "c",
  },
  {
    question: "In blockchain, transaction fees are:",
    a: "Optional donations to miners",
    b: "Fixed costs set by the government",
    c: "Voluntary payments to validate transactions",
    d: "Mandatory taxes on transactions",
    correct: "c",
  },
  {
    question: "In blockchain, a wallet is used to:",
    a: "Store digital currencies",
    b: "Mine new cryptocurrencies",
    c: "Regulate the blockchain network",
    d: "Design new blockchain applications",
    correct: "a",
  },
  {
    question: "In blockchain, private and public keys are used for:",
    a: "Password protection",
    b: "Cryptographic security",
    c: "Data compression",
    d: "Software licensing",
    correct: "b",
  },
  {
    question:
      "In Bitcoin, the difference between a public key and a Bitcoin address is that:",
    a: "A public key is used for mining, while a Bitcoin address is for transactions",
    b: "They are the same",
    c: "A public key is cryptographic, while a Bitcoin address is an identifier derived from the public key",
    d: "A public key is a type of Bitcoin address",
    correct: "c",
  },
  {
    question: "SegWit in Bitcoin is designed to:",
    a: "Increase the block size",
    b: "Reduce the size of transactions",
    c: "Enhance the mining speed",
    d: "Improve wallet security",
    correct: "b",
  },
  {
    question: "An HD wallet in blockchain refers to:",
    a: "High-Definition wallet",
    b: "Hierarchically Deterministic wallet",
    c: "High-Durability wallet",
    d: "High-Demand wallet",
    correct: "b",
  },
  {
    question: "In blockchain, Ethereum differs from Bitcoin in that Ethereum:",
    a: "Only allows verified users to conduct transactions",
    b: "Has no use for smart contracts",
    c: "Incorporates smart contracts and Dapps",
    d: "Uses a completely different cryptographic algorithm",
    correct: "c",
  },
  {
    question: "Types of accounts in Ethereum include:",
    a: "Savings and checking accounts",
    b: "Externally owned accounts (EOA) and contract accounts(CA)",
    c: "Investment and loan accounts",
    d: "Mining and non-mining accounts",
    correct: "b",
  },
  {
    question: "A Smart Contract in blockchain is:",
    a: "A legal document for cryptocurrency trading",
    b: "A contract between miners",
    c: "A self-executing contract with the terms of the agreement written into code",
    d: "A contract for intelligent data processing",
    correct: "c",
  },
  {
    question: "Decentralized Applications (Dapps) in blockchain are:",
    a: "Software that run on a decentralized network and are not controlled by any single entity",
    b: "Applications that are used for digital marketing",
    c: "Applications that require central servers",
    d: "Traditional applications with blockchain branding",
    correct: "a",
  },
  {
    question: "The Ethereum Virtual Machine (EVM) is:",
    a: "A virtual machine for gaming",
    b: "A physical server in Ethereum's headquarters",
    c: "The runtime environment for executing Ethereum smart contracts",
    d: "A tool for mining Ether",
    correct: "c",
  },
  {
    question: "In Ethereum, 'Gas' is:",
    a: "A physical resource like petroleum",
    b: "A fixed unit of computing power",
    c: "The fee required to conduct a transaction or execute a contract",
    d: "A measure of storage space",
    correct: "c",
  },
  {
    question: "Ethereum Gas Price is determined by:",
    a: "The Ethereum Foundation",
    b: "Market demand and supply",
    c: "Fixed rates set annually",
    d: "The number of miners",
    correct: "b",
  },
  {
    question: "The Ethereum Gas Limit is:",
    a: "A cap on the amount of Ether one can own",
    b: "The maximum amount of gas a user is willing to spend on a transaction",
    c: "A limit on the number of transactions per block",
    d: "A fixed value for all transactions",
    correct: "b",
  },
  {
    question: "A Decentralized Autonomous Organization (DAO) in blockchain is:",
    a: "An organization run by a central government",
    b: "A type of cryptocurrency",
    c: "An organization run by smart contracts without central leadership",
    d: "A new type of financial institution",
    correct: "c",
  },
  {
    question: "A Hard Fork in blockchain is:",
    a: "A physical tool used in mining",
    b: "A change that is backward incompatible",
    c: "An easy problem in blockchain technology",
    d: "A type of cryptocurrency wallet",
    correct: "b",
  },
  {
    question: "A Soft Fork in blockchain is:",
    a: "A change that is backward compatible",
    b: "A major upgrade to the system",
    c: "A new version of cryptocurrency",
    d: "A downgrade in the technology",
    correct: "a",
  },
  {
    question: "An Initial Coin Offering (ICO) is:",
    a: "A government-issued certification",
    b: "A type of blockchain",
    c: "A way for new cryptocurrencies to raise initial funding",
    d: "A new cryptocurrency exchange",
    correct: "c",
  },
  {
    question: "Ethereum 2.0, also known as Serenity, includes:",
    a: "The introduction of a new cryptocurrency",
    b: "The discontinuation of smart contracts",
    c: "The implementation of Proof of Stake and sharding",
    d: "A reduction in the number of available Ether",
    correct: "c",
  },
  {
    question: "Sharding in blockchain is used to:",
    a: "Decrease security",
    b: "Increase scalability by splitting the network into smaller parts",
    c: "Create new cryptocurrencies",
    d: "Reduce the value of digital currencies",
    correct: "b",
  },
  {
    question: "Alt Coins refer to:",
    a: "Alternative investments other than cryptocurrencies",
    b: "Cryptocurrencies other than Bitcoin",
    c: "A new type of blockchain technology",
    d: "Coins used in video games",
    correct: "b",
  },
  {
    question:
      "Which cryptographic algorithm is fundamental to the security of most blockchains?",
    a: "RSA encryption",
    b: "SHA-256 hash function",
    c: "AES encryption",
    d: "ECC (Elliptic Curve Cryptography)",
    correct: "b",
  },
  {
    question: "What is a 'Merkle Tree' in the context of blockchain?",
    a: "A tool for visualizing transactions",
    b: "A sequence of cryptographic hashes",
    c: "A structure that summarizes all the transactions in a block",
    d: "An algorithm for mining cryptocurrencies",
    correct: "c",
  },
  {
    question:
      "What distinguishes a 'Permissioned' blockchain from a 'Permissionless' one?",
    a: "The ability to create smart contracts",
    b: "The type of consensus mechanism used",
    c: "The requirement of access control for participating nodes",
    d: "The speed of transactions",
    correct: "c",
  },
  {
    question: "What is 'Layer 2 Scaling' in blockchain technology?",
    a: "A new blockchain protocol",
    b: "A secondary framework built atop an existing blockchain to enhance its scalability and efficiency",
    c: "A method of increasing the size of blocks",
    d: "A technique for changing the consensus mechanism",
    correct: "b",
  },
  {
    question: "In blockchain, what is the 'Double Spending Problem'?",
    a: "A situation where a user spends the same cryptocurrency twice",
    b: "The issue of transaction fees being too high",
    c: "A scenario where block rewards are doubled",
    d: "The duplication of smart contracts",
    correct: "a",
  },
  {
    question:
      "What does 'Zero-Knowledge Proof' enable in blockchain transactions?",
    a: "Faster transaction speeds",
    b: "The ability to prove the validity of a transaction without revealing any details about it",
    c: "Increased rewards for miners",
    d: "Reduction in transaction fees",
    correct: "b",
  },
  {
    question: "What is 'Atomic Swap' in the context of blockchain?",
    a: "A procedure for upgrading blockchain software",
    b: "A smart contract technology that enables the exchange of one cryptocurrency for another without using centralized intermediaries",
    c: "A type of consensus mechanism",
    d: "A rapid mining technique",
    correct: "b",
  },
  {
    question: "What is the primary purpose of 'Oracles' in blockchain?",
    a: "To predict cryptocurrency prices",
    b: "To generate new blocks",
    c: "To provide external data to smart contracts",
    d: "To enhance blockchain security",
    correct: "c",
  },
  {
    question: "In blockchain, what is a '51% Attack'?",
    a: "An attack where a single entity gains control of more than half of the network's mining power, potentially causing network disruption",
    b: "A cyber attack on 51 major cryptocurrencies",
    c: "A fault in the blockchain protocol",
    d: "A scenario where 51% of nodes fail",
    correct: "a",
  },
  {
    question: "What is 'Tokenization' in blockchain?",
    a: "Splitting a blockchain into smaller parts",
    b: "Turning a physical asset into a digital token",
    c: "Creating new cryptocurrencies",
    d: "Encrypting tokens for security",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let startTime;

function startTimer() {
  startTime = new Date();
}

function getTimeTaken() {
  const endTime = new Date();
  const timeTaken = new Date(endTime - startTime);
  const minutes = timeTaken.getUTCMinutes();
  const seconds = timeTaken.getUTCSeconds();
  return { minutes, seconds };
}

// Start the timer as soon as the quiz data loads
startTimer();

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      const { minutes, seconds } = getTimeTaken(); // Get the time taken
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <h2>In ${minutes} Minutes and ${seconds} Seconds.</h2>
        <button onclick="window.location.href='https://certificate-nu.vercel.app/'">Now Generate Certificate.</button>
      `;
    }
  }
});

// Remember to call loadQuiz to start the quiz!
loadQuiz();
