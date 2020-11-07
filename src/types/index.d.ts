/* istanbul ignore file */
import { NextApiRequest, NextApiResponse, NextPage } from "next";
import { AppProps } from "next/app";
import {
  ComponentType,
  ChangeEvent,
  CSSProperties,
  FC,
  FormEvent,
  ReactNode
} from "react";

/// ACTIONS ///

export type UserData = {
  id: string;
  email: string;
  name: string;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
};

export type UserProps = {
  props: UserData;
};

/// COMPONENTS ///

export type ActionButtonProps = {
  className?: string;
  dataTestId?: string;
  style?: CSSProperties;
};

export interface CardProps {
  id: string;
  email: string;
  name: string;
  username: string;
  address: any;
  key: any;
  className?: string;
  idx: number;
}

type ComponentProps = {
  className?: string;
  children?: any;
  errors?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (event: ChangeEvent<any>) => void;
  type?: string;
  value?: string;
  style?: CSSProperties;
};

export type ContainerProps = {
  children: ReactNode;
  dataTestId?: string;
  innerStyle?: CSSProperties;
  style?: CSSProperties;
};

export interface ButtonProps extends ComponentProps {
  dataTestId?: string;
  disabled?: boolean;
  danger?: boolean;
  padding?: string;
  primary?: boolean;
  onClick?: (event: any) => void;
  type: "button" | "submit" | "reset" | undefined;
}

export type HeaderProps = {
  description: string;
  title: string;
  type: string;
  url: string;
};

export type InputProps = ComponentProps;

export type LinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export type LoadingUsersProps = {
  className?: string;
  duration?: string;
  height?: number;
  opacity?: string;
  width?: number;
};

export {
  AppProps,
  ChangeEvent,
  ComponentType,
  CSSProperties,
  FC,
  FormEvent,
  NextApiRequest,
  NextApiResponse,
  NextPage,
  ReactNode,
  SagaIterator
};
