import "framer-motion";

declare module "framer-motion" {
  interface HTMLMotionProps<T extends keyof HTMLElementTagNameMap> 
    extends Omit<React.HTMLAttributes<HTMLElementTagNameMap[T]>, keyof MotionProps> {
    className?: string;
  }
}
