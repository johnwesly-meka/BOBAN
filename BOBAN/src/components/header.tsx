import { LogOut, Menu } from "lucide-react";
import React from "react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-600 p-2" onClick={onMenuClick}>
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-3xl lg:text-4xl text-gray-900">Media Library</h1>
          <p
            className="text-sm lg:text-base hidden sm:block"
            style={{ color: "#787878" }}
          >
            Helps you to organize your media
          </p>
        </div>
      </div>
      <button
        className="text-sm lg:text-base flex items-center"
        style={{ color: "#FF841F" }}
      >
        <LogOut className="w-4 h-4" style={{ color: "#FF841F" }} />
        SIGN OUT
      </button>
    </div>
  );
}
