"use client";

import { useState } from "react";
import {
  Search,
  List,
  Grid3X3,
  MoreVertical,
  Play,
  Music2,
  Video,
  Image,
  CircleCheck,
  Clock,
  Filter,
} from "lucide-react";
import { TbLibraryPlus } from "react-icons/tb";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Breadcrumb from "@/components/breadcrumb";

// Mock data based on the screenshot
const mediaItems = [
  {
    id: 1,
    title: "The Transformation",
    subtitle: "God Seeks Availability Not Ability",
    author: "John Doe",
    type: "video",
    thumbnail:
      "https://media.istockphoto.com/id/1806011581/photo/overjoyed-happy-young-people-dancing-jumping-and-singing-during-concert-of-favorite-group.jpg?s=612x612&w=0&k=20&c=cMFdhX403-yKneupEN-VWSfFdy6UWf1H0zqo6QBChP4=",
    status: "available",
  },
  {
    id: 2,
    title: "The Triumphal Entry",
    subtitle: "Second Coming of Jesus Christ",
    author: "Christina Jose",
    type: "audio",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-kccywS_jmFcAa8aCO8KFbLMd31fKjIUT4g&s",
    status: "processing",
  },
  {
    id: 3,
    title: "David & Goliath",
    subtitle: "If God Is With You Why Can Stand Against",
    author: "David Joseph",
    type: "document",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRocuCVrktds5oswWEl00HmoFItBvQVGWPaw&s",
    status: "processing",
  },
  {
    id: 4,
    title: "Song Of Thanksgiving",
    subtitle: "Second Coming of Jesus Christ",
    author: "Larry Page",
    type: "video",
    thumbnail:
      "data:image/jpeg;base64,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",
    status: "available",
  },
  {
    id: 5,
    title: "The Parable Of The Talents",
    subtitle: "Consider Accountability Of Our Gifts",
    author: "Henry Ford",
    type: "video",
    thumbnail:
      "https://www.shutterstock.com/image-photo/holy-bible-acoustic-guitar-religious-260nw-2146981307.jpg",
    status: "available",
  },
  {
    id: 6,
    title: "David & Goliath",
    subtitle: "If God Is With You Why Can Stand Against",
    author: "Rose Felix",
    type: "audio",
    thumbnail:
      "data:image/jpeg;base64,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",
    status: "available",
  },
];

