import React from 'react';

function format(num) {
  return num != null ? num.toString() : '';
}

function unformat(str) {
  const num = parseInt(str, 10);
  return Number.isNaN(num) ? null : num;
}

export default class NumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: format(props.value),
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(e) {
    if (e.target.value.match(/^\d*$/)) {
      this.setState({ value: e.target.value });
    }
  }

  onBlur(e) {
    const { onChange } = this.props;
    const { value } = this.state;
    onChange(e, unformat(value));
  }

  render() {
    const { value } = this.state;
    return (
      <input
        type="text"
        {...this.props}
        value={value}
        onChange={this.onChange}
        onBlur={this.onBlur}
      />
    );
  }
}
