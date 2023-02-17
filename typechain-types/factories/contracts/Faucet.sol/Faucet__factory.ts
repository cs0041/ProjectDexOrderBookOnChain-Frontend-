/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Faucet,
  FaucetInterface,
} from "../../../contracts/Faucet.sol/Faucet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lockhourPeriods",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "amount0",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "amount1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount1",
        type: "uint256",
      },
    ],
    name: "changeAmountToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newlockhourPeriods",
        type: "uint256",
      },
    ],
    name: "changeLockHourPeriods",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newTime",
        type: "uint256",
      },
    ],
    name: "changeTimeFaucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "changeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getFaucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isOpen",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockhourPeriods",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "timeFaucet",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "togleOpen",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001759380380620017598339818101604052810190620000379190620001d9565b846000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060048190555082600581905550816006819055506001600760006101000a81548160ff021916908315150217905550505050505062000261565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001668262000139565b9050919050565b620001788162000159565b81146200018457600080fd5b50565b60008151905062000198816200016d565b92915050565b6000819050919050565b620001b3816200019e565b8114620001bf57600080fd5b50565b600081519050620001d381620001a8565b92915050565b600080600080600060a08688031215620001f857620001f762000134565b5b6000620002088882890162000187565b95505060206200021b8882890162000187565b94505060406200022e88828901620001c2565b93505060606200024188828901620001c2565b92505060806200025488828901620001c2565b9150509295509295909350565b6114e880620002716000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638717218911610097578063d21220a711610066578063d21220a714610214578063de18600314610232578063f400fde414610262578063f4e4b50014610280576100f5565b806387172189146101b25780638da5cb5b146101ce5780639906d175146101ec578063bec9e6991461020a576100f5565b8063339b2fee116100d3578063339b2fee1461013e5780633aeac4e11461015c57806347535d7b146101785780634da22e4214610196576100f5565b80630dfe1681146100fa57806320cc7b4e146101185780632c4d844a14610134575b600080fd5b61010261029c565b60405161010f9190610f5c565b60405180910390f35b610132600480360381019061012d9190610fba565b6102c0565b005b61013c610424565b005b610146610744565b6040516101539190611013565b60405180910390f35b61017660048036038101906101719190610fba565b61074a565b005b610180610a9d565b60405161018d9190611049565b60405180910390f35b6101b060048036038101906101ab9190611090565b610ab0565b005b6101cc60048036038101906101c791906110d0565b610ba1565b005b6101d6610c8a565b6040516101e3919061110c565b60405180910390f35b6101f4610cb0565b6040516102019190611013565b60405180910390f35b610212610cb6565b005b61021c610d72565b6040516102299190610f5c565b60405180910390f35b61024c60048036038101906102479190611127565b610d98565b6040516102599190611013565b60405180910390f35b61026a610db0565b6040516102779190611013565b60405180910390f35b61029a60048036038101906102959190611154565b610db6565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610350576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034790611217565b60405180910390fd5b600760009054906101000a900460ff1661039f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039690611283565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600760009054906101000a900460ff16610473576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046a90611283565b60405180910390fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414156105005742600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115610582576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610579906112ef565b60405180910390fd5b600454610e10610592919061133e565b4261059d9190611398565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336005546040518363ffffffff1660e01b815260040161063d9291906113ee565b602060405180830381600087803b15801561065757600080fd5b505af115801561066b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068f9190611443565b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336006546040518363ffffffff1660e01b81526004016106ef9291906113ee565b602060405180830381600087803b15801561070957600080fd5b505af115801561071d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107419190611443565b50565b60045481565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d190611217565b60405180910390fd5b600760009054906101000a900460ff16610829576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082090611283565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108a1919061110c565b60206040518083038186803b1580156108b957600080fd5b505afa1580156108cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f19190611485565b6040518363ffffffff1660e01b815260040161090e9291906113ee565b602060405180830381600087803b15801561092857600080fd5b505af115801561093c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109609190611443565b508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016109d9919061110c565b60206040518083038186803b1580156109f157600080fd5b505afa158015610a05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a299190611485565b6040518363ffffffff1660e01b8152600401610a469291906113ee565b602060405180830381600087803b158015610a6057600080fd5b505af1158015610a74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a989190611443565b505050565b600760009054906101000a900460ff1681565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3790611217565b60405180910390fd5b600760009054906101000a900460ff16610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8690611283565b60405180910390fd5b81600581905550806006819055505050565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2890611217565b60405180910390fd5b600760009054906101000a900460ff16610c80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7790611283565b60405180910390fd5b8060048190555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3d90611217565b60405180910390fd5b600760009054906101000a900460ff1615600760006101000a81548160ff021916908315150217905550565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915090505481565b60065481565b3373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3d90611217565b60405180910390fd5b600760009054906101000a900460ff16610e95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8c90611283565b60405180910390fd5b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610f22610f1d610f1884610edd565b610efd565b610edd565b9050919050565b6000610f3482610f07565b9050919050565b6000610f4682610f29565b9050919050565b610f5681610f3b565b82525050565b6000602082019050610f716000830184610f4d565b92915050565b600080fd5b6000610f8782610edd565b9050919050565b610f9781610f7c565b8114610fa257600080fd5b50565b600081359050610fb481610f8e565b92915050565b60008060408385031215610fd157610fd0610f77565b5b6000610fdf85828601610fa5565b9250506020610ff085828601610fa5565b9150509250929050565b6000819050919050565b61100d81610ffa565b82525050565b60006020820190506110286000830184611004565b92915050565b60008115159050919050565b6110438161102e565b82525050565b600060208201905061105e600083018461103a565b92915050565b61106d81610ffa565b811461107857600080fd5b50565b60008135905061108a81611064565b92915050565b600080604083850312156110a7576110a6610f77565b5b60006110b58582860161107b565b92505060206110c68582860161107b565b9150509250929050565b6000602082840312156110e6576110e5610f77565b5b60006110f48482850161107b565b91505092915050565b61110681610f7c565b82525050565b600060208201905061112160008301846110fd565b92915050565b60006020828403121561113d5761113c610f77565b5b600061114b84828501610fa5565b91505092915050565b6000806040838503121561116b5761116a610f77565b5b600061117985828601610fa5565b925050602061118a8582860161107b565b9150509250929050565b600082825260208201905092915050565b7f4f6e6c79206f776e65722063616e2063616c6c2074686973206675636e74696f60008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b6000611201602183611194565b915061120c826111a5565b604082019050919050565b60006020820190508181036000830152611230816111f4565b9050919050565b7f697420436c6f7365000000000000000000000000000000000000000000000000600082015250565b600061126d600883611194565b915061127882611237565b602082019050919050565b6000602082019050818103600083015261129c81611260565b9050919050565b7f4974206973206e6f742074696d6520706c732077616974000000000000000000600082015250565b60006112d9601783611194565b91506112e4826112a3565b602082019050919050565b60006020820190508181036000830152611308816112cc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061134982610ffa565b915061135483610ffa565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561138d5761138c61130f565b5b828202905092915050565b60006113a382610ffa565b91506113ae83610ffa565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113e3576113e261130f565b5b828201905092915050565b600060408201905061140360008301856110fd565b6114106020830184611004565b9392505050565b6114208161102e565b811461142b57600080fd5b50565b60008151905061143d81611417565b92915050565b60006020828403121561145957611458610f77565b5b60006114678482850161142e565b91505092915050565b60008151905061147f81611064565b92915050565b60006020828403121561149b5761149a610f77565b5b60006114a984828501611470565b9150509291505056fea2646970667358221220ccf0a2b7cfaaea8d80e5b03dd4538ad373b4c2e576ed29546d07240174ed71c564736f6c63430008090033";

type FaucetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FaucetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Faucet__factory extends ContractFactory {
  constructor(...args: FaucetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token0: PromiseOrValue<string>,
    _token1: PromiseOrValue<string>,
    _amount0: PromiseOrValue<BigNumberish>,
    _amount1: PromiseOrValue<BigNumberish>,
    _lockhourPeriods: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Faucet> {
    return super.deploy(
      _token0,
      _token1,
      _amount0,
      _amount1,
      _lockhourPeriods,
      overrides || {}
    ) as Promise<Faucet>;
  }
  override getDeployTransaction(
    _token0: PromiseOrValue<string>,
    _token1: PromiseOrValue<string>,
    _amount0: PromiseOrValue<BigNumberish>,
    _amount1: PromiseOrValue<BigNumberish>,
    _lockhourPeriods: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token0,
      _token1,
      _amount0,
      _amount1,
      _lockhourPeriods,
      overrides || {}
    );
  }
  override attach(address: string): Faucet {
    return super.attach(address) as Faucet;
  }
  override connect(signer: Signer): Faucet__factory {
    return super.connect(signer) as Faucet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FaucetInterface {
    return new utils.Interface(_abi) as FaucetInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Faucet {
    return new Contract(address, _abi, signerOrProvider) as Faucet;
  }
}
