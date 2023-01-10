import React from "react";

class DropdownHOC extends React.Component<
  {
    children: JSX.Element[];
    triggerRef?: React.Ref<HTMLDivElement>;
    classParent?: string;
  },
  { openDropdown: boolean }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      openDropdown: false,
    };
  }

  container = React.createRef<HTMLDivElement>();

  handleDropdown = (event: any) => {
    event.stopPropagation();
    return this.setState((state) => ({ openDropdown: !state.openDropdown }));
  };

  handleClickOutside = (event: any) => {
    event.stopPropagation();
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState(() => ({ openDropdown: false }));
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div
        className={`relative ${this.props.classParent}`}
        ref={this.container}
      >
        <div onClick={this.handleDropdown} ref={this.props.triggerRef}>
          {React.Children.toArray(this.props.children)[0]}
        </div>
        {this.state.openDropdown && (
          <div
            className="absolute w-full"
            onClick={(event) => event.stopPropagation()}
          >
            {React.Children.toArray(this.props.children)[1]}
          </div>
        )}
      </div>
    );
  }
}

export default DropdownHOC;
