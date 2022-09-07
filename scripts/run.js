const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Homem Mermaid", "Little Mexilhao", "The Bob"],
    [
      "https://gateway.pinata.cloud/ipfs/QmacMyrYuzi9TwugQk7X9LMfcphVSrtBd46AwAHWS7va8g",
      "https://gateway.pinata.cloud/ipfs/QmTji3uRPvV3TDcggeQUpWff2nXkQsMgCwAkptGxDiidPb",
      "https://gateway.pinata.cloud/ipfs/QmZ5qbv8pVXffovbtb3wZawxnhZv3W2aTxkZxkjX1F6EsF",
    ],
    [100, 200, 300],
    [100, 50, 25],
    "Plank",
    "https://gateway.pinata.cloud/ipfs/QmT6YHgRZcSvmR5z7kGYc6FPGzf1cj3u4cyuACrfdkWXo4",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contrato implantado no endereço:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();