/* WEBSITE PROTECTION SCRIPT - DO NOT REMOVE */
(function () {
  'use strict';

  // Disable Right-click
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }, false);

  // Disable specific key shortcuts
  document.addEventListener('keydown', function (e) {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+I / Cmd+Opt+I (Inspect)
    // Ctrl+Shift+J / Cmd+Opt+J (Console)
    // Ctrl+Shift+C / Cmd+Opt+C (Select Element)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
      e.preventDefault();
      return false;
    }

    // Ctrl+U / Cmd+Opt+U (View Source)
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }

    // Ctrl+S / Cmd+Opt+S (Save)
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
      e.preventDefault();
      return false;
    }

    // Ctrl+P / Cmd+Opt+P (Print)
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 80) {
      e.preventDefault();
      return false;
    }
  }, false);

  // Disable select and drag
  document.addEventListener('selectstart', function (e) { e.preventDefault(); }, false);
  document.addEventListener('dragstart', function (e) { e.preventDefault(); }, false);

  // Security: Constant Debugger loop to hinder inspection
  setInterval(function () {
    (function () {
      return false;
    }['constructor']('debugger')['call']());
  }, 200);

  // Detect DevTools console logging
  const check = function () {
    const start = new Date();
    debugger;
    const end = new Date();
    if (end - start > 100) {
      // DevTools might be open, we could refresh or redirect if needed
      // window.location.reload(); 
    }
  };
})();
