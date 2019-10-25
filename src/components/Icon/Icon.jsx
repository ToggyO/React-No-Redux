import React from 'react';
import PropTypes from 'prop-types';
import './iconsStyle.sass';

/* eslint-disable */
function Icon({ iconName, className, fill }) {
  switch (iconName) {
    case 'preloader':
      return (
        <svg
          className={className}
          width="200px"
          height="200px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <path
            ng-attr-d="{{config.pathCmd}}"
            ng-attr-fill="{{config.color}}"
            stroke="none"
            d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
            fill="#495570"
            transform="rotate(137.973 50 51)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              calcMode="linear"
              values="0 50 51;360 50 51"
              keyTimes="0;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            ></animateTransform>
          </path>
        </svg>
      );

    case 'google-logo':
      return (
        <div className="flex justify-content-center align-items-center">
          <svg className={className} width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000" fillRule="evenodd">
              <path
                d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                fill="#EA4335"
              />
              <path
                d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                fill="#4285F4"
              />
              <path
                d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                fill="#FBBC05"
              />
              <path
                d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                fill="#34A853"
              />
              <path fill="none" d="M0 0h18v18H0z" />
            </g>
          </svg>
        </div>
      );
    case 'team':
      return (
        <svg
          className={className}
          width="48px"
          height="38px"
          viewBox="0 0 48 38"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Page-1" stroke="none" strokeWidth="1" fill={fill} fillRule="evenodd">
            <g id="Onboarding-Flow-7" transform="translate(-1102.000000, -461.000000)" fillRule="nonzero">
              <g id="Group-9" transform="translate(1020.000000, 432.000000)">
                <g id="Group-6" transform="translate(82.000000, 29.000000)">
                  <path
                    d="M23.5999986,8.79999948 C18.4185252,8.79999948 15.1999991,11.5088029 15.1999991,15.8970645 C15.1999991,16.3957101 15.5959043,16.799999 16.0842096,16.799999 L31.1157876,16.799999 C31.6040929,16.799999 31.9999981,16.3957101 31.9999981,15.8970645 C31.9999981,11.5178323 28.781472,8.79999948 23.5999986,8.79999948 Z M17.0303148,14.99413 C17.6138937,10.9399542 22.1498934,10.6058684 23.5999986,10.6058684 C25.0501038,10.6058684 29.5861035,10.9399542 30.1696824,14.99413 L17.0303148,14.99413 Z"
                    id="Shape"
                  ></path>
                  <path
                    d="M23.1999986,0 C20.9908409,0 19.1999989,1.790842 19.1999989,3.99999976 C19.2046304,6.20726279 20.9927356,7.99536794 23.1999986,7.99999952 C25.4091564,7.99999952 27.1999984,6.20915752 27.1999984,3.99999976 C27.1999984,1.790842 25.4091564,0 23.1999986,0 Z M23.1999986,6.3157891 C21.9210513,6.3157891 20.8842093,5.27894705 20.8842093,3.99999976 C20.8842093,2.72105247 21.9210513,1.68421043 23.1999986,1.68421043 C24.4789459,1.68421043 25.515788,2.72105247 25.515788,3.99999976 C25.515788,5.27894705 24.4789459,6.3157891 23.1999986,6.3157891 Z"
                    id="Shape"
                  ></path>
                  <path
                    d="M8.3999995,29.5999982 C3.21852612,29.5999982 0,32.3088017 0,36.6970633 C0,37.1957088 0.39590524,37.5999978 0.884210474,37.5999978 L15.9157885,37.5999978 C16.4040938,37.5999978 16.799999,37.1957088 16.799999,36.6970633 C16.799999,32.317831 13.5814729,29.5999982 8.3999995,29.5999982 Z M1.83031568,35.7941288 C2.41389459,31.739953 6.94105222,31.4058672 8.3999995,31.4058672 C9.85894678,31.4058672 14.3861044,31.739953 14.9696833,35.7941288 L1.83031568,35.7941288 Z"
                    id="Shape"
                  ></path>
                  <path
                    d="M8.79999948,20.7999988 C6.59084171,20.7999988 4.79999971,22.5908408 4.79999971,24.7999985 C4.80463129,27.0072615 6.59273645,28.7953667 8.79999948,28.7999983 C11.0091572,28.7999983 12.7999992,27.0091563 12.7999992,24.7999985 C12.7999992,22.5908408 11.0091572,20.7999988 8.79999948,20.7999988 Z M8.79999948,27.1157879 C7.52105218,27.1157879 6.48421014,26.0789458 6.48421014,24.7999985 C6.48421014,23.5210512 7.52105218,22.4842092 8.79999948,22.4842092 C10.0789468,22.4842092 11.1157888,23.5210512 11.1157888,24.7999985 C11.1157888,26.0789458 10.0789468,27.1157879 8.79999948,27.1157879 Z"
                    id="Shape"
                  ></path>
                  <path
                    d="M38.7999977,29.5999982 C33.6185243,29.5999982 30.3999982,32.3088017 30.3999982,36.6970633 C30.3999982,37.1957088 30.7959034,37.5999978 31.2842087,37.5999978 L46.3157867,37.5999978 C46.8040919,37.5999978 47.1999972,37.1957088 47.1999972,36.6970633 C47.1999972,32.317831 43.9814711,29.5999982 38.7999977,29.5999982 Z M32.2303139,35.7941288 C32.8138928,31.739953 37.3410504,31.4058672 38.7999977,31.4058672 C40.258945,31.4058672 44.7861026,31.739953 45.3696815,35.7941288 L32.2303139,35.7941288 Z"
                    id="Shape"
                  ></path>
                  <path
                    d="M39.1999977,20.7999988 C36.9908399,20.7999988 35.1999979,22.5908408 35.1999979,24.7999985 C35.2046295,27.0072615 36.9927346,28.7953667 39.1999977,28.7999983 C41.4091554,28.7999983 43.1999974,27.0091563 43.1999974,24.7999985 C43.1999974,22.5908408 41.4091554,20.7999988 39.1999977,20.7999988 Z M39.1999977,27.1157879 C37.9210504,27.1157879 36.8842083,26.0789458 36.8842083,24.7999985 C36.8842083,23.5210512 37.9210504,22.4842092 39.1999977,22.4842092 C40.478945,22.4842092 41.515787,23.5210512 41.515787,24.7999985 C41.515787,26.0789458 40.478945,27.1157879 39.1999977,27.1157879 Z"
                    id="Shape"
                  ></path>
                  <path
                    d="M28.5878119,28.1120044 L24.9082609,24.4426353 L24.9082609,19.2757433 C24.9082609,18.7921135 24.5131725,18.3999989 24.0258746,18.3999989 C23.5385768,18.3999989 23.1434883,18.7921135 23.1434883,19.2757433 L23.1434883,24.4426353 L19.4639373,28.0944895 C19.115505,28.4354825 19.1115342,28.992237 19.4551134,29.3380465 C19.7986926,29.6838561 20.3596697,29.687797 20.708102,29.346804 L24.0258746,26.0452476 L27.3436472,29.346804 C27.7138083,29.6614152 28.2708147,29.6186132 28.5878119,29.2512384 C28.8707271,28.9233816 28.8707271,28.4398612 28.5878119,28.1120044 Z"
                    id="Path"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );

    case 'people':
      return (
        <svg
          className={className}
          width="50px"
          height="40px"
          viewBox="0 0 50 40"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fill={fill}>
            <g id="Onboarding-Flow-7" transform="translate(-1326.000000, -460.000000)" fillRule="nonzero">
              <g id="Group" transform="translate(1245.000000, 432.000000)">
                <g id="Group-8" transform="translate(81.000000, 28.000000)">
                  <g id="Group-7" transform="translate(0.000000, 14.000000)">
                    <path
                      d="M13.0829984,14.2043983 C17.0044835,14.2043983 20.1851976,11.0187574 20.1851976,7.0913033 C20.1851976,3.16384925 17.0044364,0 13.0829984,0 C9.16156044,0 5.98079928,3.18564093 5.98079928,7.0913033 C5.98079928,10.9969657 9.16151334,14.2043983 13.0829984,14.2043983 Z M13.0829984,1.85465073 C15.9587196,1.85465073 18.3116295,4.21112316 18.3116295,7.0913033 C18.3116295,9.97148344 15.9587196,12.3279087 13.0829984,12.3279087 C10.2072772,12.3279087 7.85436735,9.97143627 7.85436735,7.09125613 C7.85436735,4.211076 10.2072301,1.85465073 13.0829984,1.85465073 Z"
                      id="Shape"
                    ></path>
                    <path
                      d="M0.950141726,25.4183969 L25.963455,25.4183969 C26.4937689,25.4183969 26.9135967,25.0098698 26.9135967,24.4938307 C26.9135967,19.655929 22.8699414,15.6995981 17.8760967,15.6995981 L9.03750009,15.6995981 C4.06577161,15.6995981 0,19.634408 0,24.4938307 C0,25.0098698 0.419827843,25.4183969 0.950141726,25.4183969 Z M9.03750009,17.5487305 L17.8760967,17.5487305 C21.4999241,17.5487305 24.4829516,20.1719682 24.9470121,23.569218 L1.96658463,23.569218 C2.43059734,20.1934892 5.41367264,17.5487305 9.03750009,17.5487305 Z"
                      id="Shape"
                    ></path>
                  </g>
                  <g id="Group-7-Copy" transform="translate(23.000000, 0.000000)">
                    <path
                      d="M13.0829984,14.2043983 C17.0044835,14.2043983 20.1851976,11.0187574 20.1851976,7.0913033 C20.1851976,3.16384925 17.0044364,0 13.0829984,0 C9.16156044,0 5.98079928,3.18564093 5.98079928,7.0913033 C5.98079928,10.9969657 9.16151334,14.2043983 13.0829984,14.2043983 Z M13.0829984,1.85465073 C15.9587196,1.85465073 18.3116295,4.21112316 18.3116295,7.0913033 C18.3116295,9.97148344 15.9587196,12.3279087 13.0829984,12.3279087 C10.2072772,12.3279087 7.85436735,9.97143627 7.85436735,7.09125613 C7.85436735,4.211076 10.2072301,1.85465073 13.0829984,1.85465073 Z"
                      id="Shape"
                    ></path>
                    <path
                      d="M0.950141726,25.4183969 L25.963455,25.4183969 C26.4937689,25.4183969 26.9135967,25.0098698 26.9135967,24.4938307 C26.9135967,19.655929 22.8699414,15.6995981 17.8760967,15.6995981 L9.03750009,15.6995981 C4.06577161,15.6995981 0,19.634408 0,24.4938307 C0,25.0098698 0.419827843,25.4183969 0.950141726,25.4183969 Z M9.03750009,17.5487305 L17.8760967,17.5487305 C21.4999241,17.5487305 24.4829516,20.1719682 24.9470121,23.569218 L1.96658463,23.569218 C2.43059734,20.1934892 5.41367264,17.5487305 9.03750009,17.5487305 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    default:
      return <svg src="../img/registration/hello.svg" className={className} />;
  }
}

Icon.propTypes = {
  iconName: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
