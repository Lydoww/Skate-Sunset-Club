// src/types/Card.ts

export type CardProps = {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
};

export type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  floated?: boolean;
};

export type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export type CardFooterProps = {
  children: React.ReactNode;
  className?: string;
};

export type TypographyProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
  variant?: "small" | "medium" | "large";
};

export type ButtonProps = {
  children: React.ReactNode;
  ripple?: boolean;
  fullWidth?: boolean;
  className?: string;
};
