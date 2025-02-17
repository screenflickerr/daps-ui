import { Link } from '@tanstack/react-router';
import { FC } from 'react';

export const Nav: FC = () => {
  return (
    <nav className="flex flex-col">
      <ul>
        <li>
          <Link
            to="/settings"
            activeProps={{ className: 'text-blue-500' }}>
            Settings
          </Link>
        </li>
        <li>
          <Link
            to="/renamerr"
            activeProps={{ className: 'text-blue-500' }}>
            Renamerr
          </Link>
        </li>
      </ul>
    </nav>
  );
};
