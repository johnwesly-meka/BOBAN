import React from "react";

export default function Breadcrumb() {
  return (
    <div className="text-xs lg:text-sm text-gray-500 mb-3 overflow-x-auto whitespace-nowrap">
      <span className="hidden lg:inline">
        Home &gt; Organization &gt; Authentic Amazing Kids Inc &gt; Sites &gt;
        Plane, TX &gt; Libraries &gt; Cox library
      </span>
      <span className="lg:hidden">... &gt; Libraries &gt; Cox library</span>
    </div>
  );
}
