import React from "react";
import { Grid3X3, FileText, Download, X } from "lucide-react";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaGooglePlay } from "react-icons/fa6";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`
    fixed top-2 bottom-2 left-2 sm:top-4 sm:bottom-4 sm:left-4 lg:left-6 xl:left-8 z-50 w-56 sm:w-60 lg:w-64 xl:w-72 bg-slate-800 text-white transform transition-transform duration-300 ease-in-out lg:rounded-l-lg lg:rounded-r-none rounded-lg overflow-y-auto
    ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  `}
    >
      {/* Sidebar Content with Padding */}
      <div className="p-3 sm:p-4 lg:p-6 xl:p-8 h-full flex flex-col">
        {/* Mobile Close Button */}
        <div className="relative mb-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden mb-3">
              <img
                src="/logo.png"
                alt="BOBAN Logo"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <h1 className="font-bold text-lg">BOBAN</h1>
                <img
                  src="/accrediation-icon-1.png"
                  alt="Accreditation"
                  className="w-5 h-5"
                />
              </div>
              <p className="text-sm font-semibold text-gray-300">
                GATEWAY CHURCH
              </p>
              <p className="text-xs text-gray-400">Organization Admin</p>
            </div>
          </div>
          <button
            className="lg:hidden text-white p-2 absolute top-0 right-0"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-6">
          <div className="grid grid-cols-2 gap-3 lg:gap-4 ">
            <div className="text-center p-2 lg:p-3 rounded-lg hover:bg-slate-600 transition-colors cursor-pointer">
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded mx-auto mb-1 flex items-center justify-center">
                <Grid3X3 className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" />
              </div>
              <p className="text-xs text-green-500">Organization</p>
            </div>
            <div className="text-center p-2 lg:p-3 rounded-lg">
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded mx-auto mb-1 flex items-center justify-center">
                <BsFillCollectionPlayFill className="w-6 h-6 lg:w-7 lg:h-7 text-orange-500" />
              </div>
              <p className="text-xs text-orange-500">Library</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            <div className="text-center p-2 lg:p-3 rounded-lg hover:bg-slate-600 transition-colors cursor-pointer">
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded mx-auto mb-1 flex items-center justify-center">
                <MdOutlinePlaylistPlay className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" />
              </div>
              <p className="text-xs text-green-500">Playlist</p>
            </div>
            <div className="text-center p-2 lg:p-3 rounded-lg hover:bg-slate-600 transition-colors cursor-pointer">
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded mx-auto mb-1 flex items-center justify-center">
                <Download className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" />
              </div>
              <p className="text-xs text-green-500">Packs</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            <div className="text-center p-2 lg:p-3 rounded-lg hover:bg-slate-600 transition-colors cursor-pointer">
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded mx-auto mb-1 flex items-center justify-center">
                <FileText className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" />
              </div>
              <p className="text-xs text-green-500">Plans</p>
            </div>
            <div className="text-center p-2 lg:p-3 rounded-lg hover:bg-slate-600 transition-colors cursor-pointer">
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded mx-auto mb-1 flex items-center justify-center">
                <CgProfile className="w-6 h-6 lg:w-7 lg:h-7 text-green-500" />
              </div>
              <p className="text-xs text-green-500">Profile</p>
            </div>
          </div>
        </nav>

        <div className="mt-12 text-center">
          <div className="text-teal-400 font-bold text-4xl leading-none">
            amazing
          </div>
          <div className="text-teal-400 font-bold text-4xl leading-none -mt-1">
            play
          </div>
          <div className="mt-4">
            <FaGooglePlay className="w-8 h-8 text-teal-400 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
