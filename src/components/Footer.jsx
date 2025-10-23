import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaCommentDots } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-accent text-gray-200 py-12 px-6 md:px-20 border-t">
      {/* Top Section */}
      <div className="grid md:grid-cols-5 gap-10 mb-10">
        {/* Column 1 — Logo + Text + Button */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="bg-yellow-400 rounded-full p-2 flex items-center justify-center">
              <div className="bg-blue-600 w-3 h-3 rounded-sm"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-200">Global Enviro</h2>
          </div>

          <p className="text-gray-500 mb-6 leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit.
          </p>

          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
            <FaCommentDots /> Start Live Chat
          </button>
        </div>

        {/* Column 2 — Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        {/* Column 3 — Help */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Help</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4 — Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Free eBooks</a></li>
            <li><a href="#">Development Tutorial</a></li>
            <li><a href="#">How to - Blog</a></li>
            <li><a href="#">YouTube Playlist</a></li>
          </ul>
        </div>

        {/* Column 5 — Extra Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Extra Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-200" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© Copyright 2025, All Rights Reserved by Postcraft</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"><FaTwitter /></a>
          <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"><FaFacebookF /></a>
          <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"><FaInstagram /></a>
          <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
}
