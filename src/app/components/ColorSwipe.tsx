type ColorSwipeProps = {
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
  delay?: string;
  image: string;
  className: string;
};

export default function ColorSwipe(props: ColorSwipeProps) {
  return (
    <img
      src={props.image}
      alt="Wedding Logo"
      style={{
        position: "fixed",
        width: "100vw",
        height: "40vh",
        animationDelay: props.delay ?? "0",
        opacity: "0",
        right: props.right,
        top: props.top,
        left: props.left,
        bottom: props.bottom,
      }}
      className={props.className}
    />
  );
}
