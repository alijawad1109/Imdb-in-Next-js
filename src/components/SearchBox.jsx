"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation'
export default function SearchBox() {
  // Changed from " " to "" for a truly empty initial state
  const [search, setSearch] = useState("");
  const router= useRouter()
  const handleSubmit=(e)=>{
    e.preventDefault();
    router.push(`/search/${search}`)
  }
  return (
    <form className="max-w-5xl mx-auto p-4 flex items-center gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full outline-none rounded-lg bg-white placeholder:text-gray-500 p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }} // Added for better visibility, adjust as needed
      />
      <button
        className="text-amber-400 disabled:text-gray-500"
        disabled={search.trim() === ""} // Updated condition to check for non-empty non-space content
      >
        Search
      </button>
    </form>
  );
}
