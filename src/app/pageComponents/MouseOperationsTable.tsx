import * as React from "react";

import "./MouseOperationsTable.css";

export const MouseOperationsTable = () => {
  return (
    <table className="border-collapse border border-gray-400">
      <tbody>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 p-2">
            <strong>Mouse Operation</strong>
          </th>
          <th className="border border-gray-400 p-2">
            <strong>Keyboard Equivalent (Mac)</strong>
          </th>
          <th className="border border-gray-400 p-2">
            <strong>Keyboard Equivalent (Windows)</strong>
          </th>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">
            <strong>Click (to Activate)</strong>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Return</code> or <code>Spacebar</code>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Enter</code> or <code>Spacebar</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">
            <strong>Click (to Focus)</strong>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Tab</code> or <code>Shift + Tab</code>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Tab</code> or <code>Shift + Tab</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">
            <strong>Right-click (Context Menu)</strong>
          </td>
          <td className="border border-gray-400 p-2">No direct equivalent</td>
          <td className="border border-gray-400 p-2">
            <code>Shift + F10</code> or <code>Context Menu Key</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">
            <strong>Hover</strong>
          </td>
          <td className="border border-gray-400 p-2">No direct equivalent</td>
          <td className="border border-gray-400 p-2">No direct equivalent</td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">
            <strong>Close (i.e. a Modal/Popup)</strong>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Esc</code>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Esc</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">
            <strong>Navigate Menu Items</strong>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Arrow Up/Down</code> or <code>Home/End</code>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Arrow Up/Down</code> or <code>Home/End</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">
            <strong>Open Link in New Tab</strong>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Command + Return</code>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Ctrl + Enter</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">
            <strong>Scroll (Vertical)</strong>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Arrow Up/Down</code>, <code>Page Up/Page Down</code>,{" "}
            <code>Spacebar</code> (scroll down)
          </td>
          <td className="border border-gray-400 p-2">
            <code>Arrow Up/Down</code>, <code>Page Up/Page Down</code>,{" "}
            <code>Spacebar</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">
            <strong>Scroll (Horizontal)</strong>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Shift + Arrow Left/Right</code>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Shift + Arrow Left/Right</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">
            <strong>Zoom In/Out</strong>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Command + Plus (+)</code> or <code>Command + Minus (-)</code>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Ctrl + Plus (+)</code> or <code>Ctrl + Minus (-)</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">
            <strong>Select Text</strong>
          </td>
          <td className="border border-gray-400 p-2">
            <code>Shift</code> + Arrow keys
          </td>
          <td className="border border-gray-400 p-2">
            <code>Shift</code> + Arrow keys
          </td>
        </tr>
      </tbody>
    </table>
  );
};
