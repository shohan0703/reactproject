function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        
        
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs px-2 py-1 rounded-md">
              DS
            </div>
            <span className="font-bold text-lg text-gray-900">Dev Stack</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed max-w-sm mb-4">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex space-x-4 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600">GitHub</a>
            <a href="#" className="hover:text-gray-600">Twitter</a>
            <a href="#" className="hover:text-gray-600">LinkedIn</a>
          </div>
        </div>

       
        <div>
          <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">Product</h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li><a href="#" className="hover:text-gray-800">Home</a></li>
            <li><a href="#" className="hover:text-gray-800">Technologies</a></li>
            <li><a href="#" className="hover:text-gray-800">Projects</a></li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">Company</h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li><a href="#" className="hover:text-gray-800">About</a></li>
            <li><a href="#" className="hover:text-gray-800">Contact</a></li>
            <li><a href="#" className="hover:text-gray-800">Careers</a></li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">Legal</h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-800">Terms of Service</a></li>
          </ul>
        </div>

      </div>

     
      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400">
        <p>© 2026 DevStack. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-gray-600">Privacy</a>
          <a href="#" className="hover:text-gray-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;