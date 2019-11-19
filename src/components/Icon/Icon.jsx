import React from 'react';
import PT from 'prop-types';
import './iconsStyle.sass';

/* eslint-disable */
function Icon({ iconName, className, fill }) {
  switch (iconName) {
    case 'preloader':
      return (
        <svg
          className={className} width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#495570" transform="rotate(137.973 50 51)">
            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
        </svg>
      );
    case 'google-logo':
      return (
        <div className="flex justify-content-center align-items-center">
          <svg className={className} width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"/><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"fill="#4285F4"/><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"fill="#FBBC05"/><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"fill="#34A853"/><path fill="none" d="M0 0h18v18H0z" /></g></svg>
        </div>
      );

    case 'team':
      return (
        <svg className={className} width="48px" height="38px" viewBox="0 0 48 38" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill={fill} fillRule="evenodd"><g id="Onboarding-Flow-7" transform="translate(-1102.000000, -461.000000)" fillRule="nonzero"><g id="Group-9" transform="translate(1020.000000, 432.000000)"><g id="Group-6" transform="translate(82.000000, 29.000000)"><path d="M23.5999986,8.79999948 C18.4185252,8.79999948 15.1999991,11.5088029 15.1999991,15.8970645 C15.1999991,16.3957101 15.5959043,16.799999 16.0842096,16.799999 L31.1157876,16.799999 C31.6040929,16.799999 31.9999981,16.3957101 31.9999981,15.8970645 C31.9999981,11.5178323 28.781472,8.79999948 23.5999986,8.79999948 Z M17.0303148,14.99413 C17.6138937,10.9399542 22.1498934,10.6058684 23.5999986,10.6058684 C25.0501038,10.6058684 29.5861035,10.9399542 30.1696824,14.99413 L17.0303148,14.99413 Z"id="Shape"></path><path d="M23.1999986,0 C20.9908409,0 19.1999989,1.790842 19.1999989,3.99999976 C19.2046304,6.20726279 20.9927356,7.99536794 23.1999986,7.99999952 C25.4091564,7.99999952 27.1999984,6.20915752 27.1999984,3.99999976 C27.1999984,1.790842 25.4091564,0 23.1999986,0 Z M23.1999986,6.3157891 C21.9210513,6.3157891 20.8842093,5.27894705 20.8842093,3.99999976 C20.8842093,2.72105247 21.9210513,1.68421043 23.1999986,1.68421043 C24.4789459,1.68421043 25.515788,2.72105247 25.515788,3.99999976 C25.515788,5.27894705 24.4789459,6.3157891 23.1999986,6.3157891 Z"id="Shape"></path><path d="M8.3999995,29.5999982 C3.21852612,29.5999982 0,32.3088017 0,36.6970633 C0,37.1957088 0.39590524,37.5999978 0.884210474,37.5999978 L15.9157885,37.5999978 C16.4040938,37.5999978 16.799999,37.1957088 16.799999,36.6970633 C16.799999,32.317831 13.5814729,29.5999982 8.3999995,29.5999982 Z M1.83031568,35.7941288 C2.41389459,31.739953 6.94105222,31.4058672 8.3999995,31.4058672 C9.85894678,31.4058672 14.3861044,31.739953 14.9696833,35.7941288 L1.83031568,35.7941288 Z" id="Shape"></path><path d="M8.79999948,20.7999988 C6.59084171,20.7999988 4.79999971,22.5908408 4.79999971,24.7999985 C4.80463129,27.0072615 6.59273645,28.7953667 8.79999948,28.7999983 C11.0091572,28.7999983 12.7999992,27.0091563 12.7999992,24.7999985 C12.7999992,22.5908408 11.0091572,20.7999988 8.79999948,20.7999988 Z M8.79999948,27.1157879 C7.52105218,27.1157879 6.48421014,26.0789458 6.48421014,24.7999985 C6.48421014,23.5210512 7.52105218,22.4842092 8.79999948,22.4842092 C10.0789468,22.4842092 11.1157888,23.5210512 11.1157888,24.7999985 C11.1157888,26.0789458 10.0789468,27.1157879 8.79999948,27.1157879 Z" id="Shape"></path><path d="M38.7999977,29.5999982 C33.6185243,29.5999982 30.3999982,32.3088017 30.3999982,36.6970633 C30.3999982,37.1957088 30.7959034,37.5999978 31.2842087,37.5999978 L46.3157867,37.5999978 C46.8040919,37.5999978 47.1999972,37.1957088 47.1999972,36.6970633 C47.1999972,32.317831 43.9814711,29.5999982 38.7999977,29.5999982 Z M32.2303139,35.7941288 C32.8138928,31.739953 37.3410504,31.4058672 38.7999977,31.4058672 C40.258945,31.4058672 44.7861026,31.739953 45.3696815,35.7941288 L32.2303139,35.7941288 Z" id="Shape"></path><path d="M39.1999977,20.7999988 C36.9908399,20.7999988 35.1999979,22.5908408 35.1999979,24.7999985 C35.2046295,27.0072615 36.9927346,28.7953667 39.1999977,28.7999983 C41.4091554,28.7999983 43.1999974,27.0091563 43.1999974,24.7999985 C43.1999974,22.5908408 41.4091554,20.7999988 39.1999977,20.7999988 Z M39.1999977,27.1157879 C37.9210504,27.1157879 36.8842083,26.0789458 36.8842083,24.7999985 C36.8842083,23.5210512 37.9210504,22.4842092 39.1999977,22.4842092 C40.478945,22.4842092 41.515787,23.5210512 41.515787,24.7999985 C41.515787,26.0789458 40.478945,27.1157879 39.1999977,27.1157879 Z" id="Shape"></path><path d="M28.5878119,28.1120044 L24.9082609,24.4426353 L24.9082609,19.2757433 C24.9082609,18.7921135 24.5131725,18.3999989 24.0258746,18.3999989 C23.5385768,18.3999989 23.1434883,18.7921135 23.1434883,19.2757433 L23.1434883,24.4426353 L19.4639373,28.0944895 C19.115505,28.4354825 19.1115342,28.992237 19.4551134,29.3380465 C19.7986926,29.6838561 20.3596697,29.687797 20.708102,29.346804 L24.0258746,26.0452476 L27.3436472,29.346804 C27.7138083,29.6614152 28.2708147,29.6186132 28.5878119,29.2512384 C28.8707271,28.9233816 28.8707271,28.4398612 28.5878119,28.1120044 Z" id="Path"></path></g></g></g></g></svg>
      );

    case 'people':
      return (
        <svg className={className} width="50px" height="40px" viewBox="0 0 50 40" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fill={fill}><g id="Onboarding-Flow-7" transform="translate(-1326.000000, -460.000000)" fillRule="nonzero"><g id="Group" transform="translate(1245.000000, 432.000000)"><g id="Group-8" transform="translate(81.000000, 28.000000)"><g id="Group-7" transform="translate(0.000000, 14.000000)"><path d="M13.0829984,14.2043983 C17.0044835,14.2043983 20.1851976,11.0187574 20.1851976,7.0913033 C20.1851976,3.16384925 17.0044364,0 13.0829984,0 C9.16156044,0 5.98079928,3.18564093 5.98079928,7.0913033 C5.98079928,10.9969657 9.16151334,14.2043983 13.0829984,14.2043983 Z M13.0829984,1.85465073 C15.9587196,1.85465073 18.3116295,4.21112316 18.3116295,7.0913033 C18.3116295,9.97148344 15.9587196,12.3279087 13.0829984,12.3279087 C10.2072772,12.3279087 7.85436735,9.97143627 7.85436735,7.09125613 C7.85436735,4.211076 10.2072301,1.85465073 13.0829984,1.85465073 Z" id="Shape"></path>
                    <path d="M0.950141726,25.4183969 L25.963455,25.4183969 C26.4937689,25.4183969 26.9135967,25.0098698 26.9135967,24.4938307 C26.9135967,19.655929 22.8699414,15.6995981 17.8760967,15.6995981 L9.03750009,15.6995981 C4.06577161,15.6995981 0,19.634408 0,24.4938307 C0,25.0098698 0.419827843,25.4183969 0.950141726,25.4183969 Z M9.03750009,17.5487305 L17.8760967,17.5487305 C21.4999241,17.5487305 24.4829516,20.1719682 24.9470121,23.569218 L1.96658463,23.569218 C2.43059734,20.1934892 5.41367264,17.5487305 9.03750009,17.5487305 Z" id="Shape"></path></g><g id="Group-7-Copy" transform="translate(23.000000, 0.000000)"><path d="M13.0829984,14.2043983 C17.0044835,14.2043983 20.1851976,11.0187574 20.1851976,7.0913033 C20.1851976,3.16384925 17.0044364,0 13.0829984,0 C9.16156044,0 5.98079928,3.18564093 5.98079928,7.0913033 C5.98079928,10.9969657 9.16151334,14.2043983 13.0829984,14.2043983 Z M13.0829984,1.85465073 C15.9587196,1.85465073 18.3116295,4.21112316 18.3116295,7.0913033 C18.3116295,9.97148344 15.9587196,12.3279087 13.0829984,12.3279087 C10.2072772,12.3279087 7.85436735,9.97143627 7.85436735,7.09125613 C7.85436735,4.211076 10.2072301,1.85465073 13.0829984,1.85465073 Z" id="Shape"></path><path d="M0.950141726,25.4183969 L25.963455,25.4183969 C26.4937689,25.4183969 26.9135967,25.0098698 26.9135967,24.4938307 C26.9135967,19.655929 22.8699414,15.6995981 17.8760967,15.6995981 L9.03750009,15.6995981 C4.06577161,15.6995981 0,19.634408 0,24.4938307 C0,25.0098698 0.419827843,25.4183969 0.950141726,25.4183969 Z M9.03750009,17.5487305 L17.8760967,17.5487305 C21.4999241,17.5487305 24.4829516,20.1719682 24.9470121,23.569218 L1.96658463,23.569218 C2.43059734,20.1934892 5.41367264,17.5487305 9.03750009,17.5487305 Z" id="Shape"></path></g></g></g></g></g></svg>
      );
    case 'add_email':
      return (
        <svg className={className} fill="#495570" opacity="0.303706" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Styles" stroke="none" strokeWidth="1" fillRule="evenodd" >
            <g transform="translate(-459.000000, -651.000000)"  id="Icon-/-Add-Copy-Icon-/-Add">
              <g transform="translate(459.000000, 651.000000)">
                <path d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M13,6 L11,6 L11,11 L6,11 L6,13 L11,13 L11,18 L13,18 L13,13 L18,13 L18,11 L13,11 L13,6 Z" id="Combined-Shape"></path>
              </g>
            </g>
          </g>
        </svg>
      );
    case 'delete':
      return (
        <svg className={className} fill="#E76A7D" width="20px" height="20px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Styles" stroke="none" strokeWidth="1" fillRule="evenodd">
            <g transform="translate(-297.000000, -742.000000)" id="Icon-/-delete">
              <g transform="translate(297.000000, 742.000000)">
                <g id="Group-2-Copy-2">
                  <path d="M14,0 C21.7319865,0 28,6.2680135 28,14 C28,21.7319865 21.7319865,28 14,28 C6.2680135,28 0,21.7319865 0,14 C0,6.2680135 6.2680135,0 14,0 Z M18.0592929,8.15979797 L14.0994949,12.1195959 L10.139697,8.15979797 L8.15979797,10.139697 L12.1203031,14.0987878 L8.15979797,18.0592929 L10.139697,20.0391919 L14.100202,16.0786868 L18.0592929,20.0391919 L20.0391919,18.0592929 L16.0793939,14.0994949 L20.0391919,10.139697 L18.0592929,8.15979797 Z" id="Combined-Shape"></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    case 'accept':
      return (
        <svg className={className} fill="#53D0BA" width="20px" height="20px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Styles" stroke="none" strokeWidth="1" fillRule="evenodd">
            <g transform="translate(-241.000000, -741.000000)" id="Accept">
              <g transform="translate(241.000000, 741.000000)">
                <circle id="Oval" cx="14" cy="14" r="14"></circle>
                <g className={className} id="Icon-/-check" transform="translate(8.000000, 8.000000)" fill="#FFFFFF">
                  <polygon id="done_mini-[#1484]" points="12 2.92 4.6164 10.6 4.6152 10.5988 4.6152 10.6 0 5.8 1.8456 3.88 4.6152 6.76 10.1544 1"></polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    case 'show-password':
      return (
        <svg className={className}  width="20px" height="14px" viewBox="0 0 20 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Styles" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-125.000000, -810.000000)" fill="#495570" id="Icon-/-Show">
              <g transform="translate(125.000000, 807.000000)">
                <path d="M10.0004512,3.33303255 C13.2733974,3.33303255 16.6065803,5.55535503 20,10 C16.6065803,14.444645 13.2733974,16.6669675 10.0004512,16.6669675 C6.727505,16.6669675 3.39402127,14.444645 -1.42108547e-14,10 C3.39402127,5.55535503 6.727505,3.33303255 10.0004512,3.33303255 Z M10.0004512,5.33303255 C7.73831866,5.33303255 5.245093,6.83342488 2.56399146,10 C5.245093,13.1665751 7.73831866,14.6669675 10.0004512,14.6669675 C12.1871539,14.6669675 14.589589,13.2649482 17.1687457,10.3111111 L17.4361838,10 L17.1687457,9.68888889 C14.589589,6.73505181 12.1871539,5.33303255 10.0004512,5.33303255 Z M10,7 C11.6568542,7 13,8.34314575 13,10 C13,11.6568542 11.6568542,13 10,13 C8.34314575,13 7,11.6568542 7,10 C7,8.34314575 8.34314575,7 10,7 Z" id="Combined-Shape"></path>
              </g>
            </g>
          </g>
        </svg>
      );
    case 'hide-password':
      return (
        <svg className={className} width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Styles" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-185.000000, -809.000000)" fill="#495570" id="Icon-/-Hide">
              <g transform="translate(185.000000, 807.000000)">
                <path d="M16.2928932,2.29289322 L17.7071068,3.70710678 L15.8025804,5.61173186 C17.1913274,6.69106128 18.5904672,8.15381732 20,10 C16.6065803,14.444645 13.2733974,16.6669675 10.0004512,16.6669675 C8.64263145,16.6669675 7.27439259,16.2844832 5.89573461,15.5195146 L3.70710678,17.7071068 L2.29289322,16.2928932 L4.1979668,14.3882318 C2.8090891,13.3089059 1.40976683,11.846162 0,10 C3.39402127,5.55535503 6.727505,3.33303255 10.0004512,3.33303255 C11.3582709,3.33303255 12.726458,3.71551682 14.1050124,4.48048537 L16.2928932,2.29289322 Z M14.3761321,7.03665715 L12.7079575,8.70727122 C12.8951705,9.09873251 13,9.53712413 13,10 C13,11.6568542 11.6568542,13 10,13 C9.53712413,13 9.09873251,12.8951705 8.70727122,12.7079575 L7.38024681,14.0346264 C8.28418752,14.4590382 9.15833217,14.6669675 10.0004512,14.6669675 C12.1871539,14.6669675 14.589589,13.2649482 17.1687457,10.3111111 L17.4361838,10 L17.1687457,9.68888889 C16.2129426,8.59423398 15.2814096,7.71269805 14.3761321,7.03665715 Z M10.0004512,5.33303255 C7.73831866,5.33303255 5.245093,6.83342488 2.56399146,10 C3.61382463,11.239929 4.63485166,12.2243899 5.6244779,12.9633363 L7.29251502,11.2937164 C7.10500593,10.9020049 7,10.4632652 7,10 C7,8.34314575 8.34314575,7 10,7 C10.4628759,7 10.9012675,7.10482952 11.2927288,7.29204249 L12.6205337,5.96536967 C11.7166639,5.54095977 10.8425604,5.33303255 10.0004512,5.33303255 Z" id="Combined-Shape"></path>
              </g>
            </g>
          </g>
        </svg>
      );
    case 'close-modal':
      return (
        <svg className={className} width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Icon-/-close" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon id="close-[#1511]" fill="#434C60" points="11.0122 10 17 15.9878 15.9871 17 10 11.0122 4.0122 17 3 15.9878 8.9871 10 3 4.0122 4.0122 3 10 8.9878 15.9871 3 17 4.0122"></polygon>
          </g>
        </svg>
      );
    case 'squad-logo':
      return (
        <svg className={className} width="186px" height="39px" viewBox="0 0 186 39" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <polygon id="path-1" points="0.246112573 0.127766389 21.9182927 0.127766389 21.9182927 29.3766234 0.246112573 29.3766234"></polygon>
            <polygon id="path-3" points="0.170894688 0.341839703 21.8430748 0.341839703 21.8430748 31.1319967 0.170894688 31.1319967"></polygon>
          </defs><g id="Styles" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-870.000000, -606.000000)" id="Logo-Squad"><g transform="translate(870.000000, 606.000000)"><g id="Group-9-Copy" transform="translate(0.000000, 2.025974)"><path d="M17.3988119,13.0752481 L5.6300651,33.7860612 C4.83212139,35.1905383 3.04742772,35.6765592 1.66513396,34.8658099 L1.44890334,34.7388121 C0.0666095775,33.9280628 -0.411734736,32.1152639 0.386736367,30.7102509 L12.1554832,9.99943778 C12.9534269,8.59496064 14.7375932,8.10893975 16.1198869,8.9202249 L16.3361175,9.04668679 C17.7184113,9.85797194 18.1967556,11.6707709 17.3988119,13.0752481" id="Fill-1" fill="#E76A7D"></path><path d="M18.958362,4.61141124 L30.602117,25.1025236 C31.4348686,26.5680883 33.296034,27.0744717 34.7379231,26.2283559 C36.1792847,25.382776 36.6787247,23.4917421 35.8459731,22.0267133 L24.2016908,1.53560096 C23.3694666,0.0705721626 21.5088285,-0.435811237 20.0669395,0.409768662 C18.6245231,1.25534856 18.1261379,3.14638244 18.958362,4.61141124" id="Fill-4" fill="#53D0BA"></path><path d="M13.648371,36.7873339 L37.1853372,36.7873339 C38.781752,36.7873339 40.0881014,35.46002 40.0881014,33.8385214 L40.0881014,33.5845259 C40.0881014,31.9624915 38.781752,30.6357134 37.1853372,30.6357134 L13.648371,30.6357134 C12.0519562,30.6357134 10.7456068,31.9624915 10.7456068,33.5845259 L10.7456068,33.8385214 C10.7456068,35.46002 12.0519562,36.7873339 13.648371,36.7873339" id="Fill-6" fill="#FB9082"></path></g><g id="Group-13" transform="translate(54.646900, 0.000000)"><path d="M0,24.4628938 L3.66026105,24.4628938 C3.70594294,26.2936093 5.28723896,27.8040831 7.86343374,27.8040831 C10.5301138,27.8040831 12.1114098,26.5680387 12.1114098,24.828948 C12.1114098,23.2277391 10.8911764,22.4040061 9.21895583,22.0379519 L6.3269411,21.3512112 C2.80196871,20.3904859 0.768246319,18.6518399 0.768246319,15.2194707 C0.768246319,11.6954768 3.75074632,8.99566074 7.99916165,8.99566074 C11.5693767,8.99566074 15.2748804,10.9175562 15.2748804,15.2194707 L11.4788914,15.2194707 C11.4336488,13.5720047 9.76186747,12.4733975 8.08920767,12.4733975 C6.05548528,12.4733975 4.69996319,13.708997 4.69996319,15.3564631 C4.69996319,16.8206796 6.05548528,17.5986003 7.41144663,17.9192868 L10.5301138,18.6972075 C14.9133785,19.7958147 16.0431267,22.4498184 16.0431267,24.8752051 C16.0431267,28.8564331 12.2471377,31.281375 7.86343374,31.281375 C4.06744478,31.281375 0.180531296,28.8564331 0,24.4628938" id="Fill-1" fill="#FFFFFF"></path><g id="Group-5" transform="translate(19.051213, 8.995661)"><mask id="mask-2" fill="white"><use href="#path-1"></use></mask><g id="Clip-4"></g><path d="M18.0466694,11.1803921 C18.0466694,6.66910735 14.7087947,3.82702865 10.9712573,3.82702865 C7.18830379,3.82702865 4.16185445,6.98523489 4.16185445,11.1803921 C4.16185445,15.4207104 7.18830379,18.3978338 10.9712573,18.3978338 C14.3973693,18.3978338 18.0466694,15.7363995 18.0466694,11.1803921 L18.0466694,11.1803921 Z M21.9182927,0.578938709 L21.9182927,29.3767988 L18.0466694,29.3767988 L18.0466694,18.3526728 C16.6673144,20.8343398 13.7303999,22.0966576 10.6148483,22.0966576 C4.91835865,22.0966576 0.246112573,17.8116167 0.246112573,11.1347926 C0.246112573,4.5035679 4.96334232,0.127766389 10.6593994,0.127766389 C13.6408651,0.127766389 16.6673144,1.48128335 18.0466694,3.9173508 L18.0466694,0.578938709 L21.9182927,0.578938709 Z" id="Fill-3" fill="#FFFFFF" mask="url(#mask-2)"></path></g><path d="M65.1752022,9.50215424 L65.1752022,30.8251635 L61.2193518,30.8251635 L61.2193518,27.49189 C59.946108,30.1399585 56.5356179,31.281375 54.1716537,31.281375 C48.851077,31.281375 45.5775898,27.8118594 45.6231102,21.8300737 L45.6231102,9.50215424 L49.5789605,9.50215424 L49.5789605,21.6024117 C49.5789605,25.1633471 51.7162069,27.3552041 54.6714936,27.3552041 C57.6272222,27.3552041 61.1738315,25.6657124 61.2193518,21.0538927 L61.2193518,9.50215424 L65.1752022,9.50215424 Z" id="Fill-6" fill="#FFFFFF"></path><path d="M87.3045029,20.0702441 C87.3045029,15.447643 83.5895769,12.7478269 80.1022661,12.7478269 C76.2521799,12.7478269 73.1716706,15.7683296 73.1716706,20.0702441 C73.1716706,24.3259015 76.2521799,27.5292089 80.1022661,27.5292089 C83.9070054,27.5292089 87.3045029,24.6461433 87.3045029,20.0702441 L87.3045029,20.0702441 Z M91.245283,9.45333961 L91.245283,30.8241409 L87.3045029,30.8241409 L87.3045029,27.4375841 C85.9005092,29.9087832 82.8195597,31.281375 79.7852779,31.281375 C73.9870348,31.281375 69.1859838,26.8429129 69.1859838,20.1160565 C69.1859838,13.3429429 73.9416878,8.99566074 79.7394907,8.99566074 C82.9106938,8.99566074 85.9005092,10.2766278 87.3045029,12.794084 L87.3045029,9.45333961 L91.245283,9.45333961 Z" id="Fill-8" fill="#FFFFFF"></path><g id="Group-12" transform="translate(95.256065, 0.385271)"><mask id="mask-4" fill="white"><use href="#path-3"></use></mask><g id="Clip-11"></g><path d="M17.9718841,19.82437 C17.9718841,15.1619815 14.3225839,12.4389277 10.8960394,12.4389277 C7.11351844,12.4389277 4.0870691,15.4854283 4.0870691,19.82437 C4.0870691,24.1166565 7.11351844,27.3475351 10.8960394,27.3475351 C14.6340093,27.3475351 17.9718841,24.4396546 17.9718841,19.82437 L17.9718841,19.82437 Z M21.8430748,0.341749981 L21.8430748,30.6708272 L17.9718841,30.6708272 L17.9718841,27.2551218 C16.5925291,29.7475908 13.5660797,31.1319967 10.584614,31.1319967 C4.88812443,31.1319967 0.170894688,26.6553322 0.170894688,19.8705767 C0.170894688,13.0391659 4.8435733,8.65446612 10.5400629,8.65446612 C13.655182,8.65446612 16.5925291,9.9464587 17.9718841,12.485583 L17.9718841,0.341749981 L21.8430748,0.341749981 Z" id="Fill-10" fill="#FFFFFF" mask="url(#mask-4)"></path></g></g><path d="M179.472198,1.57809329 L177.834495,1.57809329 L177.834495,6.07792208 L176.732901,6.07792208 L176.732901,1.57809329 L175.11723,1.57809329 L175.11723,0.676643669 L179.472198,0.676643669 L179.472198,1.57809329 Z M181.539523,0.676643669 L182.912844,4.59405438 L184.27882,0.676643669 L185.725581,0.676643669 L185.725581,6.07792208 L184.620315,6.07792208 L184.620315,4.60147372 L184.730474,2.05293096 L183.287386,6.07792208 L182.530958,6.07792208 L181.091542,2.05664062 L181.201701,4.60147372 L181.201701,6.07792208 L180.100107,6.07792208 L180.100107,0.676643669 L181.539523,0.676643669 Z" id="TM" fill="#FFFFFF" fillRule="nonzero"></path></g></g></g>
        </svg>
      );
    case 'arrow-right':
      return (
        <svg className={className} width="8px" height="14px" viewBox="0 0 8 14" version="1.1">
          <g id="Web" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="01-" transform="translate(-250.000000, -30.000000)" fill="#9398A2">
              <g id="Group-9" transform="translate(-0.000926, 0.000000)">
                <g id="Icon/16/arrow" transform="translate(246.000926, 29.000000)">
                  <path d="M1.98375706,12 L8.00918079,5.99172462 L8.65183616,6.63262611 L14.0014124,11.9676028 L15,10.9717405 C13.5204802,9.49625847 9.38983051,5.37688177 8.00918079,4 C6.98305085,5.02262523 7.98305085,4.02535434 1,10.9893477 L1.98375706,12 Z" id="arrow_up-[#340]-copy-5" transform="translate(8.000000, 8.000000) rotate(-90.000000) translate(-8.000000, -8.000000) "></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    case 'sidebar-tasks':
      return (
        <svg className={className} width="24px" height="20px" viewBox="0 0 24 20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Web" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="01-" transform="translate(-122.000000, -105.000000)"><g id="Group-4" transform="translate(30.000000, 103.000000)"><g id="Icons/24/tasks" transform="translate(92.000000, 0.000000)"><path d="M12,10 C9.79067033,10 8,8.20776166 8,6 C8,3.79067033 9.79067033,2 12,2 C14.2093297,2 16,3.79067033 16,6 C16,8.20776166 14.2093297,10 12,10" id="Fill-1" fill="#FB9082"></path><path d="M19.9992161,22 C17.7918871,22 16,20.2093297 16,18 C16,15.7906703 17.7918871,14 19.9992161,14 C22.2081129,14 24,15.7906703 24,18 C24,20.2093297 22.2081129,22 19.9992161,22" id="Fill-3" fill="#E76A7D"></path><path d="M4,22 C1.79067033,22 0,20.2093297 0,18 C0,15.7906703 1.79067033,14 4,14 C6.20932967,14 8,15.7906703 8,18 C8,20.2093297 6.20932967,22 4,22" id="Fill-5" fill="#53D0BA"></path></g></g></g></g></svg>
      );
    case 'sidebar-settings':
      return (
        <svg className={className} width="22px" height="24px" viewBox="0 0 22 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><polygon id="path-1" points="0.132978336 0.230608977 16.7499418 0.230608977 16.7499418 7.3744856 0.132978336 7.3744856"></polygon></defs><g id="Web" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="01-" transform="translate(-211.000000, -103.000000)"><g id="Group-4" transform="translate(30.000000, 103.000000)"><g id="Icon/24/settings" transform="translate(180.000000, 0.000000)"><path d="M3.57679563,16.7778432 C2.99589667,16.8830873 2.3902727,16.6078954 2.1174641,16.0698617 C1.68297057,15.2139478 1.36960183,14.3003107 1.18624778,13.35553 C0.288646379,8.73338013 2.69891868,4.03793528 7.04774331,1.93734859 C7.7144853,1.61651512 8.52429901,1.87667214 8.8573922,2.5207554 C9.19048538,3.16457018 8.92017707,3.94772603 8.25371289,4.26963342 C4.97723162,5.85232239 3.16119312,9.3906189 3.83765843,12.874414 C3.97628521,13.588302 4.2127008,14.2772214 4.53968219,14.9218417 C4.86777481,15.5683412 4.59135469,16.3493493 3.92266804,16.666424 C3.81015533,16.719583 3.6940311,16.7563648 3.57679563,16.7778432" id="Fill-1" fill="#E76A7D"></path><g id="Group-5" transform="translate(5.000000, 15.800001)"><mask id="mask-2" fill="white"><use href="#path-1"></use></mask><g id="Clip-4"></g><path d="M9.24939534,7.19626008 C6.20747129,7.74960988 3.06796429,7.00083621 0.63572978,5.14246584 C0.0632794137,4.70500082 -0.0348471686,3.90065514 0.416372019,3.34625185 C0.867863025,2.79132181 1.69772578,2.696507 2.27017615,3.13370864 C4.10359387,4.53512428 6.47004823,5.09927243 8.76256789,4.68235062 C11.0928704,4.25884444 13.1054167,2.87086091 14.2842947,0.874482305 C14.6460855,0.261873251 15.4525719,0.0488032922 16.085366,0.399618107 C16.7178883,0.750432922 16.9375179,1.53160165 16.5754553,2.14473745 C15.0116818,4.7929679 12.3416059,6.63395556 9.24939534,7.19626008" id="Fill-3" fill="#53D0BA" mask="url(#mask-2)"></path></g><path d="M21.8537269,13.7768299 C21.7402619,13.7977193 21.6225421,13.804961 21.5019856,13.7966052 C20.7431888,13.7442423 20.1713256,13.0977827 20.2246541,12.3527249 C20.275146,11.6502816 20.2325966,10.9392039 20.0989917,10.2392674 C19.3818933,6.48779665 16.1748069,3.71757409 12.2996958,3.50283032 C11.5403317,3.46077285 10.9593913,2.82211204 11.0022243,2.07649715 C11.0450573,1.33060372 11.6952114,0.75962481 12.4551428,0.802239334 C17.5985082,1.08717174 21.8551452,4.76288329 22.8065486,9.74042675 C22.9835539,10.6670837 23.0394354,11.6098953 22.9727748,12.5424013 C22.9279561,13.169364 22.4545237,13.6662549 21.8537269,13.7768299" id="Fill-6" fill="#FB9082"></path></g></g></g></g></svg>
      );
    case 'sidebar-inbox':
      return (
        <svg className={className} width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Web" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="01-" transform="translate(-38.000000, -102.000000)"><g id="Group-9" transform="translate(-0.000926, 0.000000)"><g id="Group-4" transform="translate(30.000926, 99.000000)"><g id="Icon/24/Inbox-Copy" transform="translate(8.000000, 3.000000)"><path d="M0.00381936643,2 C0.00381936643,0.8954305 0.899249867,2.88466602e-14 2.00381937,2.8643754e-14 L16.0038194,2.8643754e-14 C17.1083889,2.84408479e-14 18.0038194,0.8954305 18.0038194,2 C18.0038194,3.1045695 17.1083889,4 16.0038194,4 L2.00381937,4 C0.899249867,4 0.00381936643,3.1045695 0.00381936643,2 Z" id="Fill-7" fill="#E76A7D"></path><path d="M0.00381936643,9 C0.00381936643,7.8954305 0.899249867,7 2.00381937,7 L16.0038194,7 C17.1083889,7 18.0038194,7.8954305 18.0038194,9 C18.0038194,10.1045695 17.1083889,11 16.0038194,11 L2.00381937,11 C0.899249867,11 0.00381936643,10.1045695 0.00381936643,9 Z" id="Fill-9" fill="#53D0BA"></path><path d="M0.00381936643,16 C0.00381936643,14.8954305 0.899249867,14 2.00381937,14 L9.00381937,14 C10.1083889,14 11.0038194,14.8954305 11.0038194,16 C11.0038194,17.1045695 10.1083889,18 9.00381937,18 L2.00381937,18 C0.899249867,18 0.00381936643,17.1045695 0.00381936643,16 Z" id="Fill-11" fill="#FB9082"></path></g></g></g></g></g></svg>
      );
    default:
      return null;
      // return <svg src="../img/registration/hello.svg" className={className} />;
  }
}

Icon.propTypes = {
  iconName: PT.string,
  className: PT.string,
};

export default Icon;
