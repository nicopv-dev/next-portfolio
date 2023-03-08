interface IButtonIconProps {
  icon: JSX.Element;
  link: string;
}

export default function ButtonIcon({ icon, link }: IButtonIconProps) {
  const goTo = () => {
    window.open(link, "_blank");
  };

  return (
    <button type="button" className="animate-bounce" onClick={goTo}>
      {icon}
    </button>
  );
}
