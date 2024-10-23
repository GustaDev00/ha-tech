export interface HeaderProps {
  title: React.ReactNode;
  text?: React.ReactNode;
  modal?: {
    content: React.ReactNode;
  };
  bg: {
    src: string;
    alt: string;
  };
  breadcrumb: string;
}
