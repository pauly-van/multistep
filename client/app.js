"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AcctCreate = function AcctCreate(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Multi-Step Checkout"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Create Account"), /*#__PURE__*/React.createElement("label", null, "Name:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    name: "name",
    onChange: props.getData,
    type: "text"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Email:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    name: "email",
    onChange: props.getData,
    type: "text"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Password:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    name: "password",
    onChange: props.getData,
    type: "password"
  }), /*#__PURE__*/React.createElement("br", null))));
};

var Address = function Address(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Multi-Step Checkout"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Address Information"), /*#__PURE__*/React.createElement("label", null, "Address"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    name: "address",
    onChange: props.getData,
    type: "text"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "City, State, Zip Code"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    name: "city",
    onChange: props.getData,
    type: "text"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Phone Number"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    name: "phone",
    onChange: props.getData,
    type: "number"
  }), /*#__PURE__*/React.createElement("br", null))));
};

var Billing = function Billing(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Multi-Step Checkout"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Billing Information"), /*#__PURE__*/React.createElement("label", null, "Credit Card Number"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    name: "credit",
    onChange: props.getData,
    type: "number"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Expiry Date"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    name: "expiry",
    onChange: props.getData,
    type: "number"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "CCV"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    name: "ccv",
    onChange: props.getData,
    type: "number"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Billing Zip Code"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    name: "billingZip",
    onChange: props.getData,
    type: "number"
  }), /*#__PURE__*/React.createElement("br", null))));
};

var Complete = function Complete(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Multi-Step Checkout"), /*#__PURE__*/React.createElement("h3", null, "Transaction Complete!"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Address"), /*#__PURE__*/React.createElement("th", null, "City, State, Zip"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.data.name), /*#__PURE__*/React.createElement("td", null, props.data.email), /*#__PURE__*/React.createElement("td", null, props.data.number), /*#__PURE__*/React.createElement("td", null, props.data.address), /*#__PURE__*/React.createElement("td", null, props.data.city_state_zipcode)))));
};

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      currentPg: 'F1',
      name: '',
      password: '',
      email: '',
      address: '',
      city_state_zipcode: '',
      credit: '',
      expiry: '',
      CVV: '',
      billingZip: ''
    };
    _this.getData = _this.getData.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "getData",
    value: function getData(_ref) {
      var target = _ref.target;
      this.setState(_defineProperty({}, target.name, target.value));
    }
  }, {
    key: "changePage",
    value: function changePage() {
      switch (this.state.currentPg) {
        case 'F1':
          this.setState({
            currentPg: 'F2'
          });
          break;

        case 'F2':
          this.setState({
            currentPg: 'F3'
          });
          break;

        case 'F3':
          this.setState({
            currentPg: 'F4'
          });
          axios({
            url: 'http://localhost:3000',
            method: 'POST',
            data: this.state
          });
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      switch (this.state.currentPg) {
        case 'F1':
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AcctCreate, {
            getData: this.getData
          }), /*#__PURE__*/React.createElement("button", {
            onClick: this.changePage.bind(this)
          }, "Submit"));

        case 'F2':
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Address, {
            getData: this.getData
          }), /*#__PURE__*/React.createElement("button", {
            onClick: this.changePage.bind(this)
          }, "Submit"));

        case 'F3':
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Billing, {
            getData: this.getData
          }), /*#__PURE__*/React.createElement("button", {
            onClick: this.changePage.bind(this)
          }, "Submit"));

        case 'F4':
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Complete, {
            data: this.state
          }));
      }
    }
  }]);

  return App;
}(React.Component);

;
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
