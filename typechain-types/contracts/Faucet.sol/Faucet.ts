/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface FaucetInterface extends utils.Interface {
  functions: {
    "amount0()": FunctionFragment;
    "amount1()": FunctionFragment;
    "changeAmountToken(uint256,uint256)": FunctionFragment;
    "changeLockHourPeriods(uint256)": FunctionFragment;
    "changeTimeFaucet(address,uint256)": FunctionFragment;
    "changeToken(address,address)": FunctionFragment;
    "getFaucet()": FunctionFragment;
    "isOpen()": FunctionFragment;
    "lockhourPeriods()": FunctionFragment;
    "owner()": FunctionFragment;
    "timeFaucet(address)": FunctionFragment;
    "togleOpen()": FunctionFragment;
    "token0()": FunctionFragment;
    "token1()": FunctionFragment;
    "withdrawToken(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "amount0"
      | "amount1"
      | "changeAmountToken"
      | "changeLockHourPeriods"
      | "changeTimeFaucet"
      | "changeToken"
      | "getFaucet"
      | "isOpen"
      | "lockhourPeriods"
      | "owner"
      | "timeFaucet"
      | "togleOpen"
      | "token0"
      | "token1"
      | "withdrawToken"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "amount0", values?: undefined): string;
  encodeFunctionData(functionFragment: "amount1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeAmountToken",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeLockHourPeriods",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeTimeFaucet",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeToken",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "getFaucet", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOpen", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lockhourPeriods",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "timeFaucet",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "togleOpen", values?: undefined): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "amount0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "amount1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeAmountToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeLockHourPeriods",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeTimeFaucet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFaucet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOpen", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockhourPeriods",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timeFaucet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "togleOpen", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Faucet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FaucetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    amount0(overrides?: CallOverrides): Promise<[BigNumber]>;

    amount1(overrides?: CallOverrides): Promise<[BigNumber]>;

    changeAmountToken(
      _amount0: PromiseOrValue<BigNumberish>,
      _amount1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeLockHourPeriods(
      _newlockhourPeriods: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeTimeFaucet(
      user: PromiseOrValue<string>,
      newTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeToken(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getFaucet(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isOpen(overrides?: CallOverrides): Promise<[boolean]>;

    lockhourPeriods(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    timeFaucet(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    togleOpen(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    token0(overrides?: CallOverrides): Promise<[string]>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    withdrawToken(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  amount0(overrides?: CallOverrides): Promise<BigNumber>;

  amount1(overrides?: CallOverrides): Promise<BigNumber>;

  changeAmountToken(
    _amount0: PromiseOrValue<BigNumberish>,
    _amount1: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeLockHourPeriods(
    _newlockhourPeriods: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeTimeFaucet(
    user: PromiseOrValue<string>,
    newTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeToken(
    _token0: PromiseOrValue<string>,
    _token1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getFaucet(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isOpen(overrides?: CallOverrides): Promise<boolean>;

  lockhourPeriods(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  timeFaucet(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  togleOpen(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  token0(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  withdrawToken(
    _token0: PromiseOrValue<string>,
    _token1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    amount0(overrides?: CallOverrides): Promise<BigNumber>;

    amount1(overrides?: CallOverrides): Promise<BigNumber>;

    changeAmountToken(
      _amount0: PromiseOrValue<BigNumberish>,
      _amount1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeLockHourPeriods(
      _newlockhourPeriods: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeTimeFaucet(
      user: PromiseOrValue<string>,
      newTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeToken(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getFaucet(overrides?: CallOverrides): Promise<void>;

    isOpen(overrides?: CallOverrides): Promise<boolean>;

    lockhourPeriods(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    timeFaucet(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    togleOpen(overrides?: CallOverrides): Promise<void>;

    token0(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;

    withdrawToken(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    amount0(overrides?: CallOverrides): Promise<BigNumber>;

    amount1(overrides?: CallOverrides): Promise<BigNumber>;

    changeAmountToken(
      _amount0: PromiseOrValue<BigNumberish>,
      _amount1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeLockHourPeriods(
      _newlockhourPeriods: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeTimeFaucet(
      user: PromiseOrValue<string>,
      newTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeToken(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getFaucet(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isOpen(overrides?: CallOverrides): Promise<BigNumber>;

    lockhourPeriods(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    timeFaucet(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    togleOpen(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawToken(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    amount0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    amount1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeAmountToken(
      _amount0: PromiseOrValue<BigNumberish>,
      _amount1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeLockHourPeriods(
      _newlockhourPeriods: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeTimeFaucet(
      user: PromiseOrValue<string>,
      newTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeToken(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getFaucet(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockhourPeriods(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timeFaucet(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    togleOpen(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawToken(
      _token0: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