export default function MediaLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-5 h-5 text-green-500" />;
      case "audio":
        return <Music2 className="w-5 h-5 text-green-500" />;
      case "document":
        return <Image className="w-5 h-5 text-green-500" />;
      default:
        return <Play className="w-5 h-5 text-green-500" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "available":
        return <CircleCheck className="w-5 h-5 text-green-500 stroke-2" />;
      case "processing":
        return <Clock className="w-5 h-5 text-green-500 stroke-2" />;
      default:
        return <Clock className="w-5 h-5 text-green-500 stroke-2" />;
    }
  };

  const filteredItems = mediaItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden relative p-2 sm:p-4 lg:p-6 xl:p-8">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 xl:ml-72 flex flex-col h-full relative z-10 bg-white/50 backdrop-blur-sm lg:rounded-r-lg lg:rounded-l-none rounded-lg">
        {/* Fixed Header and Breadcrumb Container */}
        <div className="flex-shrink-0 bg-gray-50/80 backdrop-blur-sm px-4 sm:px-5 lg:px-6 pt-3 sm:pt-4 lg:pt-5">
          {/* Header */}
          <Header onMenuClick={() => setSidebarOpen(true)} />

          {/* Breadcrumb */}
          <Breadcrumb />
        </div>

        {/* Scrollable Content */}
        <div className=" bg-green-50/70 flex-1 flex flex-col px-4 sm:px-5 lg:px-6 pb-2 sm:pb-3 lg:pb-4 min-h-0">
          {/* Controls and Media List Container */}
          <div className="bg-green-50/70 backdrop-blur-sm p-2 sm:p-3 lg:p-4 flex flex-col flex-1 min-h-0">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row lg:flex-row lg:items-center justify-between mb-3 gap-3">
              <div className="px-2 sm:px-4 py-2 sm:py-3 rounded-lg">
                <h2 className="text-lg sm:text-xl lg:text-2xl flex items-center gap-2 text-gray-500">
                  Your Media Libraries
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 ml-2 sm:ml-4 lg:ml-10" />
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 lg:gap-4 lg:ml-auto">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <List className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                    <Grid3X3 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  </div>

                  <button className="bg-green-500 text-white px-3 sm:px-3 lg:px-4 py-2 rounded-lg flex items-center gap-2 text-xs sm:text-sm lg:text-base">
                    <TbLibraryPlus className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">ADD MEDIA</span>
                    <span className="sm:hidden">ADD</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Media List */}
            <div className="bg-green-50/70 rounded-lg border border-gray-100 flex flex-col flex-1 min-h-0">
              {/* Fixed Desktop Table Header */}
              <div className="hidden lg:grid grid-cols-12 gap-6 py-2 px-3 border-b border-gray-100 text-sm font-medium text-gray-400 uppercase tracking-wider flex-shrink-0">
                <div className="col-span-1">#</div>
                <div className="col-span-3 flex items-center gap-2">
                  MEDIA
                  <Filter className="w-3 h-3 cursor-pointer hover:text-gray-700 fill-current" />
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-3 flex items-center gap-2">
                  UPLOADED BY
                  <Filter className="w-3 h-3 cursor-pointer hover:text-gray-700 fill-current" />
                </div>
                <div className="col-span-1 flex items-center gap-2">
                  TYPE
                  <Filter className="w-3 h-3 cursor-pointer hover:text-gray-700 fill-current" />
                </div>
                <div className="col-span-2">STATUS</div>
                <div className="col-span-1"></div>
              </div>

              {/* Scrollable Media Items */}
              <div className="flex-1 overflow-y-auto">
                <div className="divide-y divide-gray-50">
                  {filteredItems.map((item, index) => (
                    <div key={item.id}>
                      {/* Desktop Layout */}
                      <div className="hidden lg:grid grid-cols-12 gap-6 py-2 px-3 hover:bg-gray-50">
                        <div className="col-span-1 text-gray-500 font-medium">
                          {index + 1}
                        </div>

                        <div className="col-span-3 flex items-center gap-3">
                          <div className="w-16 h-12 bg-gray-200 rounded overflow-hidden">
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="col-span-1"></div>

                        <div className="col-span-3 flex items-center">
                          <span className="text-gray-700">{item.author}</span>
                        </div>

                        <div className="col-span-1 flex items-center">
                          <div className="flex items-center gap-2 text-gray-600">
                            {getTypeIcon(item.type)}
                          </div>
                        </div>

                        <div className="col-span-2 flex items-center">
                          <div className="flex items-center">
                            {getStatusIcon(item.status)}
                          </div>
                        </div>

                        <div className="col-span-1 flex items-center">
                          <button className="p-1 text-green-500 hover:text-green-600 -ml-2">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Mobile Card Layout */}
                      <div className="lg:hidden p-4 hover:bg-gray-50">
                        <div className="flex items-start gap-3">
                          <div className="w-16 h-12 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-gray-900 truncate">
                                  {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 truncate">
                                  {item.subtitle}
                                </p>
                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                  <span className="truncate">
                                    {item.author}
                                  </span>
                                  <div className="flex items-center gap-1">
                                    {getTypeIcon(item.type)}
                                    <span className="capitalize">
                                      {item.type}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 ml-2">
                                <div className="flex items-center gap-1">
                                  {getStatusIcon(item.status)}
                                </div>
                                <button className="p-1 text-green-500 hover:text-green-600 -ml-2">
                                  <MoreVertical className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
