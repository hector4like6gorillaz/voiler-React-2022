const buttonSize = {
  sm: "py-2 px-6",
  md: "py-4 px-6",
};
const textStyle = {
  bold: "text-base font-bold",
  semibold: "font-semibold",
  uppercase: "text-base uppercase font-semibold",
};

const GradientButton = ({
  label,
  size = "sm",
  fullWidth = false,
  rounded = "rounded-full",
  alignCustom = "flex justify-center items-center gap-2",
  font = "semibold",
  iconClass = "h-6 w-6 stroke-1",
  IconLeft,
  IconRight,
  loading = false,
  disabled = false,
  onClick,
  customStyle = "[background:linear-gradient(267.25deg,#8BCDFE_40.8%,#D0C9FF_89.17%)] border border-black border-opacity-0 enabled:hover:border-opacity-100 transition-all duration-200 ease-in-out disabled:opacity-40",
}: {
  label?: string;
  size?: "sm" | "md";
  fullWidth?: boolean;
  rounded?: string;
  alignCustom?: string;
  font?: "bold" | "semibold" | "uppercase";
  iconClass?: string;
  IconLeft?: any;
  IconRight?: any;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  customStyle?: string;
}) => {
  return (
    <button
      onClick={() => !loading && onClick && onClick()}
      disabled={loading || disabled}
      className={`
        ${customStyle}
        ${alignCustom} 
        ${fullWidth ? "w-full" : ""}
        ${rounded}
        ${buttonSize[size]}`}
    >
      {IconLeft && <IconLeft className={iconClass} />}
      <p className={`${textStyle[font]}`}>{label}</p>
      {IconRight && <IconRight className={iconClass} />}
      {loading && (
        <div className="border-t-transparent border-solid animate-spin rounded-full border-white border-2 h-5 w-5"></div>
      )}
    </button>
  );
};

export default GradientButton;
