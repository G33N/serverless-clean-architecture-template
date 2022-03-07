export interface LoggerInterface {
  fatal: (message: any) => void;
  error: (message: any) => void;
  warning: (message: any) => void;
  info: (message: any) => void;
  debug: (message: any) => void;
}
