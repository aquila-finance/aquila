import "@agoric/zoe";
import "./gif-interface/contracts/components/IProduct.sol";
import "./gif-interface/contracts/components/Component.sol";
import "./gif-interface/contracts/modules/IPolicy.sol";
import "./gif-interface/contracts/services/IInstanceService.sol";
import "./gif-interface/contracts/services/IProductService.sol";

// Importing a module in JavaScript
const OtherContract = require('./oracle.js');

// ...

const ethers = require('ethers');

// Connect to the Ethereum network
const provider = new ethers.providers.InfuraProvider('goerli', '3e425e9cd0064ad5b7a62388ca388e32');

async function main() {
    // Get the network ID
    const networkId = await provider.getNetwork();

    // Set the Chainlink Token address
    const chainlinkTokenAddress = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB';
    // Set the Chainlink Oracle address
    const chainlinkOracleAddress = '0xB9756312523826A566e222a34793E414A81c88E1';
    // Set the Chainlink Job ID
    const chainlinkJobId = "7c276986e23b4b1c990d8659bca7a9d0";

    // Interact with the Chainlink contracts


    // Example: Request data from the Chainlink oracle
    const paymentToOracle = 100000000000000000; // 0.1 LINK in wei

}

main().catch(console.error);

const chainlinkTokenABI = [
    [{ "inputs": [{ "internalType": "address", "name": "link", "type": "address" }, { "internalType": "address", "name": "owner", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address[]", "name": "senders", "type": "address[]" }, { "indexed": false, "internalType": "address", "name": "changedBy", "type": "address" }], "name": "AuthorizedSendersChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "requestId", "type": "bytes32" }], "name": "CancelOracleRequest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "specId", "type": "bytes32" }, { "indexed": false, "internalType": "address", "name": "requester", "type": "address" }, { "indexed": false, "internalType": "bytes32", "name": "requestId", "type": "bytes32" }, { "indexed": false, "internalType": "uint256", "name": "payment", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "callbackAddr", "type": "address" }, { "indexed": false, "internalType": "bytes4", "name": "callbackFunctionId", "type": "bytes4" }, { "indexed": false, "internalType": "uint256", "name": "cancelExpiration", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dataVersion", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "OracleRequest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "requestId", "type": "bytes32" }], "name": "OracleResponse", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "acceptedContract", "type": "address" }], "name": "OwnableContractAccepted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "OwnershipTransferRequested", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address[]", "name": "targets", "type": "address[]" }, { "indexed": false, "internalType": "address[]", "name": "senders", "type": "address[]" }, { "indexed": false, "internalType": "address", "name": "changedBy", "type": "address" }], "name": "TargetsUpdatedAuthorizedSenders", "type": "event" }, { "inputs": [{ "internalType": "address[]", "name": "targets", "type": "address[]" }, { "internalType": "address[]", "name": "senders", "type": "address[]" }], "name": "acceptAuthorizedReceivers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "ownable", "type": "address[]" }], "name": "acceptOwnableContracts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "acceptOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "requestId", "type": "bytes32" }, { "internalType": "uint256", "name": "payment", "type": "uint256" }, { "internalType": "bytes4", "name": "callbackFunc", "type": "bytes4" }, { "internalType": "uint256", "name": "expiration", "type": "uint256" }], "name": "cancelOracleRequest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "payment", "type": "uint256" }, { "internalType": "bytes4", "name": "callbackFunc", "type": "bytes4" }, { "internalType": "uint256", "name": "expiration", "type": "uint256" }], "name": "cancelOracleRequestByRequester", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address payable[]", "name": "receivers", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "name": "distributeFunds", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "requestId", "type": "bytes32" }, { "internalType": "uint256", "name": "payment", "type": "uint256" }, { "internalType": "address", "name": "callbackAddress", "type": "address" }, { "internalType": "bytes4", "name": "callbackFunctionId", "type": "bytes4" }, { "internalType": "uint256", "name": "expiration", "type": "uint256" }, { "internalType": "bytes32", "name": "data", "type": "bytes32" }], "name": "fulfillOracleRequest", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "requestId", "type": "bytes32" }, { "internalType": "uint256", "name": "payment", "type": "uint256" }, { "internalType": "address", "name": "callbackAddress", "type": "address" }, { "internalType": "bytes4", "name": "callbackFunctionId", "type": "bytes4" }, { "internalType": "uint256", "name": "expiration", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "fulfillOracleRequest2", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAuthorizedSenders", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getChainlinkToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getExpiryTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }], "name": "isAuthorizedSender", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "onTokenTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "payment", "type": "uint256" }, { "internalType": "bytes32", "name": "specId", "type": "bytes32" }, { "internalType": "bytes4", "name": "callbackFunctionId", "type": "bytes4" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "dataVersion", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "operatorRequest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "payment", "type": "uint256" }, { "internalType": "bytes32", "name": "specId", "type": "bytes32" }, { "internalType": "address", "name": "callbackAddress", "type": "address" }, { "internalType": "bytes4", "name": "callbackFunctionId", "type": "bytes4" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "dataVersion", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "oracleRequest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "ownerForward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "ownerTransferAndCall", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "senders", "type": "address[]" }], "name": "setAuthorizedSenders", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "targets", "type": "address[]" }, { "internalType": "address[]", "name": "senders", "type": "address[]" }], "name": "setAuthorizedSendersOn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "ownable", "type": "address[]" }, { "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnableContracts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "typeAndVersion", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawable", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
];

const chainlinkTokenContract = new ethers.Contract(
    chainlinkTokenAddress,
    chainlinkTokenABI,
    provider
);

const chainlinkOracleABI = [
    /* ... */
];

const chainlinkOracleContract = new ethers.Contract(
    chainlinkOracleAddress,
    chainlinkOracleABI,
    provider
);

// Request data from the Chainlink oracle
chainlinkOracleContract.requestData(chainlinkJobId, paymentToOracle);

// Create a contract instance for the Chainlink Oracle
const chainlinkOracle = new ethers.Contract(chainlinkOracleAddress, chainlinkTokenABI, provider);

// Request data from the Chainlink Oracle
await chainlinkOracle.requestData(
    chainlinkJobId,
    paymentToOracle,
    ethers.utils.hexZeroPad(ethers.utils.hexlify(callbackAddress), 32),
    ethers.utils.id("callback(bytes32,bytes32)"),
    0
).send({
    value: paymentToOracle,
    gasLimit: 200000
});



async function main() {
    // Initialize Zoe
    const zoe = await new Zoe({
        /* ... */
    });

    // Define the terms and conditions of the insurance policy
    const policyTerms = {
        policyName: "Wind Farm Insurance",
        policyFlow: "Wind Farm",
        premiumPercentage: 10,
        trigger: {
            type: "windSpeed",
            value: 15,
            unit: "mph",
            duration: 6,
            unitDuration: "hours"
        }
    };

    // Create the policy contract
    const policy = zoe.createInstance(Policy, policyTerms);

    // Create the escrow contract
    const escrow = zoe.createInstance(Escrow, policy.getEscrowParams());

    // Use Chainlink oracles to get real-time data on wind speed
    // ...

    // If wind speed is below 15 mph for more than 6 hours, trigger the claim process
    if (windSpeed < 15 && hoursWindSpeedBelow15 >= 6) {
        policy.startClaim(escrow);
    }
}
