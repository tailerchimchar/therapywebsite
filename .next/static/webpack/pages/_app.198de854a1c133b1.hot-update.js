"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[2]!./src/Styles/App.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[2]!./src/Styles/App.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* src/App.css */\\r\\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .navbar {\\r\\n    flex-direction: column; /* Change to a vertical layout on small screens */\\r\\n  }\\r\\n}\\r\\n\\r\\nnav {\\r\\n  background-color: gainsboro; /* Background color */\\r\\n  padding: 5px; /* Adjust padding as needed */\\r\\n  display: flex;\\r\\n  justify-content: flex-end; /* Align items to the right */\\r\\n}\\r\\n.headshot-container {\\r\\n  width: 300px;\\r\\n  height: 300px;\\r\\n  margin: 0 auto;\\r\\n  border-radius: 50%;\\r\\n  overflow: hidden;\\r\\n  background-color: #f0f0f0;\\r\\n}\\r\\n\\r\\n.headshot-container img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n  object-position: center;\\r\\n}\\r\\n\\r\\n.div1{\\r\\n  background-color: white;\\r\\n  padding: 10vh;\\r\\n}\\r\\n\\r\\n.div2{\\r\\n  padding: 5vh;\\r\\n  margin-top: 30vh;\\r\\n  margin-bottom: 30vh;\\r\\n}\\r\\n\\r\\n.content1{\\r\\n  font-family: 'Arial', sans-serif;\\r\\n  font-size: 40px;\\r\\n  font-weight: bold;\\r\\n  color:#f0f0f0;\\r\\n}\\r\\n\\r\\n.div3{\\r\\n  display: flex;\\r\\n  height: 100vh;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.rightContent{\\r\\n  background-color: white;\\r\\n  flex: 1;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.leftContent{\\r\\n \\r\\n  flex: 1;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.middleContent{\\r\\n  flex: 1;\\r\\n  position: absolute;\\r\\n  left: 50%;\\r\\n  top: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  background-color: white;\\r\\n  width: 70vh; /* Adjust the width as needed */\\r\\n  height: 30vh; /* Adjust the height as needed */\\r\\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);\\r\\n  z-index: 2;\\r\\n}\\r\\n\\r\\n.content2{\\r\\n  font-family: 'Arial', sans-serif;\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n  color:black;\\r\\n  margin-bottom: 20px;\\r\\n  padding: 50px;\\r\\n\\r\\n}\\r\\n\\r\\n.div-service{\\r\\n  background-color: whitesmoke;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.service-box {\\r\\n  display: inline-block;\\r\\n  width: 30vh;\\r\\n  height: 50vh;\\r\\n  background-color: #f0f0f0;\\r\\n  margin: 10px;\\r\\n  padding: 10px;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.fillerDiv{\\r\\n  height: 50vh;\\r\\n  background-color: whitesmoke;\\r\\n}\\r\\n\\r\\n.backgroundimg{\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.line {\\r\\n  border-bottom: solid #938585 2px;\\r\\n  width: 250px;\\r\\n  padding-bottom: 15px;\\r\\n  display: inline-block; /* Ensure the line only takes the width of its content */\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n.image-spacing{\\r\\n  margin-top: 50px;\\r\\n  margin-left: 50px;\\r\\n}\\r\\n\\r\\nnav.footer-spacing p {\\r\\n  margin: 3px 0;\\r\\n}\\r\\n\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: #f0f0f0;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.top-div {\\r\\n  position: absolute;\\r\\n  top: 0; \\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  background-color: #E0C8EA;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 0px; \\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.social-links {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.social-links a {\\r\\n  margin-right: 10px; /* Add some margin between the links */\\r\\n}\\r\\n\\r\\n.move-right {\\r\\n  padding-left: 20px;\\r\\n}\\r\\n\\r\\n.submit-button {\\r\\n  background-color: #3498db; /* Blue color, adjust as needed */\\r\\n  color: #fff; /* White text color */\\r\\n  padding: 10px 15px; /* Adjust padding as needed */\\r\\n  border: none;\\r\\n  margin:20px;\\r\\n  border-radius: 5px; /* Rounded corners, adjust as needed */\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.top-div-button {\\r\\n  position: absolute;\\r\\n  top: 0; \\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  background-color: #E0C8EA;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 0px; \\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.div-test{\\r\\n  padding: 100px;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  background-color: red;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/Styles/App.css\"],\"names\":[],\"mappings\":\"AAAA,gBAAgB;AAChB,wFAAwF;;AAExF;EACE;IACE,sBAAsB,EAAE,iDAAiD;EAC3E;AACF;;AAEA;EACE,2BAA2B,EAAE,qBAAqB;EAClD,YAAY,EAAE,6BAA6B;EAC3C,aAAa;EACb,yBAAyB,EAAE,6BAA6B;AAC1D;AACA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gCAAgC;EAChC,eAAe;EACf,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,OAAO;EACP,UAAU;AACZ;;AAEA;;EAEE,OAAO;EACP,UAAU;AACZ;;AAEA;EACE,OAAO;EACP,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,uBAAuB;EACvB,WAAW,EAAE,+BAA+B;EAC5C,YAAY,EAAE,gCAAgC;EAC9C,2CAA2C;EAC3C,UAAU;AACZ;;AAEA;EACE,gCAAgC;EAChC,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,aAAa;;AAEf;;AAEA;EACE,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gCAAgC;EAChC,YAAY;EACZ,oBAAoB;EACpB,qBAAqB,EAAE,wDAAwD;EAC/E,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;;AAGA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,yBAAyB;EACzB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB,EAAE,sCAAsC;AAC5D;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB,EAAE,iCAAiC;EAC5D,WAAW,EAAE,qBAAqB;EAClC,kBAAkB,EAAE,6BAA6B;EACjD,YAAY;EACZ,WAAW;EACX,kBAAkB,EAAE,sCAAsC;EAC1D,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,yBAAyB;EACzB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,qBAAqB;AACvB\",\"sourcesContent\":[\"/* src/App.css */\\r\\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .navbar {\\r\\n    flex-direction: column; /* Change to a vertical layout on small screens */\\r\\n  }\\r\\n}\\r\\n\\r\\nnav {\\r\\n  background-color: gainsboro; /* Background color */\\r\\n  padding: 5px; /* Adjust padding as needed */\\r\\n  display: flex;\\r\\n  justify-content: flex-end; /* Align items to the right */\\r\\n}\\r\\n.headshot-container {\\r\\n  width: 300px;\\r\\n  height: 300px;\\r\\n  margin: 0 auto;\\r\\n  border-radius: 50%;\\r\\n  overflow: hidden;\\r\\n  background-color: #f0f0f0;\\r\\n}\\r\\n\\r\\n.headshot-container img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n  object-position: center;\\r\\n}\\r\\n\\r\\n.div1{\\r\\n  background-color: white;\\r\\n  padding: 10vh;\\r\\n}\\r\\n\\r\\n.div2{\\r\\n  padding: 5vh;\\r\\n  margin-top: 30vh;\\r\\n  margin-bottom: 30vh;\\r\\n}\\r\\n\\r\\n.content1{\\r\\n  font-family: 'Arial', sans-serif;\\r\\n  font-size: 40px;\\r\\n  font-weight: bold;\\r\\n  color:#f0f0f0;\\r\\n}\\r\\n\\r\\n.div3{\\r\\n  display: flex;\\r\\n  height: 100vh;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.rightContent{\\r\\n  background-color: white;\\r\\n  flex: 1;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.leftContent{\\r\\n \\r\\n  flex: 1;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.middleContent{\\r\\n  flex: 1;\\r\\n  position: absolute;\\r\\n  left: 50%;\\r\\n  top: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  background-color: white;\\r\\n  width: 70vh; /* Adjust the width as needed */\\r\\n  height: 30vh; /* Adjust the height as needed */\\r\\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);\\r\\n  z-index: 2;\\r\\n}\\r\\n\\r\\n.content2{\\r\\n  font-family: 'Arial', sans-serif;\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n  color:black;\\r\\n  margin-bottom: 20px;\\r\\n  padding: 50px;\\r\\n\\r\\n}\\r\\n\\r\\n.div-service{\\r\\n  background-color: whitesmoke;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.service-box {\\r\\n  display: inline-block;\\r\\n  width: 30vh;\\r\\n  height: 50vh;\\r\\n  background-color: #f0f0f0;\\r\\n  margin: 10px;\\r\\n  padding: 10px;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.fillerDiv{\\r\\n  height: 50vh;\\r\\n  background-color: whitesmoke;\\r\\n}\\r\\n\\r\\n.backgroundimg{\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.line {\\r\\n  border-bottom: solid #938585 2px;\\r\\n  width: 250px;\\r\\n  padding-bottom: 15px;\\r\\n  display: inline-block; /* Ensure the line only takes the width of its content */\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n.image-spacing{\\r\\n  margin-top: 50px;\\r\\n  margin-left: 50px;\\r\\n}\\r\\n\\r\\nnav.footer-spacing p {\\r\\n  margin: 3px 0;\\r\\n}\\r\\n\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: #f0f0f0;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.top-div {\\r\\n  position: absolute;\\r\\n  top: 0; \\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  background-color: #E0C8EA;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 0px; \\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.social-links {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.social-links a {\\r\\n  margin-right: 10px; /* Add some margin between the links */\\r\\n}\\r\\n\\r\\n.move-right {\\r\\n  padding-left: 20px;\\r\\n}\\r\\n\\r\\n.submit-button {\\r\\n  background-color: #3498db; /* Blue color, adjust as needed */\\r\\n  color: #fff; /* White text color */\\r\\n  padding: 10px 15px; /* Adjust padding as needed */\\r\\n  border: none;\\r\\n  margin:20px;\\r\\n  border-radius: 5px; /* Rounded corners, adjust as needed */\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.top-div-button {\\r\\n  position: absolute;\\r\\n  top: 0; \\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  background-color: #E0C8EA;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 0px; \\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.div-test{\\r\\n  padding: 100px;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  background-color: red;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvU3R5bGVzL0FwcC5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDMkg7QUFDM0gsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHFJQUFxSSxtQkFBbUIsbUNBQW1DLGVBQWUsZ0NBQWdDLHlEQUF5RCxLQUFLLGFBQWEsbUNBQW1DLDBDQUEwQyxrREFBa0QsaUNBQWlDLG1DQUFtQyx5QkFBeUIsbUJBQW1CLG9CQUFvQixxQkFBcUIseUJBQXlCLHVCQUF1QixnQ0FBZ0MsS0FBSyxpQ0FBaUMsa0JBQWtCLG1CQUFtQix3QkFBd0IsOEJBQThCLEtBQUssY0FBYyw4QkFBOEIsb0JBQW9CLEtBQUssY0FBYyxtQkFBbUIsdUJBQXVCLDBCQUEwQixLQUFLLGtCQUFrQix1Q0FBdUMsc0JBQXNCLHdCQUF3QixvQkFBb0IsS0FBSyxjQUFjLG9CQUFvQixvQkFBb0IseUJBQXlCLEtBQUssc0JBQXNCLDhCQUE4QixjQUFjLGlCQUFpQixLQUFLLHFCQUFxQixtQkFBbUIsaUJBQWlCLEtBQUssdUJBQXVCLGNBQWMseUJBQXlCLGdCQUFnQixlQUFlLHVDQUF1Qyw4QkFBOEIsbUJBQW1CLG9EQUFvRCxtRkFBbUYsaUJBQWlCLEtBQUssa0JBQWtCLHVDQUF1QyxzQkFBc0Isd0JBQXdCLGtCQUFrQiwwQkFBMEIsb0JBQW9CLFNBQVMscUJBQXFCLG1DQUFtQyx5QkFBeUIsS0FBSyxzQkFBc0IsNEJBQTRCLGtCQUFrQixtQkFBbUIsZ0NBQWdDLG1CQUFtQixvQkFBb0IsNkJBQTZCLEtB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b0IsU0FBUyxxQkFBcUIsbUNBQW1DLHlCQUF5QixLQUFLLHNCQUFzQiw0QkFBNEIsa0JBQWtCLG1CQUFtQixnQ0FBZ0MsbUJBQW1CLG9CQUFvQiw2QkFBNkIsS0FBSyxtQkFBbUIsbUJBQW1CLG1DQUFtQyxLQUFLLHVCQUF1QixrQkFBa0IsS0FBSyxlQUFlLHVDQUF1QyxtQkFBbUIsMkJBQTJCLDZCQUE2QixnRkFBZ0YsS0FBSyx1QkFBdUIsdUJBQXVCLHdCQUF3QixLQUFLLDhCQUE4QixvQkFBb0IsS0FBSyxrQkFBa0IsZ0JBQWdCLGlCQUFpQixLQUFLLGdCQUFnQixnQ0FBZ0MseUJBQXlCLEtBQUssa0JBQWtCLHlCQUF5QixjQUFjLGNBQWMsa0JBQWtCLGdDQUFnQyxvQkFBb0IsMEJBQTBCLHlCQUF5QixLQUFLLHVCQUF1QixvQkFBb0IsS0FBSyx5QkFBeUIsMEJBQTBCLDRDQUE0QyxxQkFBcUIseUJBQXlCLEtBQUssd0JBQXdCLGlDQUFpQyxxREFBcUQsZ0RBQWdELGlEQUFpRCxrQkFBa0IsMEJBQTBCLDZEQUE2RCxLQUFLLHlCQUF5Qix5QkFBeUIsY0FBYyxjQUFjLGtCQUFrQixnQ0FBZ0Msb0JBQW9CLDBCQUEwQix5QkFBeUIsS0FBSyxrQkFBa0IscUJBQXFCLG9CQUFvQixnQ0FBZ0MsNEJBQTRCLEtBQUssbUJBQW1CO0FBQ3BpUztBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9TdHlsZXMvQXBwLmNzcz83YTBmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzcmMvQXBwLmNzcyAqL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogQ2hhbmdlIHRvIGEgdmVydGljYWwgbGF5b3V0IG9uIHNtYWxsIHNjcmVlbnMgKi9cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybzsgLyogQmFja2dyb3VuZCBjb2xvciAqL1xcclxcbiAgcGFkZGluZzogNXB4OyAvKiBBZGp1c3QgcGFkZGluZyBhcyBuZWVkZWQgKi9cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvKiBBbGlnbiBpdGVtcyB0byB0aGUgcmlnaHQgKi9cXHJcXG59XFxyXFxuLmhlYWRzaG90LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRzaG90LWNvbnRhaW5lciBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2MXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdjJ7XFxyXFxuICBwYWRkaW5nOiA1dmg7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQxe1xcclxcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiNmMGYwZjA7XFxyXFxufVxcclxcblxcclxcbi5kaXYze1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5yaWdodENvbnRlbnR7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdENvbnRlbnR7XFxyXFxuIFxcclxcbiAgZmxleDogMTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5taWRkbGVDb250ZW50e1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA3MHZoOyAvKiBBZGp1c3QgdGhlIHdpZHRoIGFzIG5lZWRlZCAqL1xcclxcbiAgaGVpZ2h0OiAzMHZoOyAvKiBBZGp1c3QgdGhlIGhlaWdodCBhcyBuZWVkZWQgKi9cXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudDJ7XFxyXFxuICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6YmxhY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgcGFkZGluZzogNTBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmRpdi1zZXJ2aWNle1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcnZpY2UtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAzMHZoO1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsbGVyRGl2e1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmRpbWd7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgIzkzODU4NSAycHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogRW5zdXJlIHRoZSBsaW5lIG9ubHkgdGFrZXMgdGhlIHdpZHRoIG9mIGl0cyBjb250ZW50ICovXFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2Utc3BhY2luZ3tcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2LmZvb3Rlci1zcGFjaW5nIHAge1xcclxcbiAgbWFyZ2luOiAzcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1kaXYge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwOyBcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEM4RUE7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMHB4OyBcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWxpbmtzIGEge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBBZGQgc29tZSBtYXJnaW4gYmV0d2VlbiB0aGUgbGlua3MgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm1vdmUtcmlnaHQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiOyAvKiBCbHVlIGNvbG9yLCBhZGp1c3QgYXMgbmVlZGVkICovXFxyXFxuICBjb2xvcjogI2ZmZjsgLyogV2hpdGUgdGV4dCBjb2xvciAqL1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4OyAvKiBBZGp1c3QgcGFkZGluZyBhcyBuZWVkZWQgKi9cXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbjoyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMsIGFkanVzdCBhcyBuZWVkZWQgKi9cXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1kaXYtYnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDsgXFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBDOEVBO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDBweDsgXFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kaXYtdGVzdHtcXHJcXG4gIHBhZGRpbmc6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvU3R5bGVzL0FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBQ2hCLHdGQUF3Rjs7QUFFeEY7RUFDRTtJQUNFLHNCQUFzQixFQUFFLGlEQUFpRDtFQUMzRTtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCLEVBQUUscUJBQXFCO0VBQ2xELFlBQVksRUFBRSw2QkFBNkI7RUFDM0MsYUFBYTtFQUNiLHlCQUF5QixFQUFFLDZCQUE2QjtBQUMxRDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1AsVUFBVTtBQUNaOztBQUVBOztFQUVFLE9BQU87RUFDUCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixXQUFXLEVBQUUsK0JBQStCO0VBQzVDLFlBQVksRUFBRSxnQ0FBZ0M7RUFDOUMsMkNBQTJDO0VBQzNDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIscUJBQXFCLEVBQUUsd0RBQXdEO0VBQy9FLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsc0NBQXNDO0FBQzVEOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsaUNBQWlDO0VBQzVELFdBQVcsRUFBRSxxQkFBcUI7RUFDbEMsa0JBQWtCLEVBQUUsNkJBQTZCO0VBQ2pELFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUUsc0NBQXNDO0VBQzFELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHNyYy9BcHAuY3NzICovXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBDaGFuZ2UgdG8gYSB2ZXJ0aWNhbCBsYXlvdXQgb24gc21hbGwgc2NyZWVucyAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvOyAvKiBCYWNrZ3JvdW5kIGNvbG9yICovXFxyXFxuICBwYWRkaW5nOiA1cHg7IC8qIEFkanVzdCBwYWRkaW5nIGFzIG5lZWRlZCAqL1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IC8qIEFsaWduIGl0ZW1zIHRvIHRoZSByaWdodCAqL1xcclxcbn1cXHJcXG4uaGVhZHNob3QtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZHNob3QtY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXYxe1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2MntcXHJcXG4gIHBhZGRpbmc6IDV2aDtcXHJcXG4gIG1hcmdpbi10b3A6IDMwdmg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudDF7XFxyXFxuICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6I2YwZjBmMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdjN7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0Q29udGVudHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0Q29udGVudHtcXHJcXG4gXFxyXFxuICBmbGV4OiAxO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pZGRsZUNvbnRlbnR7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDcwdmg7IC8qIEFkanVzdCB0aGUgd2lkdGggYXMgbmVlZGVkICovXFxyXFxuICBoZWlnaHQ6IDMwdmg7IC8qIEFkanVzdCB0aGUgaGVpZ2h0IGFzIG5lZWRlZCAqL1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50MntcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjpibGFjaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA1MHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZGl2LXNlcnZpY2V7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VydmljZS1ib3gge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDMwdmg7XFxyXFxuICBoZWlnaHQ6IDUwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5maWxsZXJEaXZ7XFxyXFxuICBoZWlnaHQ6IDUwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZGltZ3tcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSB7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAjOTM4NTg1IDJweDtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiBFbnN1cmUgdGhlIGxpbmUgb25seSB0YWtlcyB0aGUgd2lkdGggb2YgaXRzIGNvbnRlbnQgKi9cXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1zcGFjaW5ne1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuZm9vdGVyLXNwYWNpbmcgcCB7XFxyXFxuICBtYXJnaW46IDNweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWRpdiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7IFxcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwQzhFQTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwcHg7IFxcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbGlua3MgYSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIEFkZCBzb21lIG1hcmdpbiBiZXR3ZWVuIHRoZSBsaW5rcyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubW92ZS1yaWdodCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7IC8qIEJsdWUgY29sb3IsIGFkanVzdCBhcyBuZWVkZWQgKi9cXHJcXG4gIGNvbG9yOiAjZmZmOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yICovXFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7IC8qIEFkanVzdCBwYWRkaW5nIGFzIG5lZWRlZCAqL1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luOjIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycywgYWRqdXN0IGFzIG5lZWRlZCAqL1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWRpdi1idXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwOyBcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEM4RUE7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMHB4OyBcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdi10ZXN0e1xcclxcbiAgcGFkZGluZzogMTAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[2]!./src/Styles/App.css\n"));

/***/ })

});