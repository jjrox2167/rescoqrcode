import React from 'react';

const AppDownloadLanding = () => {
  const AppleIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  const PlayStoreIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
    </svg>
  );

  return (
    <div className='text-center'>
      
    <div className="min-h-screen w-screen bg-gradient-to-br from-red-200 via-red-200 to-red-400 flex items-center justify-center p-4">
      
      <div className="bg-white bg-opacity-95 rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Download Apps
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Get the apps you need for productivity and communication
          </p>
        </div>

        {/* Intermedia Unite Section */}
        <div className="mb-8 p-6 bg-white bg-opacity-70 rounded-2xl border border-white border-opacity-30 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Intermedia Unite</h2>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Complete business communications platform with calling, messaging, and collaboration tools
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://apps.apple.com/us/app/intermedia-unite/id1127355812"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-black text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors duration-300 min-w-32"
            >
              <AppleIcon />
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=net.intermedia.mobile_callscape&referrer=utm_source%3Duniteapps%26utm_medium%3Dsite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors duration-300 min-w-32"
            >
              <PlayStoreIcon />
              Google Play
            </a>
          </div>
        </div>

        {/* Microsoft Office Section */}
        <div className="mb-8 p-6 bg-white bg-opacity-70 rounded-2xl border border-white border-opacity-30 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Microsoft Office</h2>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Send Email, conenct on Microsoft Teams, create, edit, and collaborate on documents, spreadsheets, and presentations
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://apps.apple.com/us/app-bundle/microsoft-365-productivity-apps/id1805022391"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-black text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors duration-300 min-w-32"
            >
              <AppleIcon />
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/dev?id=6720847872553662727"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors duration-300 min-w-32"
            >
              <PlayStoreIcon />
              Google Play
            </a>
          </div>
        </div>

        <div className="text-xs text-gray-400">
          <p>Tap the buttons above to download from your device&apos;s app store</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AppDownloadLanding;