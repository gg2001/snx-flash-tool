import { ethers, BigNumber } from "ethers";

export const addresses: {
  [chainId: number]: {
    explorer: string;
    multicall: string;
    addressResolver: string;
    lendingPoolAddressesProvider: string;
    snxFlashTool: string;
  };
} = {
  1: {
    explorer: "https://etherscan.io/",
    multicall: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    addressResolver: "0x823bE81bbF96BEc0e25CA13170F5AaCb5B79ba83",
    lendingPoolAddressesProvider: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
    snxFlashTool: "0x231e7959852509E4872C3374554784a46EB8d680",
  },
  1337: {
    explorer: "https://etherscan.io/",
    multicall: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    addressResolver: "0x823bE81bbF96BEc0e25CA13170F5AaCb5B79ba83",
    lendingPoolAddressesProvider: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
    snxFlashTool: "0x4826533B4897376654Bb4d4AD88B7faFD0C98528",
  },
  42: {
    explorer: "https://kovan.etherscan.io/",
    multicall: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    addressResolver: "0x84f87E3636Aa9cC1080c07E6C61aDfDCc23c0db6",
    lendingPoolAddressesProvider: "0x88757f2f99175387ab4c6a4b3067c77a695b0349",
    snxFlashTool: "0xE33F708DF2cB0deD9dfc18Ad9a08Ec7C09F6cec3",
  },
};

export const impersonateAddress: string = "0xaB281a90645Cb13E440D4d12E7aA8F1e74ae8459";
export const oneInchAddress: string = "0x11111112542d85b3ef69ae05771c2dccff4faa26";

interface Trade {
  data: string;
  address: string;
  amount: BigNumber;
}

// https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F&toTokenAddress=0x57Ab1ec28D129707052df4dF418D58a2D46d5f51&amount=11980809705297140381&disableEstimate=true&fromAddress=0x4826533B4897376654Bb4d4AD88B7faFD0C98528&slippage=1
export const tradeData0: Trade = {
  data: "0x7c025200000000000000000000000000fd3dfb524b2da40c8a6d703c62be36b5d854062600000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000180000000000000000000000000c011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f00000000000000000000000057ab1ec28d129707052df4df418d58a2d46d5f51000000000000000000000000fd3dfb524b2da40c8a6d703c62be36b5d85406260000000000000000000000004826533b4897376654bb4d4ad88b7fafd0c98528000000000000000000000000000000000000000000000000a64462f32dc9da9d0000000000000000000000000000000000000000000000058c4845a26fa7366f000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000082000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000440000000000000000000000000000000000000000000000000000000000000068080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064eb5625d9000000000000000000000000c011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f000000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c8000000000000000000000000000000000000000000000000a64462f32dc9da9d00000000000000000000000000000000000000000000000000000000800000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001e452bbbe2900000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000fd3dfb524b2da40c8a6d703c62be36b5d85406260000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fd3dfb524b2da40c8a6d703c62be36b5d8540626000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000060fd0c85b6b9b165c4ac3f5233a0cf413126c72be28b468a00010000000000000000005a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000a64462f32dc9da9d00000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000184b3af37c000000000000000000000000000000000000000000000000000000000000000808000000000000000000000000000000000000000000000000000000000000024000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000003200000000000000000000000000000032000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000044a9059cbb000000000000000000000000f1f85b2c54a2bd284b1cf4141d64fd171bd8553900000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a4b757fed6000000000000000000000000f1f85b2c54a2bd284b1cf4141d64fd171bd85539000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000057ab1ec28d129707052df4df418d58a2d46d5f510000000000000000002dc6c04826533b4897376654bb4d4ad88b7fafd0c98528000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  address: oneInchAddress,
  amount: BigNumber.from("11980809705297140381"),
};

// https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F&toTokenAddress=0x57Ab1ec28D129707052df4dF418D58a2D46d5f51&amount=18048646982183153765&disableEstimate=true&fromAddress=0x4826533B4897376654Bb4d4AD88B7faFD0C98528&slippage=1
export const tradeData1: Trade = {
  data: "0x7c025200000000000000000000000000fd3dfb524b2da40c8a6d703c62be36b5d854062600000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000180000000000000000000000000c011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f00000000000000000000000057ab1ec28d129707052df4df418d58a2d46d5f51000000000000000000000000fd3dfb524b2da40c8a6d703c62be36b5d85406260000000000000000000000004826533b4897376654bb4d4ad88b7fafd0c98528000000000000000000000000000000000000000000000000fa79accdf173f0650000000000000000000000000000000000000000000000085196b132ae739abf000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000082000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000440000000000000000000000000000000000000000000000000000000000000068080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064eb5625d9000000000000000000000000c011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f000000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c8000000000000000000000000000000000000000000000000fa79accdf173f06500000000000000000000000000000000000000000000000000000000800000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001e452bbbe2900000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000fd3dfb524b2da40c8a6d703c62be36b5d85406260000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fd3dfb524b2da40c8a6d703c62be36b5d8540626000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000060fd0b86b6b9b165c4ac3f5233a0cf413126c72be28b468a00010000000000000000005a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000fa79accdf173f06500000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000184b3af37c000000000000000000000000000000000000000000000000000000000000000808000000000000000000000000000000000000000000000000000000000000024000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000003200000000000000000000000000000032000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000044a9059cbb000000000000000000000000f1f85b2c54a2bd284b1cf4141d64fd171bd8553900000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a4b757fed6000000000000000000000000f1f85b2c54a2bd284b1cf4141d64fd171bd85539000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000057ab1ec28d129707052df4df418d58a2d46d5f510000000000000000002dc6c04826533b4897376654bb4d4ad88b7fafd0c98528000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  address: oneInchAddress,
  amount: BigNumber.from("18048646982183153765"),
};
