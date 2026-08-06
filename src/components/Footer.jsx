export function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-center">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Jane Doe. All rights reserved.
      </p>
    </footer>
  );
}
