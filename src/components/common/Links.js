import Link from 'next/link'

export const LinkIcon = ({ href, text, children }) => (
  <Link href={href} className="flex items-center underline">
    <span className="me-2">
      {children}
    </span>
    <span>
      {text}
    </span>
  </Link>
);