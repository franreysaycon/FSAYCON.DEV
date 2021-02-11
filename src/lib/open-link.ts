export const openLinkInNewTab = (link: string): void => {
  if (typeof window !== 'undefined') {
    window.open(link, '_target');
  }
};
  
export const openMailTo = (email: string): void => {
  if (typeof window !== 'undefined') {
    window.open(`mailto:${email}`, '_target');
  }
};
