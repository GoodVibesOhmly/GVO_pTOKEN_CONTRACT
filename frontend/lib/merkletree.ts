import { ethers } from 'ethers'
import keccak256 from 'keccak256'
import MerkleTree from 'merkletreejs'

const token = {
  decimals: 18,
}

export const addressClaimableQuantity = {
  "0xFb882cF1f72a2887d7E1a60207e3dE592c08ce10": 1000,
  "0x09E6f1BCb006925B9390cf72c07544018145DC25": 100,
  "0x02686B88B2a234Df3cEAAf9Cc27D7e969C6CFE38": 250000,
  "0xcF10B967a9e422753812004Cd59990f62E360760": 100000,
  "0x7287C2833d51b49Af4EBCceEc51c0635F14c72A7": 50000,
  "0xF10a439c132fEfd08B45E24D6838B1E1dC31Fdf0": 200000,
  "0xC86d15920f454933088e8a68bd36832C53705127": 25000,
  "0x10B5BAAf2BB8878CF35FDEFfA5C3183D30Be5682": 300000,
  "0xd53Db76369fBb6584E0BeC45d4e8D62eB46E5700": 50000,
  "0xb3355Ee5E480794C51ea44f46c659f86ee75dd29": 100000,
  "0x14B2bB6C897C31f803Fd0cba0E76AB43073b337d": 150000,
  "0x3cb5560E8E4B666c01bBF74ffbAAabA88052F531": 25000,
  "0x0efc6819167B7b3ca0DaEe2aaEc339cA9D55e0ca": 100000,
  "0x1146f36Cf74fBB2971DcDA652d0a3f4289a39d53": 10000,
  "0x85338a1BE31645972851B8d9d0936Ec8E1c45d40": 10000,
  "0xD704cCd599f005C7c7Aa1cBFDDd01249D05a96EB": 10000,
  "0xF9a25f8AB7a07d120E5C2E895Ee71B5e09Ed0fC7": 1000,
  "0x21bBB085b58a94B86D8706262A4f04f76b860183": 110000,
  "0xDF9cF2bD8e615Ad95879Af68594EE838E44Fc36A": 27000,
  "0x35a214b13c9E223B8D511f343aC8Fa94293233a1": 100000,
  "0xB5eB1cdda34E5a40bEbFE839dae65f3B42827721": 20000,
  "0x859909d689164e650427f23c024C465BB6ceC2a3": 100000,
  "0xf3e9848D5accE2f83b8078ee21f458e59ec4289A": 100000,
  "0x268C3D74373E394470Ff89D49374b3a7E15b4fA4": 30000,
  "0x1b9AD98ADe24595d5b02BF994e030b0058494A73": 500000,
  "0xC2aD4a403668a2f5A60f95ef6B6B94e684372139": 30000,
  "0xd5E09e5322A26A8159B67efbd8Eb462Ed9a297d8": 12000,
  "0xED39cc08B5bFaBA3E41F58187cF908034Fe14d86": 100000,
  "0xddd7477Ea9E1C5b2bc325097c1064d94595CE049": 100000,
  "0xe3fccDEE131de98cB5dF3304508677Fa5fcDD6d4": 20000,
  "0x0b0f171A90f2620062bC559255E90a914aD10A0e": 300000,
  "0x83E84CC194E595B43dCEDfBFfC3e0358366307f1": 10000,
  "0xB835367ae1CaFCEa58a10A51b17Fea25d16c3daB": 10000,
  "0x1200Eb4fA3dF9903fC6EfF1d7A4a5D17502329b2": 10000,
  "0xa2D638ADa840080dE73971e49A52EaF00ce18474": 10000,
  "0xd3e38c017d441558135549719f9f9C398A64FDab": 10000,
  "0x72a5Ba942a401C4BD08a32963B75f971292213a8": 10000,
  "0x35aA3f733958b7416669303945093C98819F77A6": 10000,
  "0x1eb322c016815EE5b29c071586C1B75Be5934576": 10000,
  "0x90F99593761048F38E1B05fFC9807C50260ff578": 10000,
  "0xbbE56bb006a28CdA016F7C599eFf4AAAdd07C21C": 10000,
  "0x5F7476ACa630A79d89b8A1b4D92fc91c65c01abF": 10000,
  "0x2aA48F410007b7380d2846D03142FebbBEDEb3d3": 10000,
  "0x9ead5E6E90440e69B5F28fEF5942a5B273387c13": 10000,
  "0xD3A5211477e05F93b632F45817b85dF4676b4bD6": 10000,
  "0xCdD27fDF1B991E9DEB8647EE3D8Ac1bdB7D6b675": 10000,
  "0x048aD0A6D74baDE422AE4080F17fC311d3AaEc83": 10000,
  "0xc1D4BFD94909B589Bee19062e375D17Bbd5E6799": 10000,
  "0x21Cf5649ee1a9362202EBfF266Ef7BBC8c26A917": 10000,
  "0xbCdD2C687B2a7108DeabD863E97F3c91E255bee6": 200000,
  "0x103CDE1a2F5eD7ce509a178F9cFb9E56553dc45b": 600000,
  "0x7a116b21E0c8729B8B6939bd526274Da0208743D": 100000,
  "0xcf0955Df076CA2F3c2f83ca0eb8502bFF5F0838A": 125000,
  "0x5baa7640a5B174501A9BC84e7840B15E4BEb16Da": 125000,
  "0xda5F5ded37d1f0557DD3368Ac01cACaCBedd894F": 50000,
  "0xCFFE08BDf20918007f8Ab268C32f8756494fC8D8": 50000,
  "0xf04946c11127A096Bcd6a572c01C89C164f2fa12": 45000,
  "0xAE3D494962fDCf949C4730C57B01966B961dE739": 10000,
  "0x9119d4944EDA5CE0DD3FEEDA56a480cDA84C298a": 10000,
  "0x50f4E9255A2CAe88e722B979d6b3aE31f75c275f": 2000,
  "0x34310d39bAc32e41692a90d26Dd2D302Fb28e1a8": 1000,
  "0x7f5B215C995c4676a37584008D29E27CF9940333": 3000,
  "0x23BA9199695f9A20450D08fDb486Ed74c6a1d5EB": 2000,
  "0x971d45c96CcabF15189D5786bb4cA780CB7A7f0C": 1000,
  "0x2d4eB91CdDeA03a2A55CcCa343147ECA764076e2": 2000,
  "0xDF5DdB99e37A477C55c7e54C7Dca837aC584FaDC": 3000,
  "0xF265405140576D919E2Cef2409eF9fC95d41800a": 1000,
  "0xeF5C00882A09b86EE38dF6ebf522E3e2fa578C64": 4000,
  "0x20C78abE2D3C77Cb9Dc08F3a41cB6542B803de7B": 5000,
  "0x113Cc14036838713bf7cE46af8457F123cC39416": 1000,
  "0xFcff35118952f1F69313d76f6c46a4ce83F75F3a": 5000,
  "0x69aB6A84385743268b64bd985ACCf14fC13Fdd65": 1000,
  "0xe0f4498F76bFf3516bE84A7995Aa28d581541f48": 150000,
  "0x000000c7000cc57FD1BF6729849B9eDcC8fE9102": 100000,
  "0x9D575A675De6a1cc125ECfC34439D17DcCe13Df7": 2000,
  "0x02f98c63E6352C06Fa8D5F14c004926F165CEe74": 50000
}

// 0xc2ad4a403668a2f5a60f95ef6b6b94e684372139
// 0x2aa48f410007b7380d2846d03142febbbedeb3d3
// 0x9ead5e6e90440e69b5f28fef5942a5b273387c13

export const isWhitelisted = (address: string): boolean =>
  !!addressClaimableQuantity[ethers.utils.getAddress(address)] || false

export const getClaimablePCNVAmount = (address: string): number =>
  addressClaimableQuantity[ethers.utils.getAddress(address)] || 0

export const leafOf = (address: string) => {
  const claimableQuantiy = getClaimablePCNVAmount(address)
  // console.log(address, claimableQuantiy)
  return Buffer.from(
    ethers.utils
      .solidityKeccak256(
        ['address', 'uint256'],
        [
          ethers.utils.getAddress(address), // normalizes to checksum address
          ethers.utils.parseUnits(claimableQuantiy.toString(), token.decimals).toString(), // parse claimable amount to token decimals
        ],
      )
      .slice(2),
    'hex',
  )
}

export const merkleTree = new MerkleTree(
  Object.keys(addressClaimableQuantity).map(leafOf),
  keccak256,
  { sortPairs: true },
)

export default merkleTree
