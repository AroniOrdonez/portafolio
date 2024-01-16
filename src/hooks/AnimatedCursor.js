import React, { useEffect, useRef } from "react";

class AnimatedCursor extends React.Component {
  constructor(props) {
    super(props);

    this.cursorOuterRef = React.createRef();
    this.cursorInnerRef = React.createRef();
    this.requestRef = React.createRef();
    this.previousTimeRef = React.createRef();
    this.endX = React.createRef(0);
    this.endY = React.createRef(0);

    this.state = {
      coords: { x: 0, y: 0 },
      isVisible: false,
      isActive: false,
      isActiveClickable: false,
    };
  }

  onMouseMove = ({ clientX, clientY }) => {
    const { trailingSpeed } = this.props;
    const { coords } = this.state;

    this.setState({
      coords: {
        x: clientX,
        y: clientY,
      },
    });

    this.cursorInnerRef.current.style.top = `${clientY}px`;
    this.cursorInnerRef.current.style.left = `${clientX}px`;

    this.endX.current = clientX;
    this.endY.current = clientY;

    if (this.previousTimeRef.current !== undefined) {
      this.setState((prevState) => ({
        coords: {
          x:
            prevState.coords.x +
            (this.endX.current - prevState.coords.x) / trailingSpeed,
          y:
            prevState.coords.y +
            (this.endY.current - prevState.coords.y) / trailingSpeed,
        },
      }));

      this.cursorOuterRef.current.style.top = `${this.state.coords.y}px`;
      this.cursorOuterRef.current.style.left = `${this.state.coords.x}px`;
    }

    this.previousTimeRef.current = performance.now();
    this.requestRef.current = requestAnimationFrame(this.animateOuterCursor);
  };

  animateOuterCursor = (time) => {
    const { trailingSpeed } = this.props;

    if (this.previousTimeRef.current !== undefined) {
      this.setState((prevState) => ({
        coords: {
          x:
            prevState.coords.x +
            (this.endX.current - prevState.coords.x) / trailingSpeed,
          y:
            prevState.coords.y +
            (this.endY.current - prevState.coords.y) / trailingSpeed,
        },
      }));

      this.cursorOuterRef.current.style.top = `${this.state.coords.y}px`;
      this.cursorOuterRef.current.style.left = `${this.state.coords.x}px`;
    }

    this.previousTimeRef.current = time;
    this.requestRef.current = requestAnimationFrame(this.animateOuterCursor);
  };

  onMouseDown = () => this.setState({ isActive: true });
  onMouseUp = () => this.setState({ isActive: false });
  onMouseEnterViewport = () => this.setState({ isVisible: true });
  onMouseLeaveViewport = () => this.setState({ isVisible: false });

  componentDidMount() {
    document.body.style.cursor = "none";

    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("mousedown", this.onMouseDown);
    window.addEventListener("mouseup", this.onMouseUp);
    window.addEventListener("mouseover", this.onMouseEnterViewport);
    window.addEventListener("mouseout", this.onMouseLeaveViewport);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("mousedown", this.onMouseDown);
    window.removeEventListener("mouseup", this.onMouseUp);
    window.removeEventListener("mouseover", this.onMouseEnterViewport);
    window.removeEventListener("mouseout", this.onMouseLeaveViewport);

    cancelAnimationFrame(this.requestRef.current);
  }

  render() {
    const {
      color = "220, 90, 90",
      outerAlpha = 0.3,
      innerSize = 8,
      outerSize = 8,
      outerScale = 6,
      innerScale = 0.6,
      outerStyle,
      innerStyle,
    } = this.props;

    const { isVisible, isActive, isActiveClickable } = this.state;

    const styles = {
      cursorInner: {
        zIndex: 999,
        display: "block",
        position: "fixed",
        borderRadius: "50%",
        width: innerSize,
        height: innerSize,
        pointerEvents: "none",
        backgroundColor: `rgba(${color}, 1)`,
        ...(innerStyle && innerStyle),
        transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
        transform: `translate(-50%, -50%) scale(${isActive ? innerScale : 1})`,
      },
      cursorOuter: {
        zIndex: 999,
        display: "block",
        position: "fixed",
        borderRadius: "50%",
        pointerEvents: "none",
        width: outerSize,
        height: outerSize,
        backgroundColor: `rgba(${color}, ${outerAlpha})`,
        transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
        willChange: "transform",
        ...(outerStyle && outerStyle),
        transform: `translate(-50%, -50%) scale(${isActive ? outerScale : 1})`,
      },
    };

    return (
      <>
        <div ref={this.cursorOuterRef} style={styles.cursorOuter} />
        <div ref={this.cursorInnerRef} style={styles.cursorInner} />
      </>
    );
  }
}

export default AnimatedCursor;
