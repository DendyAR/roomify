import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement>
> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    className?: string;
};

const Button = ({
    variant = "primary",
    size = "md",
    fullWidth = false,
    className,
    children,
    ...props
}: ButtonProps) => {
    const classes = ["btn", `btn--${variant}`, `btn--${size}`];

    if (fullWidth) classes.push("btn--full");
    if (className) classes.push(className);

    return (
        <button className={classes.join(" ")} {...props}>
            {children}
        </button>
    );
};

export default Button;
