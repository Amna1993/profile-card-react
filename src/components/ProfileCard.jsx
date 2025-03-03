import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const ProfileCard = ({ name, role, bio, avatar, twitter, linkedin, github }) => {
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-center w-96 mx-auto transform transition-all hover:scale-105 hover:shadow-2xl">
      {/* Profile Image */}
      <div className="relative">
        <div className="w-24 h-24 mx-auto rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <img
            className="w-full h-full object-cover rounded-full border-4 border-white"
            src={avatar}
            alt={`${name}'s avatar`}
          />
        </div>
      </div>

      {/* Name & Role */}
      <h2 className="text-2xl font-bold mt-4 text-gray-800">{name}</h2>
      <p className="text-gray-600 text-sm">{role}</p>
      <p className="text-gray-500 mt-2 px-4">{bio}</p>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-4">
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400 text-xl hover:text-blue-600 transition" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 text-xl hover:text-blue-900 transition" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 text-xl hover:text-black transition" />
          </a>
        )}
      </div>

      {/* Follow Button */}
      <button className="mt-5 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition">
        Follow
      </button>
    </div>
  );
};

export default ProfileCard;
