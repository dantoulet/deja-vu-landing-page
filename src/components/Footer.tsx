import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="h-10 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto h-full flex items-center justify-center gap-4">
        <a 
          href="/terms" 
          className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          Terms
        </a>
        <a 
          href="/cookie-policy" 
          className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          Cookie Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
